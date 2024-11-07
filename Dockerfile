FROM node:18-alpine

WORKDIR /app

# Bundle app source
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
