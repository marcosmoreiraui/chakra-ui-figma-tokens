export const Button = {
    // The styles all button have in common
    baseStyle: {// <-- border radius is same for all variants and sizes
        borderRadius: 'base'
    },
    // Two sizes: sm and md
    sizes: {
    },
    // Two variants: outline and solid
    variants: {
        outline: {
            border: '2px solid',
            borderColor: 'primary',
            color: 'primary'
        },
        solid: {
            bg: 'primary',
            color: 'white',
        },
    },
    // The default size and variant values
    defaultProps: {
        size: 'md',
        variant: 'solid',
    },
}