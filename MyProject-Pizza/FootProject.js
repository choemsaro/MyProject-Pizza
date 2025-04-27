document.addEventListener("DOMContentLoaded", function () {
    const cardContainer = document.getElementById("card-container");
    const cardContainer2 = document.getElementById("card-container2");

    const menuItems = [
        { name: "Burger", description: "Delicious cheeseburger", image: "../image/pizza1.png" },
        { name: "Pizza", description: "Hot and fresh pizza", image: "../image/pizza1.png" },
        { name: "Pasta", description: "Creamy pasta with cheese", image: "../image/pizza1.png" },
        { name: "Salad", description: "Healthy green salad", image: "../image/pizza1.png" },
        { name: "Sandwich", description: "Fresh veggie sandwich", image: "../image/pizza1.png" }
    ];
    const MenuItem2 = [
        { name: "Burger", description: "Delicious cheeseburger", image: "/pizza1.png" },
        { name: "Pizza", description: "Hot and fresh pizza", image: "../image/pizza1.png" },
        { name: "Pasta", description: "Creamy pasta with cheese", image: "../image/pizza1.png" },
        { name: "Salad", description: "Healthy green salad", image: "../image/pizza1.png" },
        { name: "Sandwich", description: "Fresh veggie sandwich", image: "../image/pizza1.png" }

    ]
    function createCard(item) {
        const card = document.createElement("div");
        card.className = "card";
        // Image
        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.name;

        // Title
        const title = document.createElement("h3");
        title.textContent = item.name;
        // Description
        const description = document.createElement("p");
        description.textContent = item.description;

        const button = document.createElement("button");
        button.className = "buy-button";
        button.textContent = "Add to Cart";

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(button);
        return card;
    }
    menuItems.forEach(item => {
        const card = createCard(item);
        cardContainer.appendChild(card);

    });
    MenuItem2.forEach(item => {
        const card = createCard(item);
        cardContainer2.appendChild(card);
    })
});
// carocel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const indicators = document.querySelectorAll('.carousel-indicators button');

function updateCarousel() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
        indicators[index].classList.toggle('active', index === currentSlide);
    });
}
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
}
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
}

function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarousel();
}
setInterval(nextSlide, 5000);
// discount
function createDiscountCard(card, container) {
    if (!container) return;

    const cardElement = document.createElement('div');
    cardElement.className = 'discount-card';

    const image = document.createElement('img');
    image.className = 'discount-image';
    image.src = card.image;
    image.alt = card.name + ' Discount';

    const title = document.createElement('h2');
    title.className = 'discount-title';
    title.textContent = card.name + ' Discount!';

    const description = document.createElement('p');
    description.className = 'discount-description';
    description.textContent = card.description;

    const button = document.createElement('button');
    button.className = 'discount-button';
    button.textContent = 'Buy Now';
    button.onclick = () => alert('Discount applied!');

    cardElement.appendChild(image);
    cardElement.appendChild(title);
    cardElement.appendChild(description);
    cardElement.appendChild(button);

    container.appendChild(cardElement);
}
const arr = [

    { name: "Burger", description: "Delicious cheeseburger", image: "../image/coca.webp" },
    { name: "Pizza", description: "Hot and fresh pizza", image: "../image/pepci.jpg" },
    { name: "Pasta", description: "Creamy pasta with cheese", image: "../image/buger.png" },
    { name: "Salad", description: "Healthy green salad", image: "../image/buger.png" },
    { name: "Sandwich", description: "Fresh veggie sandwich", image: "../image/buger.png" }
];
const arr1 = [
    { name: "Burger", description: "Delicious cheeseburger", image: "../image/buger.png" },
    { name: "Pizza", description: "Hot and fresh pizza", image: "../image/buger.png" },
    { name: "Pasta", description: "Creamy pasta with cheese", image: "../image/buger.png" },
    { name: "Salad", description: "Healthy green salad", image: "../image/buger.png" },
    { name: "Sandwich", description: "Fresh veggie sandwich", image: "../image/buger.png" }
];

