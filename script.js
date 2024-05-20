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