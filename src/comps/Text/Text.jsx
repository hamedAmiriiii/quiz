import { ITextProps, Text } from "native-base";
import React, { PropsWithChildren } from "react";



export const TextTitle = ({
  children,
  trunc = false,
  truncLength = 20,
  secondary = false,
  ...rest
}) => {
  return (
    <Text
      fontSize="lg"
      color={secondary ? "text.secondary" : "text.main"}
      fontFamily="YekanBold"
      {...rest}
    >
      {trunc ? children?.toString().slice(0, truncLength) + " ..." : children}
    </Text>
  );
};

export const TextMuted = ({ children, ...rest }) => {
  return (
    <Text lineHeight="lg" color="text.muted" {...rest}>
      {children}
    </Text>
  );
};

export const TextTiny = ({ children, ...rest }) => {
  return (
    <Text lineHeight="lg" color="text.main" fontSize="sm" {...rest}>
      {children}
    </Text>
  );
};

export const TextNormal = ({ children, ...rest }) => {
  return (
    <Text lineHeight="lg" color="text.main" fontSize="md" {...rest}>
      {children}
    </Text>
  );
};
