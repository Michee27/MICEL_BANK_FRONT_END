import React from 'react';
import { RadioButton } from "primereact/radiobutton";

const RadioButtonGroup = ({ options, name, selectedValue, onChange }) => {
    return (
        <div className="flex flex-wrap gap-3">
            {options.map((option) => (
                <div className="flex align-items-center" key={option.value}>
                    <RadioButton
                        inputId={option.value}
                        name={name}
                        value={option.value}
                        onChange={(e) => onChange({ name, value: e.value })} // Envia name e value no callback
                        checked={selectedValue === option.value}
                    />
                    <label htmlFor={option.value} className="ml-2">{option.label}</label>
                </div>
            ))}
        </div>
    );
};

export default RadioButtonGroup;

