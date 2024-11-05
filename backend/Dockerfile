# Base image
FROM python:3.12

# Install mysql-client for wait script
RUN apt-get update && apt-get install -y default-mysql-client


# Set working directory
WORKDIR /app

# Copy requirements
COPY requirements.txt /app/

# Install dependencies
RUN pip install -r requirements.txt

# Copy the rest of the application
COPY . /app/

# Copy the wait-for-mysql script and give it executable permissions
COPY wait-for-mysql.sh /app/wait-for-mysql.sh
RUN chmod +x /app/wait-for-mysql.sh

# Expose the port the app runs on
EXPOSE 8000
