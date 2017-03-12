function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(2);
	deviceInfo();
}

function deviceInfo() {

	info =  'Device Model   : '    + device.model + '<br>' + 
			'Device Name    : '     + device.name + '<br>' + 
			'Device Cordova : '  + device.cordova + '<br>' + 
			'Device Platform: ' + device.platform + '<br>' + 
			'Device UUID    : '     + device.uuid + '<br>' + 
			'Device Version : '  + device.version + '<br>';

	document.getElementById("deviceDetails").innerHTML = info;	
}

function McGorisInfo() {

	info =  'Imie   : '    + 'McGoris' + '<br>' + 
			'Nazwisko    : '     + 'Goryl' + '<br>' + 
			'E-mail : '  + 'mcgoris@o2.pl' + '<br>' + 
			'Strona internetowa: ' + 'mcastronomia.blogspot.com' + '<br>' + 
			'Kierunek:    : '     + 'informatyka' + '<br>' + 
			'Semestr : '  + '5' + '<br>';

	document.getElementById("deviceDetails").innerHTML = info;	
}

function McGorisHobby() {

	info =  'Zainteresowania :   '    + 'Astronomia';
			

	document.getElementById("deviceDetails").innerHTML = info;	
}