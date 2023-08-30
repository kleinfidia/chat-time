import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { TextInput } from 'react-native'

const UserinputText = (placeHolder, isPass, setStatValue ) => {
  const [value, setvalue] = useState("")
  

  const handleTextchange = (text) => {
      setvalue(text)
      setStatValue(value)

  }
  
  return (
    <View className={`border rounded-2xl px-4 py-6 flex-row items-center justify-between space-x-4 my2 border-gray-200 `}>
      <MaterialIcons name="person" size={24} color={"#6c6d83"}/>
      <TextInput 
      className=" flex-1 text-base text-primaryText font-semibold -mt-1"
      value={value}
      placeholder={placeHolder}
      onChangeText={handleTextchange}
      />
    </View>
  )
}

export default UserinputText;