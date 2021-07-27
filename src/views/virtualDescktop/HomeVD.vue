<template>
    <v-container fluid class="pa-0">
        <v-row >
            <v-col cols="12" class="pa-0" v-if="!session">
                <v-carousel height="600" 
                    cycle
                    hide-delimiter-background
                    show-arrows-on-hover
                >
                    <v-carousel-item
                        v-for="(item,i) in items"
                        :key="i"
                        :src="item.src"
                    ></v-carousel-item>
                </v-carousel>
            </v-col>
            <v-col cols="12" :sm="session?6:12" class="d-flex justify-center mt-5">
                <img :src="logo" width="50" height="50"/>
                <h1> ESCRITORIO </h1>
                <h1 class="primary--text"> VIRTUAL </h1>
            </v-col>
            <v-col cols="12" sm="6" class="d-flex justify-center" v-if="session">
                <Search/>
            </v-col>
            <v-col cols="12" v-if="session">
                <router-view/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import Search from '@/components/virtualDescktop/search';
import {mapState,mapMutations} from 'vuex';

export default {
    components:{
        Search
    },
    mounted(){
        this.init();
    },
    data(){
        return {
            items:[{
                src: require('@/assets/virtualDescktop/slides/slide01.jpg'),
            },
            {
                src: require('@/assets/virtualDescktop/slides/slide02.jpg'),
            },
            {
                src: require('@/assets/virtualDescktop/slides/slide03.jpg'),
            }],
            logo:require('@/assets/virtualDescktop/resources/logo.jpg'),
        }
    },
    computed:{
        ...mapState(['session']),
    },
    methods:{
        ...mapMutations(['loadingPush']),
        init(){
            this.loadingPush(false);
        }
    },
    created(){
        
    }
}
</script>