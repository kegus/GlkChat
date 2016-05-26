// Fixture data 
if (Comments.find().count() === 0) {
  var now = new Date().getTime();

  // create two users
  var tomId = Meteor.users.insert({
    profile: {name: 'Tom Coleman'}
  });
  var tom = Meteor.users.findOne(tomId);

  Comments.insert({
    commentText: 'First test message',
    userId: tomId._id,
    author: tom.profile.name,
    submitted: new Date(now - 7 * 3600 * 1000),
    upvoters: [], votes: 0
  });
}