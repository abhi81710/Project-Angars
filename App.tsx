import React from 'react';
import { StyleSheet } from 'react-native';
import { View, ImageBackground, Image, Text, TouchableOpacity, Pressable, TextInput, ScrollView } from 'react-native';
import { responsiveSize } from './src/themes/Responsive';
import { AppTheme } from './src/themes/AppTheme';
import FONT_NAMES from './src/assets/fonts/Fonts';

const imageRuby = require('../../assets/images/imageRuby.png');
const searchIcon = require('../../assets/icons/search_icon.png');
const aug = require('../../assets/images/august.webp.png');
const jul = require('../../assets/images/july.webp.png');
const june = require('../../assets/images/june.webp.png');
const may = require('../../assets/images/may.webp.png');
const april = require('../../assets/images/april.png');
const september = require('../../assets/images/september.webp.png');
const discover = require('../../assets/images/discover.jpg');
const backArrow = require('../../assets/icons/back_arrow.png');

const App = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Vedic Gems</Text>
      </View>
      <View style={styles.viewContainer}>
        <Pressable style={styles.container5}>
          <Image source={searchIcon} style={styles.searchIcon}></Image>
          <TextInput placeholder='Seach Products...' style={styles.textStyle}></TextInput>
        </Pressable>
      </View>

      <TouchableOpacity>
        <Image source={imageRuby} style={styles.foregroundImage}></Image>
      </TouchableOpacity>

      <Text style={styles.text2}>Featured in</Text>
      <View style={styles.container2}>
        <TouchableOpacity>
          <Text style={styles.text3}>B Y R I D E </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text3}>FORBES </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text3}>VOGUE </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.text3}>PREVENTION </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container3}>
        <Text style={styles.text2}>Explore Navratnas</Text>
      </View>
      <View style={styles.container4}>
        <Image source={aug} style={styles.stones}></Image>
        <Image source={may} style={styles.stones}></Image>
        <Image source={jul} style={styles.stones}></Image>
        <Image source={june} style={styles.stones}></Image>
        <Image source={september} style={styles.stones}></Image>
        <Image source={april} style={styles.stones}></Image>
      </View>

      <TouchableOpacity style={styles.discoverImage}>
        <Image source={discover} style={styles.foregroundImage}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container6}>
        <Text style={styles.text4}>Find Your Favorite</Text>
        <Image source={backArrow} style={styles.backImage}></Image>
      </TouchableOpacity>
      <View style={styles.container7}>
        <Text style={styles.text5}>Customer Service</Text>
        <Text style={styles.text5}>About Us</Text>
        <Text style={styles.text5}>Why Vedic Gems </Text>
        <Text style={styles.text5}>Refer a Friend </Text>
      </View>
      <View>
        <Text style = {styles.text6} >
          Let's keep in touch!
        </Text>
      </View>
      <View style={styles.viewContainer}>
        <Pressable style={styles.container5}>
          <Image source={searchIcon} style={styles.searchIcon}></Image>
          <TextInput placeholder='Enter Email Address or Mobile no.' style={styles.textStyle}></TextInput>
        </Pressable>
      </View>
      <TouchableOpacity
        style={ styles.signupContainer}
       >
        <Text style={ styles.text7}>Sign up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    borderColor: AppTheme.Colors.GRAY_MEDIUM,
    borderBottomWidth: 1,
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 19,
    borderBottomWidth: 1,
    borderColor: AppTheme.Colors.GRAY_MEDIUM,
  },
  container3: {
    marginTop: 10,
  },
  container4: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  container5: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: AppTheme.Colors.GRAY_MEDIUM,
    borderWidth: 1,
    borderRadius: responsiveSize(12),
    paddingHorizontal: responsiveSize(20),
    marginTop: responsiveSize(14),
    elevation: 0,
  },
  container6: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  container7: {
    marginTop: 20,
  },
  heading: {
    fontSize: responsiveSize(20),
    color: AppTheme.Colors.BLACK,
    textAlign: 'center',
    paddingVertical: responsiveSize(19),
  },
  text2: {
    marginTop: 12,
    fontSize: responsiveSize(18),
    color: AppTheme.Colors.BLACK,
    textAlign: 'center',
  },
  text3: {
    paddingHorizontal: 6,
    fontSize: responsiveSize(20),
    fontFamily: FONT_NAMES.POPPINS_EXTRA_BOLD,
    color: AppTheme.Colors.BLACK,
    paddingVertical: 14,
  },
  text4: {
    fontSize: responsiveSize(20),
    fontFamily: FONT_NAMES.POPPINS_BOLD,
  },
  text5: {
    fontSize: responsiveSize(17),
    padding: 13,
    borderTopWidth: 1,
  },
  foregroundImage: {
    width: responsiveSize(376),
    height: responsiveSize(140),
    marginTop: responsiveSize(10),
  },
  textStyle: {
    fontFamily: FONT_NAMES.POPPINS_MEDIUM,
    marginLeft: responsiveSize(10),
    color: AppTheme.Colors.BLACK,
    fontSize: responsiveSize(18),
  },
  searchIcon: {
    width: responsiveSize(21),
    height: responsiveSize(25),
    resizeMode: 'contain',
  },
  stones: {
    width: responsiveSize(90),
    height: responsiveSize(90),
    paddingHorizontal: 68,
    paddingVertical: 60,
  },
  backImage: {
    marginTop: 5,
    width: responsiveSize(20),
    height: responsiveSize(20),
    resizeMode: 'contain',
  },
  discoverImage: {
    marginTop: 5,
  },
  viewContainer: {
    padding: 6,
  },
  text6:{
    padding: 13,
    fontSize: responsiveSize(18),
    marginTop:15
  },
  signupContainer: {
    height: responsiveSize(45),
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: AppTheme.Colors.APP_THEME_COLOR,
    borderRadius: responsiveSize(12),
    bottom: responsiveSize(20),
    marginTop:30
  },
  text7: {
    fontFamily: FONT_NAMES.POPPINS_REGULAR,
    fontSize: responsiveSize(19),
    color: AppTheme.Colors.WHITE,
    textAlign: 'center',
  },
  
});
export default App;
