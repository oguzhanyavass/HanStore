import React from "react";
import LottieView from "lottie-react-native";

function Error(){
    return <LottieView 
    source={require('../../asstes/err.json')}
    autoPlay/>;
}

export default Error;