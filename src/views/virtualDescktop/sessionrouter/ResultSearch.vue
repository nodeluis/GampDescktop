<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" class="mt-10 mb-10 d-flex justify-center align-center">
                <v-icon color="primary" size="30">{{iconSearch}}</v-icon><h1 class="primary--text"> Resultados de Búsqueda </h1>
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

import { mdiCloudSearchOutline  } from '@mdi/js';
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
            iconSearch:mdiCloudSearchOutline ,
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