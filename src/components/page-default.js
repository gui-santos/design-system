import React from 'react';

function Page({ children }) {
  return (
    <div>
      <h1>Page</h1>
      <div>{children}</div>
    </div>
  );
}

export default Page;
