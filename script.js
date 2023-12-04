const userImg = document.querySelector('.user img');
const botImg = document.querySelector('.bot img');
const result = document.querySelector('.result-text');
const options = document.querySelectorAll('.option');

options.forEach((img, index) => {
  img.addEventListener('click', (e) => {
    img.classList.add('active');

    userImg.src = botImg.src = `./img/rock.png`
    result.innerHTML = `Wait...`

    options.forEach((img2, index2) => {
      index !== index2 && img2.classList.remove('active');
    });

    document.querySelector('.container').classList.add('start');

    let time = setTimeout(() => {
      document.querySelector('.container').classList.remove('start');

      let src = e.target.querySelector('img').src;
      userImg.src = src;

      let random = Math.floor(Math.random() * 3);
      let botImgs = ['./img/rock.png', './img/paper.png', './img/scissors.png'];
      botImg.src = botImgs[random];

      let botValue = ['R', 'P', 'S'][random];
      let userValue = ['R', 'P', 'S'][index];

      let outcomes = {
        RR: 'Draw',
        RP: 'Bot',
        RS: 'You',
        PP: 'Draw',
        PS: 'Bot',
        PR: 'You',
        SS: 'Draw',
        SR: 'Bot',
        SP: 'You',
      };
      let outcomeValue = outcomes[userValue + botValue];

      result.innerHTML = userValue === botValue ? 'Match Draw' : `${outcomeValue} won!`;
    }, 2500);
  });
});
