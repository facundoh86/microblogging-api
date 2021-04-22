var express = require('express');
var router  = express.Router();

var mongoose = require('mongoose');
var User     = require('../models/User');
var db       = mongoose.connection;

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json({
    'users':[{
      'id':123,
      'name': "John",
      'phones':{
        'home':"800-123-4567",
        'mobile':"800-123-1234"
      },
      'email': ["jd@example.com", "jd@example.org"],
      'dateOfBirth':"1980-01-02T00:00:00.000Z",
      'registered': true
    },
    {
      'id':456,
      'name': "Nemesio Tordero",
      'phones':{
        'home':"800-123-3498",
        'mobile':"800-123-1278"
      },
      'email': ["pt@example.com", "pt@example.org"],
      'dateOfBirth':"1983-01-09T00:00:00.000Z",
      'registered': false
    }
  ]
  });
});

/*Get de un usuario por su ID*/
router.get('/:id', (req, res) => {
  if(req.params.id == '123'){
    res.json({
      'id':123,
      'name': "Eladio Guardiola",
      'phones':{
        'home':"800-123-4567",
        'mobile':"800-123-1234"
      },
      'email': ["jd@example.com", "jd@example.org"],
      'dateOfBirth':"1980-01-02T00:00:00.000Z",
      'registered': true
    });

  }else 
      res.status(404).send('Lo siento, el item no se ha encontrado!');
});

/* GET del listado de usuarios ordenado por fecha de creación */

router.get('/', ( req, res, next ) => {
  User.find().sort('-creationdate').exec(( err, users ) => {
    if(err) res.status(500).send(err);
    else res.status(200).json(users);
  });
});

/*GET  de un unico usuario oor su ID */

router.get('/:id', ( req, res, next) => {
  User.findById(req.params.id, ( err, userinfo ) => {
    if(err) res.status(500).send(err);
    else res.status(200).json(userinfo);;
  });
});

/** POST de un nuevo usuario
 */

router.post('/', ( req, res, next) => {
  User.create(req.body, ( err, userinfo ) => {
    if(err) res.status(500).send(err);
    else res.sendStatus(200);
  })
})

router.post('/', (req, res) => {

  var new_user = req.body;
  //TODO: (hacer algo con el nuevo usuario)
  res.status(200).send(`Usuario  ${req.body.name} ha sido añadido correctamente`);

});

/**PUT de un usuario por su ID */
router.put('/:id', (req, res) => {
  var update_user = req.body;
  //TODO: (hacer algo con el nuevo usuario)
  res.status(200).send(`Usuario ${req.body.name} ha sido actualizado satisfactoriamente`);
});

/**DELETE de un usuario por su ID */

router.delete('/:id', (req, res) => {
  //TODO: (hacer algo con el usuario)

  res.status(200).send(`Usuario con ID ${req.params.id} ha sido borrado satisfactoriamente`);
});



module.exports = router;
