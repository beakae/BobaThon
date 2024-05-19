import { StyleSheet } from 'react-native';

const colors = {
  primary: '#A17A55',
  secondary: '#F2DAC4',
  white: '#FFFFFF',
};

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
})

export default globalStyles;
export { colors };