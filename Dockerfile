FROM node:22-alpine

WORKDIR /app

RUN mkdir -p data

COPY data/*.json ./data
COPY index.js ./

USER node

CMD [ "node", "index.js" ]
