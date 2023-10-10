
<h1 align="center">
  <br>
  <img src="https://i.imgur.com/B07LTHw.png" alt="ShopFleet" width="350" />
  <br>
  ShopFleet
  <br>
</h1>

<table align="center">
  <tr>
    <td>A web platform where you can buy a variety of technological products</td>
  </tr>
</table>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#technologies">Technologies</a> •
  <a href="#developers">Developers</a> •
  <a href="#gratitude">Gratitude</a> •
  <a href="#license">License</a>
</p>

## Key Features

The web application complies with the following functionalities.

- Product management.

- User management.

- Role management.

- Authentication.

- Viewing product catalogs.

- Buy from the application itself digitally and transactionally.
  
- APIS Integration

- Integration with a mobile application

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. 
Or, You can use variants of npm, such as [yarn](https://yarnpkg.com/) and [pnpm](https://pnpm.io/es/), this project has been created using the pnpm package manager. Any of these options are valid to install node_modules dependencies From your command line:

**Frontend**
```
# Clone this repository
$ git clone https://github.com/lennardscript/ShopFleet

# Go into the repository
$ cd ShopFleet && cd client

# Install dependencies
$ npm install

# Run the app
$ npm start
```

**Backend**
```
# Clone this repository
$ git clone https://github.com/lennardscript/ShopFleet

# Go into the repository
$ cd ShopFleet && cd backend

# Install dependencies
$ npm install

# Run the app
$ npm start:dev
```

Both the frontend and the backend have a docker compose file to simplify the orchestration of services. You must have [Docker](https://www.docker.com/) installed on your computer. To build the project with docker, you must enter the following command line:

**Frontend**
```
# Go to cloned directory
$ cd ShopFleet && cd client

# Run the services
$ docker-compose up

# Or run services in the background
$ docker-compose up -d

# View logs after running services
$ docker-compose logs

# Stop and delete containers created by docker compose (You can put the following parameter to delete the volumes created by docker '--volumes')
$ docker-compose down
```

**Backend**
```
# Go to cloned directory
$ cd ShopFleet && cd backend

# Run the services
$ docker-compose up

# Or run services in the background
$ docker-compose up -d

# View logs after running services
$ docker-compose logs

# Stop and delete containers created by docker compose (You can put the following parameter to delete the volumes created by docker '--volumes')
$ docker-compose down
```

## Technologies

This software uses the following open source packages:

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white)
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4.svg?style=for-the-badge&logo=Tailwind-CSS&logoColor=white)
- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white)
- ![React](https://img.shields.io/badge/React-61DAFB.svg?style=for-the-badge&logo=React&logoColor=black)
- ![NodeJS](https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white)
- ![NestJS](https://img.shields.io/badge/NestJS-E0234E?logo=nestjs&logoColor=fff&style=for-the-badge)
- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1.svg?style=for-the-badge&logo=PostgreSQL&logoColor=white)
- ![Docker](https://img.shields.io/badge/Docker-2496ED.svg?style=for-the-badge&logo=Docker&logoColor=white)
  
## Developers

The development team behind the platform

<table align="center">
  <tr>
    <td align="center"><a href="https://leaburgos.netlify.app/"><img src="https://i.imgur.com/NhfTbTW.jpeg" width="100px;" alt="Leandro Burgos"/><br /><sub><b>Leandro Burgos</b></sub></a><br /><p title="Code">💻</p></td>
    <td align="center"><a href="#"><img src="https://i.imgur.com/3s5t5UC.png" width="75px;" alt="Ignacio Godoy"/><br /><sub><b>Ignacio Godoy</b></sub></a><br /><p title="Code">💻</p></td>
  </tr>
</table>

## Gratitude

I want to start by thanking my teachers who have accompanied me in these 4 years during my professional training and acquired the skills, knowledge and tools for the work and professional world.

## License

MIT

