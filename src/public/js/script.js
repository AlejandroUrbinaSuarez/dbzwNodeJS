//Método que genera las noticias de Deportes
function cargarDatosDeportes() {
	//alert("Hola");
    var url = "https://newsdata.io/api/1/news?apikey=pub_689960c2bbc30058babdac0adbb249beff9c&q=deportes";
    fetch(url)
        .then(response => response.json())
        .then(data => generarDeportes(data))
        .catch(error => console.log("Error: " + error.message));
}

function generarDeportes(data) {
	var res = document.querySelector("#deportes");
	res.innerHTML= `${data.results['0'].title}`;
  var res1 = document.querySelector("#deportesdos");
	res1.innerHTML= `${data.results['1'].title}`;
  var res2 = document.querySelector("#deportestres");
	res2.innerHTML= `${data.results['2'].title}`;
  var res3 = document.querySelector("#descripciondep");
	res3.innerHTML= `${data.results['0'].description}`;
  var res4 = document.querySelector("#descripciondepdos");
	res4.innerHTML= `${data.results['1'].description}`;
  var res5 = document.querySelector("#descripciondeptres");
	res5.innerHTML= `${data.results['2'].description}`;
  
}

//Método que genera las noticias de Tecnología
function cargarDatosTecnología() {
	//alert("Hola");
    var url = "https://newsdata.io/api/1/news?apikey=pub_689960c2bbc30058babdac0adbb249beff9c&q=tecnologia&language=es&category=technology";
   
    fetch(url)
        .then(response => response.json())
        .then(data => generarTecnología(data))
        .catch(error => console.log("Error: " + error.message));
}

function generarTecnología(data) {
	var res = document.querySelector("#tecnologia");
	res.innerHTML= `${data.results['0'].title}`;
  var res1 = document.querySelector("#tecnologiados");
	res1.innerHTML= `${data.results['1'].title}`;
  var res2 = document.querySelector("#tecnologiatres");
	res2.innerHTML= `${data.results['2'].title}`;
  var res3 = document.querySelector("#descripciontec");
	res3.innerHTML= `${data.results['0'].description}`;
  var res4 = document.querySelector("#descripciontecdos");
	res4.innerHTML= `${data.results['1'].description}`;
  var res5 = document.querySelector("#descripciontectres");
	res5.innerHTML= `${data.results['2'].description}`;
  
}

//Método que genera las noticias Top
function cargarDatosInicio() {
	//alert("Hola");
    var url = "https://newsdata.io/api/1/news?apikey=pub_689960c2bbc30058babdac0adbb249beff9c&country=co&language=es ";
    fetch(url)
        .then(response => response.json())
        .then(data => generarNoticiasInicio(data))
        .catch(error => console.log("Error: " + error.message));
}

function generarNoticiasInicio(data) {
	var res = document.querySelector("#titulo");
	res.innerHTML= `${data.results['0'].title} - Colegio - ${data.results['0'].pubDate}`;
  var res1 = document.querySelector("#descripcion");
	res1.innerHTML= `<h4>${data.results['0'].description}</h4>`;
  var res2 = document.querySelector("#titulodos");
	res2.innerHTML= `${data.results['1'].title} - Colegio - ${data.results['1'].pubDate}`;
  var res3 = document.querySelector("#descripciondos");
	res3.innerHTML= `<h4>${data.results['1'].description}</h4>`;
  var res4 = document.querySelector("#titulotres");
	res4.innerHTML= `${data.results['2'].title} - Colegio - ${data.results['2'].pubDate}`;
  var res5 = document.querySelector("#descripciontres");
	res5.innerHTML= `<h4>${data.results['2'].description}</h4>`;
  
}

//Método que genera la fecha actual
function cargarFecha(){
  date = new Date();
  year = date.getFullYear();
  month = date.getMonth() + 1;
  day = date.getDate();
  mes = (month==1)? "Enero":
        (month==2)? "Febrero":
        (month==3)? "Marzo":
        (month==4)? "Abril":
        (month==5)? "Mayo":
        (month==6)? "Junio":
        (month==7)? "Julio":
        (month==8)? "Agosto":
        (month==9)? "Septiembre":
        (month==10)? "Octubre":
        (month==11)? "Noviembre": "Diciembre"

  var res = document.querySelector("#fecha");
  res.innerHTML = day + " de " + mes + " de " + year + "<br>" + "Cúcuta";
}
//Método que extiende y muestra una cantidad extra de noticias
document.querySelector('#todaslasnoticias').addEventListener('click', cargarMasNoticias);
function cargarMasNoticias() {
	//alert("Hola");
    var url = "https://newsdata.io/api/1/news?apikey=pub_689960c2bbc30058babdac0adbb249beff9c&country=co&language=es";
    fetch(url)
        .then(response => response.json())
        .then(data => generarMasNoticiasInicio(data))
        .catch(error => console.log("Error: " + error.message));
}

function generarMasNoticiasInicio(data) {
	var res = document.querySelector("#masnoticias");
  for(var i = 3; i < 12; i++){
    res.innerHTML+= `<div>
        <h1>${data.results[i].title} - Colegio - ${data.results[i].pubDate}</h1>
        <div class="card">
          <div class="card-body">${data.results[i].description}</div>
        </div>
      </div>`;
  }
	
  
}

cargarFecha();
cargarDatosDeportes();
cargarDatosTecnología();
cargarDatosInicio();