
var hasla = new Array(30);

hasla[0] = "William herschel";
hasla[1] = "Galaktyczki w Pannie";
hasla[2] = "Obłoki magellana";
hasla[3] = "strzelec";
hasla[4] = "teleskop";
hasla[5] = "słońce w znaku lwa";
hasla[6] = "Galaktyka Andromedy";
hasla[7] = "Obserwatorium";
hasla[8] = "Myśliwy Orion";
hasla[9] = "Herkules";
hasla[10] = "Gwiazdozbiór Kameleona";
hasla[11] = "Światło zodiakalne";
hasla[12] = "Efekt Dopplera";
hasla[13] = "Przesunięcie ku czerwieni";
hasla[14] = "Koziorożec";
hasla[15] = "Znaki zodiaku";
hasla[16] = "Zaćmienie słońca";
hasla[17] = "Astronomia";
hasla[18] = "Żyroskop";
hasla[19] = "Zanieczyszczenie światłem";
hasla[20] = "Rozgwieżdżone niebo";
hasla[21] = "Astrofotografia";
hasla[22] = "Skorpion";
hasla[23] = "Kometa Halleya";
hasla[24] = "Rozbłyski gamma";
hasla[25] = "Odległe światy";
hasla[26] = "La superba";
hasla[27] = "Betelgeza";
hasla[28] = "supernowa";
hasla[29] = "Błękitny nadolbrzym";



function losuj()
{
	var liczba = Math.round(Math.random()*hasla.length);
	losowe_haslo = hasla[liczba];
	
}

losuj();

var haslo = losowe_haslo;



haslo = haslo.toUpperCase();

var dlugosc = haslo.length;
var ilosc_szans = 0;
var ilosc_dobrych = 0;
var ilosc_liter = 0;
var ilosc_spacji = 0;



var haslo1 = "";


for (i=0; i<dlugosc; i++)
{
	if (haslo.charAt(i)==" ")
	{
	haslo1 = haslo1 + " ";
	ilosc_spacji++;
	}
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

String.prototype.ustawZnak = function(miejsce, znak)
{
	if (miejsce > this.length-1) return this.toString();
	
	else return this.substr(0, miejsce) + znak + this.substr(miejsce+1);
	
}

function sprawdz(nr)
{
	var wynik = false;
	
	for (i=0; i<dlugosc; i++)
	{
		if (haslo.charAt(i)== litery[nr])
		{
			haslo1 = haslo1.ustawZnak(i,litery[nr]);
			wynik = true;
			ilosc_liter++;
		}
		
	}
	
	if(wynik == true)
	{
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#005500";
		document.getElementById(element).style.color = "#fff";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute("onclick",";");
		ilosc_dobrych++;
			
			if (ilosc_liter == haslo1.length-ilosc_spacji)
			{
				
				alert("Wygrałeś");
				location.reload();
			}
	}
	else
	{
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#660000";
		document.getElementById(element).style.color = "#fff";
		document.getElementById(element).style.cursor = "default";
		document.getElementById(element).setAttribute("onclick",";");
	
		ilosc_szans++;
		
		var obrazki = "img/A" +ilosc_szans+ ".jpg";
		document.getElementById("szubienica").innerHTML = '<img src="'+obrazki+'" alt="" />';
		
		
		
		if (ilosc_szans == 9) 
		{
			
			alert("Przegrałeś");
			location.reload();
		}
		
	}
	
	wypisz_haslo();

}


