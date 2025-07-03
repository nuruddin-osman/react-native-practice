import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'orange',
    textAlign: 'center',
    marginVertical: 50,
  },
  itemWrapper: {
    backgroundColor: 'red',
    padding: 20,
    marginVertical: 10,
  },
  itemsName: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemsEmail: {
    color: '#f0f0f0',
    fontSize: 16,
  },

  touchableOpacityBtn: {
    backgroundColor: '#8000ff',
    width: '50%',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignSelf: 'center',
    marginBottom: 10,
  },
  touchableHeighlightBtn: {
    backgroundColor: '#ff8000',
    width: '50%',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 30,
    alignSelf: 'center',
  },
  touchableOpacityBtnText: {
    color: '#FFF',
    textAlign: 'center',
  },
  lodingBox: {
    backgroundColor: '#FFF',
    alignSelf: 'center',
    elevation: 5,
    shadowColor: '#000',
    padding: '30',
    borderRadius: 10,
  },
});
