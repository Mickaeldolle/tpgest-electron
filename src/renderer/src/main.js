import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from '../router/index'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const pinia = createPinia()
const app = createApp(App)


const vuetify = createVuetify({
  components,
  directives,
})


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHammer } from '@fortawesome/free-solid-svg-icons'
import { faHelmetSafety } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faTractor } from '@fortawesome/free-solid-svg-icons'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(
  faCalendar,
  faUser,
  faHammer,
  faHelmetSafety,
  faHouse,
  faTractor,
  faTruck,
  faPen,
  faTrash,
  faTriangleExclamation,
  faXmark
)

app.use(router).use(pinia).use(vuetify).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
