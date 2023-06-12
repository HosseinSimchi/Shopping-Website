/** @jsx jsx*/
/** @type { import('@storybook/nextjs').StorybookConfig } */
import * as path from 'path';
const config = {
    stories: [
        '../components/**/*.mdx',
        '../components/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-styling',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {nextConfigPath: path.resolve(__dirname, '../next.config.js'),},
    },
    docs: {
        autodocs: 'tag',
    },
}
export default config
