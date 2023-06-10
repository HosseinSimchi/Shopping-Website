/** @jsx */
/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
    stories: [
        '../components/**/*.mdx',
        '../components/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-styling'
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
}
export default config
