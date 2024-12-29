FROM node:22.11.0

WORKDIR /app

# Bundle app source
COPY . .

EXPOSE 3000
RUN npm install
CMD ["npm", "start"]
