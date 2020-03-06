import { StyleSheet } from 'react-native';
import BORDER from '../../utilities/border';
import COLORS from '../../utilities/colors';
import SPACING from '../../utilities/spacing';
import TEXT from '../../utilities/text';

export default StyleSheet.create({
  background: {
    backgroundColor: COLORS.pageBackground,
    padding: SPACING.medium,
    paddingTop: 136,
  },
  textInput: {
    position: 'absolute',
    top: 72,
    left: SPACING.medium,
    right: SPACING.medium,
  },
  tile: {
    flex: 0.5,
    marginBottom: SPACING.medium,
  },
  tileLeft: {
    marginRight: SPACING.medium,
  },
  footer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: '100%',
  },
  balloon: {
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
    fontFamily: TEXT.input.fontFamily,
    fontSize: TEXT.input.size,
    textAlign: 'center',
  },
});
