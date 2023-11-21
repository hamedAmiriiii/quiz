import { extendTheme } from "native-base";
import pallete from "./pallete";

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
  fonts: {
    heading: "Yekan",
    body: "Yekan",
    mono: "Yekan",
  },
  colors: pallete,
});

export default theme;
