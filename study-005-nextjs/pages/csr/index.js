import React from "react";

function csr(props) {
  return (
    <>
      <main>
        <p>CSR Test</p>
        <h2>{performance.now()}</h2>
      </main>
    </>
  );
}

export default csr;
