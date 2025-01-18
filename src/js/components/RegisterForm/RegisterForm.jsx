import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Calendar } from "primereact/calendar";
import "./RegisterForm.css";
import { formatCPF, formatPhone } from "../../Utils/Formats";
import { checkPasswordStrength, validateCPF } from "../../Utils/Validations";
import { useToast } from "../../context/ToastContext";
import MicelBankButton from "../Buttons/MicelBankButton";
import AuthService from "../../services/authService";

const RegisterForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { showSuccess, showError } = useToast()
    const [formData, setFormData] = useState({
        fullName: "",
        cpf: "",
        birthDate: null,
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: name === "cpf" ? formatCPF(value) : name === "phone" ? formatPhone(value) : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true)

        const fields = Object.keys(formData);

        for (const field of fields) {
            switch (field) {
                case "fullName":
                    if (formData.fullName.trim().split(" ").length < 2) {
                        showError("Nome inválido");
                        setIsLoading(false);
                        return;
                    }
                    break;

                case "cpf":
                    if (!validateCPF(formData.cpf)) {
                        showError("CPF inválido");
                        setIsLoading(false);
                        return;
                    }
                    break;

                case "birthDate":
                    if (new Date().getFullYear() - new Date(formData.birthDate).getFullYear() < 18) {
                        showError("Data inválida");
                        setIsLoading(false);
                        return;
                    }
                    break;

                case "phone":
                    if (formData.phone.replace(/\D/g, "").length !== 11) {
                        showError("Celular inválido");
                        setIsLoading(false);
                        return;
                    }
                    break;

                case "email":
                    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                        showError("Email inválido");
                        setIsLoading(false);
                        return;
                    }
                    break;

                case "password":
                    if (formData.password.length === 0 || !checkPasswordStrength(formData.password)) {
                        showError("Senha muito fraca");
                        setIsLoading(false);
                        return;
                    }
                    break;

                case "confirmPassword":
                    if (formData.password !== formData.confirmPassword) {
                        showError("As senhas não coincidem");
                        setIsLoading(false);
                        return;
                    }
                    break;

                default:
                    break;
            }
        }

        try {
            const { data } = await AuthService.signup(formData)

            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));

            showSuccess("Usuario cadastrado ")
            window.location.href = '/';

        } catch (error) {
            showError(error?.response?.data?.message)
        } finally {
            setIsLoading(false)
        }

    };

    return (
        <div className="main-container">
            <div className="register-container">
                <div className="logo-form">
                    Signup MicelBank
                </div>
                <form onSubmit={handleSubmit}>
                    {/** Nome Completo */}
                    <div className="input-group">
                        <label>Nome Completo</label>
                        <InputText
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange} />
                    </div>

                    {/** CPF */}
                    <div className="input-group">
                        <label>CPF</label>
                        <InputText
                            name="cpf"
                            value={formData.cpf}
                            onChange={handleInputChange} />
                    </div>

                    {/** Data de Nascimento */}
                    <div className="input-group">
                        <label>Data de Nascimento</label>
                        <Calendar
                            style={{ width: '100%' }}
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleInputChange} />
                    </div>

                    {/** Celular */}
                    <div className="input-group">
                        <label>Celular</label>
                        <InputText
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange} />
                    </div>

                    {/** Email */}
                    <div className="input-group">
                        <label>Email</label>
                        <InputText
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange} />
                    </div>

                    {/** Senha */}
                    <div className="input-group">
                        <label>Senha</label>
                        <Password
                            style={{ width: '100%' }}
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            feedback />
                    </div>

                    {/** Confirmar Senha */}
                    <div className="input-group">
                        <label>Confirmar Senha</label>
                        <Password
                            style={{ width: '100%' }}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            feedback={false} />
                    </div>

                    <MicelBankButton
                        type="submit"
                        label="Signup"
                        isLoading={isLoading}
                        onClick={handleSubmit}
                        className="main-button p-button-rounded p-button-lg"
                    />

                    <a
                        style={{ marginTop: '10px', width: '100%' }}
                        href="/login" >
                        Already have an account? Login
                    </a>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
