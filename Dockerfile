# syntax=docker/dockerfile:1

# Stage 1: Base image.
## Start with a base image containing NodeJS so we can build Docusaurus.
FROM node:lts as base
## Disable colour output from yarn to make logs easier to read.
ENV FORCE_COLOR=0
## Enable corepack.
RUN corepack enable
## Set the working directory to `/opt/docusaurus`.
WORKDIR /opt/docusaurus


# Stage 2: Production build mode.
FROM base as prod
## Set the working directory to `/opt/docusaurus`.
WORKDIR /opt/docusaurus
## Accept BASE_URL as build argument.
ARG BASE_URL
## Set BASE_URL as environment variable for the build process.
ENV BASE_URL=${BASE_URL}
## Copy over the source code.
COPY . /opt/docusaurus/
## Install dependencies with `--immutable` to ensure reproducibility.
#RUN yarn install --immutable
RUN npm ci
## Build the static site.
RUN npm run build


# Stage 3: Serve with nginx.
FROM nginx:alpine as serve
## Copy the built static files from the build stage.
COPY --from=prod /opt/docusaurus/build /usr/share/nginx/html
## Copy custom nginx configuration.
COPY nginx.conf /etc/nginx/conf.d/default.conf
## Expose port 80 for HTTP traffic.
EXPOSE 80
## nginx runs in foreground by default.
CMD ["nginx", "-g", "daemon off;"]

