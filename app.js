const list = [];

document.getElementById('addItem').addEventListener('click', e => {
  e.preventDefault();

  const item = { name: document.getElementById('item').value, complete: false };

  if (!list.includes(item)) {
    const listItem = document.createElement('LI');
    listItem.classList.add('shoppingItem');

    const name = document.createElement('SPAN');
    name.classList.add('nm');
    name.innerHTML = item.name;
    listItem.appendChild(name);

    const del = document.createElement('SPAN');
    del.classList.add('del');
    del.innerHTML = 'X';

    listItem.appendChild(del);

    listItem.addEventListener('click', () => {
      item.complete = !item.complete;
      if (item.complete) {
        listItem.classList.add('completed');
      } else {
        listItem.classList.remove('completed');
      }
    });

    document.getElementById('list').appendChild(listItem);
    list.push(item);
  }

  document.getElementById('item').value = '';
  console.log('list:', list);
});
