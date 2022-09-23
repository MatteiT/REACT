import { ADD_ITEM, REMOVE_ITEM, NO_VALUE, CLOSE_MODAL } from './Actions';

export const reducer = (state, action) => {
  if (action.type === ADD_ITEM) {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'item added',
    };
  }
  if (action.type === NO_VALUE) {
    return {
      ...state,
      isModalOpen: true,
      modalContent: 'please enter a value',
    };
  }

  if (action.type === CLOSE_MODAL) {
    return { ...state, isModalOpen: false };
  }

  if (action.type === REMOVE_ITEM) {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: 'Item removed',
    };
  }

  throw new Error('no matching action type');
  //   return state
};
