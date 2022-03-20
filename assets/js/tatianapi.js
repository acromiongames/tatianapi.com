particlesJS.load('particles-js', 'https://acromiongames.github.io/tatianapi.com/assets/json/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

// Get the buttons that open the booking
var bookBtns = document.getElementsByClassName("booking-button");

// When the user clicks the button, open the modal 
for (let i = 0; i < bookBtns.length; i++) {
        bookBtns[i].onclick = function() {
            window.location.href = "https://tathamrmt.janeapp.com";
    }
}