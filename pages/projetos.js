export default function Projetos() {
  const projects = [
    { title: 'Jogo da Forca', img: '/images/forca.png', link: 'https://jogo-da-forca-seven-tawny.vercel.app/' },
    { title: 'Perfume-card', img: '/images/perfume.png', link: 'https://joaosva.github.io/perfume-card/' },
    { title: 'Lista de Produtos', img: '/images/cart.png', link: 'https://joaosva.github.io/product-list-with-card/' }
  ]
  return (
    <div className="page">
      <h1>Projetos Desenvolvidos</h1>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <a className="project-card hover-scale" key={i} href={p.link} target="_blank" rel="noreferrer">
            <img src={p.img} alt={p.title} />
            <h4>{p.title}</h4>
            <span>Acesse</span>
          </a>
        ))}
      </div>
    </div>
  )
}
