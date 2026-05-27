export default function Servicos() {
  const servicos = [
    {
      titulo: "Banho e Higienização",
      descricao: "Banho completo com produtos específicos, corte de unhas, limpeza de ouvidos e hidratação.",
      icone: "🧼"
    },
    {
      titulo: "Tosa Higiênica e Estética",
      descricao: "Tosas personalizadas de acordo com raça, conforto e estilo do pet.",
      icone: "✂️"
    },
    {
      titulo: "Consultas Veterinárias",
      descricao: "Atendimento especializado para prevenção, diagnóstico e tratamento de doenças.",
      icone: "🩺"
    },
    {
      titulo: "Vacinação",
      descricao: "Controle completo do calendário vacinal para proteção do seu pet.",
      icone: "💉"
    },
    {
      titulo: "Hospedagem Pet",
      descricao: "Ambiente seguro, confortável e supervisionado para estadias temporárias.",
      icone: "🏨"
    },
    {
      titulo: "Atendimento Personalizado",
      descricao: "Cuidados adaptados ao comportamento e necessidade de cada pet.",
      icone: "💖"
    }
  ];

  return (
    <div className="container">
      {/* HERO / CABEÇALHO */}
      <div className="servicos-hero">
        <h1>Nossos Serviços 🐾</h1>
        <p>Cuidado completo para saúde, higiene e bem-estar do seu pet.</p>
      </div>

      {/* GRID COM CARDS COMPACTOS */}
      <div className="servicos-grid">
        {servicos.map((s, index) => (
          <div key={index} className="servico-card-compacto">
            <div className="servico-icone-box">{s.icone}</div>
            <h3>{s.titulo}</h3>
            <p>{s.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
