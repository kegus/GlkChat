Template.commentsList.helpers({
  comments: function() {
    return Comments.find({}, {sort: {submitted: -1}});
  }
});