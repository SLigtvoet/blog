<template>
  <div>
    <p class="text-black dark:text-zinc-300   text-2xl py-1 font-semibold">
      Mar
    </p>
    <p class="py-2 dark:text-zinc-300  ">
      Hoi! Ik ben Mar "asdfsadfasdf"
    </p>
    <div class="my-3 space-x-3 pb-3">

              <NuxtLink
                to="https://nl.linkedin.com/in/verbeekmarjolein"
                target="_blank"
                no-referrer
                class="px-3 py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="LinkedIn"
              >
                <Icon name="fa:linkedin-square" size="1em" />
              </NuxtLink>
              <NuxtLink
                to="https://www.instagram.com/marligtvoet/"
                target="_blank"
                no-referrer
                class="px-3 py-2 bg-gray-300 text-gray-800 rounded-md dark:bg-slate-700 dark:text-[#F1F2F4]"
                aria-label="Instragram"
              >
                <Icon name="fa:instagram" size="1em" />
              </NuxtLink>
    </div>
  </div>
</template>
