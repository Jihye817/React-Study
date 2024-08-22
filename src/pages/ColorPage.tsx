import ColorBox from "../components/ColorBox";
import { ColorProvider } from "../contexts/ColorContext";

const ColorPage = () => {
  return (
    <ColorProvider>
      <ColorBox />
    </ColorProvider>
  );
};

export default ColorPage;
