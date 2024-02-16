const cards = document.querySelectorAll('.card');
let count = 1;
let totalPrice = 0;
for (const card of cards) {
  card.addEventListener('click', function () {

    const title = card.querySelector('h3').innerText;

    const price = card.querySelector('span').innerText.split(' ')[1];

    const itemsContainer = document.getElementById('title-container');

    const p = document.createElement('p');
    p.innerText = count + '.' + title + ':' + price;

    itemsContainer.appendChild(p);

    const totalPrice1 = document.getElementById('totalPrice');

    totalPrice = totalPrice + parseFloat(price);

    totalPrice1.innerText = totalPrice;

    const total = document.getElementById('total');
    total.innerText = totalPrice

    count++;

  })

}



const applyButton = document.getElementById('apply-btn');

applyButton.addEventListener('click', function () {

  const couponCode = document.getElementById('input-field');

  const couponText = couponCode.value.split(' ').join('').toUpperCase();

  document.getElementById('input-field').value = '';

  if (totalPrice > 200) {
    if (couponText === 'SELL200') {
      const total = document.getElementById('total');

      const discount = document.getElementById('discountPrice');

      const discountedPrice = totalPrice * 20 / 100;

      discount.innerText = discountedPrice;

      total.innerText = totalPrice - discountedPrice;
      document.getElementById('input-field').value = '';

    }
    else {
      alert('Please enter a valid coupon code.')
      document.getElementById('input-field').value = '';


    }
  }

  else {
    alert('To apply this code you have to buy more then $200.')
    document.getElementById('input-field').value = '';

  }

})


function purchesConfirm() {
  const totalPrice = document.getElementById('totalPrice');
  const amount = totalPrice.innerText;

  if (amount > 0) {
    my_modal_4.showModal();
  }
  else {
    alert('Please Select an Item.')
  }
}


function allClose() {
  document.getElementById('totalPrice').innerText = '';
  document.getElementById('total').innerText = '';
  document.getElementById('discountPrice').innerText = '';
  document.getElementById('title-container').innerText = '';
}
