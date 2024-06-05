# Use an official Node.js runtime as a parent image
FROM node:22

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY server/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY server/ .

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]
