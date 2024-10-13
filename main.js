'use strict';

// ハンバーガーメニュー
{
  const open = document.querySelector('#open');
  const close = document.querySelector('#close');
  const spMenuList = document.querySelector('.sp-menu-list');

  open.addEventListener('click', () => {
    spMenuList.classList.add('drop-down');
    open.style.display = 'none';
    close.style.display = 'inline';
  });

  close.addEventListener('click', () => {
    spMenuList.classList.remove('drop-down');
    close.style.display = 'none';
    open.style.display = 'inline';
  });
}


// カード作成
{
    const cardContainer = document.querySelector('#card-container');

    const cardData = [
      { description: 'HTML / CSS / Bootstrap', img: 'img/web_first.png'},
      { description: 'HTML / CSS / JavaScript / jQuery', img: 'img/web_second.png'},
      { description: 'PHP / wordPress', img: 'img/web_third.png' }
    ];

    function createCard(card) {
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      cardElement.innerHTML = `
        <img src="${card.img}">
        <p>${card.description}</p>
      `;
      return cardElement;
    }   

    cardData.forEach(card => {
      const cardElement = createCard(card);
      cardContainer.appendChild(cardElement);
    });
}
