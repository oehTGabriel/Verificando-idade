function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano)
        window.alert('Verifique os dados por favor...')
     else {
        var sexf = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexf[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'bebe-m.jpg')
            } else if (idade < 18 ){
                img.setAttribute('src', 'jovem-m.jpg')
            } else if (idade < 60 ){
                img.setAttribute('src', 'adulto-m.jpg')
            } else {
                img.setAttribute('src', 'idoso-m.jpg')
            }
        } else if (sexf[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 12){
                img.setAttribute('src', 'bebe-f.jpg')
            } else if (idade < 18 ){
                img.setAttribute('src', 'jovem-f.jpg')
            } else if (idade < 60 ){
                img.setAttribute('src', 'adulto-f.jpg')
            } else {
                img.setAttribute('src', 'idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero}, e tem ${idade} anos!`
        res.appendChild(img)
    }
    
    
}