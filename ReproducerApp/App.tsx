// App.js

import React, {useEffect } from 'react';
import {View, StyleSheet, Image} from 'react-native';
import RNFS from 'react-native-fs';

const App = () => {
  useEffect(() => {

    // Copy the testing images at the directory at path `RNFS.DocumentDirectoryPath`
    // then update the path in the `path` variable
    console.log('Directory path', RNFS.DocumentDirectoryPath);
  }, []);

  const path = "COPY_YOUR_LOCAL_PATH_HERE";
  return (
      <View style={styles.container}>
        <Image
            source={{
              uri: path + "test",
            }}
            style={{width: 200, height: 200}}
        />
        <Image
            source={{
              uri: path + "test2.png",
            }}
            style={{width: 200, height: 200}}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  pathContainer: {
    marginBottom: 15,
  },
  pathName: {
    fontWeight: 'bold',
  },
  path: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default App;
