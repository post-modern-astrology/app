'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "babce72e7bf92ea71f67c0bd860b84c0",
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
".git/objects/61/46ff80d84765c2387e8a44f0242df92490dab1": "7215dd2d06bd27fa57c8fd1b1010ac96",
".git/objects/0d/5e0893c10d30d2e92308a84c7797c4ece3638b": "b2abcd346070b39c4fd929b860d5a5b0",
".git/objects/95/2ea244eed78a18f9c2d24d83ebffb73a3402ea": "d0408090c32b0af6c446933f1c19fd8e",
".git/objects/92/2669263f845aad3c20f176f46a6cc7ae9b4f94": "0304de8f72eb35804b857b8408093eb2",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d2db24e35d63d3286220d695c0cfb69c",
".git/objects/3b/93190486be45b30ec63d265c7c0e91a0b56f39": "114930f48f3a89d0eb87577f2132516e",
".git/objects/03/7f66c2d82c7cf7ec4f9034b7189ced7f2b54d8": "2ce4b5ce554896739a8e0a17fb4b6c61",
".git/objects/69/b0a76eb4482df6da874c3337a05e5b58a179bb": "5450a310332a7a88cb14f28b0dec42ff",
".git/objects/51/93714dc56ffe2aee1f24fabae55d33bd2fc2c4": "68bcd0fbf3a804e75f085bb7bf53ba3a",
".git/objects/58/ac7e4d2d3e2ae5e1395dc07e2e4a700f02142f": "7cf8e5212f98d2f95d23b2a6ca0ce159",
".git/objects/58/4e50a9486cdaa47646041933f1c3fa512dd220": "81f663c80c9fbca04541d98aa0693f96",
".git/objects/58/a1eedfbeecf5f14e1ef0771f3d3acdf110afe5": "61c2e6f31b32b5aba851822a1d936112",
".git/objects/0b/f1f14ceb99905e3915febba43897f8f9357b66": "53289112b764f0058fbaf6c408afd476",
".git/objects/34/a672b57c53f53e2f0f287eb94a4322b9907d78": "4ec5e0d098d0e2af4061b0b7ee4717e1",
".git/objects/34/c2c6f1da2e36d62448ffe147923c320d6be87a": "099065bc0beceffd3acb27aa994ba621",
".git/objects/34/752b0ba4504ae44373a81c19e2bb1d13615d6c": "bb7ff441c396e59439e61895df0f3414",
".git/objects/34/05dece486bf42f0f81dc670a8d4641b1fa54d0": "c89fed9ef91c9f5aa3bb452c3ceecf2f",
".git/objects/5f/9f8750ab4ed4b426d04564abb2612fa65ff2d1": "bb0e91343a8f3ec42886f94dd3ce7c6a",
".git/objects/9d/c2d9562272a00582d8032bfe8e5ad08ce8e503": "9c5892cd2b8655f6da7034e6e2683d24",
".git/objects/9d/a46329185c7824b7c20c33c0a05819f4c2b9f2": "b87f825c4dd0ae1bc2efba7125e49976",
".git/objects/02/c85bc2f4dc9370f8bdfdb575901cd27fc23499": "40d39630ab10749cf5af746a599f0ff4",
".git/objects/b5/253bb848b60cca7acde5be473dfacb78734fc8": "367594ad127ab806e34883d30b451b3c",
".git/objects/b5/234078ec2e4ef40d0441289fc30d50c25ca8e1": "2327da93f910d033a7a58549e2a3640d",
".git/objects/b3/dd16116c99f3925c54c86ee71cddc9243cf6a8": "2c08f38a5087d00c8941ba0705311948",
".git/objects/df/d23dee4b60bf998ef4e81dc0a36f60ba839efe": "10dbfa3a006c522be800bc9278ce757f",
".git/objects/a2/1d74aa0edf1bf51ade44402bfb6c416b5f953d": "86256473439bc5a0c2da7a00f4e0c702",
".git/objects/a2/c62f024611a0d7879c399e3de9a7193943dac4": "04405973f5a972a8f009a59bf42dce5a",
".git/objects/bc/14d09c244bb956d1f8296d87363d6bece469d1": "692c02de4980dfce3cc521bdaa4f7ab5",
".git/objects/ae/534298a64edcbf4d9099e89ae8a7c607c7a389": "5125a8c1e32476b5b3b840c3b3682b70",
".git/objects/c7/068fdd4cd9404ca9171002b1c5e8ba4b8483e2": "bcd54d47c1dc7005a1beaf015c61aa27",
".git/objects/c0/5f3d658f77bb112fe819158e65181768b6c7a5": "6618bd025feb620d5db65a01ad85a28b",
".git/objects/ee/50b17b72f3a0741471233578cc39c9a03ff607": "3e7c1551d581c65ec3892794530b1f39",
".git/objects/c9/ae8d66b2bba07ea9df5ff54517c297dbfa957e": "cf68ed310c2f85f81145e1e00e2c31e3",
".git/objects/f2/7a650947bc559ee7c2efe9b1093b97b3866d4a": "cabca92296fa705f9582f539819329d9",
".git/objects/f5/38c44e1a8f58433ece1474dbe678702f41586f": "52c1fff68c5aec9221787630c8f83037",
".git/objects/ca/2fe9827208e666fb4848ddfb0ec08300de2c95": "e4240d6ee89dffe212c697d2358527dc",
".git/objects/e4/e621d499cd0347115acafce643c3de26a1fe38": "6e71c349144db0a962f67af7783d0c26",
".git/objects/fe/4d625ae86f20ec0dbf1fffeb8bb04befa7fc0c": "e1c3d0ec9bdd78deca979b73b5eea052",
".git/objects/fb/31d5a805190a7b06f0e09430782215a8b1c19b": "632f10683c948bb79fb857441e77b2f8",
".git/objects/c6/831b2480f8fa5815d11d4023dc2ca4df68c529": "0fa3325317ed808f67eee48351f4cd10",
".git/objects/c6/fc69abae4eaa8a1835c2615a00bd70a26291f1": "a50f6e8acc1c608b52915f6038e1e7d8",
".git/objects/4b/4e558d228426f11b48d57e17c393ca91a48252": "41294fdf6cae88ca62a04557bc4f5a6e",
".git/objects/pack/pack-be43192a9d19ac904afc121aafacfd7ce352a184.idx": "146e58ed26906346b42af14e3d297266",
".git/objects/pack/pack-be43192a9d19ac904afc121aafacfd7ce352a184.rev": "325c141b17916ca95939fb843378932d",
".git/objects/pack/pack-be43192a9d19ac904afc121aafacfd7ce352a184.pack": "e0be750757b78a842fcea6aa9d3ccdd3",
".git/objects/7d/a5d7e6d5f6a9d71009e3e8e58f9fd6bc1f44f3": "048166f993d2c8ef4e31347a6d7da25b",
".git/objects/7c/45fb27db8a234e10f4306d9693db60241b34e1": "a54a3c6b6c404bb8d41f2a7f4005ef70",
".git/objects/42/924bd1264b95ad0394a4addb2e1877c1a57e8d": "f3c8b297c36d5538c51a3ad82d224ac9",
".git/objects/73/b49e7e95ed4a39c2a93167035776813b1409ff": "72049f768092683ae963fccdfd46501b",
".git/objects/1a/ea645ee033dde4b767333901d2ec12dac8e8ab": "640a1248b2dafa89fdd8fd2ab89efbe2",
".git/objects/28/364bcc9c1e79b14d2130dc5942dfca5c6482ee": "71280c0c02a5daee5f4079d27f0554c1",
".git/objects/17/d6c5b024c4ab9791631b033eaad3ad6be4a94e": "fb75b1d66546939dc0783f510d441f76",
".git/objects/8f/47b58b69ba6c77be124d893d5876daf57a2b2f": "0af3f57284216177be4a0669f0fcb946",
".git/objects/8a/30c6e1447e3e70ced623504c259ab90e87f871": "77a91ddb8c2de5096e929182c0d6c895",
".git/objects/7e/24b8e5da50befd191b5607726aedfe74655077": "ee70e3e19226da42578507a0bef2000d",
".git/objects/4c/ddc9810f8e0d6551f1559f8f99823304a2ceaf": "4e552a53c05d75893783c2d9bfa17c81",
".git/objects/21/f958b88a24c50fae531ff3b14c14ad30bd607e": "4b31de9319dd91b722c2d9d08a5f6121",
".git/objects/21/2dd767887a5612f6103c1237f9ff1bb4cd8004": "b303eb5f0776d40646636b8e95cda5e3",
".git/objects/75/4e1fdfcf97d3fb10478701295637d6a6abb459": "0e92747c6c8619d62f2e20325c6664c6",
".git/objects/81/aa23971fbe30cbb65e3134638d9e5927822104": "cf7d14d0601b9231152868da48050396",
".git/objects/2a/1ec08fd679fcb8966ce2a88a06fbbfb538cae2": "97866ef25691c7fe1649472381ece12c",
".git/objects/43/3a9df746f5c9292423562e07461b3f67fb8ec9": "943535d0aa5b131a88645ee8027dae72",
".git/objects/43/b84aa4ed6eb110197bdde0c10815f5d0bae23e": "680b0dbae22b30150b014f29bda86290",
".git/objects/38/a3408f54493a27b9b82059460f622c27fc744c": "170fefd0241c9ee6b2bc7954f103875b",
".git/objects/5c/5dc9fc051bcc06bcfa7efd37642e5d490f6263": "bc2273f940bf913a3d9a4b082e43f4fe",
".git/objects/5d/e798168e3b8c7bfac0b5449816f074d989a668": "e4c2d8d01816ba7faf54cfaf145b92c7",
".git/objects/5d/40dfc43876276a6fb5d04e6d8932db23a6a6a1": "2a1935bd9c10af336359eecafa592980",
".git/objects/31/e6546ac623cd8ebf16d749e05ef27d935a1f72": "08d21b9063bd658182fd2cf26c25ba0f",
".git/objects/31/a8f425d7d15db8017a620d4bb8fbaf073e2d68": "ec064a1bf3f0f140ed66fbcee7885401",
".git/objects/91/c96fc02160a2ee33c522bd27575a86dd0fbf06": "ae86c3f3d90df1f4d131729903e071d3",
".git/objects/65/6fb1818e4c9101cfc0aa66ad305babcc34349e": "b58ae96a75fb47aa20f24bd7c50859e5",
".git/objects/06/3bb06cbed0630777a1fd4fc34179d9e00f047b": "5baedf8e3502842615a35ec61c2f3149",
".git/objects/99/530c075aa417ebf03f9133f45591f96dccd624": "cf4be93f576ec5df9f682934f3b90bff",
".git/objects/99/3da8fef3bce9a8efb99e5b882e5dbe1a573a31": "aa8c1cbf4c19a8e1e44500de66e2d5b3",
".git/objects/52/dc08adaefcee032099021e92f6e29d8a0ca34c": "783dd5d523487eb7fcdf7a255ef0112e",
".git/objects/55/0fb0fc8300946c4e00f817e1f10aadeb4d766a": "62e73277660b101e4ad225963c429c26",
".git/objects/63/fcfb72f663f90c9ed0f2012cac4ea5f3d8fb31": "39b9a939fdd88693a265d8a599c073b8",
".git/objects/64/feb961fd632391801a3aee28bda9819a344cc8": "13cc8c3d46819c1695b7df0aa50902ec",
".git/objects/64/1d08e40258dd3f8178841fc9b579cf1b90ec84": "1e85f64ccb64be70a1f61b2b0d534f80",
".git/objects/90/aa7f8077624e79dd45f2974c7a4eb223c09410": "d5ae685cf4f0541956d6246091900184",
".git/objects/bf/2e330174470ae5f2e923e6e887fbf563a6aa1f": "1ef4a82baa3eeec6f67d2b3810509425",
".git/objects/d3/55e20e99f3eaa59f97be93d7f838bf7d0ef667": "414cf70a56b8a7f4c51f677ded11565a",
".git/objects/ba/370f3a3906cfac911544767f39ec5454531cbe": "dd3fc899f12a97d3e98f7346eeb70166",
".git/objects/ba/3c2864a2e447f140261950d3e9df1a3375406f": "dfa5d1857c6ee419964071c8f681fab1",
".git/objects/dc/51d249de6d36387ec1335d1b47d68dd708bd2f": "cbdc453baa8ea22aae1038da198e4a78",
".git/objects/b6/19e8714ab3c9d842326d59434b209e31998c03": "b00dea8da72948634038f9f790e119e7",
".git/objects/d2/6fc7f632c0118a591bde8a81dfdfa15da11882": "ee06ae9b44285c2494a6f3b89aa83bc6",
".git/objects/b0/68f2380ffd3bcde812d123e142fc0292e267a4": "ebed6e47945538eadf13c80b488cf7be",
".git/objects/b0/86163b7887f261561829d6c0831bd99b82031d": "155669c72c4e34ed29a2faa4a5559a1b",
".git/objects/a6/7b191574e0f3f922a19f057e94ebb3138a8476": "64515ce29a0a4e78e9c73dba91b17d2c",
".git/objects/a1/15609a89797374c1ac50db32ebb79acee55e18": "a8ad284291e0b423bb9cc4af706cebcc",
".git/objects/c3/de92ca7ac78317c9d4125db9ace697d1c2b54a": "153094c4369b388bc8b6ae4473f9dbfa",
".git/objects/ea/773e13b2eba30166f746bb799850bdd7c69c4b": "0afd67d6b3297e3c4ae926819b9060ef",
".git/objects/e6/19addb810cf31e0077e24912d72984dc6f8ece": "fcb2dd28ef894468c607be855f532db2",
".git/objects/f1/4283856bb411a064fadcc116d087e51d177306": "42a0b7e3af5a25bac2255fb7e63c3813",
".git/objects/e7/c94fead77b29eac7fdc952d27b7ce14b2531cc": "7132704ed709023fb439b0b9ef72f0ae",
".git/objects/f8/2aa756628385a91edba256978ca6b32672ab49": "c14deef0b6fca18792dd6c7c38fee5b1",
".git/objects/f8/4bd3f6cf83a8859ac519060a8125a65eb57698": "00fd59560320fdc8a997a6eec0526d2d",
".git/objects/ce/ecd20894dda00531718a147c8fa5cdc2d67965": "27b8199dd5ef4e2c8abf726147725461",
".git/objects/46/6a233c1faa2d298dbf57517da9b2ac87a56d61": "0a4adcced9dfc2a8165a7f306c0438c6",
".git/objects/46/cd768f48b8a282a91c597fdd18bd6b29c03264": "277babcc3d2ebcfd4b4f6cd8235069c6",
".git/objects/46/3020a90536ae1864dbaf606d9df804c68ae71c": "7d6c9e29ef0ea616963c1d4a26ddef82",
".git/objects/77/01ce238dd4d2d64525da2933e7d73f38e7571e": "55ca2f9b643ad07d034b48ad4bdcd1b4",
".git/objects/24/8fd10f4d6a8b40ae390ad4b0923c59828ec682": "74efe6cc4d2f291a27b0ff9655246dcb",
".git/objects/8d/e20be3f6f3a7522041333b1a78d9ffdc630ca2": "b63f9718431888084e7a7b1edb6439bb",
".git/objects/12/e08f5430e77e37ccdd8a51dd2d89641c642f76": "d60c0a14cbcd2f0c17433d2addbf10fb",
".git/objects/8c/8a40a460cac3bb053edf8599b296a2c5bb11f6": "a0ffa9b95bb3c9523c67393047554e5b",
".git/objects/8c/8bc5c67d20d8a20f018ecc10c1759e60c2b1e9": "ed7d6a9116cfe7eda8f1c26e016b993e",
".git/objects/7a/e14b1e20564c867fca87213e09b77afd036f83": "48393b4974f638c2e99ddfea26e0a483",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1387bad1882fa329dd02f9bddb2df07c",
".git/logs/refs/heads/main": "e03d3ab2559f7c4af750ba97ddaae988",
".git/logs/refs/remotes/origin/HEAD": "d36817cae0c5ae076ef3bf2d7d02a778",
".git/logs/refs/remotes/origin/main": "a7403bed4ad76dc0a2443f71f00b7581",
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
".git/refs/heads/main": "a56199dcbe73a15d200e615c92b736f9",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "a56199dcbe73a15d200e615c92b736f9",
".git/index": "1f807343b404a9deb0e4c95f580e9dfd",
".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/FETCH_HEAD": "94b3601d206bfba816d2656d02aed25c",
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
