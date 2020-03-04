import { StyleSheet } from 'react-native';
import COLORS from '../../utilities/colors';
import SPACING from '../../utilities/spacing';

export default StyleSheet.create({
  background: {
    backgroundColor: COLORS.pageBackground,
    padding: SPACING.medium,
    paddingTop: 136,
  },
  inputText: {
    position: 'absolute',
    top: 72,
    left: SPACING.medium,
    right: SPACING.medium,
  },
  tile: {
    marginBottom: SPACING.medium,
  },
  tileRight: {
    marginLeft: SPACING.medium,
  },
});
