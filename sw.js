self.addEventListener('install', function(event) {
	var urlsToCache = [
		'/',
		'js/dbhelper.js',
		'js/main.js',
		'js/restaurant_info.js',
		'index.html',
		'restaurant.html',
		'css/styles.css',
		'data/restaurants.json',
		'restaurant.html?id=1',
		'restaurant.html?id=2',
		'restaurant.html?id=3',
		'restaurant.html?id=4',
		'restaurant.html?id=5',
		'restaurant.html?id=6',
		'restaurant.html?id=7',
		'restaurant.html?id=8',
		'restaurant.html?id=9',
		'restaurant.html?id=10',
	];

	event.waitUntil(
		caches.open('restaurant-reviews-v1').then(function(cache) {
			return cache.addAll(urlsToCache);
		})
	);
});


self.addEventListener('fetch', function(event) {
	// console.log('yo everyone',event.request);
	// event.respondWith(
	// 	new Response('shit I broke my site')
	// );

	event.respondWith(
		caches.match(event.request).then(function(response){
			if(response) return response;
			return fetch(event.request);
		})
	);
});