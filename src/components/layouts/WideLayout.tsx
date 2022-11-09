import React from 'react';

function WideLayout(props: React.PropsWithChildren) {
  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="w-full max-w-screen-2xl pt-16 md:px-16">{props.children}</div>
    </div>
  );
}

export default WideLayout;
