<template>
  <header ref="header">
    <nav class="">
      <div class="primary-nav-wrapper">
        <div class="primary-nav container  ">
          <ul class="socials right-align">
            <li>
              <a href="#" target="_blank">
                <i class="fab fa-facebook-square"></i
              ></a>
            </li>
            <li>
              <a href="#" target="_blank"><i class="fab fa-twitter"></i></a>
            </li>
            <li>
              <a href="#" target="_blank"><i class="fab fa-instagram"></i></a>
            </li>
            <li>
              <a href="#" target="_blank"><i class="fab fa-linkedin"></i></a>
            </li>
          </ul>
          <ul class="actions left-align">
            <li>
              <span class="icon">
                <IconAddUser />
              </span>
              <span class="text">Join Us</span>
            </li>
            <li>
              <span class="icon">
                <IconPlus />
              </span>
              <span class="text">Add Listing</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="secondary-nav-wrapper" ref="secNav">
        <div class="secondary-nav container">
          <div class="logo right-align">
            Daniel's List
          </div>
          <ul class="left-align">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/explore">Explore</router-link></li>
            <li><router-link to="/contact">Explore</router-link></li>
            <li>
              <router-link to="/frequently-asked-questions">FAQ</router-link>
            </li>
            <li><router-link to="/pricing">Pricing</router-link></li>
            <li><router-link to="/pricing">Like</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import IconAddUser from "@/assets/svg/add-user-button.svg";
import IconPlus from "@/assets/svg/plus.svg";
export default {
  components: { IconAddUser, IconPlus },
  methods: {
    updateScrollState(e) {
      if (e.currentTarget.scrollY > 5) {
        this.$refs.header.classList.add("has-scrolled");
      } else this.$refs.header.classList.remove("has-scrolled");
    }
  },
  mounted() {
    this.$refs.secNav.addEventListener("transitionend", e => {
      console.log(e.currentTarget);
      e.currentTarget.style.position = "fixed";
    });
    window.addEventListener("scroll", this.updateScrollState);
  }
};
</script>

<style scoped>
header {
  /* position: fixed; */
  /* top: 0; */
  width: 100%;
  /* background: #fff; */

  height: 60px;
  height: var(--nav-height);
  z-index: 100;
}

header.has-scrolled {
  /* box-shadow: 0 2px 6px rgba(117, 78, 78, 0.12); */
}

header.has-scrolled .secondary-nav-wrapper {
  /* top: -42px; */
  transform: translateY(-43px);

  /* width: 100%; */
  /* background: blueviolet; */
  box-shadow: 0 2px 6px rgba(117, 78, 78, 0.12);
}
.secondary-nav-wrapper {
}
.secondary-nav-wrapper {
  width: 100%;
  /* position: fixed; */
  background: #fff;
  transition: transform 0.2s ease-in, color;
  z-index: 1000;
}

.primary-nav,
.secondary-nav {
  display: none;
  font-family: "Mulish", sans-serif;
}
.primary-nav-wrapper {
  border-bottom: 1px solid #e6e6e6;
}
.primary-nav {
  height: 42px;
}
.secondary-nav {
  height: 70px;
}
.primary-nav .left-align,
.secondary-nav .left-align {
  margin-left: auto;
}
.primary-nav ul,
.secondary-nav ul {
  display: flex;
}
.primary-nav .right-align li {
  margin-right: 10px;
}
.primary-nav .left-align li,
.secondary-nav .left-align li {
  margin-left: 20px;
}
.icon {
  display: none;
}
.icon svg {
  /* stroke: #000; */
  width: 24px;
  height: 24px;
  display: none;
}

@media (min-width: 560px) {
}
@media (min-width: 768px) {
}
@media (min-width: 1024px) {
  header {
    /* height: 112px; */
    height: var(--nav-height);
  }
  .primary-nav,
  .secondary-nav {
    display: flex;
    align-items: center;
  }
}
</style>
