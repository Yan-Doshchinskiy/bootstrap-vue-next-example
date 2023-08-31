<template>
  <DefaultLayout>
    <div class="deps-page">
      <div id="hero" class="content">
        <h2 class="title">Компоненты из Nuxt проекта</h2>
        <ul class="list">
          <li v-for="title in targetDeps">
            <BLink :href="`#${title}`">
              {{ title }}
            </BLink>
          </li>
        </ul>
      </div>

      <div id="@nuxt/http" class="content -partial">
        <h3>@nuxt/http</h3>
        <div class="components">
          нет для nuxt v3. Рекомендуется использовать внутренний изоморфный useFetch
          <br/>
          <a href="https://nuxt.com/docs/getting-started/data-fetching#isomorphic-fetch-and-fetch" target="_blank">
            Nuxt3 Data fetching Docs
          </a>
          <button @click="fetchExamplePost">Отправить запрос</button>
          <div v-if="examplePost">
            <h4>title: {{ examplePost.title }}</h4>
            <p>id: {{ examplePost.id }}</p>
            <p>userId: {{ examplePost.userId }}</p>
            <p>description: {{ examplePost.body }}</p>
          </div>
        </div>
      </div>

      <div id="@nuxtjs/composition-api" class="content -success">
        <h3>@nuxtjs/composition-api</h3>
        <div class="components">
          Composition api уже входит в Vue 3 и Nuxt 3
        </div>
      </div>

      <div id="@nuxtjs/google-analytics" class="content -research">
        <h3>@nuxtjs/google-analytics</h3>
        <div class="components">
          Такого пакета нет. Нужно разобраться можно ли его заменить пакетом @nuxtjs/gtm
        </div>
      </div>

      <div id="@nuxtjs/pwa" class="content -partial">
        <h3>@nuxtjs/pwa</h3>
        <div class="components">
          Возможная замена:
          <br/>
          <p>Пакет с достаточно большим количеством звезд: <a href="https://github.com/kevinmarrec/nuxt-pwa-module"
                                                              target="_blank">https://github.com/kevinmarrec/nuxt-pwa-module</a>
          </p>
          <p>Разработчик - член команды Nuxt: <a href="https://github.com/vite-pwa/nuxt" target="_blank">https://github.com/vite-pwa/nuxt</a>
          </p>
        </div>
      </div>

      <div id="@pinia/nuxt" class="content -success">
        <h3>@pinia/nuxt</h3>
        <div class="components">
          Дефолтный пакет для Nuxt 3
        </div>
      </div>

      <div id="@rkaliev/nuxtjs-yandex-metrika" class="content -research">
        <h3>@rkaliev/nuxtjs-yandex-metrika</h3>
        <div class="components">
          Нужно найти замену
        </div>
      </div>

      <div id="@sentry/integrations" class="content -research">
        <h3>@sentry/integrations</h3>
        <div class="components">
          Должно работать. Это просто JS пакет, не привязанный к версии nuxt
        </div>
      </div>

      <div id="@vueuse/core" class="content -success">
        <h3>@vueuse/core</h3>
        <div class="components">
          Работает.
          <br/>
          [useLocalStorage] Страница загружена {{ renderCount.count }} раз.
        </div>
      </div>

      <div id="@vueuse/nuxt" class="content -success">
        <h3>@vueuse/nuxt</h3>
        <div class="components">
          Работает.
        </div>
      </div>

      <div id="vue-apexcharts" class="content -success">
        <h3>vue-apexcharts</h3>
        <div class="components">
          Пакет можно заменить на vue3-apexcharts.
          <ClientOnly>
            <apexchart
                height="400"
                width="100%"
                :options="apexChartConfig.options"
                :series="apexChartConfig.series"
            ></apexchart>
          </ClientOnly>
        </div>
      </div>

      <div id="bootstrap-vue" class="content -partial">
        <h3>bootstrap-vue</h3>
        <div class="components">
          Можно заменить на нестабильную версию.
          <br/>
          Более подробно на странице:
          <nuxt-link to="/">Bootstrap Vue Next</nuxt-link>
        </div>
      </div>

      <div id="core-js" class="content -success">
        <h3>core-js</h3>
        <div class="components">
          Работает. JS библиотека не зависит от версии nuxt.
        </div>
      </div>

      <div id="dayjs" class="content -success">
        <h3>dayjs</h3>
        <div class="components">
          Работает. JS библиотека не зависит от версии nuxt.
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "~/layouts/default.vue";
import {useLocalStorage} from "@vueuse/core";
import {
  BLink,
} from "bootstrap-vue-next";
import {onMounted} from "@vue/runtime-core";

interface ExamplePost {
  id: number,
  userId: number,
  title: string,
  body: string,
}

const examplePost = ref<null | ExamplePost>(null)
const renderCount = ref<{ count: number }>({
  count: 0
})

const apexChartConfig = {
  options: {
    chart: {
      id: 'vuechart-example'
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
    }
  },
  series: [{
    name: 'series-1',
    data: [30, 40, 45, 50, 49, 60, 70, 91]
  }]
}

async function fetchExamplePost() {
  try {
    const {data} = await useFetch<ExamplePost>('https://jsonplaceholder.typicode.com/posts/1')
    examplePost.value = data.value
  } catch (e) {
    console.error('fetchExamplePost error', e)
  }
}

function initLocalStoreValue() {
  const store = useLocalStorage(
      'my-storage',
      {
        count: 0,
      },
  )
  renderCount.value = store.value
  renderCount.value.count += 1
}

onMounted(() => {
  initLocalStoreValue()
})

const targetDeps = [
  "@nuxt/http",
  "@nuxtjs/composition-api",
  "@nuxtjs/google-analytics",
  "@nuxtjs/pwa",
  "@pinia/nuxt",
  "@rkaliev/nuxtjs-yandex-metrika",
  "@sentry/integrations",
  "@vueuse/core",
  "@vueuse/nuxt",
  "vue-apexcharts",
  "bootstrap-vue",
  "core-js",
  "dayjs",
  "express",
  "maska",
  "mixpanel-browser",
  "nuxt",
  "pinia",
  "pinia-plugin-persistedstate",
  "portal-vue",
  "primeicons",
  "primevue",
  "vue",
  "vue-feather-icons",
  "vue-meta",
  "vue-router",
  "vue-server-renderer",
  "vue-template-compiler",
  "webpack",
]


</script>

<style lang="scss" scoped>

.deps-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  grid-row-gap: 50px;

  .list {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-row-gap: 15px;

    &.-success {
      > h3 {
        background-color: #8eff8e;
      }
    }

    &.-failure {
      > h3 {
        background-color: #ffb0b0;
      }
    }

    &.-partial {
      > h3 {
        background-color: #ffff9f;
      }
    }

    &.-research {
      > h3 {
        background-color: #c789ff;
      }
    }


    & > .components {
      width: 100%;
      padding: 15px;
      border-radius: 12px;
      border: 1px solid gray;
      display: flex;
      flex-direction: column;
      align-items: center;
      grid-row-gap: 15px;
    }
  }

}
</style>
