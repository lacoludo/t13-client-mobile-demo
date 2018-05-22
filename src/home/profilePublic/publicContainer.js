import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  ScrollView,
  Button
} from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { Body, Left, List, ListItem } from "native-base";
import { Constants, LinearGradient } from "expo";

import { Text, Avatar, Theme, Images, NavHeader } from "../../components";

export default class publicContainer extends Component {
  static navigationOptions = {
    tabBarLabel: "ARTISTS",
    tabBarIcon: () => {
      return (
        <Image
          source={require("../../Images/icons/user.png")}
          style={{ width: 20, height: 20 }}
        />
      );
    }
  };

  render() {
    const { params } = this.props.navigation.state;
    return <View style={styles.container}>
        {/* <NavHeader title="Profile" back {...{ navigation }} /> */}
        <View style={styles.header}>
          <Image style={styles.cover} source={{ uri: params.musician.photo }} />
          <View style={styles.title}>
            <Text type="header2" style={styles.outline}>
              {params.musician.name}
            </Text>
          </View>
          <Avatar size={avatarSize} style={styles.avatar} />
        </View>
        <ScrollView>
          <View style={styles.padding}>
            <List>
              <ListItem icon>
                <Left>
                  <Icon name="map-pin" size={25} color="white" />
                </Left>
                <Body>
                  <Text style={styles.textColor}>
                    {params.musician.localization}
                  </Text>
                </Body>
              </ListItem>
              {/* <ListItem icon>
                <Left>
                  <Icon name="star" size={25} color="white" />
                </Left>
                <Body style={styles.inlineTextWrap}>
                  {params.musician.skills.map((skill, index) => (
                    <Text style={styles.textColor}>{skill}</Text>
                  ))}
                </Body>
              </ListItem> */}
              <ListItem icon>
                <Left>
                  <Icon name="video" size={25} color="white" />
                </Left>
                <Body>
                  <Text style={styles.textColor}>{params.musician.youtube}</Text>
                  {/* <Button
                    title="YouTube"
                    onPress={this._handleOpenWithWebBrowser}
                    style={styles.button}
                  /> */}
                </Body>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Icon name="headphones" size={25} color="white" />
                </Left>
                <Body>
                  <Text style={styles.textColor}>{params.musician.soundcloud}</Text>
                </Body>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Icon name="phone" size={25} color="white" />
                </Left>
                <Body>
                  <Text style={styles.textColor}>{params.musician.phone}</Text>
                </Body>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Icon name="mail" size={25} color="white" />
                </Left>
                <Body>
                  <Text style={styles.textColor}>{params.musician.email}</Text>
                </Body>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Icon name="facebook" size={25} color="white" />
                </Left>
                <Body>
                  <Text style={styles.textColor}>{params.musician.facebook}</Text>
                </Body>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Icon name="instagram" size={25} color="white" />
                </Left>
                <Body>
                  <Text style={styles.textColor}>{params.musician.instagram}</Text>
                </Body>
              </ListItem>
              <ListItem icon>
                <Left>
                  <Icon name="twitter" size={25} color="white" />
                </Left>
                <Body>
                  <Text style={styles.textColor}>{params.musician.twitter}</Text>
                </Body>
              </ListItem>
            </List>
          </View>
        </ScrollView>
      </View>;
  }
}

const avatarSize = 100;
const { width } = Dimensions.get("window");
const { statusBarHeight } = Constants;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: width
  },
  header: {
    marginBottom: avatarSize * 0.5 + Theme.spacing.small
  },
  cover: {
    width,
    height: width
  },
  avatar: {
    position: "absolute",
    right: Theme.spacing.small,
    bottom: -avatarSize * 0.5
  },
  settings: {
    position: "absolute",
    top: statusBarHeight + Theme.spacing.small,
    right: Theme.spacing.base,
    zIndex: 10000
  },
  title: {
    position: "absolute",
    left: Theme.spacing.small,
    bottom: 50 + Theme.spacing.small
  },
  outline: {
    color: "rgba(255, 255, 255, 0.8)"
  },
  name: {
    color: "white"
  },
  textColor: {
    color: "#fff"
  },
  button: {
    backgroundColor: "#232323"
  },
  padding: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15
  },
  inlineTextWrap: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
