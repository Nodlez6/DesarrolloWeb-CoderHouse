const boton_hamburguesa = document.getElementById("boton-hamburguesa");
const nav_li = document.getElementById('nav_li');
const fondo__nav = document.getElementById('fondo__nav');

boton_hamburguesa.addEventListener('click' , () => {
    if(nav_li.classList.contains("Dnone")){ 
        
        nav_li.classList.remove("Dnone");
        fondo__nav.classList.remove("alturaFondoNav")
    }
    else{
        nav_li.classList.add("Dnone");
        fondo__nav.classList.add("alturaFondoNav")
    }
})

console.log("fdsafds")