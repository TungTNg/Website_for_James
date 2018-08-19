( function( $ ) {
	// Drastically modified from the function in the WordPress Twenty Fifteen theme
	// Original source: https://github.com/WordPress/WordPress/blob/master/wp-content/themes/twentyfifteen/js/functions.js

	// $( '.dropdown-toggle' ).click( function( e ) {
	// 	var _this = $( this );
	// 	e.preventDefault();
	// 	_this.toggleClass( 'toggle-on' );
	// 	_this.parent().next( '.sub-menu' ).toggleClass( 'toggled-on' );
	// 	_this.attr( 'aria-expanded', _this.attr( 'aria-expanded' ) === 'false' ? 'true' : 'false' );
	// } );

	$( '.has-children' ).click( function( e ) {
		var _this = $( this );
		_this.find('a button').toggleClass('toggle-on');
		_this.children().children().next( '.dropdown-toggle' ).toggleClass( 'toggle-on' );
		_this.children().next( '.sub-menu' ).toggleClass( 'toggled-on' );	} );

})( jQuery );
