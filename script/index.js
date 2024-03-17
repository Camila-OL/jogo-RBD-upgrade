class Personagem {
  constructor(img, correct, options, biteSound, background) {
      this.img = img;
      this.correct = correct;
      this.options = options;
      this.biteSound = new Audio(biteSound);
      this.background = background;
  }
}

const personagens = [
  new Personagem('assets/images-gif/Rbd.gif', 'Nuestro amor', ['Este corazón', 'No pares', 'Nuestro amor', 'Me voy'], 'assets/audio/cut - Nuestro Amor Todos.mp3', 'nuestro-bg'),
  new Personagem('assets/images-gif/Mia.gif', 'Así soy yo', ['Así soy yo', 'Aún Hay Algo', 'Santa no soy', 'Ser o parecer'], 'assets/audio/cut - Así Soy Yo Mia.mp3', 'asi-bg'),
  new Personagem('assets/images-gif/Miguel.gif', 'A tu lado', ['Me voy', 'A tu lado', 'Tenerte y quererte', 'Inalcanzable'], 'assets/audio/cut - A Tu Lado Miguel .mp3', 'atu-bg'),
  new Personagem('assets/images-gif/Diego.gif', 'Cerquita de ti', ['Otro día que va', 'No pares', 'Futuro ex-novio', 'Cerquita de ti'], 'assets/audio/cut - Cerquita De Ti Diego .mp3', 'cer-bg'),
  new Personagem('assets/images-gif/Roberta.gif', 'Fuego', ['Fuego', 'Fuera', 'Solo para mí', 'Tras de mí'], 'assets/audio/cut - Fuego Roberta.mp3', 'fue-bg'),
  new Personagem('assets/images-gif/Lupita.gif', 'Bésame sin miedo', ['Una cancion', 'Bésame sin miedo', 'Bésame', 'Tras de mí'], 'assets/audio/cut - Bésame Sin Miedo Miguel lupi .mp3', 'bes-bg'),
  new Personagem('assets/images-gif/Giovanni.gif', 'Inalcanzable', ['Este corazón', 'Un poco de tu amor', 'Qué hay detrás', 'Inalcanzable'], 'assets/audio/cut - Inalcanzable Giovanni e Mia.mp3', 'ina-bg'),
  new Personagem('assets/images-gif/Lupita.gif', 'Cuando el amor se acaba', ['Cuando el amor se acaba', 'Uma menina apaixonada', 'Tus caricias', 'Tenerte y quererte'], 'assets/audio/cut - Cuando El Amor Se Acaba Lupi.mp3', 'cua-bg'),
  new Personagem('assets/images-gif/Diego.gif', 'Futuro ex-novio', ['Fuera', 'Adiós', 'Futuro ex-novio', 'Ser o parecer'], 'assets/audio/cut - Futuro Ex-Novio Diego .mp3', 'fut-bg'),
  new Personagem('assets/images-gif/Mia.gif', 'Tenerte y quererte', ['Tenerte y quererte', 'Me voy', 'No pares', 'Aún hay algo'], 'assets/audio/cut - Tenerte Y Quererte Mia Roberta .mp3', 'ten-bg'),
  new Personagem('assets/images-gif/Giovanni.gif', 'Solo quédate en silencio', ['Empezar desde cero', 'Solo quédate en silencio', 'Que fue del amor', 'Aún hay algo'], 'assets/audio/cut - solo quedate Giovanni.mp3', 'sol-bg'),
  new Personagem('assets/images-gif/Roberta.gif', 'Me voy', ['Fuera', 'Qué hay detrás', 'Me voy', 'A tu lado'], 'assets/audio/cut - Me Voy Roberta .mp3', 'mev-bg'),
  new Personagem('assets/images-gif/Lupita.gif', 'Ser o parecer', ['Santa no soy', 'Ser o parecer', 'Aún hay algo', 'Tras de mí'], 'assets/audio/cut - Ser O Parecer Mia Roberta lupi.mp3', 'ser-bg'),
  new Personagem('assets/images-gif/Giovanni.gif', 'Una cancion', ['No pares', 'Cerquita de ti', 'Adiós', 'Una cancion'], 'assets/audio/cut - Una Canción Giovanni .mp3', 'una-bg'),
  new Personagem('assets/images-gif/Roberta.gif', 'No pares', ['No pares', 'Qué hay detrás', 'Sálvame', 'Empezar desde cero'], 'assets/audio/cut - No Pares Roberta.mp3', 'nop-bg'),
  new Personagem('assets/images-gif/Mia.gif', 'Tras de Mí', ['fuera', 'Qué hay detrás', 'Adiós', 'Tras de Mí'], 'assets/audio/cut tras de mi .mp3', 'tra-bg'),
  new Personagem('assets/images-gif/Lupita.gif', 'Ensina‐me', ['Un poco de tu amor', 'Este corazón', 'Ensina‐me', 'Aún Hay Algo'], 'assets/audio/cut ensina-me .mp3', 'ens-bg'),
  new Personagem('assets/images-gif/Roberta.gif', 'Este Corazón', ['Este Corazón', 'Aún Hay Algo', 'Santa no soy', 'Ser o parecer'], 'assets/audio/cut - Este corazón Roberta Diego.mp3', 'est-bg'),
  new Personagem('assets/images-gif/Mia.gif', 'Rebelde', ['Empezar desde cero', 'Otro día que va', 'Rebelde', 'Rebeldes'], 'assets/audio/cut rebelde - Giovanni Mia .mp3', 'reb-bg'),
  new Personagem('assets/images-gif/Mia.gif', 'Un poco de tu amor', ['Un poco de tu amor', 'Otro día que va', 'Qué Fue Del Amor', 'Sálvame'], 'assets/audio/cut - Un Poco De Tu Amor mia.mp3', 'unp-bg'),
  new Personagem('assets/images-gif/Miguel.gif', 'Aún Hay Algo', ['Santa no soy', 'Otro día que va', 'Qué Fue Del Amor', 'Aún Hay Algo'], 'assets/audio/cut - Aún Hay Algo Miguel .mp3', 'aun-bg'),
  new Personagem('assets/images-gif/Lupita.gif', 'Qué Hay Detrás', ['Empezar desde cero', 'Qué Hay Detrás', 'Solo quédate en silencio', 'Que fue del amor'], 'assets/audio/cut - Qué Hay Detrás Mia Roberta lupi .mp3', 'que-bg'),
  new Personagem('assets/images-gif/Roberta.gif', 'Otro día que va', ['Otro día que va', 'Qué Fue Del Amor', 'Solo quédate en silencio', 'Adiós'], 'assets/audio/cut - Otro Día Que Va roberta.mp3', 'out-bg'),
  new Personagem('assets/images-gif/Mia.gif', 'Sálvame', ['Fuera', 'Santa no soy', 'Sálvame', 'Salva-me'], 'assets/audio/cut - Sálvame Mia .mp3', 'sal-bg'),
  new Personagem('assets/images-gif/Roberta.gif', 'Santa no soy', ['Santa no soy', 'Fuera', 'Empezar desde cero', 'Solo quédate en silencio'], 'assets/audio/cut - Santa No Soy Roberta .mp3', 'san-bg'),
  new Personagem('assets/images-gif/Lupita.gif', 'Empezar desde cero', ['Me voy', 'A tu lado', 'Tenerte y quererte', 'Empezar desde cero'], 'assets/audio/cut - Empezar Desde Cero lupi.mp3', 'emp-bg'),
  new Personagem('assets/images-gif/Roberta.gif', 'Fuera', ['Fuego', 'Fuera', 'Solo para mí', 'Tras de mí'], 'assets/audio/cut - Fuera lupi Roberta.mp3', 'fur-bg'),
  new Personagem('assets/images-gif/Miguel.gif', 'Qué Fue Del Amor', ['Santa no soy', 'Otro día que va', 'Qué Fue Del Amor', 'Aún Hay Algo'], 'assets/audio/cut - Qué Fue Del Amor Miguel .mp3', 'quf-bg'),

];

