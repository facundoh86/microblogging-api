var express = require('express');
var router = express.Router();

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

/** POST de un nuevo usuario
 */

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
