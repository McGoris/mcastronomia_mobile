
var haslo = "Galaktyczki w Pannie";

haslo = haslo.toUpperCase();

var dlugosc = haslo.length;

var haslo1 = "";


for (i=0; i<dlugosc; i++)
{
	if (haslo.charAt(i)==" ") haslo1 = haslo1 + " ";
	else haslo1 = haslo1 + "-";
	
	
}



function wypisz_haslo()
{
	
	document.getElementById("plansza").innerHTML = haslo1;
	
}

window.onload = start;

var litery = new Array(35);

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";


function start()

{
	var divy ="";
	
	for (i=0; i<=34; i++)
	{
		var elementy = "lit" + i;
		divy = divy + '<div class="litera" onclick="sprawdz('+i+')" id="'+elementy+'">'+litery[i]+'</div>';
		if((i+1) % 4 == 0) 
			{	
				divy = divy + '<div style="clear:both;"></div>';
			}
	}
	
	
	document.getElementById("alfabet").innerHTML = divy;
	
	wypisz_haslo();
}

function sprawdz(nr)
{
	alert(nr);
	
}

function wylacz()
{

	document.getElementById("wylacz").innerHTML = wylacz;	
	
	window.close();
}	
