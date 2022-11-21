document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
      {
        name: 'cupcake',
        img: 'cupcake.jpg'
      },
      {
        name: 'strawberrycake',
        img: 'strawberrycake.jpg'
      },
      {
        name: 'nougat',
        img: 'nougat.jpg'
      },
      {
        name: 'eclair',
        img: 'eclair.jpg'
      },
      {
        name: 'ice-cream',
        img: 'ice-cream.jpg'
      },
      {
        name: 'macarons',
        img: 'macarons.jpg'
      },
      {name: 'tart',
        img: 'tart.jpg'
      },
      {
        name: 'waffle-hearts',
        img: 'waffle-hearts.jpg'
      },
      {
        name: 'cupcake',
        img: 'cupcake.jpg'
      },
      {
        name: 'strawberrycake',
        img: 'strawberrycake.jpg'
      },
      {
        name: 'nougat',
        img: 'nougat.jpg'
      },
      {
        name: 'eclair',
        img: 'eclair.jpg'
      },
      {
        name: 'ice-cream',
        img: 'ice-cream.jpg'
      },
      {
        name: 'macarons',
        img: 'macarons.jpg'
      },
      {name: 'tart',
        img: 'tart.jpg'
      },
      {
        name: 'waffle-hearts',
        img: 'waffle-hearts.jpg'
      }
    ]
  // zufällige Anordnung der Karten 
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    //das Board createn
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'pandacake2.jpeg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //checken ob es paare gibt 
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'pandacake2.jpeg')
        cards[optionTwoId].setAttribute('src', 'pandacake2.jpeg')
        alert('Upps du hast auf das selbe Bild geklickt!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('Du hast ein Paar gefunden Yeey!!')
        cards[optionOneId].setAttribute('src', 'white.png')
        cards[optionTwoId].setAttribute('src', 'white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'pandacake2.jpeg')
        cards[optionTwoId].setAttribute('src', 'pandacake2.jpeg')
        alert('Ohhh versuchs weiter')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Gratulation! Du bist ein Memory Meister !!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })