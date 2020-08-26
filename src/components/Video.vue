<template>
  <!-- <vue-plyr>
    <div data-plyr-provider="youtube" data-plyr-embed-id="bTqVqk7FSmY"></div>
  </vue-plyr> -->
  <div class="video">
    <div class="video-play-buttion">
      <i class="fas fa-play"></i>
      <!-- <i class="fas fa-pause"></i> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.video {
  position: relative;

  background-color: #000;
  background: url("https://getlistbooktheme.redq.io/wp-content/uploads/2020/04/94288877_167836657779887_381114258018009088_n-4.png");
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 100%;
}
.video::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.4;
}

.video-play-buttion {
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  background: #f64e54;
  color: #fff;
  border-radius: 50%;
  height: 70px;
  width: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
