<template>
  <div class="additional">
    <div class="additional__item">
      <span class="additional__title">Title</span
      ><span class="additional__text">{{ game.title }}</span>
    </div>
    <div class="additional__item">
      <span class="additional__title">Developer</span
      ><span class="additional__text">{{ game.developer }}</span>
    </div>
    <div class="additional__item">
      <span class="additional__title">Publisher</span
      ><span class="additional__text">{{ game.publisher }}</span>
    </div>
    <div class="additional__item">
      <span class="additional__title">Release Date</span
      ><span class="additional__text"> {{ game.release_date }}</span>
    </div>
    <div class="additional__item">
      <span class="additional__title">Genre</span
      ><span class="additional__text">{{ game.genre }}</span>
    </div>
    <div class="additional__item">
      <span class="additional__title">Platform</span
      ><span class="additional__text">{{ game.platform }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    game: Object,
  },
};
</script>

<style lang="scss" scoped>
.additional {
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 20px;
  &__title {
    color: $yellow;
    margin-bottom: 5px;
  }
  &__item {
    display: flex;
    flex-direction: column;
  }
}
@media screen and (max-width: $mobile) {
  .additional {
    grid-template-columns: 1fr;
    row-gap: 20px;
    &__item {
      text-align: center;
    }
  }
}
</style>
