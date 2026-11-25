/* Control de Inventario de Arcos — PWA V0.6.3
   Los respaldos, firmas y Excel generados NO se almacenan en esta caché.
   Se cachean únicamente los archivos estáticos publicados. */
const CACHE_NAME = 'inventario-arcos-estaticos-v0.6.3';
const PREFIX = 'inventario-arcos-estaticos-';
const SHELL = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys
        .filter((name) => name.startsWith(PREFIX) && name !== CACHE_NAME)
        .map((name) => caches.delete(name))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  const base = new URL(self.registration.scope);
  if (!url.pathname.startsWith(base.pathname)) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            event.waitUntil(caches.open(CACHE_NAME).then((cache) =>
              cache.put(new URL('./index.html', base).href, copy)));
          }
          return response;
        })
        .catch(() => caches.match(new URL('./index.html', base).href))
    );
    return;
  }

  const allowed = SHELL.map((path) => new URL(path, base).pathname);
  if (!allowed.includes(url.pathname)) return;
  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request))
  );
});
