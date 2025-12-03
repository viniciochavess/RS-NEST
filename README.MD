# Nest RS

Projeto NestJS com Prisma ORM e PostgreSQL desenvolvido durante o curso da Rocketseat.

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [NestJS](https://nestjs.com/) - Framework Node.js progressivo
- [TypeScript](https://www.typescriptlang.org/) - JavaScript com tipagem estática
- [Prisma](https://www.prisma.io/) - ORM moderno para Node.js e TypeScript
- [PostgreSQL](https://www.postgresql.org/) - Banco de dados relacional
- [Docker](https://www.docker.com/) - Containerização
- [Zod](https://zod.dev/) - Validação de schemas TypeScript-first
- [bcryptjs](https://github.com/dcodeIO/bcrypt.js) - Hash de senhas

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- Docker e Docker Compose
- npm ou yarn

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd nest-rs
```

2. Instale as dependências:
```bash
npm install
```

3. Crie o arquivo `.env` na raiz do projeto:
```env
DATABASE_URL="postgresql://nest_rs:nest_rs_password@localhost:5432/nest_rs_db?schema=public"
```

4. Inicie o banco de dados PostgreSQL com Docker:
```bash
docker-compose up -d
```

5. Execute as migrations do Prisma:
```bash
npx prisma migrate dev
```

## 🗄️ Estrutura do Banco de Dados

O projeto possui os seguintes modelos:

### User (Usuário)
- `id` - UUID único
- `name` - Nome do usuário
- `email` - Email único
- `password` - Senha
- `createdAt` - Data de criação
- `updatedAt` - Data de atualização

### Question (Pergunta)
- `id` - UUID único
- `title` - Título da pergunta
- `slug` - Slug único para URL
- `content` - Conteúdo da pergunta
- `authorId` - ID do autor (relacionamento com User)
- `createdAt` - Data de criação
- `updatedAt` - Data de atualização

## 🏃 Executando o projeto

```bash
# Desenvolvimento
npm run start

# Modo watch (desenvolvimento)
npm run start:dev

# Modo debug
npm run start:debug

# Produção
npm run start:prod
```

O servidor iniciará na porta `3333` por padrão.

## 📡 API Endpoints

### POST /accounts
Cria uma nova conta de usuário.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "johndoe@email.com",
  "password": "123456"
}
```

**Validações:**
- `email` - Deve ser um email válido
- `password` - Mínimo de 6 caracteres
- `name` - Mínimo de 2 caracteres

**Responses:**
- `201` - Conta criada com sucesso
- `400` - Dados de validação inválidos
- `409` - Usuário já existe (email duplicado)

**Exemplo de erro de validação:**
```json
{
  "message": "Validation failed",
  "errors": {
    "email": ["Invalid email"],
    "password": ["String must contain at least 6 character(s)"],
    "name": ["String must contain at least 2 character(s)"]
  },
  "error": "Bad Request",
  "statusCode": 400
}
```

**Exemplo de teste:**
Utilize o arquivo `http/create-account.http` com a extensão REST Client do VS Code.

## 🔨 Scripts disponíveis

```bash
# Build do projeto
npm run build

# Formatar código
npm run format

# Gerar Prisma Client
npx prisma generate

# Criar nova migration
npx prisma migrate dev --name nome_da_migration

# Abrir Prisma Studio (GUI do banco)
npx prisma studio
```

## 🐳 Docker

O projeto utiliza Docker Compose para o PostgreSQL:

```yaml
services:
  postgres:
    container_name: nest-rs-postgres
    image: postgres
    ports:
      - '5432:5432'
    environment:
      POSTGRES_USER: nest_rs
      POSTGRES_PASSWORD: nest_rs_password
      POSTGRES_DB: nest_rs_db
```

Para gerenciar o container:
```bash
# Iniciar
docker-compose up -d

# Parar
docker-compose down

# Ver logs
docker-compose logs -f
```

## 📁 Estrutura de pastas

```
nest-rs/
├── http/                      # Arquivos HTTP para testes
│   └── create-account.http    # Teste do endpoint de criação de conta
├── prisma/
│   ├── schema.prisma          # Schema do Prisma
│   └── migrations/            # Migrations do banco
├── src/
│   ├── controllers/
│   │   └── create-account.controller.ts  # Controller de criação de conta
│   ├── pipes/
│   │   └── zod-validation-pipes.ts        # Pipe de validação com Zod
│   ├── prisma/
│   │   └── prisma.service.ts  # Serviço do Prisma com lifecycle hooks
│   ├── generated/
│   │   └── prisma/            # Cliente Prisma gerado
│   ├── app.module.ts          # Módulo principal
│   └── main.ts                # Entry point
├── data/
│   └── pg/                    # Dados do PostgreSQL (gitignored)
├── docker-compose.yml         # Configuração Docker
└── package.json
```

## 🔑 Configuração do Prisma

O Prisma está configurado para:
- Gerar o cliente na pasta `src/generated/prisma` com formato CommonJS
- Usar o adaptador PostgreSQL (`@prisma/adapter-pg`) com Pool do `pg`
- Conectar via variável de ambiente `DATABASE_URL`
- Lifecycle hooks do NestJS (`OnModuleInit` e `OnModuleDestroy`) para gerenciar conexões

## 🛡️ Validação e Segurança

O projeto implementa:
- **Validação de dados** com Zod através de custom pipe (`ZodValidationPipe`)
- **Hash de senhas** usando bcryptjs (salt rounds: 10)
- **Validação de email** para garantir formato correto
- **Mensagens de erro estruturadas** com detalhes dos campos inválidos

## 🧪 Testando a API

Você pode testar os endpoints usando:

1. **REST Client (VS Code Extension)**: Utilize os arquivos `.http` na pasta `http/`
2. **Insomnia/Postman**: Importe as requisições ou crie manualmente
3. **cURL**: 
```bash
curl -X POST http://localhost:3333/accounts \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"johndoe@email.com","password":"123456"}'
```

## 📝 Licença

Este projeto está sob a licença UNLICENSED.

## 👨‍💻 Autor

Desenvolvido durante o curso da Rocketseat.

---

⌨️ com ❤️ por [Rocketseat](https://rocketseat.com.br)
