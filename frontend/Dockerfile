# ----------- STAGE 1: Build the frontend with Vite ----------
FROM node:18 AS builder

WORKDIR /app

ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

COPY package*.json ./
RUN npm install

COPY . .

RUN echo "VITE_BACKEND_URL=$VITE_BACKEND_URL" > .env

RUN npm run build

# ----------- STAGE 2: Serve with Nginx ----------
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
