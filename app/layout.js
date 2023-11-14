import "@/styles/globals.css";

export const metadata = {
  title: "Shared Prompts",
  description: "Discover and share GPT prompts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Layout负责的是页面的整体布局，可以被多个Page公用相同的Layout */}
      {/* {children} 指代的是Page中定义的内容 */}
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}
