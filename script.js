// Initial cart data
let Cart = {
  items: 0,
  total: 0,
};

// Update the cart display
function updateCartDisplay() {
  const cartDisplay = document.getElementById("cart");
  cartDisplay.textContent = `🛒 Cart: $${cart.total.toFixed(2)} (${
    cart.items
  } items)`;
}

// Simulate adding products to the cart
function addToCart(price) {
  cart.items += 1;
  cart.total += price;
  updateCartDisplay();
}

// Handle My Account link
document
  .getElementById("my-account")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const userAction = confirm(
      "Do you have an account? Click 'OK' to log in or 'Cancel' to sign up."
    );
    if (userAction) {
      window.location.href = "login.html";
    } else {
      window.location.href = "signup.html";
    }
  });

// Add event listener for the phone number
document
  .getElementById("phone-number")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const confirmCall = confirm("Do you want to make a call to this number?");
    if (confirmCall) {
      alert("Redirecting to your phone app...");
      // Uncomment the line below for real phone functionality
      // window.location.href = "tel:+254791400060";
    } else {
      alert("Call canceled.");
    }
  });

// Add event listener for the email address
document
  .getElementById("email-address")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const confirmEmail = confirm(
      "Do you want to send an email to this address?"
    );
    if (confirmEmail) {
      alert("Redirecting to your email app...");
      // Uncomment the line below for real email functionality
      // window.location.href = "mailto:jessicamuthoni002@gmail.com";
    } else {
      alert("Email canceled.");
    }
  });

// Dropdown menu toggle for navbar
document
  .querySelector(".dropdown > a")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    const dropdownMenu = this.nextElementSibling; // Get the dropdown menu
    dropdownMenu.style.display =
      dropdownMenu.style.display === "block" ? "none" : "block";
  });

// JavaScript to handle carousel functionality
const imagesContainer = document.querySelector(".carousel-images");
const images = document.querySelectorAll(".carousel-images img");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

let currentIndex = 0; // Tracks the current image index

// Function to update the carousel
function updateCarousel() {
  const width = images[0].clientWidth; // Get the width of one image
  imagesContainer.style.transform = `translateX(-${currentIndex * width}px)`;
}

// Add event listeners for buttons
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length; // Loop back to first image
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Loop to last image
  updateCarousel();
});

// Ensure carousel resizes properly on window resize
window.addEventListener("resize", updateCarousel);

// Automatic slide transition every 5 seconds
setInterval(() => {
  nextBtn.click(); // Simulate clicking the Next button
}, 5000); // Change slide every 5 seconds

// Function to increase quantity
function increaseQuantity(button) {
  const quantityElement = button.previousElementSibling;
  let quantity = parseInt(quantityElement.textContent);
  quantity++;
  quantityElement.textContent = quantity;
}

// Function to decrease quantity
function decreaseQuantity(button) {
  const quantityElement = button.nextElementSibling;
  let quantity = parseInt(quantityElement.textContent);
  if (quantity > 1) {
    quantity--;
    quantityElement.textContent = quantity;
  }
}

// Function to toggle heart icon color
function toggleHeart(icon) {
  icon.classList.toggle("active");
}

// Cart Data (for demonstration)
let cart = {
  items: [],
};

// Function to update cart display
function updateCart(productName, quantity) {
  const existingProduct = cart.items.find((item) => item.name === productName);

  if (existingProduct) {
    existingProduct.quantity = quantity;
    if (quantity === 0) {
      // Remove item if quantity is zero
      cart.items = cart.items.filter((item) => item.name !== productName);
    }
  } else if (quantity > 0) {
    cart.items.push({ name: productName, quantity });
  }

  console.log("Updated Cart:", cart);
}

// Add event listeners to dropdown controls
document.querySelectorAll(".product").forEach((product) => {
  const dropdown = product.querySelector(".product-dropdown");
  const quantityDisplay = dropdown.querySelector("span");
  const minusButton = dropdown.querySelector("button:first-of-type");
  const plusButton = dropdown.querySelector("button:last-of-type");
  const addToCartButton = dropdown.querySelector(".btn");
  const heart = dropdown.querySelector(".heart");

  let quantity = 1; // Default quantity

  // Increment quantity
  plusButton.addEventListener("click", () => {
    quantity++;
    quantityDisplay.textContent = quantity;
  });

  // Decrement quantity
  minusButton.addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      quantityDisplay.textContent = quantity;
    }
  });

  // Add to cart functionality
  addToCartButton.addEventListener("click", () => {
    const productName = product.querySelector("p").textContent;
    updateCart(productName, quantity);
    alert(`${quantity} x ${productName} added to cart!`);
  });

  // Heart functionality
  heart.addEventListener("click", () => {
    heart.classList.toggle("active");
    if (heart.classList.contains("active")) {
      alert("Added to favorites!");
    } else {
      alert("Removed from favorites.");
    }
  });
});
