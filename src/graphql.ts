
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export enum ContentTypeEnum {
    VIDEO = "VIDEO",
    PDF = "PDF",
    RECOMMENDED_QUESTION = "RECOMMENDED_QUESTION",
    SECTION = "SECTION",
    JOURNEY = "JOURNEY"
}

export class ContactInput {
    id?: string;
    name?: string;
    phone?: string;
    email?: string;
    title?: string;
    avatarBase64?: string;
}

export class ContentSearch {
    type?: ContentTypeEnum;
    portalId?: string;
}

export class FeatureToggleInput {
    feature: string;
    isEnabled: boolean;
}

export class I18NConfigurationInput {
    language: string;
    default?: boolean;
    translation: TupleInput[];
}

export class SavePortalInput {
    id?: string;
    uiSettings?: UISettingsInput;
    i18nSettings?: I18NConfigurationInput[];
    featureToggles?: FeatureToggleInput[];
    visitorEmails?: string[];
    termsOfService?: string[];
    footer?: string[];
    accountExecutives: ContactInput[];
    alias?: string;
}

export class TopicsSearch {
    portalId?: string;
    digitalAssetIds: string[];
}

export class TupleInput {
    key: string;
    value: string;
}

export class UISettingsInput {
    logoBase64: string;
    themeVariables?: TupleInput[];
}

export class Contact {
    id?: string;
    name?: string;
    phone?: string;
    email?: string;
    title?: string;
    avatarBase64?: string;
}

export class Content {
    id: string;
    type: ContentTypeEnum;
    title?: string;
    coverUrl?: string;
    url?: string;
    isRecommended?: boolean;
    isNew?: boolean;
    isSeen?: boolean;
    params?: Tuple[];
}

export class FeatureToggle {
    feature: string;
    isEnabled: boolean;
}

export class I18NConfiguration {
    language: string;
    default?: boolean;
    translation: Tuple[];
}

export abstract class IMutation {
    abstract savePortal(portal?: SavePortalInput): PortalSettings | Promise<PortalSettings>;
}

export class PortalSettings {
    id: string;
    uiSettings?: UISettings;
    i18nSettings?: I18NConfiguration[];
    featureToggles?: FeatureToggle[];
    visitorEmails?: string[];
    termsOfService?: string[];
    footer?: string[];
    accountExecutives: Contact[];
    alias?: string;
}

export abstract class IQuery {
    abstract getPortalSettings(portalId: string): PortalSettings | Promise<PortalSettings>;

    abstract getTopics(search?: TopicsSearch, first?: number, after?: string): Topics[] | Promise<Topics[]>;

    abstract getContent(search?: ContentSearch, first?: number, after?: string): Content[] | Promise<Content[]>;
}

export class Topics {
    id: string;
    phrase: string;
    isRecommended?: boolean;
}

export class Tuple {
    key: string;
    value: string;
}

export class UISettings {
    logoBase64: string;
    themeVariables?: Tuple[];
}
