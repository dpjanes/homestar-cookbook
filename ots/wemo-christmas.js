/*
 *  wemo.js
 *
 *  David Janes
 *  IOTDB.org
 *  2014-12-31
 *
 *  This will turn a WeMo Switch on and off
 */

var homestar = require('homestar');

homestar = require('homestar');
iot = homestar.iot();

wemos = iot.connect('WeMoSwitch')

homestar.recipe({
    group: "Christmas",
    name: "Tree",
    values: [
        "On",
        "Off",
    ],
    run: function(context, value) {
        var v = false;
        if (value == "On") {
            v = true;
        } else if (value == "Off") {
            v = false;
        } else {
            return;
        }

        wemos.set(':on', v);

        context.message("Christmas tree is", v ? "on" : "off");
        context.done();
    }
});
