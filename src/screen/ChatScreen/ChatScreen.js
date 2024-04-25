import React, { useCallback, useEffect, useState } from 'react'
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors, Sizes } from '../../assets/style'
import MyStatusBar from '../../component/common/MyStatusBar'
import Loader from '../../component/common/Loader'
import { KeyboardAvoidingView } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { getSocket } from '../../context/socket'

const ChatScreen = () => {
    const [isLoading, setIsLoading] = useState([]);
    const [messages, setMessages] = useState([])
    const socket = getSocket()
    console.log(socket.connected, "socket" , socket.id)

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages =>
            GiftedChat.append(previousMessages, messages),
        )
        console.log(messages)
    }, [])

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ])
    }, [])

    return (
        <View style={{ flex: 1, backgroundColor: Colors.primaryLight }}>
            <MyStatusBar
                backgroundColor={Colors.primaryLight}
                barStyle={'light-content'}
            />
            <Loader visible={isLoading} />
            {header()}

            <KeyboardAvoidingView style={styles.container}>
                <ImageBackground source={require('../../assets/images/chat_background.png')}
                    style={{ flex: 1, width: '100%', height: '100%' }}>
                    <GiftedChat
                        messages={messages}
                        onSend={messages => onSend(messages)}
                        user={{
                            _id: 1,
                        }}
                    />
                </ImageBackground>
            </KeyboardAvoidingView>
        </View>
    )
}

function header() {
    return (
        <View
            style={{
                padding: Sizes.fixPadding * 1.5,
                ...styles.row,
                justifyContent: 'space-between',
            }}>
            <TouchableOpacity
                onPress={() => end_chat()}
                style={{
                    alignSelf: 'flex-start',
                    flex: 0,
                }}>
                <AntDesign
                    name="leftcircleo"
                    color={Colors.white}
                    size={Sizes.fixPadding * 2.2}
                />
            </TouchableOpacity>
            <Text
                style={{
                    textAlign: 'center',
                    flex: 0.6,
                }}>
                {/* {astroData?.owner_name}  */}
                Durgesh
            </Text>
            <TouchableOpacity
                disabled
                activeOpacity={0.8}
                onPress={() => on_share()}
                style={{ flex: 0 }}>
            </TouchableOpacity>
        </View>
    );
}


export default ChatScreen

const styles = StyleSheet.create({
    row: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: Colors.whiteDark,
        borderTopLeftRadius: Sizes.fixPadding * 4,
        elevation: 8,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowColor: Colors.blackLight,
    },
});