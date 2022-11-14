import { createContext, useReducer } from "react";


// USER CONTEXT 

const initial_user = { user: null };

const userContext = createContext(initial_user);

const UserProvider = ({ children }) => {

    const [state, userDispatch] = useReducer(userReducer, initial_user);

    return (

        <userContext.Provider value={{ user: state.user, userDispatch }} >

            {children}

        </userContext.Provider>

    );
};


// USER CONTEXT REDUCER

const userReducer = (state, action) => {

    switch (action.type) {
        case "Login":

            return { user: action.payload };

        case "Logout":

            return { user: null };

        default:

            return state;

    }

}


// USER CONTEXT ACTIONS

const LoginAction = (user) => { return { type: "Login", payload: user } }
const LogoutAction = () => { return { type: "Logout" } }


export { UserProvider, userContext, LoginAction, LogoutAction };
