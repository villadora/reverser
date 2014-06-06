# Reverser 
[![NPM version](https://badge.fury.io/js/reverser.svg)](http://badge.fury.io/js/reverser) [![Build Status](https://travis-ci.org/villadora/reverser.svg?branch=master)](https://travis-ci.org/villadora/reverser) [![Dependency Status](https://gemnasium.com/villadora/reverser.svg)](https://gemnasium.com/villadora/reverser)

A reverse proxy middleware for connect/express

## Install

```bash
npm install reverser
```

## Usage



```javascript
var Reverser = require('reverser');

var reverser = new Reverser({});

reverser.register("/ajax/*", 'hostname:8080');

reverser.register("/post|get", 'hostname1');

// connect
var app = require('connect')();

// or express
var app = require('express')();


app.use(reverser.serve);

// or forward with shorted path
app.use('/proxy', reverser.serve);

```

See [routington](router ) for the register path syntax

## License

(The MIT License)

    Copyright (c) 2013, Villa.Gao <jky239@gmail.com>;
    All rights reserved.
