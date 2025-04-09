const mainContent = document.getElementById('main-content');

function showCategories() {
  mainContent.innerHTML = "";
  menuData.categories.forEach(cat => {
    const div = document.createElement('div');
    div.className = 'category';
    div.textContent = cat.name;
    div.addEventListener('click', () => showItems(cat.id));
    mainContent.appendChild(div);
  });
}

function showItems(categoryId) {
  mainContent.innerHTML = "";
  menuData.items[categoryId].forEach(item => {
    const div = document.createElement('div');
    div.className = 'item';
    div.innerHTML = `
      <h2>${item.name}</h2>
      <img src="${item.img}" alt="${item.name}">
      <p>${item.price}円</p>
    `;
    div.addEventListener('click', () => alert(`${item.name}を注文しました`));
    mainContent.appendChild(div);
  });

  const backBtn = document.createElement('div');
  backBtn.className = 'category back-btn';
  backBtn.textContent = '← メニューに戻る';
  backBtn.addEventListener('click', showCategories);
  mainContent.appendChild(backBtn);
}

showCategories();
