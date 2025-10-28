export default function Sobre() {
  const tecnologias = [
    "Next.js (13.x)",
    "React (18)",
    "Fetch API",
    "Arquitetura de Componentes (Navbar, Footer, ApiPreview)",
    "CSS Responsivo com Animações Hover"
  ];

  return (
    <div className="page">
      <h1>Sobre este Portfólio</h1>
      <p>
        Este projeto foi desenvolvido com foco em performance, clareza e design tech minimalista.
        Utiliza tecnologias modernas para criar uma experiência fluida e interativa.
      </p>

      <h2 style={{ marginTop: "24px", color: "#22d3ee", fontSize: "1.3rem" }}>
        Tecnologias Utilizadas
      </h2>

      <div className="tech-grid">
        {tecnologias.map((tech, index) => (
          <div key={index} className="tech-card">{tech}</div>
        ))}
      </div>
    </div>
  );
}
