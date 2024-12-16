function Input(props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className="border border-slate-200 outline-slate-300 px-4 py-2 rounded-md"
      value={props.value}
      onChange={props.onChange}
    />
  );
}

export default Input;
