import ApiPreview from '../components/ApiPreview'

export default function Home() {
  return (
    <div className="home">
      <section className="hero card hover-scale">
        <div style={{display:'flex',alignItems:'center',gap:16}}>
          <div style={{width:84,height:84,borderRadius:999,overflow:'hidden',border:'3px solid rgba(255,255,255,0.06)'}}>
            <img src="/images/avatar-placeholder.jpg" alt="Foto" style={{width:'100%',height:'100%'}} />
          </div>
          <div>
            <h1 className="hero-title">João Silva</h1>
            <p className="hero-sub">Desenvolvedor | Estudante de Sistemas para Internet | Apaixonado por idiomas e fotografia</p>
          </div>
        </div>
        <div className="cta" style={{marginTop:12}}>
          <a className="btn" href="/projetos">Ver projetos</a>
          <a className="btn ghost" href="/sobre">Sobre o projeto</a>
        </div>
      </section>

      <section className="cards-section">
        <h2>Frases & Inspiração</h2>
        <ApiPreview />
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skill-list dynamic-skills">
          <div className="skill-card hover-scale">
            <img src="/images/java.png" alt="Java" />
            <span>Java</span>
          </div>
          <div className="skill-card hover-scale">
            <img src="/images/js.png" alt="JavaScript" />
            <span>JavaScript</span>
          </div>
          <div className="skill-card hover-scale">
            <img src="/images/react.png" alt="React" />
            <span>React</span>
          </div>
          <div className="skill-card hover-scale">
            <img src="/images/nextjs.png" alt="Next.js" />
            <span>Next.js</span>
          </div>
          <div className="skill-card hover-scale">
            <img src="/images/html.png" alt="HTML" />
            <span>HTML</span>
          </div>
        </div>
      </section>
    </div>
  )
}
