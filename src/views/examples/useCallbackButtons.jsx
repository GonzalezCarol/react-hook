import React from "react";

const useCallBackButtons = (props) => {
  return (
    <div>
      <button className="btn" onClick={() => props.inc(6)}>
        6
      </button>
      <button className="btn" onclick={() => props.inc(12)}>
        12
      </button>
      <button className="btn" onClick={() => props.inc(18)}>
        18
      </button>
    </div>
  );
};

//* vai fazer um cache e so vai renderizar novamente quando as props forem alteradas
export default React.memo(useCallBackButtons); 
