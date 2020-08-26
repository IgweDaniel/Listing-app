<template>
  <div class="listing-page">
    <section class="carousel-container preview"></section>
    <section class="listing-details container">
      <!-- Listing details contnent -->
      <div class="listing-details-content">
        <!-- Meta -->
        <div class="meta">
          <div class="avatar">
            <img
              src="https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://getlistbooktheme.redq.io/wp-content/uploads/2020/04/restaurent-Logo-2.jpg"
              alt=""
            />
          </div>
          <div class="meta-details">
            <span class="category">Restaurant</span>
            <h2 class="name">Hawker 46</h2>

            <div class="price-rating">
              <div class="rating">
                <i class="fas fa-star" v-for="i in 5" :key="i"></i> (4)
              </div>
              <div class="price">
                Price:
                <i class="fas fa-dollar-sign" v-for="i in 5" :key="i"></i>
                (30-200)
              </div>
            </div>
          </div>
        </div>
        <!-- End Meta -->

        <!-- Description -->
        <p class="description">
          A restaurant&nbsp; or an eatery, may be a business that prepares and
          serves food and drinks to customers. Meals are generally served and
          eaten on the premises, but many restaurants also offer take-out and
          food delivery services. Restaurants vary greatly in appearance and
          offerings, including a good sort of cuisines and repair models
          starting from inexpensive nutriment restaurants and cafeterias, to
          mid-priced family restaurants, to high-priced luxury establishments.
        </p>

        <!-- EndDescription -->

        <div class="video-of-listing">
          <Video video="" />
        </div>
        <!-- Amenities -->
        <section class="amenities">
          <h3 class="title">
            Amenities
          </h3>
          <div class="amenities-list">
            <div
              class="icon-detail amenity"
              v-for="amenity in amenities"
              :key="amenity"
            >
              <span class="icon">
                <i class="fas fa-check"></i>
              </span>
              <span class="text">
                {{ amenity }}
              </span>
            </div>
          </div>
        </section>
        <!-- End Amenities -->

        <!-- Terms -->
        <section class="terms">
          <h3 class="title">
            Terms & Rules
          </h3>
          <div class="terms-list">
            <div class="icon-detail term" v-for="term in terms" :key="term">
              <span class="icon">
                <i class="fas fa-check"></i>
              </span>
              <span class="text">
                {{ term }}
              </span>
            </div>
          </div>
        </section>
        <!--End Terms -->

        <!-- Host Info -->
        <section class="host-info">
          <div class="avatar host-avatar">
            <img
              src="https://cdn.shortpixel.ai/client/q_glossy,ret_img/https://getlistbooktheme.redq.io/wp-content/uploads/2020/04/Man-Face-1.jpg"
              alt=""
            />
          </div>
          <div class="host-details">
            <div class="content">
              <h3 class="host-name">Dorian Price</h3>
              <p class="host-address">3A Georgian Ct, Wembley HA9 6QG, UK</p>
              <span class="link">
                <router-link :to="{ name: 'Host', params: { id: 1 } }">
                  view profile
                </router-link>
              </span>
            </div>
          </div>
          <div class="action">
            <div class="button">contact this host</div>
          </div>
        </section>
        <!-- End Host Info -->

        <!-- FAQ -->
        <section class="faq">
          <h3 class="title">Frequently Asked Questions</h3>
          <div class="questions">
            <div class="question">
              <div class="question" v-for="q in faqs" :key="q.ques">
                <Accordion :title="q.ques" :body="q.ans" />
              </div>
            </div>
          </div>
        </section>
        <!--End FAQ -->

        <!-- Related Listiing -->
        <section class="relatedListing">
          <h3 class="title">Related Listing</h3>

          <div class="rlistings">
            <Listing
              v-for="rlisting in rlistings"
              :key="rlisting.id"
              :listing="rlisting"
            />
          </div>
        </section>
        <!-- End Related Listiing -->
      </div>
      <!-- End Listing details contnent -->

      <!-- Listing address contact -->
      <div class="listing-address-contact">
        <div class="action-group">
          <button class="button shadow button-detail">
            <!-- <span class="icon"> </span> -->
            <span class="text">
              save
            </span>
          </button>
          <button class="button shadow button-detail">
            <!-- <span class="icon"> </span> -->

            <span class="text">
              share
            </span>
          </button>
        </div>
        <div class="contact-info shadow"></div>
      </div>

      <!-- Listing End address contact -->
    </section>
  </div>
</template>

<script>
import { Video, Accordion, Listing } from "@/components";
import { listings } from "@/data.js";
export default {
  data: () => ({
    rlistings: listings.slice(0, 3),
    amenities: [
      "Air-Conditioned",
      "Bar",
      "Barista",
      "Free Parking",
      "Free Wi-Fi",
      "Open 24/7",
      "Spa",
      "Swimming Pool",
      "Wheelchair Accessible"
    ],
    faqs: [
      {
        ques: "What is the Check in and check out time?",
        ans: "Our standard check in time is 11:00 am and check out 10:00 am"
      },
      {
        ques: "How far is the Hotel from airport?",
        ans: "Our hotel is located 3 miles away from the airport."
      },
      {
        ques: "Do you have cocktails on the bar?",
        ans: "Yes, we do offer cocktails on our bar"
      }
    ],
    terms: [
      "Arcade Zone",
      "Barista",
      "Birthday Party",
      "Butler service",
      "Fire pits",
      "Indoor Games",
      "Outdoor Jacuzzis",
      "Rooftop pool & bar",
      "smoking Zone",
      "Tennis court",
      "Video Games",
      "Wine Hub"
    ]
  }),
  components: {
    Video,
    Accordion,
    Listing
  },
  mounted() {
    console.log(this.$route.params);
  }
};
</script>

