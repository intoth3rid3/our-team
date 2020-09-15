import React from 'react';
import './Content.css';

const myseed = () => {
	return Math.floor(Math.random() * 200000);
};

const myage = () => {
	return Math.floor(Math.random() * 100);
};

const makeid = length => {
	var result = '';
	var characters = 'abcdefghijklmnopqrstuvwxyz';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};

let rnd = (len = 0, b = 3) => {
	return Math.floor(Math.random() * len + b);
};

// myData();

const Content = ({name, surname}) => {
	return (
		<div className="content__card">
			<img src={'https://avatars.dicebear.com/api/avataaars/' + myseed() + '.svg'} />
			<ul>
				<li>
					Name: <span className="content__capitalize">{makeid(rnd(4, 4))}</span>
				</li>
				<li>
					Surname: <span className="content__capitalize">{makeid(rnd(5, 5))}</span>
				</li>
				<li>Age: {myage()}</li>
			</ul>
		</div>
	);
};

export default Content;
