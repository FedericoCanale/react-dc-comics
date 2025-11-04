export default function Main() {
    return (
        <main
            style={{
                background: "#1C1C1C",
                color: "#fff",
                minHeight: "15vh",
                display: "flex",
                alignItems: "center",
            }}
        >
            <div
                className="container d-flex align-items-center"
                style={{
                    maxWidth: "1200px",
                }}
            >
                <h2
                    className="opacity-75"
                    style={{
                        margin: 0,
                    }}
                >
                    --&gt; Content goes here &lt;--
                </h2>
            </div>
        </main>
    );
}