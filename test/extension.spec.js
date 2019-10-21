var assert = require('assert'),
    exec = require('child_process').exec,
    Extension = require('openframe-extension'),
    VLCExtension = require('../extension')

describe('instantiation', function() {
    it('should be an instance of type Extension', function() {
        assert(VLCExtension instanceof Extension)
    })
})

describe('properties', function() {
    it('should include all required format properties', function() {
        var format = VLCExtension.props.format

        assert(format.name)
        assert(typeof format.name === 'string')

        assert(format.display_name)
        assert(typeof format.display_name === 'string')

        assert(format.download !== undefined)
        assert(typeof format.download === 'boolean')

        assert(format.start_command)
        assert(typeof format.start_command === 'string' || typeof format.start_command === 'function')

        assert(format.end_command)
        assert(typeof format.end_command === 'string')
    })
})


