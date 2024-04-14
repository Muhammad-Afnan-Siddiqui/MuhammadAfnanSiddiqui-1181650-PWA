// const cName = 'ResturantCache';
// self.addEventListener('install', (event) => {
//     self.skipWaiting();

//     event.waitUntil(
//         caches.open(cName)
//             .then((cache) => {
//                 cache.addAll([
//                     '/',
//                     '/index.html',
//                     './menu.html',
//                     './Form.html',
//                     './manifest.json',
//                     '/style.css',
//                     '/assets/css/all.min.css',
//                     '/assets/css/bootstrap.min.css',
//                     '/assets/css/fontawesome.min.css',
//                     '/assets/css/jquery.fancybox.min.css',
//                     '/main.js',
//                     '/assets/icons',
//                     '/assets/css',
//                     '/assets/images',
//                     '/assets/splash_screens',
//                     '/assets/webfonts',
//                     '/assets/js',
//                     '/logo.png',
//                     '/assets/icons/android-chrome-36x36.png',
//                     '/assets/icons/android-chrome-48x48.png',
//                     '/assets/icons/android-chrome-72x72.png',
//                     '/assets/icons/android-chrome-96x96.png',
//                     '/assets/icons/android-chrome-144x144.png',
//                     '/assets/icons/android-chrome-192x192.png',
//                     '/assets/icons/apple-touch-icon-57x57.png',
//                     '/assets/icons/apple-touch-icon-60x60.png',
//                     '/assets/icons/apple-touch-icon-72x72.png',
//                     '/assets/icons/apple-touch-icon-76x76.png',
//                     '/assets/icons/site.webmanifest',
//                     '/assets/icons/safari-pinned-tab.svg',
//                     '/assets/icons/mstile-310x310.png',
//                     '/assets/icons/mstile-310x150.png',
//                     '/assets/icons/mstile-144x144.png',
//                     '/assets/icons/mstile-150x150.png',
//                     '/assets/icons/mstile-70x70.png',
//                     '/assets/icons/favicon.ico',
//                     '/assets/icons/favicon-32x32.png',
//                     '/assets/icons/favicon-16x16.png',
//                     '/assets/icons/browserconfig.xml',
//                     '/assets/icons/apple-touch-icon.png',
//                     '/assets/icons/apple-touch-icon-180x180.png',
//                     '/assets/icons/apple-touch-icon-152x152.png',
//                     '/assets/icons/apple-touch-icon-144x144.png',
//                     '/assets/icons/apple-touch-icon-120x120.png',
//                     '/assets/icons/apple-touch-icon-114x114.png',
//                     '/assets/images/title-shape.svg',
//                     '/assets/images/table-leaves-shape.png',
//                     '/assets/images/sushi.png',
//                     '/assets/images/menu-bg.png',
//                     '/assets/images/menu-4.png',
//                     '/assets/images/menu-3.png',
//                     '/assets/images/menu-1.png',
//                     '/assets/images/menu-2.png',
//                     '/assets/images/main-b.jpg',
//                     '/assets/images/loader.gif',
//                     '/assets/images/leaf.png',
//                     '/assets/images/faq-bg.png',
//                     '/assets/images/berry.png',
//                     '/assets/images/dish/1.png',
//                     '/assets/images/dish/2.png',
//                     '/assets/images/dish/3.png',
//                     '/assets/images/dish/4.png',
//                     '/assets/images/dish/5.png',
//                     '/assets/images/dish/6.png',
//                     '/assets/js/bootstrap.min.js',
//                     '/assets/js/font-awesome.min.js',
//                     '/assets/js/jquery-3.5.1.min.js',
//                     '/assets/js/jquery.fancybox.min.js',
//                     '/assets/js/jquery.mixitup.min.js',
//                     '/assets/js/popper.min.js',
//                     '/assets/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png',
//                     '/assets/splash_screens/8.3__iPad_Mini_landscape.png',
//                     '/assets/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png',
//                     '/assets/splash_screens/8.3__iPad_Mini_portrait.png',
//                     '/assets/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png',
//                     '/assets/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png',
//                     '/assets/splash_screens/10.2__iPad_landscape.png',
//                     '/assets/splash_screens/10.2__iPad_portrait.png',
//                     '/assets/splash_screens/10.5__iPad_Air_landscape.png',
//                     '/assets/splash_screens/10.5__iPad_Air_portrait.png',
//                     '/assets/splash_screens/10.9__iPad_Air_landscape.png',
//                     '/assets/splash_screens/10.9__iPad_Air_portrait.png',
//                     '/assets/splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png',
//                     '/assets/splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png',
//                     '/assets/splash_screens/12.9__iPad_Pro_landscape.png',
//                     '/assets/splash_screens/12.9__iPad_Pro_portrait.png',
//                     '/assets/splash_screens/icon.png',
//                     '/assets/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png',
//                     '/assets/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png',
//                     '/assets/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png',
//                     '/assets/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png',
//                     '/assets/splash_screens/iPhone_11__iPhone_XR_portrait.png',
//                     '/assets/splash_screens/iPhone_11__iPhone_XR_landscape.png',
//                     '/assets/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png',
//                     '/assets/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png',
//                     '/assets/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png',
//                     '/assets/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png',
//                     '/assets/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png',
//                     '/assets/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png',
//                     '/assets/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png',
//                     '/assets/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png',
//                     '/assets/splash_screens/iPhone_15_Pro__iPhone_15__iPhone_14_Pro_landscape.png',
//                     '/assets/splash_screens/iPhone_15_Pro__iPhone_15__iPhone_14_Pro_portrait.png',
//                     '/assets/splash_screens/iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_landscape.png',
//                     '/assets/splash_screens/iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_portrait.png',
//                     '/assets/webfonts',
//                     '/assets/webfonts/fa-brands-400.ttf',
//                     '/assets/webfonts/fa-brands-400.woff2',
//                     '/assets/webfonts/fa-regular-400.ttf',
//                     '/assets/webfonts/fa-regular-400.woff2',
//                     '/assets/webfonts/fa-solid-900.ttf',
//                     '/assets/webfonts/fa-solid-900.woff2',
//                     '/assets/webfonts/fa-v4compatibility.ttf',
//                     '/assets/webfonts/fa-v4compatibility.woff2',
//                     './assets/icons/maskable-icon-192x192.png',
//                     'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap'