const cardContainerDis = document.getElementById('card-containerdis');
const cardContainerDis1 = document.getElementById('card-containerdis1');

if (cardContainerDis && cardContainerDis1) {
    for (let i = 0; i < arr.length; i++) {
        createDiscountCard(arr[i], cardContainerDis);
        createDiscountCard(arr1[i], cardContainerDis1);
    }
}
const services = [
    { icon: '🚴', title: 'Food Delivery', description: 'Choose your favorite food and we will deliver it to your doorstep.' },
    { icon: '📱', title: 'Online Shopping', description: "Let's do Shopping - A few clicks are all it takes." },
    { icon: '💳', title: 'Payment Services', description: 'The best payment gateway. "Simple – Fast – Safe"' },
    { icon: '👥', title: 'Local Services', description: 'Consumptions experience, lower price, less worry, and more savings.' },
    { icon: '✈️', title: 'Travel', description: 'One of the most convenient Online Hotel Reservation Platform in Cambodia. The Best Stay Starts Here!' },
];
const services1 = [
    { icon: '🎮', title: 'Entertainment', description: 'Game-related services for millions of gamers around Cambodia.' },
    { icon: '💼', title: 'Business Services', description: 'Helping businesses grow with professional tools and support.' },
    { icon: '🏥', title: 'Healthcare', description: 'Access to top-notch healthcare services anytime, anywhere.' },
    { icon: '📚', title: 'Education', description: 'Learn and grow with our extensive educational resources.' },
    { icon: '🏠', title: 'Real Estate', description: 'Find your dream home or invest in properties with ease.' }
];
const servicesSection = document.getElementById('services-section');
const servicesSection1 = document.getElementById('services-section1');

services.forEach(service => {
    const serviceDiv = document.createElement('div');
    serviceDiv.classList.add('service');

    serviceDiv.innerHTML = `
      <div class="icon">${service.icon}</div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
  `;
    servicesSection.appendChild(serviceDiv);

});
services1.forEach(service => {
    const serviceDiv = document.createElement('div');
    serviceDiv.classList.add('service');

    serviceDiv.innerHTML = `
      <div class="icon">${service.icon}</div>
      <h3>${service.title}</h3>
      <p>${service.description}</p>
  `;
    servicesSection1.appendChild(serviceDiv);
});

const aboutSection = document.getElementById("about1");

const about = [
    { icon: '👰‍♀', title: 'Vichka', description: 'Pizza is full of umami, which means “delicious” in Japanese. Just like the other types of taste, which are sweet, sour, salty, and bitter, umami is a rich and savory flavor that your taste buds taste and recognize. And now Pizza is becoming viral in Cambodia too , especially for children and youths. Due to the taste everyone live it.' },
    { icon: '👩‍🎓', title: 'Kanha', description: 'Both pizza shops and bakeries create delightful and satisfying culinary experiences, each offering a unique selection of foods. Pizza shops focus on savory dishes with an emphasis on pizza, while bakeries specialize in a variety of baked goods, from bread to pastries. Both establishments often provide a warm atmosphere, making them popular spots for casual dining and takeout' },
    { icon: '👩‍💻', title: 'Thyda', description: 'Aww, pizza has a way of getting us all stuck! 🍕 What kind of pizza are you enjoying (or dreaming about)? Whether its classic Margherita, loaded with toppings, or a simple slice of pepperoni, ther is something about that cheesy, saucy goodness that’s irresistible If you are in a pizza rut, maybe it is time to try a twist! Ever ' },
];
about.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("about-item");

    itemDiv.innerHTML = `
      <h2>${item.icon} ${item.title}</h2>
      <p>${item.description}</p>
    `;
    aboutSection.appendChild(itemDiv);
});

//  form login 
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === "" || password === "") {
        alert("Please fill in both fields.");
    } else {
        alert("Login successful!");
    }
}