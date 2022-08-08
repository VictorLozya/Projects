<template>
  <div class="wrapper">
    <h1 class="no-app-title search__title">Find game here:</h1>

    <v-text-field
      v-model="searchText"
      label="Search for games"
      placeholder="Type game name here..."
      outlined
      class="search-field"
      color="info"
    ></v-text-field>
    <div
      class="not-found"
      v-if="!searchResults.length && searchText.length >= 3"
    >
      <span class="no-app-title not-found__title">No Results...</span>
      <div class="not-found__img">
        <img src="../assets/not-found.png" alt="" />
      </div>
    </div>
    <v-row v-else class="cards-list">
      <game-card v-for="game in searchResults" :key="game.id" :card="game" />
    </v-row>
  </div>
</template>

<script>
import GameCard from "../components/GameCard.vue";

export default {
  components: { GameCard },

  data() {
    return {
      searchText: "",
      searchResults: [],
      gamesList: [],
      options: {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "6889109058msh56a1eb53d5b3f74p1e533ajsn6362febb3222",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      },
    };
  },
  computed: {},
  watch: {
    searchText(userSearch) {
      if (userSearch.length < 3) {
        this.searchResults = [];
        return;
      }
      const arr = userSearch.split(" ");
      for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
      userSearch = arr.join(" ");
      if (userSearch.length >= 3) {
        this.searchResults = this.gamesList.filter((game) =>
          game.title.includes(userSearch)
        );
      }
    },
  },
  methods: {
    async fetchAll() {
      await fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games",
        this.options
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return (this.gamesList = data);
        })
        .catch((err) => console.error(err));
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  created() {
    this.fetchAll();
  },
};
</script>

<style lang="scss" scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__img {
    width: 45%;
  }
}
.cards-list {
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
  padding-bottom: 30px;
}
@media screen and (max-width: $tablet) {
  .cards-list {
    column-gap: 4%;
    row-gap: 10px;
    grid-template-columns: 43% 43%;
    padding-bottom: 0;
  }
}
@media screen and (max-width: $mobile) {
  .cards-list {
    column-gap: 0%;
    row-gap: 10px;
    grid-template-columns: 100%;
    padding-bottom: 0;
  }
  .not-found__img {
    width: 80%;
  }
}
.search {
  &__title {
    margin: 20px 0;
  }
  &-field {
    width: 100%;
  }
}
</style>
