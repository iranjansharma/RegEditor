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
    }
    }