//                 ]);
//             })
//             .catch((error) => {
//                 // console.log('Caching failed -> ', error);
//             })
//     );
// });

// self.addEventListener('activate', (event) => {
//     event.waitUntil(clients.claim());
//     event.waitUntil(caches.keys().then(function (cacheNames) {
//         return Promise.all(cacheNames
//             .filter(item => item !== cName)
//             .map(item => caches.delete(item))
//         );
//     }));
// });

// self.addEventListener('fetch', (event) => {
//     if (event.request.method === 'GET') {
//         if (event.request.url.startsWith('chrome-extension://')) {
//             // Do not cache requests with the chrome-extension scheme
//             return;
//         }

//         event.respondWith(
//             caches.open(cName)
//                 .then((cache) => {
//                     return cache.match(event.request)
//                         .then((cacheResponse) => {
//                             const fetchedResponse = fetch(event.request)
//                                 .then((net) => {
//                                     // Check if the response is valid before caching
//                                     if (net && net.ok) {
//                                         cache.put(event.request, net.clone());
//                                     }
//                                     return net;
//                                 });
//                             return cacheResponse || fetchedResponse;
//                         });
//                 })
//         );
//     }
// });

// '/',
//                     '/index.html',
//                     './menu.html',
//                     './Form.html',
//                     './manifest.json',
//                     '/style.css',
//                     '/assets/css/all.min.css',
//                     '/assets/css/bootstrap.min.css',
//                     '/assets/css/fontawesome.min.css',
//                     '/assets/css/jquery.fancybox.min.css',
//                     '/main.js',
//                     '/assets/icons',
//                     '/assets/css',
//                     '/assets/images',
//                     '/assets/splash_screens',
//                     '/assets/webfonts',
//                     '/assets/js',
//                     '/logo.png',
//                     '/assets/icons/android-chrome-36x36.png',
//                     '/assets/icons/android-chrome-48x48.png',
//                     '/assets/icons/android-chrome-72x72.png',
//                     '/assets/icons/android-chrome-96x96.png',
//                     '/assets/icons/android-chrome-144x144.png',
//                     '/assets/icons/android-chrome-192x192.png',
//                     '/assets/icons/apple-touch-icon-57x57.png',
//                     '/assets/icons/apple-touch-icon-60x60.png',
//                     '/assets/icons/apple-touch-icon-72x72.png',
//                     '/assets/icons/apple-touch-icon-76x76.png',
//                     '/assets/icons/site.webmanifest',
//                     '/assets/icons/safari-pinned-tab.svg',
//                     '/assets/icons/mstile-310x310.png',
//                     '/assets/icons/mstile-310x150.png',
//                     '/assets/icons/mstile-144x144.png',
//                     '/assets/icons/mstile-150x150.png',
//                     '/assets/icons/mstile-70x70.png',
//                     '/assets/icons/favicon.ico',
//                     '/assets/icons/favicon-32x32.png',
//                     '/assets/icons/favicon-16x16.png',
//                     '/assets/icons/browserconfig.xml',
//                     '/assets/icons/apple-touch-icon.png',
//                     '/assets/icons/apple-touch-icon-180x180.png',
//                     '/assets/icons/apple-touch-icon-152x152.png',
//                     '/assets/icons/apple-touch-icon-144x144.png',
//                     '/assets/icons/apple-touch-icon-120x120.png',
//                     '/assets/icons/apple-touch-icon-114x114.png',
//                     '/assets/images/title-shape.svg',
//                     '/assets/images/table-leaves-shape.png',
//                     '/assets/images/sushi.png',
//                     '/assets/images/menu-bg.png',
//                     '/assets/images/menu-4.png',
//                     '/assets/images/menu-3.png',
//                     '/assets/images/menu-1.png',
//                     '/assets/images/menu-2.png',
//                     '/assets/images/main-b.jpg',
//                     '/assets/images/loader.gif',
//                     '/assets/images/leaf.png',
//                     '/assets/images/faq-bg.png',
//                     '/assets/images/berry.png',
//                     '/assets/images/dish/1.png',
//                     '/assets/images/dish/2.png',
//                     '/assets/images/dish/3.png',
//                     '/assets/images/dish/4.png',
//                     '/assets/images/dish/5.png',
//                     '/assets/images/dish/6.png',
//                     '/assets/js/bootstrap.min.js',
//                     '/assets/js/font-awesome.min.js',
//                     '/assets/js/jquery-3.5.1.min.js',
//                     '/assets/js/jquery.fancybox.min.js',
//                     '/assets/js/jquery.mixitup.min.js',
//                     '/assets/js/popper.min.js',
//                     '/assets/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_landscape.png',
//                     '/assets/splash_screens/8.3__iPad_Mini_landscape.png',
//                     '/assets/splash_screens/4__iPhone_SE__iPod_touch_5th_generation_and_later_portrait.png',
//                     '/assets/splash_screens/8.3__iPad_Mini_portrait.png',
//                     '/assets/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_landscape.png',
//                     '/assets/splash_screens/9.7__iPad_Pro__7.9__iPad_mini__9.7__iPad_Air__9.7__iPad_portrait.png',
//                     '/assets/splash_screens/10.2__iPad_landscape.png',
//                     '/assets/splash_screens/10.2__iPad_portrait.png',
//                     '/assets/splash_screens/10.5__iPad_Air_landscape.png',
//                     '/assets/splash_screens/10.5__iPad_Air_portrait.png',
//                     '/assets/splash_screens/10.9__iPad_Air_landscape.png',
//                     '/assets/splash_screens/10.9__iPad_Air_portrait.png',
//                     '/assets/splash_screens/11__iPad_Pro__10.5__iPad_Pro_landscape.png',
//                     '/assets/splash_screens/11__iPad_Pro__10.5__iPad_Pro_portrait.png',
//                     '/assets/splash_screens/12.9__iPad_Pro_landscape.png',
//                     '/assets/splash_screens/12.9__iPad_Pro_portrait.png',
//                     '/assets/splash_screens/icon.png',
//                     '/assets/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_landscape.png',
//                     '/assets/splash_screens/iPhone_8__iPhone_7__iPhone_6s__iPhone_6__4.7__iPhone_SE_portrait.png',
//                     '/assets/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_landscape.png',
//                     '/assets/splash_screens/iPhone_8_Plus__iPhone_7_Plus__iPhone_6s_Plus__iPhone_6_Plus_portrait.png',
//                     '/assets/splash_screens/iPhone_11__iPhone_XR_portrait.png',
//                     '/assets/splash_screens/iPhone_11__iPhone_XR_landscape.png',
//                     '/assets/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_landscape.png',
//                     '/assets/splash_screens/iPhone_11_Pro_Max__iPhone_XS_Max_portrait.png',
//                     '/assets/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_landscape.png',
//                     '/assets/splash_screens/iPhone_13_mini__iPhone_12_mini__iPhone_11_Pro__iPhone_XS__iPhone_X_portrait.png',
//                     '/assets/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_landscape.png',
//                     '/assets/splash_screens/iPhone_14__iPhone_13_Pro__iPhone_13__iPhone_12_Pro__iPhone_12_portrait.png',
//                     '/assets/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_landscape.png',
//                     '/assets/splash_screens/iPhone_14_Plus__iPhone_13_Pro_Max__iPhone_12_Pro_Max_portrait.png',
//                     '/assets/splash_screens/iPhone_15_Pro__iPhone_15__iPhone_14_Pro_landscape.png',
//                     '/assets/splash_screens/iPhone_15_Pro__iPhone_15__iPhone_14_Pro_portrait.png',
//                     '/assets/splash_screens/iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_landscape.png',
//                     '/assets/splash_screens/iPhone_15_Pro_Max__iPhone_15_Plus__iPhone_14_Pro_Max_portrait.png',
//                     '/assets/webfonts',
//                     '/assets/webfonts/fa-brands-400.ttf',
//                     '/assets/webfonts/fa-brands-400.woff2',
//                     '/assets/webfonts/fa-regular-400.ttf',
//                     '/assets/webfonts/fa-regular-400.woff2',
//                     '/assets/webfonts/fa-solid-900.ttf',
//                     '/assets/webfonts/fa-solid-900.woff2',
//                     '/assets/webfonts/fa-v4compatibility.ttf',
//                     '/assets/webfonts/fa-v4compatibility.woff2',
//                     './assets/icons/maskable-icon-192x192.png',
//                     'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap'


