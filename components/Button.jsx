function Button({ children, onClick }) {
  return (
    <button className="default-button" onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
