<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" class="mt-10 mb-10 d-flex justify-center align-center">
                <v-icon color="primary" size="30">{{iconKey}}</v-icon><h1 class="primary--text"> Cambiar clave </h1>
            </v-col>
            <v-col cols="6">
                <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                >
                    <v-text-field
                        v-model="pass1"
                        :rules="pass1Rules"
                        label="Password anterior"
                        type="password"
                        outlined
                        dense
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="pass2"
                        :rules="pass2Rules"
                        label="Nuevo password"
                        type="password"
                        outlined
                        dense
                        required
                    ></v-text-field>

                    <v-text-field
                        v-model="pass3"
                        :rules="pass3Rules"
                        label="Repita el password"
                        type="password"
                        outlined
                        dense
                        required
                    ></v-text-field>

                    <v-col class="d-flex justify-center" cols="12">
                        <v-btn
                            :disabled="!valid"
                            color="secondary"
                            class="text-capitalize"
                            @click="send"
                        >
                            Enviar
                        </v-btn>
                    </v-col>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import { mdiLock   } from '@mdi/js';

export default {
    data(){
        return {
            valid:true,
            iconKey:mdiLock ,
            pass1: '',
            pass1Rules: [
                v => !!v || 'Este campo es requerido',
            ],
            pass2: '',
            pass2Rules: [
                v => !!v || 'Este campo es requerido',
            ],
            pass3: '',
            pass3Rules: [
                v => !!v || 'Este campo es requerido',
                v => v==this.pass2 || 'Las contraseñas no son iguales',
            ],
        }
    },
    methods:{
        send(){
            if(this.$refs.form.validate()){

            }else{
                this.$refs.form.validate();
            }
        }
    }
}
</script>