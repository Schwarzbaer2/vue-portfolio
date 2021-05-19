<template>
  <main>
    <div class="flex flex-col items-center mt-6 bg-mainBlue">
      <h1 class="text-4xl font-bold md:text-5xl text-mainText">andreasschwarz</h1>

      <h2 class="mt-4 text-2xl font-bold tracking-widest md:text-3xl text-mainRed">
        Front-end Developer
      </h2>

      <p class="mt-3 text-lg font-bold tracking-widest md:text-xl text-mainText">
        JavaScript, Vue, D3
      </p>

      <img
        class="mt-8 rounded-full md:w-52 w-36 xl:w-60"
        src="@/assets/img/andreas-schwarz.jpg"
        alt="Portrait of Andreas Schwarz"
      />
      <div class="mt-12">
        <MainProjects />
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
