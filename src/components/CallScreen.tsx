import React, { useEffect } from "react";
import {
  Call,
  StreamCall,
  useStreamVideoClient,
  CallContent
} from "@stream-io/video-react-native-sdk";
import { Button, Text, View, StyleSheet } from "react-native";

type Props = { goToHomeScreen: () => void; callId: string };

export const CallScreen = ({ goToHomeScreen, callId }: Props) => {
  const [call, setCall] = React.useState<Call | null>(null);
  const client = useStreamVideoClient();

  useEffect(() => {
    const call = client.call('default', callId);
    call.join({ create: true })
      .then(() => setCall(call));
  }, [client]);
  
  if (!call) {
    return <Text>Joining call...</Text>;
  }
  
  return (
    <StreamCall call={call}>
    <View style={styles.container}>
      <Text style={styles.text}>Here we will add Video Calling UI</Text>
      <Button title="Go back" onPress={goToHomeScreen} />
      <CallContent
        onHangupCallHandler={goToHomeScreen}
      />
    </View>
  </StreamCall>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});