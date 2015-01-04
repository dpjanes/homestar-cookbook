/*
 *  wemo-darkness.js
 *
 *  David Janes
 *  IOTDB.org
 *  2015-01-04
 *
 *  Turn lights on at night
 */

var homestar = require('homestar');
iot = homestar.iot();

lights = iot.connect('WeMoSwitch')
// lights = iot.connect('WeMoSwitch').with_name("Christmas WeMo")
// lights = iot.connect('LIFXLight')

homestar.recipe({
    group: "Basement",
    name: "Lights",
    value: homestar.value.boolean,
    watch: [ lights ],
    oninit: function(context) {
        homestar.timers.sunset(60 * 60, function(when) {
            lights.set(":on", true);
        });

        homestar.timers.sunset(60 * 60, function(when) {
            lights.set(":on", false);
        });
    },
    onclick: function(context, value) {
        lights.set(':on', value);

        context.message("Lights are", value ? "on" : "off");
        context.done();
    }
});
