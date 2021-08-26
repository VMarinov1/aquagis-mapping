/* eslint-disable no-console */
const colors = require('colors/safe');
const StaticServer = require('static-server');

const server = new StaticServer({ rootPath: process.cwd(), port: 8064, followSymlink: true });
server.start(() => {
  console.log(colors.yellow(`Listening on ${server.port}`));
});
