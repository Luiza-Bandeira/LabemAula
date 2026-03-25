import { Material, MaterialModule } from '@/data/materials';

interface SidebarProps {
  materials: Material[];
  currentId: string | null;
  onSelect: (id: string | null) => void;
}

export default function Sidebar({ materials, currentId, onSelect }: SidebarProps) {
  const cinMaterials = materials.filter(m => m.module === 'cin');
  const eqMaterials = materials.filter(m => m.module === 'eq');
  const demoMaterials = materials.filter(m => m.module === 'demo');

  return (
    <nav className="sidebar">
      <div className="sidebar-logo">
        <div className="brand" onClick={() => onSelect(null)} style={{ cursor: 'pointer' }}>
          <div className="brand-icon">⚗</div>
          Lab em <span>Aula</span>
        </div>
      </div>

      <div className="sidebar-section-label">Visão Geral</div>
      <div 
        className={`nav-item ${currentId === null ? 'active' : ''}`} 
        onClick={() => onSelect(null)}
      >
        <div className="nav-icon">⊞</div>
        <div className="nav-label">Todos os roteiros</div>
      </div>

      <div className="sidebar-section-label">Cinética Química</div>
      {cinMaterials.map(m => (
        <div 
          key={m.id}
          className={`nav-item ${currentId === m.id ? 'active' : ''}`}
          onClick={() => onSelect(m.id)}
        >
          <div className="nav-icon">{m.icon}</div>
          <div className="nav-label">{m.title}</div>
          <span className="nav-tag tag-cin">CIN</span>
        </div>
      ))}

      <div className="sidebar-section-label">Equilíbrio Químico</div>
      {eqMaterials.map(m => (
        <div 
          key={m.id}
          className={`nav-item ${currentId === m.id ? 'active' : ''}`}
          onClick={() => onSelect(m.id)}
        >
          <div className="nav-icon">{m.icon}</div>
          <div className="nav-label">{m.title}</div>
          <span className="nav-tag tag-eq">EQ</span>
        </div>
      ))}

      <div className="sidebar-section-label">Demo Especial</div>
      {demoMaterials.map(m => (
        <div 
          key={m.id}
          className={`nav-item ${currentId === m.id ? 'active' : ''}`}
          onClick={() => onSelect(m.id)}
        >
          <div className="nav-icon">{m.icon}</div>
          <div className="nav-label">{m.title}</div>
          <span className="nav-tag tag-demo">DEMO</span>
        </div>
      ))}
    </nav>
  );
}
