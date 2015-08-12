module.exports = {
	app: {
		files: {
			'<%= paths.dest.js %>/libs.js': [
				'<%= paths.src.bower %>/jquery/dist/jquery.js'
			]
		}
	}
};