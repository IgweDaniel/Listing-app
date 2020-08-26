<template>
  <div class="home">
    <div class="hero">
      <h3>Explore</h3>
      <h2>Amazing destinations</h2>
      <div class="search-form">
        <input type="text" name="search" id="" placeholder="Type anything..." />
        <div class="icon search-icon "><i class="fas fa-search"></i></div>
      </div>
    </div>

    <section class="listings-display">
      <div class="listings container">
        <Listing
          v-for="listing in listings"
          :key="listing.id"
          :listing="listing"
        />
      </div>
      <button class="button">
        Load more
      </button>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import { Listing } from "@/components";
import { listings } from "@/data.js";
export default {
  name: "Home",
  data: () => ({
    listings
  }),
  components: { Listing }
};
</script>

<style scoped>
.hero {
  height: 270px;
  padding: 60px;
  background: url("../assets/home-3-banner-bg.jpg");
  background-color: #dfe8ef;

  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position-x: center;
  background-position-y: bottom;
}
.hero h3 {
  font-family: "Satisfy", cursive;
  font-size: 20px;
  margin-bottom: 15px;
  font-weight: 400;
  text-align: center;
}
.hero h2 {
  font-size: 25px;
  margin: 0 0 20px;
  text-align: center;
  text-transform: capitalize;
  font-family: "Poppins";
}

.hero .search-form {
  display: flex;
  width: 600px;
  max-width: 100%;
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  overflow: hidden;
  background: #fff;
  margin: 0 auto;
  height: 48px;
}
.hero .search-form .search-icon {
  width: 50px;
}
.hero .search-form input {
  border-radius: 6px;

  padding: 0 20px;
  outline: 0;
  border: 0;
  width: 100%;
}
.hero .search-form input::placeholder {
  font-family: "Mulish", sans-serif;
  text-transform: capitalize;
}
.listings-display {
  margin: 60px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.listings-display .button {
  margin-top: 50px;
}
.listings {
  display: grid;
  grid-gap: 20px;
  row-gap: 10px;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 450px;
}

@media (min-width: 630px) {
  .hero h3 {
    font-family: "Satisfy", cursive;
    font-size: 20px;
  }
  .hero h2 {
    font-size: 26px;
  }
  .listings {
    /* column-gap: 0px; */
    row-gap: 40px;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 390px;
  }
}
@media (min-width: 768px) {
  .hero {
    height: 300px;
  }
  .hero h3 {
    font-family: "Satisfy", cursive;
    font-size: 25px;
  }
  .hero h2 {
    font-size: 34px;
  }
  .listings {
    row-gap: 40px;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 318px;
  }
}
@media (min-width: 943px) {
  .listings {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 415px;
  }
}

@media (min-width: 1140px) {
  .listings {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 378px;
    grid-gap: 30px;
    column-gap: 30px;
    row-gap: 50px;
  }
}
</style>
