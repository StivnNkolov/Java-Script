// function solve() {
//    let smt = document.querySelectorAll('.product')
//    let resultElement = document.querySelector('textarea');
//    let checkoutButtonElement = document.querySelector('.checkout')

//    let finalPrice = 0;
//    let boughtProducts = [];


//    for (let element of smt) {
//       element.addEventListener('click', (e) => {
//          let pressedElement = e.target;
//          let pressedElementContainer = e.currentTarget;
//          if (pressedElement.className == 'add-product') {
//             let productName = pressedElementContainer.children[1].children[0].textContent;
//             let productPrice = pressedElementContainer.children[3].textContent;
//             finalPrice += Number(productPrice)

//             resultElement.textContent += `Added ${productName} for ${Number(productPrice).toFixed(2)} to the cart.\n`
//             if (!boughtProducts.includes(productName)) {
//                boughtProducts.push(productName)
//             }
//          }
//       })
//    }

//    checkoutButtonElement.addEventListener('click', (e) => {
//       resultElement.textContent += `You bought ${boughtProducts.join(', ')} for ${finalPrice.toFixed(2)}.`
//       let allElements = document.querySelectorAll('button');
//       let allElementsArray = Array.from(allElements).map(v => v.disabled = true);
//    })
// }

// function solve() {
//    let addProductButtonElementsArray = Array.from(document.querySelectorAll('.add-product'));
//    let checkoutButtonElement = document.querySelector('.checkout');
//    let textareaElement = document.querySelector('textarea');

//    let addedProductsList = [];
//    let fullAmount = 0;

//    for (let button of addProductButtonElementsArray) {
//       button.addEventListener('click', (e) => {
//          let targetParentElement = e.currentTarget.parentNode.parentNode;
//          // console.log(targetParentElement)
//          let productTitle = targetParentElement.querySelector('.product-title').textContent;
//          let productPrice = Number(targetParentElement.querySelector('.product-line-price').textContent);

//          if (!addedProductsList.includes(productTitle)) {
//             addedProductsList.push(productTitle);
//          }

//          fullAmount += productPrice;
//          let stringToShow = `Added ${productTitle} for ${productPrice.toFixed(2)} to the cart.\n`
//          textareaElement.textContent += stringToShow;
//       })
//    }

//    checkoutButtonElement.addEventListener('click', (e) => {
//       let stringOfProducts = addedProductsList.join(', ');
//       let checkoutString = `You bought ${stringOfProducts} for ${fullAmount.toFixed(2)}.`
//       textareaElement.textContent += checkoutString;

//       for (let button of addProductButtonElementsArray) {
//          button.setAttribute('disabled', 'disabled')
//       }
//       e.currentTarget.setAttribute('disabled', 'disabled')

//    })
// }

// function solve() {
//    let productsContainerElements = document.querySelectorAll('.product')
//    console.log(productsContainerElements);
//    let resultElement = document.querySelector('textarea');
//    let checkoutButtonElement = document.querySelector('.checkout')

//    let finalPrice = 0;
//    let boughtProducts = [];


//    for (let element of productsContainerElements) {
//       element.addEventListener('click', (e) => {
//          let pressedElement = e.target;
//          let pressedElementContainer = e.currentTarget;
//          if (pressedElement.className == 'add-product') {
//             let productName = pressedElementContainer.querySelector('.product-title').textContent;
//             let productPrice = pressedElementContainer.querySelector('.product-line-price').textContent;
//             finalPrice += Number(productPrice)

//             resultElement.textContent += `Added ${productName} for ${Number(productPrice).toFixed(2)} to the cart.\n`
//             if (!boughtProducts.includes(productName)) {
//                boughtProducts.push(productName)
//             }
//          }
//       })
//    }

//    checkoutButtonElement.addEventListener('click', (e) => {
//       resultElement.textContent += `You bought ${boughtProducts.join(', ')} for ${finalPrice.toFixed(2)}.`
//       let allElements = document.querySelectorAll('button');
//       Array.from(allElements).map(v => v.disabled = true);
//    })
// }

function solve() {
   let productContainerElement = Array.from(document.querySelectorAll('.product'));
   let checkoutButtonElement = document.querySelector('.checkout');
   let textareaElement = document.querySelector('textarea');

   let addedProductsList = [];
   let fullAmount = 0;

   productContainerElement.map(v => v.addEventListener('click', productsEventHandler));

   checkoutButtonElement.addEventListener('click', checkoutButtonEventHandler);

   function productsEventHandler(event) {
      let pressedElement = event.target;
      if (pressedElement.className == 'add-product') {
         let productTitle = event.currentTarget.querySelector('.product-title').textContent;
         let productPrice = Number(event.currentTarget.querySelector('.product-line-price').textContent);

         if (!addedProductsList.includes(productTitle)) {
            addedProductsList.push(productTitle);
         }
         fullAmount += productPrice;
         let stringToShow = `Added ${productTitle} for ${productPrice.toFixed(2)} to the cart.\n`
         textareaElement.textContent += stringToShow;
      }
   }

   function checkoutButtonEventHandler(event) {
      let stringOfProducts = addedProductsList.join(', ');
      let checkoutString = `You bought ${stringOfProducts} for ${fullAmount.toFixed(2)}.`
      textareaElement.textContent += checkoutString;
      Array.from(document.querySelectorAll('button'))
         .map(v => v.setAttribute('disabled', 'disabled'));
   }
}

function solve() {
   let productContainerElement = Array.from(document.querySelectorAll('.product'));
   let checkoutButtonElement = document.querySelector('.checkout');
   let textareaElement = document.querySelector('textarea');

   let addedProductsList = [];
   let fullAmount = 0;

   productContainerElement.map(v => v.addEventListener('click', productsEventHandler));

   checkoutButtonElement.addEventListener('click', checkoutButtonEventHandler);

   function productsEventHandler(event) {
      let pressedElement = event.target;
      if (pressedElement.className == 'add-product') {
         let productTitle = event.currentTarget.querySelector('.product-title').textContent;
         let productPrice = Number(event.currentTarget.querySelector('.product-line-price').textContent);

         if (!addedProductsList.includes(productTitle)) {
            addedProductsList.push(productTitle);
         }
         fullAmount += productPrice;
         let stringToShow = `Added ${productTitle} for ${productPrice.toFixed(2)} to the cart.\n`
         textareaElement.textContent += stringToShow;
      }
   }

   function checkoutButtonEventHandler(event) {
      let stringOfProducts = addedProductsList.join(', ');
      let checkoutString = `You bought ${stringOfProducts} for ${fullAmount.toFixed(2)}.`
      textareaElement.textContent += checkoutString;
      Array.from(document.querySelectorAll('button'))
         .map(v => v.setAttribute('disabled', 'disabled'));
   }
}