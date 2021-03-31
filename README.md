# React-SSR-with-Redux

Application show server side rendering (SSR) with redux thunk.

# SSR

SSR or Server Side Rendering is the process where server sends data directly to the browser to draw layout. Browser doesn't need to call any api to fetch data from any source and manipulate the DOM(Document Object Model). So, no api calls, still all required data pre-loaded in browser. So you might ask why is it important. After all, you care if data is visible to you or not. So what makes the difference if data is coming directly or through api. Yes. To you it matters nothing. But google, bing, yahoo all major search engines crawl your website or app. And they depend on data which directly comes from server. Because, they rely on data loaded on first 8 seconds. Their crawlers can run javascript and fetch data from api.but if it takes time, it ignores that data. So, if you want skyrocketing SEO(Search Engine Optimization), you need to render web pages from Server.

# What is redux

Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Api fetching by using redux thunk.

# Redux Thunk

Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux.

# Build

![react_ssr](https://user-images.githubusercontent.com/32450488/113042530-f1b34600-91b8-11eb-8e08-d2410cfb4a56.gif)

# Build Process

1) npm run build or yarn build.
2) npm start or yarm start.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
