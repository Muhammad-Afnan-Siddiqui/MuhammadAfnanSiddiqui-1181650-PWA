// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
// import { addDoc, collection, getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";


// const firebaseConfig = {
//     apiKey: "AIzaSyCr6e8BpUIxVBjjpGdGrCDHKBYsjXKDccM",
//     authDomain: "info-6128-final-project-680a5.firebaseapp.com",
//     projectId: "info-6128-final-project-680a5",
//     storageBucket: "info-6128-final-project-680a5.appspot.com",
//     messagingSenderId: "179931600479",
//     appId: "1:179931600479:web:996844643a12ca351e6dea"
// };



// const app = initializeApp(firebaseConfig)
// const db = getFirestore(app);
// const ref = collection(db, 'Order');


// const form = document.getElementById('orderForm');

// form.addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent default form submission
    
//     // Collect form data
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const contactNumber = document.getElementById('contactNumber').value;
//     const choiceSelect = document.getElementById('choice');

//     var selectedOptions = Array.from(choiceSelect.selectedOptions).map(option => option.value);
//         console.log(name);
    
//     addDoc(ref, {
//         name: name,
//         email: email,
//         contactNumber: contactNumber,
//         choice:selectedOptions,
//     }).then((docRef) => {
//          console.log("Ordered Successfully:", docRef.id);
      
//          document.getElementById("myModal").style.display = "flex";
          
//         //  document.getElementById('success_tic').style.display = 'block';     
//      })
//       .catch((error) => {
//         console.error("Error Placing Order:", error);
//       });
    
// });
// document.getElementsByClassName('close')[0].addEventListener('click', function() {
//     document.getElementById('myModal').style.display = 'none';
// });

// // const orderCollection = collection(db, 'Order');

// // // Check if service worker is supported
// // if ('serviceWorker' in navigator) {
// //     window.addEventListener('load', () => {
// //         navigator.serviceWorker.register('/service-worker.js')
// //             .then(registration => {
// //                 console.log('Service Worker registered with scope:', registration.scope);
// //             })
// //             .catch(error => {
// //                 console.error('Service Worker registration failed:', error);
// //             });
// //     });
// // }

// // // Listen for form submission
// // const form = document.getElementById('orderForm');

// // form.addEventListener('submit', function(event) {
// //     event.preventDefault(); // Prevent default form submission
    
// //     // Collect form data
// //     const name = document.getElementById('name').value;
// //     const email = document.getElementById('email').value;
// //     const contactNumber = document.getElementById('contactNumber').value;
// //     const choiceSelect = document.getElementById('choice');

// //     var selectedOptions = Array.from(choiceSelect.selectedOptions).map(option => option.value);

// //     // Save data to IndexedDB when offline
// //     if (!navigator.onLine && 'indexedDB' in window) {
// //         saveToLocalDB({ name, email, contactNumber, choice: selectedOptions });
// //     } else {
// //         // Save data directly to Firebase Firestore
// //         addDoc(orderCollection, {
// //             name: name,
// //             email: email,
// //             contactNumber: contactNumber,
// //             choice: selectedOptions,
// //         }).then((docRef) => {
// //             console.log("Ordered Successfully:", docRef.id);
// //             document.getElementById("myModal").style.display = "flex";
// //         }).catch((error) => {
// //             console.error("Error Placing Order:", error);
// //         });
// //     }
// // });

// // // Function to save data to IndexedDB
// // function saveToLocalDB(data) {
// //     const request = indexedDB.open('restaurantDB', 1);

// //     request.onerror = function(event) {
// //         console.error("IndexedDB error:", event.target.error);
// //     };

// //     request.onsuccess = function(event) {
// //         const db = event.target.result;
// //         const transaction = db.transaction('orders', 'readwrite');
// //         const store = transaction.objectStore('orders');

// //         store.add(data);
// //     };

// //     request.onupgradeneeded = function(event) {
// //         const db = event.target.result;
// //         db.createObjectStore('orders', { keyPath: 'id', autoIncrement: true });
// //     };
// // }

