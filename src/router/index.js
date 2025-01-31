import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
//import MulherView from '../components/MulherView.vue';
//import HommenView from '../components/HomemView.vue';

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ('../views/AboutView.vue')

    },
    {
        path: '/logon',
        name: 'login',
        component: () =>
            import ('@/views/LogonView.vue') 

    },
    {
        path: '/usuario_add',
        name: 'usuario_add',
        component: () =>
            import ('@/views/UsuarioForm.vue') 

    },
    {
        path: '/usuario_list',
        name: 'usuario_list',
        component: () =>
            import ('@/views/UsuarioList.vue') 

    },
    {
        path: '/usuario_perfil',
        name: 'usuario_pefil',
        component: () =>
            import ('@/views/UsuarioPerfil.vue') 

    },
    {
        path: '/pedidos',
        name: 'pedidos',
        component: () =>
            import ('@/views/PedidosView.vue') 

    },
    {
        path: '/produtos',
        name: 'produtos',
        component: () =>
            import ('@/views/ProdutosView.vue')

    },

    {
        //path: '/Mulher',
       // name: 'Mulher',
        //component: () =>
          //  import ('@/components/MulherView.vue') 

    },

    {
       // path: '/Homem',
       // name: 'Homem',
       // component: () =>
          //  import ('@/components/HomemView.vue') 

    },
];


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;