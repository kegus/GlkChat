Comments = new Mongo.Collection('comments');

Meteor.methods({
  commentInsert: function(commentAttributes) {
    check(this.userId, String);
    check(commentAttributes, {
      commentText: String
    });

    var user = Meteor.user();
    comment = _.extend(commentAttributes, {
        userId: user._id,
        author: user.username,
        submitted: new Date()
    });
    
    // create the comment, save the id
    comment._id = Comments.insert(comment);
    
    return comment._id;
  }
});
