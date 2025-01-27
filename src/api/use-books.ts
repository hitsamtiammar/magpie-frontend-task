import client from "./client";
import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { createQuery } from "react-query-kit";

export interface GetBookRequest{
    page?:number
}
  
export interface GetBookResponse {
    status: boolean
    data: Book[]
    count: number
    totalPage: number;
    page: string
  }
  
  export interface Book {
    id: number
    title: string
    author: string
    quantity: number
    categoryId: number
    isbn: string
    category: Category
  }
  
  export interface Category {
    id: number
    name: string
  }
  

export const useBooks = ({page}: { page: number }) => {
  return useQuery<GetBookRequest, AxiosError, GetBookResponse>({
    queryKey: ['page', { page }],
    queryFn: async({ }) => {
        const response = await client.get('books',{
            params: { page }
        });
        return response.data;
    }
  })
}
