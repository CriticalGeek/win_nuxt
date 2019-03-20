<template>
  <div class="accordion-wrapper">
    <div
      v-for="(faq, index) in faqs_qa"
      :key="`faqsQa-${index}`"
    >
      <button
        v-on:click="toogle"
        class="accordion"
      >{{ faq.question }}</button>
      <div
        class="panel"
        v-html="faq.answer"
      ></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Accordion',
    methods: {
      toogle (e) {
        console.log(e.target)
        e.target.classList.toggle("active")
        var panel = e.target.nextElementSibling
        if (panel.style.display === "block") {
          panel.style.display = "none"
        } else {
          panel.style.display = "block"
        }
      }
    },
    data () {
      return {
        faqs_qa: this.$store.state.content.resources.faqs.qa
      }
    }
  }
</script>


<style lang="scss">
.accordion {
  background: #fbfbfb;
  color: #444;
  cursor: pointer;
  padding: 1rem 2rem;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 1rem;
  transition: ease 0.3s;
  position: relative;
  font-weight: 700;
  border-bottom: 1px solid #fff;

  &:after {
    content: "\25BC";
    font-weight: 700;
    position: absolute;
    right: 2rem;
    top: 15px;
  }
}

.active,
.accordion:hover {
  background-color: #eee;
}

.panel {
  padding: 1rem 2rem;
  display: none;
  background-color: white;
  overflow: hidden;
  text-align: left;

  p {
    font-size: 1rem;
  }

  p:last-child {
    margin-bottom: 0;
  }
}
</style>
