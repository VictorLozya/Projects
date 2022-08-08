<template>
  <div class="playback">
    <video-background
      :src="require(`../assets/vid.mp4`)"
      poster="../assets/bg.png"
      :sources="[
        {
          src: ``,
          res: 480,
          poster: '',
        },
      ]"
      style="max-height: 100vh; height: 100vh"
      overlay="linear-gradient(0deg, rgba(0,0,0,0.4318102240896359) 43%, rgba(0,0,0,0.7959558823529411) 92%)"
      transition="fade"
    >
      <section class="wrapper">
        <div class="logo__wrapper">
          <div class="logo">
            <img src="../assets/logo.png" alt="Logo" />
          </div>
          <h1 class="no-app-title logo__text logo__title">GameCave</h1>
          <span class="subtitle logo__text logo__subtitle"
            >Free-game database</span
          >
        </div>
        <div class="info">
          <h2 class="no-app-title info__title">
            Find the best free-to-play games!
          </h2>
          <p class="text info__text">
            GameCave is a free app for finding game charts, getting games
            recommendations, tracking details about games.
          </p>
          <v-row class="main__buttons">
            <v-col>
              <a
                href="https://www.freetogame.com/api-doc"
                class="button button--secondary info__btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                About API</a
              >
            </v-col>
            <v-col>
              <button
                @click="$router.push({ path: '/all' })"
                class="button button--primary"
              >
                Play
              </button></v-col
            >
          </v-row>
        </div>
      </section>
    </video-background>
    <div></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.logo {
  width: 80px;
  margin-bottom: 10px;

  &__wrapper {
    margin-top: 60px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10%;
  }
  &__title {
    animation: animateColor 10s ease infinite alternate;
  }
  &__subtitle {
    color: $red;
  }
  &__text {
    font-family: "Press Start 2P", cursive;
    text-transform: uppercase;
  }
}

.info {
  text-align: center;
  &__title {
    font-family: "Press Start 2P", cursive;
    color: white;
    animation: textShadow 8s ease infinite alternate-reverse;
    padding: 15px;
    text-transform: uppercase;
  }

  &__text {
    @include fluid-font(15px, 24px);

    font-weight: 600;
    color: #ffcd00;
    text-shadow: #000000 2px 2px 2px;
    padding-bottom: 30px;
  }
  &__btn {
    background-color: transparent;
    color: $green;
    text-shadow: #000000 2px 2px 2px;

    &:hover {
      background-color: $green;
      color: white;
    }
  }
}
.playback {
  background-image: url("../assets/bg.png");
  background-size: cover;
}
@media screen and (max-width: $tablet) {
  .logo {
    width: 50px;
    &__text {
      text-align: center;
    }
  }
  .main__buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

@keyframes textShadow {
  0% {
    text-shadow: #e95b56 3px 3px 4px;
  }
  50% {
    text-shadow: #22edfa 3px 3px 4px;
  }
  75% {
    text-shadow: #bde57c 3px 3px 4px;
  }
  100% {
    text-shadow: #ffcd00 3px 3px 4px;
  }
}
@keyframes animateColor {
  0% {
    color: #e95b56;
  }
  50% {
    color: #22edfa;
  }
  75% {
    color: #bde57c;
  }
  100% {
    color: #ffcd00;
  }
}
</style>
