export function validateCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11) return false;

    let sum = 0;
    let remainder;

    for (let i = 1; i <= 9; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.substring(10, 11))) return false;

    return true;
}


export function checkPasswordStrength(password) {
    let strength = 0;

    if (password.length >= 8) strength += 25;
    if (/[a-z]/.test(password)) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/\d/.test(password)) strength += 25;

    let strengthLevel = '';
    let strengthColor = '';

    if (strength < 50) {
        strengthLevel = 'Fraca';
        strengthColor = '#dc3545'; // Vermelho
    } else if (strength < 75) {
        strengthLevel = 'Média';
        strengthColor = '#ffc107'; // Amarelo
    } else {
        strengthLevel = 'Forte';
        strengthColor = '#28a745'; // Verde
    }

    return { strength, strengthLevel, strengthColor };
}
