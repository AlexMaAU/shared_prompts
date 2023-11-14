// 1. static metadata
export const metadata = {
  title: "Home",
};
// output:
// <head>
//   <title>Home</title>
// </head>

// 2. dynamic metadata - improve SEO
export async function generateMetadata({ params, searchParams }) {
  const product = await getProduct(params.id);
  return { title: product.title };
}
// output:
// <head>
//   <title>Product Title</title>
// </head>

export default function Page() {
  return <h1>Next.js page with static metadata</h1>;
}
