import { View, Text, Image, Dimensions} from 'react-native'
import React, { useState } from 'react'
import { BGimage, Logo } from '../assets'
import { UserinputText } from '../components'

const LoginScreen = () => {

    const screenwidth= Math.round(Dimensions.get("window").width);
    const [email, setemail] = useState("");
  
  return (
    <View className =" flex-1 items-center justify-start">
        <Image source={BGimage} resizeMode='cover' className="h-96  " style={{width: screenwidth}}/>

        {/* main view */}
        <View className=" w-full h-full bg-white rounded-tl-[90px] -mt-44 flex items-center justify-start py-6 px-6 space-y-6">
          <Image source={Logo} className=" w-16 h-16  " resizeMode='contain'/>

          <Text className=" py-2 text-primaryText font-semibold text-xl"> Welcome Back</Text>


        <View className=" w-full flex items-center justify-center">
          {/* alert */}

          {/* email */} 
          <UserinputText placeholder ="Email" isPass={false} setStatValue={email} setStateFunction={setemail}/>

          {/* password */}

          {/* login */}

        </View>
        </View>
    </View>
  )
}

export default LoginScreen