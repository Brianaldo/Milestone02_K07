import "./BeritaSatuan.css";

const BeritaSatuan = (props) => {
  return (
      <div className="berita-satuan">
        <h2>{props.judul}</h2>
        <embed type="text/html" src={props.url} title={props.judul}></embed>
      </div>
  );
};

export default BeritaSatuan;
