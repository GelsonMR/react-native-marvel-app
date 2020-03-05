import { StyleSheet } from 'react-native';
import BORDER from '../../utilities/border';
import COLORS from '../../utilities/colors';
import SPACING from '../../utilities/spacing';
import TEXT from '../../utilities/text';

export default StyleSheet.create({
  background: {
    backgroundColor: COLORS.marvelPrimary,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: '60%',
  },
  credits: {
    position: 'absolute',
    bottom: SPACING.large,
    alignItems: 'center',
  },
  creditsText: {
    fontFamily: TEXT.credits.fontFamily,
    fontSize: TEXT.credits.size,
    color: COLORS.white,
  },
  copyright: {
    marginTop: SPACING.micro,
  },
});
