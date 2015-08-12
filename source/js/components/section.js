var UI = UIkit

module.exports = {
	// defaults used in this.options
    defaults: {
        darkenColor: '#CCC',
    },

    boot: function() {
        var $this = this;

        UI.ready(function(context) {

            UI.$('[data-uk-section]', context).each(function() {

                var section = UI.$(this);

                if (!section.data("section")) {
                    var obj = UI.section(section, UI.Utils.options(section.attr("data-uk-section")));
                }
            });
        });
    },

    init: function() {
        var $this = this;

        this.darken();

        this.on({
            mouseenter : function(e) { $this.lighten(); },
            mouseleave : function(e) { $this.darken(); }
        });
    },

    lighten: function() {
        this.element.css('backgroundColor', '#FFF');
    },

    darken: function() {
        this.element.css('backgroundColor', this.options.darkenColor);
    }
}
