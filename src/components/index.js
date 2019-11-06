// import Headers from "./Header.vue"
// import NavMenus from "./NavMenu.vue"
// export const Header=Headers;
// export const NavMenu=NavMenus;
export const Header = () => import('./Header.vue')
export const NavMenu =() => import ('./NavMenu.vue')
