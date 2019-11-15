// Service Worker

//importScripts('/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('zaqixu').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/distribution.html',
       '/outspell-letters.txt',
       '/scrabble-letters.txt',
       '/sowpods us twl06.txt',
       '/bootstrap-4.3.1/css/bootstrap-min.css',
       '/bootstrap-4.3.1/js/bootstrap-min.js',
       '/bootstrap-4.3.1/js/jquery-3.3.1-slim-min.js',
       '/bootstrap-4.3.1/js/popper-1.14.7-min.js'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
   
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
});