import React from 'react';
import './Button.css';

// Children -> Filho do button, serve para exibir outro resultado
const Button = ({ children, onClick }) => {
	return (
		<button onClick={onClick} className="add-button">
			{children}
		</button>
	);
}

export default Button;