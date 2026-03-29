export const triggerHaptic = (type = 'light') => {
  if (!window.navigator.vibrate) return;

  if (type === 'light') {
    window.navigator.vibrate(10); // Vibração quase impercetível, estilo iPhone
  } else if (type === 'medium') {
    window.navigator.vibrate(30);
  } else if (type === 'error') {
    window.navigator.vibrate([50, 30, 50]); // Vibração dupla para erro/alerta
  }
};

// Exemplo para sons futuramente
export const playSound = (soundFile) => {
  const audio = new Audio(`/sounds/${soundFile}.mp3`);
  audio.volume = 0.2;
  audio.play().catch(() => {}); // Ignora se o browser bloquear auto-play
};