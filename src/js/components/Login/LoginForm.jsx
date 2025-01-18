import React, { useState } from "react";
import { InputText } from "primereact/inputtext"
import "./LoginForm.css";
import { useToast } from "../../context/ToastContext";
import AuthService from "../../services/authService";
import MicelBankButton from "../Buttons/MicelBankButton";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false)
    const { showSuccess, showError } = useToast()


    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        const data = await AuthService.login({ email, password })

        if (data.success) {
            showSuccess('Login realizado com sucesso!')
            window.location.href = '/';
        } else {
            showError(data.message)
            setIsLoading(false)
        }

    };

    return (
        <div className="main-container">
            <div className="login-container">
                <div className="logo-form">
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
                        <label htmlFor="password">Password</label>
                        <InputText
                            id="password"
                            type="password"
                            placeholder="Digite sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="p-inputtext-lg"
                        />
                    </div>
                    <MicelBankButton
                        type="submit"
                        label="Login"
                        className="main-button p-button-rounded p-button-lg"
                        isLoading={isLoading}
                        onClick={handleSubmit}
                    />
                    <a href="/signup" >
                        Signup
                    </a>
                    <a href="/" className="forgot-password">
                        Forgot your password ?
                    </a>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
