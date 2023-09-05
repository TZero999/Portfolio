function CSSLoad(file){
	let link = document.createElement("link");
	link.setAttribute("rel", "stylesheet");
	link.setAttribute("type", "text/css");
	link.setAttribute("href", file);
	document.getElementsByTagName("head")[0].appendChild(link)
}

function JSLoad(file){
    let link = document.createElement("script");
	link.setAttribute("src", file);
	document.getElementsByTagName("head")[0].appendChild(link)
}

window.onload = function() {
    CSSLoad('./css/animation.css');
    document.body.classList.add('loaded_hiding');
    
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 1000);
}
