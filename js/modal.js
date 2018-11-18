let imagenes = document.querySelectorAll('.gallery__img');
let modal = document.getElementById('modal');
let img = document.getElementById('modal__img');
let boton = document.getElementById('modal__boton');

for (let i = 0; i < imaganes.length; i++) {
    imagenes[i].addEventListener("click", function(e) {
        modal.classList.toggle("modal--open");
        let src = e.target.src;
        img.setAttribute("src", src);
    });   
}
boton.addEventListener("click", function() {
    modal.classList.toggle("modal--open");
});  
