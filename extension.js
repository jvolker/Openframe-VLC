var pjson = require('./package.json'),
    debug = require('debug')('openframe:vlc'),
    Extension = require('openframe-extension')

/**
 *
 * Extension initialization method.
 *
 * Called when the extension (and its dependencies) have been installed.
 *
 * @param  {object} OF An interface provided to extensions giving limited access to the frame environment
 */

module.exports = new Extension({
    format: {
        // the name should be the same as the package name
        'name': pjson.name,
        // this is what might get displayed to users
        'display_name': 'VLC',
        'download': false,
        'start_command': function(options, tokens) {

            let command = 'cvlc --loop --no-video-title --quiet ' + tokens['$url']
            // let command = __dirname + '/startVLC.sh ' + tokens['$url']; //

            return command;
        },
        'end_command': 'pkill -f vlc'
    }
});
