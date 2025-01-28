import { useQuery } from "react-query"
import client from "./client"
import { AxiosError } from "axios"

export interface GetCategoryResponse {
    status: boolean
    data: Category[]
  }
  
  export interface Category {
    id: number
    name: string
  }
  
  export const useCategories = () => {
      return useQuery<object, AxiosError, GetCategoryResponse>({
          queryKey: ['category'],
          queryFn: async({ }) => {
              const response = await client.get('books/categories');
              return response.data;
          }
      })
  }