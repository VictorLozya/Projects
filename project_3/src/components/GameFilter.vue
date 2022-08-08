<template>
  <div class="list__filter">
    <v-form ref="form" lazy-validation>
      <v-row class="mobile-flex">
        <v-col>
          <v-select
            v-model="selectPlatform"
            :items="platform"
            label="Platform"
            required
            chips
          ></v-select>
        </v-col>
        <v-col>
          <v-select
            v-model="selectCategory"
            :items="category"
            label="Category"
            required
            attach
            chips
            multiple
          ></v-select>
        </v-col>
        <v-col>
          <v-select
            v-model="selectRevelance"
            :items="revelance"
            label="Sort by"
            required
            chips
          ></v-select>
        </v-col>
        <v-col class="button--centred">
          <v-btn class="mr-4" @click="validate"> Submit </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectPlatform: "",
      selectCategory: "",
      selectRevelance: "",
      platform: ["all", "pc", "browser"],
      category: [
        "mmorpg",
        "shooter",
        "strategy",
        "moba",
        "racing",
        "sports",
        "social",
        "sandbox",
        "open-world",
        "survival",
        "pvp",
        "pve",
        "pixel",
        "voxel",
        "zombie",
        "turn-based",
        "first-person",
        "third-Person",
        "top-down",
        "tank",
        "space",
        "sailing",
        "side-scroller",
        "superhero",
        "permadeath",
        "card",
        "battle-royale",
        "mmo",
        "mmofps",
        "mmotps",
        "3d",
        "2d",
        "anime",
        "fantasy",
        "sci-fi",
        "fighting",
        "action-rpg",
        "action",
        "military",
        "martial-arts",
        "flight",
        "low-spec",
        "tower-defense",
        "horror",
        "mmorts",
      ],
      revelance: ["release-date", "popularity", "alphabetical", "relevance"],
      options: {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "6889109058msh56a1eb53d5b3f74p1e533ajsn6362febb3222",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      },
      filteredGames: null,
    };
  },
  methods: {
    async filter(platform, category, revelance) {
      if (Array.isArray(category)) {
        category = `&category=${category.join(".")}`;
      } else category = ``;
      if (platform) {
        platform = `platform=${platform}`;
      } else platform = `platform=all`;
      if (revelance) {
        revelance = `&sort-by=${revelance}`;
      } else revelance = `&sort-by=popularity`;
      await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?${platform}${category}${revelance}`,
        this.options
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return (this.filteredGames = data);
        })
        .then(() => this.$emit("sendFilter", this.filteredGames))

        .catch((err) => console.error(err));
    },
    validate() {
      this.filter(
        this.selectPlatform,
        this.selectCategory,
        this.selectRevelance
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.button--centred {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.mobile-flex {
  width: 100%;
}
@media screen and (max-width: $mobile) {
  .mobile-flex {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .button--centred {
    justify-content: center;
  }
  .list__filter {
    display: flex;
    justify-content: center;
  }
}
</style>
