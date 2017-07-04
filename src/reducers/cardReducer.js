import Source from '../source.js';

var allCards = Source.results;

const initialState = {
  Cards: generateCards(2),
  shownCards: 0,
  currentCard: {},
  Level: 1
}

function generateCards(level) {
  var shuffledCards = allCards.sort(() => .5 - Math.random());
  let selectedCards = shuffledCards.slice(0, level * 2);
  selectedCards = [...selectedCards, ...selectedCards];
  selectedCards = selectedCards.map((card, index) => {
    return {
      id: card.email,
      src: card.picture.large,
      shown: false
    }
  })
  return selectedCards;
}


const secondState = {
  Cards: generateCards(2),
  Level: 2
}

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case 'CARD_CLICKED':
      console.log(action);
      return Object.assign({}, state, {
        Cards: state.Cards.map((c, i) => {
          if (i != action.index)
            return c
          return Object.assign({}, c, { shown: !c.shown })
        })
      }, {
        shownCards: ++state.shownCards,
          currentCard: state.Cards[action.index]
        })
    case 'LEVEL_CHANGED':
      return Object.assign({}, secondState)
    case 'CARD_UNMATCHED':
      console.log('unmatched reducer')
      return Object.assign({}, state, { Cards: state.Cards.map((c, i) => { return Object.assign({}, c, { shown: false }) }) },{shownCards:0})
    case 'CARD_MATCHED':
      return Object.assign({}, state, {
        Cards: state.Cards.filter((c, i) => {
          return action.id !== c.id
        })
      })
     case 'HIDE_CARDS':
     return Object.assign({}, state,{shownCards:0})
    default:
      return state;
  }
}
