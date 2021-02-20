'use strict';

// GLobal variables

let totalClicks = 0;
let clicksAllowed = 25;
let allProducts = [];
let indexArray = [];
let imageOne = document.querySelector('section img:first-child');
let imageTwo = document.querySelector('section img:nth-child(2)');
let imageThree = document.querySelector('section img:nth-child(3)');
let myContainer = document.querySelector('section');

console.log(imageOne);
console.log(imageTwo);
console.log(imageThree);
console.log(myContainer);

function Products(name, fileExtensions = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExtensions}`;
  this.views = 0;
  this.clicks = 0;
  allProducts.push(this);
}

let retrievedProducts = localStorage.getItem('products');

if (retrievedProducts) {
  let parsedProducts = JSON.parse(retrievedProducts);
  allProducts = parsedProducts;
} else {
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
  new Products('wine-glass');
}

function getRandIndex() {
  return Math.floor(Math.random() * allProducts.length);
}

function renderedProducts() {
  while (indexArray.length < 6) {
    let randomIndex = getRandIndex();
    while (!indexArray.includes(randomIndex)) {
      indexArray.unshift(randomIndex);
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

  imageThree.src = allProducts[threeProIndex].src;
  imageThree.title = allProducts[threeProIndex].name;
  allProducts[threeProIndex].views++;

}

function handleClick(event) {
  if (event.target === myContainer) {
    alert('Must click image');
  }
  totalClicks++;
  let getClicked = event.target.title;

  for (let i = 0; i < allProducts.length; i++) {
    if (getClicked === allProducts[i].name) {
      allProducts[i].clicks++;
      console.log(allProducts[i]);
    }
    console.log(getClicked);
  }
  renderedProducts();
  if (totalClicks === clicksAllowed) {
    // remove evenet Listener.
    myContainer.removeEventListener('click', handleClick);
    let stringifiedProducts = JSON.stringify(allProducts);
    localStorage.setItem('products', stringifiedProducts);
    renderChart();
  }
}


renderedProducts();
let productName = [];
let productView = [];
let productClicks = [];

function renderChart() {
  for (let i = 0; i < allProducts.length; i++) {
    productName.push(allProducts[i].name);
    productView.push(allProducts[i].views);
    productClicks.push(allProducts[i].clicks);
  }
  console.log('productName: ', productName);
  console.log('productViews', productView);
  console.log('productClicks', productClicks);
  var chartObject = {
    type: 'bar',
    data: {
      labels: productName,
      datasets: [{
        label: 'Views',
        data: productView,
        backgroundColor: 'red',
        borderColor: 'red',
        borderWidth: 5
      },
      {
        label: 'Clicks',
        data: productClicks,
        backgroundColor: 'green',
        borderColor: 'green',
        borderWidth: 5
      }]
    },
    responsive: false,
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  };
  let ctx = document.getElementById('myChart').getContext('2d');
  let myChart = new Chart(ctx, chartObject);
}

myContainer.addEventListener('click', handleClick);

// I collaborated with Qadree, Paul (TA), Anthony, and Brian when it came to my JS and HTML.
