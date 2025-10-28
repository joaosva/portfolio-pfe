export default function handler(req, res) {
  if (req.method === 'GET') {
    // Lista de frases hardcoded (expanda com mais frases)
    const quotes = [
      { q: "A persistência é o caminho do êxito.", a: "Charles Chaplin" },
      { q: "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.", a: "Winston Churchill" },
      { q: "A única maneira de fazer um excelente trabalho é amar o que você faz.", a: "Steve Jobs" },
      // Adicione mais frases aqui
    ];
    // Seleciona uma frase aleatória
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.status(200).json([randomQuote]); // Retorna no formato esperado pela API externa
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}