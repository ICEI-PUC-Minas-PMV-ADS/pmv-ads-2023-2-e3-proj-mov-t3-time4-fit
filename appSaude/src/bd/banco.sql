-- Criação do Banco de Dados
CREATE DATABASE EatSmart;

-- Uso do Banco de Dados
USE EatSmart;

-- Tabela de Usuários
CREATE TABLE USER (
    id INT PRIMARY KEY,
    user_name VARCHAR(255),
    username VARCHAR(255),
    phone VARCHAR(15),
    email VARCHAR(255),
    pass VARCHAR(255),
    private BIT
);

-- Tabela de Diários
CREATE TABLE DIARY (
    id INT PRIMARY KEY,
    id_user INT,
    diary_date DATE,
    calories_consumed FLOAT,
    FOREIGN KEY (id_user) REFERENCES USER(id)
);

-- Tabela de Refeições
CREATE TABLE MEAL (
    id INT PRIMARY KEY,
    id_diary INT,
    name VARCHAR(255),
    time_of_day VARCHAR(50),
    FOREIGN KEY (id_diary) REFERENCES DIARY(id)
);

-- Tabela de Alimentos em Refeições
CREATE TABLE FOOD_MEAL (
    id_meal INT,
    id_food INT,
    quantity FLOAT,
    total_calories FLOAT,
    PRIMARY KEY (id_meal, id_food),
    FOREIGN KEY (id_meal) REFERENCES MEAL(id),
    FOREIGN KEY (id_food) REFERENCES FOOD(id)
);

-- Tabela de Alimentos
CREATE TABLE FOOD (
    id INT PRIMARY KEY,
    food_name VARCHAR(255),
    calories FLOAT,
    calories_unit INT,
    calories_unit_name VARCHAR(50)
);

-- Tabela de Metas Diárias
CREATE TABLE DAILY_GOAL (
    id INT PRIMARY KEY,
    id_user INT,
    goal_date DATE,
    calories_goal FLOAT,
    FOREIGN KEY (id_user) REFERENCES USER(id)
);

-- Tabela de Lembretes
CREATE TABLE REMINDER (
    id INT PRIMARY KEY,
    id_user INT,
    content TEXT,
    reminder_date DATETIME,
    FOREIGN KEY (id_user) REFERENCES USER(id)
);
