interface TopbarProps {
  currentTitle: string;
}

export default function Topbar({ currentTitle }: TopbarProps) {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <button className="hamburger">☰</button>
        <div className="breadcrumb">
          <span>Lab em Aula</span>
          <span className="sep">›</span>
          <span className="current">{currentTitle}</span>
        </div>
      </div>
      <div className="topbar-actions">
        <button className="btn-sm btn-outline" onClick={() => window.print()}>🖨 Imprimir</button>
        <button className="btn-sm btn-teal">Minha Conta</button>
      </div>
    </div>
  );
}
