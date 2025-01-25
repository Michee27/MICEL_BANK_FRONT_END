import React from 'react';
import PropTypes from 'prop-types';
import './MicelBankInput.css';

const MicelBankInput = ({
    name,
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

        // Remove caracteres não numéricos
        const numericValue = inputValue.replace(/\D/g, '');

        // Formata para decimal
        const formattedValue = formatToDecimal(numericValue);

        // Dispara o onChange com o name e o valor formatado
        onChange({ name, value: formattedValue });
    };

    const formatToDecimal = (numericValue) => {
        if (!numericValue) return '0.00';

        // Divide por 100 para adicionar casas decimais
        const valueWithDecimals = (Number(numericValue) / 100).toFixed(2);

        return valueWithDecimals;
    };

    return (
        <div className={`micel-bank-input ${className}`}>
            {label && <label className="micel-bank-input-label">{label}</label>}

            <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">$</span>
                <input
                    name={name}
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
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
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
    maxLength: 15,
    className: '',
};

export default MicelBankInput;
