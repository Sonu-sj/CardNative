/*
 * action types
 */

const CARD_CLICKED = 'CARD_CLICKED'
const LEVEL_CHANGED='LEVEL_CHANGED'

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