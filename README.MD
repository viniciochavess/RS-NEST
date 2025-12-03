# Nest RS

Projeto NestJS com Prisma ORM e PostgreSQL desenvolvido durante o curso da Rocketseat.

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [NestJS](https://nestjs.com/) - Framework Node.js progressivo
- [TypeScript](https://www.typescriptlang.org/) - JavaScript com tipagem estática
- [Prisma](https://www.prisma.io/) - ORM moderno para Node.js e TypeScript
- [PostgreSQL](https://www.postgresql.org/) - Banco de dados relacional
- [Docker](https://www.docker.com/) - Containerização

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
├── prisma/
│   ├── schema.prisma          # Schema do Prisma
│   └── migrations/            # Migrations do banco
├── src/
│   ├── prisma/
│   │   └── prisma.service.ts  # Serviço do Prisma
│   ├── app.module.ts          # Módulo principal
│   ├── app.controller.ts      # Controller principal
│   ├── app.service.ts         # Service principal
│   └── main.ts                # Entry point
├── generated/
│   └── prisma/                # Cliente Prisma gerado
├── data/
│   └── pg/                    # Dados do PostgreSQL
├── docker-compose.yml         # Configuração Docker
└── package.json
```

## 🔑 Configuração do Prisma

O Prisma está configurado para:
- Gerar o cliente na pasta `generated/prisma`
- Usar o adaptador PostgreSQL (`@prisma/adapter-pg`)
- Conectar via variável de ambiente `DATABASE_URL`

## 📝 Licença

Este projeto está sob a licença UNLICENSED.

## 👨‍💻 Autor

Desenvolvido durante o curso da Rocketseat.

---

⌨️ com ❤️ por [Rocketseat](https://rocketseat.com.br)
