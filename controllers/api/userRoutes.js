const router = require('express').Router();
const { User, Card, Comment } = require('../../models');
const geoip = require('geoip-lite');
const sequelize = require('sequelize');
const { getDistanceLatLonToMiles } = require('../../utils/geo');

//Retrieve all Users api
router.get('/', async (req, res) => {

  const userData = await User.findAll({
    attributes: {
      exclude: ['password']
    },
  }).catch((err) => {
      res.json(err);
  });
  res.json(userData);
});

//Signup new user 
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
      console.log(userData);
    });
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

//Login as existing user
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try{
    const editUser = await User.update(
      {
        where: {
          id: req.params.id,
        }
      },
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        organization: req.body.organization,
        event_time: req.body.event_time,
      }
      )
    res.json(200).json(editUser);
    } catch (err) {
      res.json(err);
    }
});

//Logout Route
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
