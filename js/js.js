	//GIT CHECKOUT GH-PAGES PARA CAMBIAR DE RAMA
	//IMPORTNTE IDENTAR PARA ENTENDER MI PROPIO CODIGO......ATAJOS DE TECLAS PARA IDENTAR.... SON UNOS AMORESSS ((((((CTRL+A+TAF)))))
	alert("Inicia el Juego con el boton adelante")
	var adelante = document.getElementById('btnadelante');
	var izquierda = document.getElementById('btnizquierda');
	var derecha = document.getElementById('btnderecha');
	var tabla = document.createElement('tabla');
	var actualPosicion;//variable global que sera utilizado luego para la posicion actual de la flechita
	var mapa =[//array bidimencional... es el dibujo del laberinto
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
	];
	var cajitas = new Array(mapa.length);//las 10 filas de la array bidimencional mapa se almacena en cajitas, cada uno//
	for (var i = 0; i < cajitas.length; i++) //
		 cajitas[i] = new Array (mapa[0].length);

	for (var i = 0; i < mapa.length; i++) {//se genera el laberinto
		 var tr = document.createElement("tr")//se crea  una etiqueta tr de html desde javascript
	   for (var j = 0; j < mapa[i].length; j++) {
	          var td = document.createElement("td");//se crea  una etiqueta td de html desde javascript
	          if (mapa[i][j]=='*'){//condicion para las paredes
			  td.setAttribute('class', 'negro');//se crea una clase del <td> para manejarlo en css
		      }

			  else if (mapa[i][j]=='_') {//condicion para el camino
			  td.setAttribute('class', 'azul');// se crea clase
		      }

			  else if (mapa[i][j]=='O') {//condicion para el inicio
			  td.setAttribute('class', 'o');//creo atributo para poder llamar en css por la clase ___.o....
			  var imagen = document.createElement("img");//creo la etiqueta img  en imagen...
			  imagen.src = "img/arriba.png";//se inserta imagen
			  td.appendChild(imagen);//se agrega la imagen en el td
			  actualPosicion = {eje_x:i,eje_y:j,direccion:'arriba'};//es un objeto literal que se usara mas adelante para mover las flechas
		      }

			  else if (mapa[i][j]=='W'){
	          td.setAttribute('class', 'w');
		      }
			  tr.appendChild(td);
			  cajitas[i][j]=td;
			}
	tabla.appendChild(tr);
	}
	laberinto.appendChild(tabla);

	//console.log (actualPosicion.eje_x+'---'+actualPosicion.eje_y);
	//funciones para los botones, adelante---izquierda---derecha......
	//funcion para avanzar......
	adelante.onclick = function(){
		if (actualPosicion.direccion == "arriba") {
			if (mapa[actualPosicion.eje_x-1][actualPosicion.eje_y] == "_"){
			  var imagen = document.createElement('img');//creo la etiqueta img  en imagen...
			  imagen.src = 'img/arriba.png';
			  cajitas[actualPosicion.eje_x][actualPosicion.eje_y].removeChild(cajitas[actualPosicion.eje_x][actualPosicion.eje_y].firstChild);
			  actualPosicion.eje_x = actualPosicion.eje_x-1;
			  cajitas[actualPosicion.eje_x][actualPosicion.eje_y].appendChild(imagen);
	   }
	}

	else if (actualPosicion.direccion == "derecha") {
		if (mapa[actualPosicion.eje_x][actualPosicion.eje_y + 1] == "_"){
			var imagen = document.createElement('img');//creo la etiqueta img  en imagen...
			imagen.src = 'img/derecha.png';
			cajitas[actualPosicion.eje_x][actualPosicion.eje_y].removeChild(cajitas[actualPosicion.eje_x][actualPosicion.eje_y].firstChild);
			actualPosicion.eje_y = actualPosicion.eje_y+1;
			cajitas[actualPosicion.eje_x][actualPosicion.eje_y].appendChild(imagen);
	  }
	}

	else if (actualPosicion.direccion == "izquierda") {
		if (mapa[actualPosicion.eje_x][actualPosicion.eje_y-1] == "_"){
			var imagen = document.createElement('img');//creo la etiqueta img  en imagen...
			imagen.src = 'img/izquierda.png';
			cajitas[actualPosicion.eje_x][actualPosicion.eje_y].removeChild(cajitas[actualPosicion.eje_x][actualPosicion.eje_y].firstChild);
			actualPosicion.eje_y = actualPosicion.eje_y-1;
			cajitas[actualPosicion.eje_x][actualPosicion.eje_y].appendChild(imagen);
	  }
	}

	else if (actualPosicion.direccion == "abajo") {
		if (mapa[actualPosicion.eje_x+1][actualPosicion.eje_y] == "_"){
			var imagen = document.createElement('img');//creo la etiqueta img  en imagen...
			imagen.src = 'img/abajo.png';
			cajitas[actualPosicion.eje_x][actualPosicion.eje_y].removeChild(cajitas[actualPosicion.eje_x][actualPosicion.eje_y].firstChild);
			actualPosicion.eje_x = actualPosicion.eje_x+1;
			cajitas[actualPosicion.eje_x][actualPosicion.eje_y].appendChild(imagen);
	  }
	}
	}
	derecha.onclick = function(){
		if (actualPosicion.direccion == "arriba") {
			var imagen = document.createElement("img");
		  imagen.src =  "img/derecha.png";
			actualPosicion.direccion = "derecha";
			cajitas[actualPosicion.eje_x][actualPosicion.eje_y].removeChild(cajitas[actualPosicion.eje_x][actualPosicion.eje_y].firstChild);
			cajitas[actualPosicion.eje_x][actualPosicion.eje_y].appendChild(imagen);
		}
		else if (actualPosicion.direccion == "derecha") {
			var imagen = document.createElement("img");
		  imagen.src =  "img/abajo.png";
			actualPosicion.direccion = "abajo";
			cajitas[actualPosicion.eje_x][actualPosicion.eje_y].removeChild(cajitas[actualPosicion.eje_x][actualPosicion.eje_y].firstChild);
			cajitas[actualPosicion.eje_x][actualPosicion.eje_y].appendChild(imagen);
		}

		else if (actualPosicion.direccion == "abajo") {
			var imagen = document.createElement("img");
		  imagen.src =  "img/izquierda.png";
			actualPosicion.direccion = "izquierda";
			cajitas[actualPosicion.eje_x][actualPosicion.eje_y].removeChild(cajitas[actualPosicion.eje_x][actualPosicion.eje_y].firstChild);
			cajitas[actualPosicion.eje_x][actualPosicion.eje_y].appendChild(imagen);
		}

		else if (actualPosicion.direccion == "izquierda") {
			var imagen = document.createElement("img");
		  imagen.src =  "img/arriba.png";
			actualPosicion.direccion = "arriba";
			cajitas[actualPosicion.eje_x][actualPosicion.eje_y].removeChild(cajitas[actualPosicion.eje_x][actualPosicion.eje_y].firstChild);
			cajitas[actualPosicion.eje_x][actualPosicion.eje_y].appendChild(imagen);
		}
	}

	izquierda.onclick = function(){
		if (actualPosicion.direccion == "arriba") {
			var imagen = document.createElement("img");
		  imagen.src =  "img/izquierda.png";
			actualPosicion.direccion = "izquierda";
			cajitas[actualPosicion.eje_x][actualPosicion.eje_y].removeChild(cajitas[actualPosicion.eje_x][actualPosicion.eje_y].firstChild);
			cajitas[actualPosicion.eje_x][actualPosicion.eje_y].appendChild(imagen);
		}

		else if (actualPosicion.direccion == "derecha") {
			var imagen = document.createElement("img");
		  imagen.src =  "img/arriba.png";
			actualPosicion.direccion = "arriba";
			cajitas[actualPosicion.eje_x][actualPosicion.eje_y].removeChild(cajitas[actualPosicion.eje_x][actualPosicion.eje_y].firstChild);
			cajitas[actualPosicion.eje_x][actualPosicion.eje_y].appendChild(imagen);
		}

		else if (actualPosicion.direccion == "abajo") {
			var imagen = document.createElement("img");
		  imagen.src =  "img/derecha.png";
			actualPosicion.direccion = "derecha";
			cajitas[actualPosicion.eje_x][actualPosicion.eje_y].removeChild(cajitas[actualPosicion.eje_x][actualPosicion.eje_y].firstChild);
			cajitas[actualPosicion.eje_x][actualPosicion.eje_y].appendChild(imagen);
		}

		else if (actualPosicion.direccion == "izquierda") {
			var imagen = document.createElement("img");
		  imagen.src =  "img/abajo.png";
			actualPosicion.direccion = "abajo";
			cajitas[actualPosicion.eje_x][actualPosicion.eje_y].removeChild(cajitas[actualPosicion.eje_x][actualPosicion.eje_y].firstChild);
			cajitas[actualPosicion.eje_x][actualPosicion.eje_y].appendChild(imagen);
		}
	}
