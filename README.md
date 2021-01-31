## Funny story

This project was originally created using `express` with a full config `webpack` that you can find at this [branch](https://github.com/MirzaChilman/Pokelist/tree/ssr-webpack). It was a mean to showcase my ability to use `webpack` unfortunately it is not universal rendering which means it needs to run on node server or container which later does not satisfy the requirements of PWA as I need SSL on it.

Hence, I move this project and created it using `nextjs` so I can deploy it in [Vercel](https://vercel.com) and have HTTPS out of the box so it can satisfy the PWA requirements.

## How to run

1. In order to run you need to run `yarn install` first
2. Once the dependencies are installed you can `yarn dev` to run for development, further info please refer to [Next.js](https://nextjs.org/) official page

## Project Structures

There are several things that you need to be aware of you can find the project structure here

  - `Components`, all of our common components that will be used in project will be placed under this folders
  - `Containers`, all side effect or component logic will be placed here, this project uses `unstated-next` for its state managements.
  - `Pages`, a quite straightforward naming, it's a place where you will define your page.
  - `Public`, is a folder contain assets and manifest.json for PWA
  - `Services` is a folder that you can use to put some extension on using `axios`
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

1. Create test for this project using [Jest](https://jestjs.io/) and [RTL](https://testing-library.com/)

## Others

Want to see how the project looks with Webpack? Use this ssr-webpack [branch](https://github.com/MirzaChilman/Pokelist/tree/ssr-webpack)

## License

This project is under MIT License 

The MIT License (MIT)

Copyright (c) 2021 Mirza Chilman Garin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
