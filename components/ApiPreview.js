import { useEffect, useState } from "react";

export default function ApiPreview() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuote() {
      try {
        const res = await fetch("/api/quotes");
        const data = await res.json();
        setQuote(data[0]);
      } catch (error) {
        console.error("Erro ao carregar frase:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchQuote();
  }, []);

  return (
    <div className="card hover-scale">
      <h2>💬 Frase do Dia</h2>
      {loading ? (
        <p>Carregando...</p>
      ) : quote ? (
        <>
          <p style={{ fontStyle: "italic", marginTop: "10px" }}>
            “{quote.q}”
          </p>
          <p style={{ textAlign: "right", color: "#94a3b8" }}>— {quote.a}</p>
        </>
      ) : (
        <p>Não foi possível carregar a frase.</p>
      )}
    </div>
  );
}
