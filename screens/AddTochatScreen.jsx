import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React, { useState } from "react";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { doc, setDoc } from "firebase/firestore";
import { firestoreDB } from "../configs/firebase.config";

const AddTochatScreen = () => {
  const navigation = useNavigation();
  const user = useSelector((state) => state.user.user);

  const [addChat, setaddChat] = useState("");
  const createNewChat = async () => {
    let id = `${Date.now()}`;

    const _doc = {
      _id: id,
      user: user,
      chatName: addChat,
    };

    if (addChat !== "") {
      setDoc(doc(firestoreDB, "chats", id), _doc)
        .then(() => {
          setaddChat("");
          navigation.replace("HomeScreen");
        })
        .catch((err) => {
          alert("error:", err);
        });
    }
  };

  return (
    
    <View className=" flex-1 ">
      <View className=" w-full bg-secondary px-4 py-3 flex-[0.2]">
        <View className="flex-row items-center justify-between w-full px-4 py-12">
          {/* back */}
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="chevron-left" size={30} color={"white"} />
          </TouchableOpacity>

          {/* middle */}

          {/* profile */}
          <View className=" flex-row items-center justify-center space-x-3">
            <Image
              source={{ uri: user?.profilePic }}
              className=" w-10 h-10"
              resizeMode="contain"
            />
          </View>
        </View>
      </View>
      {/* bottom section */}
      <View className="w-full bg-white px-4 py-6 rounded-3xl flex-1 rounded-t-[50px] -mt-10">
        <View className=" w-full px-4 py-4">
          <View className="  w-full flex-row items-center justify-between py-3 px-3 rounded-xl border border-gray-300 space-x-3">
            {/* icon */}
            <Ionicons name="chatbubbles" size={24} color={"#777"} />

            {/* input */}
            <TextInput
              className=" w-full h-12 flex-1 text-lg -mt-2 text-primaryText"
              placeholder="Create chat"
              placeholderTextColor={"#999"}
              value={addChat}
              onChangeText={(text) => setaddChat(text)}
            />

            {/* icon */}
            <TouchableOpacity onPress={createNewChat}>
              <FontAwesome name="send" size={24} color={"#666"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddTochatScreen;
