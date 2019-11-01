import React from 'react';
import chalk from 'chalk';
import test from 'ava';
import {render} from 'ink-testing-library';
import Greeter from './greeter';

test('greet unknown user', t => {
	const {lastFrame} = render(<Greeter/>);

	t.is(lastFrame(), chalk`Hello, {green World!}`);
});

test('greet user with a name', t => {
	const {lastFrame} = render(<Greeter name="Jane"/>);

	t.is(lastFrame(), chalk`Hello, {green Jane!}`);
});
