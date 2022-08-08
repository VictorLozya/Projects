<template>
  <section class="about-us">
    <div class="wrapper">
      <v-row
        ><v-col
          ><h1 class="no-app-title about-us__title">Who Whe Are</h1></v-col
        ></v-row
      >
      <v-row class="about-us__flex">
        <div class="about-us__img">
          <img src="../assets/about-us.png" alt="cards" />
        </div>
        <p class="about-us__text about-us__text--flex">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          necessitatibus aliquid id quia quidem suscipit nemo ad amet
          perspiciatis eligendi. Iure ut eos delectus quis, aliquam fugit dicta
          debitis tenetur suscipit impedit nesciunt, expedita tempora voluptas
          porro corrupti quos sint praesentium voluptatum laudantium officia
          optio doloremque laborum nostrum odio. Animi nam necessitatibus
          aperiam! Molestias ab quibusdam placeat voluptatem a facilis!
        </p>
      </v-row>
      <v-row>
        <v-col
          ><h1 class="no-app-title about-us__title">
            What is GameCave all about?
          </h1></v-col
        >
      </v-row>
      <v-row>
        <v-col>
          <p class="about-us__text">
            We built GameCave to create an ecosystem that brings all the best
            Free-to-Play Games and MMO Games into one place while rewarding
            gamers with free premium in-game loot, special offers and exclusive
            perks. Our vision is to create the most exciting and rewarding
            gaming experience by breaking the inflexible concept of digital
            storefronts. You get more value... and it's all still completely
            free.
          </p>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
.about-us {
  padding: 25px 0 25px;
  &__title {
    display: flex;
    justify-content: center;
  }
  &__flex {
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
  }
  &__img {
    width: 50%;
  }
  &__text {
    @include fluid-font(18px, 23px);

    &--flex {
      width: 70%;
    }
  }
  @media screen and (max-width: $tablet) {
    .about-us__flex {
      flex-direction: column;
      align-items: center;
    }
    .about-us__text--flex {
      width: 93%;
    }
    .about-us__img {
      width: 100%;
    }
  }
}
</style>
