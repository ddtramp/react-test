const SHOW_ALL = 'SHOW_ALL'

const initialState = {
  visibilityFilter: SHOW_ALL,
  todos: []
};

function todoApp(state = initialState, action) {
    switch (action.type) {
        case SHOW_ALL:
          return Object.assign({}, state, {
            visibilityFilter: action.filter
          })
        default:
          return state
      }
}

export default todoApp