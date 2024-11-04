import type { PropType } from 'vue';
import type { BadgeColor, BadgeSize, BadgeVariant, DeepPartial, Strategy } from '../../types/index.js';
declare const config: {
    base: string;
    rounded: string;
    font: string;
    size: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
    };
    color: {
        white: {
            solid: string;
        };
        gray: {
            solid: string;
        };
        black: {
            solid: string;
        };
    };
    variant: {
        solid: string;
        outline: string;
        soft: string;
        subtle: string;
    };
    default: {
        size: string;
        variant: string;
        color: string;
    };
};
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    size: {
        type: PropType<BadgeSize>;
        default: () => string;
        validator(value: string): boolean;
    };
    color: {
        type: PropType<BadgeColor>;
        default: () => string;
        validator(value: string): boolean;
    };
    variant: {
        type: PropType<BadgeVariant>;
        default: () => string;
        validator(value: string): boolean;
    };
    label: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
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
    attrs: import("vue").ComputedRef<Pick<{
        [x: string]: unknown;
    }, string>>;
    badgeClass: import("vue").ComputedRef<string>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: PropType<BadgeSize>;
        default: () => string;
        validator(value: string): boolean;
    };
    color: {
        type: PropType<BadgeColor>;
        default: () => string;
        validator(value: string): boolean;
    };
    variant: {
        type: PropType<BadgeVariant>;
        default: () => string;
        validator(value: string): boolean;
    };
    label: {
        type: (StringConstructor | NumberConstructor)[];
        default: any;
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
}>> & Readonly<{}>, {
    size: BadgeSize;
    class: any;
    color: BadgeColor;
    variant: BadgeVariant;
    label: string | number;
    ui: {
        base?: string;
        rounded?: string;
        font?: string;
        size?: DeepPartial<{
            xs: string;
            sm: string;
            md: string;
            lg: string;
        }, any>;
        color?: DeepPartial<{
            white: {
                solid: string;
            };
            gray: {
                solid: string;
            };
            black: {
                solid: string;
            };
        }, any>;
        variant?: DeepPartial<{
            solid: string;
            outline: string;
            soft: string;
            subtle: string;
        }, any>;
        default?: DeepPartial<{
            size: string;
            variant: string;
            color: string;
        }, any>;
    } & {
        [key: string]: any;
    } & {
        strategy?: Strategy;
    };
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
