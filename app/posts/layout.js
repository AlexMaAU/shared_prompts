import React from "react";

// layout是布局服用组件，{children}指代子路径的文件内容
const Layout = ({ children }) => {
  return (
    <div>
      <div>Navigate to top</div>
      {children}
    </div>
  );
};

export default Layout;
