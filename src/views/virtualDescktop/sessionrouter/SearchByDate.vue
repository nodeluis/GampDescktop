<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" class="mt-10 mb-10 d-flex justify-center align-center">
                <v-icon color="primary" size="30">{{iconDate}}</v-icon><h1 class="primary--text"> Búsqueda por fecha </h1>
            </v-col>
            <v-col
                cols="6"
            >
                <v-menu
                    v-model="menu1"
                    :close-on-content-click="false"
                    max-width="290"
                >
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        :value="date"
                        clearable
                        label="Seleccione la fecha del documento"
                        readonly
                        prepend-icon="mdi-calendar"
                        outlined
                        dense
                        v-bind="attrs"
                        v-on="on"
                        @click:clear="date = null"
                    ></v-text-field>
                </template>
                <v-date-picker
                    v-model="date"
                    @change="menu1 = false"
                ></v-date-picker>
                </v-menu>
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
                                    Asunto
                                </th>
                                <th class="text-left">
                                    Descripción
                                </th>
                                <th class="text-left">
                                    Actualmente
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
                                <td>{{ item.issue }}</td>
                                <td>{{ item.description }}</td>
                                <td>{{ item.now }}</td>
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

import { mdiCalendarRange } from '@mdi/js';
import NoData from '@/components/NoData';

export default {
    components:{
        NoData
    },
    computed: {
        dataTable(){
            return this.items;
        }
    },
    data(){
        return {
            date: null,
            menu1: false,
            iconDate:mdiCalendarRange,
            items:[]
        }
    },
    methods:{
        init(){
            for (let i = 0; i < 10; i++) {
                const element = {
                    cite:'cite'+i,
                    origin:'origin'+i,
                    issue:'issue'+i,
                    description:'description'+i,
                    now:'now'+i,
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