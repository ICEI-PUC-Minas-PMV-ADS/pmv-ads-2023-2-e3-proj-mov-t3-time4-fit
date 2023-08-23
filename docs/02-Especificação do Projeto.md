# Especificações do Projeto

A definição do problema e os pontos mais relevantes a serem tratados neste projeto foram consolidados com a participação dos usuários de outros aplicativo, por meio de interações, conversas e entrevistas. As informações coletadas foram organizadas e resumidas em personas e histórias de usuários.

## Personas

As personas levantadas durante o processo de entendimento do problema são apresentadas nas tabelas que se seguem. 

| **Camilla Silva** |      |      |
|------------------------------|------|------|
|![persona1](img/persona5.jpg) | **Idade:** 32 anos  | **Ocupação:** Gerente de Marketing em uma agência de publicidade. |
| **Motivações:** Camilla busca manter um equilíbrio entre sua carreira e saúde. Quer ter mais energia e disposição para lidar com seu trabalho exigente.	| **Frustrações:** Sente-se culpada por não conseguir seguir uma rotina saudável. A falta de tempo a impede de dedicar atenção suficiente à alimentação e atividade física. | **Hobbies, História:** Gosta de ler livros de autoajuda, fazer caminhadas curtas e relaxar assistindo a filmes. |

| **Lucas Pereira** |      |      |
|------------------------------|------|------|
|![persona2](img/persona7.jpg) | **Idade:** 27  anos  | **Ocupação:** Estudante universitário de engenharia. |
| **Motivações:** Lucas quer ter mais energia e concentração para seus estudos. Além disso, deseja melhorar sua aparência física e autoestima.	| **Frustrações:** A falta de conhecimento sobre nutrição e a tentação de escolhas alimentares rápidas e não saudáveis. | **Hobbies, História:** Gosta de praticar esportes como futebol e assistir a séries de TV. |

| **Maria Izabel** |      |      |
|------------------------------|------|------|
|![persona3](img/persona6.jpg) | **Idade:** 45 anos  | **Ocupação:** Nutricionista clínica e esportiva. |
| **Motivações:** Deseja oferecer aos pacientes orientações práticas e acompanhamento eficaz para alcançar suas metas de saúde.	| **Frustrações:** Enfrenta desafios ao manter o contato constante com seus pacientes para fornecer orientações e motivação.| **Hobbies, História:** Gosta de praticar ioga e ler artigos relacionados à saúde e nutrição.|


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:
|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Camilla Silva       | Deseja uma plataforma onde consiga encontrar a tabela nutricional de vários alimentos. | Para garantir que sua dieta está sendo seguida corretamente. |
|Camilla Silva        | Deseja poder compartilhar suas metas e dietas nas redes sociais. | Para que seus amigos possam acompanhar seu progresso.|
|Camilla Silva     |Deseja uma plataforma onde consiga realizar cadastro no aplicativo  | Para garantir a precisão das informações do seu dia a dia.|
|Lucas Pereira     | Deseja ter acesso a planos de refeições simples e saudáveis para cada semana.| Para Facilitar o planejamento de minhas refeições e evitar a tentação de optar por opções não saudáveis por falta de tempo. |
|Lucas Pereira      | Deseja uma plataforma onde consiga registrar suas refeições de forma rápida e fácil.| Para se manter organizado e evitar fast food. |
|Lucas Pereira      | Deseja deixar como favoritos suas metas atingidas no dia. | Para comparação do seu progresso ao longo do meses. |
|Maria Izabel       | Deseja uma plataforma onde seja enviados lembretes personalizados para os pacientes para incentivar a alimentação adequada.| Para garantir que os pacientes estejam seguindo as recomendações. |
|Maria Izabel    |   Deseja que os pacientes recebam notificações quando atingirem marcos importantes em seus objetivos de saúde. | Para celebrar as conquistas dos pacientes e fornecer motivação adicional para continuar em direção a um estilo de vida mais saudável.|
|Maria Izabel       |Deseja que seu pacientes tenham acesso a um contador de calorias que me mostre o valor nutricional de refeições. | Para tomar decisões informadas sobre porções e ingredientes, mantendo o controle de minha ingestão calórica.  |

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional. 

### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RF-01| Os usuários devem poder fazer cadastro e login usando suas credenciais. | Alta |
|RF-02| Os usuários devem ser capazes de criar e salvar seus planos alimentares, incluindo refeições, alimentos consumidos e quantidades. | Alta |
|RF-03| O aplicativo deve calcular e exibir a contagem total de calorias para o dia com base nos alimentos registrados.	| Alta |
|RF-04| Os usuários devem poder pesquisar e visualizar os planos alimentares de outros usuários. | Alta |
|RF-05| Os usuários devem poder pesquisar alimentos e suas calorias. | Média |
|RF-06| O aplicativo deve enviar notificações push para lembrar os usuários das refeições. | Média |
|RF-07| Os usuários podem definir metas de consumo calórico diário. | Baixa |
|RF-08| Os usuários devem ter acesso a um histórico de planos alimentares anteriores e informações nutricionais. | Baixa |
|RF-09| Os usuários podem compartilhar seus planos alimentares ou conquistas nas redes sociais. | Baixa | 


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-01| O sistema deve ser fácil de usar, intuitivo e ter uma interface amigável para os usuários | Alta | 
|RNF-02| O sistema deve ser responsivo permitindo a visualização em diferentes tamanhos de telas.  |  Média | 
|RNF-03| O sistema deve garantir a privacidade e a segurança das informações dos usuários |  Alta | 
|RNF-04| O sistema deve ser fácil de manter, atualizar e corrigir, sem afetar a disponibilidade ou a qualidade do serviço  | Baixa | 
|RNF-05| O sistema deve ser compatível com os principais sistemas operacionais (Android e o iOS)  |  Média | 

### Priorização de Requisitos

A técnica para priorização de requisitos utilizada foi a Escala de Três Níveis e a imagem abaixo retrata a análise realizada.
    
