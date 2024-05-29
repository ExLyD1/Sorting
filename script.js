const goodsHolder = document.querySelector('.goodsHolder');
const down = document.querySelector('.down');
const up = document.querySelector('.up');
const alph = document.querySelector('.alph')

down.addEventListener('click', () => {
  for (let i = 0; i < goodsHolder.children.length; i++) {
    for (let j = i; j < goodsHolder.children.length; j++) {
      if (+goodsHolder.children[i].getAttribute('data-price') > +goodsHolder.children[j].getAttribute('data-price')) {
        let replacedNode = goodsHolder.replaceChild(goodsHolder.children[j], goodsHolder.children[i]);
        insertAfter(replacedNode, goodsHolder.children[i]);
      }
    }
  }
});

up.addEventListener('click', () => {
  for (let i = 0; i < goodsHolder.children.length; i++) {
    for (let j = i; j < goodsHolder.children.length; j++) {
      if (+goodsHolder.children[i].getAttribute('data-price') < +goodsHolder.children[j].getAttribute('data-price')) {
        let replacedNode = goodsHolder.replaceChild(goodsHolder.children[j], goodsHolder.children[i]);
        insertAfter(replacedNode, goodsHolder.children[i]);
      }
    }
  }
});


function insertAfter(elem, refElem) {
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

alph.addEventListener('click', () => {
  const items = Array.from(goodsHolder.querySelectorAll('.item'));

  items.sort((a, b) => {
    const nameA = a.querySelector('p').textContent.toLowerCase();
    const nameB = b.querySelector('p').textContent.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
  goodsHolder.innerHTML = '';

  items.forEach(item => {
    goodsHolder.appendChild(item);
  });
});



const addCartButtons = document.querySelectorAll('.cartAdd');
const cartValue = document.querySelector('.cartValue')


cartValue.textContent = localStorage.length
addCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.item');
    const priceElement = item.querySelector('.price');
    const nameElement = item.querySelector('.name').textContent
    const priceValue = parseInt(priceElement.textContent.slice(0, -4));
    
    if (localStorage.getItem(`${nameElement}`)) {
      alert('Товар уже в корзине!')
      return
    }
    cartValue.textContent = localStorage.length+1


    let info = {
      name : nameElement,
      price : priceValue,
    }
    info = JSON.stringify(info)
    localStorage.setItem(`${nameElement}`, info)
  });
});




