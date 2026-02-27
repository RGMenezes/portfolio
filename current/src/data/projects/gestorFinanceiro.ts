import { BiLogoMongodb, BiLogoTypescript } from "react-icons/bi";
import { RiNextjsLine } from "react-icons/ri";
import IProject from "./iProjects";
import image from "@pub/images/IllustrationGestorFinanceiro.png";

const description = `
O **Gestor Financeiro** é uma aplicação web Full-stack de alta performance, projetada para oferecer controle total e visibilidade sobre a saúde financeira pessoal. O projeto foi construído com foco em **responsividade e segurança**, permitindo que o usuário gerencie receitas e despesas com uma interface intuitiva e dashboards em tempo real.

### **Engenharia e Escolhas Técnicas**
A aplicação utiliza **Next.js** para garantir renderização otimizada e SEO, aproveitando as rotas de API para uma comunicação eficiente com o backend. A tipagem estrita com **TypeScript** foi aplicada em todo o projeto para reduzir bugs em tempo de execução e garantir a integridade dos cálculos financeiros, que são o core da aplicação.

Para o armazenamento de dados, optei pelo **MongoDB**, permitindo uma estrutura de dados flexível e escalável que suporta a evolução contínua das categorias e fluxos financeiros dos usuários.

### **Funcionalidades Estratégicas**
* **Controle Dinâmico de Fluxo de Caixa:** Registro e categorização inteligente de transações financeiras com atualização instantânea de saldo.
* **Dashboards Analíticos:** Visualização clara de gastos e receitas através de componentes gráficos que facilitam o planejamento financeiro a longo prazo.
* **Design Mobile-First:** Interface totalmente responsiva desenvolvida para oferecer a mesma qualidade de experiência em desktops e dispositivos móveis.
* **Gestão de Categorias:** Sistema personalizado para organização de despesas, permitindo uma análise detalhada de onde os recursos estão sendo alocados.

### **Destaques do Projeto**
O projeto demonstra minha capacidade de entregar um produto **Full-stack completo**, desde a modelagem de dados NoSQL até a implementação de uma UI moderna e funcional. A solução foca em resolver o problema da desorganização financeira através de uma ferramenta técnica robusta e de baixa fricção para o usuário final.
`;

const gestorFinanceiro: IProject = {
  id: "gestorFinanceiro",
  title: "Gestor Financeiro",
  summary: "O Gestor Financeiro é um site intuitivo e responsivo que ajuda você a monitorar, controlar e planejar suas finanças pessoais de maneira eficiente.",
  description,
  image,
  technologies: [BiLogoTypescript, RiNextjsLine, BiLogoMongodb],
  link: "https://gestorfinanceirotart.vercel.app/",
  repoLink: "https://github.com/RGMenezes/gestor_financeiro",
  status: "Concluído",
};

export default gestorFinanceiro;