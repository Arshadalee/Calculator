FROM node:18.19.1

WORKDIR /app

# Bundle app source
COPY . .

EXPOSE 3000
RUN npm install
CMD ["npm", "start"]
