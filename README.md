# chai-equal-jsx

[![NPM version](http://img.shields.io/npm/v/chai-equal-jsx.svg?style=flat-square)](https://www.npmjs.org/package/chai-equal-jsx)
[![Build Status](https://img.shields.io/travis/echenley/chai-equal-jsx.svg?branch=master)](https://travis-ci.org/echenley/chai-equal-jsx)
[![Build Status](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](LICENSE)
[![Downloads](https://img.shields.io/npm/dm/chai-equal-jsx.svg?style=flat-square)](http://npm-stat.com/charts.html?package=chai-equal-jsx)

Adds `equalJSX` and `includeJSX` methods to chai assertions. Uses Algolia's [react-element-to-jsx-string](https://github.com/algolia/react-element-to-jsx-string) under the hood.

## Installation

```
npm install -D chai-equal-jsx
```

## Setup

```javascript
import chai from 'chai';
import equalJSX from 'chai-equal-jsx';

chai.use(equalJSX);
```

## Usage

The following tests are all passing:

### Expect

```javascript
class TestComponent extends React.Component {}

// equalJSX
expect(<div />).to.equalJSX(<div />);
expect(<TestComponent />).to.equalJSX(<TestComponent />);

expect(<div />).to.not.equalJSX(<span />);
expect(<TestComponent />).to.not.equalJSX(<span />);

// includeJSX
expect(<div><TestComponent /></div>).to.includeJSX(<TestComponent />);
expect(<div><TestComponent /><span /></div>).to.includeJSX(<span></span>);

expect(<TestComponent />).to.not.includeJSX(<span></span>);
expect(<div><span /><TestComponent /></div>).to.not.includeJSX(<a />);
```

### Should

```javascript
chai.should();

class TestComponent extends React.Component {}

// equalJSX
(<div />).should.equalJSX(<div />);
(<TestComponent />).should.equalJSX(<TestComponent />);

(<div />).should.not.equalJSX(<span />);
(<TestComponent />).should.not.equalJSX(<span />);

// includeJSX
(<div><TestComponent /></div>).should.includeJSX(<TestComponent />);
(<div><TestComponent /><span /></div>).should.includeJSX(<span></span>);

(<TestComponent />).should.not.includeJSX(<span></span>);
(<div><span /><TestComponent /></div>).should.not.includeJSX(<a />);
```

See `test/index.js` for usage in context.