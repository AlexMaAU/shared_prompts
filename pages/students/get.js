import React from "react";

// 在 Next.js 13+ 中，文件系统路由已经有了一些改变，使得文件名默认情况下不再直接用作路由。
// 如果你想使用文件名作为路由，你可以在根目录下创建 pages 文件夹， 中直接创建文件
const get = () => {
  return <div>Get</div>;
};

export default get;
