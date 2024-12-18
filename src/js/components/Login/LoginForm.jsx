import React, { useState } from "react";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext"
import "./LoginForm.css"; // Estilos personalizados
import { useToast } from "../../context/ToastContext"; // Exemplo de toast customizado
import AuthService from "../../services/authService";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { showSuccess, showError } = useToast()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const data = await AuthService.login({ email, password })
        if (data.success) {
            showSuccess('Login realizado com sucesso!')

        } else {
            showError(data.message)
        }

    };

    return (
        <div className="login-container">
            <div className="logo">
                Login MicelBank
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <InputText
                        id="email"
                        placeholder="Digite seu email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-inputtext-lg"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Senha</label>
                    <InputText
                        id="password"
                        type="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="p-inputtext-lg"
                    />
                </div>
                <Button
                    type="submit"
                    label="Entrar"
                    className="login-button p-button-rounded p-button-lg"
                />
                <a href="https://digibank.com/forgot-password" className="forgot-password">
                    Esqueceu sua senha?
                </a>
            </form>
        </div>
    );
};

export default LoginForm;
