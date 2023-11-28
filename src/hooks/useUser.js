import React, { useContext } from 'react'
import { authContext } from '../navigation/AppNavigator';

const useUser = () => {
    const { auth } = useContext(authContext);
    
    return auth.user
}

export default useUser