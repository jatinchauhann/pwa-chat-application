let version = '0.1';

self.addEventListener('install', e => {
  let timeStamp = Date.now();
  e.waitUntil(
    caches.open('nucleon').then(cache => {
      return cache.addAll([
        `/`,
        `/index.html?timestamp=${timeStamp}`,
        `/styles/main.css?timestamp=${timeStamp}`,
        `/scripts/main.js?timestamp=${timeStamp}`,
        `/images/firebase-logo.png?timestamp=${timeStamp}`,
        `/images/LOGO.jpg?timestamp=${timeStamp}`,
        `/images/LOGO128.png?timestamp=${timeStamp}`,
        `/images/LOGO256.png?timestamp=${timeStamp}`,
        `/images/LOGO512.png?timestamp=${timeStamp}`,
        `/images/profile_placeholder.png?timestamp=${timeStamp}`
      ])
      .then(() => self.skipWaiting());
    })
  )
});

self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});



