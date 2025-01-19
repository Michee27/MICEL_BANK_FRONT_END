import React, { useState } from 'react';
import './QuickActions.css';
import MicelBankDialog from '../Dialog/MicelBankDialog';
import MicelBankInput from '../Inputs/MicelBankInput';
import { TransactionsService } from '../../services/transactionsService';
import { useToast } from '../../context/ToastContext';
import { useAuth } from '../../context/AuthContext';

const actions = [
    { icon: 'pi pi-send', text: 'Transferir' },
    { icon: 'pi pi-credit-card', text: 'Pagar' },
    { icon: 'pi pi-mobile', text: 'Recarga' },
    { icon: 'pi pi-money-bill', text: 'Pix' },
];

const QuickActions = () => {
    const [dialogVisible, setDialogVisible] = useState(false);
    const [selectedAction, setSelectedAction] = useState('');
    const [amount, setAmount] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const { showSuccess, showError } = useToast()
    const { updateBalance } = useAuth();

    const handleActionClick = (action) => {
        setSelectedAction(action);
        setDialogVisible(true);
    };

    const handleConfirm = async () => {
        console.log(`Ação confirmada: ${selectedAction}`);
        setIsLoading(true);

        try {
            // let response;

            switch (selectedAction) {
                case 'Recarga':
                    await TransactionsService.recharge({ amount });
                    updateBalance(Number(amount))
                    break;
                // case 'Transferir':
                //     response = await TransactionsService.transfer();
                //     break;
                // case 'Pagar':
                //     response = await TransactionsService.pay();
                //     break;
                // case 'Pix':
                //     response = await TransactionsService.pix();
                //     break;
                default:
                    throw new Error('Ação não suportada');
            }

            showSuccess(`Ação "${selectedAction}" realizada com sucesso!`);
            setDialogVisible(false);
        } catch (error) {
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


            {selectedAction === 'Recarga' && (
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
                                    onChange={setAmount}
                                    placeholder="Digite apenas números"
                                    maxLength={12}
                                />
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
            )}
        </div>
    );
};

export default QuickActions;
