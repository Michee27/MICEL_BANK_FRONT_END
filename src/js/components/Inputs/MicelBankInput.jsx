import React from 'react';
import PropTypes from 'prop-types';
import './MicelBankInput.css';

const MicelBankInput = ({
    label,
    value,
    onChange,
    placeholder,
    disabled,
    maxLength,
    className,
}) => {
    const handleInputChange = (event) => {
        const inputValue = event.target.value;

        // Permitir apenas números (remover quaisquer caracteres não numéricos)
        const numericValue = inputValue.replace(/\D/g, '');

        // Formatar o valor como decimal com duas casas
        const formattedValue = formatToDecimal(numericValue);

        // Chama o onChange com o valor formatado
        onChange(formattedValue);
    };

    const formatToDecimal = (numericValue) => {
        if (!numericValue) return '0.00';

        // Adiciona as casas decimais
        const valueWithDecimals = (Number(numericValue) / 100).toFixed(2);

        return valueWithDecimals;
    };

    return (
        <div className={`micel-bank-input ${className}`}>
            {label && <label className="micel-bank-input-label">{label}</label>}

            <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">$</span>
                <input
                    type="text"
                    value={value}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                    disabled={disabled}
                    maxLength={maxLength}
                    className="micel-bank-input-field"
                />
            </div>
        </div>
    );
};

// PropTypes para validação das propriedades
MicelBankInput.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string.isRequired, // O valor deve ser controlado pelo pai
    onChange: PropTypes.func.isRequired, // Função de callback para atualizar o valor
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    maxLength: PropTypes.number,
    className: PropTypes.string,
};

// Valores padrão para as propriedades
MicelBankInput.defaultProps = {
    label: '',
    placeholder: 'Digite o valor...',
    disabled: false,
    maxLength: 15, // Limite ajustado para suportar decimais
    className: '',
};

export default MicelBankInput;
