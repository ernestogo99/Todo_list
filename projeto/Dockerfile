FROM python:3.9-alpine3.13

COPY ./requirements.txt /tmp/requirements.txt
COPY ./app /app
WORKDIR /app
EXPOSE 8000

RUN apk add --update --no-cache \
      python3-dev \
      py3-pip \
      libffi-dev \
      gcc \
      musl-dev \
      postgresql-dev \
      postgresql-client \
      build-base && \
    pip install --upgrade pip && \
    python -m venv /py && \
    /py/bin/pip install --upgrade pip && \
    /py/bin/pip install -r /tmp/requirements.txt && \
    rm -rf /tmp && \
    apk del gcc musl-dev python3-dev libffi-dev && \
    adduser --disabled-password --no-create-home django-user
   
ENV path="/py/bin:$PATH"

USER django-user
