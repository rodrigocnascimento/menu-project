#!/bin/bash

if [ -f ./frontend/env.example ]; then
    mv ./frontend/env.example ./frontend/.env
fi

if [ -f ./backend/env.example ]; then
    mv ./backend/env.example ./backend/.env 
fi

if [ -f ./database/env.example ]; then
    mv ./database/env.example ./database/.env 
fi

sleep 2
echo "Iniciando o projeto"

docker-compose up --build