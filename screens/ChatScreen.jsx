import {
  View,
  Text,
  Image,
  TextInput,
  Platform,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useRef, useState } from "react";
import { TouchableOpacity } from "react-native";
import {
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView } from "react-native";
import { addDoc, collection, doc, serverTimestamp } from "firebase/firestore";
import { useSelector } from "react-redux";
import { firestoreDB } from "../configs/firebase.config";

const ChatScreen = ({ route }) => {
  const { room } = route.params;
  console.log("room:", room);
  const navigation = useNavigation();
  const textInputRef = useRef(null);

  const user = useSelector((state) => state.user.user);

  const handleKeyboardOpen = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  const sendMessage = async () => {
    const timestamp = serverTimestamp();
    const id = `${Date.now()}`;
    const _doc = {
      _id: id,
      roomId: room._id, 
      timestamp: timestamp,
      message: message,
      user: user,
    };
    setmessage("");
    await addDoc(
      collection(doc(firestoreDB, "chats", room._id), "messsages"),
      _doc
    )
      .then(() => {})
      .catch((err) => alert(err));
  };

  const [isloading, setisloading] = useState(false);
  const [message, setmessage] = useState("");
  return (
    <View className=" flex-1 ">
      <View className=" w-full bg-secondary px-4 py-3flex-[0.2]">
        <View className="flex-row items-center justify-between w-full px-4 py-12">
          {/* back */}
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="chevron-left" size={30} color={"white"} />
          </TouchableOpacity>

          {/* middle */}
          <View className=" flex-row items-center justify-center space-x-3">
            <View className=" w-12 h-12 rounded-full border border-white flex items-center justify-center">
              <FontAwesome5 name="users" size={24} color="#fbfbfb" />
            </View>
            <View>
              <Text className=" text-gray-50 text-base font-semibold capitalize">
                {room.chatName.length > 16
                  ? `${room.chatName.slice(0, 16)}..`
                  : room.chatName}
              </Text>
              <Text className=" text-gray-50 text-base font-semibold capitalize">
                online
              </Text>
            </View>
          </View>

          {/* profile */}
          <View className=" flex-row items-center justify-center space-x-3">
            <TouchableOpacity>
              <FontAwesome5 name="video" size={24} color="#fbfbfb" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="phone" size={24} color="#fbfbfb" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo name="dots-three-vertical" size={24} color="#fbfbfb" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* bottom section */}
      <View className="w-full bg-white px-4 py-6 rounded-3xl flex-1 rounded-t-[50px] -mt-10">
        <KeyboardAvoidingView
          className=" flex-1"
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={160}
        >
          <>
            <ScrollView>
              {isloading ? (
                <>
                  <View className=" w-full flex items-center justify-center">
                    <ActivityIndicator size={"large"} color={"#43C651"} />
                  </View>
                </>
              ) : (
                <></>
              )}
            </ScrollView>
            <View className=" w-full flex-row items-center justify-center px-7 space-x-3">
              <View className=" bg-gray-300 rounded-2xl px-4 space-x-4 py-2 flex-row items-center justify-center">
                <TouchableOpacity onPress={handleKeyboardOpen}>
                  <Entypo name="emoji-happy" size={24} color="#555" />
                </TouchableOpacity>
                <TextInput
                  className=" flex-1 h-8 text-base text-primaryText font-semibold"
                  placeholder="Message"
                  placeholderTextColor={"#999"}
                  value={message}
                  onChangeText={(text) => setmessage(text)}
                />
                <TouchableOpacity>
                  <Entypo name="mic" size={24} color="#43C610" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={sendMessage}>
                <FontAwesome name="send" size={24} color="#555" />
              </TouchableOpacity>
            </View>
          </>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default ChatScreen;
