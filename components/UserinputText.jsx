import { View, Text } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { Entypo, MaterialIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';

const UserinputText = ({placeHolder, isPass, setStatValue} ) => {
  const [value, setvalue] = useState("");
  const [showpass, setshowpass] = useState(true);
  const [icon, seticon] = useState(null)
  

  const handleTextchange = (text) => {
      setvalue(text)
      setStatValue(value)

  };

  useLayoutEffect(() => {
    switch(placeHolder){
      case "Full Name":
        return seticon("person");
      case "Email":
        return seticon("email");
      case "password":
        return seticon("lock");
    }
  }, []);
  
  return (
    <View className={`border rounded-2xl px-4 py-4 flex-row items-center justify-between space-x-4 my-2 border-gray-200 `}>
      <MaterialIcons name={icon} size={24} color={"#6c6d83"}/>
      <TextInput 
      className=" flex-1 text-base text-primaryText font-semibold -mt-1"
      value={value}
      placeholder={placeHolder}
      onChangeText={handleTextchange}
      secureTextEntry={isPass && showpass}
      />

      {isPass && (
        <TouchableOpacity onPress={() => setshowpass(!showpass)}>
          <Entypo name={`${showpass ? "eye": "eye-with-line"}`} size={24} color={"#6c6d83"}/>
        </TouchableOpacity>
      )}
    </View>
  )
};

export default UserinputText;