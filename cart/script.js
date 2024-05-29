const cartItemsContainer = document.querySelector('.cartItemsContainer')


for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const info = JSON.parse(localStorage.getItem(key))
  const name = info.name
  const price = info.price

  const itemImport = `
    <div class="cartItem" data-key="${key}">
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



const cancel = document.querySelectorAll('.cancelHolder')

cancel.forEach(el => {
  el.addEventListener('click', () => {
    const containerItem = el.closest('.cartItem')
    const key = containerItem.getAttribute('data-key');

    const delItem = JSON.parse(localStorage.getItem(key))
    const delItemPrice = delItem.price

    total -= delItemPrice;
    totalPriceItem.textContent = `${total}$`;
    totalOrderItem.textContent = `${total}$`;
    
    localStorage.removeItem(key)
    containerItem.remove()

    
    

  })
});


