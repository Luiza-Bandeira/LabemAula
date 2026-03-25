import Link from 'next/link';

export default function Home() {
  return (
    <main>
      {/* ══ HERO ══ */}
      <div className="hero">
        <div className="hero-grid-pattern"></div>

        <div className="hero-left">
          <div className="badge">Ciências da Natureza · BNCC</div>
          <h1>Roteiros que fazem<br />a química <em>acontecer</em><br />de verdade.</h1>
          <p className="hero-sub">Atividades investigativas prontas para aplicar, com estrutura pedagógica completa — do relatório à conclusão. Para professores que querem aulas memoráveis sem gastar horas planejando.</p>
          <div className="hero-ctas">
            <Link href="#planos" className="btn-primary">Ver planos e preços →</Link>
            <Link href="#materiais" className="btn-ghost">Ver os materiais</Link>
            <Link href="/dashboard" className="btn-ghost" style={{ borderColor: 'var(--teal)', color: 'var(--teal-light)' }}>Acessar meus roteiros</Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-cards">
            <div className="hcard hcard-1">
              <div className="hcard-icon">🧪</div>
              <div className="hcard-label">Cinética Química</div>
              <div className="hcard-title">Influência da Temperatura</div>
              <div className="hcard-meta">Inclui relatório + análise + conclusão</div>
            </div>
            <div className="hcard hcard-2">
              <div className="hcard-icon">🐘</div>
              <div className="hcard-label">Experimento Demo</div>
              <div className="hcard-title">Pasta de Dente de Elefante</div>
              <div className="hcard-meta">Catalisadores na prática</div>
            </div>
            <div className="hcard hcard-3">
              <div className="hcard-icon">⚖️</div>
              <div className="hcard-label">Equilíbrio Químico</div>
              <div className="hcard-title">Reação Relógio & Garrafa Azul</div>
              <div className="hcard-meta">Conexão com o cotidiano</div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ STATS ══ */}
      <div className="stats-bar">
        <div className="stat">
          <div className="stat-num">9</div>
          <div className="stat-label">Roteiros prontos</div>
        </div>
        <div className="stat">
          <div className="stat-num">2</div>
          <div className="stat-label">Módulos temáticos</div>
        </div>
        <div className="stat">
          <div className="stat-num">100%</div>
          <div className="stat-label">Alinhado à BNCC</div>
        </div>
        <div className="stat">
          <div className="stat-num">∞</div>
          <div className="stat-label">Turmas atendidas</div>
        </div>
      </div>

      {/* ══ DIFERENCIAIS ══ */}
      <section id="diferenciais">
        <div className="section-tag">Por que é diferente</div>
        <h2>Não é só receita de laboratório.</h2>
        <p className="section-sub">Cada roteiro foi pensado para desenvolver raciocínio científico — não apenas seguir passos. É o que a BNCC pede e o que faz a diferença na aprendizagem.</p>

        <div className="diff-grid">
          <div className="diff-card" data-num="01">
            <div className="diff-icon">🔬</div>
            <h3>Abordagem Investigativa Real</h3>
            <p>Os alunos não apenas executam — eles observam, questionam e constroem explicações. Cada roteiro guia o pensamento científico do começo ao fim, com perguntas que provocam reflexão genuína.</p>
          </div>
          <div className="diff-card" data-num="02">
            <div className="diff-icon">🌍</div>
            <h3>Cotidiano como ponto de partida</h3>
            <p>Vinagre, comprimidos antiácidos, água oxigenada, altitude de La Paz. A química abstrata vira concreta porque parte do que o aluno já conhece. Isso gera engajamento real.</p>
          </div>
          <div className="diff-card" data-num="03">
            <div className="diff-icon">📋</div>
            <h3>Estrutura Pedagógica Completa</h3>
            <p>Introdução, materiais, procedimento, relatório, análise de dados e conclusão — tudo estruturato. Você recebe o roteiro pronto para aplicar, e o aluno tem um guia claro para aprender.</p>
          </div>
          <div className="diff-card" data-num="04">
            <div className="diff-icon">📚</div>
            <h3>Alinhado à BNCC</h3>
            <p>A metodologia investigativa é exatamente o que a Base Nacional Comum Curricular preconiza para Ciências da Natureza. Ótimo para escolas particulares e para concursos públicos docentes.</p>
          </div>
        </div>
      </section>

      {/* ══ MATERIAIS ══ */}
      <div className="materiais-bg" id="materiais">
        <div className="materiais-inner">
          <div className="section-tag">O que está incluído</div>
          <h2 style={{ color: 'var(--white)' }}>9 roteiros prontos para usar.</h2>
          <p className="section-sub" style={{ color: 'rgba(255,255,255,.55)', marginBottom: '48px' }}>Dois módulos completos cobrindo Cinética Química e Equilíbrio Químico, com experimentos para todas as realidades de laboratório.</p>

          <div className="materiais-grid">
            <div className="mat-card">
              <div className="mat-tag tag-cinetica">Cinética Química</div>
              <h4>Influência da Concentração</h4>
              <p>Vinagre + bicarbonato em diferentes concentrações. Mede o tempo de reação e conecta com a Teoria de Choques Efetivos.</p>
              <div className="mat-footer">⏱ Aula dupla · 🧪 Materiais simples</div>
            </div>
            <div className="mat-card">
              <div className="mat-tag tag-cinetica">Cinética Química</div>
              <h4>Influência da Superfície de Contato</h4>
              <p>Comprimido antiácido inteiro vs triturado. Relação direta com medicamentos e digestão no cotidiano dos alunos.</p>
              <div className="mat-footer">⏱ Aula simples · 🧪 Materiais simples</div>
            </div>
            <div className="mat-card">
              <div className="mat-tag tag-cinetica">Cinética Química</div>
              <h4>Influência da Temperatura</h4>
              <p>Banho-maria vs banho de gelo. Demonstra como a energia cinética das partículas afeta a velocidade da reação.</p>
              <div className="mat-footer">⏱ Aula dupla · 🔥 Usa lamparina</div>
            </div>
            <div className="mat-card">
              <div className="mat-tag tag-cinetica">Cinética Química</div>
              <h4>Influência do Catalisador</h4>
              <p>Zinco + H₂SO₄ com KMnO₄. O KNO₃ como catalisador. Conecta com a teoria de energia de ativação.</p>
              <div className="mat-footer">⏱ Aula dupla · ⚗ Lab equipado</div>
            </div>
            <div className="mat-card">
              <div className="mat-tag tag-demo">Experimento Demo</div>
              <h4>Pasta de Dente de Elefante</h4>
              <p>H₂O₂ concentrado + KI como catalisador. Espuma dramática que prende atenção. Conecta com enzima catalase no sangue.</p>
              <div className="mat-footer">⏱ 15 min · 🐘 Alto impacto visual</div>
            </div>
            <div className="mat-card">
              <div className="mat-tag tag-cinetica">Cinética Química</div>
              <h4>Rapidez das Reações</h4>
              <p>Mede volume de CO₂ produzido ao longo do tempo com diferentes volumes de vinagre. Gráficos e análise quantitativa.</p>
              <div className="mat-footer">⏱ Aula dupla · 📊 Dados quantitativos</div>
            </div>
            <div className="mat-card">
              <div className="mat-tag tag-cinetica">Cinética Química</div>
              <h4>Reação Relógio</h4>
              <p>Iodato de potássio + bissulfito. Sete concentrações diferentes revelam a relação entre concentração e velocidade.</p>
              <div className="mat-footer">⏱ Aula dupla · 🎨 Mudança de cor</div>
            </div>
            <div className="mat-card">
              <div className="mat-tag tag-equilibrio">Equilíbrio Químico</div>
              <h4>Garrafa Azul (Blue Bottle)</h4>
              <p>Glicose + NaOH + azul de metileno. Azul ao agitar, incolor em repouso. Equilibrio reversível em ação.</p>
              <div className="mat-footer">⏱ Aula dupla · 🔵 Visual impactante</div>
            </div>
            <div className="mat-card">
              <div className="mat-tag tag-equilibrio">Equilíbrio Químico</div>
              <h4>Permanganato + Amônia</h4>
              <p>Fenolftaleína, amônia, KMnO₄ e H₂O₂. Dois experimentos que mostram deslocamento de equilíbrio por temperatura e reagentes.</p>
              <div className="mat-footer">⏱ Aula dupla · 🌡 Temperatura</div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ PARA QUEM ══ */}
      <section id="paraquem">
        <div className="paraquem-grid">
          <div className="paraquem-visual">
            <ul className="checklist">
              <li><span className="check-icon">✓</span>Professores que querem economizar horas de planejamento semanal</li>
              <li><span className="check-icon">✓</span>Quem precisa de atividades práticas alinhadas à BNCC já na semana</li>
              <li><span className="check-icon">✓</span>Professores de escolas sem lab completo (vários experimentos usam materiais caseiros)</li>
              <li><span className="check-icon">✓</span>Quem quer engajar turmas difíceis com experimentos de alto impacto visual</li>
              <li><span className="check-icon">✓</span>Professores de Ensino Médio público ou particular de todo o Brasil</li>
            </ul>
          </div>
          <div className="paraquem-right">
            <div className="section-tag">Para quem é</div>
            <h2>Feito por quem está<br />em sala de aula.</h2>
            <p>Esses roteiros não foram criados em laboratório de pesquisa ou gerados por IA. Foram desenvolvidos por uma professora que conhece a realidade de dar aulas — o tempo escasso, as turmas diversas e a falta de materiais práticos prontos.</p>
            <Link href="#planos" className="btn-primary" style={{ display: 'inline-flex', background: 'var(--teal)', color: 'white' }}>Quero esses materiais →</Link>
          </div>
        </div>
      </section>

      {/* ══ PLANOS ══ */}
      <div className="planos-bg" id="planos">
        <div className="planos-inner">
          <div className="section-tag">Planos</div>
          <h2>Escolha como quer acessar.</h2>
          <p className="section-sub">Preços pensados para a realidade do professor brasileiro. Sem mensalidade, sem surpresas.</p>

          <div className="planos-grid">
            <div className="plano">
              <div className="plano-nome">Módulo Avulso</div>
              <div className="plano-preco"><span>R$</span> 27</div>
              <div className="plano-desc">Perfeito para experimentar com 1 tema</div>
              <ul className="plano-itens">
                <li>1 módulo à escolha (Cinética ou Equilíbrio)</li>
                <li>4–5 roteiros completos em PDF</li>
                <li>Gabarito de análise e conclusão</li>
                <li>Download imediato</li>
              </ul>
              <Link href="https://pay.hotmart.com/I104619180M?off=avulso" className="btn-plano">Comprar módulo</Link>
            </div>

            <div className="plano destaque">
              <div className="plano-badge-top">Mais vendido</div>
              <div className="plano-nome">Kit Completo</div>
              <div className="plano-preco"><span>R$</span> 47</div>
              <div className="plano-desc">Os 2 módulos + bônus exclusivos</div>
              <ul className="plano-itens">
                <li>Todos os 9 roteiros (Cinética + Equilíbrio)</li>
                <li>Gabaritos e sugestões de correção</li>
                <li>Guia de adaptação para lab simples</li>
                <li>Atualizações futuras grátis</li>
                <li>Download imediato</li>
              </ul>
              <Link href="https://pay.hotmart.com/I104619180M?off=completo" className="btn-plano">Garantir meu kit</Link>
            </div>

            <div className="plano">
              <div className="plano-nome">Licença Escola</div>
              <div className="plano-preco"><span>R$</span> 97</div>
              <div className="plano-desc">Para todo o departamento de Ciências</div>
              <ul className="plano-itens">
                <li>Uso liberado para todos os professores</li>
                <li>Todos os materiais do Kit Completo</li>
                <li>Versão editável (Word/Google Docs)</li>
                <li>Suporte via WhatsApp</li>
                <li>Nota fiscal disponível</li>
              </ul>
              <Link href="https://pay.hotmart.com/I104619180M?off=escola" className="btn-plano">Falar sobre a escola</Link>
            </div>
          </div>
        </div>
      </div>

      {/* ══ DEPOIMENTO PLACEHOLDER ══ */}
      <div className="depo-section">
        <div className="section-tag" style={{ marginBottom: '32px' }}>Depoimentos</div>
        <div className="depo-card">
          <p className="depo-text">Apliquei a pasta de dente de elefante no 1º ano e foi a primeira vez no ano que a turma inteira ficou em silêncio — de tão fascinada. O roteiro ainda ajudou a conectar com enzimas, que estava no programa da semana seguinte.</p>
          <div className="depo-author">— Professora de Química · Escola pública · São Paulo</div>
        </div>
      </div>

      {/* ══ CTA FINAL ══ */}
      <div className="cta-final">
        <div className="section-tag" style={{ color: 'var(--amber-light)', marginBottom: '20px' }}>Comece agora</div>
        <h2>Sua próxima aula prática<br />já pode estar pronta.</h2>
        <p>Baixe hoje, aplique essa semana. Simples assim.</p>
        <Link href="#planos" className="btn-primary" style={{ display: 'inline-flex', fontSize: '1rem', padding: '18px 40px' }}>Ver os planos →</Link>
      </div>

      {/* ══ FOOTER ══ */}
      <footer>
        <div className="footer-brand">⚗ Lab em <span>Aula</span></div>
        <p>© 2025 · Materiais desenvolvidos por professora Gabriela Rosa · Todos os direitos reservados</p>
      </footer>
    </main>
  );
}
