export default function Projetos() {
  const projects = [
    { title: 'Projeto Vercel 1', img: '/images/sample1.svg', link: 'https://vercel.com' },
    { title: 'Projeto Vercel 2', img: '/images/sample2.svg', link: 'https://vercel.com' },
    { title: 'Projeto Vercel 3', img: '/images/sample3.svg', link: 'https://vercel.com' }
  ]
  return (
    <div className="page">
      <h1>Projetos Desenvolvidos</h1>
      <p>Coloque aqui seus links e imagens dos projetos hospedados no Vercel.</p>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <a className="project-card hover-scale" key={i} href={p.link} target="_blank" rel="noreferrer">
            <img src={p.img} alt={p.title} />
            <h4>{p.title}</h4>
            <span>Ver no Vercel</span>
          </a>
        ))}
      </div>
    </div>
  )
}
