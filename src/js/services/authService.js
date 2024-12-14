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
                localStorage.setItem('usuario', JSON.stringify(data.usuario));
                return { success: true, message: data.message, usuario: data.usuario };
            }

            return { success: false, message: data.message };
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            return { success: false, message: error?.response?.data.message };
        }
    },

    signup: async (formData) => api.post('/signup', formData, { headers: headers }),

    logout: async () => {
        await api.post('/logout');
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
        localStorage.removeItem('firebaseToken');
        window.location.href = '/';

    },

    VerificarEmail: async (token) => api.post('/verificar-email', token),
    RecuperarSenha: async (email) => api.post('/recuperar-senha', email),
    validaCodigo: async (codigoValidacao) => api.post('/valida-codigo', codigoValidacao),
    atualizaSenha: async (newPassword) => api.post('/atualiza-senha', newPassword),
};

export default AuthService;