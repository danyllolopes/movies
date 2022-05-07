<template>
        <nav>
        <v-app-bar color="deep-purple accent-4">
            <v-icon class="mr-2" color="white">mdi-video</v-icon>
            <v-toolbar-title class="title">Filmes</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-text-field class="mt-7 input" color="blue" label="Digite o nome do filme" solo prepend-inner-icon="mdi-magnify"
            :items="movies"
          item-text="title"
          item-value="id"
          id="search"
            >
              <template v-slot:item="{item}">
                <v-btn text :to="`/movie/${item.id}`">{{item.title}}</v-btn>
            </template>
            </v-text-field>
            <v-btn icon>
                <v-icon color="white">mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
                <v-badge color="yellow" content="2" overlap>
                    <v-icon color="white">mdi-cart-outline</v-icon>
                </v-badge>
            </v-btn>
        </v-app-bar>
    </nav>
</template>

<script>
import {api} from '../services/request'

export default {
    name: "Header",
    data: () => ({
       model: '',
       search: null,
       movies: []
    }),
    mounted() {
        this.loadMovies()
    },
    methods: {
        loadMovies: async function() {
            try {
                const response = api.get('/movie/popular')
                this.movies = (await response).data.results
            }catch(error){
                console.log(error)
            }
        }
    }

}
</script>

<style scoped>
.title {
    color: white;
}
.input {
   margin-right: 20rem !important;
   cursor: pointer !important;
}
</style>