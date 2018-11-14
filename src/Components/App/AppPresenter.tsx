// 컴포넌트의 props에 대해서 런타임 환경(개발 환경 only)에서 타입체크
import PropTypes from "prop-types";
import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AddPlace from "../../Routes/AddPlace";
import EditAccount from "../../Routes/EditAccount";
import FindAddress from "../../Routes/FindAddress";
import Home from "../../Routes/Home";
import OutHome from "../../Routes/OutHome";
import PhoneLogin from "../../Routes/PhoneLogin";
import Places from "../../Routes/Places";
import Ride from "../../Routes/Ride";
import Settings from "../../Routes/Settings";
import SocialLogin from "../../Routes/SocialLogin";
import VerifyPhone from "../../Routes/VerifyPhone";

// isLoggedIn 타입 정의
interface IProps {
    isLoggedIn: boolean;
}

// SFC = Stateless Functional Component // Promise 와 비슷한 역할
const AppPresenter: React.SFC<IProps> = ({ isLoggedIn }) => (
    <BrowserRouter>
        {/* 로그인 확인 조건문 */}
        { isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes /> }
    </BrowserRouter>
);

// Log Out일 경우
const LoggedOutRoutes: React.SFC = () => (
    <Switch>
        <Route path={"/"} exact={true} component={OutHome} />
        <Route path={"/phone-login"} component={PhoneLogin} />
        <Route path={"/verify-phone/:number"} component={VerifyPhone} />
        <Route path={"/social-login"} component={SocialLogin} />
        <Redirect from={"*"} to={"/"} />
    </Switch>
);

// Log In일 경우
const LoggedInRoutes: React.SFC = () => (
    <Switch>
        <Route path={"/"} exact={true} component={Home} />
        <Route path={"/ride"} exact={true} component={Ride} />
        <Route path={"/edit-account"} exact={true} component={EditAccount} />
        <Route path={"/settings"} exact={true} component={Settings} />
        <Route path={"/places"} exact={true} component={Places} />
        <Route path={"/add-place"} exact={true} component={AddPlace} />
        <Route path={"/find-address"} exact={true} component={FindAddress} />
        <Redirect from={"*"} to={"/"} />
    </Switch>
);

// Prop Types 를 활용해서 AppPresenter 변수 타입 정의 //불린//요구됨 
AppPresenter.propTypes ={
    isLoggedIn: PropTypes.bool.isRequired
};

export default AppPresenter;