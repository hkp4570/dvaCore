import React from 'react';
import {connect} from "react-redux";

function app(props) {
    const {login, userInfo} = props;
    return (
        <div>
           <h1>{login ? '已经登录' : '未登录'}</h1>
           <div>
               用户名：{userInfo.name}
           </div> 
        </div>
    );
}
function mapStateToProps(state){
    return {
        login: state.global.login,
        userInfo: state.user.userInfo,
    }
}
function mapDispatchToProps(){
    return {

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(app);
