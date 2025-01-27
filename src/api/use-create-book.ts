import client from "./client";
import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "react-query";

export interface CreateBookRequest{
    title: string;
    categoryId: number;
    author: string;
    quantity: number;
    isbn: string
}

export interface CreateBookResponse {
    status: boolean
    data: CreateBookRequest
}
  
  

export const useCreateBook = () => {
    return useMutation<AxiosResponse<CreateBookResponse>,AxiosError,CreateBookRequest>({
        mutationFn: (request: CreateBookRequest) =>{
            return client.post(`books`, {...request})
        } 
    })
}