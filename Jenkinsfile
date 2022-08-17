pipeline {
    agent any 
    stages {
        stage('Dependencies Install') { 
            steps {
                echo "node --version" 
                nodejs("Node"){
                    sh "npm install"
                }
            }
        }
        stage('Application Build ') { 
            steps {
                echo "Build Project"
                nodejs("Node"){
                    sh "npm run build"
                }  
            }
        }
    }
    }