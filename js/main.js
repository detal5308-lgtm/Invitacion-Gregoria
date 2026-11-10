// ==========================================
// CUENTA REGRESIVA - PRIMERA COMUNIÓN
// ==========================================

// Cambiá esta fecha por el día y hora del evento
// Formato: AÑO-MES-DÍA T HORA:MINUTOS:SEGUNDOS
const FECHA_EVENTO = new Date('2026-11-14T19:00:00').getTime();

const diasEl = document.getElementById('dias');
const horasEl = document.getElementById('horas');
const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');

function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = FECHA_EVENTO - ahora;

  if (diferencia <= 0) {
    if (diasEl) diasEl.textContent = '00';
    if (horasEl) horasEl.textContent = '00';
    if (minutosEl) minutosEl.textContent = '00';
    if (segundosEl) segundosEl.textContent = '00';
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  if (diasEl) diasEl.textContent = String(dias).padStart(2, '0');
  if (horasEl) horasEl.textContent = String(horas).padStart(2, '0');
  if (minutosEl) minutosEl.textContent = String(minutos).padStart(2, '0');
  if (segundosEl) segundosEl.textContent = String(segundos).padStart(2, '0');
}

actualizarContador();
setInterval(actualizarContador, 1000);
