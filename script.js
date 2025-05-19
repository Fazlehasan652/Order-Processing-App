// Data Collect Function
function inputData() {
  // e.preventDefault();
  const arrayData = [];
  inputForm = document.querySelector("#inform");
  const inputName = inputForm.querySelector("#name");
  const nameValue = inputName.value;
  arrayData.push(nameValue);
  inputName.value = "";
  const inputFood = inputForm.querySelector("#food");
  const foodValue = inputFood.value;
  arrayData.push(foodValue);
  inputFood.value = "";
  const inputPrice = inputForm.querySelector("#price");
  const priceValue = inputPrice.value;
  arrayData.push(priceValue);
  inputPrice.value = "";
  function randomId() {
    return Math.floor(Math.random() * 100);
  }
  let id = randomId();
  arrayData.push(id);
  //   console.log(arrayData);

  return arrayData;
}

// Data Submit
function callForm(customerOrderDetails) {
  let arr = inputData();
  // console.log(arr);
  customerOrderDetails(arr, waiter);
}
// customer Order Details
function customerOrderDetails(arr, waiter) {
  // console.log(arr)
  let name = arr[0];
  let food = arr[1];
  let price = arr[2];
  let id = arr[3];
  //   console.log(id);

  //   let html = `
  //               <li class="fs-5 my-2" id="orderId">Order Id : <span class="">${id}</span></li>
  //               <li class="fs-5 my-2" id="orderName">Name : <span class="">${name}</span></li>
  //               <li class="fs-5 my-2" id="orderFood">Food Type: <span class="">${food}</span></li>
  //               <li class="fs-5 my-2" id="orderPrice">Price : <span class="">${price}</span></li>
  // `;

  // order Id
  const orderUl = document.createElement("ul");
  orderUl.classList.add("p-3");
  orderUl.id = "items";

  // order Id
  const orderId = document.createElement("li");
  orderId.classList.add("fs-5", "my-2");
  orderId.id = "orderId";
  orderId.innerText = `Order Id: `;
  const idSpan = document.createElement("span");
  idSpan.id = "spanId";
  idSpan.innerText = `${id}`;
  orderId.appendChild(idSpan);

  //   customer Name

  const customerName = document.createElement("li");
  customerName.classList.add("fs-5", "my-2");
  customerName.id = "orderName";
  customerName.innerText = `Name: `;
  const nameSpan = document.createElement("span");
  nameSpan.id = "nameSpan";
  nameSpan.innerText = `${name}`;
  customerName.appendChild(nameSpan);

  //   Food order
  const orderFood = document.createElement("li");
  orderFood.classList.add("fs-5", "my-2");
  orderFood.id = "orderFood";
  orderFood.innerText = `Food Type: `;
  const foodSpan = document.createElement("span");
  foodSpan.id = "foodSpan";
  foodSpan.innerText = `${food}`;
  orderFood.appendChild(foodSpan);
  //   order Price
  const orderPrice = document.createElement("li");
  orderPrice.classList.add("fs-5", "my-2");
  orderPrice.id = "orderPrice";
  orderPrice.innerText = `Price: `;
  const priceSpan = document.createElement("span");
  priceSpan.id = "priceSpan";
  priceSpan.innerText = `${price} $`;
  orderPrice.appendChild(priceSpan);
  //   Append
  orderUl.style.color = `#7CFC${id}`;
  orderUl.append(customerName, orderFood, orderPrice, orderId);
  waiter(orderUl, kitchenRoom);
  // return orderUl
}

// let inputArray = customerOrderDetails
// console.log(inputArray())

// Waiter Function
function waiter(orderUl, kitchenRoom) {
  // console.log(orderUl)
  const waiterDiv = document.querySelector("#waiter");

  waiterDiv.appendChild(orderUl);
  // console.log(orderUl);
  kitchenRoom(orderUl, orderProcessing);
}
// waiter()

// kitchen Room Function
function kitchenRoom(orderUl, orderProcessing) {
  setTimeout(() => {
    const kitchen = document.querySelector("#itemsK");
    kitchen.appendChild(orderUl);
    orderProcessing(orderUl, orderProcessComplete);
  }, 1000);
}

