import { Material } from '@/data/materials';

interface MaterialCardProps {
  material: Material;
  onSelect: (id: string) => void;
}

export default function MaterialCard({ material, onSelect }: MaterialCardProps) {
  return (
    <div className={`module-card ${material.module}`} onClick={() => onSelect(material.id)}>
      <div className="mc-top">
        <div className="mc-icon">{material.icon}</div>
        <span className="mc-num">{material.id.toUpperCase()}</span>
      </div>
      <div className="mc-title">{material.title}</div>
      <div className="mc-desc">{material.description}</div>
      <div className="mc-footer">
        <span className="mc-pill pill-time">⏱ {material.time}</span>
        <span className={`mc-pill nav-tag tag-${material.module}`}>
          {material.module === 'cin' ? 'Cinética' : material.module === 'eq' ? 'Equilíbrio' : 'Demo'}
        </span>
      </div>
    </div>
  );
}
