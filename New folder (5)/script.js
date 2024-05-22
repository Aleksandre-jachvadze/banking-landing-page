const toggleBtn = document.querySelector('.dropdown-toggle');
const navigation = document.querySelector('header .navigation');

toggleBtn.addEventListener('click', () => {
    navigation.classList.toggle('active');
});

document.querySelector('.height').textContent = window.innerWidth;
