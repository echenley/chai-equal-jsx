(function(chaiExpectJSX) {
    'use strict';

    if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
        // NodeJS
        module.exports = function(chai, utils) {
            chaiExpectJSX(chai, utils, require('react-element-to-jsx-string'));
        };
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(['react-element-to-jsx-string'], function(reactElementToJSXString) {
            return function(chai, utils) {
                return chaiExpectJSX(chai, utils, reactElementToJSXString);
            };
        });
    } else {
        // Other environment (usually <script> tag): plug in to global chai instance directly.
        chai.use(function(chai, utils) {
            return chaiExpectJSX(chai, utils, reactElementToJSXString);
        });
    }
}(function chaiExpectJSX(chai, utils, reactElementToJSXString) {
    'use strict';

    function collapseWhiteSpace(str) {
        return str.replace(/\s+/g, ' ');
    }

    function equalJSX(expected) {
        var actualJSX = reactElementToJSXString(this._obj);
        var expectedJSX = reactElementToJSXString(expected);

        return this.assert(
            actualJSX === expectedJSX,
            'expected ' + actualJSX + ' to equal ' + expectedJSX,
            'expected ' + actualJSX + ' not to equal ' + expectedJSX
        );
    }

    function includeJSX(expected) {
        var actualJSX = collapseWhiteSpace(reactElementToJSXString(this._obj));
        var expectedJSX = collapseWhiteSpace(reactElementToJSXString(expected));

        return this.assert(
            actualJSX.indexOf(expectedJSX) !== -1,
            'expected ' + actualJSX + ' to include ' + expectedJSX,
            'expected ' + actualJSX + ' not to include ' + expectedJSX
        );
    }

    chai.Assertion.addChainableMethod('equalJSX', equalJSX);
    chai.Assertion.addChainableMethod('includeJSX', includeJSX);

}));
