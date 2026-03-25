'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import MaterialCard from '@/components/MaterialCard';
import MaterialView from '@/components/MaterialView';
import { materials } from '@/data/materials';

export default function Dashboard() {
  const [currentId, setCurrentId] = useState<string | null>(null);
  // Simulation: Plan should come from Auth/Cookies
  const [userPlan, setUserPlan] = useState<'avulso' | 'kit' | 'escola'>('avulso');

  const selectedMaterial = materials.find(m => m.id === currentId);

  return (
    <div className="main-wrapper">
      <Sidebar 
        materials={materials} 
        currentId={currentId} 
        onSelect={setCurrentId} 
      />
      
      <div className="main">
        <Topbar currentTitle={selectedMaterial ? selectedMaterial.title : 'Todos os roteiros'} />

        {currentId === null ? (
          <div className="dashboard">
            <div className="dash-header">
              <h1>Roteiros de Aula Prática</h1>
              <p>Selecione um roteiro para começar · {materials.length} atividades investigativas completas</p>
              
              <div style={{ marginTop: '20px', display: 'flex', gap: '8px' }}>
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>Simular Plano:</span>
                <button onClick={() => setUserPlan('avulso')} className={`btn-sm ${userPlan === 'avulso' ? 'btn-teal' : 'btn-outline'}`}>Avulso</button>
                <button onClick={() => setUserPlan('kit')} className={`btn-sm ${userPlan === 'kit' ? 'btn-teal' : 'btn-outline'}`}>Kit Completo</button>
              </div>
            </div>

            <div className="modules-grid">
              {materials.map(m => (
                <MaterialCard 
                  key={m.id} 
                  material={m} 
                  onSelect={setCurrentId} 
                />
              ))}
            </div>
          </div>
        ) : (
          selectedMaterial && (
            <MaterialView 
              material={selectedMaterial} 
              userPlan={userPlan} 
            />
          )
        )}
      </div>
    </div>
  );
}
