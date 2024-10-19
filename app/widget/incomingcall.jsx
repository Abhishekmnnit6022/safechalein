import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';

const IncomingCallScreen = ({ caller, onAccept, onDecline }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.gradient}
      >
        <View style={styles.callerInfo}>
          {caller.image ? (
            <Image source={{ uri: caller.image }} style={styles.callerImage} />
          ) : (
            <View style={styles.callerImagePlaceholder}>
              <Text style={styles.callerImagePlaceholderText}>{caller.name.charAt(0)}</Text>
            </View>
          )}
          <Text style={styles.callerName}>{caller.name}</Text>
          <Text style={styles.callerNumber}>{caller.number}</Text>
          <Text style={styles.callStatus}>Incoming call</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.declineButton} onPress={onDecline}>
            <Text style={styles.buttonIcon}>✕</Text>
            <Text style={styles.buttonText}>Decline</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.acceptButton} onPress={onAccept}>
            <Text style={styles.buttonIcon}>✓</Text>
            <Text style={styles.buttonText}>Accept</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  gradient: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: hp('4%'),
  },
  callerInfo: {
    alignItems: 'center',
    marginTop: hp('10%'),
  },
  callerImage: {
    width: wp('40%'),
    height: wp('40%'),
    borderRadius: wp('20%'),
    marginBottom: hp('2%'),
  },
  callerImagePlaceholder: {
    width: wp('40%'),
    height: wp('40%'),
    borderRadius: wp('20%'),
    backgroundColor: 'rgba(255,255,255,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  callerImagePlaceholderText: {
    fontSize: wp('15%'),
    color: '#ffffff',
  },
  callerName: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: hp('1%'),
  },
  callerNumber: {
    fontSize: wp('4%'),
    color: '#ffffff',
    marginBottom: hp('1%'),
  },
  callStatus: {
    fontSize: wp('4%'),
    color: '#ffffff',
    opacity: 0.8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  declineButton: {
    backgroundColor: '#ff3b30',
    borderRadius: wp('15%'),
    padding: wp('5%'),
    alignItems: 'center',
  },
  acceptButton: {
    backgroundColor: '#34c759',
    borderRadius: wp('15%'),
    padding: wp('5%'),
    alignItems: 'center',
  },
  buttonIcon: {
    fontSize: wp('10%'),
    color: '#ffffff',
    marginBottom: hp('1%'),
  },
  buttonText: {
    fontSize: wp('4%'),
    color: '#ffffff',
  },
});

export default IncomingCallScreen;