/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["TEMPLATE.html","89d8151a99a24812d46087467afd80bb"],["data.json","187c7636732f45f019cc35ff31749916"],["home.html","40a52ea94867edfcb233f82b94c8660f"],["images/age-icon.png","b74231622e06eb56f7d24bd7646762d9"],["images/age-icon.svg","7098a3ff5d5b3d23b56d48e713590d86"],["images/avatar-icon.png","a6b0c31da3c7811fbb5a13c8ba39c7c6"],["images/balloons-completed-icon.svg","3e2ebe6a3c0b1d5ff095cb89cb541fdf"],["images/balloons-icon.svg","c84fc3265bfe63fb88f67e2638259e9b"],["images/blank-icon.svg","40f7dbd696d0e032bc1832d73ee11d6e"],["images/blue-cross-icon.svg","c9677dd7b3e9e0b0e30eaf75c5ad608c"],["images/blue-tick-icon.svg","a918f8e42904835aba2611aa7203e0b7"],["images/clock-icon.svg","c693f57a103bdc7bac9210e1696752f6"],["images/crates-completed-icon.svg","14a29f1c01cd12fe72352d28ab075ada"],["images/crates-icon.svg","77a0a82f93dada4eb465e61c99ebca6f"],["images/digital-span-completed-icon.svg","5ced71d8215ad6a88f69749ab59229f7"],["images/digital-span-icon.svg","ca100cd6f4efc8b3558c93fbe404f70a"],["images/game.png","6b6d578f43684cb427aa553e2c0c0004"],["images/grey-bullet.svg","7cbd6939e50c87e2a137bead2465eba8"],["images/health-completed-icon.svg","3cd22af8ac870c06ee5f505e99c0090d"],["images/health-icon.svg","f463b4fda30efa68670d7651b70a8e57"],["images/health-inprogress-icon.svg","8e160f3af457398e68099401c1045bfa"],["images/health-paused-icon.svg","fab8ac193c414370f78e1cf4084f663d"],["images/large-blue-right-arrow.svg","cb056cf9c03c270fbbf0f1f6fe412832"],["images/left-arrow-grey.svg","2fcf47b33adeabc997e6c9e9dea9d380"],["images/lifestyle-completed-icon.svg","bc04c58b9bd88502652e39ca8c81bd95"],["images/lifestyle-icon.svg","dc052515448b40aae98a7d30e36a5118"],["images/lifestyle-inprogress-icon.svg","df8e3cf849f3cb64047e8c96d17cca56"],["images/lifestyle-paused-icon.svg","8433c1c9382c0ed2ac4a11ef9d5066ff"],["images/loop-completed-icon.svg","873dbd8b13f5f119676fc1d33265ef11"],["images/loop-icon.svg","30cb06ccd6111cee53ebe22b09341f26"],["images/loop-the-loop-completed-icon.svg","873dbd8b13f5f119676fc1d33265ef11"],["images/loop-the-loop-icon.svg","30cb06ccd6111cee53ebe22b09341f26"],["images/medical-completed-icon.svg","dd645eebea5841c700f0900db6f32a8f"],["images/medical-icon.svg","441a63872ba5813da7254a224707c499"],["images/medical-inprogress-icon.svg","43007902969bd8c7f0070b7187a34654"],["images/medical-paused-icon.svg","fa0c0dcd52c0496af792021131b85c32"],["images/mini-progress-1.svg","98365a344b4c1368213bb8d91d8ed3b0"],["images/numbers-completed-icon.svg","40f7dbd696d0e032bc1832d73ee11d6e"],["images/numbers-icon.svg","40f7dbd696d0e032bc1832d73ee11d6e"],["images/object-matching-completed-icon.svg","9c3791b213ed18b3ca06c85745e75367"],["images/object-matching-icon.svg","db2281ae280da95f6ca32b1da22b2675"],["images/odd-one-out-completed-icon.svg","c2ac3289f6857f7cc829218a7ad1a630"],["images/odd-one-out-icon.svg","ec7be2ce08a027c4d1d23861ebca2442"],["images/paired-associates-completed-icon.svg","8f55508dc95ac85263ac39f25e7e5044"],["images/paired-associates-icon.svg","6e472bffb7ae629f6f825f3a2117ac3a"],["images/pairs-completed-icon.svg","40f7dbd696d0e032bc1832d73ee11d6e"],["images/pairs-icon.svg","40f7dbd696d0e032bc1832d73ee11d6e"],["images/pictures-completed-icon.svg","40f7dbd696d0e032bc1832d73ee11d6e"],["images/pictures-icon.svg","40f7dbd696d0e032bc1832d73ee11d6e"],["images/project-logos.png","3148ba09abb7abff9c25a1c78be786f4"],["images/protect-hero.jpg","26b5fcbb5b502fbfee58ad66dc630773"],["images/protect-hero.png","4b8e22c1130bf0aaf14c62527e494b02"],["images/protect-logo.svg","bb39d65c2ec3b240aa9811dcb8230138"],["images/scanner-completed-icon.svg","40f7dbd696d0e032bc1832d73ee11d6e"],["images/scanner-icon.svg","40f7dbd696d0e032bc1832d73ee11d6e"],["images/see-saw-completed-icon.svg","ef030be30131b2e9c20cdd1e5b2e406b"],["images/see-saw-icon.svg","bdb9498de4672d919146ef0f89d29110"],["images/self-ordered-search-completed-icon.svg","2e3b07c9ee710b1dd7a8e89b3919c0b0"],["images/self-ordered-search-icon.svg","6d40cd563c1e991878ba5500aef4f99e"],["images/sliders-completed-icon.svg","f5259fba36f9980a034685996ca2d45a"],["images/sliders-icon.svg","1b038d750aa486225af1e8549a9e42b6"],["images/target-icon.png","98d23534edd50b34e6c21d7e105286fe"],["images/target-icon.svg","36b6c1ce6dacb21f064075b675bc28a2"],["images/time-icon.png","5d447679a26192d342913da31acfd1bd"],["images/time-icon.svg","feeb06cf9e9700f386e7c9a742ce8d98"],["images/touch/apple-touch-icon.png","7326f54bfe6776293f08b34c3a5fde7b"],["images/touch/chrome-touch-icon-192x192.png","571f134f59f14a6d298ddd66c015b293"],["images/touch/icon-128x128.png","7c46d686765c49b813ac5eb34fabf712"],["images/touch/ms-touch-icon-144x144-precomposed.png","452d90b250d6f41a0c8f9db729113ffd"],["images/tower-of-london-completed-icon.svg","ecb058b5bcd11007107d5761f542d647"],["images/tower-of-london-icon.svg","4b968a0a149a66d6e20a54bbfa7e27b1"],["images/unused/1-2-3-bg.png","3cb1b4461ad18ef10bd5338342e9fc2e"],["images/unused/1-2-3-color.png","f2116020edb847d9ef7d84f9e2fa4252"],["images/unused/1-2-3-colour-large.png","c89c1ac0c957458ab74bfdf0f8b5360c"],["images/unused/1-2-3-grey.png","a6a3d7f5e9ba1accc3dd0b95fad163e5"],["images/unused/achievements-icon.svg","2c52c99c65255e3604f533fbc9d3de78"],["images/unused/completed-icon.svg","777ba910c88f2b6aaba29d64155b11ea"],["images/unused/exeter-logo.svg","847a10a34e08a83088093199c89c96f9"],["images/unused/fitness-icon.svg","9ffd00e591805196b4a5e25d4c0961e8"],["images/unused/goals-icon.svg","c7d6669fa91930d4914253723314319f"],["images/unused/green-tick-icon.svg","141996305b1d0f7c14adb2a66c53847b"],["images/unused/hamburger.svg","d2cb0dda3e8313b990e8dcf5e25d2d0f"],["images/unused/kings-logo-red.svg","21c7d659537febf63c6c1e72d69bd69c"],["images/unused/kings-logo.svg","25958c6aab0631cb6a8f43073f9f8cf4"],["images/unused/nurse-running.jpg","e375d1bffeac44fbe9f92b5fcaf42427"],["images/unused/personal-goal-icon.svg","4621706043478190b72d1df9d4709e46"],["images/unused/research-icon.svg","687d6b9ffffb0fd8a001a593c8e36732"],["images/unused/restart-icon.svg","ce01830bf5a09d76e0a4b45963dfdc52"],["images/unused/right-arrow.svg","e1d0faf6a59fd22eb00435bf8ef96e7c"],["images/unused/sessions-completed-icon.svg","ad22f0746b6c1c791cd303286b897568"],["images/unused/sitting-icon.svg","a8dd650f14a61fe59b3454994211bf03"],["images/unused/slider-active.svg","58cfa40f39db4cf30d9719c7a69bcaba"],["images/unused/slider-disabled.svg","370cd379eecc84922db17c5fe4030370"],["images/unused/t4tb-logo-wrapped.svg","606d0704cb44981eefc14395e0efdf31"],["images/unused/t4tb-logo.svg","1fa5324bd264131388f608d4a67c00fb"],["images/unused/time-icon-10-grey.svg","ccaba7a5d624bec97ae8d5b6db709b90"],["images/unused/time-icon-10.svg","735cf325595752a156c9ab8c23a980a1"],["images/unused/time-icon-11-grey.svg","8965e3b9f27267bb64cf57eaf3c7a98d"],["images/unused/time-icon-11.svg","8965e3b9f27267bb64cf57eaf3c7a98d"],["images/unused/time-icon-12-grey.svg","a6a6aeff2c878f969b83c9d0b9d67445"],["images/unused/time-icon-12.svg","15526f12ea0a0d3813027c604b36ac2a"],["images/unused/time-icon-15-grey.svg","6880562880126a5bde8ce0617f401f71"],["images/unused/time-icon-15.svg","846bf178c069eaf9e0056ebb0dd8056d"],["images/unused/time-icon-40-grey.svg","b3ebd045c1a95ee9992c0e34adab8ae4"],["images/unused/time-icon-40.svg","ea79b04429b695e8f8bfee602028b318"],["images/unused/time-icon-5-grey.svg","fee6469db818cb1293b65e83b5d19781"],["images/unused/time-icon-5.svg","4e77ee15f8d8b9e8336e4ad275f6198c"],["images/unused/time-icon-8-grey.svg","393f4cc49292c6c0d1371f92306516c6"],["images/unused/time-icon-8.svg","9710b7504497e3ae4510a50b5009fde1"],["images/unused/video-play-hover.svg","7ebcc73dcdace3e1a4b366427b368527"],["images/unused/video-play.svg","a2614b3669e2e86cba01f3fbf14984a9"],["images/unused/video-replay-hover.svg","ea3f46286e6052dd97d80afdac241223"],["images/unused/video-replay.svg","dd239fb23d21b612fc9641c1856b7390"],["images/unused/white-tick-icon.svg","777ba910c88f2b6aaba29d64155b11ea"],["images/verbal-reasoning-completed-icon.svg","9f5544d5adafdf2b83094749231a6a04"],["images/verbal-reasoning-icon.svg","3bad5c3f9511a0be80551a2b177b9db3"],["images/white-cross-icon.svg","c8d72068c64220c06a9c5e00ae7a160b"],["index.html","cb97c78813c2821b411fea1ba75e3d26"],["mhq-01.html","2353e97737d570df281b37c0fafa53cd"],["mhq-02.html","56f5e57cd4cc7b11d203416c8e96faa9"],["mhq-03.html","0b499e550d04b770447ff6f309b0df28"],["mhq-04.html","007bf5642ce176be4a6b64eaf103833b"],["mhq-04a.html","26f70c53827d46336b1012f3a4c0d3bb"],["mhq-05.html","dfb93a7f97a28e5a07906a910bb914f3"],["mhq-05a.html","a9f5eaeca4fe3acb863497f18ec6bdff"],["mhq-06.html","9b2be160eb4a1988c224561bd82edb5f"],["mhq-07.html","6b90bea0c80f9ac1de0a6b048b2bccc0"],["mhq-08.html","bb49ccedcf9ee26ebfb7595f045de199"],["mhq-09.html","13c0cbe8f992b7afefaa88e2562ae0c6"],["mhq-10.html","b9b0244e55664fb7f90eb06b979c7899"],["mhq-11.html","84175052c756689eed6996a82cd6e3d6"],["mhq-12.html","6b36a4d61aebd55fd3ad9ea46cb7cd51"],["mhq-13.html","a7163917e0d2981125684b926e34deb4"],["mhq-14.html","d682e9115958d877227817ab31726d10"],["mhq-15.html","9e050d841ae89b5e0f66919c2163299a"],["mhq-16.html","2446c624cec28f36125c1f691da3b172"],["mhq-16a.html","2ac7ecaae4e676763db06d757e95e706"],["mhq-17.html","e02db1b49bb02bb50f7d1b2ea8185415"],["mhq-17a.html","1f1ab7edde3fd3a8bde7036798cfe076"],["mhq-18.html","8c326205cf821c875a9d89b8b4036863"],["mhq-19.html","41002fe0c785ffafafd11a95abf68b27"],["mhq-20.html","8fe7299c42e6eea6dc14a46c5760634d"],["mhq-21.html","7073318ccb42b8ecccae175aca6f37b1"],["mhq-22.html","e4550b0f38c5fbc70acbcc3a46a5ed3b"],["mhq-22a.html","edeff4ba99e0507ef88a97331d78eafa"],["mhq-23.html","973846a1729339189b61eb7869df30b2"],["mhq-24.html","39a5fcece73a1c11368298f33dc12cf1"],["mhq-24a.html","81f30e27de78a11e593aebcf696eb83c"],["mhq-25.html","977e4930d126c9f64d05959634173b40"],["mhq-26.html","4a6dece176ad6679e843918e7565d754"],["mhq-27.html","1236496582ccc57a3cd78cbc14e1b3c3"],["mhq-28.html","a810070de0284b0dbaf71fe7bc70f878"],["mhq-29.html","5cad43469fc0f1c2cf9652153837b185"],["mhq-30.html","81d91bee55771a0464d9227cfbabc067"],["mhq-31.html","15e36ce4e73638d8688b3c1e97d34902"],["mhq-32.html","1c8d5fe9ade521ea3085077843dbdf5a"],["mhq-33.html","ae83b893f3959f079ec9c6f06a4f93d9"],["mhq-34.html","c93806da2b8a735238be3903e02638e7"],["mhq-35.html","3c7cf8bd9187e4dadad701c18b92a1e5"],["mhq-36.html","be9a94b99c6bc1c31847f0f373ece754"],["mhq-37.html","69ef88ecde5dcc9b163d9c1411c2ce43"],["mhq-38.html","b4e33df29629442414efa73d8fb14657"],["mhq-39.html","08df1e07e7eca74c2e0cf8ab1156701f"],["mhq-40.html","45be3ec87efff00b06192855f036952b"],["mhq-41.html","a138c664fb8026575f441597bc9ac403"],["mhq-42.html","3b688ee75bc97903a3dcd72b28c60a77"],["mhq-43.html","264b3203d5624e862cbe6ed7278547ac"],["mhq-dashboard.html","ffa88a4fe3e659038c3ce2f394802357"],["scripts/dustinboston/jquery.poink.js","0e6c922bfce1dd95c5acc4f83d7bf78c"],["scripts/furf/jquery.ui.touch-punch.js","594c7fa31e788c18fd6bac62d2824bac"],["scripts/google/webfontloader/externs.js","3709c7ee72ce7bd579b67ff4ca992784"],["scripts/google/webfontloader/lib/webfontloader/demo/public/jquery.min.js","e4958bd2e32d9fcd6115a585ed17a9cc"],["scripts/google/webfontloader/spec/core/cssclassname_spec.js","eadd56200df59527b384b8602ddca5e3"],["scripts/google/webfontloader/spec/core/domhelper_spec.js","cbd8dfec30e134d3b03bdaf4a1f79164"],["scripts/google/webfontloader/spec/core/eventdispatcher_spec.js","ad66ec5b26bd0f8b6ae0097d65be90dc"],["scripts/google/webfontloader/spec/core/font_spec.js","8133060cb58cd73a860b495a437a9790"],["scripts/google/webfontloader/spec/core/fontmoduleloader_spec.js","b3c4965344cb2d445006b8dc87e7461a"],["scripts/google/webfontloader/spec/core/fontruler_spec.js","90fa5152f824dcd4bf2373df09cb43a0"],["scripts/google/webfontloader/spec/core/fontwatcher_spec.js","32f1a6bba22936c2ce1820f8146ab841"],["scripts/google/webfontloader/spec/core/fontwatchrunner_spec.js","71827b6dbe1fd7aaf902feeab31ddeb8"],["scripts/google/webfontloader/spec/core/nativefontwatchrunner_spec.js","a19bcdb4f6131ce90319988042407cf0"],["scripts/google/webfontloader/spec/core/size_spec.js","13b0fcf75c4b844103776f5b2c7d9651"],["scripts/google/webfontloader/spec/core/webfont_spec.js","a42c6b64edf8f055ff827ad286541edd"],["scripts/google/webfontloader/spec/deps.js","b43174dee3eab5e54bc83e8fcbaefc90"],["scripts/google/webfontloader/spec/fixtures/external_script.js","169230878af68017decd2767b276aa20"],["scripts/google/webfontloader/spec/modules/custom_spec.js","32a9a90f1c28947e3ba93d93b9e22864"],["scripts/google/webfontloader/spec/modules/fontdeck_spec.js","be11f0ef6f1efb539ca880618db6ad20"],["scripts/google/webfontloader/spec/modules/google/fontapiparser_spec.js","5d6c7bcae9badb04afeefd48d652624a"],["scripts/google/webfontloader/spec/modules/google/fontapiurlbuilder_spec.js","d55c18fa146c5e52e639d8f8488a461b"],["scripts/google/webfontloader/spec/modules/google/googlefontapi_spec.js","4cdfa11c67f8c6df25981c1bbd7eb3a7"],["scripts/google/webfontloader/spec/modules/monotype_spec.js","1d933d21d508c046399bc9ab47dfbcef"],["scripts/google/webfontloader/spec/modules/typekit_spec.js","06aee8bf6d5d6d95ee4a2d8c6ce6c58c"],["scripts/google/webfontloader/src/closure.js","d8b8dfa455548a7ec8ac626e8dc74ea7"],["scripts/google/webfontloader/src/core/cssclassname.js","d446628849af5a9dfbfbcf9c5dff564a"],["scripts/google/webfontloader/src/core/domhelper.js","57e296032f2b360d1fa5a6e60c72f886"],["scripts/google/webfontloader/src/core/eventdispatcher.js","f5964a740f276b020b2eec76fa86d835"],["scripts/google/webfontloader/src/core/font.js","2031c7a13b498170697c2706bbf8a61d"],["scripts/google/webfontloader/src/core/fontmodule.js","be04f8be4a1339f018dd8861a84468c1"],["scripts/google/webfontloader/src/core/fontmoduleloader.js","14640ec52ae326dd285e2e1b25d4c16a"],["scripts/google/webfontloader/src/core/fontruler.js","d78c4371df946a0161c8c201f8997514"],["scripts/google/webfontloader/src/core/fontwatcher.js","6e2f96cbab1d1b3891cd450b1cbfa5c4"],["scripts/google/webfontloader/src/core/fontwatchrunner.js","152d04ff1ee08af681ed18f581560b7b"],["scripts/google/webfontloader/src/core/initialize.js","f10505422572e6eda2efd5abe1523ed6"],["scripts/google/webfontloader/src/core/nativefontwatchrunner.js","8647c56c138de69029e744b1dfc44de9"],["scripts/google/webfontloader/src/core/stylesheetwaiter.js","6917f34de02d0d826d33efd351722794"],["scripts/google/webfontloader/src/core/webfont.js","bd55158925b0ff21076c3f704568c1ce"],["scripts/google/webfontloader/src/modules/custom.js","eedb59aa3aaba8e3c435820d8f04bd94"],["scripts/google/webfontloader/src/modules/fontdeck.js","e66f11c04a856375d0c250cbfa60aca4"],["scripts/google/webfontloader/src/modules/google/fontapiparser.js","bb685dc0ac2539d9f91228975fe5aa45"],["scripts/google/webfontloader/src/modules/google/fontapiurlbuilder.js","280230f3b8d5e6e0b7326e13ae3a6dcc"],["scripts/google/webfontloader/src/modules/google/googlefontapi.js","10701417d0f49f7d22e31a3f1c7d4616"],["scripts/google/webfontloader/src/modules/monotype.js","45130774fde201be81839bcd6b8b46fb"],["scripts/google/webfontloader/src/modules/typekit.js","d27c5e9a06f338a2af37dc0b0e8121d9"],["scripts/google/webfontloader/tools/compiler/base.js","96265f02f1105471f1d36272286bb949"],["scripts/google/webfontloader/tools/jasmine-browserstack/jasmine-browserstack.js","903a3deac4421f1781bf8229ade66f67"],["scripts/google/webfontloader/tools/jasmine-phantomjs/jasmine-phantomjs.js","e24c50067d27c5204d86228858c87e3f"],["scripts/google/webfontloader/tools/jasmine-phantomjs/terminal-reporter.js","906da73a95eb2641d76054c0c496fa5a"],["scripts/google/webfontloader/tools/jasmine/jasmine-html.js","49f0dfd1034e504589cd8a54f105d04b"],["scripts/google/webfontloader/tools/jasmine/jasmine.js","38622df07f0470b16995ae93bbd41dc8"],["scripts/google/webfontloader/webfontloader.js","7e2893ef542a12a5c7207d438bfa87d8"],["scripts/jquery-observe/jquery-observe.js","0e3ef6b623d55398b2ad7887e69b462e"],["scripts/jquery-onmutate/jquery.onmutate.js","10d0c2f1d13e5fbade14498b9d7f06a4"],["scripts/jquery/jquery-3.2.1.js","09dd64a64ba840c31a812a3ca25eaeee"],["scripts/jquery/jquery-ui.js","ab5284de5e3d221e53647fd348e5644b"],["scripts/main.min.js","60340530c44cbfff5af2efb8c9eea791"],["scripts/rafaelw/mutation-summary/examples/pagemirror_extension/bg.js","96ce75cd4279b9c414e0c9387645a886"],["scripts/rafaelw/mutation-summary/examples/pagemirror_extension/content_script.js","100a1e411aac63917df01bc746642399"],["scripts/rafaelw/mutation-summary/examples/pagemirror_extension/mirror.js","cd886209ae519157e16050ed9a5252f5"],["scripts/rafaelw/mutation-summary/examples/screen_sharing_extension/bg.js","190cf8bba0866e130074c80fd1f08e9b"],["scripts/rafaelw/mutation-summary/examples/screen_sharing_extension/content_script.js","02c761422810428546fb1fd03f445c28"],["scripts/rafaelw/mutation-summary/examples/screen_sharing_extension/mirror.js","c77f72540565c89fd2519e17626f0025"],["scripts/rafaelw/mutation-summary/examples/screen_sharing_extension/node_modules/faye-websocket/examples/autobahn_client.js","10c9298cecc95619ca01e8cb038fcced"],["scripts/rafaelw/mutation-summary/examples/screen_sharing_extension/node_modules/faye-websocket/examples/client.js","d104c7453df89f177d94c6f33068ff61"],["scripts/rafaelw/mutation-summary/examples/screen_sharing_extension/node_modules/faye-websocket/examples/server.js","958e5cc547be1869890786d6b341a67d"],["scripts/rafaelw/mutation-summary/examples/screen_sharing_extension/node_modules/faye-websocket/lib/faye/eventsource.js","96eb8d653787da03f5b0f66700efee37"],["scripts/rafaelw/mutation-summary/examples/screen_sharing_extension/node_modules/faye-websocket/lib/faye/websocket.js","d9745ef3fd689185ad54ad796cb40999"],["scripts/rafaelw/mutation-summary/examples/screen_sharing_extension/node_modules/faye-websocket/lib/faye/websocket/api.js","7d7573d45a0ffe3cb3331fa14cee6a48"],["scripts/rafaelw/mutation-summary/examples/screen_sharing_extension/node_modules/faye-websocket/lib/faye/websocket/api/event.js","c3aad6ffe8f70ae0faa05d70175fab08"],["scripts/rafaelw/mutation-summary/examples/screen_sharing_extension/node_modules/faye-websocket/lib/faye/websocket/api/event_target.js","d68524146328c29cb87cea416c202393"],["scripts/rafaelw/mutation-summary/examples/screen_sharing_extension/node_modules/faye-websocket/lib/faye/websocket/client.js","a71cd7d17079b538c8ec183f766675ee"],["scripts/rafaelw/mutation-summary/examples/screen_sharing_extension/node_modules/faye-websocket/lib/faye/websocket/draft75_parser.js","760982afb92ca44b3971ff08e2d4277a"],["scripts/rafaelw/mutation-summary/examples/screen_sharing_extension/node_modules/faye-websocket/lib/faye/websocket/draft76_parser.js","f3050cee3f6501d3fd362fbcd7532d32"],["scripts/rafaelw/mutation-summary/examples/screen_sharing_extension/node_modules/faye-websocket/lib/faye/websocket/hybi_parser.js","38cef23486b53ba6ca2cc67422f98886"],["scripts/rafaelw/mutation-summary/examples/screen_sharing_extension/node_modules/faye-websocket/lib/faye/websocket/hybi_parser/handshake.js","08595ecf6f318eaa93823fa2beb08a8b"],["scripts/rafaelw/mutation-summary/examples/screen_sharing_extension/node_modules/faye-websocket/lib/faye/websocket/hybi_parser/stream_reader.js","4106436986b144b79f91718feb287240"],["scripts/rafaelw/mutation-summary/examples/screen_sharing_extension/node_modules/faye-websocket/spec/faye/websocket/client_spec.js","b2bff1aaf04bdff652b3ca6f2f69bb95"],["scripts/rafaelw/mutation-summary/examples/screen_sharing_extension/node_modules/faye-websocket/spec/faye/websocket/draft75parser_spec.js","0f8e037ef7385db558c101a4b9871083"],["scripts/rafaelw/mutation-summary/examples/screen_sharing_extension/node_modules/faye-websocket/spec/faye/websocket/draft76parser_spec.js","804f4aba96768f612db3568dbbbf3edf"],["scripts/rafaelw/mutation-summary/examples/screen_sharing_extension/node_modules/faye-websocket/spec/faye/websocket/hybi_parser_spec.js","e2fd3dccd6c7f83bf83b3204fd5322cf"],["scripts/rafaelw/mutation-summary/examples/screen_sharing_extension/node_modules/faye-websocket/spec/runner.js","fed03fb0a29e711a1d116ff2a0605de9"],["scripts/rafaelw/mutation-summary/examples/screen_sharing_extension/server.js","53721dd74dd28945db49258c6a68f1fc"],["scripts/rafaelw/mutation-summary/src/mutation-summary.js","eda29cedaa5ea2a04f6dcc741961e9b9"],["scripts/rafaelw/mutation-summary/tests/setup.js","f7fd171ab6611caffad36f11a7a3b4ad"],["scripts/rafaelw/mutation-summary/tests/test-validator.js","9145e6adb046724cdaffe98cd36b9d3d"],["scripts/rafaelw/mutation-summary/tests/test.js","84c0965c82dfc03c87b03e36e70386e6"],["scripts/rafaelw/mutation-summary/util/tree-mirror.js","b25b481184bf677f2f99d07e91917dd2"],["scripts/slimmenu/dist/js/jquery.slimmenu.min.js","39c4f9d46e35e3d6901a5c08f0ab3e76"],["scripts/svgdotjs/svg.js","08e8dafafc866f6f941a67a0247cfcad"],["scripts/svgdotjs/svg.min.js","1da4c973b3c1695c37c80faa50bb9b96"],["scripts/sw/runtime-caching.js","e3e34dcb62b5d62453b9215961585488"],["scripts/sw/sw-toolbox.js","2770efb889cc10c4de88d0b746c2a13c"],["scripts/timbonicus/jquery.mutationobserver.js","98d2ea8052ec658bd364183c9102dac4"],["scripts/vast/jquery.popupoverlay.js","4c07b46421565c269844a1edc4d8310b"],["styles/main.css","d52fb8be1f96d1d9ceb3ce1b7e6c0d88"],["styles/vendor/jquery/jquery-ui.css","8856f4d11fd1a080e50aabbab19ae02e"],["styles/vendor/jquery/jquery-ui.min.css","78ea10a600d1524fbfb825c31772c354"],["styles/vendor/jquery/jquery-ui.structure.css","df2aec7ca2eb66a4ab32de80d41ae974"],["styles/vendor/jquery/jquery-ui.structure.min.css","65d26f87f46831d37ece273033cd3b4b"],["styles/vendor/jquery/jquery-ui.theme.css","45feb83aa891a81694520e11bc42e838"],["styles/vendor/jquery/jquery-ui.theme.min.css","ece3e9bdbf4dcb5f681b76d6cbe58ae0"],["styles/vendor/jquerysvg/jquery.svg.css","5378514bcd31d381017320e7e9159d5b"],["test.html","c393634e7709e7e7d34d1680a33078a0"]];
var cacheName = 'sw-precache-v3-web-starter-kit-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







importScripts("scripts/sw/sw-toolbox.js","scripts/sw/runtime-caching.js");

