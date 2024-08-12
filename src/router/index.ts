import { createMemoryHistory, createRouter } from 'vue-router'

import EventsView from '../views/EventsView.vue'
import AttendanceView from '../views/AttendanceView.vue'

const routes = [
  { path: '/', component: EventsView },
  { path: '/attendance', component: AttendanceView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
