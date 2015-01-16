/*
 *  repeat-3.js
 *
 *  David Janes
 *  IOTDB.org
 *  2014-12-30
 *
 *  This will broadcast Count=0, Count=1, Count=3
 *  when pushed.
 */

var homestar = require('homestar');

homestar.cookbook("Demo");
homestar.recipe({
    name: "Repeat 3",
    onclick: function(context) {
        context.message("");

        var count = 0;
        var id = setInterval(function() {
            context.message("Count=" + count);
            if (count++ >= 3) {
                clearInterval(id);
                context.done();
            }
        }, 3000);
    }
});
