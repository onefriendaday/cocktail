module.exports = {
	app: {
		files: {
			'<%= paths.dest.js %>min/app.js': [
				'<%= paths.dest.js %>/app.js'
			]
		}
	}
};