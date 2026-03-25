import { useState, useEffect } from 'react';
import { Material } from '@/data/materials';
import Timer from '@/components/Timer';

interface MaterialViewProps {
  material: Material;
  userPlan: 'avulso' | 'kit' | 'escola';
}

export default function MaterialView({ material, userPlan }: MaterialViewProps) {
  const [activeTab, setActiveTab] = useState<'materiais' | 'procedimento' | 'relatorio'| 'conclusao'>('materiais');
  const [checkedMaterials, setCheckedMaterials] = useState<string[]>([]);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  
  // Content Locking Logic
  const hasAccess = 
    userPlan === 'escola' || 
    (userPlan === 'kit') || 
    (userPlan === 'avulso' && material.plan === 'avulso');

  if (!hasAccess) {
    return (
      <div className="material-view open">
        <div className="mat-hero" style={{ background: 'var(--ink2)', textAlign: 'center', padding: '100px 40px' }}>
          <div className="mc-icon" style={{ margin: '0 auto 24px', width: '80px', height: '80px', fontSize: '40px' }}>🔒</div>
          <h1 style={{ color: 'var(--white)' }}>Módulo Bloqueado</h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '500px', margin: '16px auto 32px' }}>
            Este roteiro faz parte do <strong>{material.plan === 'kit' ? 'Kit Completo' : 'Licença Escola'}</strong>. 
            Seu plano atual é o Módulo Avulso.
          </p>
          <a href="/#planos" className="btn-primary" style={{ display: 'inline-flex' }}>Fazer Upgrade agora →</a>
        </div>
      </div>
    );
  }

  const toggleMaterial = (name: string) => {
    setCheckedMaterials(prev => 
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    );
  };

  const toggleStep = (idx: number) => {
    setCompletedSteps(prev => 
      prev.includes(idx) ? prev.filter(i => i !== idx) : [...prev, idx]
    );
  };

  return (
    <div className="material-view open">
      <div className={`mat-hero ${material.module}-hero`}>
        <div className="mat-hero-inner">
          <div className={`mat-module-tag tag-${material.module}-hero`}>
            {material.module === 'cin' ? 'Cinética Química' : material.module === 'eq' ? 'Equilíbrio Químico' : 'Demonstração Special'} · {material.id}
          </div>
          <h1>{material.title}</h1>
          <div className="mat-hero-meta">
            <span>⏱ {material.time}</span>
            <span>📊 {material.difficulty}</span>
          </div>
          <div className={`mat-intro ${material.module}-border`}>
            {material.intro}
          </div>
        </div>
      </div>

      <div className="mat-tabs">
        <div className={`mat-tab ${activeTab === 'materiais' ? 'active' : ''}`} onClick={() => setActiveTab('materiais')}>
          <span className="tab-num">1</span> Materiais
        </div>
        <div className={`mat-tab ${activeTab === 'procedimento' ? 'active' : ''}`} onClick={() => setActiveTab('procedimento')}>
          <span className="tab-num">2</span> Procedimento
        </div>
        <div className={`mat-tab ${activeTab === 'relatorio' ? 'active' : ''}`} onClick={() => setActiveTab('relatorio')}>
          <span className="tab-num">3</span> Relatório
        </div>
        <div className={`mat-tab ${activeTab === 'conclusao' ? 'active' : ''}`} onClick={() => setActiveTab('conclusao')}>
          <span className="tab-num">4</span> Conclusão
        </div>
      </div>

      <div className={`tab-content ${activeTab === 'materiais' ? 'active' : ''}`}>
        <div className="mat-list-title">Lista de Materiais</div>
        <div className="mat-list">
          {material.materials.map(m => (
            <div 
              key={m} 
              className={`mat-item ${checkedMaterials.includes(m) ? 'checked' : ''}`}
              onClick={() => toggleMaterial(m)}
            >
              <div className="mat-check"></div>
              <span className="mat-item-name">{m}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={`tab-content ${activeTab === 'procedimento' ? 'active' : ''}`}>
        <Timer id={material.id} />
        <div className="steps">
          {material.steps.map((s, i) => (
            <div 
              key={i} 
              className={`step ${completedSteps.includes(i) ? 'done' : ''}`}
              onClick={() => toggleStep(i)}
            >
              <div className="step-num">
                {completedSteps.includes(i) ? '✓' : i + 1}
              </div>
              <div className="step-body">
                <div className="step-text">{s.text}</div>
                {s.note && <div className="step-note">{s.note}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`tab-content ${activeTab === 'relatorio' ? 'active' : ''}`}>
        <p style={{ color: 'rgba(255,255,255,0.4)', textAlign: 'center', padding: '40px' }}>
          Este campo é para anotações do professor/aluno durante a aula.
        </p>
        <textarea className="report-input" placeholder="Anote suas observações aqui..." defaultValue={""} />
      </div>

      <div className={`tab-content ${activeTab === 'conclusao' ? 'active' : ''}`}>
        {material.equations && (
          <>
            <div className="sec-divider"><span className="sec-divider-line"></span><span className="sec-divider-label">Equações e Reações</span><span className="sec-divider-line"></span></div>
            {material.equations.map((eq, i) => (
              <div key={i} className="equation-box">
                <div className="eq-line">{eq.line}</div>
                <span className="eq-label">{eq.label}</span>
              </div>
            ))}
          </>
        )}
        <div className="conclusion-items">
          {material.conclusion.map((c, i) => (
            <div key={i} className="conclusion-item">
              <div className="conclusion-q">
                <span className="conclusion-q-num">Q{i+1}</span>
                {c.q}
              </div>
              <textarea className="report-input" placeholder={c.placeholder} defaultValue={""} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
