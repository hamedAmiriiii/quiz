import { Box, Center, useToast } from 'native-base';
import React from 'react'

const tostenew = (props)=>  {
    const toast = useToast();
    const Example = () => {
        return <Center>
            {toast.show({
                placement: "top",
                size:"lg",
            render: () => {
                return <Box bg="emerald.500" px="4"  fontSize="md" py="4"  rounded="md" mb={8}>
                        ثبت نام با موفقیت انجام شد
                      </Box>;
              }
          })}
              
            
          </Center>;
    };
   
}
export default tostenew;

rfc