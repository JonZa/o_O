/*------------------------------------------------------- .outline() */
(function($) {
	$.fn.o_O = function(colour) {
		this.css(
			{
				outline: '5px solid ' + (colour ? colour : 'rgba(255,20,147,0.5)')
			}
		);
		return this;
	}
})(jQuery);