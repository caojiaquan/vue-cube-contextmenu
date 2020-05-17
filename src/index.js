import ContextMenu from './ContextMenu.vue'
import ContextMenuTrigger from './ContextMenuTrigger.vue'
import ContextMenuItem from './ContextMenuItem.vue'
import ContextSubMenu from './ContextSubMenu.vue'
const VueCubeContextMenu  = {
	install: function (Vue) {
		Vue.component('ContextMenu', ContextMenu)
		Vue.component('ContextMenuTrigger', ContextMenuTrigger)
		Vue.component('ContextMenuItem', ContextMenuItem)
		Vue.component('ContextSubMenu', ContextSubMenu)
	}
}
export default VueCubeContextMenu

