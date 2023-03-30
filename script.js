function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var title = window.document.getElementById('title')
    var titulo = window.document.getElementById('titulo')
    var data = new Date()
    var hora = data.getHours()
    var hora = 1
    var minuto = data.getMinutes()

    if (hora >= 0 && hora < 12) {

        //Bom Dia
        img.src = 'imagens/manha-250.jpg'
        document.body.style.backgroundColor = '#e2cd9f'
        title.innerHTML = "Bom Dia!"
        msg.innerHTML = `Agora são ${hora}:${minuto} da manhã`
        titulo.innerHTML = "Boa Dia!"

    } else if (hora >= 12 && hora <= 18) {

        //Boa Tarde
        img.src = 'imagens/tarde-250.jpg'
        document.body.style.backgroundColor = '#ab7731'
        title.innerHTML = "Boa Tarde!"
        msg.innerHTML = `Agora são ${hora}:${minuto} da tarde`
        titulo.innerHTML = "Boa Tarde!"

    } else {

        //Boa Noite
        img.src = 'imagens/noite-250.jpg'
        document.body.style.backgroundColor = '#515154'
        title.innerHTML = "Boa Noite!"
        msg.innerHTML = `Agora são ${hora}:${minuto} da noite`
        titulo.innerHTML = "Boa Noite!"

    }
}