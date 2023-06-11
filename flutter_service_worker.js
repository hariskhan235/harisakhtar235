'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "3c1fe710cac4d08f81457c45f15c3e30",
".git/config": "8725093b55a7a16b36acfbe1f1f75eaf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "de11f505ebd30c78ac2d283a3fa4f67c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b7d1c86ce2f4632e99d5e90f5379c10f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9172ed2a95dfc5b12044264d286c50ff",
".git/logs/refs/heads/master": "9172ed2a95dfc5b12044264d286c50ff",
".git/logs/refs/remotes/origin/master": "da75b7a951b888e5990b44d9eab593d2",
".git/objects/04/0b33d7208e5bffee961bac3e552a128fa7254d": "96b877ac9c0207022deda6e7268509a5",
".git/objects/09/fe01553863e6a93d89d751d77ed7c527570399": "42516800e693568ec6a2614c97a08213",
".git/objects/0b/bbb998224141b99eab6d2735068dd82584a54b": "d56eb6743523a1229c5ec3971397ed26",
".git/objects/0e/1b16b929df2c8f2ed28ffcdcdbaa6f7cdf5a7d": "c188fece68947ce0350f6c9f4363a2e2",
".git/objects/0f/b43636cc9efca5da7a71a2c95fe7b4030f4303": "a1a607dff18d29a315ec70b2986f210a",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/14/3a3be2b51f2166b95929f9e7f47140f8b08be1": "868fb5fea78fc36bea886eec9db5863e",
".git/objects/15/0ad4e3fb72bad2ba50fa107706628b5e7e4e29": "0ca865ed8412b674e2f825ec8b8f659f",
".git/objects/1f/39aaa8f7ea70e8d242a0188702dda44173ece1": "c33cc21e5f462ddb36e0a172ab1ae94f",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/8ee81563aeac6a9521f02b2f2130589c14b8c5": "a29ac3136eee29a9e824a7fa27053152",
".git/objects/25/33a85c38539f25062dda6e60f2363376126148": "c32e548313889c417fce8ca45a015223",
".git/objects/25/9c4d664a3cfafaa45d7e4378eed89690dab4e5": "70617cc0c966073ba58cb515bdeae100",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/30/bdcfcd4809c9192032e27fd5f2fcca32ee3cdb": "701df854c6ed5f84894847304b7e6222",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3b/0a14670803adf26fa027653a25e8b3352c60cf": "78b27f1c3244926ba4c86997c7cd04c9",
".git/objects/3c/1072cbe4556e718abf0b34fda9c6ad12555143": "a0aa9afe709dc9e8ee5b180abcc0ddcc",
".git/objects/3d/3ee4a025d1a1fec87536562b0afd3dfab395d8": "218dfe4f265f5332ac4dc38e673346cc",
".git/objects/41/3275628b7d298ba7acc07ac469a95379916541": "032eaf499278f04fe42d39d5a4c139e9",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/01f2839f08d04a1b82ae8190c229f4e34e8d2a": "637673214e0cd597256acd0666814e36",
".git/objects/4b/82c1667e377c94a5ac1258b00a0bf28551b459": "f6365ecf5930314bb242c30044215966",
".git/objects/4b/c305b0e11451aa5af4234149c51156251908c9": "217c5457c4b2a299a30f231a73d1accc",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4e/d728f8ca83f912738a624fbf7b8a3a8c4378e2": "f0e881457e55f5cb60e3974778594623",
".git/objects/51/39f2e9b89a8626345cc955dd8ec8b0991b70a4": "82a8b860d1451e6a0130fbb79170b82a",
".git/objects/54/709a97aec3b320fd11829ea5e79f0a31ca742a": "006f0ed0b9202eeb0d3ae4d67525d571",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/55/f5023f3857d0212875b56cdf54531099d6c30a": "b6a9f51e8bfec632a56e9d86a407ad23",
".git/objects/58/3e5cbb0eb77be81f2e0a8d0bc2646d1ef6a91c": "e390b0d62b3c4f0f809c3729080fd207",
".git/objects/59/fbcdd760e224c6f15ab2976948d90ee1b8a02c": "c3b5efce00f34517fa1da43baa5528dc",
".git/objects/61/40abeb994d7797bec45191f3e8cc99b166d2d2": "09fd1b8e342e0cc266edbdafb9021da2",
".git/objects/64/4a12fe890345de1f9ef137775f60864ad1853c": "41b028b879ff2ea51ad56bff04d97154",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6c/0a4aade0209f2f1c38a6a523f44b49289c28d1": "1aa78b5b4e93983e15f9e8e3f285ed2d",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/73/d21573d49954e851c83b987cdcc2e9e55479fa": "76b0ab0c504a3f00df2d41cda5c88c1c",
".git/objects/76/bc4b0612d734273f0e1d0c0a973bf5ba79b64f": "4c1eb714cd54c6c9b93c3eeb1dc43696",
".git/objects/78/38a78c4c608881ff29233c05ea6c2d237e852b": "da89413e5f3172562c2431b35d79411d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/bf449ef4298b58fd0751592399d5a16504f349": "53eb16687d5db486d96d5d2db9d77657",
".git/objects/7c/8977a59e660ec695b4e7e272310e47836bbf9b": "56ce16e94ab99181c6b53124f6ac74e6",
".git/objects/7d/120c3e57ca0dc91bb3570c12e1bd79ff73a89c": "f61ffaa4643a73134a5a2ca44d786354",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/84/f7c000f959423934f49044e94df423e251a346": "168df1d3dc008988fe2c5bad91ca3a00",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/685c6fb251f4c2716e70647c91489fb3b04c46": "20397f829572d820ea94cfbba784e239",
".git/objects/9a/145fc92b2dabecb90eb50594aa7d64e8044ca7": "f5f9a5fcbf3cf3318e2fc4beadadec27",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/47d7530b17547f40e077669375b1875461b335": "9e2b85de372e6f80ffa977145f86f3c4",
".git/objects/a9/98a0b52a34e7fe15ca4648454c78553af24968": "feffa7888caa42b7e14b2f84f72ef5b4",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ac/17d510246b267da6d2262a633f6f38cfcaaa6d": "4892b70b394e8e2e942a2a11ef841642",
".git/objects/ad/9eb33de7db1c3aed7da07924d9c48527aa3797": "624e81350f658e58a6001f66d545fb8f",
".git/objects/af/70695db1879a617e6e9249ac0673809c8a373e": "091521dba94efb4e98ba02226888afe9",
".git/objects/b0/0b3294bfbba16f7b99d0ea59f73aca63c26d78": "45937cca14a73321d58efcc4fd88ba93",
".git/objects/b6/edb50e7c849674d67da631e1b8d1f844a891cc": "c429d37ce43a29b8fb359aa59e2daf0e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/b34b1d678c1de94ad5a4c659a165e3a8018c38": "1eff6aa3b513324b37786ae0a4a4accf",
".git/objects/c4/2327acd200cf2ca0f62fa2d0d6077585f36026": "11daa091f966a4034549421051338b38",
".git/objects/d0/91c28f04211f6ea515ecdd907ecf6e16ed0d85": "f9f4b973fcb52d2080a3abfd4b71e50a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/821f93528caa476eec0106777787a966406f73": "57d9772fff011752b24c20521b674371",
".git/objects/dc/eb3cd692366aa3bb96904ed06af5f2f20d308a": "d0ac5474f56fef67128e8dc78d1831dd",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/953d1535294132eaa40f80a19aa5a57d691174": "b96e766f5f660eca2cb0df32301b16c2",
".git/objects/ea/6c9b6f886b407f07df47edac9104ff8b6a37d2": "af085a78a4e708a92a887b2fd5a97dd7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/56a4cf45572e43a62250ce980b8f6be7c3da9b": "0e67ec7801277d3a581916b43246acdb",
".git/objects/f0/5da481ea5e2ada9d4d98e9827e767fca4866ac": "b72aba0db28734a5baaf33ea7b23b033",
".git/objects/f0/7e91a8a785bd0a991edb6ea6834f4449ee55ea": "4aeab29ad9f511e97a52f06d59b808a7",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/f8/d5a57ffb2be11dc3e4a36dd5377e1611e63d4c": "4d124e90615f3b4669a66562c0ee8741",
".git/objects/fa/35b912678b3b5847838fa00abcf2be6461803e": "6e1ea0dec64413eee8e59605b2f96c6d",
".git/objects/fe/e1c24bb489f996106c8c5838aff4410e9da5a6": "85190c000c005f2d9fbec519eae24789",
".git/ORIG_HEAD": "5d07bd21dca8eb51b476daf5a4b5d118",
".git/refs/heads/master": "afa3b604eb9e267770f085073f666935",
".git/refs/remotes/origin/master": "afa3b604eb9e267770f085073f666935",
"assets/AssetManifest.json": "f189f28af1247339aef683a4ebe84b3a",
"assets/assets/images/home%2520page%2520logo.png": "73d3b66900a6fa24e547de31616059d1",
"assets/assets/images/man.png": "0ab0f4dc74d326b3cac832fcb9e9b1a3",
"assets/assets/images/me.jpeg": "b4116f375860a8712f0757befa27cc3d",
"assets/assets/logos/adobexd.png": "a0899133b64247a024570b6207322413",
"assets/assets/logos/c%2523.png": "6d7b9eb65af97b72d35c04873966ddc6",
"assets/assets/logos/DartLogo.png": "9271c5feaa7176d4bc87467c11eaa8c0",
"assets/assets/logos/dotnet.png": "6eb1ee09009290485f0821da594aefa5",
"assets/assets/logos/FirebaseLogo.png": "264b4af3b14bfeca830e7bb11f17ba17",
"assets/assets/logos/FlutterLogo.png": "1f3a520cd9695b0b91d803b9dc42a4fe",
"assets/assets/project/covid.jpeg": "c35442d72de718e47abebd164f604d87",
"assets/assets/project/hijria.jpeg": "51dbd7e80418860eb2f219e35199d2c1",
"assets/assets/project/notes.jpeg": "aa698e856d152f0f7270f28ce642ef94",
"assets/assets/project/omdb.jpeg": "afc20527c704830ff4899163f3642f91",
"assets/assets/project/Project1.png": "fe0e8ea646bbc6436d05130cbf2cb7f8",
"assets/assets/project/Project2.png": "f3a18f1a5a2995072b48dc15065f6c3c",
"assets/assets/project/Project3.png": "1be548c2710469e42a54f6906124ebd6",
"assets/assets/project/Project4.jpeg": "f4c7b3a2f428537e8ec8c7faebec5066",
"assets/assets/project/Project5.png": "ac98408a3e3a593d1525db006bd95e8c",
"assets/assets/project/recipes.jpeg": "2b81e6c09fbd065a8aced0615ebe7de3",
"assets/assets/project/shop.jpeg": "2635678eb1daae9b965b07da5414d395",
"assets/assets/resume/LatestResumeFlutterFarooq.pdf": "a92bcb65f34fdeedb5eb3faa4d19c82d",
"assets/assets/resume/ResumeSoftwareGeneral.pdf": "e1b26331e1c806f3a43dfc5f1fcdcbcf",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "a62eb75daa5c9615fde76cc9fb092798",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c35c46b07049468e19c0f5985da72e54",
"/": "c35c46b07049468e19c0f5985da72e54",
"main.dart.js": "fb9f9133cb96c12faf63d28b06973d0b",
"manifest.json": "034588ddf36613f6237a671471d9560d",
"version.json": "48ead6b8f661dc5eb610ad10195fdc95"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
