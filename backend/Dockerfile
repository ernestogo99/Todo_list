# Imagem base
FROM python:3.13-alpine

# Define diretório de trabalho
WORKDIR /app

# Copia o requirements para instalar dependências
COPY ./requirements.txt /tmp/requirements.txt

# Expõe a porta 8000
EXPOSE 8000

# Instala dependências do sistema, cria venv e instala pacotes Python
RUN python -m venv /py && \
    /py/bin/pip install --upgrade pip && \
    apk add --update --no-cache postgresql-client && \
    apk add --update --no-cache --virtual .tmp-build-deps \
        build-base postgresql-dev musl-dev && \
    /py/bin/pip install -r /tmp/requirements.txt && \
    rm -rf /tmp && \
    apk del .tmp-build-deps && \
    adduser \
        --disabled-password \
        --no-create-home \
        django-user

# Copia o código da aplicação para dentro do container
COPY . .

# Adiciona o virtualenv ao PATH
ENV PATH="/py/bin:$PATH"

# Usa o usuário criado (sem root)
USER django-user
