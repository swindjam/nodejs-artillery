Node JS Artillery
-----------

A simple demo of how artilery can be used to load test a node js service.

To start the project, simply run `npm start`

Node JS Server
--------

The Node JS server can be viewed here `http://localhost:1234/json` - note that this only supports POST requests
This is a simple express server.

Artillery
---------

Once the Node JS server is running, it can be load tested with artilery.
This is handled by running `npm run load-test`, which uses the configuration in `artillery.yml`