function contar() {
    let inicio = document.querySelector('input#inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let resposta = document.querySelector('div#res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resposta.innerHTML = `[ERRO] Campo vazio!`
        resposta.style.color = 'red'
    } else {
        resposta.innerHTML += `Contado: `
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) {
            for(let c = i; c <= f; c += p){
                resposta.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for(let c = i; c >= f; c -= p) {
                resposta.innerHTML += `${c} \u{1F449}`
            }
        }
    }
    resposta.innerHTML += `\u{1F3C1}`
}