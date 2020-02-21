var resources;
var menuitems;

window.onhashchange = function() { 
	setContent();
}

if(!window.location.hash){
	window.location.replace('#eng');
}

setContent();

function setContent(){	
	if(window.location.hash === "#eng"){
		resources = lang.eng;
		menuitems = menulabels.eng;
	} else if(window.location.hash === "#chi"){
		resources = lang.chi;
		menuitems = menulabels.chi;
	}else{
		resources = lang.hun;
		menuitems = menulabels.hun;
	}
	
	for ([key, value] of Object.entries(resources)) {
		document.getElementById(key).innerHTML = value;
	}
	
	for ([key, value] of Object.entries(menuitems)) {
		var actButton = document.getElementById(key);
		actButton.innerHTML = value.label;
	}
	
	for ([key, value] of Object.entries(ips)) {            
		var image = document.getElementById(key);
                var langID = value === 'lang' ? window.location.hash.substring(1, 4) : '';
                var ext = value === 'gif' ? '.gif' : '.png';
                var source = 'images/' + key + langID + ext;                
		image.src = source;
	}
}

function redirect(senderId){		
	window.location.replace(menuitems[senderId].url);
}
