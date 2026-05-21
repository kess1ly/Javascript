export default function Servicos() {
  return (
    <div className="container">
      <h1 className="dashboard-title">Nossos Serviços 🐾</h1>

      <p className="dashboard-subtitle">
        No PetFlow, oferecemos cuidados completos para garantir a saúde,
        higiene e bem-estar do seu pet. Conheça nossos serviços abaixo.
      </p>

      <div className="dashboard-cards">

        <div className="card">
          <h3>Banho e Higienização</h3>
          <p>
            Realizamos banho completo com produtos especiais para cada tipo de
            pelagem, incluindo corte de unhas, limpeza de ouvidos e hidratação
            dos pelos.
          </p>
        </div>

        <div className="card">
          <h3>Tosa Higiênica e Estética</h3>
          <p>
            A tosa ajuda no conforto do pet e na manutenção da higiene.
            Trabalhamos com tosas padrão, personalizadas e de acordo com a raça.
          </p>
        </div>

        <div className="card">
          <h3>Consultas Veterinárias</h3>
          <p>
            Atendimento especializado para prevenção, diagnóstico e tratamento
            de doenças, garantindo a saúde e longevidade do seu animal.
          </p>
        </div>

        <div className="card">
          <h3>Vacinação</h3>
          <p>
            Mantemos o calendário de vacinação do seu pet atualizado, protegendo
            contra doenças graves e comuns em cães e gatos.
          </p>
        </div>

        <div className="card">
          <h3>Hospedagem Pet</h3>
          <p>
            Ambiente seguro e confortável para quando você precisar viajar.
            Seu pet fica bem cuidado, alimentado e supervisionado.
          </p>
        </div>

        <div className="card">
          <h3>Atendimento Personalizado</h3>
          <p>
            Cada pet recebe atenção especial de acordo com suas necessidades,
            comportamento e histórico de saúde.
          </p>
        </div>

      </div>
    </div>
  );
}