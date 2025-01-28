import React, { useState, useEffect } from "react";
import "./TransactionHistory.css";
import { formatCurrency } from "../../Utils/Formats";
import { TransactionsService } from "../../services/transactionsService";
import { formatTransactions } from "./utils/formatTransactions";
import { useToast } from "../../context/ToastContext";

const TransactionHistory = () => {
    const { showError } = useToast()
    const [transactions, setTransactions] = useState(null);

    useEffect(() => {
        const handleTransactionHistory = async () => {
            try {
                const { data } = await TransactionsService.transactionsHistory();

                console.log(data)
                const formattedTransactions = formatTransactions(data);

                setTransactions(formattedTransactions);
            } catch (error) {
                console.log(error)
                showError(error.response.data.message)
            }
        };
        handleTransactionHistory();
    }, [showError]);

    if (!transactions) {
        return <p>Carregando transações...</p>;
    }

    if (transactions.length === 0) {
        return <p>Nenhuma transação encontrada.</p>;
    }

    return (
        <div>
            <div className="transaction-header" style={{ marginBottom: "1rem" }}>
                <h2>Histórico de Transações</h2>
            </div>

            <div className="transactions-list">
                {transactions.map((transaction) => (
                    <div key={transaction.id} className="transaction-item" style={{ marginBottom: "1rem" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <div>
                                    <h4>{transaction.title}</h4>
                                    <p>{transaction.description}</p>
                                    <small>
                                        {transaction.date.toLocaleDateString()} {transaction.date.toLocaleTimeString()}
                                    </small>
                                </div>
                            </div>
                            <div style={{ textAlign: "right" }}>
                                <div
                                    style={{
                                        color: transaction.type === "credit" ? "green" : "red",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {transaction.type === "credit" ? "+" : "-"} {formatCurrency(transaction.amount)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TransactionHistory;
