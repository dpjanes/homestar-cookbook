/*
 *  wemo-christmas.js
 *
 *  David Janes
 *  IOTDB.org
 *  2014-12-31
 *
 *  This will turn a WeMo Switch on and off
 */

var homestar = require('homestar');
iot = homestar.iot();

lights = iot.connect('WeMoSwitch')
// lights = iot.connect('WeMoSwitch').with_name("Christmas WeMo")
// lights = iot.connect('LIFXLight')

homestar.cookbook("Christmas");
homestar.recipe({
    name: "Tree",
    value: homestar.value.boolean,
    watch: [ lights ],
    oninit: function(context) {
        /* turn off at 11pm */
        timers.day_timer({
            hour: 23
        }, function(event) {
            lights.set(":on", false);
        });

        /* turn on at 7:30a */
        timers.day_timer({
            hour: 7,
            minute: 30
        }, function(event) {
            lights.set(":on", true);
        });
    },
    onclick: function(context, value) {
        lights.set(':on', value);

        context.message("Christmas tree is", value ? "on" : "off");
        context.done();
    }
});
