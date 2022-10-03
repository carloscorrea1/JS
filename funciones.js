document.addEventListener("DOMContentLoaded", function(){
    //variables del juego
    let imagenes = [
        {
            "nombre": "deadpool",
            "url"   : "imagenes/deadpool.jpg"
        },
        {
            "nombre": "gambit",
            "url"   : "imagenes/gambit.jpg"
        },
        {
            "nombre": "hulk",
            "url"   : "imagenes/hulk.webp"
        },
        {
            "nombre": "spiderman",
            "url"   : "imagenes/spiderman.webp"
        },
        {
            "nombre": "wolverine",
            "url"   : "imagenes/wolverine.jpg"
        },
        {
            "nombre": "thor",
            "url"   : "imagenes/thor.jpeg"
        },
        {
            "nombre": "deadpool",
            "url"   : "imagenes/deadpool.jpg"
        },
        {
            "nombre": "gambit",
            "url"   : "imagenes/gambit.jpg"
        },
        {
            "nombre": "hulk",
            "url"   : "imagenes/hulk.webp"
        },
        {
            "nombre": "spiderman",
            "url"   : "imagenes/spiderman.webp"
        },
        {
            "nombre": "wolverine",
            "url"   : "imagenes/wolverine.jpg"
        },
        {
            "nombre": "thor",
            "url"   : "imagenes/thor.jpeg"
        }
    ] 
    //seleccionar tablero
    let tablero = document.querySelector(".tablero");

    //variable para guardar los num de las imagenes

    let numImg =[];

    ////variable para guardar los nomnbres de las imagenes

    let nomImg=[];

    //funcion para agregar las imagenes al tablero
    let AgregarImagenes = ()=>{
        for(var x = 0; x < imagenes.length; x++){
            //crear la etiqueta div con sus clases
            let div = document.createElement("div");
            div.setAttribute("class","col-lg-3 col-md-4 col-3");
            //crear etiqueta de imagen
            let img = document.createElement("img");
            img.setAttribute("class","img-fluid img-thumbnail");
            img.setAttribute("src","imagenes/ocultar.jpg");
            //agregar un numero a cada imagen
            img.setAttribute("id",x);
            //agregar evento a clickcada imagen
            img.addEventListener("click",mostrarimagenes);
            //agregar imagen al div
            div.appendChild(img);
            //agregar div con las imagenes al tablero
            tablero.appendChild(div);
        }
    }

    //ejecutar funcion
    AgregarImagenes();

function mostrarimagenes(){

    // alert ("di click");
    let imgID = this.getAttribute("id");
   // alert("numero de imagen: "+imgID)
    this.setAttribute("src",imagenes[imgID].url);
    //this.setAttribute("src",imagenes[]);
    //guardar los nomnres y numero s de las imagenes
    nomImg.push(imagenes[imgID].nombre);
    numImg.push(imgID);
   // alert(nomImg[imgID]+""+numImg[imgID]);
//comparar las imagenes despues que de click 2 veces

//compara las imagenes despues del click
if(nomImg.length===2){

    setTimeout(comapararImganes,500)

}




}
//comparar imagenes
function comapararImganes(){

    //guardar imagenes actuales
    let imagenesActuales= document.querySelectorAll(".tablero div img");
    //console.log(imagenesActuales);
    //guardar imagen 1 e imagen 2
    let opcionUno= nomImg[0];
    let opcionDos = nomImg[1];
    //comparar las imagenes escogidas
    if(opcionUno===opcionDos){
        alert ("acertaste");
imagenesActuales[numImg[0]].setAttribute("src","imagenes/ok.png");
imagenesActuales[numImg[1]].setAttribute("src","imagenes/ok.png");


    }else{
        alert("fallaste")
        imagenesActuales[numImg[0]].setAttribute("src","imagenes/ocultar.png");
        imagenesActuales[numImg[1]].setAttribute("src","imagenes/ocultar.png");
    }
    numImg=[];
    nomImg=[];

}
comapararImganes();

});