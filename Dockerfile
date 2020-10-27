FROM node:14.4.0-alpine3.10 as builder
RUN mkdir -p /app
WORKDIR /app

#copy and install node_modules
COPY package.json .
RUN yarn install --production

WORKDIR /app
COPY . .

RUN yarn build

FROM nginx:1.15.8
COPY --from=builder /app/build /usr/share/nginx/html
COPY ./vhosts.conf /etc/nginx/conf.d/default.conf

CMD sed -i -e 's@__API_URL@'"$API_URL"'@g' /usr/share/nginx/html/static/js/*.chunk.js && \
nginx -g "daemon off;"