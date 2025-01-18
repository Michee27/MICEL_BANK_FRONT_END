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

    // Verifica se o browser suporta structuredClone
    if (typeof structuredClone === "function") {
        return structuredClone(obj);
    }

    // Fallback: usar JSON (não recomendado para objetos complexos com funções, classes, etc.)
    try {
        return JSON.parse(JSON.stringify(obj));
    } catch (error) {
        console.error("Erro ao clonar o objeto: ", error);
        throw new Error("Falha ao clonar objeto. Verifique se ele contém dados complexos.");
    }
}

