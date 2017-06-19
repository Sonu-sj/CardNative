export default function courseReducer(state = [], action) {
  switch (action.type) {
    case 'card_Clicked':
      return [
        ...state,
        Object.assign({},state.level + 1)
      ];

    default:
      return state;
  }
}
