import { Redirect, Route } from "react-router";

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            { ...rest }
            render={ props =>
                localStorage.getItem( 'idToken' ) ?
                    <Component { ...props } /> :
                    <Redirect to='/' />
            }
            />
    )
}

export default PrivateRoute;
