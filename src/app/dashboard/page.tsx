'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Topbar from '@/components/Topbar';
import MaterialCard from '@/components/MaterialCard';
import MaterialView from '@/components/MaterialView';
import { materials } from '@/data/materials';

export default function Dashboard() {
  const [currentId, setCurrentId] = useState<string | null>(null);

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
              isLocked={false} 
            />
          )
        )}
      </div>
    </div>
  );
}
