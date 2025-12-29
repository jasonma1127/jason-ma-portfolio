import { useState, useEffect } from "react";

function ProgressBar(props) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(props.percentage);
  }, [props.percentage]);

  return (
    <div className="progress-bar">
      <div className="progress-bar-title">{props.title}</div>
      <div className="progress-bar-detail">
        <p>{props.percentage}</p>
        <div className="bar">
          <div className="bar-percent" style={{ width: `${percentage}` }}></div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
