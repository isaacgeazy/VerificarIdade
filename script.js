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
        if (fsex[0].checked) {
            genero = "Homem"
        } else if (fsex[1].checked) {
            genero = "Mulher"
        }
        res.innerHTML = `Detectamos ${genero} de ${idade} anos!`
    }

}