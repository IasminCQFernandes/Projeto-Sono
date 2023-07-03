
function addAlarme(){
    window.location.href = "addAlarme.html"
}


let intervalo;
let segundos = 0;
let minutos = 0;
let horas = 0;

function iniciarCronometro() {
  intervalo = setInterval(atualizarCronometro, 1000); // Atualiza a cada segundo (1000 milissegundos)
}

function pararCronometro() {
    clearInterval(intervalo);
}

function zerarCronometro() {
    pararCronometro();
  segundos = 0;
  minutos = 0;
  horas = 0;
  atualizarTempo();
}

function atualizarCronometro() {
  segundos++;

  if (segundos === 60) {
    segundos = 0;
    minutos++;

    if (minutos === 60) {
      minutos = 0;
      horas++;
    }
  }

  atualizarTempo();
}

function atualizarTempo() {
  var tempoFormatado = formatarNumero(horas) + ":" + formatarNumero(minutos) + ":" + formatarNumero(segundos);
  document.getElementById("time").innerHTML = tempoFormatado;
}

function formatarNumero(numero) {
  return numero < 10 ? "0" + numero : numero;
}
