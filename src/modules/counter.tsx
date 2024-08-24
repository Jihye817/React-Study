const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

type Actiontype = {
  type: string;
};

const initialState = {
  number: 0,
};

function counter(state = initialState, action: Actiontype) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
