import s from './style.module.css';
import cn from 'classnames';

function Input({ value, label, type = 'text', name, required, onChange }) {
    return (
        <div className={ s.root }>
            <input
                name={ name }
                type={ type }
                value={ value }
                className={ cn( s.input, {
                    [ s.valid ]: value.length > 0
                })}
                onChange={ onChange }
                required={ required }
                />
            <span className={ s.highlight }></span>
            <span className={ s.bar }></span>
            <label className={ s.label }>
                { label }
            </label>
        </div>
    )
}

export default Input;
