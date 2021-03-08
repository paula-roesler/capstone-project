import GlobalStyle from '../src/components/GlobalStyle'
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
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