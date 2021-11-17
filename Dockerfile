FROM node:10

WORKDIR /app

COPY package.json .

# RUN npm cache clean --force
# RUN npm cache verify
# RUN npm install
#RUN npm install --global yarn
#npm install --legacy-peer-deps
#RUN npm install -g sass

# RUN npm uninstall react-scripts

# RUN npm install -D react-scripts

COPY . ./

RUN npm install

RUN npm run build

#RUN yarn start
#RUN npm run build

#RUN npm rebuild node-sass --force

# EXPOSE 3000

# # CMD ["npm", "run", "dev"]
# CMD ["node", "server.js"]
