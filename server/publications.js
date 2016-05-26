Meteor.publish('comments', function() {
  //return Comments.find();
    var cursor = Comments.find();
    /*while(cursor.hasNext()) {
        obj = cursor.next();
        obj["userName"] = users.findOne().profile.name;
    }*/
    cursor.forEach(function(obj) {
        obj.userName = "Tom Balda"; //myUsers.findOne().profile.name; //
    });
    //cursor.rewind();
    return cursor;
});
