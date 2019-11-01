import React from 'react';
import PropTypes from 'prop-types';
import {Text} from 'ink';
import {Greeter} from './components';

const App = ({name}) => (
	<>
		<Greeter name={name}/>
		<Text>
		Thanks for using Ink!!
		</Text>
	</>
);

App.propTypes = {
	name: PropTypes.string
};

App.defaultProps = {
	name: 'Stranger'
};

export default App;
