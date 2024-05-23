#!/bin/bash

# Verifica se foi fornecido um argumento
if [ $# -eq 0 ]; then
    echo "Uso: $0 <nome_da_pasta>"
    exit 1
fi

# Adiciona "ex" ao início do nome da pasta
folder_name="ex$1"

# Cria a pasta
mkdir "$folder_name"

echo "Pasta '$folder_name' criada com sucesso."

