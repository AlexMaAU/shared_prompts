//Data Fetching

// 1. Server side rendering (SSR)
const ssrFetch = async () => {
  const res = await fetch("https://xxxxxxx.com.au", { cache: "no-store" });
  const data = await res.json();
  return <div>{data}</div>;
};

// 2. Static site Generation (SSG)
// 去掉{ cache: "no-store" }，默认就是SSG
const ssgFetch = async () => {
  const res = await fetch("https://xxxxxxx.com.au");
  const data = await res.json();
  return <div>{data}</div>;
};

// 3. Incremental static Generation (ISR) - SSR和SSG的结合
const isrFetch = async () => {
  const res = await fetch("https://xxxxxxx.com.au", {
    next: { revalidate: 10 }, //每隔一段时间fetch一次最新数据，这样可以减少SSR的压力
  });
  const data = await res.json();
  return <div>{data}</div>;
};
