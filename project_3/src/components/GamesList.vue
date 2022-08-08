<template>
  <div class="wrapper list__wrapper">
    <div class="flex-center">
      <h1 class="list__title no-app-title align-center">
        Best Free Games for PC and Browser In 2022!
      </h1>
    </div>
    <div class="flex-center">
      <span class="align-center"
        >354 free-to-play games found in our games list!
      </span>
    </div>
    <game-filter @sendFilter="saveFilter" />
    <div>
      <div class="cards-list">
        <game-card v-for="game in pageOfItems" :key="game.id" :card="game" />
      </div>
    </div>
    <div class="cards-footer">
      <jw-pagination
        :labels="customLabels"
        :pageSize="pageSize"
        :items="filteredGames || games"
        :maxPages="maxPages"
        @changePage="onChangePage"
        :disableDefaultStyles="true"
      ></jw-pagination>
    </div>
  </div>
</template>

<script>
import GameCard from "../components/GameCard.vue";
import GameFilter from "../components/GameFilter.vue";

const customLabels = {
  first: "<<",
  last: ">>",
  previous: "<",
  next: ">",
};
export default {
  props: {
    games: Array,
  },
  data() {
    return {
      customLabels,
      maxPages: 4,
      pageSize: 24,
      pageOfItems: [],
      filteredGames: null,
      mobile: window.outerWidth < 480,
    };
  },
  components: { GameCard, GameFilter },
  methods: {
    saveFilter(event) {
      this.filteredGames = event;
    },
    onChangePage(pageOfItems) {
      this.pageOfItems = pageOfItems;
      window.scrollTo(0, 0);
    },
    changePagination() {
      if (this.mobile) {
        this.maxPages = 3;
        this.pageSize = 10;
      }
    },
  },
  created() {
    this.changePagination();
  },
};
</script>

<style lang="scss" scoped>
.align-center {
  text-align: center;
  @include fluid-font(22px, 30px);
}

.cards-list {
  display: grid;
  justify-content: center;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;
}
@media screen and (max-width: 1270px) {
  .cards-list {
    column-gap: 4%;
    row-gap: 10px;
    grid-template-columns: 43% 43%;
    padding-bottom: 0;
  }
}
@media screen and (max-width: $mobile) {
  .cards-list {
    column-gap: 0px;
    row-gap: 10px;
    grid-template-columns: 100%;
    padding-bottom: 0;
  }
}

.cards-footer {
  display: flex;
  justify-content: center;
}
.button--centred {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-center {
  display: flex;
  justify-content: center;
}
</style>
