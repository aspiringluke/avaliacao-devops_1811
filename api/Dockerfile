FROM node:24.22.3

WORKDIR /opt/avaliacao/api

COPY src/ .
COPY server.js .
COPY package.json .
COPY package-lock.json .

RUN npm install

EXPOSE 4040

CMD ["node", "server.js"]