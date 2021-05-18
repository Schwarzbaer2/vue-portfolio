<template>
  <main>
    <div class="flex flex-col items-center mt-6 bg-mainBlue">
      <h1 class="text-5xl font-bold text-mainText">andreasschwarz</h1>

      <h2 class="mt-4 text-3xl font-bold tracking-widest text-mainRed">Front-end Developer</h2>

      <p class="mt-3 text-xl font-bold tracking-widest text-mainText">JavaScript, Vue, D3</p>

      <img
        class="mt-8 rounded-full md:w-52 w-36 xl:w-60"
        src="@/assets/img/andreas-schwarz.jpg"
        alt="Portrait of Andreas Schwarz"
      />
      <div class="mt-12">
        <!--    <MainProjects /> -->
      </div>
    </div>
  </main>
</template>

<script>
import MainProjects from "@/components/MainProjects";
export default {
  name: "TheMain",
  components: { MainProjects }
};
</script>

<style></style>
