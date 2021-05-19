<template>
  <section>
    <h3 class="text-xl font-bold leading-10 text-center text-mainText">My Projects</h3>
    <BaseCard />
  </section>
</template>

<script>
import BaseCard from "@/components/BaseCard";
export default {
  name: "MainProjects",
  components: {
    BaseCard
  }
};
</script>
