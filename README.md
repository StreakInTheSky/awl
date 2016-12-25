# Art with Larisse
[View Rendered App Here](https://art-with-larisse-151811.firebaseapp.com/)

> A Vue.js project using VueRouter and Firebase API

## Build Setup

``` bash
# install dependencies
npm install -g yarn
yarn

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Component Options

### Hero Component

#### scripts
``` javascript
options = {
  pre_title: String,
  title: String,
  link_text: String,
  link_path: String
}
```
#### styles
``` css
.hero {
  background-image: url('../assets/img/[filename].jpg');
}
```
