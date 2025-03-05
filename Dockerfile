FROM node:18

# Working directory inside the container
WORKDIR /usr/src/app

COPY . .

RUN npm install -g projen

RUN npx projen

EXPOSE 3000

CMD ["npx", "projen", "start"]
