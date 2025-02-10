# Use an official Node.js runtime as the base image
FROM node:18-alpine AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular project
RUN npm run build -- --configuration production

# Use a lightweight web server to serve the Angular app
FROM nginx:alpine

# Copy the built Angular app from the previous stage
COPY --from=build /app/dist/Angular_Portfolio /usr/share/nginx/html

# Expose port 4300 for the web server
EXPOSE 4300

# Update Nginx configuration to listen on port 4300
RUN sed -i 's/listen\s*80;/listen 4300;/g' /etc/nginx/conf.d/default.conf

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]