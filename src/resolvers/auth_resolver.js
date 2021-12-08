const usersResolver = {
    Query: {
        userDetailById: (_, { userId }, { dataSources, userIdToken }) => {
            if (userId == userIdToken)
                return dataSources.authAPI.getUser(userId)
            else
                return null
        },
    },
    Mutation: {
        signUpUser: async (_, { userInput }, { dataSources }) => {
            
            const authInput = {
                email: userInput.email,
                first_name: userInput.first_name,
                last_name: userInput.last_name,
                phone_number: userInput.phone_number,
                address: userInput.address,
                password: userInput.password,                
            }
            return await dataSources.authAPI.createUser(authInput);
        },
        logIn: (_, { credentials }, { dataSources }) =>
            dataSources.authAPI.authRequest(credentials),
        refreshToken: (_, { refresh }, { dataSources }) =>
            dataSources.authAPI.refreshToken(refresh),
    }
};
module.exports = usersResolver;
