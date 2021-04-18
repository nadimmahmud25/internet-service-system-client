import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({children, ...rest}) => {
    const [loggedInUser,setLoggedInUser,user] = useContext(UserContext);
    // console.log(loggedInUser.email);
    // console.log(rest,children);
    if(false){
      console.log(setLoggedInUser);
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email || user.title ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;