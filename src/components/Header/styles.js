import { StyleSheet } from 'react-native';
import BORDER from '../../utilities/border';
import COLORS from '../../utilities/colors';
import SPACING from '../../utilities/spacing';
import TEXT from '../../utilities/text';

export default StyleSheet.create({
  background: {
    backgroundColor: COLORS.titleBackground,
    borderWidth: BORDER.width,
    borderTopRightRadius: BORDER.radius,
    borderBottomRightRadius: BORDER.radius,
    borderColor: COLORS.black,
    borderLeftWidth: 0,
    position: 'absolute',
    top: SPACING.medium,
    height: 40,
    justifyContent: 'center',
    paddingLeft: SPACING.medium,
    paddingRight: SPACING.medium,
    width: 'auto',
  },
  text: {
    fontFamily: TEXT.title.fontFamily,
    fontSize: TEXT.title.size,
  },
});
