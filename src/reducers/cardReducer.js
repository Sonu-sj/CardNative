import Source from '../source.js';

var AllSource = Source;



const initialState = {
  Cards: [],
  shownCards: 0,
  currentCard: {},
  Level: 1,
  Points: 0
}

function generateCards(level, Source = AllSource) {
  console.log('generating cards')
  console.log(Source)
  var allCards = Source.results;
  //var shuffledCards = allCards.sort(() => .5 - Math.random());
  let selectedCards = allCards.slice(0, level * 2);
  selectedCards = [...selectedCards, ...selectedCards];
  selectedCards = selectedCards.map((card, index) => {
    return {
      id: card.email,
      src: card.picture.large,
      shown: false
    }
  })
  return selectedCards.sort(() => .5 - Math.random());
}



export default function cardReducer(state = initialState, action) {
  console.log('action', action);
  switch (action.type) {

    case 'CARDS_LOADED':
      return Object.assign({}, state, {
        Cards: generateCards(state.Level, action.results)
      })
    case 'UPDATE_LEVEL':
      let nextState = {
        Cards: generateCards(state.Level + 1,action.results),
        shownCards: 0,
        currentCard: {},
        Level: state.Level + 1,
        Points: state.Points + 5
      }
      return Object.assign({}, state, nextState)
    case 'CARD_CLICKED':
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
    case 'CARD_UNMATCHED':
      return Object.assign({}, state, { Cards: state.Cards.map((c, i) => { return Object.assign({}, c, { shown: false }) }) }, { shownCards: 0 })
    case 'CARD_MATCHED':
      console.log('card Matched');
      let filteredCards = state.Cards.filter((c, i) => {
        return action.id !== c.id
      });
      if (filteredCards.length > 0) {
        return Object.assign({}, state, {
          Cards: filteredCards,
          Points: state.Points + 5
        })
      } else {
        let nextState = {
          Cards: []
        }
        return Object.assign({}, state, nextState)
      }

    case 'HIDE_CARDS':
      return Object.assign({}, state, { shownCards: 0 })
    default:
      return state;
  }
}
