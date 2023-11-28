import { ScrollView, VStack } from "native-base";


export const Column= ({
  children,
  scrollable = false,
  ...rest
}) => {
  return scrollable ? (
    <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
      <VStack {...rest}>{children}</VStack>
    </ScrollView>
  ) : (
    <VStack {...rest}>{children}</VStack>
  );
};

export const ColumnCentered = ({ children, ...rest }) => {
  return (
    <VStack alignItems="center" justifyContent="center" {...rest}>
      {children}
    </VStack>
  );
};

export const ColumnBetween = ({ children, ...rest }) => {
  return (
    <VStack alignItems="center" justifyContent="space-between" {...rest}>
      {children}
    </VStack>
  );
};

export const ColumnAround = ({ children, ...rest }) => {
  return (
    <VStack alignItems="space-around" justifyContent="center" {...rest}>
      {children}
    </VStack>
  );
};
