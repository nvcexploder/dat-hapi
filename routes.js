var Handlers = require('./handlers');


module.exports = [

	{path: '/', method: '*', config: Handlers.editor },
	{path: '/api', method: '', config: }
// 	{path: '/api/blobs/:key', method: '', config: },
// 	{path: '/api/bulk', method: '', config: },
// 	{path: '/api/changes', method: '', config: },
// 	{path: '/api/csv', method: '', config: },
// 	{path: '/api/login', method: '', config: },
// 	{path: '/api/logout', method: '', config: },
// 	{path: '/api/manifest', method: '', config: },
// 	{path: '/api/metadata', method: '', config: },
// 	{path: '/api/pull', method: '', config: },
// 	{path: '/api/push', method: '', config: },
// 	{path: '/api/rpc', method: '', config: },
// 	{path: '/api/rows', method: '', config: },
// 	{path: '/api/rows/:key', method: '', config: },
// 	{path: '/api/rows/:key/:filename', method: '', config: },
// 	{path: '/api/stats', method: '', config: },

// 	{path: '*', method: '', config: },
]

