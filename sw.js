const CACHE_VERSION = 'tictactoe-shell-v1';
const SHELL_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(SHELL_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_VERSION)
          .map((key) => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const request_url = new URL(request.url);
  if (request_url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(request).then((cached_response) => {
      if (cached_response) return cached_response;
      return fetch(request).then((network_response) => {
        if (!network_response || !network_response.ok) return network_response;
        const response_clone = network_response.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(request, response_clone));
        return network_response;
      });
    })
  );
});
