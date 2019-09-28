(function() {
	window.breakout = window.breakout || {};
	breakout.TILE_SIZE = 16;

	breakout.IS_MOBILE = (function() {
		try {
			document.createEvent("TouchEvent");
			return true;
		} catch (e) {
			return false;
		}
	})();


	window.onload = function() {
		load();
	};
})();


