<template>
  <v-row v-if="game.platform.includes('Web')">
    <v-col>
      <p class="sys-text">
        {{ game.title }} is a browser based game and should run smoothly on
        practically any PC with a updated web-browser. If you have old hardware
        or software, you may still be able to play {{ game.title }}, but your
        game experience may suffer. For the best gameplay experience, we
        recommend the latest versions of Firefox, Chrome, or Internet Explorer.
      </p>
    </v-col>
  </v-row>
  <div class="sys--grid" v-else>
    <div class="sys-item">
      <span class="sys-title">OS</span>
      <span>{{ game.minimum_system_requirements.os }}</span>
    </div>

    <div class="sys-item">
      <span class="sys-title">Processor</span>
      <span>{{ game.minimum_system_requirements.processor }}</span>
    </div>

    <div class="sys-item">
      <span class="sys-title">Memory</span>
      <span>{{ game.minimum_system_requirements.memory }}</span>
    </div>

    <div class="sys-item">
      <span class="sys-title">Graphics</span>
      <span>{{ game.minimum_system_requirements.graphics }}</span>
    </div>

    <div class="sys-item">
      <span class="sys-title">Storage</span>
      <span>{{ game.minimum_system_requirements.storage }}</span>
    </div>

    <div class="sys-item">
      <span class="sys-title">Additional Notes</span>
      <span>Specifications may change during development</span>
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
.sys {
  &-item {
    display: flex;
    flex-direction: column;
  }
  &-title {
    color: $yellow;
    margin-bottom: 5px;
  }
  &-text {
    font-size: 19px;
  }
  &--grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media screen and (max-width: $mobile) {
  .sys {
    &--grid {
      grid-template-columns: 1fr;
      row-gap: 20px;
    }
    &-item {
      text-align: center;
    }
  }
}
</style>
