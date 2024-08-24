import { Button } from "@mui/material";

interface Props {
  number: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const Counter = ({ number, onIncrease, onDecrease }: Props) => {
  return (
    <>
      <div>
        <h1>{number}</h1>
        <Button variant="contained" onClick={onIncrease}>
          +1
        </Button>
        <Button variant="contained" onClick={onDecrease}>
          -1
        </Button>
      </div>
    </>
  );
};

export default Counter;