const cacheName = 'restaurant-cache';

const urlsToCache = [
    '/',
    '/index.html',
    './menu.html',
    './Form.html',
    './manifest.json',
    '/style.css',
    '/assets/css/all.min.css',
    '/assets/css/bootstrap.min.css',
    '/assets/css/fontawesome.min.css',
    '/assets/css/jquery.fancybox.min.css',
    '/main.js',
    '/assets/icons',
    '/assets/css',
    '/assets/images',
    '/assets/splash_screens',
    '/assets/webfonts',
    '/assets/js',
    '/logo.png',
    '/assets/icons/android-chrome-36x36.png',
    '/assets/icons/android-chrome-48x48.png',
    '/assets/icons/android-chrome-72x72.png',
    '/assets/icons/android-chrome-96x96.png',
    '/assets/icons/android-chrome-144x144.png',
    '/assets/icons/android-chrome-192x192.png',
    '/assets/icons/apple-touch-icon-57x57.png',
    '/assets/icons/apple-touch-icon-60x60.png',
    '/assets/icons/apple-touch-icon-72x72.png',
    '/assets/icons/apple-touch-icon-76x76.png',
    '/assets/icons/site.webmanifest',
    '/assets/icons/safari-pinned-tab.svg',
    '/assets/icons/mstile-310x310.png',
    '/assets/icons/mstile-310x150.png',
    '/assets/icons/mstile-144x144.png',
    '/assets/icons/mstile-150x150.png',
    '/assets/icons/mstile-70x70.png',
    '/assets/icons/favicon.ico',
    '/assets/icons/favicon-32x32.png',
    '/assets/icons/favicon-16x16.png',
    '/assets/icons/browserconfig.xml',
    '/assets/icons/apple-touch-icon.png',
    '/assets/icons/apple-touch-icon-180x180.png',
    '/assets/icons/apple-touch-icon-152x152.png',
    '/assets/icons/apple-touch-icon-144x144.png',
    '/assets/icons/apple-touch-icon-120x120.png',
    '/assets/icons/apple-touch-icon-114x114.png',
    '/assets/images/title-shape.svg',
    '/assets/images/table-leaves-shape.png',
    '/assets/images/sushi.png',
    '/assets/images/menu-bg.png',
    '/assets/images/menu-4.png',
    '/assets/images/menu-3.png',
    '/assets/images/menu-1.png',
    '/assets/images/menu-2.png',
    '/assets/images/main-b.jpg',
    '/assets/images/loader.gif',
    '/assets/images/leaf.png',
    '/assets/images/faq-bg.png',
    '/assets/images/berry.png',
    '/assets/images/dish/1.png',
    '/assets/images/dish/2.png',
    '/assets/images/dish/3.png',
    '/assets/images/dish/4.png',
    '/assets/images/dish/5.png',
    '/assets/images/dish/6.png',
    '/assets/js/bootstrap.min.js',
    '/assets/js/font-awesome.min.js',
    '/assets/js/jquery-3.5.1.min.js',
    '/assets/js/jquery.fancybox.min.js',
    '/assets/js/jquery.mixitup.min.js',
    '/assets/js/popper.min.js',
    './assets/icons/maskable-icon-192x192.png',

];

const externalUrlsToCache = [
    'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.filter((name) => {
                    return name !== cacheName;
                }).map((name) => {
                    return caches.delete(name);
                })
            );
        })
    );
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    if (event.request.url.startsWith('chrome-extension://')) {
        // Skip caching resources with chrome-extension scheme
        return;}
    if (event.request.url.startsWith('https://fonts.googleapis.com')) {
        event.respondWith(
            fetch(event.request)
                .then((response) => {
                    return caches.open(cacheName)
                        .then((cache) => {
                            cache.put(event.request, response.clone());
                            return response;
                        });
                })
                .catch((error) => {
                    console.error('Error fetching and caching Google Fonts:', error);
                    return caches.match(event.request);
                })
        );
    } else {
        event.respondWith(
            caches.match(event.request)
                .then((cachedResponse) => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    return fetch(event.request)
                        .then((response) => {
                            if (!response || response.status !== 200 || response.type !== 'basic') {
                                return response;
                            }
                            const responseToCache = response.clone();
                            caches.open(cacheName)
                                .then((cache) => {
                                    cache.put(event.request, responseToCache);
                                });
                            return response;
                        });
                })
                .catch((error) => {
                    console.error('Error fetching and caching:', error);
                    throw error;
                })
        );
    }
});
