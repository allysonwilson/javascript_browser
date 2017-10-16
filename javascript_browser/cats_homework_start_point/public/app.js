// var cats_array = [
//   { cat: },
//   { cat: },
//   { cat: },
//   { cat: }
// ]


var createCatList = function () {
 var catList = document.createElement('cats');
 catList.classList.add('cat');

 var catName = document.createElement ('cat name');
 catName.innerText = "A particular Kitty";

 var catFood = document.createElement ('favourite food');
 catFood.innerText = "yum yums";

 var catImage = document.createElement ('cat pic');
 catImage.innerText = "pretty kitty";

  catFood.appendChild(catName);
  catName.appendChild(catFood);
  catList.appendChild(catName);

  var catListing = document.querySelector('#catListing');
  catListing.appendChild(catList);

}

window.onload = app;

// Add JS code to allow a new cat to be added programmatically. Do it rough and ready at first!
// Refactor the code to make it easy to add a new cat, just like we did with the quotes.
// EXTENSION: Remove the cat data in the HTML and add them via your javascript. If you want to be fancy, put the cat data into an array.
// EXTENSION: Style the site!




//  +3. EXTENSION: Remove the cat data in the HTML and add them via your javascript. If you want to be fancy, put the cat data into an array.
//  +4. EXTENSION: Style the site!
