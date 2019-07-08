import React from 'react';
import {
  View, StatusBar, FlatList, ScrollView,
} from 'react-native';
import { Banner, Scroll } from './styles';
import { Content } from '../../styles/general';
import { colors }  from '../../styles';
import Header from '../../component/Header';
import SwiperComponent from '../../component/SwiperComponent';
import CarrouselProduct from '../../component/CarrouselProduct';
import CarrouselCategory from '../../component/CarrouselCategory';
import ListPromocoes from '../../json/ListPromocoes';
import ListCategory from '../../json/ListCategory';

const Home = ({ navigation }) => {
  return (
    <Content>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusBar} />
      <Header navigation={navigation} />
      <ScrollView>
        <Banner>
          <SwiperComponent/>
        </Banner>
        <View>
          <Scroll horizontal={true}>
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
          </Scroll>
        </View>
        <View>
        <Scroll horizontal={true}>
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
        </Scroll>
        </View>
      </ScrollView>
    </Content>
  );
}

export default Home;
