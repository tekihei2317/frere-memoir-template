# frere-memoir-template

## 環境構築

```bash
yarn install
docker compose up
```

```bash
# server
cd server
cp .env.example .env
yarn prisma generate
yarn run dev
```

```bash
# web
cd web
yarn run dev
```
