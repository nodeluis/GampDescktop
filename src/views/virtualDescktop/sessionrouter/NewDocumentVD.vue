<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" class="mt-10 mb-10 d-flex justify-center align-center">
                <v-icon color="primary" size="30">{{iconDocument}}</v-icon><h1 class="primary--text"> Nuevo Documneto </h1>
            </v-col>
            <v-col cols="6">
                <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                >
                    <v-row>
                        <v-col cols="12" class="pa-1">
                             <v-text-field
                                v-model="origin"
                                :rules="originRules"
                                label="Origen"
                                outlined
                                dense
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-row justify="center">
                                <v-col cols="12" sm="6" class="d-flex justify-center">
                                    <v-btn
                                        color="primary"
                                        small
                                        @click="add"
                                    >
                                        Agregar Destinatario
                                    </v-btn>
                                </v-col>
                                <v-col cols="12" sm="6" v-if="countFields>1" class="d-flex justify-center">
                                    <v-btn
                                        color="warning"
                                        small
                                        @click="delet"
                                    >
                                        Eliminar Destinatario
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="12" v-for="(field, index) in arr1" :key="index" class="pa-1">
                            <v-text-field 
                                clearable 
                                outlined 
                                dense
                                required 
                                :rules="field.rules" 
                                :name="field.name" 
                                v-model="field.value" 
                                :label="field.label"
                            >
                            </v-text-field>
                            <v-text-field 
                                clearable 
                                outlined 
                                dense
                                required 
                                :rules="arr2[index].rules" 
                                :name="arr2[index].name" 
                                v-model="arr2[index].value" 
                                :label="arr2[index].label"
                            >
                            </v-text-field>
                        </v-col>
                        <v-col cols="12">

                        </v-col>
                        <v-col cols="12" class="pa-1">
                            <v-text-field
                                v-model="issue"
                                :rules="issueRules"
                                label="Asunto"
                                outlined
                                dense
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" class="pa-1">
                            <v-text-field
                                v-model="description"
                                :rules="descriptionRules"
                                label="Descripción"
                                outlined
                                dense
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" class="pa-1">
                            <v-text-field
                                v-model="sheet"
                                :rules="sheetRules"
                                label="Número de hojas"
                                outlined
                                dense
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" class="pa-1">
                            <v-text-field
                                v-model="typeD"
                                :rules="typeDRules"
                                label="Tipos de documento"
                                outlined
                                dense
                                required
                            ></v-text-field>
                        </v-col>
                    </v-row>


                    <v-col cols="12" class="d-flex justify-center">
                        <v-btn
                            color="secondary"
                            @click="send"
                            class="text-capitalize"
                        >
                            Enviar Formulario
                        </v-btn>
                    </v-col>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>

import { mdiFileDocument } from '@mdi/js';

export default {
    data(){
        return {
            valid:true,
            iconDocument:mdiFileDocument,

            origin:'',
            originRules: [
                v => !!v || 'Este campo es requerido',
            ],
            issue:'',
            issueRules: [
                v => !!v || 'Este campo es requerido',
            ],
            description:'',
            descriptionRules: [
                v => !!v || 'Este campo es requerido',
            ],
            sheet:'',
            sheetRules: [
                v => !!v || 'Este campo es requerido',
            ],
            typeD:'',
            typeDRules: [
                v => !!v || 'Este campo es requerido',
            ],
            countFields:1,
            fieldsDestinatarie:[
                {
                    name: 'destinatarie '+1,
                    rules:[
                        v => !!v || 'Este campo es requerido',
                    ],
                    value:'' ,
                    label:'Destinatario '+1
                },
            ],
            fieldsInstruction:[
                {
                    name: 'Instrucción '+1,
                    rules:[
                        v => !!v || 'Este campo es requerido',
                    ],
                    value:'' ,
                    label:'Instrucción '+1
                },
            ],
        }
    },
    computed:{
        arr1(){
            return this.fieldsDestinatarie;
        },
        arr2(){
            return  this.fieldsInstruction;
        }
    },
    methods:{
        send(){
            if(this.$refs.form.validate()){

            }else{
                this.$refs.form.validate();
            }
        },
        add(){
            this.countFields+=1;
            this.fieldsDestinatarie.push({
                    name: 'destinatarie '+this.countFields,
                    rules:[
                        v => !!v || 'Este campo es requerido',
                    ],
                    value:'' ,
                    label:'Destinatario '+this.countFields
                });
            this.fieldsInstruction.push({
                    name: 'Instrucción '+this.countFields,
                    rules:[
                        v => !!v || 'Este campo es requerido',
                    ],
                    value:'' ,
                    label:'Instrucción '+this.countFields
                });
        },
        delet(){
            this.countFields-=1;
            this.fieldsDestinatarie.pop();
            this.fieldsInstruction.pop();
        }
    }
}
</script>