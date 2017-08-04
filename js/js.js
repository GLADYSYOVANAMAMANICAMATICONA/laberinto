
var mapa =[
"**********************",
"*_____________*______*",
"*__*****_______*******",
"*_________***__*__*__*",
"***_*______*______**_*",
"*____*_________**__*_*",
"*__*******__**__*____*",
"*______*_______*___*_*",
"*___**_*___******_**_*",
"*O*___*___________**W*",
]
for (var i = 0; i < mapa.length; i++) {
	var nuevoarray = mapa[i].split("")
	var tr = document.createElement("tr")
	
    for (var j = 0; j < nuevoarray.length; j++) {
    var td = document.createElement("td");
    /*td.setAttribute('class', 'td');*/
    var texto = document.createTextNode(nuevoarray[j])
    td.appendChild(texto);
    tr.appendChild(td);

    if (nuevoarray[j]=='*') {
		td.setAttribute('class', 'negro');

	}
	else if (nuevoarray[j]=='_') {
		td.setAttribute('class', 'azul');
	}
	else if (nuevoarray[j]=='O') {
		td.setAttribute('class', 'o');
	}
	else{
		td.setAttribute('class', 'w');
	}
    
	
}
laberinto.appendChild(tr);
}
