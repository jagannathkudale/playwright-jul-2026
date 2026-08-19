FROM mcr.microsoft.com/playwright:v1.55.0-jammy

WORKDIR /app

COPY . .

RUN npm install

CMD ["npx", "playwright", "test"]