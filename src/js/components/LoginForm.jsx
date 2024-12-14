import React, { useState } from "react";
import "./LoginForm.css";
import { useToast } from "../context/ToastContext";

const LoginForm = () => {
    const [cpf, setCpf] = useState("");
    const [password, setPassword] = useState("");
    const { dispatchSuccessMsg, dispatchErrorMsg } = useToast(); // Use funções de Toast

    const formatCpf = (value) => {
        const onlyNumbers = value.replace(/\D/g, "");
        return onlyNumbers
            .replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
            .substring(0, 14);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cpf.replace(/\D/g, "").length !== 11 || password.length < 6) {
            dispatchErrorMsg("CPF ou senha inválidos"); // Dispara mensagem de erro
        } else {
            dispatchSuccessMsg("Login realizado com sucesso!"); // Dispara mensagem de sucesso
            setTimeout(() => {
                window.location.href = "/dashboard"; // Redireciona após sucesso
            }, 1500);
        }
    };

    return (
        <div className="login-container">
            <div className="logo">
                <i className="fas fa-landmark"></i>
                DigiBank
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="cpf">CPF</label>
                    <input
                        type="text"
                        id="cpf"
                        placeholder="Digite seu CPF"
                        value={cpf}
                        onChange={(e) => setCpf(formatCpf(e.target.value))}
                        maxLength="14"
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Digite sua senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="login-button">
                    Entrar
                </button>
                <a href="https://digibank.com/forgot-password" className="forgot-password">
                    Esqueceu sua senha?
                </a>
            </form>
        </div>
    );
};

export default LoginForm;
