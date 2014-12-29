require.config({
	baseUrl: 'js',
	paths: {
		domReady: '../bower_components/requirejs-domready/domReady',
	}
});

document.addEventListener("DOMContentLoaded", requirejs(['main']), false);