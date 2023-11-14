// Next默认是SSR渲染，如果代码中使用了Hook这样的React概念，就需要在代码文件最上面加上 'use client'
// 具体可以查询Next文档，when to use 'use client'
import React from "react";

const Home = () => {
  return <div>Home</div>;
};

export default Home;
