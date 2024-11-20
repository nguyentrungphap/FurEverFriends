import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const DashboardLayout = (props: Props) => {
  const { children } = props;
  return <div>{children}</div>;
};

export default DashboardLayout;
