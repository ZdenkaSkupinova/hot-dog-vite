export const toppings = [
    { name: 'Hořčice', price: 5, selected: false },
    { name: 'Kečup', price: 5, selected: false },
    { name: 'Cibule', price: 5, selected: false },
    { name: 'Okurka', price: 5, selected: false },
    { name: 'Paprika', price: 5, selected: false },
    { name: 'Rajče', price: 5, selected: false },
    { name: 'Chilli', price: 5, selected: false },
    { name: 'Sýr', price: 10, selected: false },
    { name: 'Slanina', price: 10, selected: false },
  ];

  export const toggleTopping = (index) => {
    toppings[index].selected = !toppings[index].selected
  }
  

  export const renderToppings = () => {
    const toppingsElement = document.querySelector('#toppings');
    toppingsElement.innerHTML = '';
    toppings.forEach((topping) => {
      toppingsElement.innerHTML += `
        <div class="topping ${topping.selected ? 'topping--selected' : ''}">
          <h3>${topping.name}</h3>
          <p>${topping.price}</p>
        </div>
      `;
     topping = document.querySelectorAll('.topping');
      topping.forEach((topping, index) => {
        topping.addEventListener('click', () => {
          toggleTopping(index); 
          renderToppings(); 
        });
      });
    });
  };

