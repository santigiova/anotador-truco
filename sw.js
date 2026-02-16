self.addEventListener("install", (event) => {
    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    event.waitUntil(self.clients.claim());
});

// Al principio, dejalo “passthrough” para no cachear y no generar bugs.
// Más adelante podemos sumar cache offline si querés.
self.addEventListener("fetch", () => { });
