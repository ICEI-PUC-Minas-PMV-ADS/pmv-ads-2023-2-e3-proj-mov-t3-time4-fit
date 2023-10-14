# Plano de Testes de Software

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.


 
| **Caso de Teste** 	| **CT-01 – Cadastro e login usando credenciais.** 	|
|:---:	|:---:	|
|	Requisito Associado 	| RF-01 - Os usuários devem poder fazer cadastro e login usando suas credenciais. |
| Objetivo do Teste 	| Verificar se o usuário consegue se cadastrar e logar na aplicação. |
| Passos 	| - Acessar o serviço <br> - Clicar em "Criar Perfil" <br> - Preencher os campos obrigatórios (e-mail, nome, sobrenome, celular, senha, confirmação de senha) <br> - Aceitar os termos de uso <br> - Clicar em "Registrar" <br> - Fechar a aplicação e realizar a iniciação dela novamente. <br> - Logar com seu usuário e senha cadastrados e verificar se o usuário foi logado.|
|Critério de Êxito | - O cadastro foi realizado com sucesso e salvo no sistema |


| **Caso de Teste** 	| **CT-02 – Criação e salvamento de planos alimentares, incluindo refeições, alimentos consumidos e quantidades.**	|
|:---:	|:---:	|
|Requisito Associado | RF-02	-Os usuários devem ser capazes de criar e salvar seus planos alimentares, incluindo refeições, alimentos consumidos e quantidades. |
| Objetivo do Teste 	| Verificar se o usuário serão capazes de criar e salvar seus planos alimentares, incluindo refeições, alimentos consumidos e quantidades. |
| Passos 	| - Acessar a aplicação <br> - Logar com seu usuário e senha cadastrados <br> - Na página "home" do app, clicar em cadastrar refeição  <br> - Cadastrar as informações básicas sobre a refeição, informações sobre porção e tabela nutricional, e logo após, clicar em adicionar a lista. <br> - Após adicionar, o aplicativo redireciona para a página home, já com as informações sobre refeições atualizados. <br> - Clicar nos três pontinhos ao lado da refeição cadastrada e selecionar a opção editar. <br> - Editar alguma informação sobre o alimento anterior e clicar em salvar. <br> - Na página Home, clicar na refeição editada e conferir se as alterações foram salvas. <br> - Clicar nos três pontinhos ao lado da refeição cadastrada, e selecionar a opção excluir. <br> - Verificar se a refeição foi excluído corretamente da lista de refeições. |
|Critério de Êxito | - Os cadastros e alterações das refeições e alimentos foram realizados com sucesso. |


| **Caso de Teste** 	| **CT-03 – Verificação do cálculo das calorias consumidas no dia pelo usuário.**	|
|:---:	|:---:	|
|Requisito Associado | RF-03	O aplicativo deve calcular e exibir a contagem total de calorias para o dia com base nos alimentos registrados. <br> - RF-07	Os usuários podem definir metas de consumo calórico diário.|
| Objetivo do Teste 	| Verificar se o aplicativo irá realizar o cálculo das calorias consumidas no dia pelo usuário. |
| Passos 	| - Acessar a aplicação <br> - Logar com seu usuário e senha cadastrados <br> - Na página "home" do app, será apresentado um painel contendo as informações sobre calorias consumidas pelo usuário durante o dia. <br> clicar no painel e selecionar a opção de editar metas de consumo calórico. <br> - Inserir a quantidade calórica que deseja adotar como meta. <br> - Clicar em salvar e voltar a página "home" <br> - "Rolar" pelas refeições consumidas no dia e realizar o cálculo manual das calorias consumidas e verificar se os valores mostrados no painel (Calorias consumidas, calorias que faltam ser consumidas, meta) estão corretos. |
|Critério de Êxito | - Apresentação das calorias consumidas, meta, e quantidade de caloria a ser consumida no dia de acordo com as refeições listadas. |



| **Caso de Teste** 	| **CT-04 – Pesquisa e visualização os planos alimentares de outros usuários.**	|
|:---:	|:---:	|
|Requisito Associado | RF-04	Os usuários devem poder pesquisar e visualizar os planos alimentares de outros usuários. |
| Objetivo do Teste 	| Acessar os planos alimentares dos outros usuários do aplicativo. |
| Passos 	| - Acessar a aplicação <br> - Logar com seu usuário e senha cadastrados <br> - Na página "home" do app, clicar no campo de busca. <br> - Escrever o nome ou email do usuário a qual gostaria de saber. <br> - Clicar no perfil que aparecer na busca. <br> - Se o perfil deste usuário for público (ele permitir que os outros usuários vejam seus planos alimentares e informações) aparecerá a lista de refeições e o plano alimentar deste usuário na tela. | 
|Critério de Êxito | - Apresentação das calorias consumidas, planos alimentares e refeições do usuário pesquisado com sucesso. |


| **Caso de Teste** 	| **CT-05 – Pesquisa e visualização de alimentos e suas calorias**	|
|:---:	|:---:	|
|Requisito Associado | RF-05	Os usuários devem poder pesquisar alimentos e suas calorias. |
| Objetivo do Teste 	| Acessar informações sobre alimentos pesquisados no app. |
| Passos 	| - Acessar a aplicação <br> - Logar com seu usuário e senha cadastrados <br> - Na página "home" do app, clicar no campo de busca. <br> - Escrever o nome do alimento pesquisado. <br> Clicar no alimento pesquisado. <br> Verificar na tela as informações sobre o alimento selecionado. |
|Critério de Êxito | - Apresentação das informações sobre o alimento pesquisado pelo usuário com sucesso. |


| **Caso de Teste** 	| **CT-06 – Notificações Push**	|
|:---:	|:---:	|
|Requisito Associado | RF-06	O aplicativo deve enviar notificações push para lembrar os usuários das refeições. |
| Objetivo do Teste 	| Visualizar uma notificação push. |
| Passos 	| - Acessar o dispositivo móvel <br> - Ir na aba de notificações. |
|Critério de Êxito | - Recebimento da notificação push. |


| **Caso de Teste** 	| **CT-07 – Histórico dos planos alimentares**	|
|:---:	|:---:	|
|Requisito Associado | RF-08	Os usuários devem ter acesso a um histórico de planos alimentares anteriores e informações nutricionais. |
| Objetivo do Teste 	| Acessar o histórico dos planos e registros alimentares. |
| Passos 	| - Acessar a aplicação <br> - Logar com seu usuário e senha cadastrados <br> - Clicar na seção perfil. <br> - Acessar opção histórico. <br> Selecionar o dia no qual gostaria de ver seu histórico de alimentação.|
|Critério de Êxito | - Histórico aberto com sucesso no dia selecionado e informações salvas e mostradas no aplicativo com sucesso.|


| **Caso de Teste** 	| **CT-08 – Compartilhação dos planos alimentares**	|
|:---:	|:---:	|
|Requisito Associado | RF-09	Os usuários podem compartilhar seus planos alimentares ou conquistas nas redes sociais.  |
| Objetivo do Teste 	| Compartilhar os planos e registros alimentares na rede social escolhida. |
| Passos 	| - Acessar a aplicação <br> - Logar com seu usuário e senha cadastrados <br> - Clicar na seção perfil. <br> - Acessar opção compartilhar. <br> Selecionar o(s) dia(s) no qual gostaria de compartilhar seu histórico de alimentação. <br> - Selecionar a rede social na qual gostaria de compartilhar. <br> -Editar a mensagem pré-feita e clicar em postar.
|Critério de Êxito | - Compartilhamento dos planos alimentares dos dias selecionados com sucesso.|


