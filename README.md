# JSWorld Swagger Example

Bare-bones example project showing generation of a client SDK site using [Swagger](https://swagger.io) ([swagger-node](https://github.com/swagger-api/swagger-node)).

This project contains three areas of code:

- `app.js`: Express controller set up with Swagger information
- `api/`: Basic "hello world" controller auto-included by the controller
- `client/`: Auto-generated client code from the Swagger spec

> Normally, you might prefer to `.gitignore` the `client/` section, as it's auto-generated code.
> It's included in this project so you **don't have to development locally** to see it.

See `api/swagger.yaml` for this repository's OpenAPI specification.

## Exploring the Client

I recommend opening the generated `client/` folder in VS Code to take a look at the generated files as a standalone project:

```shell
code client
```

## Client Generation Prerequisites

_If_ you want to regenerate and play with the code locally, you'll need [openapi-generator](https://github.com/OpenAPITools/openapi-generator) installed locally.

I've found this to be a pain, so here are the most straightforward methods of installation I've gotten to work:

### Mac

```shell
brew install openapi-generator
```

### Windows

After [running the Java JDK Windows x64 Installer](https://www.oracle.com/java/technologies/javase-jdk15-downloads.html):

```shell
choco install maven
powershell "Invoke-WebRequest -OutFile openapi-generator-cli.jar https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/5.0.0/openapi-generator-cli-5.0.0.jar"
```

## Usage

Setting the project up and running a local server:

```shell
git clone https://github.com/JoshuaKGoldberg/jsworld-swagger
cd jsworld-swagger
npm i
npm run start
```

Then, you can generate clients using openapi-generator:

### Mac

```shell
openapi-generator generate -i ./api/swagger/swagger.yaml -g typescript-fetch -o ./client
```

### Windows

```shell
java -jar openapi-generator-cli.jar generate -i ./api/swagger/swagger.yaml -g typescript-fetch -o client
```

Visit the `/hello` endpoint to get a response.
Add a `?name=Name` query parameter to customize that response.
