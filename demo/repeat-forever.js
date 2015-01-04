/*
 *  repeat-forever.js
 *
 *  David Janes
 *  IOTDB.org
 *  2014-12-30
 *
 *  This will broadcast Count=0, Count=1, Count=3
 *  and so on when pushed
 */

var homestar = require('homestar');

homestar.recipe({
    group: "Demo",
    name: "Repeat Forever",
    onclick: function(context) {
        context.message("");

        var count = 0;
        setInterval(function() {
            context.message("Count=" + count);
            count++;
        }, 3000);
    }
});
