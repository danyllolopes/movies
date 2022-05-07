<template>
  <div class="mx-3">
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="3" v-for="movie in movies" :key="movie.id">
          <Movie :movie="movie" :genres="genres" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Movie from '../components/Movie'
import { api } from '../services/request'

export default {
  components: {
    Movie,
  },
  data: function () {
    return {
      movies: [],
      genres: [],
      
    };
  },
  async mounted() {
    this.fetchGenres(); 
    try {
      const response = await api.get("/movie/popular");    
      this.movies = response.data.results;
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async fetchGenres() {
      try {
        const response = await api.get("/genre/movie/list");      
        this.genres = response.data.genres;
      } catch (error) {
        console.log(error);
      }
    }, 

  }
}
</script>

<style>
</style>