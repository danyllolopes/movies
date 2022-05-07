<template>
    <v-hover v-slot="{ hover }" open-delay="200">
        <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }" class="card">
            <v-img :src="posterPath" alt="" class="btn img">
                <v-btn icon class="background: blue ">
                    <v-icon color="red">mdi-heart</v-icon>
                </v-btn>
            </v-img>
            <v-card-title class="subtitle-2 title">{{ movie.title }}</v-card-title>
            <v-card-text>
                <v-row align="center" class="mx-0 info_card">
                    <v-rating :value="movie.vote_average / 2" color="amber" dense half-increments readonly size="14">
                    </v-rating>
                    <div class="grey--text ml-4">
                        {{ movie.vote_average }} | {{ movie.release_date }}
                    </div>
                </v-row>
                <div class="my-4 subtitle-2 card_gender">
                    <span v-for="(genre, index) in movie.genre_ids" :key="genre">
                        {{ genreTypeName(genre, index) }}
                    </span>
                </div>
                <v-btn class="btn_adicionar">Adicionar</v-btn>
            </v-card-text>
        </v-card>
    </v-hover>
</template>

<script>

export default {
    name: "Movie",

    props: {
        movie: {
            required: true,
        },
        genres: {
            required: true,
        }
    },
    computed: {
        posterPath() {
            return "https://image.tmdb.org/t/p/w500/" + this.movie.poster_path
        },
    },
    methods: {
        genreTypeName(genraId, index) {
            for (const item of this.genres) {
                if (item.id == genraId) {
                    if (this.movie.genre_ids.length - 1 == index) {
                        return item.name;
                    } else {
                        return item.name + ', ';
                    }

                }
            }
        }

    }

}
</script>

<style scoped>
.card {
    margin-top: 40px !important;
}

.title {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
}

.info_card {
    display: flex;
    justify-content: center;
}

.card_gender {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

}

.btn_adicionar {
    width: 100%;

}
</style>