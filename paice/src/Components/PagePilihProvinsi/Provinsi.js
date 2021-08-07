import "./Provinsi.css";

const Provinsi = (props) => {
  const clickHandler = () => {
    props.onSelect(props.label);
  };
  return (
    <button className="provinsi" type="button" onClick={clickHandler}>
      {props.label}
    </button>
  );
};

export default Provinsi;
