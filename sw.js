// Rede primeiro: quem esta online sempre recebe a versao nova. Sem internet,
// o app abre com a ultima copia guardada.
const CACHE = 'carrossel-v1';
const ARQUIVOS = [
  './',
  './manifest.webmanifest',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
  './vendor/bootstrap.min.css',
  './vendor/bootstrap.bundle.min.js',
  './vendor/bootstrap-icons.min.css',
  './vendor/fonts/bootstrap-icons.woff2',
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ARQUIVOS)));
});
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET' || !e.request.url.startsWith('http')) return;
  e.respondWith(
    fetch(e.request)
      .then((resposta) => {
        if (resposta.ok) {
          const copia = resposta.clone();
          caches.open(CACHE).then((c) => c.put(e.request, copia));
        }
        return resposta;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
