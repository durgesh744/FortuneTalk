import { Text, View } from 'react-native'
import AstrologerList from '../../component/UI/AstrologerList/AstrologerList'

const Home = ({ navigation, route }) => {
  return (
    <View style={{ paddingTop: 20 }}>
      <AstrologerList
        navigation={navigation}
        item={{
          id: 'astrologer_id',
          image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbesindia.com%2Farticle%2Fbrand-connect%2Fastrologer-pandit-raj-kumar-sharma-gets-global-recognition%2F56335%2F1&psig=AOvVaw2eCM76i1OTrge6WnY_lxoZ&ust=1714024233959000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIDlkf-T2oUDFQAAAAAdAAAAABAE',
          owner_name: 'Durgesh Name',
          experties: 'Astrologer Expertise',
          language: 'Languages spoken',
          current_status: 'Astrologer Status',
          max_call_min_last_user: 'Maximum wait time if busy',
        }}
      />
    </View>
  )
}

export default Home
