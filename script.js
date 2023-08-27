function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('light')


// para a tag img
    const image = document.querySelector(".profile img")

    if (html.classList.contains('light')){
        //se tiver Light Mode, adiciona imagem light
        image.setAttribute('src','./assets/rick1.png')
    } else {
        //se tiver dark Mode, adiciona imagem dark
        image.setAttribute('src','./assets/rick2.png')

    }


}