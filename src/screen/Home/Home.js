import { Button, Text, View } from 'react-native'
import AstrologerList from '../../component/UI/AstrologerList/AstrologerList'
import { removeItemFromLocalStorage } from '../../helper/useLocalStorage'
import { useGetAstrologers } from '../../hooks/astrologer'
import { useGetGroupChatDetails, useSendRequest } from '../../hooks/chat'

const Home = ({ navigation, route }) => {
  const { astro } = useGetAstrologers()
  const { sendRequest } = useSendRequest()
  const { handleChat, chat } = useGetGroupChatDetails()

  const handleLogout = async () => {
    await removeItemFromLocalStorage("user")
    navigation.navigate("login")
  }

  const handleRequest = (item) => {
    sendRequest({ name: "single", members: [item.id] })
  }

  const handleWithAstroChat = (item) => {
    handleChat(item.id)
    if (chat.length > 0) {
      navigation.navigate("chat", {
        chatId: chat[0]?._id,
        members: chat[0]?.members
      })
    }
  }

  return (
    <>
      <View style={{ paddingTop: 20, flexDirection: "row" }}>
        {astro.data && astro.data.map((item, index) => {
          return (
            <AstrologerList
              key={index}
              navigation={navigation}
              item={{
                id: item.astrologerId.id,
                image: item.astrologerId.profile_image,
                owner_name: item.displayName,
                experties: item.mainExpertise,
                language: item.language,
                current_status: 'Astrologer Status',
                max_call_min_last_user: 'Maximum wait time if busy',
              }}
              handleRequest={handleRequest}
              handleWithAstroChat={handleWithAstroChat}
            />
          )
        })}
      </View>
      <Button title='Logout' onPress={handleLogout}></Button>
    </>
  )
}

export default Home
