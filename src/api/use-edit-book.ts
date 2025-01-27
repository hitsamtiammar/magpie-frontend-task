import client from "./client";
import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "react-query";

export interface Book{
    title: string;
    categoryId: number;
    author: string;
    quantity: number;
    isbn: string
}

export interface EditBookRequest extends Book {
    id: number
}

export interface EditBookResponse {
    status: boolean
    data: EditBookRequest
}
  
  

export const useEditBook = () => {
    return useMutation<AxiosResponse<EditBookResponse>,AxiosError,EditBookRequest>({
        mutationFn: ({id, ...rest}: EditBookRequest) =>{
            return client.put(`books/${id}`, {...rest})
        } 
    })
}