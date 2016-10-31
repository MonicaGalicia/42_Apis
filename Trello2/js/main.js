var inputLista=document.getElementById("input");//input inicio creado en html

function addLista(){    //crear tarjeta 1
  var parrafo=document.createElement("div"); //div añadir lista
  parrafo.setAttribute('class', 'tarjeta');
  document.body.appendChild(parrafo);
  var inputLista=document.createElement("input");
  inputLista.setAttribute("id","inputLista");
  var botonGuardar=document.createElement("button");
  botonGuardar.setAttribute("class","botonGuardar");
  botonGuardar.innerHTML="Guardar"
  var eliminar=document.createElement("span");
  eliminar.setAttribute("class" , " fa fa-times");

  parrafo.appendChild(inputLista);
  parrafo.appendChild(botonGuardar);
  parrafo.appendChild(eliminar);

    function eliminarAddLista(){
	    parrafo.parentNode.removeChild(parrafo);
    }

eliminar.onclick=eliminarAddLista;

function btnGuardar(){   //funcion guardar y crear lista

  if (inputLista.value === "") {
    inputLista.setAttribute("placeholder", "Ingresa un texto!");
    return false;
  } 
	var divDos=document.createElement("div");   //div con titulo y enlace para añadir Lista
  divDos.setAttribute("id","divDos");
	var texto=document.createElement("h5");
	texto.setAttribute("id","textoTarjeta");
	texto.appendChild(document.createTextNode(inputLista.value));
	var addTarjeta=document.createElement("a");
	addTarjeta.setAttribute("id" , "enlace");
	addTarjeta.appendChild(document.createTextNode("Añadir Lista"));
	

	document.body.appendChild(divDos);
  divDos.appendChild(texto);
	divDos.appendChild(addTarjeta);
  inputLista.value = "";

    
  function clickEnlace(){ //Al dar click en el enlace este se remplaza por un área de texto y un botón
    divEnlace=document.createElement("div");
    divEnlace.setAttribute("id","enlace");
    var area=document.createElement("textarea");
    area.setAttribute("id","area");
    var btnAdd=document.createElement("button");
    btnAdd.setAttribute("class","botonGuardar");
    btnAdd.innerHTML="Añadir";
    var eliminarT=document.createElement("span");
    eliminarT.setAttribute("class" , " fa fa-times");

    divDos.appendChild(divEnlace);
    divEnlace.appendChild(area);
    divEnlace.appendChild(btnAdd);
    divEnlace.appendChild(eliminarT);

    addTarjeta.parentElement.replaceChild(area,addTarjeta);//llamada de función que reemplazará textarea


  function eliminarTarjeta(){
	  divDos.parentNode.removeChild(divDos);
  }

  eliminarT.onclick=eliminarTarjeta;  //cuando de click en span "eliminarT" , eliminará a divDos que contiene a todos los elementos
    

  function addElemento(){   //función para añadir una tarjeta que se moverá .
    if (area.value === "") {
    area.setAttribute("placeholder", "Ingresa texto!");
    return false;
  } 
    var divElemento=document.createElement("div");
    divElemento.setAttribute("id","divElement");
    divElemento.id="" + (new Date()).getTime();
    divElemento.setAttribute("draggable", "true");
    divElemento.style.backgroundColor="#F0F8FF";
	  var textElemento=document.createElement("h5");
	  textElemento.setAttribute("id","textoElemento");
	  textElemento.appendChild(document.createTextNode(area.value));
	  var borrar=document.createElement("span");
  	borrar.setAttribute("class" , " fa fa-times pull-right");


    divDos.appendChild(divElemento);
    divElemento.appendChild(textElemento);
    divElemento.appendChild(borrar);


     divDos.ondragover=permitir;
     divElemento.ondragstart=arrastrar;
     divDos.ondrop=soltar;
     //termina sección Drag and drop


    area.value = "";
 
  function eliminate(){
       divElemento.parentNode.removeChild(divElemento);
  }

    borrar.onclick=eliminate;

  
     //inicia DRAG AND DROP
  function permitir(ev) {
    ev.preventDefault();
  }

  function arrastrar(ev) {
    
    ev.dataTransfer.setData("text", ev.target.id);
    this.classList.add("transicion");
    
  }

  
  function soltar(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));

   }

    
    
  }
    
    btnAdd.onclick=addElemento;




	}

     addTarjeta.onclick=clickEnlace;

  }

    botonGuardar.onclick=btnGuardar;
}

inputLista.onclick=addLista; //cierra  1era funcion del input  






