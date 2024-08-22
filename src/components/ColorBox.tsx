import { ColorConsumer } from "../contexts/ColorContext";

const ColorBox = () => {
  return (
    <ColorConsumer>
      {(value) => (
        <>
          <div
            style={{
              width: "100px",
              height: "100px",
              background: value.state.color,
            }}
          ></div>
          <div
            style={{
              width: "100px",
              height: "100px",
              background: value.state.subcolor,
            }}
          ></div>
        </>
      )}
    </ColorConsumer>
  );
};

export default ColorBox;
