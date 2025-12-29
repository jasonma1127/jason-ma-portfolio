function Title(props) {
  return (
    <div className={`title ${props.title}`}>
      <h2>
        {props.title}
        <span>{props.span}</span>
      </h2>
    </div>
  );
}

export default Title;
