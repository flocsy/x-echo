# x-echo

[![NPM](https://nodei.co/npm/x-echo.png?downloads=true&stars=true)](https://nodei.co/npm/x-echo/)

[![NPM](https://nodei.co/npm-dl/x-echo.png?months=1)](https://nodei.co/npm/x-echo/)

## Description

node.js module to echo http request headers

## Badges

![dependencies](https://david-dm.org/flocsy/x-echo.png)

## Installation

```
npm install x-echo
```

## Usage

### Server side

Require the module

```javascript
var xecho = require('x-echo');
```

* Echo all http request headers:

```javascript
app.use(xecho());
```

* Echo some http request headers:

```javascript
app.use(xecho(['accept-language', 'user-agent']));
```

* Echo one http request header:

```javascript
app.use(xecho('accept-language'));
```

### X-Echo response headers

All the requested headers will be echoed with lower-case keys and 'x-echo-' prefix:

```
Cache-Control:no-cache
Connection:keep-alive
Content-Type:text/plain; charset=utf-8
Date:Mon, 11 Aug 2014 06:57:50 GMT
x-echo-accept:text/event-stream
x-echo-accept-language:en-US,en;q=0.8,hu;q=0.6,he;q=0.4
X-Powered-By:Express
```

## License

GNU GENERAL PUBLIC LICENSE

## Credits

This module was written by Gavriel Fleischer [x-echo](https://github.com/flocsy/x-echo)

## Change log

#### v1.0

* first release.
