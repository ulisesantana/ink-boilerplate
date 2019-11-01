import React from 'react';
import chalk from 'chalk';
import test from 'ava';
import {render} from 'ink-testing-library';
import App from '.';

test('greet unknown user', t => {
	const {lastFrame} = render(<App/>);

	t.is(lastFrame(), chalk`Hello, {green Stranger!}\nThanks for using Ink!!`);
});

test('greet user with a name', t => {
	const {lastFrame} = render(<App name="Jane"/>);

	t.is(lastFrame(), chalk`Hello, {green Jane!}\nThanks for using Ink!!`);
});
