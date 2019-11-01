import React from 'react';
import PropTypes from 'prop-types';
import {Text, Color} from 'ink';

export default function Greeter({name}) {
	return (

		<Text>
			Hello, <Color green>{name}!</Color>
		</Text>
	);
}

Greeter.propTypes = {
	name: PropTypes.string
};

Greeter.defaultProps = {
	name: 'World'
};

