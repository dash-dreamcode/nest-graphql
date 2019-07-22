import { PortalSettings } from './GraphQL/graphql';
import {
  UISettings as UISettingsType,
  Topics as TopicsType,
} from './GraphQL/graphql';

export const tuple = {
  key: 'name',
  value: 'name',
};

const UISettings: UISettingsType = {
  logoBase64: 'logo',
  themeVariables: [tuple],
};

export const I18NConfiguration = [
  {
    language: 'en-us',
    default: true,
    translation: [tuple],
  },
  {
    language: 'es-la',
    default: false,
    translation: [tuple],
  },
];

export const FeatureToggle = {
  feature: 'drawer',
  isEnabled: true,
};

export const portalSettings: Array<PortalSettings> = [
  {
    id: '1',
    uiSettings: UISettings,
    i18nSettings: I18NConfiguration,
    featureToggles: [FeatureToggle],
    visitorEmails: ['daniel@dreamcode.io'],
    termsOfService: ['terms'],
    footer: ['footer'],
    accountExecutives: [
      {
        id: '1',
        name: 'Sales force',
        phone: '123456789',
        email: 'sales@omedym.com',
        title: 'CEO',
        avatarBase64: '',
      },
    ],
    alias: 'daniel',
  },
  {
    id: '2',
    uiSettings: UISettings,
    i18nSettings: I18NConfiguration,
    featureToggles: [FeatureToggle],
    visitorEmails: ['daniel+test@dreamcode.io'],
    termsOfService: ['terms2'],
    footer: ['footer2'],
    accountExecutives: [
      {
        id: '1',
        name: 'Inside sales',
        phone: '123456789',
        email: 'sales@inside.com',
        title: 'CEO',
        avatarBase64: '',
      },
    ],
    alias: 'inside',
  },
];

export const Topics: Array<TopicsType> = [
  {
    id: '1',
    phrase: 'Omedym phrase',
    isRecommended: true,
  },
  {
    id: '2',
    phrase: 'Omedym phrase 2',
    isRecommended: true,
  },
];

export const Content = [
  {
    id: 1,
    type: 'VIDEO',
    title: 'New video',
    coverUrl: 'videos/new-video',
    url: 'myvideo.mp4',
    isRecommended: true,
    isNew: true,
    isSeen: false,
    params: [this.tuple],
  },
];
