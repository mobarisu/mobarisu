docker-compose build

docker-compose run --rm react sh -c 'npx create-react-app react-app --template typescript'

docker-compose up -d


docker-compose run --rm react sh -c 'cd react-app && yarn install'