// You can customize the template with the help of this file

//Template config options
const themeConfig = {
    app: {
        appName: 'S Groups',
        // serverApi: 'http://localhost:5030',
        // ApiUrl: 'http://localhost:5030/api/v1/admin',

        serverApi: 'https://api.sankar.group',
        ApiUrl: 'https://api.sankar.group/api/v1/admin',
        
        appLogoImage: require('@src/assets/images/logo/dplogo.png').default
    },
    layout: {
        isRTL: false,
        skin: 'dark', // light, dark, bordered, semi-dark
        routerTransition: 'fadeIn', // fadeIn, fadeInLeft, zoomIn, none or check this for more transition https://animate.style/
        type: 'vertical', // vertical, horizontal
        contentWidth: 'full', // full, boxed
        menu: {
            isHidden: false,
            isCollapsed: false
        },
        navbar: {
            // ? For horizontal menu, navbar type will work for navMenu type
            type: 'hidden', // static , sticky , floating, hidden
            backgroundColor: 'white' // BS color options [primary, success, etc]
        },
        footer: {
            type: 'hidden' // static, sticky, hidden
        },
        customizer: false,
        scrollTop: true // Enable scroll to top button
    }
}

export default themeConfig