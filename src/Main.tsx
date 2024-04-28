import React, { useState } from "react";
import { HomeScreen } from "./components/HomeScreen";
import { CallScreen } from "./components/CallScreen";
import {
  StreamVideo,
  StreamVideoClient,
} from "@stream-io/video-react-native-sdk";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const apiKey = "mmhfdzb5evj2";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiRW1wZXJvcl9QYWxwYXRpbmUiLCJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0VtcGVyb3JfUGFscGF0aW5lIiwiaWF0IjoxNzE0MTEyMzY3LCJleHAiOjE3MTQ3MTcxNzJ9.wb-dxV_cdOtC417OzBVyLkDSh8EngRWwcmRdEdirfVI";
const userId = "Emperor_Palpatine";
const callId = "DEMO-260424";

const user = {
  id: userId,
  name: "Mission Vao",
  image: `https://getstream.io/random_png/?id=${userId}&name=Mission+Vao`,
};
const client = new StreamVideoClient({ apiKey, user, token });

const Main = () => {
  const [activeScreen, setActiveScreen] = useState("home");
  const goToCallScreen = () => setActiveScreen("call-screen");
  const goToHomeScreen = () => setActiveScreen("home");

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StreamVideo client={client}>
        {activeScreen === "call-screen" ? (
          <CallScreen goToHomeScreen={goToHomeScreen} callId={callId} />
        ) : (
          <HomeScreen goToCallScreen={goToCallScreen} />
        )}
      </StreamVideo>
    </GestureHandlerRootView>
  );
};

export default Main;
