FROM mysql:5

ENV MYSQL_ROOT_PASSWORD 123qweasd  
ENV MYSQL_DATABASE menu_com_vc  
ENV MYSQL_USER menu_root_user  
ENV MYSQL_PASSWORD asdqwe123
ENV MYSQL_HOST=db

ADD "./backend/database/setup.sql" /docker-entrypoint-initdb.d