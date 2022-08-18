FROM arm64v8/node:14.5.0-alpine AS build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV REACT_APP_API_URL=http://ranjansharma.tech:5000

RUN npm run build

# Production mode
FROM arm64v8/nginx
COPY --from=build-stage /app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g" ,"daemon off;"]