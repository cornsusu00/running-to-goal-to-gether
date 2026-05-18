const CACHE_NAME = 'run-futsal-v1';
const ASSETS = [
  './index.html',
  './manifest.json',
  './app_icon_cute.png',
  './og_preview_cute.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
