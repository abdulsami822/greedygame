import styled from "../styles/LeadCaptureForm.module.css";

export default function InputContainer(props) {
  const {
    label,
    id,
    type,
    placeholder,
    value,
    optional,
    onChange,
    error,
    className,
  } = props;
  const errorClass = error ? styled.errorInput : "";
  return (
    <div className={`${styled.inputContainer} ${className}`}>
      <label className={styled.label} htmlFor={id}>
        {label}
        {optional ? (
          <span className={styled.optionalSpan}> (optional)</span>
        ) : (
          ""
        )}
      </label>
      <input
        className={`${styled.input} ${errorClass}`}
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <p className={styled.error}>{error}</p>
    </div>
  );
}
