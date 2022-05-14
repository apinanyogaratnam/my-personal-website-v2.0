IMAGE := my-personal-website-v2.0
TAG_VERSION := 0.0.1

build:
	docker build -t ${IMAGE} .

run:
	docker run -p 3000:3000 ${IMAGE}

open:
	open http://localhost:3000
