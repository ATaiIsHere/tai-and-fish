import { useState } from "react";

const getPageHeight = () => window.innerHeight;

const PageBlock = (props) => {
  const [pageHeight, setPageHeight] = useState(getPageHeight());

  let changeBlockHeight = () => setPageHeight(getPageHeight());

  window.addEventListener("resize", changeBlockHeight);

  return (
    <div className={`page-block ${props.class}`} style={{ height: pageHeight }}>
      {props.children}
    </div>
  );
};

export default PageBlock;
