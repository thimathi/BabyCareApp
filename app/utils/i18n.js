// utils/i18n.js
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';
import { translations } from '../utils/translations';

export const i18n = new I18n(translations);

// Set the locale once at the beginning of your app
i18n.locale = Localization.locale;
i18n.enableFallback = true;
i18n.defaultLocale = 'English';

export const setLocale = (locale) => {
  i18n.locale = locale;
};