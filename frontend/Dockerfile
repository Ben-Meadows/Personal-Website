# Step 1: Build the React app
FROM node:16-alpine as build

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the app
RUN npm run build

# Step 2: Serve the React app using NGINX
FROM nginx:alpine

# Copy the build files from the previous stage to the NGINX directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
