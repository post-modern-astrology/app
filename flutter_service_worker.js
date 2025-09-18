'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4b131b760617ce51d2d97fd75ae11ac1",
"version.json": "a853487c22af87ef05e2b98828b87147",
"index.html": "f975975cb3e234d789a2ab89f9c22f74",
"/": "f975975cb3e234d789a2ab89f9c22f74",
"main.dart.js": "0bbf380f40326d962dbd551dc8fb7714",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0ba6a44fd0f22770741b1e7e7484332d",
".git/config": "001f5fba5ba7079327cea94d96f8f4a5",
".git/objects/61/46ff80d84765c2387e8a44f0242df92490dab1": "7215dd2d06bd27fa57c8fd1b1010ac96",
".git/objects/0d/5e0893c10d30d2e92308a84c7797c4ece3638b": "b2abcd346070b39c4fd929b860d5a5b0",
".git/objects/95/2ea244eed78a18f9c2d24d83ebffb73a3402ea": "d0408090c32b0af6c446933f1c19fd8e",
".git/objects/59/00a1fe232260d712f0d8bb2fb853a63e288777": "219b2dea818934ee4760f382b5d23c2e",
".git/objects/92/2669263f845aad3c20f176f46a6cc7ae9b4f94": "0304de8f72eb35804b857b8408093eb2",
".git/objects/0c/e2726d1dbdf13628ca5843790630c273feaceb": "e8f37375118fc581a154e667cb82b58d",
".git/objects/66/f19f7dc06f9b74ba773f51c690c1d2b4277bfb": "1ae35106a27b67587ec22ed0e9cf92c5",
".git/objects/3e/c7d3c36d614a25d3b5e1e13cb108a7efd44ba1": "6bdeb743ee72a4984b0bf49b30215d60",
".git/objects/3e/0f6090fc740ae3c54aeb8ba05a54836bbcbb05": "fd6f87925b80093b9a67126ff8551477",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d2db24e35d63d3286220d695c0cfb69c",
".git/objects/50/7808ea2b6373063676e551b5246a011a876780": "d5d19a6f9ef04b1dc7cafe07555b7a90",
".git/objects/68/2dbb50f2384261be03dbefedffabeaea0f7a89": "ca6f54b61325b577ac2e27d3c69e189f",
".git/objects/3b/049e6da08006d81ceb73534479b277f7ff2f24": "9f6a40bea24e1a2d2c65d09fb1155c27",
".git/objects/3b/93190486be45b30ec63d265c7c0e91a0b56f39": "114930f48f3a89d0eb87577f2132516e",
".git/objects/03/7f66c2d82c7cf7ec4f9034b7189ced7f2b54d8": "2ce4b5ce554896739a8e0a17fb4b6c61",
".git/objects/9b/2538103897e4c49397ac0f524c3d60a57296fc": "e566053f4fa1406c589e6a78f93f3f94",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "6f7adccbcd8159696c9843a547f82033",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "2cfcd8c860f921fceab454ee54abae46",
".git/objects/6a/97977ce2eaa68e80107915edf9e783bcda8217": "f1952d617084436d2479b931224ea582",
".git/objects/35/9a875338e9a6c62b66a712c7654a3e38f90d41": "d4f15e0be8c5ee4b9d037376f6bbb528",
".git/objects/69/7a8789b244dee50ffd55e8dc673f2bfa12fa42": "01893dd8d5b49655507242d3be2537e4",
".git/objects/69/b0a76eb4482df6da874c3337a05e5b58a179bb": "5450a310332a7a88cb14f28b0dec42ff",
".git/objects/56/35b501f29f5c2828fc33ba3ccdb63c07ca5509": "5670f50c4d2d85c98ad6670b791612a8",
".git/objects/51/93714dc56ffe2aee1f24fabae55d33bd2fc2c4": "68bcd0fbf3a804e75f085bb7bf53ba3a",
".git/objects/58/ac7e4d2d3e2ae5e1395dc07e2e4a700f02142f": "7cf8e5212f98d2f95d23b2a6ca0ce159",
".git/objects/58/16a2a537237eef0aa9cf4b7796763b910f8881": "1b029a8fe15d20ee9cfe0793ddf4e05e",
".git/objects/58/4e50a9486cdaa47646041933f1c3fa512dd220": "81f663c80c9fbca04541d98aa0693f96",
".git/objects/58/a1eedfbeecf5f14e1ef0771f3d3acdf110afe5": "61c2e6f31b32b5aba851822a1d936112",
".git/objects/58/147c535810551c884fb1e6a6a6ff75301be45f": "5cc55a1f9fa8ff789f54eeac0f97dcf0",
".git/objects/67/c451538e020490cc93247068d357ca29815654": "6bd7b8cbbd52f1581508d19cb846f893",
".git/objects/67/18a111aba19408e0b8bc037810661e880e73e3": "7610dafcc77b81e34d64beaea93a2dbc",
".git/objects/0b/305f71eabbb08dbace3b4dec19f787221df967": "e5255382b45031cc321f1a38fa116dd2",
".git/objects/0b/f1f14ceb99905e3915febba43897f8f9357b66": "53289112b764f0058fbaf6c408afd476",
".git/objects/0b/f6f459a8940c0b7fc92abbd6682a5764af7b8f": "1c96723da3297b2dcee71626396f1750",
".git/objects/60/8dfb56cc5e3bbcecfecc149c02c45f6d3776d2": "a0ec3ec1ae922745cd764084340acf49",
".git/objects/34/a672b57c53f53e2f0f287eb94a4322b9907d78": "4ec5e0d098d0e2af4061b0b7ee4717e1",
".git/objects/34/752b0ba4504ae44373a81c19e2bb1d13615d6c": "bb7ff441c396e59439e61895df0f3414",
".git/objects/34/05dece486bf42f0f81dc670a8d4641b1fa54d0": "c89fed9ef91c9f5aa3bb452c3ceecf2f",
".git/objects/5a/6fc84b8d7c945b9191e04ee0d34786593d1c86": "62800983c101212b0770f0817156334e",
".git/objects/9d/a46329185c7824b7c20c33c0a05819f4c2b9f2": "b87f825c4dd0ae1bc2efba7125e49976",
".git/objects/02/a797ad6421239e2901abe76b88b5851dffbdbe": "e756a7df898598ba587812f6c8e05c50",
".git/objects/02/c85bc2f4dc9370f8bdfdb575901cd27fc23499": "40d39630ab10749cf5af746a599f0ff4",
".git/objects/a4/2a4cf1ad92436c27c1c0950249f883f3546fa8": "ef03631cbbbf99fb1dd5453892ee0953",
".git/objects/a3/fd7c6dfe1fdc4da041d3ef2f0a3e8b5c1709bb": "92137b0c844349aab410f03bd436a667",
".git/objects/b5/253bb848b60cca7acde5be473dfacb78734fc8": "367594ad127ab806e34883d30b451b3c",
".git/objects/d9/e040d33cb305c211845c1df511c4dfdfd04a54": "7187a1bba60b414eebf16131798d847f",
".git/objects/ad/4a3eee09bfcd9d1bdffdd32f3957538baa5729": "d1553cf7f854c7d315b7bfc662238066",
".git/objects/bb/1d92e1671801a5dededbee6b1ba1e80ecf4ca0": "f8c3af43637261d374daaef9df1b7d65",
".git/objects/d7/86ee8fd3e7d6b0c431ab10fdcab0003fd27897": "92e18cd1ef251137e297b0f5fb3b3e29",
".git/objects/d7/7d72dc424088563acd2e3666eb81ee8499baea": "55d64a97e378e84566679b33bc1054fb",
".git/objects/d0/853a88ed86381ef09d15217c7508ee8a9fe368": "f35c9d3c0f8b95e8f0121f8947ee4e28",
".git/objects/d0/5a27460a8fbbef90719305b01f30fd7fbac4d1": "683d9d830aa8a4769c3c7f14adee4191",
".git/objects/b3/9055e2dbecb15cfc07394f106f9ba37f56b038": "eccdc8e17c868e50008186284f09fa76",
".git/objects/b3/7ddc82dfa202d5f752364b2aada498a57e2ecc": "0afe0cf10ed2a6f9cb5898b607c4371f",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "7815e5e63c9760a611e45b802d701cb4",
".git/objects/b4/5ab9db3dda8dd901e36ffd68ac9882ebb42d11": "f332be31a2d7188d1b7454ab720b7a4a",
".git/objects/a2/e323f97809054ba6f9db295545a9bf966a2743": "77a98b0d2e027011b92215b70dcab5ec",
".git/objects/a2/c62f024611a0d7879c399e3de9a7193943dac4": "04405973f5a972a8f009a59bf42dce5a",
".git/objects/bd/6ed01091bc71809a0b24df5bd1188e9c0cd23e": "506b93911bd6cf245399237a187b0599",
".git/objects/bd/1877de63e3e1765ff31b3beaee83551fd2cef5": "88abafc6fbf37ae5d224f404704b7813",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "3655e2595dff3e9a6535903ae76f08bb",
".git/objects/d6/211bd1f2f97c5e481b25ac81325b59a9c8ee47": "5e9d03ed76d0890cce39a4781ed3dfe9",
".git/objects/d6/407d1b136f10482946e8c66dcc778348048c4f": "da715d0bbdd40e20ea44bf2e2a478f5e",
".git/objects/bc/14d09c244bb956d1f8296d87363d6bece469d1": "692c02de4980dfce3cc521bdaa4f7ab5",
".git/objects/bc/8f628b39024f9d910d585a88192a5a52e1d079": "46997d4283255454c35e835e6f107ea1",
".git/objects/bc/2dfb0c4973e36bc8cbd93b20f1658052bd2fd0": "73d7f8a63572466dc0bcc59c29cb093c",
".git/objects/ae/534298a64edcbf4d9099e89ae8a7c607c7a389": "5125a8c1e32476b5b3b840c3b3682b70",
".git/objects/ae/6193aa5c009f19acd6ce816a49c74e8b4a6359": "d80795d727bad8fde84a01173cd82ea1",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "2e169ce78040a612b123be7b4b3c1f2f",
".git/objects/e5/36fb41cc3f458318dc9ffe1117ffe5dc71fcf7": "8bf1de44190bd89eded69ffddc359a26",
".git/objects/f4/bbb5d1f3dd5d2065ab56aaecfe8fbc1a3b3e59": "3d6356d149891909c46d04a83773f333",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "7dbbc94a8e35ee815b1d45df01b3842e",
".git/objects/c7/068fdd4cd9404ca9171002b1c5e8ba4b8483e2": "bcd54d47c1dc7005a1beaf015c61aa27",
".git/objects/c7/66057d0dbf16e73b510126912e85e95fc2c4a1": "6d150849d2e03e722f0dfa4966363efe",
".git/objects/c0/5f3d658f77bb112fe819158e65181768b6c7a5": "6618bd025feb620d5db65a01ad85a28b",
".git/objects/ee/50b17b72f3a0741471233578cc39c9a03ff607": "3e7c1551d581c65ec3892794530b1f39",
".git/objects/ee/6b84dd8f8a731c9a618621e6b6bfa19fff71d9": "64f2255ad87ffb532c6a5b48275c36a0",
".git/objects/fd/7eee033ada5df0e369757c20bd65bec45d878a": "42d496c8c33b58f61436e1a343f051ca",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "a3bcb2075c8ac99bd68c577183925bd2",
".git/objects/f2/d9a48051cb14c46c91c8d1c4a04a46e4015fdf": "8f09f8c47a3093118b40d4e345732399",
".git/objects/f2/a42db7de7bc1edd54ed4b475f18a2b633145ad": "c6665d7e3f5f1f0aa9a817979c965de7",
".git/objects/f2/7a650947bc559ee7c2efe9b1093b97b3866d4a": "cabca92296fa705f9582f539819329d9",
".git/objects/f5/38c44e1a8f58433ece1474dbe678702f41586f": "52c1fff68c5aec9221787630c8f83037",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "db8c57f684c1c1d7e3892a31f31bd1ff",
".git/objects/e3/92104dd42e09cfcd307f58e03274fe40d4a9d3": "3796cd090ba9cc65170e2a34e4ce291b",
".git/objects/ca/884f4c2ebd5c0971c365467577efaabc384167": "074defb56b90d4a0d2b181599f3715a3",
".git/objects/ca/d4e25b9e6b34e7c3d8db340c016ffaeef92b1f": "bdc360b6c7b3412c5b326e5353af2c5b",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "c454afab7281e6f0a346fe1131741cca",
".git/objects/ca/6bc3fb1c85fef9e8f4f631539fb6cc8d740c46": "19f0789741d1727845a6ad1d8019bd3d",
".git/objects/e4/e621d499cd0347115acafce643c3de26a1fe38": "6e71c349144db0a962f67af7783d0c26",
".git/objects/e4/3a80e227b6eec6b50e09773ab7f52a45529a7c": "d01273303a5a1239f6f7e44830a0693b",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "8ca829b0b36b29e4be13297797866b8d",
".git/objects/fe/4d625ae86f20ec0dbf1fffeb8bb04befa7fc0c": "e1c3d0ec9bdd78deca979b73b5eea052",
".git/objects/c8/a4536ce7c8a95df0c36eedbd8856fcab8864bb": "aa63183aa4ba2d5e2b8fa7e0ce207aa5",
".git/objects/fb/552c6fe481f85ef894e213cea94f6349cefc5b": "85e44d8709a7777330b270a0668ad27a",
".git/objects/fb/31d5a805190a7b06f0e09430782215a8b1c19b": "632f10683c948bb79fb857441e77b2f8",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "24ff37338bd045d48203cf331771729e",
".git/objects/c1/29620ff91a45663b19e55e3c8925cea3a56234": "8424d8d6afe4e0d02ed44b0d1e73d8d4",
".git/objects/c6/e5f82d0956f456da2ecfad3657a30be8d060c5": "cf085cbb00bfafbc3dddb6e7a511c593",
".git/objects/c6/fc69abae4eaa8a1835c2615a00bd70a26291f1": "a50f6e8acc1c608b52915f6038e1e7d8",
".git/objects/4e/49a6a81a8dd0c30cf8f6e5be7ea1ee61fb0a30": "66dc870d5660a16aa2c32047d877a65c",
".git/objects/4e/5d128d30268c4613dffd787330a1e24a519b65": "cf0584cae9184fa175eb1f71683e77c1",
".git/objects/4e/7718632e1dc939ad9d4c98fa5f52d62b93f8a0": "dad2272fc3dec327a0813044d2f871a8",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "c6274b2aab2e5341d5afe75b20d9db20",
".git/objects/27/131f8f479947ef1b6c1d0bc9ad5ab3d30bd831": "a981cba01c6fa720ed67d94d519c42cc",
".git/objects/4b/4e558d228426f11b48d57e17c393ca91a48252": "41294fdf6cae88ca62a04557bc4f5a6e",
".git/objects/4b/90b51e5bffb9445be185eef6f23c5bde2ee7da": "739fc7408dd7332f47a84f3fd59d892a",
".git/objects/pack/pack-299cf35d5db016af047de38f680716dd115dbe6f.pack": "4e4f2b1ad8cf7c98e2f1727a519a72a0",
".git/objects/pack/pack-299cf35d5db016af047de38f680716dd115dbe6f.idx": "a44b7bfbd1aa09298a7692dc12da37d0",
".git/objects/pack/pack-299cf35d5db016af047de38f680716dd115dbe6f.rev": "c2bd1f6c580c9b1054b08b4974646ba4",
".git/objects/11/3e30bb289e511cff95f5b58b44570b4d1c0b4d": "4b0c81e67695bebc9fdec95e176e308f",
".git/objects/7d/11959a002859fc215c1fa26c8bc808226af73c": "bdb9ddee3eaabfdd1731beb2f313de43",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "f5434dd611cf7832a2da98f9fd2a29f8",
".git/objects/7c/45fb27db8a234e10f4306d9693db60241b34e1": "a54a3c6b6c404bb8d41f2a7f4005ef70",
".git/objects/16/0de5a70659aea48624eacdc85dfade105cba78": "88800a900754e7f3ae42cd8688a7ba24",
".git/objects/42/177510c1c316e4f352a1a1c11d38026e15a1a6": "43506840bc141a8368978783c387a354",
".git/objects/89/785f8cf68bb8ceae08caaafc1a86618fcebd38": "dab1bef649763c563c2ec57c299d5202",
".git/objects/1f/e67dc110ed74f3f7be22de2dcd3444af36069b": "a10dc2911e65636331021fba9618f726",
".git/objects/73/b49e7e95ed4a39c2a93167035776813b1409ff": "72049f768092683ae963fccdfd46501b",
".git/objects/87/e4ba4c09c806766fb46fe490ad680f8b4a976d": "43b86341ea9bb5eb45d8d8d3605e16a6",
".git/objects/74/03c86ce13918549b5f352be8c04909b9057cf8": "858f3bdbabdaf622c5b915c4502ee4be",
".git/objects/74/734c245afb9fffdf89fa9564ee61184e5e15bc": "78ca4f7b77fb4079f19876e2563eb433",
".git/objects/1a/d62ea8781057b478b06050b215a344943b67b5": "3b63df175f51f7ba9818691087e3b5a7",
".git/objects/1a/ea645ee033dde4b767333901d2ec12dac8e8ab": "640a1248b2dafa89fdd8fd2ab89efbe2",
".git/objects/17/d6c5b024c4ab9791631b033eaad3ad6be4a94e": "fb75b1d66546939dc0783f510d441f76",
".git/objects/8f/47b58b69ba6c77be124d893d5876daf57a2b2f": "0af3f57284216177be4a0669f0fcb946",
".git/objects/8a/30c6e1447e3e70ced623504c259ab90e87f871": "77a91ddb8c2de5096e929182c0d6c895",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "935f6777d5a34b22eac29575fdf07a81",
".git/objects/7e/a7d3436cf4881fbd4f16d138efca38b5c928db": "b89dfe5148727ce1bd93d5633f240a6e",
".git/objects/4c/f4c9e55c9253a2dd506bebef4118afeb8a3c49": "5fbafa74742cd0835479ac3faab06902",
".git/objects/4c/ddc9810f8e0d6551f1559f8f99823304a2ceaf": "4e552a53c05d75893783c2d9bfa17c81",
".git/objects/21/f958b88a24c50fae531ff3b14c14ad30bd607e": "4b31de9319dd91b722c2d9d08a5f6121",
".git/objects/21/2dd767887a5612f6103c1237f9ff1bb4cd8004": "b303eb5f0776d40646636b8e95cda5e3",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "f51ce74f4b30d985773489942de9706e",
".git/objects/4d/02b7e50c03dd0e48bca4637a62202cb597dd83": "a20c3ee75c8cd5b25914b83731377b99",
".git/objects/4d/41b7ce345f654556f560113a3916649144939b": "183ff4776d88d28a43e3c6ae48f9fc13",
".git/objects/86/daab1952406d22cdf09f214a028a0a1647e333": "33c20c10ea873a5bdd3263daabed3e40",
".git/objects/86/1ee9f99ab9ee43a0344c6290a0b67a860d4538": "4b6f7c3800ae6ab65b54b91de14d5ea8",
".git/objects/72/e44799610926ab8c282fe538d2fcf8e40ddbf5": "0e4806d84129b99d76f59efc893e063d",
".git/objects/44/3ca5e0969742a263c9fe77952f1a8c036f82ea": "fc23c96b5b444423a451c565cae7f84c",
".git/objects/44/8f496458646aec39b11c8656222fe8da26fd93": "1f07c7dfb11c81b08e23f1c9fcce2d28",
".git/objects/2f/a21a04dfce8f1a852537dc4efd8f6a4417f40e": "da459bb9385b6a4c124c88643a15024c",
".git/objects/2f/15a2b594eac05f48e0dd852a3262149ec4d2d3": "30221110ab3f5027b604be55d0aca634",
".git/objects/2f/37e9890ae29602ee8fd03cf6b35975afe6b18d": "1e2caf28552dfc65f7f572dc02bc91c5",
".git/objects/43/b84aa4ed6eb110197bdde0c10815f5d0bae23e": "680b0dbae22b30150b014f29bda86290",
".git/objects/43/a6fa2bd885e4845718ece48f3a16f5d5bfd12d": "c41009527c2d989c8e8d2e5bad0115e6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "741ebbc8fe0e42c5efc5679e00865b0e",
".git/objects/9f/19c0fc4dc2b9c0b136494f4bd00e0625b23575": "4abd6accf11386e6d94b29f5476446d7",
".git/objects/6b/85ab803a435a6d4a0f6e0cdba8a0526e36f5ec": "b26e05834a20eea52f92e74612034d64",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "fae60530fa427e7dee065140e85f4339",
".git/objects/07/3346db34960a27149bd7bd036bb188dab39db5": "6219ba28c935c3b3eea7c1ec7d5bcc44",
".git/objects/38/4b837c3fbc28169cd89deac511bc6d84f3bffb": "436c9b6fc4ee75a7934efa24a21f1adf",
".git/objects/5c/5dc9fc051bcc06bcfa7efd37642e5d490f6263": "bc2273f940bf913a3d9a4b082e43f4fe",
".git/objects/5c/cc343ef49e91aace2bfa572c2b6ffec48c2063": "983ff70a6a5caa8e7639fd1c46805075",
".git/objects/09/b2b19a77afd650d26a32255e01f543247c7e1a": "200f404f3938b0f5cc35e90c6096e593",
".git/objects/31/665df55967a18dda32162881a0b401735e02c6": "2c8902acc879634814cd759692da2460",
".git/objects/31/e6546ac623cd8ebf16d749e05ef27d935a1f72": "08d21b9063bd658182fd2cf26c25ba0f",
".git/objects/31/a8f425d7d15db8017a620d4bb8fbaf073e2d68": "ec064a1bf3f0f140ed66fbcee7885401",
".git/objects/31/0466805c2cb3bb5a190c9485ad3dc886bfb7ec": "6406c9704527b5479f9443b369f9d93a",
".git/objects/91/57d8498ec28a2f024f0ba413a621b6bbe98c52": "49a7acb3064c1b30b4b0c6907df35d26",
".git/objects/91/c4797170a19d22ce445d68b598c1d7dec5f850": "cf894315bd0d480b629752b9aa29c99e",
".git/objects/91/c96fc02160a2ee33c522bd27575a86dd0fbf06": "ae86c3f3d90df1f4d131729903e071d3",
".git/objects/65/6fb1818e4c9101cfc0aa66ad305babcc34349e": "b58ae96a75fb47aa20f24bd7c50859e5",
".git/objects/62/a73cb2e8d40c5e8f14d21972614044584dca67": "157713fa8be0a6905c11f22f61ae1b3c",
".git/objects/62/65a73f414b9ea4fdf785c40fdaafeee1a1ec5c": "6cbbd147863a341dfee1996d1da1eed8",
".git/objects/3a/95d78af3fa54d06336e602ed9af199d4c2554b": "13d5326cb63c266d4d5500586007d98d",
".git/objects/3a/4ca5ad57504780326c296860ef8aa8aa431183": "a6db2be8d62ec0d1c562a4693a16c9b1",
".git/objects/54/6f688ed1c495bed3174d73aaae88a4034af621": "e89c29cefc7c1866e0f0f7a75991fb69",
".git/objects/98/5cecf56496608a898e658d3c1d72b5331f0ff0": "9d3337ad5d2e9a14df0c8a2cdd113a42",
".git/objects/98/192b6ae4b5c05eef3d8bdf9fe9862e7af3c774": "7c653e8b672ce54eb768b4f30a69f3e8",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "90e6fa94406f2f812d040574aa0da80a",
".git/objects/3f/1d655cb2a21641799d336062a78f9a2e697f0a": "9331773d124b5eb4d9ec9b56a1c49934",
".git/objects/5e/7f12f2021a486e9ebc487622f96c71ae4610e3": "08b45f286a95c95fa039855913d20c5f",
".git/objects/5b/e2ef2f69dd0f09fffa37abb56a2844dc2e0c82": "bc07aaaab6c6a05d2ce240967e91a44c",
".git/objects/37/c24e9759e86c9a121b271c9229c4a8a4012492": "0a0c641e8b651ab83ff82e47831248bf",
".git/objects/37/2cbc3722f8f6505f5c8e8d778a77853fc1ada9": "0fcdebed6a56cc48f95af990e12482c6",
".git/objects/37/aba078e2f1e7976afdcefa3d3f72b55a968c08": "1a3023cd0ea4ba963b21cdac4b27ac7c",
".git/objects/37/4c48ed86ac62a1debeef5b31d8829e610554cd": "35bd411d11bfade6e2c2d13915b17651",
".git/objects/08/1aa1d9c86b74538d07214af2b2fa055a9d7cd2": "536057e077df6d3dac489c1f86c65644",
".git/objects/06/3bb06cbed0630777a1fd4fc34179d9e00f047b": "5baedf8e3502842615a35ec61c2f3149",
".git/objects/6c/03ba6081424617681f7ec7a0cbf3dc097a275b": "53284ea5608970467726bd0df843f47f",
".git/objects/99/3da8fef3bce9a8efb99e5b882e5dbe1a573a31": "aa8c1cbf4c19a8e1e44500de66e2d5b3",
".git/objects/55/f2f1c575b38f82d1291f26fb92c552e0d744b4": "5c07c61d187aeb6bd4b50c2c9202adb3",
".git/objects/55/4efe792dfb73944c084c34be311f08fcf981cb": "a4d805d5116e44e63f9d1a2f534d2a65",
".git/objects/55/0fb0fc8300946c4e00f817e1f10aadeb4d766a": "62e73277660b101e4ad225963c429c26",
".git/objects/97/69425e7da3e9e8b60c625e384b048adfdb2c5e": "261846d7ac6952e58488b685ffd419db",
".git/objects/63/4bde54bfefe42b57eae2f1f18b09a190abf15e": "67ef60f0633514889b1190b8a07b079b",
".git/objects/64/d6b135bbeb727019376504c9d8f464d5e64707": "b82c5a67708a5c65085a5c3ce7a4d23e",
".git/objects/64/6ffad1564c6e8a6a5a7460552cf93e13a970f5": "2cf48752a7760ede78ea9609c8486d35",
".git/objects/64/feb961fd632391801a3aee28bda9819a344cc8": "13cc8c3d46819c1695b7df0aa50902ec",
".git/objects/64/1d08e40258dd3f8178841fc9b579cf1b90ec84": "1e85f64ccb64be70a1f61b2b0d534f80",
".git/objects/90/7e3a940161e0390c269d791e814efca31c3da8": "50deabcff369297e5cc37b16d0cd997f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "43dc1abdf318479619f8ba30d339447d",
".git/objects/ba/32ad22e60eccd003876d0ba0a2409f3dc30e14": "ad605b6e2955f8916b4b906427af7833",
".git/objects/a7/abd18688908a4c0035834b013054c60146002c": "b4f525bde8557b772b5bcc50d6f27535",
".git/objects/b8/8c2337ece66b0df9a36e9639d1bc868397c7b3": "58af2162f87c45b31cefe25b647b59f4",
".git/objects/b8/158fc8c05c9972d68e09b5274d2fb4b3e33758": "bff91d56d001ea944bf4401e869d030b",
".git/objects/b1/cea48f8a756839a32809aa77652fc32d7cf987": "8315b9aa23cd6b587c8830eaf78dcaf8",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "a5750dc478ecba60aad59689a9defcc0",
".git/objects/d5/0092ebf67cc087dbf7f60d741957413ae03eca": "5201c395156e39e1308913657a8fe13e",
".git/objects/d5/e1a9494ca79588c1219926868cde108d37ed62": "27b5d7edb273fe171485fad17a46900e",
".git/objects/d5/5220958aa51eeeb85048d746eabe43d2cd9f14": "224ad2047dc41c3ff6e1415bf0264bd9",
".git/objects/d2/97e5c37c603e7f84fd62433edf7e0f951dccf8": "2a3fb09c75a59faf62f8f91cc1eecc7b",
".git/objects/d2/a1c41936f8fed7a213873d7a92837dfb56f02d": "e3ba46d1364664679ceaf8ee00988c4d",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "4205eef49190d51b728a5fe78bc74582",
".git/objects/db/9add1f7d71bc3fcde977e1e428e6166bd0e291": "05f4d17dfbe933598315bbae219df6ac",
".git/objects/a8/58dddeb59e4a3605c35f87d23ab96fae25f872": "3b514900eb6635976c666c746d4a1e56",
".git/objects/a8/300f807fbcd35369638e57c3de594e77ef518f": "1d3ea98a45863416040d70660a41ae56",
".git/objects/b0/1032f961113eb30013b6cae37bdc9033d7e807": "53d2fbf670c300e4286616ebcd891c7b",
".git/objects/b0/68f2380ffd3bcde812d123e142fc0292e267a4": "ebed6e47945538eadf13c80b488cf7be",
".git/objects/b0/72313034488127f4ac75fe2b4898bcd98f1249": "bc80d5c5fcdea8b31c3434b946a4457b",
".git/objects/b0/069ccc0e21418360e7a710be3c72523c6a3bb3": "69ae92dc8c453c2d8462f1c31d4862a8",
".git/objects/a6/6961c2ae45cde9ea35dac9a88161db8566a2ba": "3f59189884233dc66c0c2054e0fc3bac",
".git/objects/a6/561736e443745541a546085436135ddf24195f": "c7aee982a3d8bed48595198a7acf9a1b",
".git/objects/a6/f695d55a5fa896e380c495211437b329e726a0": "dc113f102327cc09f3f87c2abc6de1d5",
".git/objects/a6/7b191574e0f3f922a19f057e94ebb3138a8476": "64515ce29a0a4e78e9c73dba91b17d2c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "4adf46374f95b9427c9fef44980c448c",
".git/objects/b9/2f76b55626a73b736776433eb3edc70872d343": "c6cb0ed5b377ac62441c35123e9ca04a",
".git/objects/b9/dc332bbbcccff5094ff36b4a9f183dba3d628f": "9a2031103faf5e3a357a44c2e1e95f6b",
".git/objects/a1/8fdad4f75d6ae296c58f161e545e143d0651dc": "490885761f47df89b898421dcdd9172b",
".git/objects/a1/15609a89797374c1ac50db32ebb79acee55e18": "a8ad284291e0b423bb9cc4af706cebcc",
".git/objects/c3/de92ca7ac78317c9d4125db9ace697d1c2b54a": "153094c4369b388bc8b6ae4473f9dbfa",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "f2d65397f0e87e6bcb5a23b72d6ae074",
".git/objects/ea/773e13b2eba30166f746bb799850bdd7c69c4b": "0afd67d6b3297e3c4ae926819b9060ef",
".git/objects/e1/d265963bb3717a8341a5ad7adb5958763f9ce6": "c4f172dfba912c3099a1aa388fce734a",
".git/objects/cd/2a450fe544ad102239a25759d8fbaa10e73b15": "44100d09b2ed589bad0c6922d66e36b0",
".git/objects/cc/83325f5d78eb80d5c5cbeb25442cc50d21c955": "165b4ce26b06b96be23403b1de093170",
".git/objects/e6/0de329e0e7e805660ad33d4f2932697d693328": "ce4d65c2ea2a4fa1bca9645980e6fee2",
".git/objects/e8/200b810a0ddc6c50122668c4741b8577e9a1fe": "e8695784f4f0b7aaa2f4748e2c1afdf2",
".git/objects/fa/722672dd5f6e5752eeaa7aedc1367afe878a07": "97625e7c11b53be7ffc333c1f8c9ffbc",
".git/objects/fa/2d201a6448e85fe69034705f71198ab39d750b": "3f43116c73b40bb7e2e3c13631c49677",
".git/objects/ff/3923d479a8adef2a4cfa7ffa17d1a7982dbf91": "4ca4881980d52ea8c8c6b000e4375cc7",
".git/objects/c5/e5a00a42aced86f0a6d06c65838a532c41cf73": "4ba591d0beaa710a6fd6de0362f82cc0",
".git/objects/c2/a56a07384c92691d8fa5a8a9758bec58d2fe76": "85cd90794b3703041df13a0815e64cce",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "1dfabeb9b2b507b75367586cb7fb284d",
".git/objects/f1/f03cc8a28adfa93298b41646943ff5d8a58941": "70bd82adec16a28f754ba15b36283bf1",
".git/objects/f1/4283856bb411a064fadcc116d087e51d177306": "42a0b7e3af5a25bac2255fb7e63c3813",
".git/objects/f8/a963f360497926cb87e6c40d91c17cbf937993": "5a2ff3ed6b0c2913881ee21d542a2d17",
".git/objects/f8/4bd3f6cf83a8859ac519060a8125a65eb57698": "00fd59560320fdc8a997a6eec0526d2d",
".git/objects/f8/71e6f74265f88fe2f7c4ac250eab21c66fdf60": "401a1dc8ca535364be984e43fe3e6c7c",
".git/objects/f8/18193d4e9925f677ab216ecb56c1d56260744f": "de8508fad96710b8a8b926baa7b39ec5",
".git/objects/f8/f73bdf79955819b807cf50b5b2a7f880146ec0": "ba42d2cf4dbab40c61542185768fdf7f",
".git/objects/ce/e7208a673c28af1e043f8849e8746913b3ec72": "cd176cbd6e796fed7239009775e307ee",
".git/objects/ce/ecd20894dda00531718a147c8fa5cdc2d67965": "27b8199dd5ef4e2c8abf726147725461",
".git/objects/e0/a8917daf27cf94d5910a27580381c5bf3b35fb": "479d24654c31e505db9f4ff76b3d04c5",
".git/objects/46/26b53803b20e59619725a6ce8e7d3274df7cf0": "09da275054d72fde02a6a3c128965873",
".git/objects/46/52260aef408ec96c4d96dcf2e82901ca9a2b80": "ba4e3a501f06aed7bc7b2d926a94b7a0",
".git/objects/46/cd768f48b8a282a91c597fdd18bd6b29c03264": "277babcc3d2ebcfd4b4f6cd8235069c6",
".git/objects/46/b39ef9ca98acbdd56fdbb622c11bed2e54d1c5": "115872680c561ed2d06a346f9a297e69",
".git/objects/46/751d7dcafb79b00493218cb27a6f7d8ab59e6b": "ccb8f0f4d12979fe4183e8b56c2625c9",
".git/objects/46/3020a90536ae1864dbaf606d9df804c68ae71c": "7d6c9e29ef0ea616963c1d4a26ddef82",
".git/objects/2c/0436e2935974d56df7399516898fcccef6dd92": "c9699ef034ffed50171a560f8d9c1dfb",
".git/objects/79/0142f3b4dac887deec00897d6e03ba403e0b0f": "15728ffc93c6ab53520b1e68c90ea195",
".git/objects/1b/1049f1ed82a329323ac562a46aca56185e249a": "33c0cade2b87866acc468dff439f0425",
".git/objects/1b/09c5521492fe5e414ff31ee291ec714f83a672": "6e4e6a6558628abdd58b4a7e4c3094df",
".git/objects/1b/bddf75a1ec3678113cda4020e9c0dfd6f6ba23": "680995f271a775a5de0d1b10d7e60d6a",
".git/objects/48/c4f3a146928c144fc412a963579469072dc551": "ab941e0ccae9e1e92b59c9f5fe1a4b65",
".git/objects/48/b6b2bf53d096f7de92f26a964fdcd444f2cf2f": "5515f7702d19c02d37472aa0400b34be",
".git/objects/48/0bd6041973ab9625cee402041093f3031daf55": "5e261fbf0cc0b1f11c3f9edb7e3adca1",
".git/objects/70/8566a410299ef1999bfe57b5e27bbe6bd62b24": "9ffb40651bc28a238a89dd64f306e5a0",
".git/objects/70/c712919212ae6bd636c5a697f9c7d455677e42": "698973c9e299920f900d4546a2c0b972",
".git/objects/70/dde239dc232fe636f5ca1abd47258238bf1a77": "98209dab0a6d8d59770b6ab05d2de255",
".git/objects/1e/6adbc165753a5ea34ac8785aa6bc8459182144": "c1b9f99d515d78cef0a7a7f0cf01f229",
".git/objects/4a/f04d1dc4126d7a848421a487850733452362e1": "acdf17b3c39ecee0d6aa865eb7402faf",
".git/objects/24/8757491850ad064f2789087cf088b1bd8bbd49": "09b6e770e5322f7c4dd47142d6e5e492",
".git/objects/24/a0ac6312e8fb2b3ae2d89e53410820efac14df": "f8d14c82c078c79c7c1f59b45aaade2d",
".git/objects/24/8fd10f4d6a8b40ae390ad4b0923c59828ec682": "74efe6cc4d2f291a27b0ff9655246dcb",
".git/objects/23/57ad975e73ccab2c4770339ccafe5bf3fb8d29": "cf76c6f70953bcf9080cc44eeb58235f",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "fbf413e3e575c13db63f06544f500549",
".git/objects/4f/07c692dd6484f1957de83bbbcf98738ffa3ff5": "ed1ff3db52f86a9f3b885424167f6e31",
".git/objects/8d/8eb654a85490b075ae9d01c3ffb8a27b516286": "5ebb55509c8c6e9239b142b4eed7d7e2",
".git/objects/15/64099ecadc4cb7337d981ff4be5069b2834bb2": "5b7be6db245692f075f19b0654467856",
".git/objects/15/5b6d4fef28900024c122614f952b7d6a1ff22d": "01d50054064fc5d85a0363c955ed130c",
".git/objects/12/e08f5430e77e37ccdd8a51dd2d89641c642f76": "d60c0a14cbcd2f0c17433d2addbf10fb",
".git/objects/12/a263eebacaa03c29cabf65267211df540fa668": "f46e07d58a237ec04b2ba24af3a3e3dd",
".git/objects/8c/8a40a460cac3bb053edf8599b296a2c5bb11f6": "a0ffa9b95bb3c9523c67393047554e5b",
".git/objects/8c/8bc5c67d20d8a20f018ecc10c1759e60c2b1e9": "ed7d6a9116cfe7eda8f1c26e016b993e",
".git/objects/85/41af20fb3b5e67ec002c1435b16b1f4c26f0d0": "9131a27e1416507d65256b7c769b39c1",
".git/objects/1c/343f46fda62d7aff84834ba5858322460002ab": "e20a88e2ae44875e458ac34ead00d662",
".git/objects/82/a36328230df9bf44a6d6ba9c980ea6e3e054f3": "3d06d1adb0ce37da80be038f95e9bee2",
".git/objects/8b/1eb314904756c78eaffeed8b70a581a5f808a9": "305935ddec5708a62726dca63700be98",
".git/objects/13/9707c1254671a042fa9174565cebd1c76c28e5": "2fda629c86ace7da5894a0fd60fee6a5",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "754eb3121a5999866afd25a8201d7816",
".git/objects/7a/e14b1e20564c867fca87213e09b77afd036f83": "48393b4974f638c2e99ddfea26e0a483",
".git/objects/7a/e10964d33cd8541bfa6699066631ba0313d625": "217f804235054dbb0ca6e84208507e96",
".git/objects/14/72667b4cc365cd9c149fc898af5cea93293fe2": "4635146b2fc189da5f70b5b802be0cc4",
".git/objects/22/2c4b5bf9e69ab95b35a7689d60af321091ccd2": "669091f85bd6b52b154c8cf44ad1c1ce",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "739cb769cda9045525225af23b45cae9",
".git/logs/refs/heads/main": "fc52f7ab029f435e8bc8a085d63530b6",
".git/logs/refs/remotes/origin/HEAD": "e514bded137d2f5a5aac43c1d9601b7b",
".git/logs/refs/remotes/origin/main": "b02eae593c96b6794e85a3df45bd4560",
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
".git/refs/heads/main": "44e85c57e19d82c76ce8fee027d8094b",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "44e85c57e19d82c76ce8fee027d8094b",
".git/index": "5d5674e590cc67c06a052cddd238360a",
".git/COMMIT_EDITMSG": "b3bc47de7a8375680ba3272baaa5bc12",
".git/FETCH_HEAD": "f74bf6b4bbf03b95081ca6548a980d26",
"assets/AssetManifest.json": "2f648314dc0263f469b9e3cce5968d3a",
"assets/NOTICES": "8def772daf61625cf0f8928907241db3",
"assets/FontManifest.json": "407d8b01ff261dcd8011e9b7480829ba",
"assets/AssetManifest.bin.json": "c95eb6216c6ea7350cfe4512b3500f01",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Solid-900.otf": "66b131911ed154522d0388c3ad8a8857",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Regular-400.otf": "a03d7ae50d2d2e00b33d40c6b114c1e9",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Brands-Regular-400.otf": "f190229e68100d2f97524038402c6d91",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1f794407fd7d19304a62a46f6fd42f09",
"assets/fonts/MaterialIcons-Regular.otf": "949ec07096fa77bbc1a0a01a398566ec",
"assets/assets/images/guide/cp_menu_ru.png": "9487dcd2da3c82734fce72ceb8f58f18",
"assets/assets/images/guide/cp_menu_en.png": "335e72b974d7209859d524cb4bca7e14",
"assets/assets/images/guide/cp_down_en.png": "19397e7b84e3e3baa02031d4ad2bf5e9",
"assets/assets/images/guide/cp_upleft_ru.png": "0eac5d5505fb24728c427adeda5c6c36",
"assets/assets/images/guide/cp_down_ru.png": "9e68d89eee14e3c3863dc2963f56bae1",
"assets/assets/images/guide/cp_upleft_en.png": "bdeb0b78228aeee079e8795e209e1264",
"assets/assets/images/archetypes/synastry/synastry_highS_lowR.jpg": "30a6690184bd7277e086c47f7bf3ac15",
"assets/assets/images/archetypes/synastry/synastry_highS_avgR.jpg": "870a0b60315db09c35d31dd0c57490e0",
"assets/assets/images/archetypes/synastry/synastry_lowS_veryHighR.jpg": "b6e28d5ce5d33e30aa1ba7f89ba12d00",
"assets/assets/images/archetypes/synastry/synastry_highS_highR.jpg": "ca4ff5d3e7b34f4c4ca31556703dfae2",
"assets/assets/images/archetypes/synastry/synastry_highS_veryHighR.jpg": "015b706800caf2448279a9197087bb00",
"assets/assets/images/archetypes/synastry/synastry_lowS_highR.jpg": "eef57ca9f5d8064784363a397f24d03c",
"assets/assets/images/archetypes/synastry/synastry_veryHighS_veryHighR.jpg": "5d13baf1658c81feec2d6dc04be06335",
"assets/assets/images/archetypes/synastry/synastry_avgS_highR.jpg": "ee67861aa9a6272c4774609dae114c53",
"assets/assets/images/archetypes/synastry/synastry_lowS_avgR.jpg": "7fdac77e20d4a53cc8e930ef060ef39f",
"assets/assets/images/archetypes/synastry/synastry_avgS_avgR.jpg": "20b5453337f32c28977a8258062a5cb8",
"assets/assets/images/archetypes/synastry/synastry_veryHighS_lowR.jpg": "016dede6029d4fd7e300753d0dae3ab8",
"assets/assets/images/archetypes/synastry/synastry_avgS_veryHighR.jpg": "36e5a08ba23bcb8275007956e8b90718",
"assets/assets/images/archetypes/synastry/synastry_veryHighS_avgR.jpg": "9032905d49b94d4801e89bbbb689b298",
"assets/assets/images/archetypes/synastry/synastry_veryHighS_highR.jpg": "34bc8e499db6ed0ad9794f838a777d2c",
"assets/assets/images/archetypes/synastry/synastry_avgS_lowR.jpg": "9c1d6fb8354c76d877355502434338f5",
"assets/assets/images/archetypes/synastry/synastry_lowS_lowR.jpg": "6cb99c86d2d832ab88724139b6b6703a",
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
"assets/assets/fonts/NotoSans-Regular.ttf": "2c157a50aeb376ee5a69032d7813ffb2",
"assets/assets/fonts/NotoSans-Medium.ttf": "e1ae7343c37621d9c51023b006846579",
"assets/assets/fonts/NotoSans-Bold.ttf": "8bedd188f4c137b79409d437de74f91f",
"assets/assets/fonts/NotoSansSymbols-Regular.ttf": "9cf26c11c495f60600bcb334ad41beb9",
"assets/assets/fonts/NotoSansSymbols2-Regular.ttf": "182e7dff8b41844c60b1672e2cdb7e63",
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
