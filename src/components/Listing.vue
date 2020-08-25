<template>
  <div class="listing">
    <div class="listing-image">
      <img :src="listing.imgurl" :alt="listing.name" />
    </div>
    <div class="listing-info">
      <div class="meta">
        <span class="status" :class="listing.status">{{ listing.status }}</span>
        <span class="category">{{ listing.category }}</span>
      </div>
      <router-link to="/listing/:id">
        {{ listing.name }}
      </router-link>
      <div class="contact">
        <div class="location icon-detail">
          <span class="icon">
            <i class="fas fa-map-marker-alt"></i>
          </span>
          <span class="text">
            {{ listing.location }}
          </span>
        </div>
        <div class="phone  icon-detail">
          <span class="icon">
            <i class="fas fa-phone-alt"></i>
          </span>
          <span class="text">
            {{ listing.phone }}
          </span>
        </div>
      </div>
      <div class="ratings">
        <i class="fas fa-star" v-for="i in 5" :key="i"></i>
        <!-- {{ listing.rating }} -->
        <!-- {{ rating[0] }} -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["listing"],
  computed: {
    rating() {
      console.log(this.listing.ratings.split("."));
      return "lll";
    }
  }
};
</script>

<style scoped>
.listing {
  height: 100%;
  cursor: pointer;
}
.listing-info {
  height: 35%;
}
.listing-info a {
  font-weight: bold;
  font-size: 15px;
  display: block;
  margin: 10px 0;
}
.listing-info .meta,
.listing-info .contact {
  display: flex;
  align-items: center;
  margin-top: 15px;
  /* justify-content: center; */
}
.listing-info .contact .location {
  margin-right: 50px;
}
.listing-info .icon-detail .icon {
  margin-right: 5px;
}
.listing-info .contact {
  font-size: 13px;
  color: #262626;
  font-weight: 500;
}
.listing-info .contact .icon {
  color: #914669;
}
.listing-info .meta .status,
.listing-info .meta .category {
  font-size: 13px;
  text-transform: capitalize;
}
.listing-info .meta .category {
  color: #914669;
  font-weight: bold;
}

.listing-info .meta .status {
  border-radius: 4px;
  padding: 2px 7px;
  color: #fff;

  margin-right: 20px;
}
.listing-info .meta .status.open {
  background: #914669;
}
.listing-info .meta .status.closed {
  background: #c7c7c7;
}

.listing-info .ratings {
  color: #914669;
  margin: 10px 0;
  font-size: 13px;
}
.listing-image {
  border-radius: 6px;
  height: 65%;
  overflow: hidden;
}
.listing-image:hover img {
  transform: scale(1.2);
}
.listing-image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s ease-in-out;
}
</style>
