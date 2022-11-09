import React from 'react';

function Default(props: React.PropsWithChildren) {
  return (
    <div className="w-full min-h-screen flex justify-center">
      <div className="w-full max-w-screen-sm pt-16">{props.children}</div>
    </div>
  );
}

export default Default;
