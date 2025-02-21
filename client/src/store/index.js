import { createStore } from 'redux';

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;