FROM node:14-alpine as base
WORKDIR /src
COPY package*.json ./
RUN  npm i
EXPOSE 3000

FROM base as production
ENV NODE_ENV=production
RUN  npm i
COPY . .
CMD [ "node", "bin/www" ]

FROM base as dev
ENV NODE_ENV=development
RUN npm install -g nodemon && npm install
COPY . ./
CMD [ "nodemon", 'bin/www' ]

FROM base as tests
ENV NODE_ENV=production
COPY . ./
CMD [ "npm" , "run", "test:jest" ]

FROM base as cy
ENV NODE_ENV=production
COPY . ./
CMD [ "npm" , "run", "test:jest" ]


