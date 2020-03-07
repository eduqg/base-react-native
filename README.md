# Brasambev

## Equipamento Utilizado

1. Ubuntu 18.04 LTS
2. Celular Android 8.0

## Getting Started

Clone este repositório e na pasta raiz instale as dependências do projeto.

```console
yarn
```

Caso queira configurar o desenvolvimento via wifi, consulte o arquivo de [Configuração via Wifi](WifiPhoneConfiguration.md) (Recomendado).


Configure o arquivo .env com seu ip ou com localhost.

```console
cp .env-example .env
```

Execute o metro bundler.

```console
yarn start
```

Em um outro terminal, instale o aplicativo.

```console
react-native run-android
```

## Características do software

### Funcionalidades

* Entrar como estudante.
* Sair.

<!--
## Imagens do Aplicativo

<img src="./src/assets/ola.jpeg" width="45%" height="45%"><img src="./src/assets/checkinout.jpeg" width="45%" height="45%">

-->
