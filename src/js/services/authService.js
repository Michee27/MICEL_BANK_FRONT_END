import api from "../api/axiosConfig";
const headers = {
    'Content-Type': 'multipart/form-data',
}

const AuthService = {
    login: async (requestData) => {

        try {
            const response = await api.post('/login', requestData);

            const data = response.data;
            if (response.status === 200) {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                return { success: true, message: data.message, user: data.user };
            }

            return { success: false, message: data.message };
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            return { success: false, message: error?.response?.data.message };
        }
    },

    signup: async (formData) => api.post('/signup', formData, { headers: headers }),

    logout: async () => {
        // await api.post('/logout');
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/login';

    },

};

export default AuthService;