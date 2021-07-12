import axios from 'axios';

//baseURL needs to be updated every two hours because of ngrok
export default axios.create({ 
    baseURL: 'http://3310c36cfee9.ngrok.io'
})