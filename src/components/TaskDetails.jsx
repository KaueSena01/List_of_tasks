import React from 'react';
import { useParams } from 'react-router';
import {useHistory} from 'react-router-dom';
import Button from './Button.jsx';

import './TaskDetails.css'; 
const TaskDetails = () => {
	const params = useParams();

	const history = useHistory();
	const handleBackButtonClick = () => {
		history.goBack();
	}
	return (
		<>
			<div className="back-button-container">
				<Button onClick={handleBackButtonClick}>Voltar</Button>				
			</div>
			<div className="task-details-container">
				<h2>{params.taskTitle}</h2>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
			</div>
		</>
	);
}

export default TaskDetails;