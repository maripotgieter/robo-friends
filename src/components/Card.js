import React from "react";

const Card = ({ name, email, id }) => {
	return (
		<div className="tc bg-light-green dib br3 ma1 grow bw2 shadow-5 ">
			<img src={`https://robohash.org/${id}test?size=200x200`} alt={name} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Card;
