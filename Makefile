IMAGE := my-personal-website-v2.0
TAG_VERSION := 0.0.1

build:
	docker build -t ${IMAGE} .

run:
	docker run -p 3000:3000 ${IMAGE}

open:
	open http://localhost:3000

auth:
	grep -v '^#' .env.local | grep -e "CR_PAT" | sed -e 's/.*=//' | docker login ghcr.io -u USERNAME --password-stdin

tag:
	docker tag ${IMAGE} ghcr.io/apinanyogaratnam/${IMAGE}:${TAG_VERSION}
	git tag -m "v${TAG_VERSION}" v${TAG_VERSION}

push:
	docker push ghcr.io/apinanyogaratnam/${IMAGE}:${TAG_VERSION}
	git push --tags
