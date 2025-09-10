// Register the Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('SW registered', reg.scope))
      .catch(err => console.error('SW registration failed', err));
  });
}

document.getElementById('ping').addEventListener('click', () => {
  const online = navigator.onLine ? 'online ✅' : 'offline ⚠️';
  document.getElementById('status').textContent = `You are currently ${online}`;
});
