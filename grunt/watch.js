module.exports = {
	compass: {
		files: ["<%= paths.src.css %>/**/*.scss"],
		tasks: ["compass"],
		options: {
			"spawn": false
		}
	},
	scripts: {
		files: ["<%= paths.src.js %>/**/*.js", "<%= paths.src.js %>/**/*.html"],
		tasks: ["concat", "browserify"],
		options: {
			"spawn": false
		}
	},
	fonts: {
		files: ["<%= paths.src.fonts %>/**/*"],
		tasks: ["copy:fonts"],
		options: {
			"spawn": false
		}
	},
	images: {
		files: ["<%= paths.src.images %>/**/*"],
		tasks: ["copy:images"],
		options: {
			"spawn": false
		}
	}
};