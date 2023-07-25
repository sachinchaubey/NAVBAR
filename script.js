// JavaScript to handle click event and change background color
const navbarItems = document.querySelectorAll('.nav-item');

function handleClick(event) {
  // Remove 'active' class from all items
  navbarItems.forEach(item => item.classList.remove('active'));

  // Add 'active' class to the clicked item
  event.target.classList.add('active');
}

// Add click event listener to each navbar item
navbarItems.forEach(item => item.addEventListener('click', handleClick));