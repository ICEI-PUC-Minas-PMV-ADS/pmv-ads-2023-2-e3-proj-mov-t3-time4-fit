# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas. Essas classes servem de modelo para materializar os objetos que executarão na memória.

```mermaid
classDiagram
  class User {
    - id: int
    - name: string
    - username: string
    - phone: string
    - email: string
    - password: string
    - private: boolean
    + createAccount()
    + login()
    + updateProfile()
  }

  class Diary {
    - id: int
    - date: date
    - calories_consumed: float
    + addMeal()
    + calculateCalories()
  }

  class Meal {
    - id: int
    - name: string
    - time_of_day: string
    + addFood()
  }

  class FoodMeal {
    - id: int
    - quantity: float
    - total_calories: float
    + calculateCalories()
  }

  class Food {
    - id: int
    - name: string
    - calories: float
    - calories_unit: int
    - calories_unit_name: string
  }

  class DailyGoal {
    - id: int
    - date: date
    - calories_goal: float
    + setCaloriesGoal()
  }

  class Reminder {
    - id: int
    - content: string
    - reminder_date: datetime
    + setReminder()
  }

  User "1" *-- "1" DailyGoal
  User "1" *-- "1..*" Reminder
  User "1" *-- "1..*" Diary
  Diary "1" *-- "1..*" Meal
  Meal "1" *-- "1..*" FoodMeal
  FoodMeal "1" --* "1..*" Food

```

## Modelo ER

O Modelo ER representa através de um diagrama como as entidades (coisas, objetos) se relacionam entre si na aplicação interativa.]

```mermaid


erDiagram
  USER {
      int id
      string name
      string username
      string phone
      string email
      string password
      boolean private
  }
  DIARY {
      int id
      date date
      float calories_consumed
  }
  MEAL {
      int id
      string name
      string time_of_day
  }
  FOOD_MEAL {
      int id
      float quantity
      float total_calories
  }
  FOOD {
      int id
      string name
      float calories
      int calories_unit
      string calories_unit_name
  }
  DAILY_GOAL {
      int id
      date date
      float calories_goal
  }
  REMINDER {
      int id
      string content
      datetime reminder_date
  }

USER ||--o{ DIARY : owns
DIARY ||--o{ MEAL : contains
MEAL ||--o{ FOOD_MEAL : contains
FOOD ||--o{ FOOD_MEAL : sets
USER ||--o{ DAILY_GOAL : sets
USER ||--o{ REMINDER : sets

```


## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.
 
```mermaid


erDiagram
  USER {
      int id
      string name
      string username
      string phone
      string email
      string password
      boolean private
  }
  DIARY {
      int id PK
      int id_user FK
      date date
      float calories_consumed
  }
  MEAL {
      int id PK
      int id_diary FK
      string name
      string time_of_day
  }
  FOOD_MEAL {
      int id_meal PK, FK
      int id_food PK, FK
      float quantity
      float total_calories
  }
  FOOD {
      int id PK
      string name
      float calories
      int calories_unit
      string calories_unit_name
  }
  DAILY_GOAL {
      int id PK
      int id_user FK
      date date
      float calories_goal
  }
  REMINDER {
      int id PK
      int id_user FK
      string content
      datetime reminder_date
  }

USER ||--o{ DIARY : owns
DIARY ||--o{ MEAL : contains
MEAL ||--o{ FOOD_MEAL : contains
FOOD ||--o{ FOOD_MEAL : sets
USER ||--o{ DAILY_GOAL : sets
USER ||--o{ REMINDER : sets


```

## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

Descreva aqui qual(is) tecnologias você vai usar para resolver o seu problema, ou seja, implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.

Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## Hospedagem

Explique como a hospedagem e o lançamento da plataforma foi feita.

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)

## Qualidade de Software

Conceituar qualidade de fato é uma tarefa complexa, mas ela pode ser vista como um método gerencial que através de procedimentos disseminados por toda a organização, busca garantir um produto final que satisfaça às expectativas dos stakeholders.

No contexto de desenvolvimento de software, qualidade pode ser entendida como um conjunto de características a serem satisfeitas, de modo que o produto de software atenda às necessidades de seus usuários. Entretanto, tal nível de satisfação nem sempre é alcançado de forma espontânea, devendo ser continuamente construído. Assim, a qualidade do produto depende fortemente do seu respectivo processo de desenvolvimento.

A norma internacional ISO/IEC 25010, que é uma atualização da ISO/IEC 9126, define oito características e 30 subcaracterísticas de qualidade para produtos de software.
Com base nessas características e nas respectivas sub-características, identifique as sub-características que sua equipe utilizará como base para nortear o desenvolvimento do projeto de software considerando-se alguns aspectos simples de qualidade. Justifique as subcaracterísticas escolhidas pelo time e elenque as métricas que permitirão a equipe avaliar os objetos de interesse.

> **Links Úteis**:
>
> - [ISO/IEC 25010:2011 - Systems and software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — System and software quality models](https://www.iso.org/standard/35733.html/)
> - [Análise sobre a ISO 9126 – NBR 13596](https://www.tiespecialistas.com.br/analise-sobre-iso-9126-nbr-13596/)
> - [Qualidade de Software - Engenharia de Software 29](https://www.devmedia.com.br/qualidade-de-software-engenharia-de-software-29/18209/)
