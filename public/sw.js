// Install service worker
var CACHE_NAME = 'SpaceX';
var urlsToCache = [
  '/',
  "index.html",
  "/static/js/main.chunk.js",
  "/static/js/0.chunk.js",
  "/static/js/bundle.js",
  "/missions",
  "/static/media/secondImage.c9a399c9.webp",
  "/static/media/Home4.5273ffd4.jpg",
  "manifest.json",
  "/spacex.png"
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Catch and return request

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });


// Update Service worker so it updates itself and removes files from cache which are not useful
self.addEventListener("activate" , (event) => {
    console.log("Service worker activate");
})