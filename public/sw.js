// Service Worker

//importScripts('/cache-polyfill.js');


self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('zaqixu').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/distribution.html',
       '/manifest.json',
       '/outspell-letters.txt',
       '/scrabble-letters.txt',
       '/sowpods us twl06.txt',
       '/sw.js',
       '/android-icon-144x144.png',
       '/android-icon-192x192.png',
       '/android-icon-36x36.png',
       '/android-icon-48x48.png',
       '/android-icon-72x72.png',
       '/android-icon-96x96.png',
       '/apple-icon-120.png',
       '/apple-icon-152.png',
       '/apple-icon-167.png',
       '/apple-icon-180.png',
       '/apple-splash-1125-2436.png',
       '/apple-splash-1136-640.png',
       '/apple-splash-1242-2208.png',
       '/apple-splash-1242-2688.png',
       '/apple-splash-1334-750.png',
       '/apple-splash-1536-2048.png',
       '/apple-splash-1668-2224.png',
       '/apple-splash-1668-2388.png',
       '/apple-splash-1792-828.png',
       '/apple-splash-2048-1536.png',
       '/apple-splash-2048-2732.png',
       '/apple-splash-2208-1242.png',
       '/apple-splash-2224-1668.png',
       '/apple-splash-2388-1668.png',
       '/apple-splash-2436-1125.png',
       '/apple-splash-2688-1242.png',
       '/apple-splash-2732-2048.png',
       '/apple-splash-640-1136.png',
       '/apple-splash-750-1334.png',
       '/apple-splash-828-1792.png',
       '/manifest-icon-192.png',
       '/manifest-icon-512.png',
       '/ms-icon-144x144.png',
       '/ms-icon-150x150.png',
       '/ms-icon-310x310.png',
       '/ms-icon-70x70.png',
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