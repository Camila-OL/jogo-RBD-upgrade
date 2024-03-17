class Fruit {
    constructor(img, image, correct, options, biteSound) {
      this.img = img
      this.image = image;
      this.correct = correct;
      this.options = options;
      this.biteSound = new Audio(biteSound);
    }
  }
  
  const fruits = [
    new Fruit('https://naturaldaterra.com.br/media/catalog/product/1/0/100171-maca-red-unidade.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover', 'https://naturaldaterra.com.br/media/catalog/product/1/0/100171-maca-red-unidade.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover', 'Apple', ['Banana', 'Apple', 'Orange', 'Grape'], 'apple-bite-chew-eat-32412.mp3'),
    new Fruit('https://www.infoescola.com/wp-content/uploads/2010/04/banana_600797891.jpg', 'https://www.infoescola.com/wp-content/uploads/2010/04/banana_600797891.jpg', 'Banana', ['Orange', 'Banana', 'Grape', 'Apple'], 'massacred-banana-01-73772.mp3'),
    new Fruit('https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/Laranja_lima_600x600[1]-1000x1000.jpg', 'https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/Laranja_lima_600x600[1]-1000x1000.jpg', 'Orange', ['Apple', 'Grape', 'Orange', 'Banana'], '080142_orange-hard-squeezewav-80247.mp3')
  ];
  
  let currentFruitIndex = 0;
  let health = 100;
  
  function initGame() {
    showFruit();
  }
  
  function showFruit() {
    const currentFruit = fruits[currentFruitIndex];
    document.getElementById('imgFruit').src = currentFruit.img
    document.getElementById('imgFruit').alt = currentFruit.correct
    document.getElementById('fruitImg').classList.remove('apple-bg', 'banana-bg', 'orange-bg');
    
    switch (currentFruit.correct) {
      case 'Apple':
        document.getElementById('fruitImg').classList.add('apple-bg');
        break;
      case 'Banana':
        document.getElementById('fruitImg').classList.add('banana-bg');
        break;
      case 'Orange':
        document.getElementById('fruitImg').classList.add('orange-bg');
        break;
      default:
        break;
    }
  
    const biteSound = currentFruit.biteSound;
    biteSound.currentTime = 0;
    biteSound.play();
  
    const options = currentFruit.options;
    const shuffledOptions = shuffleArray(options);
  
    const optionButtons = document.getElementsByClassName('option');
    for (let i = 0; i < optionButtons.length; i++) {
      optionButtons[i].textContent = shuffledOptions[i];
    }
    updateHealthBar()
  }

  function updateHealthBar() {
    document.getElementById('healthBar').style.width = health + '%';
    if (health <= 0) {
      alert('Game Over! You ran out of health.');
      resetGame();
    }
  }
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  function checkAnswer(selectedButton) {
    const selectedOption = selectedButton.textContent;
    const currentFruit = fruits[currentFruitIndex];
    const correctOption = currentFruit.correct;
  
    if (selectedOption === correctOption) {
      alert('Correct!');
      currentFruitIndex++;
      if (currentFruitIndex < fruits.length) {
        currentFruit.biteSound.pause();
        currentFruit.biteSound.currentTime = 0;
        showFruit();
      } else {
        alert('Congratulations! You have guessed all fruits correctly!');
      }
    } else {
        alert('Incorrect! Try Again.');
        health -= 25;
        updateHealthBar();
    }
  }
  
  function nextFruit() {
    currentFruitIndex++;
    if (currentFruitIndex < fruits.length) {
      showFruit();
      document.getElementById('nextButton').style.display = 'none';
    } else {
      alert('Congratulations! You have guessed all fruits correctly!');
    }
  }
  
  function resetGame() {
    currentFruitIndex = 0;
    health = 100;
  }

  initGame();
  