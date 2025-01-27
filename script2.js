document.addEventListener('DOMContentLoaded', () => {

    const eventForm = document.getElementById('eventForm');
    const eventList = document.getElementById('eventList');
    
    eventForm.addEventListener('submit', (e) => {
      e.preventDefault(); 
      
      const title = document.getElementById('formTitle').value;
      const dateStart = document.getElementById('formDateAndTimeStart').value;
      const dateEnd = document.getElementById('formDateAndTimeEnd').value;
      const location = document.getElementById('formLocation').value;
      const description = document.getElementById('formDescription').value;
      
      addEventToList(title, dateStart,dateEnd, location, description);
      saveEventToLocalStorage(title, dateStart,dateEnd, location, description);
      
      eventForm.reset(); 
    });
    
    function addEventToList(title, dateStart,dateEnd, location, description) {
      const eventItem = document.createElement('li');
      eventItem.innerHTML = `
      <div class="event-card">
      <article class="event-card-header"><h3>${title}</h3> <aside class="event-card-date"><p>${dateStart} - ${dateEnd}</p></article>
      <article class="event-card-location">
        <h4>Location</h4>
        <p>${location}</p>
      </article>
      <hr>
      <article class="event-card-description">
      <h4>Description</h4>
      <p>${description}</p>
      </article>
      <hr>
      <aside class="event-card-buttons">
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
      </aside>
      </div>
      `;
      eventList.appendChild(eventItem);
    }
const shopItemsData = [
    {
        id: "A",
        name: "A4 Portrait Poster",
        price: 10,
        desc: "Your Poster for your event",
        img: "Assets/Images/637b648ed2b343f8e79573b2_UYR GROUP LOGO - GOLD OUTLINE-p-500.png"
    },
    {
        id: "B",
        name: "A3 Portrait Poster",
        price: 15,
        desc: "lorem ipsum dolor sit amet",
        img: "Assets/Images/637b648ed2b343f8e79573b2_UYR GROUP LOGO - GOLD OUTLINE-p-500.png"
    },
    {
        id: "C",
        name: "A2 Portrait Poster",
        price: 20,
        desc: "lorem ipsum dolor sit amet",
        img: "Assets/Images/637b648ed2b343f8e79573b2_UYR GROUP LOGO - GOLD OUTLINE-p-500.png"
    },
    {
        id: "D",
        name: "A0 Portrait Poster",
        price: 25,
        desc: "lorem ipsum dolor sit amet",
        img: "Assets/Images/637b648ed2b343f8e79573b2_UYR GROUP LOGO - GOLD OUTLINE-p-500.png"
    },
    {
        id:"E",
        name:"A0 Landscape Poster",
        price:25,
        desc:"lorem ipsum dolor sit amet",
        img:"Assets/Images/637b648ed2b343f8e79573b2_UYR GROUP LOGO - GOLD OUTLINE-p-500.png"
    },
    {
        id: "F",
        name: "A4 Portrait Poster",
        price: 10,
        desc: "lorem ipsum dolor sit amet",
        img: "Assets/Images/637b648ed2b343f8e79573b2_UYR GROUP LOGO - GOLD OUTLINE-p-500.png"
    },
    {
        id: 7,
        name: "A3 Portrait Poster",
        price: 15,
        desc: "lorem ipsum dolor sit amet",
        img: "Assets/Images/637b648ed2b343f8e79573b2_UYR GROUP LOGO - GOLD OUTLINE-p-500.png"
    },
    {
        id: 8,
        name: "A2 Portrait Poster",
        price: 20,
        desc: "lorem ipsum dolor sit amet",
        img: "Assets/Images/637b648ed2b343f8e79573b2_UYR GROUP LOGO - GOLD OUTLINE-p-500.png"
    },
    {
        id: 9,
        name: "A0 Portrait Poster",
        price: 25,
        desc: "lorem ipsum dolor sit amet",
        img: "Assets/Images/637b648ed2b343f8e79573b2_UYR GROUP LOGO - GOLD OUTLINE-p-500.png"
    },
    {
        id:10,
        name:"A0 Landscape Poster",
        price:25,
        desc:"lorem ipsum dolor sit amet",
        img:"Assets/Images/637b648ed2b343f8e79573b2_UYR GROUP LOGO - GOLD OUTLINE-p-500.png"
    }
];

let generateShop = () => {
    shop.innerHTML = shopItemsData.map((x) => {
        let { id, name, price, desc, img } = x;
        return `
            <article id="product-id-${id}" class="item">
                <img height="200px" width="200px" src="${img}" alt="">
                <div class="details">
                    <h3>${name}</h3>
                    <p>${desc}</p>
                    <div class="price-quantity">
                        <h2>£ ${price}</h2>
                        <div class="buttons">
                            <i class="bi bi-dash-lg" onclick="decrement(${id})"></i>
                            <div id="${id} class="quantity">0</div>
                            <i class="bi bi-plus-lg" onclick="increment(${id})"></i>
                        </div>
                    </div>
                </div>
            </article>
        `;
    }).join("");
};

generateShop();
})

let increment = (id) => {
let selectedItem = id
console.log(selectedItem.id)
}

let decrement= (id) => {
let selectedItem= id;
console.log(selectedItem.id)
}