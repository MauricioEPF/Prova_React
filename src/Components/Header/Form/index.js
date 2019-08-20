import React from 'react';

	const From =({user, loading, buttonAction, changeUser,}) => (
			<div className="formContainer">
				<input
					type="text"
					className=""
					value={user}
					placeholder="Usuario ou Org"
					onChange={e => changeUser(e.target.value)}
				/>
				<button className="" onClick={buttonAction}>
					Pesquisar
				</button>

				
			</div>
		);

	export default From;