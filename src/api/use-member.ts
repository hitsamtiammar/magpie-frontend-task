import { AxiosError } from "axios";
import { useQuery } from "react-query";
import client from "./client";

export interface GetMemberResponse {
    status: boolean
    data: Member[]
  }
  
  export interface Member {
    id: number
    userId: number
    name: string
    email: string
    phone: string
    joinedDate: string
  }

export const useMember = () => {
  return useQuery<object, AxiosError, GetMemberResponse>({
    queryKey: ['member'],
    queryFn: async({ }) => {
        const response = await client.get('members');
        return response.data;
    }
  })
}