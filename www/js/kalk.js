

function getValue()
{

	
	var zaznopcja = document.querySelector('input[type=radio]:checked');
	var opcja = zaznopcja.value;
	var AU_const = 149597871;
	var LY_const = 9460528400000;
	var PC_const = 30841322584000;
	var LY_AU = 63241;
	var PC_AU = 206265;
	var LY_PC = 3.26;

	
	
	
	
	if (zaznopcja.value == 1)
	{
		
		var pole = document.getElementById('pole');
		var p = pole.value;
		var wynik = p * AU_const;
		alert(p + ' ' + 'AU = ' + wynik + ' km');
		
	}
	
	
	if (zaznopcja.value == 2)
	{
		var pole = document.getElementById('pole');
		var p = pole.value;
		var wynik = p * PC_const;
			alert(p + ' ' + 'Pc = ' + wynik + ' km');
	
	
	}
	
	if (zaznopcja.value == 3)
	{
		var pole = document.getElementById('pole');
		var p = pole.value;
		var wynik = p * LY_const;
			alert(p + ' ' + 'ly = ' + wynik + ' km');
	
	
	}
	
	if (zaznopcja.value == 4)
	{
		var pole = document.getElementById('pole');
		var p = pole.value;
		var wynik = p * PC_AU;
			alert(p + ' ' + 'Pc = ' + wynik + ' AU');
	
	
	}
	if (zaznopcja.value == 5)
	{
		var pole = document.getElementById('pole');
		var p = pole.value;
		var wynik = p * LY_AU;
			alert(p + ' ' + 'ly = ' + wynik + ' AU');
	
	
	}
	if (zaznopcja.value == 6)
	{
		var pole = document.getElementById('pole');
		var p = pole.value;
		var wynik = p / AU_const;
		alert(p + ' ' + 'km = ' + wynik + ' AU');
	
	
	}
	if (zaznopcja.value == 7)
	{
		var pole = document.getElementById('pole');
		var p = pole.value;
		var wynik = p / LY_PC;
			alert(p + ' ' + 'ly = ' + wynik + ' Pc');
		
	
	
	}
	if (zaznopcja.value == 8)
	{
		var pole = document.getElementById('pole');
		var p = pole.value;
		var wynik = p / PC_AU;
			alert(p + ' ' + 'AU = ' + wynik + ' Pc');
		
	
	
	}
	if (zaznopcja.value == 9)
	{
		var pole = document.getElementById('pole');
		var p = pole.value;
		var wynik = p / PC_const;
			alert(p + ' ' + 'km = ' + wynik + ' Pc');
	
	
	}
	if (zaznopcja.value == 10)
	{
		var pole = document.getElementById('pole');
		var p = pole.value;
		var wynik = p * LY_PC;
			alert(p + ' ' + 'Pc = ' + wynik + ' ly');
	
	
	}
	if (zaznopcja.value == 11)
	{
		var pole = document.getElementById('pole');
		var p = pole.value;
		var wynik = p / LY_AU;
			alert(p + ' ' + 'AU = ' + wynik + ' ly');
	
	
	}
	if (zaznopcja.value == 12)
	{
		var pole = document.getElementById('pole');
		var p = pole.value;
		var wynik = p / LY_const;
			alert(p + ' ' + 'km = ' + wynik + ' ly');
	
	
	}
	
}


