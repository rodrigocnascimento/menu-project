#!/bin/bash

mv ./frontend/env.example ./frontend/.env
mv ./backend/env.example ./backend/.env 
mv ./database/env.example ./database/.env 

sleep 2
echo "Iniciando o projeto"

docker-compose up --build