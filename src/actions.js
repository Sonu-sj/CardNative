/*
 * action types
 */

export const CARD_CLICKED = 'CARD_CLICKED'

/*
 * other constants
 */


/*
 * action creators
 */

export function cardClicked(index) {
  return { type: CARD_CLICKED,index }
}
