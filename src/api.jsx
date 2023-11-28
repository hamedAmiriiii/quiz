import axios from 'axios'
import { getItemAsync } from 'expo-secure-store';
import { Platform } from 'react-native';

export const api = async ({
  method = 'get',
  url,
  data,



}) => {

  const auth = Platform.OS === 'web' ?
  localStorage.getItem('auth') :
    await getItemAsync('auth');
  
  const token = JSON.parse(auth).token
  
     return axios({
      method,
      url: 'https://quiz.iran.liara.run/' + url,
      data,
      headers: {'Authorization': token}
    });
}