workbox.routing.registerRoute(
  /^https?:.*\.mp4$/,
  new workbox.strategies.StaleWhileRevalidate(),
  "GET"
);
