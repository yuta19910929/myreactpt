import '../../assets/css/style.css';

const Background = (props) => {
  const {backImg_1, backImg_2} = props;
  return (
		<div className="contentsBg">
      <div className="contentsBg_1">
        <img src={backImg_1} className="contentsBgSpin"/>
      </div>
      {/*
      <div className="contentsBg_2">
        <img src={backImg_2} />
      </div>
    */}
    </div>
	);
};

export default Background;
