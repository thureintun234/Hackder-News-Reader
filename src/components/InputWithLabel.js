import React, { useEffect, useRef } from 'react';

const InputWithLabel = ({
  id,
  children,
  value,
  isFocused,
  type = 'text',
  onInputChange,
}) => {
  const inputRef = useRef();

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);
  return (
    <>
      <label htmlFor={id}>{children} </label>
      <input
        id={id}
        value={value}
        type={type}
        onChange={onInputChange}
        ref={inputRef}
        autoComplete="off"
      />
    </>
  );
};

export default InputWithLabel;
