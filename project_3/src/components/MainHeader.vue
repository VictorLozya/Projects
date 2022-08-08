<template>
  <header class="header">
    <div class="wrapper header__wrapper">
      <router-link :to="{ name: 'home' }" class="logo">
        <img src="../assets/logo.png" alt="logo"
      /></router-link>
      <nav class="nav">
        <ul class="nav__list">
          <li class="nav__item">
            <router-link class="header__link" :to="{ name: 'home' }">
              Home
            </router-link>
          </li>
          <li class="nav__item">
            <router-link class="header__link" :to="{ path: '/all' }">
              Games
            </router-link>
          </li>
          <li class="nav__item">
            <router-link class="header__link" :to="{ name: 'about-us' }">
              About
            </router-link>
          </li>
        </ul>
      </nav>
      <Slide right :closeOnNavigation="true" class="burger__menu">
        <nav class="nav--burger">
          <ul class="nav__list--burger">
            <li class="nav__item">
              <router-link class="header__link" :to="{ name: 'home' }">
                Home
              </router-link>
            </li>
            <li class="nav__item">
              <router-link class="header__link" :to="{ path: '/all' }">
                Games
              </router-link>
            </li>
            <li class="nav__item">
              <router-link class="header__link" :to="{ name: 'about-us' }">
                About
              </router-link>
            </li>
            <router-link
              :to="{ name: 'search' }"
              class="button button--primary header__btn--burger"
            >
              <span class="fa-solid fa-magnifying-glass"></span>
              Search
            </router-link>
          </ul>
        </nav>
      </Slide>
      <router-link
        :to="{ name: 'search' }"
        class="button button--primary header__btn"
      >
        <span class="fa-solid fa-magnifying-glass"></span>
      </router-link>
    </div>
  </header>
</template>

<script>
import { Slide } from "vue-burger-menu";
export default {
  components: { Slide },
  data() {
    return {
      auth: false,
    };
  },
  created() {
    this.auth = localStorage.getItem("auth") !== null;
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.fa-magnifying-glass {
  margin-left: 5px;
}
.logo {
  width: 42px;
}
.header {
  position: fixed;
  top: 0;
  z-index: 4;
  width: 100%;
  background-color: $header_color;
  padding-top: 15px;
  padding-bottom: 15px;
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
  }
  &__btn {
    font-size: 24px;
    padding: 0;
    border: none !important;
    &:hover {
      animation: none !important;
    }
    &--burger {
      font-size: 15px;
      border: none !important;
      padding: 0;
      text-transform: capitalize;
    }
  }
  &__link {
    font-family: "Press Start 2P", cursive;
    color: $red;
    font-size: 15px;
    position: relative;
    transition: color 0.3s ease;
    &__btn {
      font-size: 12px;
      padding: 15px 15px;
    }
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
.burger__menu {
  display: none;
}
.nav {
  &__list {
    display: flex;
    justify-content: space-around;
    gap: 80px;
  }
}
@media screen and(max-width: $tablet ) {
  .nav__list {
    display: none;
  }
  .burger__menu {
    display: block;
  }
  .header__btn {
    display: none;
  }
  .nav__list--burger {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 80px;
  }
  .header__wrapper {
    padding: 0 20px;
  }
}
</style>
