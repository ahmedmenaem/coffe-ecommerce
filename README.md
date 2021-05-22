# Coffe ecommerce

is a rest api for coffe machine and pods built usign express and mongodb

## Installing Deps

```
yarn
```

## Run app

```
yarn start
```

## Runn app using docker-compose

```
docker-compose up
```

## Build app
```
yarn build
```

## Build app image using docker

```
docker build -t coffe-ecommerce . -f ./docker/Dockerfile
```

## Rest api docs
### init database script

```
[POST] http://localhost:8000/admin/init_data
```
### Get all Coffee Machines

```
[GET] http://localhost:8000/machines?machineType=LARGE&waterLineCompitable=false&page=1

```

### Get all Coffee Machine by id

```
[GET] http://localhost:8000/machines/:id?machineType=LARGE&waterLineCompitable=false&page=1

```


### Get all Coffee Pods

```
[GET] http://localhost:8000/pods?podType=LARGE&coffeFlavour=coffeFlavour&packSize=1&page=1

```

### Get all Coffee Machine by id

```
[GET] http://localhost:8000/pods/:id?machineType=LARGE&waterLineCompitable=false&page=1

```

## Built With

- [NodeJS](https://reactjs.org/) - The web framework used
- [express](https://expressjs.com/) - Express js
- [mongoose](https://mongoosejs.com/) - mongoose
