
import { useState } from 'react';
import styles from './CustomSelect.module.css';

type Option = {
  value: string;
  label: string;
};

type CustomSelectProps = {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function CustomSelect({ options, value, onChange, placeholder = "Seleccione una opción" }: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue);
    setIsOpen(false);
  };

  const selectedLabel = value ? options.find(opt => opt.value === value)?.label : placeholder;

  return (
    <div className={styles.selectContainer}>
      <div 
        className={styles.selected} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedLabel}
        <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <ul className={styles.optionsList}>
          {options.map((option) => (
            <li 
              key={option.value} 
              className={styles.option} 
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