// order Processing Function
function orderProcessing(orderUl, orderProcessComplete) {
  setTimeout(() => {
    const processing = document.querySelector("#itemsPss");
    processing.appendChild(orderUl);
    orderProcessComplete(orderUl, callWaiterServe);
  }, 2000);
}
// order Process Complete Function
function orderProcessComplete(orderUl, callWaiterServe) {
  setTimeout(() => {
    const ProcessComplete = document.querySelector("#itemsPro");
    ProcessComplete.appendChild(orderUl);
    callWaiterServe(orderUl, customerTable);
    
  }, 3000);
}

// Call Waiter for Serve Order Function
function callWaiterServe(orderUl, customerTable) {
  // const imgArray = [
  //   "Burger-1.png",
  //   "Burger-2.png",
  //   "Beep-Steak.png",
  //   "Mixed-salad.jpg",
  //   "onlyBurger.jpg",
  //   "Grilled-Chicken.jpg",
  // ];
  const imgObj = {
    "Grilled Chicken": "Grilled-Chicken.png",
    Burger: "onlyBurger.png",
    "Farmhouse Burger": "Burger-1.png",
    Burgerology: "Burger-2.png",
    "Mixed Salad": "Mixed-salad.png",
    "Beep Steak": "Beep-Steak.png",
    "Chicken Biryani": "chicken-biryani.png",
    "Beep Burger": "Beep-Burger.png",
  };
  const id = orderUl.querySelector("#spanId");
  const orderFood = orderUl.querySelector("#foodSpan");

  // const keys = Object.keys(imgObj);
  let isSrc = "";
  for (const key in imgObj) {
    if (key == orderFood.innerText) {
      isSrc = imgObj[key];
    }
  }

  const callWaiter = document.querySelector("#callWaiter");
  const serveOrder = document.createElement("div");
  serveOrder.className = `bg-success p-3 `;
  serveOrder.innerHTML = `
  
              <h5 class="p-2 text-white" id="callId">Order Id: <span>${id.innerText}</span> Ready to Serve</h5>
              <img
                src="./icons/${isSrc}"
                alt="${isSrc}"
                class="w-25 h-25 pb-2"
              />
           
  
  `;

  callWaiter.appendChild(serveOrder);
  customerTable( orderUl, isSrc, customerReview);
  const removeId = document.querySelector("#callId");
  // const removeId = document.querySelector("#orderId")
  let removeEl = removeId.parentNode;
  // console.log(removeEl);
  setTimeout(() => {
    removeEl.remove();
  }, 1500);
  
}

//Food Received in Customer Table Function

function customerTable(orderUl, isSrc, customerReview) {
  const customerName = orderUl.querySelector("#nameSpan").innerText 
  const id = orderUl.querySelector("#spanId").innerText 
  // console.log(customerName)
  // console.log(id)
  const table1 = document.querySelector("#table1");
  const table2 = document.querySelector("#table2");
  const table3 = document.querySelector("#table3");
  const table4 = document.querySelector("#table4");
  const isCustomer = document.createElement("p");
  isCustomer.id = "reservTable";
  isCustomer.innerHTML = `Table Reserved by <span id="sd${id}">${customerName}</span> - <span id="checkId${id}">${id}</span>`;
  

  const food1 = document.createElement("img");
  food1.className = "w-75 h-75";
  setTimeout(() => {
    

    food1.src = `./icons/${isSrc}`;
    table1.append(food1, isCustomer);



  let checkCustomer = isCustomer.querySelector(`#sd${id}`).innerText
  // console.log(checkCustomer)
  let checkId = isCustomer.querySelector(`#checkId${id}`).innerText

  // console.log(checkId)



    // console.log(checkCustomer == customerName )
    console.log(checkCustomer)
    console.log( customerName )
    console.log(id )
    console.log(checkId)
    // console.log(checkId == id )
    // console.log((checkCustomer == customerName ) && (checkId == id) )

  //  if ((checkCustomer == customerName ) && (checkId == id) ) {
  //     console.log(checkCustomer)
  //     console.log(customerName)
  //     console.log(".........................")
  //     console.log(parseInt(checkId ))
  //     console.log(parseInt(id))
  //     console.log(".........................")
  //     console.log(`${customerName}`)
  //     console.log(`${id}`)
  //   }else{
  //     console.log("fail")
  //   } 

    customerReview();




  }, 2000);
}

// Customer Review Function

function customerReview() {}

// Other Oftion
// const inputForm = document.querySelector("#inform");
// console.log(inputForm)

// inputForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   let = arr = inputData();
//   console.log(arr);
// });
// console.log(inputForm)
