# FlashMcCards

## Build from sources

### Windows

#### Prerequisites

- git
- Node
- npm

#### How to build

First, you'll have to clone the repository.
`git clone https://CCICampus@dev.azure.com/CCICampus/CDA-TP2425-G3/_git/CDA-TP2425-G3`
Then, follow the method you prefer: [Docker](#docker) | [Bare-metal](#Bare-metal)

#### <a id="docker"></a> Docker

Just cd into the directory and start the containers using Docker Compose.
`cd CDA-TP2425-G3 && sudo docker compose up -d`
After a while, everything should be up and running!

#### <a id="bare-metal"></a> Bare-metal

You'll have to build the frontend and the backend seperately.

##### Frontend

`cd frontend && npm run build`
The built frontend will be in `dist`, just publish that using `apache2` or `nginx`, or whatever.

#### Backend

`cd backend && node src/index.js`
This will start the backend at whatever port is set, default would be 3000.
