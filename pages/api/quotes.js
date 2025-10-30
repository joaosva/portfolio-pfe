export default function handler(req, res) {
  if (req.method === 'GET') {
    // Lista de frases hardcoded (expanda com mais frases)
    const quotes = [
      { q: "A persistência é o caminho do êxito.", a: "Charles Chaplin" },
      { q: "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.", a: "Winston Churchill" },
      { q: "A única maneira de fazer um excelente trabalho é amar o que você faz.", a: "Steve Jobs" },
      { q: "A vida é 10% do que acontece com você e 90% de como você reage a isso." , a: "Charles R." },
      { q: "Você deve fazer as coisas que pensa que não pode fazer.", a: "Eleanor Roosevelt" },
      { q: "O sucesso não é definitivo, o fracasso não é fatal: é a coragem de continuar que conta.", a: "Winston S. Churchill" },
      { q: "A única limitação em nossa realização de amanhã são nossas dúvidas e incertezas de hoje.", a: "Franklin D. Roosevelt" },
      { q: "Se você puder sonhar, você pode fazer.", a: "Walt Disney" },
      { q: "Faça o que você pode, com o que você tem, onde você está.", a: "Theodore Roosevelt" },
      // Adicione mais frases aqui
    ];
    // Seleciona uma frase aleatória
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.status(200).json([randomQuote]); // Retorna no formato esperado pela API externa
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}