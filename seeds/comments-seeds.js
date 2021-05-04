const { Comment } = require('../models');

const commentsData = [
  {
    user_id: 2,
    comments: 'Do you happen to be selling a toaster? If so, can you set it aside for me?',
    card_id: 1
  },
  {
    user_id: 6,
    comments: 'Hey, you guys ever run horror movies?',
    card_id: 3
  },  
  {
    user_id: 8,
    comments: 'Are you free this weekend around 5? I really need my lawn done but I will not be home during the day.',
    card_id: 4
  },  
  {
    user_id: 5,
    comments: 'How much yard work can get a knit blanket? And can we discuss pattern? My grandmother has one she really wants, but she does not have the skill to make it.',
    card_id: 5
  },  
  {
    user_id: 4,
    comments: 'Cool! Gonna have any old jewelry? I LOVE old jewelry!',
    card_id: 1
  },  
  {
    user_id: 5,
    comments: 'Will it still be going in the afternoon?',
    card_id: 1
  },  
  {
    user_id: 6,
    comments: 'I have building tools I can bring.',
    card_id: 2
  },  
  {
    user_id: 1,
    comments: 'The grandkids would love this, but the youngest has a short attention span. Is there a play area?',
    card_id: 3
  },  
  {
    user_id: 6,
    comments: 'Can you handle a hill? If so, I would love to try and schedule you for a Wednesday eveing. I would pay extra for the hill.',
    card_id: 4
  },  
  {
    user_id: 7,
    comments: 'How crowded is it usually? My brother would love this, but he hates crowds.',
    card_id: 3
  },  
  {
    user_id: 3,
    comments: 'I can help for an hour.',
    card_id: 2
  },
];

const seedComments = () => Comment.bulkCreate(commentsData);

module.exports = seedComments;