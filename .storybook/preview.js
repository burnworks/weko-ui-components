import '../stories/assets/weco_css/weko_theme.css'
import '../stories/assets/weco_css/weko_styles.css'
import '../stories/assets/weco_css/weko_theme_buttons.css'

import '../stories/less/__main.less'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

document.body.onload = () => {
  document.body.setAttribute('id', 'state-enable-improveui')
}