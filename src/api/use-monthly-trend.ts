import { useQuery } from "react-query";
import client from "./client";
import { AxiosError } from "axios";

export interface GetMontlyTrendResponse {
    status: boolean
    data: Data[]
}

export interface Data {
    id: number
    bookName: string
    countLend: number
    borrowDate: string
}

export interface GetMontlyTrendRequest{
    month?: string;
    year?: string
}

export const useMonthlyTrends = ({ month, year } : GetMontlyTrendRequest) => {
    return useQuery<GetMontlyTrendRequest, AxiosError, GetMontlyTrendResponse>({
        queryKey: ['monthly', { month, year }],
        queryFn: async({ }) => {
            const response = await client.get('books/monthly-lending-trend', {
                params: {
                    month,
                    year
                }
            });
            return response.data;
        }
    })
}