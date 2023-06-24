import mediaQueryCelularHorizontal from "./mediaQuery.js";
let scrollUltimo = 0;


const menu = () => {
    visibilidadMenuEnFormulario();
    window.addEventListener("resize", visibilidadMenuEnFormulario);
    window.addEventListener("scroll", visualizacionMenu);
}


const visibilidadMenuEnFormulario = () => {
    const inputs = document.querySelectorAll("[data-campo]");
    const anchoValido = mediaQueryCelularHorizontal();
    if (anchoValido) {
        inputs.forEach((input) => {
            input.addEventListener("focus", ocultarMenu);
            input.addEventListener("keyup", ocultarMenu);
            input.addEventListener("blur", mostrarMenu);
        });
    } else {
        inputs.forEach((input) => {
            input.removeEventListener("focus", ocultarMenu);
            input.removeEventListener("keyup", ocultarMenu);
            input.removeEventListener("blur", mostrarMenu);
        });
    }
    return;
}
 
const visualizacionMenu = () => {
    
    const actualScroll = window.scrollY;
    
    if (actualScroll == 0) {
        body.classList.remove(scrollArriba);
        return;
    }

    if (actualScroll > scrollUltimo && !body.classList.contains(scrollAbajo)) {
        ocultarMenu();
    } else if (actualScroll < scrollUltimo && body.classList.contains(scrollAbajo)) {
        mostrarMenu();
    }
    
    scrollUltimo = actualScroll;
}
/*Creditos:
George Martsoukos
https://webdesign.tutsplus.com/es/tutorials/how-to-hide-reveal-a-sticky-header-on-scroll-with-javascript--cms-33756
*/

const mostrarMenu = () => {
    body.classList.add(scrollArriba);
    body.classList.remove(scrollAbajo);
}

const ocultarMenu = () => {
    body.classList.add(scrollAbajo);
    body.classList.remove(scrollArriba);
}

export default menu;