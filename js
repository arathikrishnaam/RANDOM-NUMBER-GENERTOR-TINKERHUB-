document.getElementById('generate-btn').addEventListener('click', function() {
    var randomNumber = Math.floor(Math.random() * 1000) + 1;
    var randomNumberElement = document.getElementById('random-number');
    randomNumberElement.textContent = 'Random Number: ' + randomNumber;
    randomNumberElement.classList.remove('hidden');
  });
  
