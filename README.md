# walking-budding-stripped
A frontend-focused "Walking Buddy" application designed to help users find and join walking groups. The application uses a modular architecture with Firebase for backend-as-a-service (auth/database) and is containerized for consistent deployment.

## Features
- **User Onboarding:** Multi-step survey flow to capture user preferences.
- **Interactive Mapping:** Integrated Leaflet.js map for location visualization.
- **Firebase Integration:** Uses Firestore for scalable, schema-less data storage.

## Tech Stack
- **Frontend:** HTML5, Tailwind CSS, JavaScript
- **Backend:** Firebase (Firestore, Auth)
- **Containerization:** Docker (Nginx)

## Getting Started

### Prerequisites
- Docker (Desktop or Engine) installed on your machine.

### Installation & Execution
This project is containerized for environment parity. To run the application locally:

1. **Build the Docker Image:**
   ```bash
   docker build -t walking-buddy .
Run the Container:

Bash
docker run -p 8080:80 walking-buddy
Access the Application:
Open your browser and navigate to: http://localhost:8080
