function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    var x = document.getElementById("nav");
    x.className = "";
}
function responsiveMenu(){
    var x = document.getElementById("nav");
    if (x.className === ""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}
window.scroll = function(){
    efectoHabilidades();
}
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var ditancia_skills = window.innerHeight = skills.getBoundingClientRect().top;
    if(distancia_skills>=300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("css").classList.add("barra-progreso2");
        document.getElementById("js").classList.add("barra-progreso3");
        document.getElementById("photoshop").classList.add("barra-progreso4");
        document.getElementById("illustrator").classList.add("barra-progreso5");
        document.getElementById("adobe").classList.add("barra-progreso6");
        document.getElementById("español").classList.add("barra-progreso7");
        document.getElementById("ingles").classList.add("barra-progreso8");
        document.getElementById("italiano").classList.add("barra-progreso9");
    }
}