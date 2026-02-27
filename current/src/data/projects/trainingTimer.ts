import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiSupabaseLine } from "react-icons/ri";
import { SiExpo } from "react-icons/si"; 
import IProject from "./iProjects";
import image from "@pub/images/IllustrationTrainingTimer.png";

const description = `
O **Training Timer** é uma solução robusta de engenharia mobile voltada para o mercado de fitness, desenvolvida para atuar como um ecossistema de alta performance entre **Personal Trainers e Alunos**. O projeto surgiu da necessidade de uma ferramenta que unisse a precisão de um cronômetro de alta intensidade com a complexidade de um gestor de treinos analítico.

### **Arquitetura e Decisões Técnicas**
O maior desafio técnico do projeto foi garantir a **Disponibilidade Crítica (RNF05)**. Para isso, implementei uma arquitetura **Offline-First** utilizando **Zustand** para o gerenciamento de estado global e **MMKV** para persistência local. Essa escolha foi estratégica: o MMKV oferece leitura e escrita quase instantâneas através de JSI, eliminando os gargalos de performance comuns em soluções baseadas em AsyncStorage (RNF02).

A camada de sincronização foi construída sobre o **Supabase**, permitindo que os dados locais sejam espelhados na nuvem de forma resiliente. Implementei lógicas de resolução de conflitos ("Last Write Wins") para assegurar a integridade do histórico do usuário entre múltiplos dispositivos.

### **Soluções de Negócio Implementadas**
* **Ecossistema Dual:** Desenvolvimento de fluxos distintos para profissionais e alunos, permitindo prescrição, acompanhamento e feedback em tempo real (RB06).
* **Inteligência de Treino:** Algoritmos para cálculo de volume total de carga e frequência semanal, fornecendo dashboards de evolução baseados em dados reais de execução (RF13).
* **Interface Progressiva:** UI projetada para ser extremamente leve e fluida, garantindo acessibilidade e performance mesmo em hardware limitado.

### **Diferenciais de Desenvolvimento**
Diferente de projetos convencionais, o Training Timer foi estruturado sob rigorosos processos de governança. Toda a especificação segue a norma **IEEE 830 (ERS)**, e o ciclo de desenvolvimento é gerenciado via **GitHub Projects**, utilizando metodologias ágeis para transformar User Stories em entregáveis técnicos rastreáveis.
`;

const trainingTimer: IProject = {
  id: "trainingTimer",
  title: "Training Timer",
  summary:
        "O Training Timer é um aplicativo intuitivo que ajuda você a gerenciar seus treinos, controlando exercícios, sets, pausas e rodadas de forma prática e eficiente.",
  description,
  image,
  technologies: [FaReact, SiExpo, BiLogoTypescript, BiLogoPostgresql, RiSupabaseLine],
  repoLink: "https://github.com/Tart-development/training-timer-front-end",
  download: {
    path: "/files/trainingTimer/test-app.apk",
    name: "TrainingTimer.apk",
  },
  status: "Em Desenvolvimento",
};


export default trainingTimer;
