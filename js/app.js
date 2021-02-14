'use strict';

// GLobal variables

let totalClicks = 0;
let clicksAllowed = 25;
let allProducts = [];
let indexArray = [];
let imageOne = document.querySelector('section img: first-child');
let imageTwo = document.querySelector('section img: nth-child(2)');
let imageThree = document.querySelector('section img: nth-child(3)');
let myContainer = document.querySelector('section');
let myButton = document.querySelector('div');

// console.log(imageOne);
// console.log(imageTwo);
// console.log(imageThree);
// console.log(myContainer);
// console.log(myButton);

function Products(name, fileExtensions = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExtensions}`;
  this.views = 0;
  this.clicks = 0;
  allProducts.push(this);
}

new Products('bag');
new Products('banana');
new Products('bathroom');
new Products('boots');
new Products('breakfast');
new Products('bubblegum');
new Products('chair');
new Products('cthulhu');
new Products('dog-duck');
new Products('dragon');
new Products('pen');
new Products('pet-sweep');
new Products('scissors');
new Products('shark');
new Products('sweep', 'png');
new Products('tauntaun');
new Products('unicorn');
new Products('usb', 'gif');
new Products('water-can');
new Products('win-glass');

function getRandIndex() {
  return Math.floor(Math.random() * allProducts.length);
}

function renderedProducts() {
  // while (firstProIndex === secondProIndex || firstProIndex === threeProIndex || secondProIndex === threeProIndex) {
  //   let firstProIndex = getRandIndex();
  //   let secondProIndex = getRandIndex();
  //   let threeProIndex = getRandIndex();
  //   secondProIndex = getRandIndex();
  //   threeProIndex = getRandIndex();
  // }
  while (indexArray.length < 3) {
    let randomIndex = getRandIndex();
    while(!indexArray.includes(randomIndex)) {
      indexArray.push(randomIndex);
      console.log(randomIndex);
    }
  }

  let firstProIndex = indexArray.pop();
  let secondProIndex = indexArray.pop();
  let threeProIndex = indexArray.pop();


  imageOne.src = allProducts[firstProIndex].src;
  imageOne.title = allProducts[firstProIndex].name;
  allProducts[firstProIndex].views++;

  imageTwo.src = allProducts[secondProIndex].src;
  imageTwo.title = allProducts[secondProIndex].name;
  allProducts[secondProIndex].views++;

  imageThree.scr = allProducts[threeProIndex].src;
  imageThree.title = allProducts[threeProIndex].name;
  allProducts[threeProIndex].views++;

}

// function renderResults() {
//   let myList = document.querySelector('ul');
//   for (let i = 0; i < allProducts.length; i++) {
//     let li = document.createElement('li');
//     li.textContent = `${allProducts[i].name} was viewed ${allProducts[i].views} times and clicked ${allProducts[i].clicked} times`;
//     myList.appendChild(li);
//   }
// }

// function handleClick(event) {
//   if (event.target === myContainer) {
//     alert('Must click image');
//   }
//   totalClicks++;
//   let getClicked = event.target.title;

//   for (let i = 0; i < allProducts.length; i++) {
//     if (getClicked === allProducts[i].name) {
//       allProducts[i].clicks++;
//       console.log(allProducts[i]);
//     }
//     console.log(getClicked);
//   }
//   renderedProducts();
//   if (totalClicks === clicksAllowed) {
//     // remove evenet Listener.
//     myContainer.removeEventListener('click', handleClick);
//   }
// }

// // eslint-disable-next-line no-unused-vars
// function buttonClick(event) {
//   console.log('You clicked this');
//   if (totalClicks === clicksAllowed) {
//     renderResults();
//   }
// }
renderedProducts();

// myContainer.addEventListener('click', handleClick);
// myButton.addEventListener('click', buttonClick);
