import React from "react";
//* Higher Order Component - is a component (HOC) that renders another component (child)
//* main goal of HOC  - to reuse code

//todo 1) Creating a WrappedComponent
const Info = ({ info }) => {
  return (
    <div>
      <h1>Info</h1>
      <p>Details: {info}</p>
    </div>
  );
};
//todo 2) Passing a WrappedComponent to a HOC as arguement

// const withAdminWarning = (WrappedComponent) => {
//   //* returns a HOC below
//   return (props) => (
//     <div>
//       {props.isAdmin && <h3>This is private info. Pls dont's share!</h3>}
//       <WrappedComponent {...props} />
//     </div>
//   );
// };

// const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
  //* returns a HOC below
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please login to view the info!</p>
      )}
    </div>
  );
};

const AuthInfo = requireAuthentication(Info);

export default AuthInfo;
