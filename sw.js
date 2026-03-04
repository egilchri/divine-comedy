const CACHE_NAME = 'divine-v1';
const ASSETS = [
  './divine_comedy.html',
  './Inferno_*_Canto_I_speed_0.75.html',
  './Purgatorio_*_Canto_I_speed_0.75.html',
  './Paradiso_*_Canto_I_speed_0.75.html'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
