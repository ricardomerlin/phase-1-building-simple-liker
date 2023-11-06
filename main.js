// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


const error = document.querySelector('div')
error.className = 'hidden'

const love = document.querySelectorAll('.like-glyph')

const like = addEventListener('click', function (e) {
  console.log('I am working')
  mimicServerCall()
  .catch(() => {
    error.classList.remove('hidden');
    const errorMessage = document.getElementById('modal-message')
    errorMessage.textContent = "Random server error. Try again."
    setTimeout(() => {
      error.className = 'hidden'
    }, 3000);
    console.log(error);
  })
  
})

love.forEach((heart) => {
  heart.addEventListener('click', function(e) {
  if (heart.textContent === EMPTY_HEART) {
    heart.textContent = FULL_HEART;
    heart.className = 'activated-heart';
  } else if (heart.textContent === FULL_HEART) {
    heart.textContent = EMPTY_HEART;
    heart.className = 'like-glyph';
  }});
})


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
