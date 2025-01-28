import { AxiosError } from "axios"
import Swal from "sweetalert2"

export const showErrorMsg = (err:unknown, title: string) => {
    const e = err as AxiosError<{message: string}>
    Swal.fire(title, e.response?.data.message)
}