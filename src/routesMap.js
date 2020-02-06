export default  {
    USERS: {
        path: '/users',
        component: 'UserPage'
    },
    USER: {
        path: '/user/:username/:filter?',        
        component: 'User'
    },
    TODO: {
        path: '/todos',
        component: 'TodoPage'
    },
    HOME: {
        path: '/',
        component: 'HomePage'
    }
}
 