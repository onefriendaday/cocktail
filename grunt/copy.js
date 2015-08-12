module.exports = {
	"fonts": {
		"files": [{
			"expand": true,
			"cwd": "<%= paths.src.fonts %>",
			"src": ["**/*"],
			"dest": "<%= paths.dest.fonts %>"
		}]
	},
	"images": {
		"files": [{
			"expand": true,
			"cwd": "<%= paths.src.images %>",
			"src": ["**/**"],
			"dest": "<%= paths.dest.images %>"
		}]
	}
};