import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="brand">
          <div className="avatar-name">
            <div className="avatar-placeholder">
              <img src="/images/avatar-placeholder.jpg" alt="Foto" />
            </div>
            <div className="name-block">
              <div className="name">João Silva</div>
              <div className="subtitle">Desenvolvedor • Sistemas para Internet</div>
            </div>
          </div>
        </div>
        <div className="links">
          <Link href="/">Home</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/academico">Acadêmico</Link>
          <Link href="/experiencia">Experiência</Link>
          <Link href="/projetos">Projetos</Link>
        </div>
      </div>
    </nav>
  )
}
