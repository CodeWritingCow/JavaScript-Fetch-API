// createnode and append are helper function
function createNode(element) {
	// Create the type of element that's passed in the parameter
	return document.createElement(element);
}

function append(parent, el) {
	// Append second parameter (element) to first parameter
	return parent.appendChild(el);
}

var ul = document.getElementById('authors'); // Get list where we'll place authors
var url = 'https://randomuser.me/api/?results=10';  // Get 10 random users

fetch(url)
	.then(function(res) {
		// Transform data into JSON
		return res.json();
	})

	.then(function(data) {
		// Create and append li's to ul
		var authors = data.results;
		return authors.map(function(author) {
			var li = createNode('li'),
				img = createNode('img'),
				span = createNode('span');
			img.src = author.picture.medium;
			span.innerHTML = author.name.first + ' ' + author.name.last;
			append(li, img);
			append(li, span);
			append(ul, li);
		});
	})
	.catch(function(error) {
		// Catch any error here
		console.log(error);
	});