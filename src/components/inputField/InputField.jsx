import './InputField.css';

function InputField({ value, valueSetter, placeholder, name, type }) {
    return (
        <input
            className="input-field"
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={(event) => valueSetter(event.target.value)}
        />
    );
}

export default InputField;