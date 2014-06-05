# Reverser [![NPM version](https://badge.fury.io/js/reverser.svg)](http://badge.fury.io/js/reverser) [![Build Status](https://travis-ci.org/villadora/reverser.svg?branch=master)](https://travis-ci.org/villadora/reverser) [![Dependency Status](https://gemnasium.com/villadora/reverser.svg)](https://gemnasium.com/villadora/reverser)

## Install

```bash
npm install reverser
```

## Usage

```javascript
var Reverser = require('reverser');

var reverser = new Reverser({});

reverser.add("/ajax/*", 'hostname:8080');

reverser.add(/ajax/, 'hostname:8080');

```


## License

(The MIT License)

    Copyright (c) 2013, Villa.Gao <jky239@gmail.com>;
    All rights reserved.
