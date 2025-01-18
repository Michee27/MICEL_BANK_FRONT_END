import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';

const MicelBankButton = ({ type, label, className, isLoading, onClick, disabled }) => {
    return (
        <Button
            type={type || 'button'}
            className={`micel-bank-button ${className} ${isLoading ? 'loading' : ''}`}
            onClick={onClick}
            disabled={isLoading || disabled}
        >
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="micel-bank-button-content">
                {isLoading ? (
                    <ProgressSpinner
                        style={{ width: '20px', height: '20px' }}
                        strokeWidth="4"
                        fill="transparent"
                        animationDuration=".5s"
                    />
                ) : (
                    label
                )}
            </div>
        </Button>
    );
};

MicelBankButton.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    isLoading: PropTypes.bool,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};

MicelBankButton.defaultProps = {
    type: 'button',
    className: '',
    isLoading: false,
    onClick: () => { },
    disabled: false,
};

export default MicelBankButton;
