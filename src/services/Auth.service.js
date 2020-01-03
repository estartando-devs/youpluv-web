import Axios from "axios";
import * as Google from 'react-facebook-login';

export const login = body => {
  return Axios.post("https://youpluv.herokuapp.com/login/", body)
    .then(res => {
      console.log("Logado com sucesso!")
      return res.data;
    })
    .catch(error => {
      let message = "Ocorreu um erro inesperado";
      switch (error.response.status) {
        case 401:
         message = "Usuário ou senha incorreto";
         return message
        default:
          console.log(message)
          return message
      }
    });
};

const config = {
  androidClientId: `717368453351-467lcq0q5lfu3jmf9t2ko7d6mpt0nn2a.apps.googleusercontent.com`
};

const signInGoogleAsync = async (response) => {
  try {
    console.log('google',response)
  } catch ({ message }) {
    console.log("login: Error:" + message);
    return;
  }
};

const signFacebook = async (response) =>{
  try {
    console.log(response)
      let userInfoResponse = {...response}     
      return userInfoResponse
  } catch ({ message }) {
    console.log(`Facebook Login Error: ${message}`);
  }
}

export const socialLogin = async (method) => {
  
  const socialUser = (method === 'facebook' ? 
    await signFacebook() : 
    await signInGoogleAsync()
  )
  
//   const formatedUser = {
//     username: socialUser.name,
//     email: socialUser.email,
//     password: socialUser.id,
//     picture: socialUser.picture
//   };
  
//   return Axios.post("https://youpluv.herokuapp.com/social-login/", formatedUser)
//     .then(res => {
//       console.log("Logado com sucesso!")
//       return res.data;
//     })
//     .catch(error => {
//       let message = "Ocorreu um erro inesperado";
//       switch (error.response.status) {
//         case 401:
//           message = "Usuário ou senha incorreto";
//           return message;
//         case 500:
//           message = "Internal Server Error"
//           return message;
//         default:
//           console.log(message)
//           return message
//       } 
//     });
};

export const register = body => {
  return Axios.post("https://youpluv.herokuapp.com/register/", body)
    .then(res => {
      console.log("Cadastro realizado com sucesso!");
      return res.data;
    })
    .catch(error =>
      console.log("Ocorreu um erro inesperado")
    );
};