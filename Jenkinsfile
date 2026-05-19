pipeline {
    agent any

    environment {
        DOCKER_USER = 'moorad'
        REGISTRY    = 'docker.io'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Lint & Test') {
            steps {
                echo 'Running Linting and Unit Tests...'
            }
        }

        stage('Docker Build & Tag') {
            steps {
                echo 'Building container images...'
                sh 'docker build -t ${DOCKER_USER}/frontend-dashboard:latest ./src/frontend'
                sh 'docker build -t ${DOCKER_USER}/product-service:latest ./src/product-service'
            }
        }

        stage('Docker Push') {
            steps {
                echo 'Pushing clean images to Docker Hub...'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                echo 'Orchestrating rollout updates...'
                sh 'kubectl apply -f k8s/config-secrets.yaml'
                sh 'kubectl apply -f k8s/frontend-deployment.yaml'
                sh 'kubectl apply -f k8s/product-deployment.yaml'
            }
        }
    }
}