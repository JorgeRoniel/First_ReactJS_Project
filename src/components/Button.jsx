function Button(props) {
  return (
    <button {...props} className="bg-slate-400 text-white rounded-md p-3">
      {props.children}
    </button>
  );
}

export default Button;