[![Priorização de Requisitos](https://mermaid.ink/img/pako:eNp1kk1qwzAUhK8itI6LLdlO7EWhPxS6SAkp3bTO4hGpiWhsJbIMSUNO00UPkotVlpxgGeqFsN43M7wBHfFSMo5zvGuAKaj0wxqULipkPi30hqOZElKJbzj_nn8kYhzN-a4RtdCydrJ9AHtRo5lslhI9l1uptMnhKAhu0bQxut7QOQ59x5tacV_eTZz2slcQdZswMDvcbTQMOOnzKWdiKKB9wT2I_VAQ_5Mwf0IBCqMcfYQ3k2SEzBku-ohYlIUtynxEncuiNPNQbNHYorHvSpyLtIjGHkotSrMWEeKhsUWUtij2AycWERsYJR7KLIptL3pxdYKXXvPUdaALj7nqiXXHA-a6Z5Ylic9ceWJ3pQNf135iM6MFHuGSqxIEM8_02CoLrNe85AXOzS8D9VXgojoZHTRavh6qJc4_YVPzEW62DDR_FLBSUF6nW6jepbzcT3-RLNXb?type=png)](https://mermaid.live/edit#pako:eNp1kk1qwzAUhK8itI6LLdlO7EWhPxS6SAkp3bTO4hGpiWhsJbIMSUNO00UPkotVlpxgGeqFsN43M7wBHfFSMo5zvGuAKaj0wxqULipkPi30hqOZElKJbzj_nn8kYhzN-a4RtdCydrJ9AHtRo5lslhI9l1uptMnhKAhu0bQxut7QOQ59x5tacV_eTZz2slcQdZswMDvcbTQMOOnzKWdiKKB9wT2I_VAQ_5Mwf0IBCqMcfYQ3k2SEzBku-ohYlIUtynxEncuiNPNQbNHYorHvSpyLtIjGHkotSrMWEeKhsUWUtij2AycWERsYJR7KLIptL3pxdYKXXvPUdaALj7nqiXXHA-a6Z5Ylic9ceWJ3pQNf135iM6MFHuGSqxIEM8_02CoLrNe85AXOzS8D9VXgojoZHTRavh6qJc4_YVPzEW62DDR_FLBSUF6nW6jepbzcT3-RLNXb)


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|RE-01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 04/12/2023 |
|RE-02| O sistema deve se restringir às tecnologias de React Native |
|RE-03| A equipe não pode subcontratar o desenvolvimento do trabalho   |


## Diagrama de Casos de Uso
```mermaid
graph TD
    A[Usuário] --> B
    A --> C
    A --> D
    A --> F

    subgraph Casos de Uso
       B[Cadastro e Login]
       C[Gerenciar plano <br>alimentar]
       D[Seguir plano <br> de outro usuário] -->|includes| I[Buscar plano]
       E[Visualizar histórico] -->|extends| C
       F[Visualizar <br>contagem de calorias] 
       G[Definir meta calórica] -->|extends| F
       H[Compartilhar <br>nas redes sociais] -->|extends| C
       J[Buscar alimentos] -->|extends| C
    end
```

# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio.

|                     | Cadastro e Login | Registro de Plano Alimentar | Pesquisar Planos de Usuário | Definir Metas e Restrições | Visualizar Histórico | Compartilhar em Redes Sociais | Receber Notificações |
|---------------------|:----------------:|:---------------------------:|:---------------------------:|:------------------------:|:-------------------:|:---------------------------:|:-------------------:|
| Cadastro e Login |-|-|-|-|-|-|-|
| Registro de Plano Alimentar |-|-|X|-|X|X|X|
| Pesquisar Planos de Usuário |-|X|-|-|-|-|-|
| Definir Metas e Restrições  |-|-|-|-|-|-|X|
| Visualizar Histórico |-|X|-|-|-|-|-|
| Compartilhar em Redes Sociais |-|X|-|-|-|-|-|
| Receber Notificações |-|X|-|X|-|-|-|

A matriz ainda não rastreou todos os artefatos da aplicação pois existem documentações e codificações pendentes. Assuntos como casos de teste e diagramas ainda não estão previstos nessa versão da matriz, mas serão implementados ao serem criados.

# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordena tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

O gráfico de Gantt ou diagrama de Gantt também é uma ferramenta visual utilizada para controlar e gerenciar o cronograma de atividades de um projeto. Com ele, é possível listar tudo que precisa ser feito para colocar o projeto em prática, dividir em atividades e estimar o tempo necessário para executá-las.

```mermaid
gantt
    title Diagrama de Gantt
    todayMarker off
    dateFormat  YYYY-MMM-DD
    axisFormat %d/%b/%y

    section 1ª Etapa
    Encontro inicial :done, 2023-08-01, 1d
    Definição do tema     :done, 7d
    Contextualização    :done, 9d
    Especificação do Projeto   :active, 10d

    section 2ª Etapa
    Metodologia      :a1, 2023-08-28  , 7d
    Projeto de Interface    :after a1, 11d
    Arquitetura da solução :after a1, 11d 
    Início desenvolvimento : 10d
    Funcionalidades novas  :milestone, 2023-09-25, 0d 

    section 3ª Etapa
    Programação de Funcionalidades : 2023-09-25  , 17d
    Registro de Testes      :4d
    Funcionalidades novas  :milestone, 2023-10-16, 0d 

    section 4ª Etapa
    Programação de Funcionalidades :2023-10-16  , 15d
    Registro de Testes      :3d
    Funcionalidades novas  :milestone, 0d 
    Programação de Funcionalidades :15d
    Registro de Testes      :2d
    Funcionalidades novas  :milestone, 0d

    section 5ª Etapa
    Considerações finais  :2023-11-20  , 2d
    Entrega da solução :6d
    Apresentação :6d
```

## Gerenciamento de Equipe

O gerenciamento adequado de tarefas contribuirá para que o projeto alcance altos níveis de produtividade. Por isso, é fundamental que ocorra a gestão de tarefas e de pessoas, de modo que os times envolvidos no projeto possam ser facilmente gerenciados. 

```mermaid
gantt
    title Diagrama de Gantt
    todayMarker off
    dateFormat  YYYY-MMM-DD
    axisFormat %d/%b/%y

    section Gerente de Projetos
    Definição do problema : 2023-08-01, 14d
    Especificação do projeto    : 2023-08-07, 21d
    Alinhamentos  : 2023-08-28, 14d

    section Time de Desenvolvedores
    Projeto de Interface      : 2023-08-28, 14d
    Desenvolvimento da solução    : 63d

    section Time de QA
    Testes da aplicação : 2023-09-18  , 63d

    section Time de Suporte
    Entrega da solução  :2023-11-20  , 14d
```

## Gestão de Orçamento

| ID | Recurso | Quantidade | Custo Unitário | Custo Mensal | Custo Semestral |
|--|--|--|--|--|--|
| 1 | Recursos Humanos |  |  |  |  |
|  | Gestor de Projetos |  |  |  |  |
|  | Desenvolvedor React Sr. |  |  |  |  |
|  | Designer UX/UI |  |  |  |  |
| 2 | Hardware |  |  |  |  |
|  | Notebook |  |  |  |  |
| 3 | Software |  |  |  |  |
|  | Licenças |  |  |  |  |
|  | Ferramentas |  |  |  |  |
| 4 | Serviços|  |  |  |  |
|  | Azure |  |  |  |  |
|  |  |  | **Total** | R$ | R$ |
