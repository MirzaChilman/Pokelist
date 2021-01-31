## How to run

In order to run this project you need to have node `v10.17.0`. Once you are sure that you have it, these are the commands that you need to run:

1. `yarn install`, to install all dependencies
2. `yarn start-dev`, to start development server where hot reload is enabled

In order to run for prod run `yarn start-prod` it will use the express to serve the content under `build`, please be aware that there is no HML enabled in prod

Use `yarn run build` to build the project.

## Project Structure

There are several things that you need to be aware of you can find the project structure here

1. `Configs` is a folder where our config for `webpack`
2. `Server` is a folder where the server works, it uses `express` and some `webpack` middlewares
3. `Src`, all of our components and working code will be placed under `src`.
  - `Assets` is a folder where you put your manifest json and assets for PWA related.
  - `Components`, all of our common components that will be used in project will be placed under this folders
  - `Containers`, all side effect or component logic will be placed here, this project uses `unstated-next` for its state managements.
  - `Pages`, a quite straightforward naming, it's a place where you will define your page.
  - `Public`, is a folder contain `.html` for our entry point in Webpack and React
  - `Services` is a folder that you can use to put some extension on using `axios`
  - `Theme` was supposed to be a folder where you put all your colors and config that later can be used in emotion.
  - `Utils`, all of common function can be placed here.

## Tech Stack

This project uses:

1. [React](https://reactjs.org/) 17.x
2. [Typescript](https://www.typescriptlang.org/) 4.x
3. [Unstated-next](https://github.com/jamiebuilds/unstated-next) (State managements)
4. [Emotion](https://emotion.sh/docs/introduction) (Styling)
5. [Jest](https://jestjs.io/) (Testing)
6. [React Testing Library](https://testing-library.com/) (Testing)

## Things to do

1. Make project to render universally (universal rendering), currently it requires to be served in nodejs or docker container, by making it universal rendering it can send the content via server but while waiting it will uses the client version first
2. Create test for this project using [Jest](https://jestjs.io/) and [RTL](https://testing-library.com/)

## Others

Want to see how the project looks with [nextjs](https://nextjs.org/)? check out this [main branch](https://github.com/MirzaChilman/Pokelist/tree/main) or [with-next branch](https://github.com/MirzaChilman/Pokelist/tree/with-next) 

## License

This project is under MIT License 

The MIT License (MIT)

Copyright (c) 2021 Mirza Chilman Garin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.