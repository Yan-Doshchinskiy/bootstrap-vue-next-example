<template>
  <DefaultLayout>
    <div class="home-page">
      <div id="hero" class="content">
        <h2 class="title">Компоненты из Nuxt проекта</h2>
        <ul class="list">
          <li v-for="title in targetComponents">
            <BLink :href="`#${title}`">
              {{ title }}
            </BLink>
          </li>
        </ul>
      </div>

      <div id="BAlert" class="content">
        <h3>BAlert</h3>
        <div class="components">
          <BAlert :model-value="true">Default Alert</BAlert>

          <BAlert variant="success" :model-value="true">Success Alert</BAlert>
          <BAlert variant="danger" :model-value="true">Error Alert</BAlert>
        </div>
      </div>

      <div id="BBreadcrumb" class="content">
        <h3>BBreadcrumb</h3>
        <div class="components">

          <BBreadcrumb :items="['Home', 'Foo', 'Bar', 'Baz']"/>

          <BBreadcrumb>
            <BBreadcrumbItem href="#home"> Home</BBreadcrumbItem>
            <BBreadcrumbItem href="#foo">Foo</BBreadcrumbItem>
            <BBreadcrumbItem href="#bar">Bar</BBreadcrumbItem>
            <BBreadcrumbItem active>Baz</BBreadcrumbItem>
          </BBreadcrumb>
        </div>
      </div>

      <div id="BButton" class="content">
        <h3>BButton</h3>
        <div class="components">

          <BButton>Button Default</BButton>
          <BButton variant="danger">Button Danger</BButton>
          <BButton variant="success">Button Success</BButton>
          <BButton variant="primary">Button Primary</BButton>
          <BButton variant="outline-primary">Button Outline-primary</BButton>
        </div>
      </div>

      <div id="BCard" class="content">
        <h3>BCard</h3>
        <div class="components">
          <BCard
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem;"
          >
            <BCardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </BCardText>

            <BButton href="/#hero" variant="primary">Go to hero</BButton>
          </BCard>
        </div>
      </div>

      <div id="BContainer" class="content">
        <h3>BContainer</h3>
        <div class="components">
          <BContainer>
            <BRow>
              <BCol>1 of 2</BCol>
              <BCol>2 of 2</BCol>
            </BRow>

            <BRow>
              <BCol>1 of 3</BCol>
              <BCol>2 of 3</BCol>
              <BCol>3 of 3</BCol>
            </BRow>
          </BContainer>
        </div>
      </div>

      <div id="BDropdown" class="content">
        <h3>BDropdown</h3>
        <div class="components">
          <BDropdown v-model="dropdownShown" text="Dropdown Button">
            <BDropdownItem>First Action</BDropdownItem>
            <BDropdownItem>Second Action</BDropdownItem>
            <BDropdownItem>Third Action</BDropdownItem>
            <BDropdownDivider/>
            <BDropdownText active>BDropdownText</BDropdownText>
            <BDropdownItem disabled>Disabled action</BDropdownItem>
            <BDropdownItemButton>BDropdownItemButton</BDropdownItemButton>
          </BDropdown>
        </div>
      </div>

      <div id="BFormGroup" class="content">
        <h3>BFormGroup [ПРОБЛЕМА с default value]</h3>
        <div class="components">
          <BForm>
            <BFormGroup
                id="fieldset-1"
                description="Let us know your name."
                label="Enter your name"
                label-for="input-1"
                valid-feedback="Thank you!"
                :invalid-feedback="invalidFormFeedback"
                :state="isValidForm"
                label-class="mb-1"
            >

              <BFormInput id="input-1" v-model="nameInput" :state="isValidForm" trim/>
              <BFormRadio
                  v-for="radio in radioOptions"
                  v-model="radioInputs"
                  name="radio"
                  :value="radio.value"
                  :disabled="Boolean(radio.disabled)"
              >
                {{ radio.text }}
              </BFormRadio>
              <br/>
              <BFormRadioGroup
                  v-model="radioOptions"
                  :options="radioOptions"
                  button-variant="outline-primary"
                  size="lg"
                  name="radios-btn-outline"
                  buttons
              />
              {{ radioInputs }}

            </BFormGroup>
          </BForm>
        </div>
      </div>

      <div id="BLink" class="content">
        <h3>BLink</h3>
        <div class="components">
          <BLink href="https://getbootstrap.com/docs/5.3">
            External Link to Bootstrap
          </BLink>

          <BLink to="sample">
            To page sample
          </BLink>

          <BLink href="#BLink">
            Jump to Properties
          </BLink>
        </div>
      </div>

      <div id="BModal" class="content">
        <h3>BModal</h3>
        <div class="components">
          <BButton @click="isFirstModalShown = !isFirstModalShown">Open First Modal</BButton>

          <BModal v-model="isFirstModalShown" size="lg" title="First Modal" ok-only no-stacking>
            <p class="my-2">First Modal</p>
            <BButton @click="isSecondModalShown = !isSecondModalShown">Open Second Modal</BButton>
          </BModal>

          <BModal v-model="isSecondModalShown" title="Second Modal" ok-only>
            <p class="my-2">Second Modal</p>
            <BButton @click="isThirdModalShown = !isThirdModalShown" size="sm">Open Third Modal</BButton>
          </BModal>

          <BModal v-model="isThirdModalShown" size="sm" title="Third Modal" ok-only>
            <p class="my-1">Third Modal</p>
          </BModal>
        </div>
      </div>

      <div id="BNav" class="content">
        <h3>BNav</h3>
        <div class="components">
          <BNav pills>
            <BNavItem active>Active</BNavItem>
            <BNavItem>Link</BNavItem>
            <BNavText>Text</BNavText>
            <BNavItemDropdown
                v-model="dropdownShow"
                id="my-nav-dropdown"
                text="Dropdown"
                toggle-class="nav-link-custom"
                end
            >
              <BDropdownItem>One</BDropdownItem>
              <BDropdownItem>Two</BDropdownItem>
              <BDropdownDivider/>
              <BDropdownItem>Three</BDropdownItem>
            </BNavItemDropdown>
          </BNav>
        </div>
      </div>

      <div id="BNavbar" class="content">
        <h3>BNavbar</h3>
        <div class="components">
          <BNavbar toggleable="lg" variant="info">
            <BNavbarBrand href="#">NavBar</BNavbarBrand>
            <BNavbarToggle target="nav-collapse"/>
            <BCollapse id="nav-collapse" is-nav>
              <BNavbarNav>
                <BNavItem href="#">Link</BNavItem>
                <BNavItem href="#" disabled>Disabled</BNavItem>
              </BNavbarNav>
              <!-- Right aligned nav items -->
              <BNavbarNav class="me-auto mb-2 mb-lg-0">
                <BNavItemDropdown text="Lang" right>
                  <BDropdownItem href="#">EN</BDropdownItem>
                  <BDropdownItem href="#">ES</BDropdownItem>
                  <BDropdownItem href="#">RU</BDropdownItem>
                  <BDropdownItem href="#">FA</BDropdownItem>
                </BNavItemDropdown>
                <BNavItemDropdown right>
                  <!-- Using 'button-content' slot -->
                  <template #button-content>
                    <em>User</em>
                  </template>
                  <BDropdownItem href="#">Profile</BDropdownItem>
                  <BDropdownItem href="#">Sign Out</BDropdownItem>
                </BNavItemDropdown>
              </BNavbarNav>
              <BNavForm class="d-flex">
                <BFormInput class="me-2" placeholder="Search"/>
                <BButton type="submit" variant="outline-success">Search</BButton>
              </BNavForm>
            </BCollapse>
          </BNavbar>
        </div>
      </div>

      <div id="BOverlay" class="content">
        <h3>BOverlay</h3>
        <div class="components">
          <BOverlay :show="showOverlayEx1" rounded="sm">
            <BCard title="Card with overlay" :aria-hidden="showOverlayEx1 ? 'true' : null">
              <BCardText>Laborum consequat non elit enim exercitation cillum.</BCardText>
              <BCardText>Click the button to toggle the overlay:</BCardText>
              <BButton :disabled="showOverlayEx1" variant="primary" @click="showOverlayEx1 = true">
                Show overlay
              </BButton>
            </BCard>
          </BOverlay>
        </div>
      </div>

      <div id="BPopover" class="content">
        <h3>BPopover</h3>
        <div class="components">
          <div ref="popoverTarget">
            Hover me
          </div>
          <BPopover :target="popoverTarget">
            Popover text
          </BPopover>
        </div>
      </div>

      <div id="BSpinner" class="content">
        <h3>BSpinner</h3>
        <div class="components">
          <BSpinner variant="primary"/>
          <BSpinner variant="secondary"/>
          <BSpinner variant="success"/>
          <BSpinner variant="danger"/>
          <BSpinner variant="warning"/>
          <BSpinner variant="info"/>
          <BSpinner variant="light"/>
          <BSpinner variant="dark"/>
        </div>
      </div>

      <div id="BToast" class="content">
        <h3>BToast</h3>
        <div class="components">
          <BToast variant="info" :model-value="true" title="Toast title">Toast text</BToast>
        </div>
      </div>

      <div id="BTooltip" class="content">
        <h3>BTooltip</h3>
        <div class="components">
          <div ref="tooltipTarget">
            Hover me
          </div>
          <BTooltip :target="tooltipTarget">
            Default Tooltip text
          </BTooltip>
          <BTooltip placement="bottom" :target="tooltipTarget">
            Bottom Tooltip text
          </BTooltip>
          <BTooltip placement="left" :target="tooltipTarget">
            Left Tooltip text
          </BTooltip>
          <BTooltip placement="right" :target="tooltipTarget">
            Right Tooltip text
          </BTooltip>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import DefaultLayout from "~/layouts/default.vue";
