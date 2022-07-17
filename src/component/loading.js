
// import { Loader } from 'semantic-ui-react'

// const LoaderExampleInlineCentered = () => <Loader active inline='centered' />

// export default LoaderExampleInlineCentered


import React from "react";
const loadingImg =
  "src/assets/loading.svg";

const Loading = () => (
  <div className="spinner">
    <img src={loadingImg} alt="Loading..." />
  </div>
);

export default Loading;