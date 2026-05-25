export default function Servicos() {
  const servicos = [
    {
      titulo: "Banho e Higienização",
      descricao:
        "Banho completo com produtos específicos, corte de unhas, limpeza de ouvidos e hidratação."
    },
    {
      titulo: "Tosa Higiênica e Estética",
      descricao:
        "Tosas personalizadas de acordo com raça, conforto e estilo do pet."
    },
    {
      titulo: "Consultas Veterinárias",
      descricao:
        "Atendimento especializado para prevenção, diagnóstico e tratamento de doenças."
    },
    {
      titulo: "Vacinação",
      descricao:
        "Controle completo do calendário vacinal para proteção do seu pet."
    },
    {
      titulo: "Hospedagem Pet",
      descricao:
        "Ambiente seguro, confortável e supervisionado para estadias temporárias."
    },
    {
      titulo: "Atendimento Personalizado",
      descricao:
        "Cuidados adaptados ao comportamento e necessidade de cada pet."
    }
  ];

  return (
    <div className="container servicos-v2">

      {/* HERO */}
      <div className="servicos-hero">
        <h1>Nossos Serviços 🐾</h1>
        <p>Cuidado completo para saúde, higiene e bem-estar do seu pet.</p>
      </div>

      {/* LISTA MODERNA */}
      <div className="servicos-lista">

        {servicos.map((s, index) => (
          <div
            key={index}
            className={`servico-item ${index % 2 === 0 ? "left" : "right"}`}
          >

            <div className="servico-icon">
              🐾
            </div>

            <div className="servico-content">
              <h3>{s.titulo}</h3>
              <p>{s.descricao}</p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}
