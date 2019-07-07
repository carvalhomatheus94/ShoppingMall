import React from 'react';
import {
  View, StatusBar, FlatList, ScrollView,
} from 'react-native';
import Header from '../../component/Header';
import SwiperComponent from '../../component/SwiperComponent';
import CarrouselProduct from '../../component/CarrouselProduct';
import CarrouselCategory from '../../component/CarrouselCategory';

import styles from './styles';
import { colors, general }  from '../../styles';
import ListPromocoes from '../../json/ListPromocoes';
import ListCategory from '../../json/ListCategory';

const Home = ({ navigation }) => {
  return (
    <View
      style={styles.container}
    >
      <StatusBar barStyle="light-content" backgroundColor={colors.statusBar} />
      <Header navigation={navigation} />
      <ScrollView>
        <View style={styles.wrapBanner}>
          <SwiperComponent/>
        </View>
        <View>
          <ScrollView horizontal={true} style={styles.scrollHorizontal}>
            <FlatList
              data={ListPromocoes}
              contentContainerStyle={{ flexDirection: 'row' }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) =>
                <CarrouselProduct
                  data={item}
                />
              }
            />
          </ScrollView>
        </View>
        <View>
        <ScrollView horizontal={true} style={styles.scrollHorizontal}>
          <FlatList
            data={ListCategory}
            contentContainerStyle={{ flexDirection: 'row' }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) =>
              <CarrouselCategory
                data={item}
              />
            }
          />
        </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

export default Home;
