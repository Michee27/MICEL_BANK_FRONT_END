import React, { useRef } from "react";
import { Card } from "primereact/card";
import { Chart } from "primereact/chart";
import "./InvestmentDashboard.css"
import { investmentData, options, portfolio } from "./utils/contants";

const InvestmentDashboard = () => {
    const chartRef = useRef(null);

    return (
        <div className="dashboard-container">
            <div className="investment-summary">
                <Card title="Total Investido" className="summary-card">
                    <div className="summary-value">R$ 85.450,00</div>
                    <div className="summary-trend positive">+12,5% este mês</div>
                </Card>
                <Card title="Rentabilidade" className="summary-card">
                    <div className="summary-value">R$ 7.840,00</div>
                    <div className="summary-trend positive">+8,2% este ano</div>
                </Card>
                <Card title="Projeção Anual" className="summary-card">
                    <div className="summary-value">R$ 98.200,00</div>
                    <div className="summary-trend">Estimativa</div>
                </Card>
            </div>

            <div className="chart-container">
                <h2 className="chart-title">Evolução Patrimonial</h2>
                <Chart type="line" data={investmentData} options={options} ref={chartRef} />
            </div>

            <div className="portfolio-container">
                <h2 className="portfolio-title">Minha Carteira</h2>
                <div className="portfolio-list">
                    {portfolio.map((asset) => (
                        <div key={asset.id} className="portfolio-item">
                            <div className="portfolio-details">
                                <h4 className="portfolio-symbol">{asset.symbol}</h4>
                                <small className="portfolio-name">{asset.name}</small>
                            </div>
                            <div className="portfolio-value">{asset.value}</div>
                            <div className="portfolio-trend positive">{asset.trend}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InvestmentDashboard;
