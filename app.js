var ul = document.getElementById('authors'); // Get list where we'll place authors
var url = 'https://randomuser.me/api/?results=10';  // Get 10 random users

fetch(url)
	.then(function(data) {
		// Get and modify data
	})
	.catch(function(error) {
		// Catch any error here
	});