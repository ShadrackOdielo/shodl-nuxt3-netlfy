<template>
    <div>
      <button v-if="showButton" @click="scrollToTop" class="">Top</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showButton: false,
      }
    },
    methods: {
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      },
      handleScroll() {
        if (window.pageYOffset > 100) {
          this.showButton = true;
        } else {
          this.showButton = false;
        }
      },
    },
    beforeMount() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    },
  }
  </script>
  
  <style>
  .scroll-to-top-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px;
    border-radius: 50%;
    background-color: #0077cc;
    color: white;
    font-size: 16px;
    cursor: pointer;
    z-index: 99;

  }
  </style>
  