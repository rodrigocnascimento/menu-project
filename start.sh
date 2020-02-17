#!/bin/bash

if [ -f ./frontend/env.example ]; then
    cp ./frontend/env.example ./frontend/.env
fi

if [ -f ./backend/env.example ]; then
    cp ./backend/env.example ./backend/.env 
fi

if [ -f ./database/env.example ]; then
    cp ./database/env.example ./database/.env 
fi

sleep 2
echo "Iniciando o projeto"

docker-compose up --build