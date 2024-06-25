import {generateSidebar} from 'vitepress-sidebar'
import {defineConfig} from 'vitepress'

const vitepressSidebarOptions = {
    excludeFolders: ['unfinished'],
    sortMenusByFrontmatterDate: true,
    sortMenusOrderByDescending: true,
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Pleasantville, NY",
    description: "An unofficial site for Pleasantville, NY",
    themeConfig: {
        sidebar: generateSidebar(vitepressSidebarOptions),
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Data', link: '/data/'},
        ],
        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ],
        // base: 'pleasantvilleny.cc/',
    },
})
