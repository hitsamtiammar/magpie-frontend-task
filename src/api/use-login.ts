import client from "./client";
import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "react-query";

export interface LoginRequest {
    email: string
    password: string
}

export interface LoginResponse {
    status: boolean
    token: string
  }
  
  

export const useLogin = () => {
    return useMutation<AxiosResponse<LoginResponse>,AxiosError,LoginRequest>({
        mutationFn: (loginRequst: LoginRequest) =>{
            return client.post('/login', loginRequst)
        } 
    })
}