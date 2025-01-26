
import api from "../api/axiosConfig";

const endpoint = '/account';

export const TransactionsService = {
    recharge: (amount) => api.post(`${endpoint}/deposit`, amount
    ),
    transfer: (transferData) => api.post(`${endpoint}/transfer`, transferData
    ),
    transactionsHistory: () => api.get(`${endpoint}/statement`),

}