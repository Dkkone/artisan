// routes.js

import Home from './components/Home.vue';
import Register from './components/Register.vue';
import Login from './components/Login.vue';
import Dash from './components/Dash.vue';
import Dashboard from './components/Dashboard.vue';
import Ad from './components/Ad.vue';
import Admin from './components/Admin.vue';
import Results from './components/Results.vue';
import LoginAdmin from './components/LoginAdmin.vue';
import About from './components/About.vue';
import Policy from './components/Policy.vue';
import Terms from './components/Terms.vue';
import Contact from './components/Contact.vue';









const routes = [
    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/dash', component: Dash },
    { path: '/dashboard', component: Dashboard },
    { path: '/ad', component: Ad },
    { path: '/admin', component: Admin },
    { path: '/results', component: Results },
    { path: '/loginAdmin', component: LoginAdmin },
    { path: '/about', component: About },
    { path: '/policy', component: Policy },
    { path: '/terms', component: Terms },
    { path: '/contact', component: Contact },







];

export default routes;
