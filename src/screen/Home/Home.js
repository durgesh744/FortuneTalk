import { Button, Text, View } from 'react-native'
import AstrologerList from '../../component/UI/AstrologerList/AstrologerList'
import { removeItemFromLocalStorage } from '../../helper/useLocalStorage'
import { useGetAstrologers } from '../../hooks/astrologer'

const Home = ({ navigation, route }) => {
  const { astro } = useGetAstrologers()

  const handleLogout = async () => {
    await removeItemFromLocalStorage("user")
    navigation.navigate("login")
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
                id: index,
                image: item.astrologerId.profile_image,
                owner_name: item.displayName,
                experties: item.mainExpertise,
                language: item.language,
                current_status: 'Astrologer Status',
                max_call_min_last_user: 'Maximum wait time if busy',
              }}
            />
          )
        })}
      </View>
      <Button title='Logout' onPress={handleLogout}></Button>
    </>
  )
}

export default Home
