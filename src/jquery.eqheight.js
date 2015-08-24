/**
 * jQuery.eqheight
 *
 * (a) Wil Neeley
 * (c) Code may be freely distributed under the MIT license.
 */
;(function ( $, window, document, undefined ) {

  "use strict";

  var
    plugin_name   = 'eqheight';

  // Plugin constructor
  function Plugin( elements, target ) {
    this._name = plugin_name;
    this.elements = elements;
    this.target = $(target);
    this.init();
  }

  // Extend plugin prototype
  $.extend(Plugin.prototype, {

    // Initialization method - plugin bootstrap
    init: function() {
      var
        height    = $(this.target).outerHeight();

      // Set element(s) height
      $(this.elements).outerHeight(height);
    }
  });

  // Plugin wrapper
  $.fn[plugin_name] = function ( target ) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + plugin_name)) {
        $.data(this, 'plugin_' + plugin_name, new Plugin( this, target ));
      }
    });
  };

})( jQuery, window, document );
