import { StyleSheet } from 'react-native';
import BORDER from '../../utilities/border';
import COLORS from '../../utilities/colors';
import SPACING from '../../utilities/spacing';
import TEXT from '../../utilities/text';

export default StyleSheet.create({
  background: {
    backgroundColor: COLORS.pageBackground,
    paddingTop: 0,
    paddingBottom: SPACING.medium,
  },
  horizontalSpacing: {
    marginLeft: SPACING.medium,
    marginRight: SPACING.medium,
  },
  avatar: {
    borderWidth: BORDER.width,
    borderTopWidth: 0,
    borderBottomLeftRadius: BORDER.radius,
    borderBottomRightRadius: BORDER.radius,
    flex: 1,
    aspectRatio: 2,
  },
  balloonContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  balloon: {
    position: 'relative',
    alignItems: 'center',
    borderWidth: BORDER.width,
    borderRadius: 100,
    borderColor: COLORS.black,
    backgroundColor: COLORS.white,
    paddingTop: SPACING.small,
    paddingLeft: SPACING.big,
    paddingRight: SPACING.big,
    paddingBottom: SPACING.small,
    marginLeft: SPACING.medium,
    marginRight: SPACING.medium,
    marginBottom: SPACING.medium,
  },
  text: {
    fontFamily: TEXT.balloon.fontFamily,
    fontSize: TEXT.title.size,
    textAlign: 'center',
  },
  link: {
    color: COLORS.link,
  },
  marvelLink: {
    marginTop: SPACING.micro,
  },
  descriptionContainer: {
    padding: SPACING.medium,
    borderWidth: BORDER.width,
    borderRadius: BORDER.radius,
    backgroundColor: COLORS.descriptionBackground,
  },
  descriptionText: {
    fontFamily: TEXT.default.fontFamily,
    fontSize: TEXT.default.size,
  },
  comicsTitleContainer: {
    marginTop: SPACING.large,
    marginBottom: SPACING.small,
    flexDirection: 'row',
  },
  comicsTitle: {
    fontFamily: TEXT.default.fontFamily,
    fontSize: TEXT.title.size,
  },
  moreInfoContainer: {
    marginTop: SPACING.xxLarge,
    alignItems: 'center',
  },
  copyrightText: {
    marginTop: SPACING.medium,
  },
  comicsListContainer: {
    paddingRight: SPACING.medium,
    minHeight: 100,
  },
  comicTile: {
    marginLeft: SPACING.medium,
    width: 150,
  },
  errorContainer: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
