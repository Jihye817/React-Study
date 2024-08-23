import { useContext } from "react";
import ColorContext from "../contexts/ColorContext";

const ColorBox = () => {
  const { state } = useContext(ColorContext);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div>color</div>
      <div
        style={{
          width: "100px",
          height: "100px",
          background: state.color,
          margin: "10px",
        }}
      ></div>
      <div>sub color</div>
      <div
        style={{
          width: "100px",
          height: "100px",
          background: state.subcolor,
          margin: "10px",
        }}
      ></div>
    </div>
  );
};

export default ColorBox;
