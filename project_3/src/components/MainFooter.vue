<template>
  <v-footer class="footer">
    <div class="footer__wrapper wrapper">
      <v-row class="flex-container">
        <ul class="footer__nav">
          <li>
            <router-link class="footer__link" :to="{ name: 'home' }">
              Home
            </router-link>
          </li>
          <li>
            <router-link class="footer__link" :to="{ path: '/all' }">
              Games
            </router-link>
          </li>
          <li>
            <router-link class="footer__link" :to="{ name: 'about-us' }">
              About
            </router-link>
          </li>
        </ul>
      </v-row>
      <v-row class="flex-centered">
        <v-col>
          <ul class="social">
            <li>
              <a
                href="http://facebook.com"
                target="_blank"
                rel="noopener norefer"
                class="button button--primary social__btn"
              >
                <span class="fa-brands fa-square-facebook"></span>
              </a>
            </li>
            <li>
              <a
                href="
                                        https://twitter.com"
                target="_blank"
                rel="noopener norefer"
                class="button button--primary social__btn"
              >
                <span class="fa-brands fa-square-twitter"></span>
              </a>
            </li>
            <li>
              <a
                href="http://github.com"
                target="_blank"
                rel="noopener norefer"
                class="button button--primary social__btn"
              >
                <span class="fa-brands fa-square-github"></span>
              </a>
            </li>
          </ul>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="flex-centered">
          <span class="trade-mark"> &#xA9; GameCave</span>
        </v-col>
      </v-row>
    </div>
  </v-footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  gap: 60px;
  margin-bottom: 10px;
}
.flex-centered {
  display: flex;
  justify-content: center;
}
.trade-mark {
  color: #c7d5e2;
  text-align: center;
}
.footer {
  background-color: $header_color;
  padding: 40px 0;
  &__nav {
    display: flex;
    justify-content: center;
    gap: 80px;
    width: 100%;
  }
  &__link {
    font-family: "Press Start 2P", cursive;
    color: $red;
    font-size: 15px;
    position: relative;
    transition: color 0.3s ease;
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: -3px;
      left: 0;
      background-color: $red;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    &:hover {
      color: $yellow;
      &::after {
        transform: scaleX(1);
        transform-origin: bottom left;
        background-color: $yellow;
      }
    }
  }
}
@media screen and (max-width: $mobile) {
  .footer__nav {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}
.social {
  display: flex;
  gap: 20px;
  justify-content: center;
  &__btn {
    font-size: 25px;
    padding: 0px;
    border: none !important;
  }
}
</style>
