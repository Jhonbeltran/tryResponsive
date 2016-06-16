$(document).ready(main);
 
function main(){
	var contador = 1;
	$('.menu_bar').click(function(){
		// $('nav').toggle(); 
 
		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
 
	});
 
};


/*function inicio() {
	var boton = document.getElementById("barra");
	boton.addEventListener("click", mostrar);
}

function mostrar() {
	var contador = 1;
	if(contador == 1){
			document.getElementById("navigation").style.left="0";
			contador = 0;
		} else {
			contador = 1;
			document.getElementById("navigation").style.left="-100";
		}
}*/

