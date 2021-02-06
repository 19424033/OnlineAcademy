import React from "react";
import { Route } from "react-router-dom";
const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
  console.log(Layout);
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props}></Component>
        </Layout>
      )}
    ></Route>
  );
};

export default AppRoute;
