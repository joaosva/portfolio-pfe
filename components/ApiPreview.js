import { useEffect, useState } from 'react'

export default function ApiPreview() {
  const [quotes, setQuotes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchQuotes() {
      try {
        const res = await fetch('https://api.allorigins.win/raw?url=https://api.quotable.io/quotes?limit=6')
        if (!res.ok) throw new Error('Erro na resposta da API')
        const data = await res.json()
        setQuotes(data.results || [])
      } catch (e) {
        console.error('Erro ao buscar API:', e)
      } finally {
        setLoading(false)
      }
    }
    fetchQuotes()
  }, [])

  if (loading) return <div className="card">Carregando frases...</div>
  if (!quotes.length) return <div className="card">Nenhuma frase encontrada.</div>

  return (
    <section className="quotes-grid">
      {quotes.map((q) => (
        <article key={q._id} className="quote-card">
          <p className="quote-text">“{q.content}”</p>
          <p className="quote-author">— {q.author}</p>
        </article>
      ))}
    </section>
  )
}