let currentPersonagemIndex = 0;
let health = 100;

function startButton() {
  document.querySelector('.start').style.display = 'none';
  let nome = document.querySelector('.nome').value;
  document.querySelector('.name').innerHTML = nome;
  document.querySelector('.nome').remove();
  document.getElementById('options').style.display = 'block';
  initGame();
}

function initGame() {
  showPersonagem();
}

function showPersonagem() {
  const currentPersonagem = personagens[currentPersonagemIndex];
  document.getElementById('gif').src = currentPersonagem.img;
  document.getElementById('gif').alt = currentPersonagem.correct;

  const biteSound = currentPersonagem.biteSound;
  biteSound.currentTime = 0;
  biteSound.loop = true
  biteSound.play();

  updateBackground(currentPersonagem.background);

  const options = currentPersonagem.options;
  const shuffledOptions = shuffleArray(options);

  const optionButtons = document.getElementsByClassName('option');
  for (let i = 0; i < optionButtons.length; i++) {
      optionButtons[i].textContent = shuffledOptions[i];
  }
  updateHealthBar();
}

function updateBackground(backgroundClass) {
  const backImage = document.getElementById('backImg');
  backImage.classList.remove('nuestro-bg', 'asi-bg', 'atu-bg', 'cer-bg', 'fue.bg',
  'bes-bg', 'ina-bg', 'cua-bg', 'fut-bg', 'ten-bg', 'sol-bg', 'mev-bg',
  'ser-bg', 'una-bg', 'nop-bg', 'tra-bg', 'ens-bg', 'est-bg', 'reb-bg','unp-bg',
  'aun-bg', 'que-bg', 'otr-bg', 'sal-bg', 'san-bg', 'emp-bg', 'fur-bg', 'quf-bg');
  backImage.classList.add(backgroundClass);
}

function updateHealthBar() {
  document.getElementById('healthBar').style.width = health + '%';
  if (health <= 0) {
      document.querySelector('.over').style.display = 'block'
      document.querySelector('.reiniciar').addEventListener('click', () => {
        location.reload()
      })
      
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
  const currentPersonagem = personagens[currentPersonagemIndex];
  const correctOption = currentPersonagem.correct;

  if (selectedOption === correctOption) {
      let text = document.querySelector('#myText1')
      text.classList.remove("correct")
      void text.offsetWidth
      text.classList.add("correct")
      currentPersonagemIndex++;
      if (currentPersonagemIndex < personagens.length) {
          currentPersonagem.biteSound.pause();
          currentPersonagem.biteSound.currentTime = 0;
          showPersonagem();
      } else {
        document.querySelector('.congrat').style.display = 'block'
        document.querySelector('.sair').addEventListener('click', () => {
          window.close()
        })
      }
  } else {
      let text = document.querySelector('#myText')
      text.classList.remove("error")
      void text.offsetWidth
      text.classList.add("error")
      
      health -= 25;
      updateHealthBar();
  }
}

function nextPersonagem() {
  currentPersonagemIndex++;
  if (currentPersonagemIndex < personagens.length) {
      showPersonagem();
      document.getElementById('nextButton').style.display = 'none';
  } else {
    document.querySelector('.congrat').style.display = 'block'
    document.querySelector('.sair').addEventListener('click', () => {
      window.close()
    })
  }
}


