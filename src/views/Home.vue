<template>
    <v-container fluid>
        <AppBar/>
        <Drawer/>
        <v-main>
            <router-view/>
        </v-main>
        <Footer/>
    </v-container>
</template>

<script>

import AppBar from '@/components/AppBar';
import Drawer from '@/components/Drawer';
import Footer from '@/components/Footer';

export default {
    components:{
        AppBar,Drawer,Footer
    },
    data(){
        return{

        }
    },

}
</script>