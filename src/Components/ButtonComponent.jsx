const Button = (props) => (
  <div className={props.className}>
    <h4> {props.title}</h4>
    <input class="input me-2" />
    <button className={props.specificheBtn} style={props.style} type="submit">
      {props.buttonText}
    </button>
  </div>
);

export default Button;
