'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "d261168bbf57300cbc3915f8ef302252",
"version.json": "a853487c22af87ef05e2b98828b87147",
"index.html": "1a86576fbbfba205ba52e1ad52fc6143",
"/": "1a86576fbbfba205ba52e1ad52fc6143",
"main.dart.js": "adfcae009f4b4b0af074e80a3df7e693",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "1bb7f20b546437b98b805b999e9f7bad",
"icons/Icon-maskable-192.png": "1bb7f20b546437b98b805b999e9f7bad",
"icons/Icon-maskable-512.png": "d4004a47eedc1d7e10a085d80ac51476",
"icons/Icon-512.png": "d4004a47eedc1d7e10a085d80ac51476",
"manifest.json": "79cd0d37717cf8d0bb700cfc1ba0524d",
"assets/AssetManifest.json": "f14a28387c97f4bc2fbfe79b8be015e7",
"assets/NOTICES": "a655bae8d0e06cea6d1c8b54695164c0",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "cd89d4cbbdf816d45143300e12f865db",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "825e75415ebd366b740bb49659d7a5c6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "5e28745829ffc477b3e134e126d7d9b7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "bf21cd8fd775a3c59fd53afdee39e0e6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "07c7d62f22820e2729889f13689d6a84",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6e7e66287a756a75257f4d8314349e50",
"assets/fonts/MaterialIcons-Regular.otf": "570bd8555e27fef0042c5ef3d53ba3e9",
"assets/assets/images/guide/cp_menu_ru.png": "9487dcd2da3c82734fce72ceb8f58f18",
"assets/assets/images/guide/cp_menu_en.png": "335e72b974d7209859d524cb4bca7e14",
"assets/assets/images/guide/cp_down_en.png": "19397e7b84e3e3baa02031d4ad2bf5e9",
"assets/assets/images/guide/cp_upleft_ru.png": "0eac5d5505fb24728c427adeda5c6c36",
"assets/assets/images/guide/cp_down_ru.png": "9e68d89eee14e3c3863dc2963f56bae1",
"assets/assets/images/guide/cp_upleft_en.png": "bdeb0b78228aeee079e8795e209e1264",
"assets/assets/images/Trump-13072024.png": "bd507fe137390da5b7a619c5030a4291",
"assets/assets/images/8starSpeak.jpg": "c9db046652d29fb1163e1b3065452bfe",
"assets/assets/images/9endBegin.jpg": "993b4298280213dce9f4326b774fc75d",
"assets/assets/images/chart_example.jpg": "e07a47d8878e19ed860e8de0d475ca11",
"assets/assets/images/strelok-13072024.png": "e2ac585dec28e410d9628483dbd1c752",
"assets/assets/images/strelok.png": "2586a2e62ab3e8992af2fd634c24241b",
"assets/assets/images/Trump.png": "0c6b24777c38f7d742714f20fdea2846",
"assets/assets/images/7sintez.jpg": "1f09704be29b872e0d96c49cf889dbd7",
"assets/assets/en.png": "e667999048e9c8c5c5610d1d33908e52",
"assets/assets/ru.png": "96baaae92b38a76278c6cb85b1d81c5a",
"assets/assets/rive/model.riv": "87417b237c2a7ac24a6544c45f307105",
"assets/assets/rive/intro.riv": "92be291f07686acb610b4c1ccb2340b9",
"assets/assets/rive/cosmos.riv": "29c893a8ce9849a4927be02fc14b29f0",
"assets/assets/rive/planets_pic_1.riv": "7893734acd50d0aef2e76560c8305515",
"assets/assets/rive/domes.riv": "daf0f11c24e956815372caebd5475ea4",
"assets/assets/rive/main.riv": "1b898fe55be1e8622ca7b3c5cb9f6214",
"assets/assets/rive/mission.riv": "a5965d6572d0409f1c797bc78e32d4b2",
"assets/assets/rive/aspects_pic_1.riv": "d9f87714f6cdf593cbbcd562bad39a5d",
"assets/assets/rive/final.riv": "e5c988e9e8205135462856d72192eeed",
"assets/assets/rive/aspects.riv": "0f22a9506351a1f91160be81601f818e",
"assets/assets/rive/404.riv": "0fec7c958efa09f49bdfd8c4d1da93ad",
"assets/assets/rive/pathfinder.riv": "29ef05218d77053d8986f6d77fef35a5",
"assets/assets/rive/changelog.riv": "bbd152c9d1f0b58e3bf18be60e70d10a",
"assets/assets/rive/blog.riv": "5482f811c0b53963b550df318eb49fd1",
"assets/assets/rive/planets.riv": "cd4cd0552ae5a8338b286064cf8ecfff",
"assets/assets/rive/model_pic_1_ru.riv": "b030428abbb66028d22aff80d60229c2",
"assets/assets/rive/zodiak.riv": "2f71b794a34708659dbddcfee92ff5d4",
"assets/assets/rive/model_pic_1_en.riv": "fe44c63772e087761fc047f976078fc9",
"assets/assets/rive/solar.riv": "3efb777fe37c53017c4b3ee5dffbad03",
"assets/assets/banner_intro.jpg": "1e3789d32952a2844b8e402878eb9839",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "9fe690d47b904d72c7d020bd303adf16",
"canvaskit/canvaskit.js.symbols": "27361387bc24144b46a745f1afe92b50",
"canvaskit/skwasm.wasm": "1c93738510f202d9ff44d36a4760126b",
"canvaskit/chromium/canvaskit.js.symbols": "f7c5e5502d577306fb6d530b1864ff86",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "c054c2c892172308ca5a0bd1d7a7754b",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "a37f2b0af4995714de856e21e882325c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
