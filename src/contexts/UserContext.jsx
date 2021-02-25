import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
	const [isMobile, setIsMobile] = useState(false);

	return (
		<UserContext.Provider
			value={{
				isMobile,
				setIsMobile,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserProvider;
