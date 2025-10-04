const AuthRoutes = {
    path: '/auth',
    component: () => import('@/layouts/blank/BlankLayout.vue'),
    meta: {
        requiresAuth: false
    },
    children: [
        {
            name: 'Landing Page',
            path: '/',
            component: () => import('@/views/pages/landingpage/index.vue')
        },
        {
            name: 'FrontPage',
            path: '/front-page/homepage',
            component: () => import('@/views/pages/front-pages/Landingpage.vue')
        },
        {
            name: 'About Us',
            path: '/front-page/about-us',
            component: () => import('@/views/pages/front-pages/Aboutpage.vue')
        },
        {
            name: 'Contact',
            path: '/front-page/contact-us',
            component: () => import('@/views/pages/front-pages/Contactpage.vue')
        },
        {
            name: 'Pricing1',
            path: '/front-page/pricing',
            component: () => import('@/views/pages/front-pages/PackagePricing.vue')
        },
        {
            name: 'Portfolio',
            path: '/front-page/portfolio',
            component: () => import('@/views/pages/front-pages/Portfolio.vue')
        },
        {
            name: 'Blog',
            path: '/front-page/blog/posts',
            component: () => import('@/views/pages/front-pages/BlogPage.vue')
        },
        {
            name: 'Blog Details',
            path: '/front-page/blog/:id',
            component: () => import('@/views/pages/front-pages/BlogDetails.vue')
        },
        {
            name: 'Side Login',
            path: '/auth/login',
            component: () => import('@/views/authentication/SideLogin.vue')
        },
        {
            name: 'Boxed Login',
            path: '/auth/login2',
            component: () => import('@/views/authentication/BoxedLogin.vue')
        },
        {
            name: 'Side Register',
            path: '/auth/register',
            component: () => import('@/views/authentication/SideRegister.vue')
        },
        {
            name: 'Boxed Register',
            path: '/auth/register2',
            component: () => import('@/views/authentication/BoxedRegister.vue')
        },
        {
            name: 'Side Forgot Password',
            path: '/auth/forgot-password',
            component: () => import('@/views/authentication/SideForgotPassword.vue')
        },
        {
            name: 'Boxed Forgot Password',
            path: '/auth/forgot-password2',
            component: () => import('@/views/authentication/BoxedForgotPassword.vue')
        },
        {
            name: 'Side Two Steps',
            path: '/auth/two-step',
            component: () => import('@/views/authentication/SideTwoStep.vue')
        },
        {
            name: 'Boxed Two Steps',
            path: '/auth/two-step2',
            component: () => import('@/views/authentication/BoxedTwoStep.vue')
        },
        {
            name: 'Error',
            path: '/auth/404',
            component: () => import('@/views/authentication/Error.vue')
        },
        {
            name: 'Maintenance',
            path: '/auth/maintenance',
            component: () => import('@/views/authentication/Maintenance.vue')
        }
    ]
};

export default AuthRoutes;
