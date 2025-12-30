import { useState, useEffect } from "react";

function ProgressBar(props) {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPercentage(props.percentage);
    }, (props.delay || 0) * 1000);

    return () => clearTimeout(timer);
  }, [props.percentage, props.delay]);

  return (
    <div className="progress-bar">
      <div className="progress-bar-title">
        {props.color && (
          <span
            className="language-dot"
            style={{ backgroundColor: props.color }}
          ></span>
        )}
        {props.title}
      </div>
      <div className="progress-bar-detail">
        <p>{props.percentage}</p>
        <div className="bar">
          <div
            className="bar-percent"
            style={{
              width: `${percentage}`,
              backgroundColor: props.color || undefined
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
