<template>
  <div v-if="isLoading" class="loader">
    <img src="@/assets/chicken.gif" alt="loading" />
  </div>
  <section v-else class="game">
    <div class="wrapper game__wrapper">
      <div class="game__side">
        <div class="game__pic">
          <img :src="game.thumbnail" alt="" />
        </div>
        <a
          :href="game.game_url"
          class="button button--primary game__button"
          target="_blank"
          rel="noopener norefer"
          >Play Now for free</a
        >
      </div>
      <div class="game__info">
        <h1 class="no-app-title game__title">
          {{ game.title }}
        </h1>
        <span class="game__developer">{{ game.developer }}</span>

        <v-expansion-panels class="about game__about">
          <v-expansion-panel class="about__wrapper">
            <v-expansion-panel-header
              class="about__header"
              @click="isClicked = !isClicked"
            >
              <span v-if="isClicked" class="fa-solid fa-plus"></span>
              <span v-else class="fa-solid fa-minus"></span>

              About game
            </v-expansion-panel-header>
            <v-expansion-panel-content class="about__content">
              {{ game.description }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-row>
          <v-col>
            <h2 class="subtitle game__subtitle">Additional information</h2>
          </v-col>
        </v-row>
        <game-additional :game="game" />
        <v-row>
          <v-col>
            <h2 class="subtitle game__subtitle">
              {{ game.title }} Screenshots
            </h2>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="(sreenshot, index) in game.screenshots"
            :key="sreenshot.id"
            class="flex-center"
          >
            <v-img
              @click="openLightBoxOnSlide(index)"
              lazy-src="@/assets/chicken.gif"
              max-height="150"
              :src="sreenshot.image"
              class="screenshots"
            ></v-img>
          </v-col>
          <FsLightbox
            :toggler="toggler"
            :sources="this.game.screenshots.map((obj) => obj.image)"
            type="image"
            :slide="slide"
          />
        </v-row>
        <v-row>
          <v-col>
            <h2 class="subtitle game__subtitle">
              Minimum System Requirements ({{ game.platform }})
            </h2>
          </v-col>
        </v-row>
        <system-requirements :game="game" />
      </div>
    </div>
  </section>
</template>

<script>
import GameAdditional from "@/components/AdditionalIndo.vue";
import SystemRequirements from "@/components/SysReq.vue";
import FsLightbox from "fslightbox-vue";
export default {
  components: { GameAdditional, SystemRequirements, FsLightbox },
  data() {
    return {
      isLoading: Boolean,
      slide: 1,
      toggler: false,
      game: {},
      isClicked: true,
      gameId: "",
      screenshots: [],
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
    openLightBoxOnSlide(number) {
      this.slide = number + 1;
      this.toggler = !this.toggler;
    },
    async fetchGame() {
      this.isLoading = true;

      await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${this.gameId}`,
        this.options
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          return (this.game = data);
        })
        .then(
          () =>
            (this.screenshots = this.game.screenshots.map((obj) => obj.image))
        )

        .catch((err) => console.error(err))
        .finally(() => (this.isLoading = false));
    },
  },
  created() {
    this.gameId = this.$route.params.id;
    this.fetchGame();
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
.screenshots {
  max-width: 250px;
  cursor: pointer;
  transition: transform 0.3s linear;
  &:hover {
    transform: scale(1.2);
  }
}
.button.button--primary.game__button {
  &:hover {
    animation: none;
    transform: scale(1);
    background-color: $yellow;
    border-color: $yellow;
    color: $red;
  }
}
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
.game {
  padding: 30px 0 30px;

  &__wrapper {
    position: relative;
    display: grid;
    grid-template-columns: 0.5fr 1fr;
  }

  &__pic {
    margin-bottom: 10px;
    & > img {
      border-radius: 2%;
    }
  }

  &__subtitle {
    color: $blue;
    margin-bottom: 10px;
  }
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about {
  width: 100%;
  display: block;
  margin-bottom: 20px;
  &__wrapper {
    &.v-expansion-panel {
      background-color: $header_color;
    }
  }

  &__header {
    display: block;
    text-align: center;

    background-color: transparent;
    color: $red;
  }

  &__content {
    background-color: transparent;
    color: #c7d5e2;
    font-size: 19px;
  }
}
@media screen and (min-width: $tablet) {
  .game {
    &__side {
      margin-right: 20px;
    }
    &__button {
      text-align: center;
    }
  }
}
@media screen and (max-width: $tablet) {
  .game {
    &__wrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__side {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__pic {
      margin-bottom: 10px;
      & > img {
        border-radius: 2%;
      }
    }

    &__title {
      text-align: center;
    }

    &__developer {
      display: block;
      text-align: center;
    }
    .about {
      width: 100%;
      display: block;
      margin-bottom: 20px;
      &__header {
        text-align: center;
      }
    }
  }
  .game__side {
    margin-bottom: 20px;
  }

  .game__developer {
    margin-bottom: 20px;
  }

  .game__about {
    margin-bottom: 20px;
  }
}
@media screen and (max-width: $mobile) {
  .screenshots {
    max-width: 300px;
  }
}
</style>
