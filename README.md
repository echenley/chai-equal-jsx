# chai-expect-jsx

A chai port of Algolia's [expectJSX](https://github.com/algolia/expect-jsx).

## Usage

The following tests are all passing:

```javascript
import React from 'react';
import chai, { expect } from 'chai';
import equalJSX from '../chai-equal-jsx';

chai.use(equalJSX);
chai.should();

class TestComponent extends React.Component {}

expect(<div />).to.equalJSX(<div />);
expect(<TestComponent />).to.equalJSX(<TestComponent />);

(<div />).should.equalJSX(<div />);
(<TestComponent />).should.equalJSX(<TestComponent />);

expect(<div />).to.not.equalJSX(<span />);
expect(<TestComponent />).to.not.equalJSX(<span />);

(<div />).should.not.equalJSX(<span />);
(<TestComponent />).should.not.equalJSX(<span />);

expect(<div><TestComponent /></div>).to.includeJSX(<TestComponent />);
expect(<div><TestComponent /><span /></div>).to.includeJSX(<span></span>);

(<div><TestComponent /></div>).should.includeJSX(<TestComponent />);
(<div><TestComponent /><span /></div>).should.includeJSX(<span></span>);

expect(<TestComponent />).to.not.includeJSX(<span>Not Me</span>);
expect(<div><span /><TestComponent /></div>).to.not.includeJSX(<a />);

(<TestComponent />).should.not.includeJSX(<span>Not Me</span>);
(<div><span /><TestComponent /></div>).should.not.includeJSX(<a />);
```

See `test/index.js` for usage in context.