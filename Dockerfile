# Step 1: Build the site
## Get node
FROM node:10 as build

## Set workdir
WORKDIR /usr/src/app

## Install depedencies
COPY package*.json ./
RUN npm install

## Build the app
COPY . ./
RUN npm run build

# Step 2: Deployment
## Get nginx
FROM nginx:latest

## Copy files to nginx directory
COPY --from=build /usr/src/app/build /usr/share/nginx/html

## Expose to port 80
EXPOSE 80

## Set default command when running the container
CMD ["nginx", "-g", "daemon off;"]
