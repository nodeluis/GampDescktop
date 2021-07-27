<template>
    <v-navigation-drawer
        v-model="drawer"
        color="secondary"
        app
        dark
        width="350"
    >
        <v-divider class="mb-5"/>
        <v-row>
          <v-col cols="12" class="pa-1 d-flex justify-center">
            <v-avatar
              size="100"
            >
              <img
                :src="avatar"
              />
            </v-avatar>
          </v-col>
          <v-col cols="12" class="pa-1 d-flex justify-center">
            <h1 class="white--text">{{name}}</h1>
          </v-col>
        </v-row>

        <v-divider class="mb-5 mt-5"/>
        
        <v-treeview
          activatable
          open-on-click
          :load-children="openLink"
          :items="items"
        >
            <template slot="label" slot-scope="props">
                <router-link :to="props.item.to" v-if="props.item.to" style="text-decoration: none; color: inherit;"><v-icon>{{iconLink}}</v-icon> {{ props.item.name }}</router-link>
                <span v-else>{{ props.item.name }}</span>
            </template>
        </v-treeview>
    </v-navigation-drawer>
</template>

<script>

import {mapState} from 'vuex';
import { mdiLink  } from '@mdi/js';

export default {
    data(){
        return {
            items:[],
            avatar:'https://cdn.vuetifyjs.com/images/cards/cooking.png',
            name:'nombre',
            iconLink:mdiLink
        }
    },
    computed:{
        ...mapState(['session']),
        drawer:{
            get(){
                return this.$store.state.drawer;
            },
            set(val){
                this.$store.commit('drawerPush',val);
            }
        },
    },
    methods:{
        sessionDirections(){
            if(this.session){
              let arr=[{
                  id: 1,
                  name: 'Escritorio virtual',
                  children: [
                    { id: 2, name: 'Inicio', to:'/'},
                    { id: 3, name: 'Nuevo' , to:'/newdocument'},
                    { 
                      id: 4, name: 'Documentos',
                      children:[
                        { id: 5, name: 'Pendientes', to:'/pendients'},
                        { id: 6, name: 'Finalizado', to:'/finisheds' },
                      ] 
                    },
                    { 
                      id: 7, name: 'Opciones',
                      children:[
                        { id: 8, name: 'Cambiar clave', to:'/changekey'},
                        { id: 9, name: 'Reportes', to:'/reports' },
                        { id: 10, name: 'Reporte derivaciones', to:'/reportderivation'},
                        { id: 11, name: 'Reporte derivaciones consejo', to:'/reportderivationcounsel' },
                        { id: 12, name: 'Reporte derivaciones juridica', to:'/reportderivationlegal'},
                      ] 
                    },
                    { id: 13, name: 'Búsqueda por fecha', to:'/searchbydate' },
                  ],
                  
              }]
              this.items = arr;
            }else{
              let arr=[{
                  id: 1,
                  name: 'Escritorio virtual',
                  children: [
                    { id: 2, name: 'Inicio', to:'/'},
                  ],
                  
              }]
              this.items = arr;
            }
        },
        openLink(item){
          console.log(item);
        }
    },
    watch: {
        session: {
            handler: function(val, oldVal) {
                this.sessionDirections(); 
            },
            deep: true
        }
    },
    created(){
        this.sessionDirections();
    }  
}
</script>