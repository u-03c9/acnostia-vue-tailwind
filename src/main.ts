import { createApp } from 'vue'
import App from './App.vue'
import "./index.css"

import BaseSection from "./base/BaseSection.vue"

let vm = createApp(App)

vm.component("BaseSection", BaseSection)

vm.mount('#app')
