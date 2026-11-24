# TDD Jest API

API REST de cadastro de produtos de supermercado, desenvolvida com **TDD** usando Jest e Supertest.

**Tecnologias:** Node.js, TypeScript, Express, TypeORM, PostgreSQL, Jest, Supertest

## Como rodar

```bash
git clone git@github.com:julianosantosdev/tdd_jest_api.git
cd tdd_jest_api
npm install
```

Crie o banco `tdd_products` no PostgreSQL e ajuste as credenciais no arquivo `.env_example` e o renomeie para `.env` (sem aspas).

```bash
npm run dev   # inicia o servidor em http://localhost:3000
npm test      # roda os testes
```

## Endpoints

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/health` | Verifica se a API está online |
| `POST` | `/products` | Cadastra um produto |
| `GET` | `/products` | Lista os produtos |
| `PATCH` | `/products/:id` | Atualiza um produto |
| `DELETE` | `/products/:id` | Remove um produto |

Exemplo de corpo para `POST /products`:

```json
{
  "name": "Arroz Branco 5kg",
  "category": "Mercearia",
  "price": 24.9,
  "stock": 50
}
```
