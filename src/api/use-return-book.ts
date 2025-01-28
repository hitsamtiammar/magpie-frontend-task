import client from "./client";
import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "react-query";


export interface ReturnBookRequest {
    id: number
}

export interface ReturnBookResponse {
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
  
  

export const useReturnBook = () => {
    return useMutation<AxiosResponse<ReturnBookResponse>,AxiosError<{ status: boolean; message: string }>,ReturnBookRequest>({
        mutationFn: ({id }: ReturnBookRequest) =>{
            return client.put(`lending/return-book/${id}`)
        } 
    })
}