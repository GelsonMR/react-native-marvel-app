import { StyleSheet } from 'react-native';
import BORDER from '../../utilities/border';
import COLORS from '../../utilities/colors';
import SPACING from '../../utilities/spacing';
import TEXT from '../../utilities/text';

export default StyleSheet.create({
  container: {
    borderWidth: BORDER.width,
    borderRadius: BORDER.radius,
    borderColor: COLORS.black,
    aspectRatio: 1,
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  balloon: {
    position: 'absolute',
    left: SPACING.micro,
    right: SPACING.micro,
    bottom: SPACING.micro,
    alignItems: 'center',
    borderWidth: BORDER.width,
    borderRadius: 100,
    borderColor: COLORS.black,
    backgroundColor: COLORS.white,
    paddingTop: SPACING.small,
    paddingLeft: SPACING.medium,
    paddingRight: SPACING.medium,
    paddingBottom: SPACING.small,
  },
  text: {
    fontFamily: TEXT.balloon.fontFamily,
    fontSize: TEXT.balloon.size,
    textAlign: 'center',
  },
});
