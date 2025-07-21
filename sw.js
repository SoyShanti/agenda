
const CACHE_NAME = 'fitnessis-catalog-v1';
const urlsToCache = [
    '/',
    '/assets/css/styles.css',
    '/assets/js/app.js',
    '/assets/js/gallery.js',
    '/assets/js/sync.js',
    '/manifest.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

// Sincronización en segundo plano
self.addEventListener('sync', event => {
    if (event.tag === 'background-sync') {
        event.waitUntil(syncData());
    }
});

async function syncData() {
    // Lógica de sincronización cuando hay conexión
    console.log('Sincronizando datos...');
}
