export function formatCPF(value) {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1');
}


export function formatPhone(value) {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .replace(/(-\d{4})\d+?$/, '$1');
}

export function cloneObject(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj; // Retorna valores primitivos diretamente
    }

    if (typeof structuredClone === "function") {
        return structuredClone(obj);
    }

    try {
        return JSON.parse(JSON.stringify(obj));
    } catch (error) {
        console.error("Erro ao clonar o objeto: ", error);
        throw new Error("Falha ao clonar objeto. Verifique se ele contém dados complexos.");
    }
}

export const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
};