import {
  BAlert,
  BBreadcrumb,
  BBreadcrumbItem,
  BButton,
  BCard,
  BContainer,
  BCol,
  BRow,
  BDropdown,
  BDropdownDivider,
  BDropdownItem,
  BDropdownItemButton,
  BDropdownText,
  // BEmbed,
  BForm,
  BFormGroup,
  BFormInput,
  BFormRadio,
  BFormRadioGroup,
  BLink,
  BModal,
  BNav,
  BNavText,
  BNavItem,
  BNavbar,
  BNavbarNav,
  BNavbarBrand,
  BOverlay,
  BPopover,
  BSpinner,
  BToast,
  BTooltip,
} from "bootstrap-vue-next";

interface RadioOption {
  text: string,
  value: string,
  disabled?: boolean
}

const dropdownShown = ref(false)

const nameInput = ref('')
const radioInputs = ref('radio1')
const radioOptions: Array<RadioOption> = [
  {text: 'Radio 1', value: 'radio1'},
  {text: 'Radio 2', value: 'radio2'},
  {text: 'Radio 3 (disabled)', value: 'radio3', disabled: true},
  {text: 'Radio 4', value: 'radio4'},
]

const isValidForm = computed(() => nameInput.value.length >= 4 && !!radioInputs.value)
const invalidFormFeedback = computed(() =>
    nameInput.value.length > 0 ? 'Enter at least 4 characters.' : 'Please enter something.'
)

const isFirstModalShown = ref(false)
const isSecondModalShown = ref(false)
const isThirdModalShown = ref(false)

const dropdownShow = ref(false)

const showOverlayEx1 = ref(false)

const popoverTarget = ref(null)
const tooltipTarget = ref(null)

const targetComponents = [
  'BAlert',
  'BBreadcrumb',
  'BButton',
  'BCard',
  'BContainer',
  'BDropdown',
  'BEmbed',
  'BFormGroup',
  'BLink',
  'BModal',
  'BNav',
  'BNavbarNav',
  'BOverlay',
  'BPopover',
  'BSpinner',
  'BToast',
  'BTooltip',
]

</script>

<style lang="scss" scoped>

.home-page {
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
