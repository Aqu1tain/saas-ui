import type { PropType } from 'vue';
import type { RouteLocationRaw } from '#vue-router';
import type { Button, ButtonSize, DeepPartial, Strategy } from '../../types/index.js';
declare const config: {
    wrapper: string;
    base: string;
    rounded: string;
    default: {
        size: string;
        activeButton: {
            color: "primary";
        };
        inactiveButton: {
            color: "white";
        };
        firstButton: {
            color: "white";
            class: string;
            icon: string;
        };
        lastButton: {
            color: "white";
            class: string;
            icon: string;
        };
        prevButton: {
            color: "white";
            class: string;
            icon: string;
        };
        nextButton: {
            color: "white";
            class: string;
            icon: string;
        };
    };
};
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: NumberConstructor;
        required: true;
    };
    pageCount: {
        type: NumberConstructor;
        default: number;
    };
    total: {
        type: NumberConstructor;
        required: true;
    };
    max: {
        type: NumberConstructor;
        default: number;
        validate(value: any): boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<ButtonSize>;
        default: () => string;
        validator(value: string): boolean;
    };
    to: {
        type: PropType<(page: number) => RouteLocationRaw>;
        default: any;
    };
    activeButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    inactiveButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    showFirst: {
        type: BooleanConstructor;
        default: boolean;
    };
    showLast: {
        type: BooleanConstructor;
        default: boolean;
    };
    firstButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    lastButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    prevButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    nextButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    divider: {
        type: StringConstructor;
        default: string;
    };
    class: {
        type: PropType<any>;
        default: () => "";
    };
    ui: {
        type: PropType<DeepPartial<typeof config> & {
            strategy?: Strategy;
        }>;
        default: () => {};
    };
}>, {
    ui: import("vue").ComputedRef<{
        wrapper: string;
        base: string;
        rounded: string;
        default: {
            size: string;
            activeButton: {
                color: "primary";
            };
            inactiveButton: {
                color: "white";
            };
            firstButton: {
                color: "white";
                class: string;
                icon: string;
            };
            lastButton: {
                color: "white";
                class: string;
                icon: string;
            };
            prevButton: {
                color: "white";
                class: string;
                icon: string;
            };
            nextButton: {
                color: "white";
                class: string;
                icon: string;
            };
        };
    }>;
    attrs: import("vue").ComputedRef<Pick<{
        [x: string]: unknown;
    }, string>>;
    currentPage: import("vue").WritableComputedRef<number, number>;
    pages: import("vue").ComputedRef<number[]>;
    displayedPages: import("vue").ComputedRef<(string | number)[]>;
    canGoLastOrNext: import("vue").ComputedRef<boolean>;
    canGoFirstOrPrev: import("vue").ComputedRef<boolean>;
    onClickPrev: () => void;
    onClickNext: () => void;
    onClickPage: (page: number | string) => void;
    onClickFirst: () => void;
    onClickLast: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: NumberConstructor;
        required: true;
    };
    pageCount: {
        type: NumberConstructor;
        default: number;
    };
    total: {
        type: NumberConstructor;
        required: true;
    };
    max: {
        type: NumberConstructor;
        default: number;
        validate(value: any): boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<ButtonSize>;
        default: () => string;
        validator(value: string): boolean;
    };
    to: {
        type: PropType<(page: number) => RouteLocationRaw>;
        default: any;
    };
    activeButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    inactiveButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    showFirst: {
        type: BooleanConstructor;
        default: boolean;
    };
    showLast: {
        type: BooleanConstructor;
        default: boolean;
    };
    firstButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    lastButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    prevButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    nextButton: {
        type: PropType<Button>;
        default: () => Button;
    };
    divider: {
        type: StringConstructor;
        default: string;
    };
    class: {
        type: PropType<any>;
        default: () => "";
    };
    ui: {
        type: PropType<DeepPartial<typeof config> & {
            strategy?: Strategy;
        }>;
        default: () => {};
    };
}>> & Readonly<{
    "onUpdate:modelValue"?: (...args: any[]) => any;
}>, {
    size: ButtonSize;
    class: any;
    to: (page: number) => RouteLocationRaw;
    disabled: boolean;
    max: number;
    ui: {
        wrapper?: string;
        base?: string;
        rounded?: string;
        default?: DeepPartial<{
            size: string;
            activeButton: {
                color: "primary";
            };
            inactiveButton: {
                color: "white";
            };
            firstButton: {
                color: "white";
                class: string;
                icon: string;
            };
            lastButton: {
                color: "white";
                class: string;
                icon: string;
            };
            prevButton: {
                color: "white";
                class: string;
                icon: string;
            };
            nextButton: {
                color: "white";
                class: string;
                icon: string;
            };
        }, any>;
    } & {
        [key: string]: any;
    } & {
        strategy?: Strategy;
    };
    divider: string;
    prevButton: Button;
    nextButton: Button;
    pageCount: number;
    activeButton: Button;
    inactiveButton: Button;
    showFirst: boolean;
    showLast: boolean;
    firstButton: Button;
    lastButton: Button;
}, {}, {
    UButton: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
        };
        block: {
            type: BooleanConstructor;
            default: boolean;
        };
        label: {
            type: StringConstructor;
            default: any;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        padded: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: PropType<ButtonSize>;
            default: () => string;
            validator(value: string): boolean;
        };
        color: {
            type: PropType<import("../../types/button").ButtonColor>;
            default: () => string;
            validator(value: string): boolean;
        };
        variant: {
            type: PropType<import("../../types/button").ButtonVariant>;
            default: () => string;
            validator(value: string): boolean;
        };
        icon: {
            type: StringConstructor;
            default: any;
        };
        loadingIcon: {
            type: StringConstructor;
            default: () => string;
        };
        leadingIcon: {
            type: StringConstructor;
            default: any;
        };
        trailingIcon: {
            type: StringConstructor;
            default: any;
        };
        trailing: {
            type: BooleanConstructor;
            default: boolean;
        };
        leading: {
            type: BooleanConstructor;
            default: boolean;
        };
        square: {
            type: BooleanConstructor;
            default: boolean;
        };
        truncate: {
            type: BooleanConstructor;
            default: boolean;
        };
        class: {
            type: PropType<any>;
            default: () => "";
        };
        ui: {
            type: PropType<DeepPartial<{
                base: string;
                font: string;
                rounded: string;
                truncate: string;
                block: string;
                inline: string;
                size: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
                gap: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
                padding: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
                square: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
                color: {
                    white: {
                        solid: string;
                        ghost: string;
                    };
                    gray: {
                        solid: string;
                        ghost: string;
                        link: string;
                    };
                    black: {
                        solid: string;
                        link: string;
                    };
                };
                variant: {
                    solid: string;
                    outline: string;
                    soft: string;
                    ghost: string;
                    link: string;
                };
                icon: {
                    base: string;
                    loading: string;
                    size: {
                        '2xs': string;
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                    };
                };
                default: {
                    size: string;
                    variant: string;
                    color: string;
                    loadingIcon: string;
                };
            }> & {
                strategy?: Strategy;
            }>;
            default: () => {};
        };
        to: {
            readonly type: PropType<RouteLocationRaw>;
            readonly default: any;
            readonly required: false;
        };
        href: {
            readonly type: PropType<RouteLocationRaw>;
            readonly default: any;
            readonly required: false;
        };
        target: {
            readonly type: PropType<import("#app").NuxtLinkProps["target"]>;
            readonly default: any;
            readonly required: false;
        };
        rel: {
            readonly type: PropType<any>;
            readonly default: any;
            readonly required: false;
        };
        noRel: {
            readonly type: PropType<import("#app").NuxtLinkProps["noRel"]>;
            readonly default: any;
            readonly required: false;
        };
        prefetch: {
            readonly type: PropType<import("#app").NuxtLinkProps["prefetch"]>;
            readonly default: any;
            readonly required: false;
        };
        noPrefetch: {
            readonly type: PropType<import("#app").NuxtLinkProps["noPrefetch"]>;
            readonly default: any;
            readonly required: false;
        };
        activeClass: {
            readonly type: PropType<import("#app").NuxtLinkProps["activeClass"]>;
            readonly default: any;
            readonly required: false;
        };
        exactActiveClass: {
            readonly type: PropType<import("#app").NuxtLinkProps["exactActiveClass"]>;
            readonly default: any;
            readonly required: false;
        };
        prefetchedClass: {
            readonly type: PropType<import("#app").NuxtLinkProps["prefetchedClass"]>;
            readonly default: any;
            readonly required: false;
        };
        replace: {
            readonly type: PropType<import("#app").NuxtLinkProps["replace"]>;
            readonly default: any;
            readonly required: false;
        };
        ariaCurrentValue: {
            readonly type: PropType<import("#app").NuxtLinkProps["ariaCurrentValue"]>;
            readonly default: any;
            readonly required: false;
        };
        external: {
            readonly type: PropType<import("#app").NuxtLinkProps["external"]>;
            readonly default: any;
            readonly required: false;
        };
    }>, {
        ui: import("vue").ComputedRef<{
            base: string;
            font: string;
            rounded: string;
            truncate: string;
            block: string;
            inline: string;
            size: {
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
            gap: {
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
            padding: {
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
            square: {
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            };
            color: {
                white: {
                    solid: string;
                    ghost: string;
                };
                gray: {
                    solid: string;
                    ghost: string;
                    link: string;
                };
                black: {
                    solid: string;
                    link: string;
                };
            };
            variant: {
                solid: string;
                outline: string;
                soft: string;
                ghost: string;
                link: string;
            };
            icon: {
                base: string;
                loading: string;
                size: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
            };
            default: {
                size: string;
                variant: string;
                color: string;
                loadingIcon: string;
            };
        }>;
        attrs: import("vue").ComputedRef<Pick<{
            [x: string]: unknown;
        }, string>>;
        isLeading: import("vue").ComputedRef<string | true>;
        isTrailing: import("vue").ComputedRef<string | true>;
        isSquare: import("vue").ComputedRef<boolean>;
        buttonClass: import("vue").ComputedRef<string>;
        leadingIconName: import("vue").ComputedRef<string>;
        trailingIconName: import("vue").ComputedRef<string>;
        leadingIconClass: import("vue").ComputedRef<string>;
        trailingIconClass: import("vue").ComputedRef<string>;
        linkProps: import("vue").ComputedRef<{}>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        type: {
            type: StringConstructor;
            default: string;
        };
        block: {
            type: BooleanConstructor;
            default: boolean;
        };
        label: {
            type: StringConstructor;
            default: any;
        };
        loading: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
        padded: {
            type: BooleanConstructor;
            default: boolean;
        };
        size: {
            type: PropType<ButtonSize>;
            default: () => string;
            validator(value: string): boolean;
        };
        color: {
            type: PropType<import("../../types/button").ButtonColor>;
            default: () => string;
            validator(value: string): boolean;
        };
        variant: {
            type: PropType<import("../../types/button").ButtonVariant>;
            default: () => string;
            validator(value: string): boolean;
        };
        icon: {
            type: StringConstructor;
            default: any;
        };
        loadingIcon: {
            type: StringConstructor;
            default: () => string;
        };
        leadingIcon: {
            type: StringConstructor;
            default: any;
        };
        trailingIcon: {
            type: StringConstructor;
            default: any;
        };
        trailing: {
            type: BooleanConstructor;
            default: boolean;
        };
        leading: {
            type: BooleanConstructor;
            default: boolean;
        };
        square: {
            type: BooleanConstructor;
            default: boolean;
        };
        truncate: {
            type: BooleanConstructor;
            default: boolean;
        };
        class: {
            type: PropType<any>;
            default: () => "";
        };
        ui: {
            type: PropType<DeepPartial<{
                base: string;
                font: string;
                rounded: string;
                truncate: string;
                block: string;
                inline: string;
                size: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
                gap: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
                padding: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
                square: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
                color: {
                    white: {
                        solid: string;
                        ghost: string;
                    };
                    gray: {
                        solid: string;
                        ghost: string;
                        link: string;
                    };
                    black: {
                        solid: string;
                        link: string;
                    };
                };
                variant: {
                    solid: string;
                    outline: string;
                    soft: string;
                    ghost: string;
                    link: string;
                };
                icon: {
                    base: string;
                    loading: string;
                    size: {
                        '2xs': string;
                        xs: string;
                        sm: string;
                        md: string;
                        lg: string;
                        xl: string;
                    };
                };
                default: {
                    size: string;
                    variant: string;
                    color: string;
                    loadingIcon: string;
                };
            }> & {
                strategy?: Strategy;
            }>;
            default: () => {};
        };
        to: {
            readonly type: PropType<RouteLocationRaw>;
            readonly default: any;
            readonly required: false;
        };
        href: {
            readonly type: PropType<RouteLocationRaw>;
            readonly default: any;
            readonly required: false;
        };
        target: {
            readonly type: PropType<import("#app").NuxtLinkProps["target"]>;
            readonly default: any;
            readonly required: false;
        };
        rel: {
            readonly type: PropType<any>;
            readonly default: any;
            readonly required: false;
        };
        noRel: {
            readonly type: PropType<import("#app").NuxtLinkProps["noRel"]>;
            readonly default: any;
            readonly required: false;
        };
        prefetch: {
            readonly type: PropType<import("#app").NuxtLinkProps["prefetch"]>;
            readonly default: any;
            readonly required: false;
        };
        noPrefetch: {
            readonly type: PropType<import("#app").NuxtLinkProps["noPrefetch"]>;
            readonly default: any;
            readonly required: false;
        };
        activeClass: {
            readonly type: PropType<import("#app").NuxtLinkProps["activeClass"]>;
            readonly default: any;
            readonly required: false;
        };
        exactActiveClass: {
            readonly type: PropType<import("#app").NuxtLinkProps["exactActiveClass"]>;
            readonly default: any;
            readonly required: false;
        };
        prefetchedClass: {
            readonly type: PropType<import("#app").NuxtLinkProps["prefetchedClass"]>;
            readonly default: any;
            readonly required: false;
        };
        replace: {
            readonly type: PropType<import("#app").NuxtLinkProps["replace"]>;
            readonly default: any;
            readonly required: false;
        };
        ariaCurrentValue: {
            readonly type: PropType<import("#app").NuxtLinkProps["ariaCurrentValue"]>;
            readonly default: any;
            readonly required: false;
        };
        external: {
            readonly type: PropType<import("#app").NuxtLinkProps["external"]>;
            readonly default: any;
            readonly required: false;
        };
    }>> & Readonly<{}>, {
        type: string;
        size: ButtonSize;
        class: any;
        to: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric;
        disabled: boolean;
        truncate: boolean;
        target: "_blank" | "_parent" | "_self" | "_top" | (string & {});
        activeClass: string;
        exactActiveClass: string;
        ariaCurrentValue: "page" | "step" | "location" | "date" | "time" | "true" | "false";
        replace: boolean;
        noRel: boolean;
        prefetch: boolean;
        noPrefetch: boolean;
        prefetchedClass: string;
        external: boolean;
        leading: boolean;
        color: import("../../types/button").ButtonColor;
        variant: import("../../types/button").ButtonVariant;
        href: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric;
        rel: any;
        label: string;
        ui: {
            base?: string;
            font?: string;
            rounded?: string;
            truncate?: string;
            block?: string;
            inline?: string;
            size?: DeepPartial<{
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            }, any>;
            gap?: DeepPartial<{
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            }, any>;
            padding?: DeepPartial<{
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            }, any>;
            square?: DeepPartial<{
                '2xs': string;
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
            }, any>;
            color?: DeepPartial<{
                white: {
                    solid: string;
                    ghost: string;
                };
                gray: {
                    solid: string;
                    ghost: string;
                    link: string;
                };
                black: {
                    solid: string;
                    link: string;
                };
            }, any>;
            variant?: DeepPartial<{
                solid: string;
                outline: string;
                soft: string;
                ghost: string;
                link: string;
            }, any>;
            icon?: DeepPartial<{
                base: string;
                loading: string;
                size: {
                    '2xs': string;
                    xs: string;
                    sm: string;
                    md: string;
                    lg: string;
                    xl: string;
                };
            }, any>;
            default?: DeepPartial<{
                size: string;
                variant: string;
                color: string;
                loadingIcon: string;
            }, any>;
        } & {
            [key: string]: any;
        } & {
            strategy?: Strategy;
        };
        icon: string;
        block: boolean;
        square: boolean;
        loading: boolean;
        padded: boolean;
        loadingIcon: string;
        leadingIcon: string;
        trailingIcon: string;
        trailing: boolean;
    }, {}, {
        UIcon: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            name: {
                type: StringConstructor;
                required: true;
            };
            mode: {
                type: PropType<"svg" | "css">;
                required: false;
                default: any;
            };
            size: {
                type: (StringConstructor | NumberConstructor)[];
                required: false;
                default: any;
            };
            customize: {
                type: FunctionConstructor;
                required: false;
                default: any;
            };
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            name: {
                type: StringConstructor;
                required: true;
            };
            mode: {
                type: PropType<"svg" | "css">;
                required: false;
                default: any;
            };
            size: {
                type: (StringConstructor | NumberConstructor)[];
                required: false;
                default: any;
            };
            customize: {
                type: FunctionConstructor;
                required: false;
                default: any;
            };
        }>> & Readonly<{}>, {
            mode: "svg" | "css";
            size: string | number;
            customize: Function;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        ULink: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            as: {
                type: StringConstructor;
                default: string;
            };
            type: {
                type: StringConstructor;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            active: {
                type: BooleanConstructor;
                default: any;
            };
            exact: {
                type: BooleanConstructor;
                default: boolean;
            };
            exactQuery: {
                type: BooleanConstructor;
                default: boolean;
            };
            exactHash: {
                type: BooleanConstructor;
                default: boolean;
            };
            inactiveClass: {
                type: StringConstructor;
                default: any;
            };
            to: {
                readonly type: PropType<RouteLocationRaw>;
                readonly default: any;
                readonly required: false;
            };
            href: {
                readonly type: PropType<RouteLocationRaw>;
                readonly default: any;
                readonly required: false;
            };
            target: {
                readonly type: PropType<import("#app").NuxtLinkProps["target"]>;
                readonly default: any;
                readonly required: false;
            };
            rel: {
                readonly type: PropType<any>;
                readonly default: any;
                readonly required: false;
            };
            noRel: {
                readonly type: PropType<import("#app").NuxtLinkProps["noRel"]>;
                readonly default: any;
                readonly required: false;
            };
            prefetch: {
                readonly type: PropType<import("#app").NuxtLinkProps["prefetch"]>;
                readonly default: any;
                readonly required: false;
            };
            noPrefetch: {
                readonly type: PropType<import("#app").NuxtLinkProps["noPrefetch"]>;
                readonly default: any;
                readonly required: false;
            };
            activeClass: {
                readonly type: PropType<import("#app").NuxtLinkProps["activeClass"]>;
                readonly default: any;
                readonly required: false;
            };
            exactActiveClass: {
                readonly type: PropType<import("#app").NuxtLinkProps["exactActiveClass"]>;
                readonly default: any;
                readonly required: false;
            };
            prefetchedClass: {
                readonly type: PropType<import("#app").NuxtLinkProps["prefetchedClass"]>;
                readonly default: any;
                readonly required: false;
            };
            replace: {
                readonly type: PropType<import("#app").NuxtLinkProps["replace"]>;
                readonly default: any;
                readonly required: false;
            };
            ariaCurrentValue: {
                readonly type: PropType<import("#app").NuxtLinkProps["ariaCurrentValue"]>;
                readonly default: any;
                readonly required: false;
            };
            external: {
                readonly type: PropType<import("#app").NuxtLinkProps["external"]>;
                readonly default: any;
                readonly required: false;
            };
        }>, {
            resolveLinkClass: (route: any, $route: any, { isActive, isExactActive }: {
                isActive: boolean;
                isExactActive: boolean;
            }) => string;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            as: {
                type: StringConstructor;
                default: string;
            };
            type: {
                type: StringConstructor;
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: any;
            };
            active: {
                type: BooleanConstructor;
                default: any;
            };
            exact: {
                type: BooleanConstructor;
                default: boolean;
            };
            exactQuery: {
                type: BooleanConstructor;
                default: boolean;
            };
            exactHash: {
                type: BooleanConstructor;
                default: boolean;
            };
            inactiveClass: {
                type: StringConstructor;
                default: any;
            };
            to: {
                readonly type: PropType<RouteLocationRaw>;
                readonly default: any;
                readonly required: false;
            };
            href: {
                readonly type: PropType<RouteLocationRaw>;
                readonly default: any;
                readonly required: false;
            };
            target: {
                readonly type: PropType<import("#app").NuxtLinkProps["target"]>;
                readonly default: any;
                readonly required: false;
            };
            rel: {
                readonly type: PropType<any>;
                readonly default: any;
                readonly required: false;
            };
            noRel: {
                readonly type: PropType<import("#app").NuxtLinkProps["noRel"]>;
                readonly default: any;
                readonly required: false;
            };
            prefetch: {
                readonly type: PropType<import("#app").NuxtLinkProps["prefetch"]>;
                readonly default: any;
                readonly required: false;
            };
            noPrefetch: {
                readonly type: PropType<import("#app").NuxtLinkProps["noPrefetch"]>;
                readonly default: any;
                readonly required: false;
            };
            activeClass: {
                readonly type: PropType<import("#app").NuxtLinkProps["activeClass"]>;
                readonly default: any;
                readonly required: false;
            };
            exactActiveClass: {
                readonly type: PropType<import("#app").NuxtLinkProps["exactActiveClass"]>;
                readonly default: any;
                readonly required: false;
            };
            prefetchedClass: {
                readonly type: PropType<import("#app").NuxtLinkProps["prefetchedClass"]>;
                readonly default: any;
                readonly required: false;
            };
            replace: {
                readonly type: PropType<import("#app").NuxtLinkProps["replace"]>;
                readonly default: any;
                readonly required: false;
            };
            ariaCurrentValue: {
                readonly type: PropType<import("#app").NuxtLinkProps["ariaCurrentValue"]>;
                readonly default: any;
                readonly required: false;
            };
            external: {
                readonly type: PropType<import("#app").NuxtLinkProps["external"]>;
                readonly default: any;
                readonly required: false;
            };
        }>> & Readonly<{}>, {
            type: string;
            to: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric;
            disabled: boolean;
            target: "_blank" | "_parent" | "_self" | "_top" | (string & {});
            activeClass: string;
            exactActiveClass: string;
            ariaCurrentValue: "page" | "step" | "location" | "date" | "time" | "true" | "false";
            replace: boolean;
            noRel: boolean;
            prefetch: boolean;
            noPrefetch: boolean;
            prefetchedClass: string;
            external: boolean;
            as: string;
            active: boolean;
            exact: boolean;
            exactQuery: boolean;
            exactHash: boolean;
            inactiveClass: string;
            href: string | import("vue-router").RouteLocationAsRelativeGeneric | import("vue-router").RouteLocationAsPathGeneric;
            rel: any;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
