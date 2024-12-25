# ステップ1: ビルド環境
FROM node:16 AS builder

WORKDIR /portfolio

COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build

# ステップ2: 実行環境
FROM nginx:alpine

COPY --from=builder /portfolio/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]