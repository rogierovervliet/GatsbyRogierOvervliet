var nav = window.navigator;
var ua = nav.userAgent;

let is_safari =
  ua.indexOf("iPhone") != -1 &&
  ua.indexOf("Safari") != -1 &&
  ua.indexOf("CriOS") == -1 &&
  ua.indexOf("FxiOS") == -1;

if (is_safari) {
  workbox.routing.registerRoute(
    /.*\.(mp4|webm)/,
    workbox.strategies.cacheFirst({
      plugins: [new workbox.rangeRequests.Plugin()]
    }),
    "GET"
  );
}
