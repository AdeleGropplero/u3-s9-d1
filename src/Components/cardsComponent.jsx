const Cards = (props) => {
  return (
    <div className="card">
      <img src={props.src} className="card-img-top" alt={props.alt} />
      <div className="card-body">
        <h5 className="card-title">{props.cardTitle}</h5>
        <p className="card-text">{props.cardText}</p>
        <a href="#" className={props.classBtn}>
          {props.btnText}
        </a>
      </div>
    </div>
  );
};
export default Cards;
