const initialState = {
            Cards: [{},{},{},{}],
            Level:1
        }
 const secondState =  {
            Cards: [{},{},{},{},{},{},{},{}],
            Level:2
        }      

export default function courseReducer(state = initialState, action) {
  switch (action.type) {
    case 'CARD_CLICKED':
      return [
        ...state,
        Object.assign({},state.level + 1)
      ];
     case 'LEVEL_CHANGED':
      return Object.assign({},secondState)


    default:
      return state;
  }
}
