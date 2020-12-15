FROM node:12-alpine as build
WORKDIR /app
COPY . /app
ENV PATH /app/node_modules/.bin:$PATH
RUN apk --no-cache add g++ gcc libgcc libstdc++ linux-headers make python
RUN npm install --silent
RUN npm run build

FROM nginx:1.17.9
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
