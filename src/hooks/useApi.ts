import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API
})

export const useApi = () => ({

    validityToken: async (token: string) =>
    {
       return{
        user: {id:9, name: 'jose', email:'jose@gmail.com'}
       };

      const response = await api.post('/validade',{token})    
      return response.data
    },
    signin:async (email:string, password:string) => {

        return {
            user: {id:9, name: 'jose', email:'jose@gmail.com'},
            token: '123233'
        }

        const response = await api.post('/signin',{email,password})
        return response.data
        
    },
    logout:async () => {
        return{status : true}
        const response = await api.post('/logout')
        return response.data
    }
})