// // // Background Sync
// // self.addEventListener('sync', function(event) {
// //     if (event.tag === 'syncOrders') {
// //         event.waitUntil(syncOrders());
// //     }
// // });

// // function syncOrders() {
// //     if ('indexedDB' in window) {
// //         const request = indexedDB.open('restaurantDB', 1);

// //         request.onerror = function(event) {
// //             console.error("IndexedDB error:", event.target.error);
// //         };

// //         request.onsuccess = function(event) {
// //             const db = event.target.result;
// //             const transaction = db.transaction('orders', 'readonly');
// //             const store = transaction.objectStore('orders');
// //             const getAllRequest = store.getAll();

// //             getAllRequest.onsuccess = function() {
// //                 const orders = getAllRequest.result;

// //                 orders.forEach(order => {
// //                     addDoc(orderCollection, order)
// //                         .then(() => {
// //                             // Once synced with Firestore, remove from IndexedDB
// //                             const deleteRequest = store.delete(order.id);
// //                             deleteRequest.onsuccess = function() {
// //                                 console.log("Order synced and removed from IndexedDB");
// //                             };
// //                         })
// //                         .catch(error => {
// //                             console.error("Error syncing order:", error);
// //                         });
// //                 });
// //             };
// //         };
// //     }
// // }

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { addDoc, collection, getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCr6e8BpUIxVBjjpGdGrCDHKBYsjXKDccM",
    authDomain: "info-6128-final-project-680a5.firebaseapp.com",
    projectId: "info-6128-final-project-680a5",
    storageBucket: "info-6128-final-project-680a5.appspot.com",
    messagingSenderId: "179931600479",
    appId: "1:179931600479:web:996844643a12ca351e6dea"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const orderCollection = collection(db, 'Order');

const form = document.getElementById('orderForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const choiceSelect = document.getElementById('choice');
    const selectedOptions = Array.from(choiceSelect.selectedOptions).map(option => option.value);

    // Save data to IndexedDB when offline
    if (!navigator.onLine && 'indexedDB' in window) {
        saveToLocalDB({ name, email, contactNumber, choice: selectedOptions });
    } else {
        // Save data directly to Firebase Firestore
        addDoc(orderCollection, {
            name: name,
            email: email,
            contactNumber: contactNumber,
            choice: selectedOptions,
        }).then((docRef) => {
            console.log("Ordered Successfully:", docRef.id);
            document.getElementById("myModal").style.display = "flex";
        }).catch((error) => {
            console.error("Error Placing Order:", error);
        });
    }
});

// Function to save data to IndexedDB
function saveToLocalDB(data) {
    const request = indexedDB.open('restaurantDB', 1);

    request.onerror = function(event) {
        console.error("IndexedDB error:", event.target.error);
    };

    request.onsuccess = function(event) {
        const db = event.target.result;
        const transaction = db.transaction('orders', 'readwrite');
        const store = transaction.objectStore('orders');

        store.add(data);
    };

    request.onupgradeneeded = function(event) {
        const db = event.target.result;
        db.createObjectStore('orders', { keyPath: 'id', autoIncrement: true });
    };
}

// Background Sync
self.addEventListener('sync', function(event) {
    if (event.tag === 'syncOrders') {
        event.waitUntil(syncOrders());
    }
});

function syncOrders() {
    if ('indexedDB' in window) {
        const request = indexedDB.open('restaurantDB', 1);

        request.onerror = function(event) {
            console.error("IndexedDB error:", event.target.error);
        };

        request.onsuccess = function(event) {
            const db = event.target.result;
            const transaction = db.transaction('orders', 'readonly');
            const store = transaction.objectStore('orders');
            const getAllRequest = store.getAll();

            getAllRequest.onsuccess = function() {
                const orders = getAllRequest.result;

                orders.forEach(order => {
                    addDoc(orderCollection, order)
                        .then(() => {
                            // Once synced with Firestore, remove from IndexedDB
                            const deleteRequest = store.delete(order.id);
                            deleteRequest.onsuccess = function() {
                                console.log("Order synced and removed from IndexedDB");
                            };
                        })
                        .catch(error => {
                            console.error("Error syncing order:", error);
                        });
                });
            };
        };
    }
}
