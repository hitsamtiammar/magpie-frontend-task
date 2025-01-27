import { useQuery } from "react-query";
import client from "./client";
import { AxiosError } from "axios";

export interface GetMostBorrowedResponse {
    status: boolean
    data: Data[]
  }
  
  export interface Data {
    id: number
    title: string
    countLending: number
  }
  

export const useMostBorrowedBook = () => {
    return useQuery<object, AxiosError, GetMostBorrowedResponse>({
        queryKey: [],
        queryFn: async({ }) => {
            const response = await client.get('books/most-borrowed-book');
            return response.data;
        }
    })
}