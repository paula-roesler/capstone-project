import GlobalStyle from '../src/components/GlobalStyle'
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i
    },
    presetColors: [
      { color: '#ff4785', title: 'Coral' },
      'rgba(0, 159, 183, 1)',
      '#fe4a49',
    ],
  },
  viewports: { 
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6',
  },
}

export const decorators = [
  Story => (
    <>
    <GlobalStyle />
    <Story />
    </>
  ),
]