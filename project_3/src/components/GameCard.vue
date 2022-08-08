<template>
  <div>
    <router-link
      class="card__title"
      :to="{ name: 'game-page', params: { id: card.id } }"
    >
      <v-card class="card">
        <v-img
          :src="`${card.thumbnail}`"
          gradient="0deg, rgba(0,252,255,0) 43%, rgba(0,0,0,1) 95%"
          lazy-src="@/assets/chicken.gif"
          max-height="226"
        >
          <div class="image-elements">
            <span
              v-if="card.platform.includes('PC')"
              class="fa-brands fa-windows card__platform"
            ></span>

            <span
              v-else
              class="fa-brands fa-internet-explorer card__platform"
            ></span>
            <span class="card__genre">{{ card.genre }}</span>
          </div>
        </v-img>

        <div class="card__header">
          <h1 class="card__title">{{ card.title }}</h1>
        </div>
        <div class="card__body">
          <p class="card__text">{{ card.short_description }}</p>
        </div>
      </v-card>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    card: Object,
  },
};
</script>

<style lang="scss" scoped>
.image-elements {
  padding: 5px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
}
.card {
  max-width: 400px;
  background-color: $background_color;
  transition: transform 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: scale(105%);
    & .v-image__image {
      background-image: linear-gradient(
        0deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0) 100%
      ) !important;
    }
  }
  &__platform {
    padding: 3px;
    border-radius: 10%;
    color: $blue;
    font-weight: 600px;
    font-size: 25px;
    text-shadow: 0px 0px 8px black;
    text-align: center;
    display: inline-block;
  }
  &__genre {
    background-color: $blue;
    padding: 3px;
    border-radius: 10%;
    color: white;
    font-weight: 600px;
    text-shadow: 0px 0px 8px black;
    text-align: center;
    @include fluid-font(10px, 15px);

    display: inline-block;
  }
  &__header {
    padding: 10px 10px 0;
    text-align: center;
  }
  &__body {
    padding: 10px 10px 20px;
  }
  &__text {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: white;
    text-align: center;
    @include fluid-font(15px, 20px);
  }
  &__title {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    @include fluid-font(18px, 27px);
    color: $blue;

    padding: 5px;
    text-align: center;
  }
}
@media screen and (max-width: $mobile) {
  .card {
    max-width: 100%;
  }
}
</style>
