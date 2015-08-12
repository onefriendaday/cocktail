var jQuery = require('jquery')
window.jQuery = jQuery

var Components = {
	// compontents from uikit
	uikit: require('uikit'),
	tooltip: require('uikit/js/components/tooltip'),
	// my own compontents
	section: UIkit.component('section', require('./components/section'))
}

/*
Uncomment these for vuejs components

var Vue = require('vue')
Vue.config.debug = true

window.VueGlobal = new Vue({
	el: 'body',
	components: {
		table: require('./components/section.js')
	}
})
*/