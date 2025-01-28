import { AxiosError, AxiosResponse } from "axios";
import { useMutation } from "react-query";
import client from "./client";

export interface CreateLendingRequest {
    bookId: number
    memberId: number
}

export interface CreateLendingResponse {
    status: boolean
    data: Data
  }
  
export interface Data {
    id: number
    bookId: number
    memberId: number
    borrowedDate: string
    dueDate: string
    status: string
    createdBy: number
}
  

export const useCreateLending = () => {
    return useMutation<AxiosResponse<CreateLendingResponse>,AxiosError<{ status: boolean; message: string }>,CreateLendingRequest>({
        mutationFn: ({ bookId, memberId  }: CreateLendingRequest) =>{
            return client.post(`lending/lend-book`, { bookId, memberId })
        } 
    })
}