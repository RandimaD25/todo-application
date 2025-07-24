# Use Node.js LTS image
FROM node:18

# Set working directory inside container
WORKDIR /app

# Copy dependency files first 
COPY package*.json ./
COPY babel.config.js ./

# Install all dependencies
RUN npm install

# Copy rest of the backend source code
COPY . .

# Expose the backend port
EXPOSE 4000

# Run the server
CMD ["npm", "start"]
