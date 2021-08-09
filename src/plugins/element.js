import Vue from 'vue'
import { Button } from 'element-ui'
import {Form,FormItem,Input,Message,Header,Container,Aside,Main,Menu,MenuItem,Submenu,Breadcrumb,BreadcrumbItem,Card,Row,Col,
Table,TableColumn,Switch,Tooltip,Pagination,Dialog,MessageBox,Tag,Tree} from 'element-ui'
// import { tanh } from 'core-js/fn/number'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Header)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Tag)
Vue.use(Tree)
Vue.prototype.$message=Message//将消息提示组件挂载到VUE原型上
Vue.prototype.$confirm=MessageBox.confirm//将弹框组件挂载到VUE原型上

