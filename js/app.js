// navegacion-offline

// if ( navigator.serviceWorker ) {
//     navigator.serviceWorker.register('/sw.js');
// }



var url = window.location.href;
var swLocation = '/navegacion-offline/sw.js'

if (navigator.serviceWorker) {

    if (url.includes('localhost')) {
        swLocation = '/sw.js';
    }
    navigator.serviceWorker.register(swLocation);
}

// if ( window.caches ) {

//     // caches.open('prueba-1');

//     caches.open('prueba-2');

//     // caches.has('prueba-2').then( console.log );

//     caches.delete('prueba-1').then( console.log );

//     caches.open('cache-v1.1').then( cache => {

//         // cache.add('/index.html');

//         cache.addAll([
//             '/index.html',
//             '/css/style.css',
//             '/img/main.jpg'
//         ]).then( () => {

//             // cache.delete('/css/style.css');

//             cache.put( 'index.html', new Response('Hola Mundo') );

//         });


//         // cache.match('/index.html')
//         //         .then( res => {

//         //             res.text().then( console.log );

//         //         });



//     });



//     caches.keys().then( keys => {
//         console.log(keys);
//     });


// };