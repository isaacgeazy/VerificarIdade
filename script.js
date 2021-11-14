function Verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('text');
    var res = window.document.getElementById('res');

    if (fano.value.length == 0 || fano.value > ano) {
        res.innerText = "[ERRO] Preencha novamente!";
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada ${idade}`
        var genero = '';
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade <= 12) {
                // criança
                 img.setAttribute('src', 'imagens/foto-bebe-m.png');
            } else if (idade >= 12 && idade < 24) {
                 // Jovem
                 img.setAttribute('src', 'imagens/foto-jovem-m.png')
            } else if (idade < 50) {
                 // Adulto
                 img.setAttribute('src' , 'imagens/foto-adulto-m.png')
            } else  {
                 // Idoso
                 img.setAttribute('src' , 'imagens/foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade <= 12) {
                // criança
                 img.setAttribute('src', 'imagens/foto-bebe-f.png');
            } else if (idade >= 12 && idade < 24) {
                 // Jovem
                 img.setAttribute('src', 'imagens/foto-jovem-f.png')
            } else if (idade < 50) {
                 // Adulto
                 img.setAttribute('src' , 'imagens/foto-adulto-f.png')
            } else  {
                 // Idoso
                 img.setAttribute('src' , 'imagens/foto-idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} de ${idade} anos!`
        res.appendChild(img)
        res.style.textAlign = 'center'
        
    }

}