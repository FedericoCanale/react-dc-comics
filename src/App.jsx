import Header from "./components/Header.jsx";

export default function App() {
  return (
    <>
      <Header />

      <main
        style={{
          background: "#1C1C1C",
          color: "#fff",
          minHeight: "80vh",
          textAlign: "left",
          padding: "60px 0",
        }}
      >
        <div className="container">
          <h2 className="opacity-75">--&gt; Content goes here &lt;--</h2>
        </div>
      </main>
    </>
  );
}