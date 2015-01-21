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

homestar.cookbook("Basement");
homestar.recipe({
    name: "Lights",
    value: homestar.value.boolean,
    watch: [ lights ],
    oninit: function(context) {
        // 30 minutes after sunset
        homestar.timers.sunset(30 * 60, function(when) {
            lights.set(":on", true);
        });

        // 30 minutes before sunrise
        homestar.timers.sunrise(-30 * 60, function(when) {
            lights.set(":on", false);
        });
    },
    onclick: function(context, value) {
        lights.set(':on', value);

        context.message("Lights are", value ? "on" : "off");
        context.done();
    }
});
