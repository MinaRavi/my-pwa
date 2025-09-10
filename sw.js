// Simple, reliable offline-first service worker
const CACHE = 'my-pwa-v1';
const ASSETS = [
  'index.html',
  'style.css',
  'app.js',
  'offline.html',
  'manifest.json',
  'icons/icon-192.png',
  'icons/icon-512.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => (k === CACHE ? null : caches.delete(k))))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;

  // For navigations, try network first, fall back to offline page
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(() => caches.match('offline.html'))
    );
    return;
  }

  // For others, try cache, then network
  event.respondWith(
    caches.match(request).then(cached => cached || fetch(request))
  );
});
