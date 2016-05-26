Template.commentItem.helpers({
    /*author: function() {
        //return this.userId.fetch();
        var obj = this.userId;
        var s = '';
        for (key in obj) {
            s += key + ' = ' + obj[key] + '; ';
        }
        return s;
    },*/
    submittedText: function() {
        return this.submitted.toString();
    }
});