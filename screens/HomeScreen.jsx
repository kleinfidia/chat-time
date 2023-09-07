import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Logo } from "../assets";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { firestoreDB } from "../configs/firebase.config";

const HomeScreen = () => {
  const user = useSelector((state) => state.user.user);
  const [isloading, setisloading] = useState(true);
  const [chats, setchats] = useState(null);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    const chatQuery = query(
      collection(firestoreDB, "chats"),
      orderBy("_id", "desc")
    );

    const unsubscribe = onSnapshot(chatQuery, (querySnapshot) => {
      const chatRooms = querySnapshot.docs.map((doc) => doc.data());
      setchats(chatRooms);
      setisloading(false);
    });

    // stop updates
    return unsubscribe;
  }, []);

  return (
    <View className=" flex-1 ">
      <SafeAreaView>
        <View className=" w-full flex-row items-center justify-between px-4 py-2">
          <Image source={Logo} className=" w-10 h-10 " resizeMode="contain" />
          <TouchableOpacity className=" w-10 h-10 rounded-full border border-primary flex items-center justify-center ">
            <Image
              source={{ uri: user?.profilePic }}
              className=" w-full h-full"
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>

        {/* scroll area */}
        <ScrollView className=" w-full px-4 pt-4 ">
          <View className=" w-full">
            {/* message title */}
            <View className=" w-full flex-row items-center justify-between px-2">
              <Text className=" text-primaryText text-base font-extrabold pb-2">
                Messsages
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("AddTochatScreen")}
              >
                <Ionicons name="chatbox" size={28} color={"#555"} />
              </TouchableOpacity>
            </View>

            {isloading ? (
              <>
                <View className=" w-full flex items-center justify-center">
                  <ActivityIndicator size={"large"} color={"#43C651"} />
                </View>
              </>
            ) : (
              <>
                {chats && chats.length > 0 ? (
                  <>
                    {chats?.map((room) => (
                      <MessageCard key={room._id} room={room} />
                    ))}
                  </>
                ) : (
                  <></>
                )}
              </>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const MessageCard = ({ room }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ChatScreen", { room: room })}
      className=" w-full flex-row items-center justify-start py-2"
    >
      {/* image */}
      <View className=" w-16 h-16 rounded-full flex items-center border-2 border-primary p-1 justify-center">
        <FontAwesome5 name="users" size={24} color="#555" />
      </View>

      {/* content */}
      <View className=" flex flex-1 items-start justify-start ml-4">
        <Text className="text-[#333] text-base font-semibold capitalize">
          {room.chatName}
        </Text>

        <Text className=" text-primaryText text-sm">
          lorem sksj czmjiu znvjh z sdfjuj xvcsjnjsjsj
        </Text>
      </View>

      {/* time */}
      <Text className="text-primary px-4 text-base font-semibold">24 min</Text>
    </TouchableOpacity>
  );
};

export default HomeScreen;
