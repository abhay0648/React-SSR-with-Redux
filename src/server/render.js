import serialize from 'serialize-javascript';
import { getHashedPaths } from '../utils/versioning';

export default async (initialRender, initialState = {}) => {
  console.log('Rendering webpage');
  let paths = {
    script: '/assets/client.bundle.js'
  };
  paths = await getHashedPaths(paths);

  return `
<!DOCTYPE html>
<html>
  <head>
    <style>
      html {
        font-family: sans-serif;
      }
    </style>
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="./styles.css" />
  </head>
  <body>
    <script>window.initialState = ${serialize(initialState)};</script>
    <div id="root">${initialRender || ''}</div>
    <script src="${paths.script}" defer async></script>
  </body>
</html>
  `;
};
