import { connect } from "react-redux";
import Counter from "./Counter";
import { decrease, increase } from "../modules/counter";
import { Dispatch } from "redux";

interface Props {
  number: number;
  increase: () => void;
  decrease: () => void;
}

const CounterContainer = ({ number, increase, decrease }: Props) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

const mapStateToProps = (state: { counter: { number: number } }) => ({
  number: state.counter.number,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
