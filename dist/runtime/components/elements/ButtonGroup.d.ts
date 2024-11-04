import type { PropType } from 'vue';
import type { ButtonSize, Strategy } from '../../types/index.js';
declare const buttonGroupConfig: {
    wrapper: {
        horizontal: string;
        vertical: string;
    };
    rounded: string;
    shadow: string;
    orientation: {
        'rounded-none': {
            horizontal: {
                start: string;
                end: string;
            };
            vertical: {
                start: string;
                end: string;
            };
        };
        'rounded-sm': {
            horizontal: {
                start: string;
                end: string;
            };
            vertical: {
                start: string;
                end: string;
            };
        };
        rounded: {
            horizontal: {
                start: string;
                end: string;
            };
            vertical: {
                start: string;
                end: string;
            };
        };
        'rounded-md': {
            horizontal: {
                start: string;
                end: string;
            };
            vertical: {
                start: string;
                end: string;
            };
        };
        'rounded-lg': {
            horizontal: {
                start: string;
                end: string;
            };
            vertical: {
                start: string;
                end: string;
            };
        };
        'rounded-xl': {
            horizontal: {
                start: string;
                end: string;
            };
            vertical: {
                start: string;
                end: string;
            };
        };
        'rounded-2xl': {
            horizontal: {
                start: string;
                end: string;
            };
            vertical: {
                start: string;
                end: string;
            };
        };
        'rounded-3xl': {
            horizontal: {
                start: string;
                end: string;
            };
            vertical: {
                start: string;
                end: string;
            };
        };
        'rounded-full': {
            horizontal: {
                start: string;
                end: string;
            };
            vertical: {
                start: string;
                end: string;
            };
        };
    };
};
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    size: {
        type: PropType<ButtonSize>;
        default: any;
        validator(value: string): boolean;
    };
    orientation: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator(value: string): boolean;
    };
    class: {
        type: PropType<any>;
        default: () => "";
    };
    ui: {
        type: PropType<Partial<typeof buttonGroupConfig> & {
            strategy?: Strategy;
        }>;
        default: () => {};
    };
}>, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: PropType<ButtonSize>;
        default: any;
        validator(value: string): boolean;
    };
    orientation: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
        validator(value: string): boolean;
    };
    class: {
        type: PropType<any>;
        default: () => "";
    };
    ui: {
        type: PropType<Partial<typeof buttonGroupConfig> & {
            strategy?: Strategy;
        }>;
        default: () => {};
    };
}>> & Readonly<{}>, {
    size: ButtonSize;
    orientation: "horizontal" | "vertical";
    ui: Partial<{
        wrapper: {
            horizontal: string;
            vertical: string;
        };
        rounded: string;
        shadow: string;
        orientation: {
            'rounded-none': {
                horizontal: {
                    start: string;
                    end: string;
                };
                vertical: {
                    start: string;
                    end: string;
                };
            };
            'rounded-sm': {
                horizontal: {
                    start: string;
                    end: string;
                };
                vertical: {
                    start: string;
                    end: string;
                };
            };
            rounded: {
                horizontal: {
                    start: string;
                    end: string;
                };
                vertical: {
                    start: string;
                    end: string;
                };
            };
            'rounded-md': {
                horizontal: {
                    start: string;
                    end: string;
                };
                vertical: {
                    start: string;
                    end: string;
                };
            };
            'rounded-lg': {
                horizontal: {
                    start: string;
                    end: string;
                };
                vertical: {
                    start: string;
                    end: string;
                };
            };
            'rounded-xl': {
                horizontal: {
                    start: string;
                    end: string;
                };
                vertical: {
                    start: string;
                    end: string;
                };
            };
            'rounded-2xl': {
                horizontal: {
                    start: string;
                    end: string;
                };
                vertical: {
                    start: string;
                    end: string;
                };
            };
            'rounded-3xl': {
                horizontal: {
                    start: string;
                    end: string;
                };
                vertical: {
                    start: string;
                    end: string;
                };
            };
            'rounded-full': {
                horizontal: {
                    start: string;
                    end: string;
                };
                vertical: {
                    start: string;
                    end: string;
                };
            };
        };
    }> & {
        strategy?: Strategy;
    };
    class: any;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
