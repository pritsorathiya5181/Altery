import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import styles from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class BottomTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      routeName: 'Home',
      importedContact: [],
    };
  }

  gotoRoute(routeName) {
    this.setState({
      routeName: routeName,
    });
    this.props.navigation.navigate(routeName);
  }

  render() {
    return (
      <View style={styles.paddingView}>
        <View style={styles.container}>
          <View style={styles.iconView}>
            <TouchableOpacity
              onPress={() => {
                this.gotoRoute('Home');
              }}
              style={styles.centerView}>
              {this.props.state.index === 0 ? (
                <View style={styles.view31}>
                  <FontAwesome name="home" size={25} color="#009387" />
                </View>
              ) : (
                <View style={[styles.boxView]}>
                  <Feather name="home" size={25} color="white" />
                </View>
              )}
              <Text
                style={[
                  styles.font12,
                  {color: this.props.state.index === 0 ? '#fff' : '#fff'},
                ]}>
                Home
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconView}>
            <TouchableOpacity
              onPress={() => {
                this.gotoRoute('complaintsListing');
              }}
              style={styles.centerView}>
              {this.props.state.index === 1 ? (
                <View style={styles.view31}>
                  <Ionicons name="list-sharp" size={25} color="#009387" />
                </View>
              ) : (
                <View style={[styles.boxView]}>
                  <Ionicons name="list-outline" size={25} color="white" />
                </View>
              )}
              <Text
                style={[
                  styles.font12,
                  {color: this.props.state.index === 2 ? '#fff' : '#fff'},
                ]}>
                Requestes
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.iconView}>
            <TouchableOpacity
              onPress={() => {
                this.gotoRoute('Profile');
              }}
              style={styles.centerView}>
              {this.props.state.index === 2 ? (
                <View style={styles.view31}>
                  <MaterialCommunityIcons
                    name="account-details"
                    size={25}
                    color="#009387"
                  />
                </View>
              ) : (
                <View style={[styles.boxView]}>
                  <MaterialCommunityIcons
                    name="account-details-outline"
                    size={25}
                    color="white"
                  />
                </View>
              )}
              <Text
                style={[
                  styles.font12,
                  {color: this.props.state.index === 1 ? '#fff' : '#fff'},
                ]}>
                Profile
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
