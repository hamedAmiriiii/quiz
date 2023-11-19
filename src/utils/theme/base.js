import { extendTheme } from "native-base";
import pallete from "./pallete";

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "dark",
  },
  fonts: {
    heading: "iransans",
    body: "iransans",
    mono: "iransans",
  },
  colors: pallete,
});

export default theme;
