function TextField(props) {
  return (
    <input
      className="default-text-field"
      type="password"
      placeholder={props.placeholder}
    />
  );
}

export default TextField;
