import { Ionicons } from "@expo/vector-icons";
import { Icon, Button as NButton } from "native-base";
import { useCallback } from "react";


const Button = ({
  title,
  scheme = "secondary",
  outline = false,
  size = "full",
  titleColor,
  LIcon,
  RIcon,
  ...rest
}) => {
  const setTitleColor = useCallback(() => {
    if (!titleColor) {
      if (outline) {
        return scheme;
      }

      return "text.light";
    }
    return titleColor;
  }, [titleColor]);

  return (
    <NButton
      w={size}
      _pressed={{ opacity: 0.8 }}
      background={outline ? "transparent" : scheme}
      borderColor={outline ? scheme : "transparent"}
      borderWidth={1}
      height="10"
      _loading={{ opacity: 0.4 }}
      // height="10"
      p={2}
      _text={{
        color: setTitleColor(),
        // fontFamily: "YekanBold",
        fontSize: "lg",
      }}
      leftIcon={
        LIcon ? <Icon as={Ionicons} name={LIcon} size="md" color={setTitleColor()} /> : undefined
      }
      rightIcon={
        RIcon ? <Icon as={Ionicons} name={RIcon} size="md" color={setTitleColor()} /> : undefined
      }
      {...rest}
    >
      {title}
    </NButton>
  );
};

export default Button;
