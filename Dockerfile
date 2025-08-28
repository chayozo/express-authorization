FROM node:22.17.1
WORKDIR /app
ENV NODE_ENV dev
COPY package.json package-lock.json ./
RUN npm install
RUN apt-get update && apt install vim -y
COPY . .
EXPOSE 5000
CMD [ "npm", "run", "dev" ]