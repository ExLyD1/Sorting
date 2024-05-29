const cartItemsContainer = document.querySelector('.cartItemsContainer')


for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const info = JSON.parse(localStorage.getItem(key))
  const name = info.name
  const price = info.price

  const itemImport = `
    <div class="cartItem">
      <div class="width">
        <div class="itemInfoHolder">
          <div class="itemImg">
            <img src="../images/monitor.jpg" alt="">
          </div>
          <div class="itemInfo">
            <div class="cartName">${name}</div>
            <div class="cartPrice">${price}$</div>
          </div>
        </div>
        <div class="cancelHolder">
          <img src="images/cancel.png" alt="">
        </div>
      </div>
    </div>
  `
  cartItemsContainer.insertAdjacentHTML('beforeend', itemImport)
  console.log(name, price);
}



const totalPriceItem = document.querySelector('.totalPrice')
const totalOrderItem = document.querySelector('.totalOrder')
let total = 0;

const cartPrices = document.querySelectorAll('.cartPrice');
cartPrices.forEach(elPrice => {
  const price = parseFloat(elPrice.textContent.replace('$', ''));
  total += price;
});

totalPriceItem.textContent = `${total}$`;
totalOrderItem.textContent = `${total}$`;



const cancel = document.querySelectorAll('.cancelHolder img')

cancel.forEach(el => {
  el.addEventListener('click', () => {
    const cartItem = el.closest('.cartItem');
    const key = cartItem.getAttribute('data-key');

    // Удаляем элемент из localStorage
    localStorage.removeItem(key);

    // Удаляем элемент из DOM
    cartItem.remove();

    // Обновляем общую цену
    total = 0;
    const updatedCartPrices = document.querySelectorAll('.cartPrice');
    updatedCartPrices.forEach(elPrice => {
      const price = parseFloat(elPrice.textContent.replace('$', ''));
      total += price;
    });

    totalPriceItem.textContent = `${total}$`;
    totalOrderItem.textContent = `${total}$`;
  });
});






// cancel.forEach(el => {
//   el.addEventListener('click', () => {
//     const containerItem = el.closest('.cartItem')
//     const name = containerItem.querySelector('.cartName').textContent
    
//     localStorage.removeItem(`${name}`)
//     containerItem.remove()
//   })
// });