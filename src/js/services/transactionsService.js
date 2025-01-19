
import api from "../api/axiosConfig";

const endpoint = '/account';

export const TransactionsService = {
    recharge: (amount) => api.post(`${endpoint}/deposit`, amount
    ),

}