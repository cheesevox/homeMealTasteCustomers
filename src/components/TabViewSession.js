import * as React from 'react';
import { View, useWindowDimensions, Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';



const LunchRoute = ({session}) => (
  <View >
    {/* <Text style={{color:'black'}}>{route?.key}</Text> */}
    <Text>{session?.areaDto?.address}</Text>
    <Text>Hehehe</Text>
  </View>
);

const DinnerRoute = (route) => (
  <View>
    {/* <Text>{route.sessionId}</Text> */}

  </View>
);
const EveningRoute = (route) => (
  <View>
    {/* <Text>{route.sessionId}</Text> */}
  </View>
);


const TabViewSession = ({session}) => {
  const renderScene = ({ route }) => {
    switch (route.key) {
      case 1:
        return <LunchRoute session={session} />;
      case 2:
        return <DinnerRoute />;
      case 3:
        return <EveningRoute />;
      default:
        return null;
    }
  };
  console.log("SEssion TYPEEEEEEE", session)
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key:1, title: 'Lunch' },
    { key:2, title: 'Dinner' },
    { key:3, title: 'Evening' },
  ]);

  return (
    <TabView
      style={{
        backgroundColor: 'white',
        padding: 5
      }}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
export default TabViewSession