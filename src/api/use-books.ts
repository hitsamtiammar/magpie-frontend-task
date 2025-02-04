import client from "./client";
import { AxiosError } from "axios";
import { useQuery } from "react-query";

export interface GetBookRequest{
    page?:number
    search?: string
    showAll?: boolean
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
    _count: CountData
  }

  export interface CountData{
    lending: number
  }
  
  export interface Category {
    id: number
    name: string
  }
  

export const useBooks = ({page, ...rest}: GetBookRequest) => {
  return useQuery<GetBookRequest, AxiosError, GetBookResponse>({
    queryKey: ['page', { page, ...rest }],
    queryFn: async({ }) => {
        const response = await client.get('books',{
            params: { page, ...rest }
        });
        return response.data;
    }
  })
}
