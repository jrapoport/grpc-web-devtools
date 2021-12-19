.PHONY: build run package example-build-frontend example-build-backend example-build \
example-frontend-up example-envoy example-server example-client example-up example-down

build:
	yarn && yarn build

run:
	yarn && yarn start

package: build
	cd build; zip -r ../grpc-web-devtools.zip .

example-build-frontend:
	protoc -I./example --js_out=import_style=commonjs:example/client/src \
		--grpc-web_out=import_style=commonjs,mode=grpcwebtext:example/client/src example/*.proto

example-build-backend:
	protoc -I./example --go_out=example/server --go-grpc_out=example/server example/*.proto

example-build: example-build-backend example-build-frontend

example-frontend-up: example-build-frontend
	npm run start --prefix example/client

example-envoy:
	docker-compose -f ./example/docker-compose.yml up -d envoy

example-server:
	docker build -t grpcweb-devtools-example/server ./example/server

example-client: 
	docker build -t grpcweb-devtools-example/client ./example/client

example-up: example-server example-server example-client
	docker-compose -f ./example/docker-compose.yml up -d;

example-down:
	docker-compose -f ./example/docker-compose.yml down
