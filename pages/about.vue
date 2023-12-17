<script setup lang="ts">
defineOgImage()
</script>

<template>
  <div class="py-5">
    <div class="sm:grid grid-cols-8 px-6 py-5 sm:py-9 gap-5 container max-w-5xl  mx-auto">
      <div class="col-span-5  max-w-md">
        <div class="flex justify-between">
          <div>
            <h1 class="text-xl sm:text-4xl  pb-2 font-bold ">
              Mar
            </h1>

            <div class="my-3 space-x-3 pb-10">
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
          <div class="sm:hidden block col-span-3 pb-5 dark:bg-slate-700 dark:text-[#F1F2F4]">
            <NuxtImg
              src="/riyad.jpg"
              width="125"
              height="115"
              quality="50"
              class="rounded-md"
            />
          </div>
        </div>
        <h3 class="text-base sm:text-3xl font-semibold pb-7 sm:pb-12">
          Marketeer, blogger, vlogger, lezer, retraitant
        </h3>

        <p>Hallo allemaal, ik vlog, blog, lees en regelmatig neem ik deel aan retraites. Ik ben gepassioneerd over het delen van mijn ervaringen en inzichten met anderen.</p>
      </div>
      <div class="hidden sm:block col-span-3">
        <NuxtImg
          src="https://instagram.frtm1-1.fna.fbcdn.net/v/t39.30808-6/374698982_18285096016127838_2741827053697534505_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=instagram.frtm1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=OACiC_7wZvYAX9lGony&edm=APU89FAAAAAA&ccb=7-5&oh=00_AfAspWVz-5MwsCfX_woa6H-xm3suAUrZBodL5wmAtIEC5g&oe=657EECF1&_nc_sid=bc0c2c"
          width="450"
          height="500"
          quality="50"
          class="rounded-md"
        />
      </div>
    </div>
  </div>
</template>
