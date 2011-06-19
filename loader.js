(function() {
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = chrome.extension.getURL("MathJax/MathJax.js");
	
	script.text = '\
		MathJax.Hub.Config({\
			extensions: ["mml2jax.js"],\
			jax: ["input/MathML","output/HTML-CSS"],\
			availableFonts: ["STIX","TeX"],\
			preferredFont: "TeX",\
			undefinedFamily: "STIXGeneral,serif",\
		});';
	
	document.getElementsByTagName("head")[0].appendChild(script);
})();
