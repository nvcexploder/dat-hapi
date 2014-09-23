var Editor = require('dat-editor-prebuilt');

module.exports.editor = {
	description: 'Precompiled DAT editor',
	handler: function (request, reply) {
		reply(Editor.toString());
	}
}