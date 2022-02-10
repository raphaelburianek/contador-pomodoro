let acao = document.getElementById('acao')
let pausa = document.getElementById('pausa')
let sessoes = document.getElementById('sessoes')
let segundos

var bell = new Audio('./audio/bell.mp3')
var volta = new Audio('./audio/volta.mp3')
var final = new Audio('./audio/final.mp3')

var lofi = document.getElementById('lofi')
var pause = document.getElementById('pause')
var play = document.getElementById('paly')

function iniciar() {
  if (acao.value == 0) {
    document.getElementById('erro_acao').innerHTML = 'adicione os minutos'
    acao.focus()
  } else if (pausa.value == 0) {
    document.getElementById('erro_pausa').innerHTML = 'adicione a pausa'
    pausa.focus()
  } else if (sessoes.value == 0) {
    document.getElementById('erro-sessoes').innerHTML = 'adicione as sessões'
    sessoes.focus()
  } else {
    lofi.play()
    pause.style.setProperty('display', 'blok', 'important')
  }
}
