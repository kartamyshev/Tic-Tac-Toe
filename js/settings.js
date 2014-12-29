require.config({
	baseUrl: 'js',
	paths: {
		domReady: '../bower_components/requirejs-domready/domReady',
	}
});

require(['domReady'], function(domReady) {
	domReady(function () {
		requirejs(['main']);
	});
});

