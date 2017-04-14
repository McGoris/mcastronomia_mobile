var question = "<font color='#bbb'> Jaka jest najbliższa nam galaktyka? </font>";

function WypiszPytanie()
{
	document.getElementById("pytanie").innerHTML = question;


	WypiszOdpowiedzi();
	
	
		
}

var odpowiedzi = new Array(4);

odpowiedzi[0] = "A: NGC 281";
odpowiedzi[1] = "B: Galaktyka Barnarda";
odpowiedzi[2] = "C: Galaktyka Andromedy";
odpowiedzi[3] = "D: NGC 4565";


function WypiszOdpowiedzi()
{
	
	
	
	var odp ="";
	
	for (i=0; i<=3; i++)
	{
		var elementsy = "odp" + i;
		odp = odp + '<div class="odpowiedz" style="background-color: #002;" id="'+elementsy+'"><font color="#bbb">'+odpowiedzi[i]+'</font></div>';
		if((i+1) % 2 == 0) 
			{	
				odp = odp + '<div style="clear:both;"></div>';
			}
	}
	
	document.getElementById("odpowiedzi").innerHTML = odp;
	
}



