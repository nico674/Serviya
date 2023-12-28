//Inicializamos libreria aos
AOS.init();
/*por medio de js seleccionamos nuestros elementos para traer el menu devuelta.*/

let menu = document.getElementById('menu');
let menu_bar = document.getElementById('menu-bar');
menu_bar.addEventListener('click', function(){/*Escuchador de los eventos. Cuando escuche el 
                                                evento click va a ejecutar la función().*/
    menu.classList.toggle('menu-toggle')

});

/*Efecto en registro*/
var inputs = document.getElementsByClassName('formulario_input');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function () {
        if (this.value.length >= 1) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}