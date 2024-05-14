let menu = document.getElementById("menu")
let iconeBarras = document.getElementById("icone-barras")
let iconeX = document.querySelector("#icone-x")


function abrirFecharMenu() {
    //Se o menu está fechado

    if (menu.classList.contains("menu-fechado")) {
        //abrir o menu
        menu.classList.remove("menu-fechado")

        iconeX.style.display = "inline"

        iconeBarras.style.display = "none"
    } else {
        //fechar o menu
        menu.classList.add("menu-fechado")

        iconeX.style.display = "none"

        iconeBarras.style.display = "inline"
    }

}

window.onresize = () => {
    menu.classList.remove("menu-fechado")
    iconeX.style.display = "inline"
    iconeBarras.style.display = "none"
}

// functionção carrosel

let slides = [
    'primeiro-banner' ,
    'segundo-banner' ,
    'terceiro-banner'
 ]

 
 let slideAtual = 0 

 let numeroSlides = slides.length

let banner = document.querySelector(".banner")

banner.classList.add(slides[0])

const mostrarProximoSlide = () => {
    banner.classList.remove(slides[slideAtual])

    // numeroSlides = 3
    // estou no ultimo 2

    if(slideAtual < 2) {
        slideAtual ++
    }else {
        slideAtual = 0
    }

    
    
    
    banner.classList.add(slides[slideAtual])
    
    
}

const mostrarSlideAnterior = () => {
    
    banner.classList.remove(slides[slideAtual ])
    if(slideAtual > 0) {
        slideAtual --
    }else {
        slideAtual = numeroSlides - 1
    }
    
''
    banner.classList.add(slides[slideAtual])
}
