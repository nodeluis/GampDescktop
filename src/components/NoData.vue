<template>
    <v-container>
        <v-row>
            <v-col cols="12" class="d-flex justify-center">
                <v-icon size="200" color="primary">{{icon}}</v-icon>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
                <h1>No se encontró información</h1>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import { mdiAlertCircleOutline } from '@mdi/js';

export default {
    data(){
        return{
        icon:mdiAlertCircleOutline 
        }
    }
}
</script>