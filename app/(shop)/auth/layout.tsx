import React from "react";

type Props = {
  children: React.ReactNode; // will be a page or nested layout
};

const AuthLayout = (props: Props) => {
  const {children} = props
  return <div>{children}</div>;
};

export default AuthLayout;
