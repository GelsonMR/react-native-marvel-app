import { StyleSheet } from 'react-native';
import BORDER from '../../utilities/border';
import COLORS from '../../utilities/colors';
import TEXT from '../../utilities/text';
import SPACING from '../../utilities/spacing';

export default StyleSheet.create({
  container: {
    borderWidth: BORDER.width,
    borderRadius: BORDER.radius,
    borderColor: COLORS.black,
    flex: 0,
    backgroundColor: COLORS.white,
    aspectRatio: 0.6,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  text: {
    marginTop: SPACING.small,
    marginBottom: SPACING.small,
    fontFamily: TEXT.balloon.fontFamily,
    fontSize: TEXT.balloon.size,
    textAlign: 'center',
  },
  wrapper: {
    flexDirection: 'column',
  },
});
