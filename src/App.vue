<template>
  <div id="app">
    <Layout>
      <router-view />
    </Layout>
  </div>
</template>

<script>
import { Layout } from "./components";

export default {
  components: { Layout }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Satisfy&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Mulish&display=swap");
:root {
  font-size: 16px;
  --nav-height: 60px;
}
@media (min-width: 1024px) {
  :root {
    --nav-height: 112px;
  }
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins";
  font-family: "Mulish", sans-serif;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

ul {
  list-style: none;
}
a {
  color: inherit;
  text-decoration: none;
}
.icon {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-detail {
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-detail .icon {
  width: 30%;
  max-width: 24px;
  display: block;
}
.icon-detail .text {
  display: block;
  /* width: 70%; */
  flex: 1;
  white-space: nowrap;
}
.container {
  width: 90%;
  margin: 0 auto;
}
button {
  box-shadow: none;
  border: none;
  outline: none;
}
.button {
  background: #f64e54;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  font-weight: 700;
  color: #fff;
  width: fit-content;
  height: 42px;
  padding: 0 22px;
  border-radius: 4px;
  font-size: 15px;
  cursor: pointer;
}
.button:hover,
.button:active {
  border: 2px solid #000;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

@media (min-width: 560px) {
}
@media (min-width: 768px) {
}
@media (min-width: 1024px) {
}
</style>
