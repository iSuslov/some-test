FROM cypress/included:9.0.0
WORKDIR /src
COPY ./cypress ./cypress
COPY ./cypress.json ./cypress.json
RUN npx cypress run


