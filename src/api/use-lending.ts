import { useQuery } from "react-query";
import client from "./client";
import { AxiosError } from "axios";
import { Book } from "./use-books";

export interface GetLendingResponse {
    status: boolean
    data: Lending[]
    count: number
    totalPage: number
    page: number
  }
  
  export interface Lending {
    id: number
    bookId: number
    memberId: number
    borrowedDate: string
    dueDate: string
    status: string
    createdBy: number
    book: Book
    Member: Member
  }
  
  
  export interface Member {
    id: number
    userId: number
    name: string
    email: string
    phone: string
    joinedDate: string
  }

  export interface GetLendingRequest{
    page: number
    search?: string
  }
  

export const useLending = ({page, ...rest}: GetLendingRequest) => {
    return useQuery<GetLendingRequest, AxiosError, GetLendingResponse>({
        queryKey: ['page', { page, ...rest }],
        queryFn: async({ }) => {
            const response = await client.get('lending',{
                params: { page, ...rest }
            });
            return response.data;
        }
    })
}