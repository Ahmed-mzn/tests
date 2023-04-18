const preferencesSections = [
  {
    leftIcon: 'arrow-swap-outline',
    title: 'تبديل الحساب',
    rightIcon: 'arrow-chevron-right-outline',
    routeName: 'SwitchAccount',
  },

  {
    leftIcon: 'bell-outline',
    title: 'تفضيلات الإشعارات',
    rightIcon: 'arrow-chevron-right-outline',
    routeName: 'NotificationPreferences',
  },
  {
    leftIcon: 'globe-outline',
    title: 'تغيير اللغة',
    rightIcon: 'arrow-chevron-right-outline',
    routeName: 'ChangeLanguage',
  },
  // {
  //   leftIcon: 'color-palette-outline',
  //   title: 'Appearance',
  //   rightIcon: 'arrow-chevron-right-outline',
  //   routeName: 'ChangeAppearance',
  // },
];

const supportSection = [
  {
    leftIcon: 'book-open-globe-outline',
    title: 'وثائق المساعدة',
    rightIcon: 'open-outline',
    routeName: 'ReadDocs',
  },
  {
    leftIcon: 'chat-help-outline',
    title: 'تواصل معنا',
    rightIcon: 'open-screen-outline',
    routeName: 'ChatWithUs',
  },
];

export default {
  preferencesSections,
  supportSection,
};
