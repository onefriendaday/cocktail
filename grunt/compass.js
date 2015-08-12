module.exports = {
	"dev": {
		"options": {
			"sassDir": "<%= paths.src.css %>",
			"cssDir": "<%= paths.dest.css %>",
			"outputStyle": "compressed",
			"sourcemap": false,
			"require": [
				"sass-globbing"
			]
		}
	}
};