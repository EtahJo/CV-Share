import {gql} from "@apollo/client";

const REGISTER_USER = gql`
mutation Register($registerInput:registerInput){
    register(registerInput:$registerInput){
      id
      username 
      token 
      email 
      createdAt  
    }
}
`

export {REGISTER_USER}