let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    console.log('No number entered !');
    document.querySelector('.message').textContent = 'No Number Entered !';
  } else {
    if (score >= 1) {
      if (guess === number) {
        document.querySelector('.message').textContent =
          'you guessed it right!';
        if (score > highscore) {
          highscore = score;
          document.querySelector('.highscore').textContent = highscore;
        }
        document.querySelector('.number').textContent = number;
        document.querySelector('body').style.backgroundColor = '#60b347';
      } else if (number - guess == 1 || number - guess == -1) {
        document.querySelector('.message').textContent = 'you are so close !';
        score = score - 1;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent = 'you are a bit far!';
        score = score - 1;
        document.querySelector('.score').textContent = score;
      }
    } else {
      document.querySelector('.message').textContent = 'you lost the game !';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start Guessing!';
  document.querySelector('.score').textContent = score;
});
