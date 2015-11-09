import React from 'react';
import chai, { expect } from 'chai';
import expectJSX from '../chai-equal-jsx';

chai.use(expectJSX);
chai.should();

class TestComponent extends React.Component {}

describe('Chai Expect JSX Plugin', () => {
    describe('API', () => {
        it('has equalJSX', () => {
            expect(expect().to.equalJSX).to.be.a('function');
            expect((<div />).should.equalJSX).to.be.a('function');
        });

        it('has includeJSX', () => {
            expect(expect().to.includeJSX).to.be.a('function');
            expect((<div />).should.includeJSX).to.be.a('function');
        });
    });

    describe('equalJSX', () => {
        it('should work', () => {
            // expect syntax
            expect(<div />).to.equalJSX(<div />);
            expect(<TestComponent />).to.equalJSX(<TestComponent />);

            // should syntax
            (<div />).should.equalJSX(<div />);
            (<TestComponent />).should.equalJSX(<TestComponent />);
        });
    });

    describe('not.equalJSX', () => {
        it('should work', () => {
            // expect syntax
            expect(<div />).to.not.equalJSX(<span />);
            expect(<TestComponent />).to.not.equalJSX(<span />);

            // should syntax
            (<div />).should.not.equalJSX(<span />);
            (<TestComponent />).should.not.equalJSX(<span />);
        });
    });

    describe('includeJSX', () => {
        it('should work', () => {
            // expect syntax
            expect(<div><TestComponent /></div>).to.includeJSX(<TestComponent />);
            expect(<div><TestComponent /><span /></div>).to.includeJSX(<span></span>);

            // should syntax
            (<div><TestComponent /></div>).should.includeJSX(<TestComponent />);
            (<div><TestComponent /><span /></div>).should.includeJSX(<span></span>);
        });
    });

    describe('not.includeJSX', () => {
        it('should work', () => {
            // expect syntax
            expect(<TestComponent />).to.not.includeJSX(<span>Not Me</span>);
            expect(<div><span /><TestComponent /></div>).to.not.includeJSX(<a />);

            // should syntax
            (<TestComponent />).should.not.includeJSX(<span>Not Me</span>);
            (<div><span /><TestComponent /></div>).should.not.includeJSX(<a />);
        });
    });
});
