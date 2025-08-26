'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7d2e513e4253fd282f9db0ebd8e05185",
"version.json": "a853487c22af87ef05e2b98828b87147",
"index.html": "03aece83221a7e6198e8bc28600f94ff",
"/": "03aece83221a7e6198e8bc28600f94ff",
"main.dart.js": "93c96e04a3e74ca2e7187ec9944fbe6b",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0ba6a44fd0f22770741b1e7e7484332d",
".git/config": "746a4aea2fab1b6456006813653f7be2",
".git/objects/92/2669263f845aad3c20f176f46a6cc7ae9b4f94": "0304de8f72eb35804b857b8408093eb2",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d2db24e35d63d3286220d695c0cfb69c",
".git/objects/b3/dd16116c99f3925c54c86ee71cddc9243cf6a8": "2c08f38a5087d00c8941ba0705311948",
".git/objects/df/d23dee4b60bf998ef4e81dc0a36f60ba839efe": "10dbfa3a006c522be800bc9278ce757f",
".git/objects/c9/ae8d66b2bba07ea9df5ff54517c297dbfa957e": "cf68ed310c2f85f81145e1e00e2c31e3",
".git/objects/c6/831b2480f8fa5815d11d4023dc2ca4df68c529": "0fa3325317ed808f67eee48351f4cd10",
".git/objects/pack/pack-be43192a9d19ac904afc121aafacfd7ce352a184.idx": "146e58ed26906346b42af14e3d297266",
".git/objects/pack/pack-be43192a9d19ac904afc121aafacfd7ce352a184.rev": "325c141b17916ca95939fb843378932d",
".git/objects/pack/pack-be43192a9d19ac904afc121aafacfd7ce352a184.pack": "e0be750757b78a842fcea6aa9d3ccdd3",
".git/objects/42/924bd1264b95ad0394a4addb2e1877c1a57e8d": "f3c8b297c36d5538c51a3ad82d224ac9",
".git/objects/28/364bcc9c1e79b14d2130dc5942dfca5c6482ee": "71280c0c02a5daee5f4079d27f0554c1",
".git/objects/81/aa23971fbe30cbb65e3134638d9e5927822104": "cf7d14d0601b9231152868da48050396",
".git/objects/2a/1ec08fd679fcb8966ce2a88a06fbbfb538cae2": "97866ef25691c7fe1649472381ece12c",
".git/objects/5d/40dfc43876276a6fb5d04e6d8932db23a6a6a1": "2a1935bd9c10af336359eecafa592980",
".git/objects/63/fcfb72f663f90c9ed0f2012cac4ea5f3d8fb31": "39b9a939fdd88693a265d8a599c073b8",
".git/objects/90/aa7f8077624e79dd45f2974c7a4eb223c09410": "d5ae685cf4f0541956d6246091900184",
".git/objects/d3/55e20e99f3eaa59f97be93d7f838bf7d0ef667": "414cf70a56b8a7f4c51f677ded11565a",
".git/objects/dc/51d249de6d36387ec1335d1b47d68dd708bd2f": "cbdc453baa8ea22aae1038da198e4a78",
".git/objects/b6/19e8714ab3c9d842326d59434b209e31998c03": "b00dea8da72948634038f9f790e119e7",
".git/objects/d2/6fc7f632c0118a591bde8a81dfdfa15da11882": "ee06ae9b44285c2494a6f3b89aa83bc6",
".git/objects/b0/86163b7887f261561829d6c0831bd99b82031d": "155669c72c4e34ed29a2faa4a5559a1b",
".git/objects/f8/2aa756628385a91edba256978ca6b32672ab49": "c14deef0b6fca18792dd6c7c38fee5b1",
".git/objects/77/01ce238dd4d2d64525da2933e7d73f38e7571e": "55ca2f9b643ad07d034b48ad4bdcd1b4",
".git/objects/8d/e20be3f6f3a7522041333b1a78d9ffdc630ca2": "b63f9718431888084e7a7b1edb6439bb",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3106574f83aa34c0f51a95f59fb5dd18",
".git/logs/refs/heads/main": "2f220ea0d4afbcfa1ace14112d8a7bca",
".git/logs/refs/remotes/origin/HEAD": "d36817cae0c5ae076ef3bf2d7d02a778",
".git/logs/refs/remotes/origin/main": "ce5fd38b331d02baabe303cf245fa65b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "e36c85921c4f8c1284ff46267f6bb32f",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "e36c85921c4f8c1284ff46267f6bb32f",
".git/index": "dc4fc6d8f7e61994fff4d08d8cf5636a",
".git/COMMIT_EDITMSG": "9cd599a3523898e6a12e13ec787da50a",
".git/FETCH_HEAD": "39a2b97c652f1c81b697e491345cf02c",
"assets/AssetManifest.json": "e0229a13cbdc5fb50f30412a2f859945",
"assets/NOTICES": "ed01fbd7b38457dd56639a90db246cc1",
"assets/FontManifest.json": "97c2528ecc2fbf4093965257fdba1854",
"assets/AssetManifest.bin.json": "89e75dffc26107d0be1dc52fcdd2055e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Solid-900.otf": "e151d7a6f42f17e9ea335c91d07b3739",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Regular-400.otf": "a03d7ae50d2d2e00b33d40c6b114c1e9",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Brands-Regular-400.otf": "f190229e68100d2f97524038402c6d91",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3a6cb9dda0b3023e7e659c8cfea4b46d",
"assets/fonts/MaterialIcons-Regular.otf": "a54cc0d920f9c7b931855532a630c60e",
"assets/assets/images/guide/cp_menu_ru.png": "9487dcd2da3c82734fce72ceb8f58f18",
"assets/assets/images/guide/cp_menu_en.png": "335e72b974d7209859d524cb4bca7e14",
"assets/assets/images/guide/cp_down_en.png": "19397e7b84e3e3baa02031d4ad2bf5e9",
"assets/assets/images/guide/cp_upleft_ru.png": "0eac5d5505fb24728c427adeda5c6c36",
"assets/assets/images/guide/cp_down_ru.png": "9e68d89eee14e3c3863dc2963f56bae1",
"assets/assets/images/guide/cp_upleft_en.png": "bdeb0b78228aeee079e8795e209e1264",
"assets/assets/images/archetypes/base/archPioneerM.jpg": "70f92818f845ff75eaf268639e60f5d7",
"assets/assets/images/archetypes/base/archProvidezW.jpg": "f615a2f3ac4db152bf311a5b6da1ca66",
"assets/assets/images/archetypes/base/archNovatorW.jpg": "8fe8111db9dce2d5ff2e28d5b6879a4e",
"assets/assets/images/archetypes/base/archStrategW.jpg": "8f2885e4c0475d8616a58e86094556da",
"assets/assets/images/archetypes/base/archEstetW.jpg": "86cb9fbf5857d021482ada1a851c8d11",
"assets/assets/images/archetypes/base/archArchitectorM.jpg": "c79347ded510be107366295a14323d7f",
"assets/assets/images/archetypes/base/archAlchemistW.jpg": "0cc5434b7149ac2fe4f67ddeba55c0a8",
"assets/assets/images/archetypes/base/archTacticM.jpg": "b8cc049fe1b327341026be7d71a4ca90",
"assets/assets/images/archetypes/base/archTacticW.jpg": "dd455037df8723a75733a57295422a59",
"assets/assets/images/archetypes/base/archAlchemistM.jpg": "ad3544b2d63c7eefdc92bbd86ea7b37b",
"assets/assets/images/archetypes/base/archArchitectorW.jpg": "5768e220486ab5da7643482ad892fb00",
"assets/assets/images/archetypes/base/archEstetM.jpg": "68c87ab2234e8cd33f84e1af88ff077e",
"assets/assets/images/archetypes/base/archStrategM.jpg": "3250bc30bf938df238fd916dd757fcfc",
"assets/assets/images/archetypes/base/archNovatorM.jpg": "55410c165c1f7389641ace09183f0028",
"assets/assets/images/archetypes/base/archProvidezM.jpg": "db457cec807e25ed34c976f9b0eb2a55",
"assets/assets/images/archetypes/base/archPioneerW.jpg": "412cbf04616d17ffe35852e35a5441d3",
"assets/assets/images/archetypes/hybrid/mercury/mercury_mars_w.jpg": "3c6933f50908d78f81c15b29b9352161",
"assets/assets/images/archetypes/hybrid/mercury/mercury_uranus_w.jpg": "d11a45188b32b6597b32eb82b00b3506",
"assets/assets/images/archetypes/hybrid/mercury/mercury_mars.jpg": "3f7738110d846951c6c9dd38b388fdf4",
"assets/assets/images/archetypes/hybrid/mercury/mercury_jupiter.jpg": "6eb640e6965283c7e81239d3a6357be1",
"assets/assets/images/archetypes/hybrid/mercury/mercury_venus_w.jpg": "a72ae30428fe52521032530c0b8b84f6",
"assets/assets/images/archetypes/hybrid/mercury/mercury_saturn.jpg": "384036b007a25b5920ba7b4af5b2046b",
"assets/assets/images/archetypes/hybrid/mercury/mercury_pluto.jpg": "bd090671dda87ea979d4ca3daa46d070",
"assets/assets/images/archetypes/hybrid/mercury/mercury_neptune_w.jpg": "de8633ec8d5a5a52b20433fa302a2d21",
"assets/assets/images/archetypes/hybrid/mercury/mercury_jupiter_w.jpg": "91eec39c619658d6793258a3e78813ae",
"assets/assets/images/archetypes/hybrid/mercury/mercury_uranus.jpg": "53be5d055bbbd1860f61d659fe7a4fdf",
"assets/assets/images/archetypes/hybrid/mercury/mercury_saturn_w.jpg": "6be9dc46bb253213b9ed910fa75fd54d",
"assets/assets/images/archetypes/hybrid/mercury/mercury_pluto_w.jpg": "134aa54191c1e5ec60df297d91aff8b9",
"assets/assets/images/archetypes/hybrid/mercury/mercury_neptune.jpg": "fa053d9ad36c4e6bbbb7da13c8afc931",
"assets/assets/images/archetypes/hybrid/mercury/mercury_venus.jpg": "ca0eb1778f5337ae7b2eead2c6c784a2",
"assets/assets/images/archetypes/hybrid/venus/venus_mars_w.jpg": "8737376b2b470982547d8c1d0f21b587",
"assets/assets/images/archetypes/hybrid/venus/venus_saturn_w.jpg": "7e17b382e477a5a04eea22e0ab33123f",
"assets/assets/images/archetypes/hybrid/venus/venus_jupiter_w.jpg": "d8ac1383a4af38b69ec311eb2ac2a3d1",
"assets/assets/images/archetypes/hybrid/venus/venus_pluto.jpg": "60386a7fa54daa5a4bc6ac38bddbe600",
"assets/assets/images/archetypes/hybrid/venus/venus_saturn.jpg": "63bed11102b50abce485ff958874b280",
"assets/assets/images/archetypes/hybrid/venus/venus_jupiter.jpg": "07c4d1a454431d24289f1bd1d6620cdc",
"assets/assets/images/archetypes/hybrid/venus/venus_mercury.jpg": "f01e8a08017e4e5bb849b2264581560b",
"assets/assets/images/archetypes/hybrid/venus/venus_uranus.jpg": "97b39b7cfc220df7b18ab14e2b7ffb2b",
"assets/assets/images/archetypes/hybrid/venus/venus_pluto_w.jpg": "b4d9540b851dc2d30a139d32312aab80",
"assets/assets/images/archetypes/hybrid/venus/venus_uranus_w.jpg": "a946fc2a5bfdf464e89bf5d485b573a8",
"assets/assets/images/archetypes/hybrid/venus/venus_mars.jpg": "23d474f865039e1d75ccf1ceadc500e8",
"assets/assets/images/archetypes/hybrid/venus/venus_neptune_w.jpg": "b71562a99b106ec13e93ac14bd12a637",
"assets/assets/images/archetypes/hybrid/venus/venus_mercury_w.jpg": "52c914a582c3de83fc93735857660a8e",
"assets/assets/images/archetypes/hybrid/venus/venus_neptune.jpg": "06de697fec478cb8c1198469408a84d9",
"assets/assets/images/archetypes/hybrid/pluto/pluto_saturn_w.jpg": "c5e757aaf0be56b77c8f4662fb44aa62",
"assets/assets/images/archetypes/hybrid/pluto/pluto_venus.jpg": "3b7565f33bf96029d3d64c6ea7b0ce9d",
"assets/assets/images/archetypes/hybrid/pluto/pluto_mercury_w.jpg": "31b8e5a6e91228156c8d3d9f6dba6787",
"assets/assets/images/archetypes/hybrid/pluto/pluto_venus_w.jpg": "e8aa916c7311959d29d578bfb38ec4c0",
"assets/assets/images/archetypes/hybrid/pluto/pluto_saturn.jpg": "2b88aa95244c6042c11adfa2213cb407",
"assets/assets/images/archetypes/hybrid/pluto/pluto_jupiter.jpg": "b4ec11b2ef9b412b44d07d761313ab9c",
"assets/assets/images/archetypes/hybrid/pluto/pluto_mars_w.jpg": "cf0a21b097d5226531937fd6184e90ad",
"assets/assets/images/archetypes/hybrid/pluto/pluto_neptune_w.jpg": "0bf806356a45b7cb20a0f48c9bdf970e",
"assets/assets/images/archetypes/hybrid/pluto/pluto_mars.jpg": "91ff612ed6af9705c385c6832c1c4f0e",
"assets/assets/images/archetypes/hybrid/pluto/pluto_jupiter_w.jpg": "4ce6d419c228a14ce58d518bb7052972",
"assets/assets/images/archetypes/hybrid/pluto/pluto_uranus_w.jpg": "7d1cb5f667a8263f1b69c2c90984e41a",
"assets/assets/images/archetypes/hybrid/pluto/pluto_neptune.jpg": "29bd59ecbd5815a4b6e78f360543f70d",
"assets/assets/images/archetypes/hybrid/pluto/pluto_uranus.jpg": "4f4e3ad489c13b5c64f4f4a41ed5c64c",
"assets/assets/images/archetypes/hybrid/pluto/pluto_mercury.jpg": "3ecfc97317d01e5d4f08049ff7c90b10",
"assets/assets/images/archetypes/hybrid/neptune/neptune_pluto_w.jpg": "2440768b12c9423a1b6c89daeebe77ba",
"assets/assets/images/archetypes/hybrid/neptune/neptune_mars.jpg": "e5aaa41a0b159873c2da54b69dd2341c",
"assets/assets/images/archetypes/hybrid/neptune/neptune_mercury.jpg": "c18605a6a53f40a8f816c0d1908c2162",
"assets/assets/images/archetypes/hybrid/neptune/neptune_mercury_w.jpg": "ebeebae48707a056d67d3bcf0d7a96db",
"assets/assets/images/archetypes/hybrid/neptune/neptune_saturn.jpg": "731156328574f328dc7eb7743adba556",
"assets/assets/images/archetypes/hybrid/neptune/neptune_mars_w.jpg": "cd436544ccb8a6691e47f433c02e1c19",
"assets/assets/images/archetypes/hybrid/neptune/neptune_saturn_w.jpg": "c5e3386ec5ef787c75790f633d9d45ac",
"assets/assets/images/archetypes/hybrid/neptune/neptune_pluto.jpg": "96ccf2b8b70c82583b89ff36d358451d",
"assets/assets/images/archetypes/hybrid/neptune/neptune_jupiter_w.jpg": "9a708c7820c2bdba1745d64408e5c0b6",
"assets/assets/images/archetypes/hybrid/neptune/neptune_venus.jpg": "ee215dfd52af4fe7d864658509b5aeca",
"assets/assets/images/archetypes/hybrid/neptune/neptune_uranus.jpg": "2a927cd0fd055778a9253617489f0bf8",
"assets/assets/images/archetypes/hybrid/neptune/neptune_uranus_w.jpg": "e7f15de33fdddec876e49288abb7f1a1",
"assets/assets/images/archetypes/hybrid/neptune/neptune_venus_w.jpg": "c43598d6357f9b0b41d5377e6b0dd27d",
"assets/assets/images/archetypes/hybrid/neptune/neptune_jupiter.jpg": "10c41373a578b4642b614482da9ae5ed",
"assets/assets/images/archetypes/hybrid/saturn/saturn_neptune.jpg": "34aa4cd715e2f4fcf56b4f04eaef79ef",
"assets/assets/images/archetypes/hybrid/saturn/saturn_jupiter_w.jpg": "3c89f7cecd8606de44983bbe871d8de0",
"assets/assets/images/archetypes/hybrid/saturn/saturn_venus.jpg": "b22e476d9740a17549176863f37cc217",
"assets/assets/images/archetypes/hybrid/saturn/saturn_mars_w.jpg": "55bb6a7a450b26a68d542e876f2dd7b2",
"assets/assets/images/archetypes/hybrid/saturn/saturn_mars.jpg": "a5905a4b0dbd4c8d808ee0935416164b",
"assets/assets/images/archetypes/hybrid/saturn/saturn_pluto_w.jpg": "fe02e078d15deeee8e70b2bc4983e956",
"assets/assets/images/archetypes/hybrid/saturn/saturn_mercury.jpg": "262f4269de7d3b655185050ccdd1f84e",
"assets/assets/images/archetypes/hybrid/saturn/saturn_pluto.jpg": "5085042ca5a4c3fd7cf88435302dd212",
"assets/assets/images/archetypes/hybrid/saturn/saturn_venus_w.jpg": "0d6c294f3653c0eb7fca09f08f7ee43e",
"assets/assets/images/archetypes/hybrid/saturn/saturn_jupiter.jpg": "0ac1e9016288c32f6e3163fa74a84d46",
"assets/assets/images/archetypes/hybrid/saturn/saturn_mercury_w.jpg": "ec99e3eb7fbc7aa6ef01657d58732524",
"assets/assets/images/archetypes/hybrid/saturn/saturn_neptune_w.jpg": "68e011a01681fa866af27b8eba6a6942",
"assets/assets/images/archetypes/hybrid/saturn/saturn_uranus.jpg": "a1d3c6195e61e9baffb2b9cab737472c",
"assets/assets/images/archetypes/hybrid/saturn/saturn_uranus_w.jpg": "c4a13f0ab6003a87cde36e798044daab",
"assets/assets/images/archetypes/hybrid/jupiter/jupiter_saturn.jpg": "1ef451af826a2ab39b75545bb39eb9e7",
"assets/assets/images/archetypes/hybrid/jupiter/jupiter_venus_w.jpg": "be3c43d892bca284ec3b8f2fa5beebee",
"assets/assets/images/archetypes/hybrid/jupiter/jupiter_pluto.jpg": "ebd046f95cb584295df574189bbbc423",
"assets/assets/images/archetypes/hybrid/jupiter/jupiter_mars_w.jpg": "aa65e28ee73370639578a6ff4946ebd3",
"assets/assets/images/archetypes/hybrid/jupiter/jupiter_saturn_w.jpg": "27ea7bccaddd64edf56fd18228facc8a",
"assets/assets/images/archetypes/hybrid/jupiter/jupiter_mars.jpg": "d24069cc985a8c7d608c43987a8a2fd2",
"assets/assets/images/archetypes/hybrid/jupiter/jupiter_neptune_w.jpg": "03e73f0312f102c3a4a6b69e7f7f3db6",
"assets/assets/images/archetypes/hybrid/jupiter/jupiter_neptune.jpg": "130fcf6b82b70702a850443ad5ebe539",
"assets/assets/images/archetypes/hybrid/jupiter/jupiter_mercury.jpg": "a679501dc56f30b1362ef9e3d6f76ef6",
"assets/assets/images/archetypes/hybrid/jupiter/jupiter_uranus.jpg": "5ccc805ae1b1cecd1e6e6396743afd44",
"assets/assets/images/archetypes/hybrid/jupiter/jupiter_pluto_w.jpg": "1f5c6d23e5b0717e7d45b7de05c881e6",
"assets/assets/images/archetypes/hybrid/jupiter/jupiter_uranus_w.jpg": "e8f0301ece9e2ad2ce50b1289a6c138e",
"assets/assets/images/archetypes/hybrid/jupiter/jupiter_venus.jpg": "d2ca3296af249cd774bf344bef1d14c6",
"assets/assets/images/archetypes/hybrid/jupiter/jupiter_mercury_w.jpg": "e21d0654f360a63a538f15ce82dc5e5d",
"assets/assets/images/archetypes/hybrid/uranus/uranus_jupiter.jpg": "59f84c520bf7a2dc9f8ffce1a751b5fd",
"assets/assets/images/archetypes/hybrid/uranus/uranus_pluto.jpg": "81294ce001229b192b6b3bbb90eb2570",
"assets/assets/images/archetypes/hybrid/uranus/uranus_venus_w.jpg": "0b55e85d63db5a89f75cd7d4cf05feda",
"assets/assets/images/archetypes/hybrid/uranus/uranus_jupiter_w.jpg": "2098dbd290279fa27df254a19e0d7ee4",
"assets/assets/images/archetypes/hybrid/uranus/uranus_mars_w.jpg": "ce7430ef1be118c1912e2040c52058b6",
"assets/assets/images/archetypes/hybrid/uranus/uranus_saturn.jpg": "6316aa71c5a47ec5dfad1ab8bb5beeef",
"assets/assets/images/archetypes/hybrid/uranus/uranus_mars.jpg": "77b4bcc1b414ca8ff03322bef362d924",
"assets/assets/images/archetypes/hybrid/uranus/uranus_neptune.jpg": "0a7c983edcb50e3e602fb9b6be10fa04",
"assets/assets/images/archetypes/hybrid/uranus/uranus_mercury_w.jpg": "c3a257dbc1876d10a44f7e5016e47768",
"assets/assets/images/archetypes/hybrid/uranus/uranus_venus.jpg": "f0d66eecc5e9bcfdb42bc912e67e8bfa",
"assets/assets/images/archetypes/hybrid/uranus/uranus_neptune_w.jpg": "44872ec9a8c92800ab7eca1a38e459e5",
"assets/assets/images/archetypes/hybrid/uranus/uranus_mercury.jpg": "8eef2a77ac8e8e40df7ad96a6bf29e57",
"assets/assets/images/archetypes/hybrid/uranus/uranus_pluto_w.jpg": "c8193150107f3ef7185c87e476c0798b",
"assets/assets/images/archetypes/hybrid/uranus/uranus_saturn_w.jpg": "bca10c8ba34e109648a5baa166f96b1e",
"assets/assets/images/archetypes/hybrid/mars/mars_mercury_w.jpg": "74e3e9afebc582126f8bb249e71557a5",
"assets/assets/images/archetypes/hybrid/mars/mars_venus_w.jpg": "f247fe43e691799e482f9a2d176db124",
"assets/assets/images/archetypes/hybrid/mars/mars_jupiter.jpg": "bdb1afba04c0aaeb43c32d20fb5e931c",
"assets/assets/images/archetypes/hybrid/mars/mars_pluto.jpg": "8bfd27b9eb3749a76ea8b4c13738a997",
"assets/assets/images/archetypes/hybrid/mars/mars_saturn_w.jpg": "a9c62a3ed17986006c1e05161755a6fb",
"assets/assets/images/archetypes/hybrid/mars/mars_neptune_w.jpg": "0556603b01a6363e912a5186b7a3f9b5",
"assets/assets/images/archetypes/hybrid/mars/mars_saturn.jpg": "05c2ee112676451a8a912d83f17da59d",
"assets/assets/images/archetypes/hybrid/mars/mars_uranus.jpg": "e99ae7dbf9b47a7cd20adb7fc6a5a6bc",
"assets/assets/images/archetypes/hybrid/mars/mars_jupiter_w.jpg": "7f33734e307d68002428cbb03c07011f",
"assets/assets/images/archetypes/hybrid/mars/mars_neptune.jpg": "0135f8da04f188315ac70095025bc2fd",
"assets/assets/images/archetypes/hybrid/mars/mars_pluto_w.jpg": "07c4ae6149df0cc252e8102186927ff8",
"assets/assets/images/archetypes/hybrid/mars/mars_mercury.jpg": "1845c99efb0d20fe78ee6e810041ea71",
"assets/assets/images/archetypes/hybrid/mars/mars_uranus_w.jpg": "7139772f613fe701798f1a2e98db1d65",
"assets/assets/images/archetypes/hybrid/mars/mars_venus.jpg": "615ee82560427ed5d65ca4f35c2875af",
"assets/assets/images/scenario.jpg": "f450baf6fb121698f2ccd73d94b482b4",
"assets/assets/images/books/Trump-13072024.png": "bd507fe137390da5b7a619c5030a4291",
"assets/assets/images/books/8starSpeak.jpg": "c9db046652d29fb1163e1b3065452bfe",
"assets/assets/images/books/9endBegin.jpg": "993b4298280213dce9f4326b774fc75d",
"assets/assets/images/books/chart_example.jpg": "e07a47d8878e19ed860e8de0d475ca11",
"assets/assets/images/books/strelok-13072024.png": "e2ac585dec28e410d9628483dbd1c752",
"assets/assets/images/books/strelok.png": "2586a2e62ab3e8992af2fd634c24241b",
"assets/assets/images/books/Trump.png": "0c6b24777c38f7d742714f20fdea2846",
"assets/assets/images/books/7sintez.jpg": "1f09704be29b872e0d96c49cf889dbd7",
"assets/assets/images/synastry.jpg": "0ea440bdae843b939abda2bb329694eb",
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
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