<style scoped>
.carousel-container {
  height: 30vh;
  /* background: #000; */
  background: url("https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_810/https://getlistbooktheme.redq.io/wp-content/uploads/2020/04/restaurant-s.2.jpg");
}

.listing-details {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  column-gap: 40px;
  min-height: 400px;
  margin-top: 60px;
  margin-bottom: 60px;
}

.listing-details-content {
}
.listing-details-content .description {
  color: #8e8e8e;
  line-height: 1.5;
}
.listing-details-content .meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
}
.listing-details-content .meta .avatar {
  height: 50px;
  width: 50px;
}
.listing-details-content .meta-details {
  flex: 1;
  margin: 0 15px;
}
.listing-details-content .meta-details .category {
  display: block;
  color: #914669;
  font-size: 13px;
  font-weight: 700;
}
.listing-details-content .meta-details .name {
  margin: 10px 0;
  line-height: 1.36;
  font-size: 18px;
}
.listing-details-content .meta-details .price-rating i {
  color: #914669;
}
.listing-details-content .meta-details .price-rating {
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
}
.listing-details-content .meta-details .price-rating .rating {
  margin-right: 10px;
}
.listing-details-content .meta-details .price-rating .price {
}

.listing-details-content .video-of-listing {
  height: 195px;
  /* height: 310px;
  width: 100%; */
  color: #8e8e8e;
  margin: 50px 0;
  border-radius: 5px;
  border: none;
  box-shadow: none;
  overflow: hidden;
}
.listing-details-content .video-of-listing .plyr {
  --plyr-color-main: #1ac266 !important;
  /* height: 100%;
  width: 100%; */
}
.listing-details-content .amenities,
.listing-details-content .terms {
  margin-bottom: 75px;
}
.listing-details-content section {
  margin-bottom: 75px;
}
.listing-details-content section .title {
  font-weight: 900;
  margin-bottom: 30px;
}
/* .listing-details-content .amenities .title,
.listing-details-content .terms .title {

} */

.listing-details-content .amenities .amenities-list,
.listing-details-content .terms .terms-list {
  display: grid;
  color: #8e8e8e;

  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 30px;
  row-gap: 15px;
}

.listing-details-content .amenities .amenities-list .amenity .icon,
.listing-details-content .terms .terms-list .term .icon {
  font-size: 13px;
}

.listing-details-content .host-info {
  background-color: #f7f7f7;
  min-height: 145px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;

  padding: 30px;
}
.listing-details-content .host-info .host-details {
  flex: 1;
}
.listing-details-content .host-info .host-details .content {
  flex: 1;
  margin: 20px 0;
}
.listing-details-content .host-info .host-details .content .host-name {
  margin-bottom: 8px;
  font-size: 19px;
}
.listing-details-content .host-info .host-details .content .host-address {
  margin-bottom: 8px;
  color: #8e8e8e;
}
.listing-details-content .host-info .host-details .content .link {
  color: #914669;
  text-transform: capitalize;
  font-weight: bold;
}
.listing-details-content .host-info .action {
  /* width: 30%; */
  margin: 0 0 20px;
}
.listing-details-content .host-info .action .button {
  /* width: 100%; */
  background-color: #914669;
  height: 36px;
  font-size: 14px;
}

.listing-details-content .faq .questions .question {
  margin-bottom: 15px;
}

.listing-details-content .relatedListing {
}
.listing-details-content .relatedListing .rlistings {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: 454px;
  gap: 20px;
}

.listing-address-contact {
  display: none;
}

.listing-address-contact .action-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}
.listing-address-contact .action-group .button {
  background: #fff;
  color: #000;
  width: 45%;
}

.listing-address-contact .contact-info {
  min-height: 500px;
  border-radius: 4px;
}
@media (min-width: 560px) {
  .listing-details-content .meta .avatar {
    height: 65px;
    width: 65px;
  }
  .listing-details-content .meta-details .price-rating {
    align-items: center;

    justify-content: flex-start;
    flex-direction: row;
  }
  .listing-details-content .video-of-listing {
    height: 305px;
  }
  .listing-details-content .relatedListing .rlistings {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 376px;
  }
}
@media (min-width: 768px) {
  .listing-details-content .meta-details .name {
    font-size: 20px;
  }
  .listing-details-content .meta .avatar {
    height: 80px;
    width: 80px;
  }
  .listing-details-content .video-of-listing {
    height: 393px;
  }
  .carousel-container {
    height: 50vh;
  }
  .listing-details-content .amenities .amenities-list,
  .listing-details-content .terms .terms-list {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 15px;
  }
}
@media (min-width: 1024px) {
  .listing-details-content .meta .avatar {
    height: 100px;
    width: 100px;
  }
  .listing-details {
    grid-template-columns: 2fr 1fr;
  }
  .listing-address-contact {
    display: block;
  }
  .listing-details-content .video-of-listing {
    height: 404px;
  }
  .carousel-container {
    height: 100vh;
  }
  .listing-details-content .host-info .host-details .content {
    padding: 0 20px;
    margin: 0;
  }
  .listing-details-content .host-info {
    flex-direction: row;
    align-items: center;
  }
  .listing-details-content .host-info .action {
    margin: 0;
  }
  .listing-details-content .relatedListing .rlistings {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 363px;
  }
}
</style>
