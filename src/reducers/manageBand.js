import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      const band = {
        id: uuid(),
        name: action.name
      }
      return { bands: state.bands.concat(band)}

    case 'DELETE_BAND':
      // console.log('action.payload: ',action.payload)
      // return {bands: state.bands.filter(band => band.id !== action.payload )}
      const bands = state.bands.filter(band => band.id !== action.id);
      return { bands };

    default:
      return state;
  }
};

// const todo = {
//   id: uuid(),
//   text: action.payload.text
// }
// return { todos: state.todos.concat(todo) };