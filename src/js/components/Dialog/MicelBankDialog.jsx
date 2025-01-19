import React from 'react';
import PropTypes from 'prop-types';
import { Dialog } from 'primereact/dialog';
import './MicelBankDialog.css'
import MicelBankButton from '../Buttons/MicelBankButton';

const MicelBankDialog = ({ visible, onHide, title, content, footerButtons, className, isLoading }) => {
    const footer = footerButtons.map((button, index) => (
        <MicelBankButton
            key={index}
            type="submit"
            label={button.label}
            className={`main-button ${button.className}`}
            isLoading={isLoading}
            onClick={button.onClick}
        />
    ));

    return (
        <Dialog
            visible={visible}
            onHide={onHide}
            header={title}
            className={`micel-bank-dialog ${className}`}
            dismissableMask
        >
            <div className="micel-bank-dialog-content">
                {content}
            </div>
            <div className="micel-bank-dialog-footer">
                {footer}
            </div>
        </Dialog>
    );
};

MicelBankDialog.propTypes = {
    visible: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    footerButtons: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            onClick: PropTypes.func.isRequired,
            className: PropTypes.string,
        })
    ).isRequired,
    className: PropTypes.string,
};

MicelBankDialog.defaultProps = {
    className: '',
};

export default MicelBankDialog;
