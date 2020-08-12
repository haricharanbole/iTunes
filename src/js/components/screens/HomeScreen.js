/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from './styles/styles';

const tabList = ['Popular', 'Recent', 'Most Played'];

const HomeScreen = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedTab, setSelectedTab] = useState(tabList[0]);

  useEffect(() => {
    fetch('https://itunes.apple.com/search?term=Michael+jackson')
      .then((response) => response.text())
      .then((textString) => {
        setData(JSON.parse(textString).results);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const getListData = () => {
    switch (selectedTab) {
      case 'Popular':
        return data.slice(0, 15);
      case 'Recent':
        return data.slice(15, 30);
      case 'Most Played':
        return data.slice(30, 50);
      default:
        return data;
    }
  };
  const renderListItem = (item) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => props.navigation.navigate('song', {song: item})}>
      <View style={styles.itemImageContainer}>
        <Image style={styles.itemImage} source={{uri: item.artworkUrl100}} />
      </View>
      <View style={styles.itemDetailsContainer}>
        <Text style={styles.itemMainText}>{item.trackName}</Text>
        <Text style={styles.itemSubText}>{item.artistName}</Text>
      </View>
      <View style={styles.itemDurationContainer}>
        <Text style={styles.itemDurationText} />
        <Text style={styles.itemDurationText}>
          {`${Math.floor(item.trackTimeMillis / 60000)}:${(
            item.trackTimeMillis - Math.floor(item.trackTimeMillis / 60000)
          )
            .toString()
            .slice(0, 2)}`}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.rootContainer}>
          <View style={styles.headerContainer}>
            <Text>Music</Text>
          </View>
          <View style={styles.tabContainer}>
            {tabList.map((tab) => (
              <View
                key={tab}
                style={[styles.tabItemContainer, {height: '100%'}]}>
                <TouchableOpacity
                  style={[
                    styles.tabItemContainer,
                    {
                      height: '98%',
                    },
                  ]}
                  onPress={() => setSelectedTab(tab)}>
                  <Text
                    style={[
                      styles.tabText,
                      {
                        color: tab === selectedTab ? 'black' : 'grey',
                        fontWeight: tab === selectedTab ? 'bold' : 'normal',
                      },
                    ]}>
                    {tab}
                  </Text>
                </TouchableOpacity>
                <View
                  style={[
                    styles.tabItemContainer,
                    {
                      backgroundColor:
                        tab === selectedTab ? 'blue' : 'transparent',
                      height: '2%',
                    },
                  ]}
                />
              </View>
            ))}
          </View>
          <View style={styles.listContainer}>
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <FlatList
                data={getListData()}
                keyExtractor={({trackId}, index) => trackId.toString()}
                renderItem={({item}) => renderListItem(item)}
                showsVerticalScrollIndicator={false}
              />
            )}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
