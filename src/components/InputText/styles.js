import { StyleSheet } from 'react-native';
import COLORS from '../../utilities/colors';
import SPACING from '../../utilities/spacing';
import BORDER from '../../utilities/border';

export default StyleSheet.create({
  background: {
    borderWidth: BORDER.width,
    backgroundColor: COLORS.white,
    height: 48,
    borderRadius: BORDER.radius,
    marginBottom: SPACING.medium,
    zIndex: 1,
  },
});
