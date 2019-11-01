#!/usr/bin/env node

import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import App from './ui';

const cli = meow(`
	Usage
	  $ branch-namer

	Options
		--name, -n  Your name

	Examples
	  $ branch-namer --name=Jane
	  Hello, Jane
`, {
	flags: {
		name: {
			type: 'string',
			alias: 'n'
		}
	}
});

render(React.createElement(App, cli.flags));
