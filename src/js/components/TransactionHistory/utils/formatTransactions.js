
export const formatTransactions = (data) => {

    const mergedTransactions = [
        ...data.depositStatement.map((transaction) => ({
            id: transaction.id,
            title: "Depósito",
            description: `Conta de: ${transaction.user.name}`,
            amount: transaction.amount,
            type: "credit",
            date: new Date(transaction.transaction_date),
        })),
        ...data.withdrawalStatement.map((transaction) => ({
            id: transaction.id,
            title: "Saque",
            description: `Conta de: ${transaction.user.name}`,
            amount: transaction.amount,
            type: "debit",
            date: new Date(transaction.transaction_date),
        })),
        ...data.transfersSent.map((transaction) => ({
            id: transaction.id,
            title: "Transferência Enviada",
            description: `Para Conta de: ${transaction.user.name}`,
            amount: transaction.amount,
            type: "debit",
            date: new Date(transaction.transaction_date),
        })),
        ...data.receiveTransfer.map((transaction) => ({
            id: transaction.id,
            title: "Transferência Recebida",
            description: `De Conta de: ${transaction.user.name}`,
            amount: transaction.amount,
            type: "credit",
            date: new Date(transaction.transaction_date),
        })),
    ];

    mergedTransactions.sort((a, b) => b.date - a.date);

    return mergedTransactions;
};
