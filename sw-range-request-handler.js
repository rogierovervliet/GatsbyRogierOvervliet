let is_safari = navigator.userAgent.indexOf("Safari") > -1;

if (is_safari) {
  workbox.routing.registerRoute(
    /.*\.(mp4|webm)/,
    workbox.strategies.cacheFirst({
      plugins: [new workbox.rangeRequests.Plugin()]
    }),
    "GET"
  );
}
