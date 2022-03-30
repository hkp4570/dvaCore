import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getUser} from "./services/user";

function app(props) {
    const {login, userInfo} = props;
    useEffect(() => {
        getUser().then(res => {
            console.log(res)
        })
    },[])
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
