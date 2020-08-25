<template>
  <footer>
    <div class="footer-inner container">
      <div class="company-address footer-item">
        <div class="title">
          Global Headquarters
        </div>
        <p>60 Fifth Avenue, 3rd Floor New York, NY 20012</p>
        <p>312.965.9058</p>
      </div>
      <div class="company footer-item">
        <div class="title">
          Company
        </div>
        <ul>
          <li>
            Sign In
          </li>
          <li>
            Register
          </li>
          <li>
            Privacy Policy
          </li>
          <li>
            Pricing Plan
          </li>
          <li>
            Frequently Asked Question
          </li>
        </ul>
      </div>
      <div class="quick-links footer-item">
        <div class="title">quick links</div>

        <ul>
          <li>
            Sign In
          </li>
          <li>
            Register
          </li>
          <li>
            Privacy Policy
          </li>
          <li>
            Pricing Plan
          </li>
          <li>
            Frequently Asked Question
          </li>
        </ul>
      </div>

      <div class="news-letter footer-item">
        <div class="title">
          Our Newsletter
        </div>
        <p>
          Subscribe to our newsletter and we will inform you about newest
          directory and promotions
        </p>
        <div class="news-letter-form">
          <input type="text" placeholder="Email Address" />
          <span class="icon"><i class="far fa-paper-plane"></i></span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
footer {
  /* margin-top: 20px; */
  min-height: 473px;

  background: url("../../assets/Group-3025.png");
  background-color: #f8f9f8;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: auto;
  background-attachment: scroll;
  background-position-x: left;
  background-position-y: bottom;
  background-repeat: no-repeat;
}
.footer-inner {
  padding: 80px 40px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  /* grid-auto-rows: 400px; */
  gap: 40px;
}

.footer-item .title {
  font-size: 17px;
  margin-bottom: 25px;
  font-weight: bold;
  font-family: "Poppins";
  text-transform: capitalize;
}
.footer-item ul li,
.footer-item p {
  margin: 15px 0;
  color: #707070;
}
.news-letter-form {
  width: 100%;
  height: 50px;
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  background: #fff;
  display: flex;
  overflow: hidden;
}
.news-letter-form input {
  min-height: 48px;
  width: 100%;
  padding: 0 20px;
  border: none;
}
.news-letter-form input::placeholder {
  font-family: "Mulish", sans-serif;
  text-transform: capitalize;
}
.news-letter-form .icon {
  width: 60px;
  height: 100%;
  cursor: pointer;
}
.news-letter-form .icon:hover {
  background: #f53f46;
  color: #fff;
}

@media (min-width: 560px) {
  .footer-inner {
    padding: 80px 0px;
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 768px) {
}
@media (min-width: 1024px) {
  .footer-inner {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
