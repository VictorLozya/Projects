<template>
  <div v-if="isLoading" class="loader">
    <img src="@/assets/chicken.gif" alt="loading" />
  </div>
  <games-list v-else :games="gamesList" />
</template>
<script>
import GamesList from "@/components/GamesList.vue";

export default {
  components: { GamesList },
  data() {
    return {
      isLoading: Boolean,
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
  methods: {
    async fetchAll() {
      this.isLoading = true;
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
        .catch((err) => console.error(err))
        .finally(() => (this.isLoading = false));
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
.loader {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: linear-gradient(
    356deg,
    rgba(0, 0, 0, 0.46) 20%,
    rgba(0, 0, 0, 0.45702030812324934) 71%
  );
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
