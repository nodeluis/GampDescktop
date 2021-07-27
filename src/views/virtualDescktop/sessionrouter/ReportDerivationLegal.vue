<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" class="mt-10 mb-10 d-flex justify-center align-center">
                <v-icon color="primary" size="30">{{iconReport}}</v-icon><h1 class="primary--text"> Reportes Derivación Jurídica</h1>
            </v-col>
            <v-col cols="12" sm="6" class="d-flex justify-center">
                <v-dialog
                    ref="dialogDate"
                    v-model="modal"
                    :return-value.sync="date"
                    persistent
                    width="290px"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="date"
                            label="Seleccione el rango de fecha"
                            prepend-icon="mdi-calendar"
                            readonly
                            outlined
                            dense
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="date"
                        scrollable
                        range
                    >
                        <v-spacer></v-spacer>
                        <v-btn
                            text
                            color="primary"
                            @click="modal = false"
                        >
                            Cancel
                        </v-btn>
                        <v-btn
                            text
                            color="primary"
                            @click="$refs.dialogDate.save(date)"
                        >
                            OK
                        </v-btn>
                    </v-date-picker>
                </v-dialog>
            </v-col>
            <v-col cols="12" sm="6" class="d-flex justify-center" v-if="dataTable.length>0">
                <v-btn text>
                    <v-icon size="50" color="primary">
                        {{iconPdf}}
                    </v-icon>
                    Generar pdf
                </v-btn>
            </v-col>
            <v-col cols="12">
                <v-simple-table v-if="dataTable.length>0">
                    <template v-slot:default >
                        <thead>
                            <tr>
                                <th class="text-left">
                                    Cite
                                </th>
                                <th class="text-left">
                                    Origen
                                </th>
                                <th class="text-left">
                                    Detalle
                                </th>
                                <th class="text-left">
                                    Nro F
                                </th>
                                <th class="text-left">
                                    Derivado A
                                </th>
                                <th class="text-left">
                                    Fecha
                                </th>
                                <th class="text-left">
                                    Firma
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="(item, i) in dataTable"
                                :key="i"
                            >
                                <td>{{ item.cite }}</td>
                                <td>{{ item.origin }}</td>
                                <td>{{ item.detail }}</td>
                                <td>{{ item.folio }}</td>
                                <td>{{ item.derivation }}</td>
                                <td>{{ item.date }}</td>
                                <td>{{ item.firm }}</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
                <NoData v-else/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import NoData from '@/components/NoData';
import { mdiChartAreaspline ,mdiFilePdfBoxOutline   } from '@mdi/js';

export default {
    components:{
       NoData 
    },
    data(){
        return{
            iconReport:mdiChartAreaspline ,
            iconPdf:mdiFilePdfBoxOutline ,
            items:[],
            date: [new Date().toISOString().substr(0, 10),new Date().toISOString().substr(0, 10)],
            modal: false,
        }
    },
    computed:{
        dataTable(){
            return this.items;
        }
    },
    methods:{
        init(){
            for (let p = 0; p < 50; p++) {
                const element = {
                    cite:'cite'+p,
                    origin:'origin'+p,
                    detail:'detail'+p,
                    folio:'folio'+p,
                    derivation:'derivation'+p,
                    date:new Date(),
                    firm:'firm'+p,
                };
                this.items.push(element);
            }
        }
    },
    created(){
        this.init();
    }    
}
</script>