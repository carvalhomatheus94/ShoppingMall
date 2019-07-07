import React, { useState, useEffect } from 'react';

import {
  Text, Image, StatusBar, View, Animated
} from 'react-native';
import ProgressBar from '../../component/ProgressBar'
import styles from './styles';
import {colors} from '../../styles';

const Splash = () => {
  const [progress, setprogress] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setprogress(progress + 0.1);
    }, 1000);
  });

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.statusBar} />
      <View style={styles.progressContainer}>
        <ProgressBar
          row
          progress={progress}
          duration={500}
        />
      </View>
    </View>
  );
};

export default Splash;
