FROM node:6
COPY server.js
COPY package.json
RUN npm install
EXPOSE 8080
CMD npm start




