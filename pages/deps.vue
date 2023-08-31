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

      <div id="express" class="content -success">
        <h3>express</h3>
        <div class="components">
          Работает. JS библиотека не зависит от версии nuxt.
        </div>
      </div>
      <div id="maska" class="content -success">
        <h3>maska</h3>
        <div class="components">
          Работает.
          <input v-maska data-maska="#-#-#-#-#" value="12">
        </div>
      </div>

      <div id="mixpanel-browser" class="content -success">
        <h3>mixpanel-browser</h3>
        <div class="components">
          Работает. JS библиотека не зависит от версии nuxt.
        </div>
      </div>


      <div id="portal-vue" class="content -success">
        <h3>portal-vue</h3>
        <div class="components">
          Работает.
          <div style="background-color: yellow">
            Телепортируем из этого контейнера.
            <portal to="destination">
              <p style="background-color: #c789ff">Телепортируемый текст</p>
            </portal>
          </div>
          <div style="background-color: greenyellow">
            Телепортируем в этот контейнер.
            <portal-target name="destination"/>
          </div>

        </div>
      </div>

      <div id="primeicons" class="content -success">
        <h3>primeicons</h3>
        <div class="components">
          Работает.
          <i class="pi pi-check"></i>
          <i class="pi pi-times"></i>
          <span class="pi pi-search"></span>
          <span class="pi pi-user"></span>
        </div>
      </div>

      <div id="primevue" class="content -success">
        <h3>primevue</h3>
        <div class="components">
          Работает.
          <PrimeButton>PrimeButton</PrimeButton>
        </div>
      </div>

      <div id="vue-feather-icons" class="content -partial">
        <h3>vue-feather-icons</h3>
        <div class="components">
          Можно заменить на vue-feather. Иконки теже, другой синтаксис.
          <vue-feather type="external-link"></vue-feather>
          <vue-feather type="phone-call"></vue-feather>
        </div>
      </div>

      <div id="@faker-js/faker" class="content -success">
        <h3>@faker-js/faker</h3>
        <div class="components">
          Работает. JS библиотека не зависит от версии nuxt.
          <br />
          Boolean: {{faker.datatype.boolean()}}
          <br />
          Noun: {{faker.word.noun()}}
        </div>
      </div>

      <div id="@nuxtjs/sentry" class="content -research">
        <h3>@nuxtjs/sentry</h3>
        <div class="components">
          Не работает. Нужно исследовать
        </div>
      </div>

      <div id="stylelint" class="content -success">
        <h3>stylelint</h3>
        <div class="components">
          Работает. JS библиотека не зависит от версии nuxt.
        </div>
      </div>

      <div id="@nuxtjs/stylelint-module" class="content -success">
        <h3>@nuxtjs/stylelint-module</h3>
        <div class="components">
          Работает.
        </div>
      </div>

      <div id="@vue/test-utils" class="content -success">
        <h3>@vue/test-utils</h3>
        <div class="components">
          Можно использовать @nuxtjs/stylelint-module.
        </div>
      </div>

      <div id="jest" class="content -success">
        <h3>jest</h3>
        <div class="components">
          Работает. JS библиотека не зависит от версии nuxt.
          <br />
          Можно еще посмотреть в сторону vitest
        </div>
      </div>

      <div id="babel-core" class="content -success">
        <h3>babel-core</h3>
        <div class="components">
          Работает. JS библиотека не зависит от версии nuxt.
        </div>
      </div>

      <div id="babel-jest" class="content -success">
        <h3>babel-jest</h3>
        <div class="components">
          Работает. JS библиотека не зависит от версии nuxt.
        </div>
      </div>

      <div id="connect" class="content -success">
        <h3>connect</h3>
        <div class="components">
          Работает. JS библиотека не зависит от версии nuxt.
          <br/>
          К тому же мы использовали из неё только 1 тип.
        </div>
      </div>

      <div id="eslint" class="content -success">
        <h3>eslint</h3>
        <div class="components">
          Работает. JS библиотека не зависит от версии nuxt.
        </div>
      </div>

      <div id="lint-staged" class="content -success">
        <h3>lint-staged</h3>
        <div class="components">
          Работает. JS библиотека не зависит от версии nuxt.
        </div>
      </div>

      <div id="prettier" class="content -success">
        <h3>prettier</h3>
        <div class="components">
          Работает. JS библиотека не зависит от версии nuxt.
        </div>
      </div>

      <div id="husky" class="content -success">
        <h3>husky</h3>
        <div class="components">
          Работает. JS библиотека не зависит от версии nuxt.
        </div>
      </div>

      <div id="openapi-typescript" class="content -success">
        <h3>openapi-typescript</h3>
        <div class="components">
          Работает. JS библиотека не зависит от версии nuxt.
        </div>
      </div>

      <div id="sass" class="content -success">
        <h3>sass</h3>
        <div class="components">
          Работает. JS библиотека не зависит от версии nuxt.
        </div>
      </div>

      <div id="postcss" class="content -success">
        <h3>postcss</h3>
        <div class="components">
          Работает. JS библиотека не зависит от версии nuxt.
        </div>
      </div>

    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import {faker} from '@faker-js/faker'
import {onMounted} from "@vue/runtime-core";
import VueFeather from 'vue-feather';
import PrimeButton from "primevue/button";
import {
  BLink,
} from "bootstrap-vue-next";
import DefaultLayout from "~/layouts/default.vue";
import {vMaska} from 'maska'
import {useLocalStorage} from "@vueuse/core";

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
  "portal-vue",
  "primeicons",
  "primevue",
  "vue",
  "vue-feather-icons",
  "vue-meta",
  "@faker-js/faker",
  "@nuxtjs/sentry",
  "stylelint",
  "@nuxtjs/stylelint-module",
  "@vue/test-utils",
  "jest",
  "babel-core",
  "babel-jest",
  "connect",
  "eslint",
  "lint-staged",
  "prettier",
  "husky",
  "openapi-typescript",
  "sass",
  "postcss",
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
