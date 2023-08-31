import { View, Text, Image, Dimensions} from 'react-native'
import React, { useState } from 'react'
import { BGimage, Logo } from '../assets'
import { UserinputText } from '../components'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {

    const screenwidth= Math.round(Dimensions.get("window").width);
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const navigation = useNavigation();
  
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
          <UserinputText placeHolder ="Email" isPass={false} setStatValue={setemail} />

          {/* password */}
          <UserinputText placeHolder ="password" isPass={true} setStatValue={setpassword} />

          {/* login */}
          <TouchableOpacity className=" w-full px-4 py-2 rounded-xl bg-primary my-3 flex items-center justify-center">
            <Text className=" py2 text-white text-xl font-semibold">
              Sign in
            </Text>
          </TouchableOpacity>
          <View className=" w-full py12 flex-row items-center justify-center space-x-2">
            <Text className=" text-base text-primaryText">   Don't have an account? </Text>
            <TouchableOpacity onPress={() => (navigation.navigate("Signupscreen"))}>
              <Text className=" text-base font-semibold text-primaryBold">create here</Text>
            </TouchableOpacity>
          </View>

        </View>
        </View>
    </View>
  )
}

export default LoginScreen;