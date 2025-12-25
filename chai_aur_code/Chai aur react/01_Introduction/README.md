# React RoadMap: 

## Why to learn react ?
- Makes easy to manage & build complex website.
- Dont go for => hype, trend, job, build UI.
- It is very handy when we are clicking on 1 place and it is updating the value on multiple place
- component management

## When to learn:
- After masterin the JS
- Most projects dont need react in initial phase. Example: todoApp, fetching api to make a card etc

## Why react was created: 
- Phantom message || ghost message problem in facebook in chat section

> State (state mean variable value) is manage by JS

> UI is manage by DOM

> Now DOM & state are not syncing in vanila JS

## React is library: 
- Framework => It is Milatory where rule, declaration, naming convention, file store location all are fix there is no exception.
- Library: It is like cool dude, we dont have to follow all the thing preciously and have exception (More freedom) it is smaller then framework.

## Topic to learn: Here vanilla react is finish 
- core of React (state or UI manuplation, JSX)
- Component Reusability
- Resuing of component (props)
- How to propagate change (hooks)

## Additional Addon to React: 
- Router (React dont have router by default)
- State management (React don't had by default)
> State management example: Redux, Redux toolkit, zustand, context API
- class based component 
> This is legacy code where we have to use the concept like bind & call which is not require now days in react.
- BAAS Apps => no need to write backend directly use
> Examples: Firebase, Appwrites, superBase


## After React:
- React is not a complete solution in most of the cases
> No seo, browser render of JS , no routing
- FrameWork: Below are based on react.
> NextJS, Gatsby, Remix

## npm vs npx: 
> It is use to install the libraries 
- node package manager
- node packafe executer (no need to install npm directly execute the library)

## React Installation: 
```sh
# This installation process is very slow and file size is all big
npx creat-react-app <name of the app>
ls # it is use to check the file in dir & folder
npm run start
npm run build # It will create a build folder in app folder

```
> Now day we are using the bundler for installing react like vite
```sh
npm create vite@latest
# Select => react
# select the variant => JavaScript
npm i # npm install
npm run dev
```