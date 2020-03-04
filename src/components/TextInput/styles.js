import { StyleSheet } from 'react-native';
import BORDER from '../../utilities/border';
import COLORS from '../../utilities/colors';
import SPACING from '../../utilities/spacing';
import TEXT from '../../utilities/text';

export default StyleSheet.create({
  background: {
    borderWidth: BORDER.width,
    backgroundColor: COLORS.white,
    height: 48,
    borderRadius: BORDER.radius,
    marginBottom: SPACING.medium,
    zIndex: 1,
    flexDirection: 'row',
  },
  textInput: {
    paddingLeft: SPACING.medium,
    fontFamily: TEXT.input.fontFamily,
    fontSize: TEXT.input.size,
    flex: 1,
  },
  buttonContainer: {
    flex: 0,
    justifyContent: 'center',
    paddingLeft: SPACING.medium,
    paddingRight: SPACING.medium,
  },
  buttonText: {
    color: COLORS.link,
    fontFamily: TEXT.input.fontFamily,
    fontSize: TEXT.input.size,
  },
});
