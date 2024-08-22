import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface createContextType {
  state: { color: string; subcolor: string };
  actions: {
    setColor: Dispatch<SetStateAction<string>>;
    setSubcolor: Dispatch<SetStateAction<string>>;
  };
}

const ColorContext = createContext<createContextType>({
  state: { color: "black", subcolor: "red" },
  actions: {
    setColor: () => {},
    setSubcolor: () => {},
  },
});

interface Props {
  children: ReactNode;
}

const ColorProvider = ({ children }: Props) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("red");

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

//const ColorConsumer = ColorContent.Consumer 와 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;
