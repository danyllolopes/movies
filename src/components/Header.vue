<template>
<nav>
    <v-app-bar class="header">
        <v-icon class="mr-2" color="white" large>mdi-video</v-icon>
        <v-toolbar-title class="title">DOT Filmes</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-text-field class="mt-7" label="Digite o nome do filme" solo prepend-inner-icon="mdi-magnify">
        </v-text-field>
        <v-btn icon>
            <v-icon title="Favoritos" color="white">mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
            <v-badge color="#122ab2" content="2" overlap>
                <v-icon title="Meu carrinho" color="white">mdi-cart-outline</v-icon>
            </v-badge>
        </v-btn>
    </v-app-bar>
</nav>
</template>

<script>


export default {
    name: "Header",


}
</script>

<style scoped>
.header {
    background: #2c70ff !important;
}

.title {
    color: white;
}
</style>