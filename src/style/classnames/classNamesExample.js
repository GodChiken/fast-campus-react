import React, { Component } from 'react';
import classNames from 'classnames';

class ClassNamesExample extends Component {
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default ClassNamesExample;


// // classnames 미적용시
// className={['Button', size].join(' ')}
// className={`Button ${size}`}
//
// // classnames 사용법
//
// classNames('foo', 'bar'); // => 'foo bar'
// classNames('foo', { bar: true }); // => 'foo bar'
// classNames({ 'foo-bar': true }); // => 'foo-bar'
// classNames({ 'foo-bar': false }); // => ''
// classNames({ foo: true }, { bar: true }); // => 'foo bar'
// classNames({ foo: true, bar: true }); // => 'foo bar'
// classNames(['foo', 'bar']); // => 'foo bar'
//
// // 동시에 여러개의 타입으로 받아올 수 도 있습니다.
// classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'
//
// // false, null, 0, undefined 는 무시됩니다.
// classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'