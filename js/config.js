require.config({
	baseUrl : "/",
	paths : {
		"jquery" : "lib/jquery/jquery-1.12.4.min",
		"cookie" : "lib/jquery_plugins/jquery.cookie",
		"fly" : "lib/jquery_plugins/jquery.fly.min",
		"zoom" : "lib/jquery_plugins/jquery.elevateZoom-2.2.3.min",
		"template" : "lib/artTemplate/template-native",
		"load" : "js/headfoot",
		
	},
	shim : {
		"fly" : {
			deps : ["jquery"]
		},
		"zoom" : {
			deps : ["jquery"]
		}
	}
});