// Get the modal
const modal = document.querySelector('.js-modal');

// Get the close button
const closeButton = document.querySelector('#closemodal');

const modalContent = document.querySelector('.modal');

console.log(modalContent);

// When the user clicks on the link modal, open the modal smoothly
modal.addEventListener('click', () => {
    modalContent.classList.add('open');
    console.log('click');
});

// When the user clicks on the close button, close the modal smoothly
closeButton.addEventListener('click', () => {
    modalContent.classList.remove('open');
});



