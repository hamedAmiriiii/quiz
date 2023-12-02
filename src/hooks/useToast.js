import { useTheme } from "native-base";
import { Platform } from "react-native";
import { Position, showMessage } from "react-native-flash-message";

const useToast = () => {
  const theme = useTheme();

  const showError = (title, position = "top") => {
    showMessage({
      message: title,
      position,
      style: {
        backgroundColor: theme.colors.danger[500],
        alignSelf: Platform.OS === "web" ? "center" : "auto",
        maxWidth: Platform.OS === "web" ? 600 : "auto",
        width: Platform.OS === "web" ? "100%" : "auto",
      },

      titleStyle: {
        fontFamily: "Yekan",
        color: theme.colors.white,
        fontSize: 16,
        marginTop: position === "top" ? 25 : 0,
      },
    });
    return;
  };

  const showNormalToast = (title, position = "top", type) => {
    showMessage({
      message: title,
      position,
      style: {
        backgroundColor: type === "error" ? "red" : "green",
        alignSelf: Platform.OS === "web" ? "center" : "auto",
        maxWidth: Platform.OS === "web" ? 600 : "auto",
        width: Platform.OS === "web" ? "100%" : "auto",
      },

      titleStyle: {
        fontFamily: "Yekan",
        color: "snow",
        fontSize: 16,
        marginTop: position === "top" ? 25 : 0,
      },
    });
    return;
  };

  const showSuccess = (title, position = "top") => {
    showMessage({
      message: title,
      position,
      style: {
        backgroundColor: 'green',
        alignSelf: Platform.OS === "web" ? "center" : "auto",
        maxWidth: Platform.OS === "web" ? 600 : "auto",
        width: Platform.OS === "web" ? "100%" : "auto",
      },
      titleStyle: {
        fontFamily: "Yekan",
        color: theme.colors.white,
        fontSize: 16,
        marginTop: position === "top" ? 25 : 0,
      },
    });
    return;
  };

  return { showError, showSuccess, showNormalToast };
};

export default useToast;
