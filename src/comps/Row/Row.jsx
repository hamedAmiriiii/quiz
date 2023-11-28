import { HStack } from "native-base";



export const Row = ({ children, ...rest }) => {
  return (
    <HStack alignItems="center" {...rest}>
      {children}
    </HStack>
  );
};

export const RowCentered = ({ children, ...rest }) => {
  return (
    <HStack alignItems="center" justifyContent="center" {...rest}>
      {children}
    </HStack>
  );
};

export const RowBetween = ({ children, ...rest }) => {
  return (
    <HStack alignItems="center" justifyContent="space-between" {...rest}>
      {children}
    </HStack>
  );
};

export const RowAround = ({ children, ...rest }) => {
  return (
    <HStack alignItems="center" justifyContent="space-around" {...rest}>
      {children}
    </HStack>
  );
};
