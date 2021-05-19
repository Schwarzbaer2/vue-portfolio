<template>
  <div
    class="flex flex-col items-center justify-start min-h-screen border-8 border-mainRed bg-mainBlue"
  >
    <div class="w-full">
      <TheHeader />
    </div>
    <div class="w-full">
      <TheMain />
    </div>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
import TheMain from "@/components/TheMain";
export default {
  name: "App",
  components: {
    TheHeader,
    TheMain
  },
  created() {
    document.title = "Andreas Schwarz || Front-end Developer ";
  }
};
</script>
