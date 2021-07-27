<template>
    <v-container>
        <v-autocomplete
            v-model="model"
            :items="items"
            :loading="isLoading"
            :search-input.sync="search"
            chips
            clearable
            hide-details
            hide-selected
            :append-icon="iconSearch"
            item-text="name"
            item-value="symbol"
            label="Buscar..."
            solo
        >
            <template v-slot:no-data>
                <v-list-item>
                <v-list-item-title>
                    Busca tu documento por
                    <strong>Cite, asunto, origen...</strong>
                </v-list-item-title>
                </v-list-item>
            </template>
            <template v-slot:selection="{ attr, on, item, selected }">
                <v-chip
                    v-bind="attr"
                    :input-value="selected"
                    color="blue-grey"
                    class="white--text"
                    v-on="on"
                >
                    <v-icon>
                        {{iconResult}}
                    </v-icon>
                    <span v-text="item.name"></span>
                </v-chip>
            </template>
            <template v-slot:item="{ item }">
                <v-list-item-content>
                    <v-list-item-title v-text="item.name"></v-list-item-title>
                    <v-list-item-subtitle v-text="item.symbol"></v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                    <v-icon>{{iconDocument}}</v-icon>
                </v-list-item-action>
            </template>
        </v-autocomplete>
        <template v-slot:extension>
            <v-tabs
                v-model="tab"
                :hide-slider="!model"
                color="blue-grey"
                slider-color="blue-grey"
            >
                <v-tab :disabled="!model">
                News
                </v-tab>
                <v-tab :disabled="!model">
                Trading
                </v-tab>
                <v-tab :disabled="!model">
                Blog
                </v-tab>
            </v-tabs>
        </template>
    </v-container>
</template>

<script>

import { mdiMagnify, mdiTextBoxMultipleOutline, mdiTextureBox  } from '@mdi/js';

export default {
    data(){
        return {
            isLoading: false,
            items: [],
            model: null,
            search: null,
            tab: null,
            iconSearch:mdiMagnify,
            iconDocument:mdiTextBoxMultipleOutline,
            iconResult:mdiTextureBox
        }
    },
    watch: {
        model (val) {
            if (val != null) this.tab = 0
            else this.tab = null
        },
        search (val) {
            // Items have already been loaded
            if (this.items.length > 0) return

            this.isLoading = true

            // Lazily load input items
            fetch('https://api.coingecko.com/api/v3/coins/list')
            .then(res => res.clone().json())
            .then(res => {
                this.items = res
            })
            .catch(err => {
                console.log(err)
            })
            .finally(() => (this.isLoading = false))
        },
    },
}
</script>