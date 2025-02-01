export const investmentData = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out"],
    datasets: [
        {
            label: "Patrimônio Total (R$)",
            data: [65000, 67500, 69800, 72000, 74500, 77000, 79500, 81200, 83500, 85450],
            borderColor: "#2f3c7e",
            backgroundColor: "rgba(47, 60, 126, 0.1)",
            fill: true,
            tension: 0.4,
        },
    ],
};

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
    },
    scales: {
        y: {
            beginAtZero: false,
            ticks: {
                callback: function (value) {
                    return "R$ " + value.toLocaleString();
                },
            },
        },
    },
};

export const portfolio = [
    { id: 1, symbol: "PETR4", name: "Petrobras PN", value: "R$ 28.500,00", trend: "+5,2%" },
    { id: 2, symbol: "FII HGLG11", name: "CSHG Logística FII", value: "R$ 35.200,00", trend: "+3,8%" },
    { id: 3, symbol: "Tesouro IPCA+", name: "Vencimento 2028", value: "R$ 21.750,00", trend: "+2,1%" },
];