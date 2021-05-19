<template>
  <div class="flex flex-col p-4 m-4 rounded-md w-5/5 md:flex-row md:w-auto md:max-w-xl bg-mainRed">
    <img
      class="object-scale-down w-full md:w-36 md:mr-4"
      src="@/assets/img/project-portfolio.png"
      alt="Andreas Schwarz"
    />
    <div class="flex flex-col justify-between max-h-96">
      <div>
        <p class="pt-4 text-xl leading-6 text-black md:pt-0">Personal Portfolio</p>
        <p class="pt-4 text-sm text-mainText">
          My own responsive portfolio page.
        </p>
      </div>

      <p class="pt-4">Source code</p>
      <div class="flex items-center justify-between mr-8">
        <div>
          <p>Live Preview</p>
        </div>
        <div class="flex w-6">
          <img src="@/assets/img/vue.svg" alt="Vue" />
          <img src="@/assets/img/tailwind.svg" alt="Tailwind" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCard"
};
</script>

<style></style>
