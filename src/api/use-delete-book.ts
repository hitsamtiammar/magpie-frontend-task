import client from "./client";
import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "react-query";


export interface DeleteBookRequest {
    id: number
}

export interface DeleteBookResponse {
    status: boolean
    data: Data
  }
  
  export interface Data {
    id: number
    title: string
    author: string
    quantity: number
    categoryId: number
    isbn: string
    bookStatus: BookStatus
  }
  
  export interface BookStatus {
    id: number
    bookId: number
    borrowedQuantity: number
  }
  
  

export const useDeleteBook = () => {
    return useMutation<AxiosResponse<DeleteBookResponse>,AxiosError<{ status: boolean; message: string }>,DeleteBookRequest>({
        mutationFn: ({id }: DeleteBookRequest) =>{
            return client.delete(`books/${id}`)
        } 
    })
}