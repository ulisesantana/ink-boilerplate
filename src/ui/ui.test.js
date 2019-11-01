import React from 'react';
import chalk from 'chalk';
import test, {skip} from 'ava';
import {render} from 'ink-testing-library';
import App from '.';

test('green test', t => {
	t.is(true, true);
});

test('greet unknown user', t => {
	const {lastFrame} = render(<App/>);

	t.is(lastFrame(), chalk`Hello, {green Stranger!}\nThanks for using Ink!!`);
});

skip('greet user with a name', t => {
	const {lastFrame} = render(<App name="Jane"/>);

	t.is(lastFrame(), chalk`Hello, {green Jane!}\nThanks for using Ink!!`);
});

