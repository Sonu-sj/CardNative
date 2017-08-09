/*
 * action types
 */

const CARD_CLICKED = 'CARD_CLICKED';
const LEVEL_CHANGED='LEVEL_CHANGED';
const CARD_MATCHED = 'CARD_MATCHED';
const CARD_UNMATCHED = 'CARD_UNMATCHED';
const HIDE_CARDS ='HIDE_CARDS';
const CARDS_LOADED='CARDS_LOADED';
const UPDATE_LEVEL='UPDATE_LEVEL';

/*
 * other constants
 */


/*
 * action creators
 */

export function cardClicked(index) {
  return { type: CARD_CLICKED,index }
}

export function levelChanged(){
  return {type:LEVEL_CHANGED}
}

export function cardMatched(id){
  return {type:CARD_MATCHED,id}
}

export function cardUnMatched(id){
  return {type:CARD_UNMATCHED,id}
}

export function hideCards(){
  return {type:HIDE_CARDS}
}

export function loadCards(clevel){
const url = 'https://randomuser.me/api/?results=10';
console.log('fetching')
return((dispatch)=>{
fetch(url)
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
    console.log('got data')
    if(clevel==0){
    dispatch(cardsLoaded(data))
    }else{
    dispatch(updateLevel(data))
    }
    // Create and append the li's to the ul
    })
})


}

export function cardsLoaded(results){
return {type:CARDS_LOADED,results}
}

export function updateLevel(results){
return {type:UPDATE_LEVEL,results}
}