<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="mt-10 mb-10 d-flex justify-center align-center">
                <v-icon color="primary" size="30">{{iconDocumnet}}</v-icon><h1 class="primary--text"> Documentos Pendientes </h1>
            </v-col>
            <v-col cols="12">
                <v-card v-if="items.length>0">
                    <v-card-title>
                        Pendientes
                    </v-card-title>
                    <v-simple-table height="300px">
                        <template v-slot:default >
                            <thead>
                                <tr>
                                    <th class="text-left">
                                        Cite
                                    </th>
                                    <th class="text-left">
                                        Creación
                                    </th>
                                    <th class="text-left">
                                        Autor
                                    </th>
                                    <th class="text-left">
                                        Origen Documento
                                    </th>
                                    <th class="text-left">
                                        Asunto
                                    </th>
                                    <th class="text-left">
                                        Actualmente
                                    </th>
                                    <th class="text-left">
                                        Impresión
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr
                                    v-for="(item, i) in items"
                                    :key="i"
                                >
                                    <td>{{ item.cite }}</td>
                                    <td>{{ item.date }}</td>
                                    <td>{{ item.autor }}</td>
                                    <td>{{ item.origin }}</td>
                                    <td>{{ item.case }}</td>
                                    <td>{{ item.actual }}</td>
                                    <td><v-btn text><v-icon color="secondary">{{iconPrint}}</v-icon></v-btn></td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                    <v-card-actions class="d-flex justify-center">
                        <v-pagination
                            v-model="page"
                            :length="con"
                        ></v-pagination>
                    </v-card-actions>
                </v-card>
                <NoData v-else/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import NoData from '@/components/NoData';
import { mdiFileDocument,mdiPrinterSettings  } from '@mdi/js';

export default {
    components:{
       NoData 
    },
    data(){
        return{
            page:1,
            loading:true,
            pagination:[],
            search:'',
            iconDocumnet:mdiFileDocument,
            iconPrint:mdiPrinterSettings,
            callApi:true,
            con:1,
            skip:0,
            limit:10,
        }
    },
    methods:{
        init(){
            if(this.pagination.length<3){
                let items=[];
                for (let p = (this.page>1?this.page*5:0), q=0; q < 5; p++, q++) {
                    const element = {
                        cite:'cite'+p,
                        date:'date'+p,
                        autor:'autor'+p,
                        origin:'origin'+p,
                        case:'case'+p,
                        actual:'actual'+p,
                    };
                    items.push(element);
                }
                this.pagination.push(items);
                this.con+=1;
            }else if(this.callApi){
                this.callApi=false;
                this.page-=1;
                this.con=this.page;
            }
        }
    },
    computed:{
        items(){
            return this.pagination[this.page-1];
        }
    },
    watch: {
        page: {
            handler: function(val, oldVal) {
                if(val==this.con&&this.callApi){
                    this.init();
                }
            },
            deep: true
        }
    },
    created(){
        if(this.page==this.con){
            this.init();
        }
    }    
}
</script>