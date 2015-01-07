require.config({
	baseUrl: 'js',
	paths: {
		// for example
		// domReady: '../bower_components/requirejs-domready/domReady',
	}
});

document.addEventListener("DOMContentLoaded", requirejs(['main']), false);