import ColorBox from "../components/ColorBox";
import ColorSelect from "../components/ColorSelect";
import { ColorProvider } from "../contexts/ColorContext";

const ColorPage = () => {
  return (
    <ColorProvider>
      <ColorSelect />
      <ColorBox />
    </ColorProvider>
  );
};

export default ColorPage;
