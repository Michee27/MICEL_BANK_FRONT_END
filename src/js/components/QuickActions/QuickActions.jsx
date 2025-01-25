import React, { useState } from 'react';
import './QuickActions.css';
import MicelBankDialog from '../Dialog/MicelBankDialog';
import MicelBankInput from '../Inputs/MicelBankInput';
import { TransactionsService } from '../../services/transactionsService';
import { useToast } from '../../context/ToastContext';
import { useAuth } from '../../context/AuthContext';
import RadioButtonGroup from '../Buttons/RadioButton';
import { InputText } from 'primereact/inputtext';
import { formatCPF } from '../../Utils/Formats';

const actions = [
    { icon: 'pi pi-history', text: 'Histórico' },
    { icon: 'pi pi-credit-card', text: 'Pagar' },
    { icon: 'pi pi-mobile', text: 'Recarga' },
    { icon: 'pi pi-money-bill', text: 'Pix' },
];

const QuickActions = () => {
    const [dialogVisible, setDialogVisible] = useState(false);
    const [selectedAction, setSelectedAction] = useState('');
    const [transferData, setTransferData] = useState({
        tipoPix: '',
        cpf: '',
        email: '',
        amount: ''
    });
    const [amount, setAmount] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const { showSuccess, showError } = useToast()
    const { updateBalance } = useAuth();

    const handleActionClick = (action) => {
        if (action === 'Histórico') return window.location.href = '/history';

        setSelectedAction(action);
        setDialogVisible(true);
    };

    const handleInputChange = (event) => {
        console.log(event)
        // Verifica se o evento é do RadioButtonGroup ou de um input padrão
        const { name, value } = event.target || event;

        setTransferData((prevData) => ({
            ...prevData,
            [name]: name === "cpf" ? formatCPF(value) : value, // Formata CPF se necessário
        }));
    };



    const handleConfirm = async () => {
        console.log(`Ação confirmada: ${selectedAction}`);
        setIsLoading(true);

        try {
            switch (selectedAction) {
                case 'Recarga':
                    await TransactionsService.recharge({ amount });
                    updateBalance(Number(amount))
                    break;
                case 'Pix':
                    await TransactionsService.transfer(transferData);
                    updateBalance(-Number(transferData.amount))
                    break;
                // case 'Pix':
                //     response = await TransactionsService.pix();
                //     break;
                default:
                    throw new Error('Ação não suportada');
            }

            showSuccess(`Ação "${selectedAction}" realizada com sucesso!`);
            setDialogVisible(false);
        } catch (error) {
            console.log(error)
            showError(error?.response?.data?.message);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="quick-actions">
            {actions.map((action, index) => (
                <div
                    className="action-card"
                    key={index}
                    onClick={() => handleActionClick(action.text)}
                >
                    <div className="action-icon">
                        <i className={`${action.icon}`} />
                    </div>
                    <h3>{action.text}</h3>
                </div>
            ))}


            <MicelBankDialog
                visible={dialogVisible}
                onHide={() => setDialogVisible(false)}
                title={`${selectedAction}`}
                isLoading={isLoading}
                content={
                    <>
                        {selectedAction === 'Recarga' && (
                            <MicelBankInput
                                label="Valor Bancário"
                                value={amount}
                                onChange={(e) => setAmount(e.value)}
                                placeholder="Digite apenas números"
                                maxLength={12}
                            />
                        )}

                        {selectedAction === 'Pix' && (
                            <div>
                                <div className="card flex justify-content-center">
                                    <RadioButtonGroup
                                        options={[
                                            { value: 'CPF', label: 'CPF' },
                                            { value: 'EMAIL', label: 'Email' },
                                        ]}
                                        name="tipoPix"
                                        selectedValue={transferData.tipoPix}
                                        onChange={handleInputChange}
                                    />
                                </div>

                                {transferData.tipoPix.length > 0 && (
                                    <>
                                        {transferData.tipoPix === 'CPF' ? (
                                            <div className="input-group">
                                                <label>CPF</label>
                                                <InputText
                                                    name="cpf"
                                                    value={transferData.cpf}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        ) : (
                                            <div className="input-group">
                                                <label>Email</label>
                                                <InputText
                                                    name="email"
                                                    value={transferData.email}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        )}

                                        <MicelBankInput
                                            name="amount"
                                            label="Valor Transferencia"
                                            value={transferData.amount}
                                            onChange={handleInputChange}
                                            placeholder="Digite apenas números"
                                            maxLength={12}
                                        />
                                    </>
                                )}

                            </div>

                        )}
                    </>
                }
                footerButtons={[
                    {
                        label: 'Cancelar',
                        onClick: () => setDialogVisible(false),
                        className: 'p-button-secondary',
                    },
                    {
                        label: 'Confirmar',
                        onClick: handleConfirm,
                        className: 'p-button-success',
                    },
                ]}
            />
        </div>
    );
};

export default QuickActions;
