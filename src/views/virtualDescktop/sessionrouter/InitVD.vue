<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="mt-10 mb-10 d-flex justify-center align-center">
                <v-icon color="primary" size="30">{{iconHome}}</v-icon><h1 class="primary--text"> INICIO </h1>
            </v-col>
            <v-col cols="12" sm="6">
                <v-flex d-flex class="fill-height">
                    <v-card elevation="15" style="border-radius:2em" color="secondary" dark>
                        <v-card-text class="fill-height">
                            <v-row class="fill-height" align-content="center" >
                                <v-col cols="12">
                                    <h1 class="primary--text text-center">Acerca de ti</h1>
                                </v-col>
                                <v-col cols="12" class="d-flex justify-center ">
                                    <strong>Nombre: </strong><p>{{name}}</p>
                                </v-col>
                                <v-col cols="12" class="d-flex justify-center">
                                    <v-avatar width="200" height="200">
                                        <v-img src="https://cdn.vuetifyjs.com/images/cards/house.jpg"></v-img>
                                    </v-avatar>
                                </v-col>
                                <v-col cols="12" class="d-flex justify-center ">
                                    <strong>Cargo: </strong>{{charge}}
                                </v-col>
                                <v-col cols="12" class="d-flex justify-center ">
                                    <strong>Unidad: </strong>{{united}}
                                </v-col>
                                <v-col cols="12" class="d-flex justify-center ">
                                    <strong>Afiliación: </strong>{{afiliation}}
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-col>
            <v-col cols="12" sm="6" >
                <v-card elevation="15" style="border-radius:2em">
                    <v-card-text>
                        <Calendar/>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import Calendar from '@/components/virtualDescktop/Calendar';
import {mapState,mapMutations} from 'vuex';
import { mdiHomeOutline } from '@mdi/js';

export default {
    components:{
         Calendar
    },
    data(){
        return {
            name:'nombre',
            charge: 'cargo',
            united: 'unidad',
            afiliation: 'afiliation',
            iconHome:mdiHomeOutline
        }
    },
    computed:{
        ...mapState(['session']),
    },
    methods:{
        ...mapMutations(['loadingPush']),
    },
    created(){
        this.loadingPush(false);
        if(!this.session){
            this.loadingPush(true);
            this.$router.push('/');
        }
    }
    
}
</script>