window.addEventListener('load', start, false);

function start(){

	var mycanvas = document.getElementById('mycanvas');
	if (Modernizr.canvas) {
		mycanvas.innerHTML="Si funciona canvas"
	} else {
	// no native ELEMENT support available :(.
	// Maybe try a fallback
		mycanvas.innerHTML="No funciona canvas"
	}


	var myvideo = document.getElementById('video');
	if (Modernizr.video) {
		myvideo.innerHTML="Si funciona video"
	} else {
	// no native ELEMENT support available :(.
	// Maybe try a fallback
		myvideo.innerHTML="No funciona video"
	}

	var mylocal = document.getElementById('localstore');
	if (Modernizr.localstorage) {
		mylocal.innerHTML="Si funciona localstore"
	} else {
	// no native ELEMENT support available :(.
	// Maybe try a fallback
		mylocal.innerHTML="No funciona localstore"
	}


	var offline = document.getElementById('offline');
	if (Modernizr.applicationcache) {
		offline.innerHTML="Si funciona offline"
	} else {
	// no native ELEMENT support available :(.
	// Maybe try a fallback
		offline.innerHTML="No funciona offline"
	}

	var geo = document.getElementById('geo');
	if (Modernizr.applicationcache) {
		geo.innerHTML="Si funciona geo"
	} else {
	// no native ELEMENT support available :(.
	// Maybe try a fallback
		geo.innerHTML="No funciona geo"
	}
}
/*
    <p id="mycanvas"> </p>
    <p id="video"> </p>
    <p id="ogg"> </p>
    <p id="localstore"> </p>
    <p id="offline"> </p>
    <p id="geo"> </p>
*/