module.exports = {
	options: {
		transform: ['partialify', 'debowerify']
	},
	dist: {
		files: {
			'<%= paths.dest.js %>/app.js': '<%= paths.src.js %>/index.js'
		}
	}
};