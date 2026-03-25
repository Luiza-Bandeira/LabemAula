'use client';

import React, { useState } from 'react';
import { Material } from '../data/materials';
import Timer from './Timer';

interface MaterialViewProps {
  material: Material;
  isLocked: boolean;
}

export default function MaterialView({ material, isLocked }: MaterialViewProps) {
  const [activeTab, setActiveTab] = useState('materiais');
  const [checklist, setChecklist] = useState<Record<string, boolean>>({});
  const [stepsDone, setStepsDone] = useState<Record<number, boolean>>({});

  const toggleCheck = (item: string) => {
    setChecklist(prev => ({ ...prev, [item]: !prev[item] }));
  };

  const toggleStep = (idx: number) => {
    setStepsDone(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const tabs = [
    { id: 'materiais', label: '1 Materiais' },
    { id: 'procedimento', label: '2 Procedimento' },
    { id: 'relatorio', label: '3 Relatório' },
    { id: 'analise', label: '4 Análise' },
    { id: 'conclusao', label: '5 Conclusão' },
  ];

  if (isLocked) {
    return (
      <div className="material-view open">
        <div className={`mat-hero ${material.module}-hero`}>
          <div className="mat-hero-inner">
            <div className={`mat-module-tag tag-${material.module}-hero`}>{material.moduleTag}</div>
            <h1>{material.title}</h1>
            <div className="mat-hero-meta">
              {material.heroMeta.map((meta, i) => <span key={i}>{meta}</span>)}
            </div>
            <div className="mat-intro" style={{ borderLeftWidth: '3px', borderLeftStyle: 'solid' }}>
              {material.intro}
            </div>
          </div>
        </div>
        <div style={{ padding: '60px 40px', textAlign: 'center', background: 'rgba(0,0,0,0.2)' }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>🔒</div>
          <h2 style={{ fontFamily: 'DM Serif Display, serif', fontSize: '2rem', marginBottom: '10px' }}>Conteúdo Bloqueado</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '500px', margin: '0 auto 30px' }}>
            Este roteiro completo faz parte do <strong>Kit Lab em Aula</strong> ou da <strong>Licença Escola</strong>.
          </p>
          <button className="btn-sm btn-teal" style={{ margin: '0 auto', padding: '12px 30px', fontSize: '1rem' }}>
            Quero ter acesso completo
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="material-view open">
      <div className={`mat-hero ${material.module}-hero`}>
        <div className="mat-hero-inner">
          <div className={`mat-module-tag tag-${material.module}-hero`}>{material.moduleTag}</div>
          <h1>{material.title}</h1>
          <div className="mat-hero-meta">
            {material.heroMeta.map((meta, i) => <span key={i}>{meta}</span>)}
          </div>
          <div className="mat-intro" style={{ borderLeftWidth: '3px', borderLeftStyle: 'solid' }}>
            {material.intro}
          </div>
        </div>
      </div>

      <div className="mat-tabs">
        {tabs.map(tab => (
          <div 
            key={tab.id}
            className={`mat-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      <div className="tab-content active">
        {activeTab === 'materiais' && (
          <>
            <div className="mat-list-title">Lista de Materiais</div>
            <p className="mat-checklist-tip">☑ Clique nos itens para marcar como separado</p>
            <div className="mat-list">
              {material.materials.map((item, i) => (
                <div 
                  key={i} 
                  className={`mat-item ${checklist[item] ? 'checked' : ''}`}
                  onClick={() => toggleCheck(item)}
                >
                  <div className="mat-check"></div>
                  <span className="mat-item-name">{item}</span>
                </div>
              ))}
            </div>
            {material.callouts?.map((callout, i) => (
              <div key={i} className={`callout ${callout.type}`}>
                <div className="callout-icon">{callout.icon}</div>
                <div>{callout.text}</div>
              </div>
            ))}
          </>
        )}

        {activeTab === 'procedimento' && (
          <>
            <Timer id={material.id} />
            <div className="steps">
              {material.steps.map((step, i) => (
                <div 
                  key={i} 
                  className={`step ${stepsDone[i] ? 'done' : ''}`}
                  onClick={() => toggleStep(i)}
                >
                  <div className="step-num">
                    <span className="step-done-icon">✓</span>
                    <span className="step-idx">{i + 1}</span>
                  </div>
                  <div className="step-body">
                    <div className="step-text" dangerouslySetInnerHTML={{ __html: step.text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                    {step.note && <div className="step-note">{step.note}</div>}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'relatorio' && (
          <>
            <div className="report-section">
              <div className="report-label">📝 O que aconteceu em cada etapa?</div>
              <textarea className="report-input" rows={4} placeholder="Descreva suas observações..."></textarea>
            </div>
            {material.dataTables?.map((table, i) => (
              <React.Fragment key={i}>
                {table.title && <div className="mat-list-title" style={{ fontSize: '1rem', marginTop: '20px' }}>{table.title}</div>}
                <table className="data-table">
                  <thead>
                    <tr>
                      {table.headers.map((h, j) => <th key={j}>{h}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row, j) => (
                      <tr key={j}>
                        {row.map((cell, k) => (
                          <td key={k}>
                            {cell === '—' ? <input type="text" placeholder="—" /> : cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </React.Fragment>
            ))}
          </>
        )}

        {activeTab === 'analise' && (
          <>
            <div className="report-section">
              <div className="report-label">📊 Análise dos Resultados</div>
              <textarea className="report-input" rows={4} placeholder="Como você interpreta o que aconteceu?"></textarea>
            </div>
            <div className="report-section">
              <div className="report-label">⚠️ Fontes de Erro</div>
              <textarea className="report-input" rows={3} placeholder="O que pode ter afetado a precisão?"></textarea>
            </div>
          </>
        )}

        {activeTab === 'conclusao' && (
          <>
            {material.equationBoxes?.map((box, i) => (
              <React.Fragment key={i}>
                <div className="sec-divider"><span className="sec-divider-line"></span><span className="sec-divider-label">Equação</span><span className="sec-divider-line"></span></div>
                <div className="equation-box">
                  {box.lines.map((line, j) => (
                    <div key={j} className="eq-line">{line}</div>
                  ))}
                  <span className="eq-label">{box.label}</span>
                </div>
              </React.Fragment>
            ))}
            <div className="conclusion-items">
              {material.conclusion.map((item, i) => (
                <div key={i} className="conclusion-item">
                  <div className="conclusion-q">
                    <span className="conclusion-q-num">Q{i + 1}</span>
                    <span style={{ marginLeft: '12px' }}>{item.q}</span>
                  </div>
                  <textarea className="report-input" rows={3} placeholder={item.placeholder}></textarea>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
