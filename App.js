/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ListView,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const MOCKED_STATION_DATA = [
  {
    name: "GreenLots Station 1",
    rating: "Rating 9.1",
    status: "Avaliable slots - 3/5",
    posters: { thumbnail: "https://images.669pic.com/element_pic/41/79/86/85/f8e9c34727cda752239150da40ea6919.jpg" }
  },
  {
    name: "EVgo Station 1",
    rating: "Rating 9.1",
    status: "Avaliable slots - 3/5",
    posters: { thumbnail: "https://images.669pic.com/element_pic/41/79/86/85/f8e9c34727cda752239150da40ea6919.jpg" }
  },
  {
    name: "ChargePoint Station 1",
    rating: "Rating 9.1",
    status: "Avaliable slots - 3/5",
    posters: { thumbnail: "https://images.669pic.com/element_pic/41/79/86/85/f8e9c34727cda752239150da40ea6919.jpg" }
  },
  {
    name: "GreenLots Station 2",
    rating: "Rating 9.1",
    status: "Avaliable slots - 3/5",
    posters: { thumbnail: "https://images.669pic.com/element_pic/41/79/86/85/f8e9c34727cda752239150da40ea6919.jpg" }
  },
  {
    name: "GreenLots Station 3",
    rating: "Rating 9.1",
    status: "Avaliable slots - 3/5",
    posters: { thumbnail: "https://images.669pic.com/element_pic/41/79/86/85/f8e9c34727cda752239150da40ea6919.jpg" }
  },
  {
    name: "EVgo Station 2",
    rating: "Rating 9.1",
    status: "Avaliable slots - 3/5",
    posters: { thumbnail: "https://images.669pic.com/element_pic/41/79/86/85/f8e9c34727cda752239150da40ea6919.jpg" }
  },
  {
    name: "ChargePoint Station 2",
    rating: "Rating 9.1",
    status: "Avaliable slots - 3/5",
    posters: { thumbnail: "https://images.669pic.com/element_pic/41/79/86/85/f8e9c34727cda752239150da40ea6919.jpg" }
  },


  ];


const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Image source={{uri: MOCKED_STATION_DATA[0].posters.thumbnail}} style={styles.thumbnail} />
              <View style={styles.rightContainer}>
                <Text style={styles.sectionTitle}>{MOCKED_STATION_DATA[0].name}</Text>
                <Text style={styles.sectionDescription}>
                  {MOCKED_STATION_DATA[0].rating}
                </Text>
                <Text style={styles.sectionDescription}>
                  {MOCKED_STATION_DATA[0].status}
                </Text>
              </View>
            </View>
            <View style={styles.sectionContainer}>
              <Image source={{uri: MOCKED_STATION_DATA[1].posters.thumbnail}} style={styles.thumbnail} />
              <View style={styles.rightContainer}>
                <Text style={styles.sectionTitle}>{MOCKED_STATION_DATA[1].name}</Text>
                <Text style={styles.sectionDescription}>
                  {MOCKED_STATION_DATA[1].rating}
                </Text>
                <Text style={styles.sectionDescription}>
                  {MOCKED_STATION_DATA[1].status}
                </Text>
              </View>
            </View>
            <View style={styles.sectionContainer}>
              <Image source={{uri: MOCKED_STATION_DATA[2].posters.thumbnail}} style={styles.thumbnail} />
              <View style={styles.rightContainer}>
                <Text style={styles.sectionTitle}>{MOCKED_STATION_DATA[2].name}</Text>
                <Text style={styles.sectionDescription}>
                  {MOCKED_STATION_DATA[2].rating}
                </Text>
                <Text style={styles.sectionDescription}>
                  {MOCKED_STATION_DATA[2].status}
                </Text>
              </View>
            </View>
            <View style={styles.sectionContainer}>
              <Image source={{uri: MOCKED_STATION_DATA[3].posters.thumbnail}} style={styles.thumbnail} />
              <View style={styles.rightContainer}>
                <Text style={styles.sectionTitle}>{MOCKED_STATION_DATA[3].name}</Text>
                <Text style={styles.sectionDescription}>
                  {MOCKED_STATION_DATA[3].rating}
                </Text>
                <Text style={styles.sectionDescription}>
                  {MOCKED_STATION_DATA[3].status}
                </Text>
              </View>
            </View>
            <View style={styles.sectionContainer}>
              <Image source={{uri: MOCKED_STATION_DATA[4].posters.thumbnail}} style={styles.thumbnail} />
              <View style={styles.rightContainer}>
                <Text style={styles.sectionTitle}>{MOCKED_STATION_DATA[4].name}</Text>
                <Text style={styles.sectionDescription}>
                  {MOCKED_STATION_DATA[4].rating}
                </Text>
                <Text style={styles.sectionDescription}>
                  {MOCKED_STATION_DATA[4].status}
                </Text>
              </View>
            </View>
            <View style={styles.sectionContainer}>
              <Image source={{uri: MOCKED_STATION_DATA[5].posters.thumbnail}} style={styles.thumbnail} />
              <View style={styles.rightContainer}>
                <Text style={styles.sectionTitle}>{MOCKED_STATION_DATA[5].name}</Text>
                <Text style={styles.sectionDescription}>
                  {MOCKED_STATION_DATA[5].rating}
                </Text>
                <Text style={styles.sectionDescription}>
                  {MOCKED_STATION_DATA[5].status}
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  rightContainer: {
    flex: 1,
  },
  sectionTitle: {
    marginLeft: 18,
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginLeft: 18,
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  thumbnail: {
    width: 53,
    height: 81
  }
});

export default App;
