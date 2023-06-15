importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js");
var CACHE_VERSION = "v1.0.1",
    CACHE_NAME = "ss-" + CACHE_VERSION + " : ",
    IMAGE_CACHE = CACHE_NAME + "image-cache",
    CSS_CACHE = CACHE_NAME + "css-cache",
    PAGE_CACHE = CACHE_NAME + "page-cache",
    FALLBACK_HTML_URL = "/ss_offline.html",
    CACHED_PATHS = [];
if (workbox) {
    workbox.setConfig({
        debug: !1
    });
    var registerRoute = workbox.routing.registerRoute,
        setCatchHandler = workbox.routing.setCatchHandler,
        CacheFirst = workbox.strategies.CacheFirst,
        StaleWhileRevalidate = workbox.strategies.StaleWhileRevalidate,
        NetworkFirst = workbox.strategies.NetworkFirst,
        ExpirationPlugin = workbox.expiration.ExpirationPlugin,
        CacheableResponsePlugin = workbox.cacheableResponse.CacheableResponsePlugin,
        setCacheNameDetails = workbox.core.setCacheNameDetails,
        precacheAndRoute = workbox.precaching.precacheAndRoute;
    setCacheNameDetails({
        prefix: "ss",
        suffix: CACHE_VERSION
    }), precacheAndRoute([{
        url: FALLBACK_HTML_URL,
        revision: null
    }, {
        url: "/assets/WBHeaderLogo.png",
        revision: null
    }]), registerRoute(function(e) {
        return "style" === e.request.destination
    }, new StaleWhileRevalidate({
        cacheName: CSS_CACHE
    })), registerRoute(function(e) {
        return "image" === e.request.destination
    }, new CacheFirst({
        cacheName: IMAGE_CACHE,
        plugins: [new CacheableResponsePlugin({
            statuses: [0, 200]
        }), new ExpirationPlugin({
            purgeOnQuotaError: !0,
            maxEntries: 100,
            maxAgeSeconds: 604800
        })]
    })), registerRoute(function(e) {
        return "document" === e.request.destination
    }, new NetworkFirst({
        cacheName: PAGE_CACHE
    })), setCatchHandler(function(e) {
        if ("document" === e.event.request.destination) return caches.match(FALLBACK_HTML_URL)
    })
} else console.log("Boo! Workbox didn't load ");