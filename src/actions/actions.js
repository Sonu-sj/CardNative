/*
 * action types
 */

const CARD_CLICKED = 'CARD_CLICKED';
const LEVEL_CHANGED='LEVEL_CHANGED';
const CARD_MATCHED = 'CARD_MATCHED';
const CARD_UNMATCHED = 'CARD_UNMATCHED';
const HIDE_CARDS ='HIDE_CARDS';

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