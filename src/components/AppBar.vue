<template>
    <v-app-bar
        app 
        height="80"
        elevation="15"
    >
        <v-btn
            class="mr-3"
            fab
            small
            text
            @click="drawerPush(!drawer)"
        >
            <v-icon>
                mdi-dots-vertical
            </v-icon>
        </v-btn>

        <v-row >
            <v-col col="12">
                <v-icon>{{iconEmail }}</v-icon>
                <a href="#"> admin@potosi.bo</a>
            </v-col>
        </v-row>
        <v-spacer></v-spacer>
        <v-row>
            <v-col cols="6" >
                <v-btn text @click="dialogSession" class="text-capitalize" v-if="!session">
                    <v-icon>{{iconLogin}} </v-icon>
                    Iniciar Sesión
                </v-btn>
                <v-btn text @click="dialogCloseSession" class="text-capitalize" v-else>
                    <v-icon>{{iconLogout}} </v-icon>
                    Cerrar Sesión
                </v-btn>
            </v-col>
            <v-col cols="6">
                <v-btn text class="text-capitalize">
                    <v-icon>{{iconHelp}}</v-icon>
                    Ayuda
                </v-btn>
            </v-col>
        </v-row>
        <v-progress-linear
            :active="loading"
            :indeterminate="loading"
            absolute
            bottom
            color="primary"
        ></v-progress-linear>
        <v-spacer/>
        <v-dialog v-model="dialog" width="400">
            <v-card class="pa-5">
                <v-card-text>
                    <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                    >
                        <v-row>
                            <v-col cols="12">
                                <h1>Login</h1>
                            </v-col>
                            <v-col cols="12">
                                <h3 class="primary--text">ESCRITORIO VIRTUAL</h3>
                            </v-col>
                            <v-col cols="12" class="pa-1">
                                <v-text-field
                                    outlined
                                    dense
                                    label="Usuario"
                                    v-model="user"
                                    :rules="userRules"
                                >
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" class="pa-1">
                                <v-text-field
                                    outlined
                                    dense
                                    label="Contraseña"
                                    v-model="pass"
                                    :rules="passRules"
                                >
                                </v-text-field>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="pa-2">
                    <v-btn @click="go" class="text-capitalize" color="primary">Entrar</v-btn>
                    <v-spacer></v-spacer>
                    <v-btn @click="cancel" class="text-capitalize" color="primary">Cancelar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-app-bar>
</template>

<script>

import {mapState,mapMutations} from 'vuex';
import { mdiLogin, mdiLogout, mdiAccountQuestionOutline, mdiEmailOutline  } from '@mdi/js';

export default {
    data() {
        return{
            dialog:false,
            iconLogin:mdiLogin ,
            iconLogout:mdiLogout ,
            iconHelp:mdiAccountQuestionOutline,
            iconEmail:mdiEmailOutline,
            valid:false,
            user:'', 
            userRules:[
                v => !!v || 'El usuario es requerido',
            ],
            pass:'',
            passRules:[
                v => !!v || 'La contraseña es requerida',
            ]
        }
    },
    computed:{
        ...mapState(['drawer','session','loading']),
    },
    methods:{
        ...mapMutations(['drawerPush','sessionPush','loadingPush']),
        dialogSession(){
            this.dialog=true;
        },
        go(){
            if(this.$refs.form.validate()){
                this.sessionPush(true);
                this.dialog=false;
                if(this.$route.path != '/'){
                    this.$router.push('/');
                }
            }else{
                this.$refs.form.validate();
            }
        },
        cancel(){
            this.dialog=false;
            this.user=this.pass='';
            this.$refs.form.reset();
        },
        dialogCloseSession(){
            this.sessionPush(false);
        },
        
    }
}
</script>