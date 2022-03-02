<template>
   <div
      class="drawer-side"
      style="scroll-behavior: smooth; scroll-padding-top: 5rem"
    >
      <label for="drawer" class="drawer-overlay"></label>
      <aside class="glass w-80">
        <div
          class="z-20 bg-base-200 bg-opacity-90 backdrop-blur sticky top-0 items-center gap-2 px-4 py-2 hidden shadow-sm"
        >
          <a
            href="/"
            aria-current="page"
            aria-label="Homepage"
            class="flex-0 btn btn-ghost px-2"
            ><div
              class="font-title text-primary inline-flex text-lg transition-all duration-200 md:text-3xl"
            >
              <span class="lowercase">daisy</span>
              <span class="text-base-content uppercase">UI</span>
            </div></a
          >
          <a
            href="/docs/changelog"
            class="link link-hover font-mono text-xs text-opacity-50"
            ><div data-tip="Changelog" class="tooltip tooltip-bottom">
              2.2.2
            </div></a
          >
        </div>
        <div
          class="bg-base-200 sticky top-0 z-10 flex w-full bg-opacity-90 py-3 px-2 backdrop-blur lg:hidden shadow-sm"
        >
          <div class="flex w-full lg:hidden">
            <label class="searchbox relative mx-3 w-full"
              ><svg
                class="text-base-content pointer-events-none absolute z-10 my-3 ml-2 stroke-current opacity-60 hidden"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <div
                data-svelte-typeahead=""
                role="combobox"
                aria-haspopup="listbox"
                aria-owns="typeahead-0.gp1n74sxtl9-listbox"
                aria-expanded="false"
                id="typeahead-0.gp1n74sxtl9-typeahead"
                class="svelte-6c74g2"
              >
                <form data-svelte-search="">
                  <label
                    id="typeahead-0.gp1n74sxtl9-label"
                    for="typeahead-0.gp1n74sxtl9"
                    class="svelte-wqugyy"
                  ></label>
                  <input
                    name="search"
                    type="search"
                    placeholder="Search..."
                    autocomplete="off"
                    spellcheck="false"
                    id="typeahead-0.gp1n74sxtl9"
                    aria-autocomplete="list"
                    aria-controls="typeahead-0.gp1n74sxtl9-listbox"
                    aria-labelledby="typeahead-0.gp1n74sxtl9-label"
                    class="svelte-wqugyy"
                  />
                </form>
                <ul
                  role="listbox"
                  aria-labelledby="typeahead-0.gp1n74sxtl9-label"
                  id="typeahead-0.gp1n74sxtl9-listbox"
                  class="svelte-6c74g2 svelte-typeahead-list"
                ></ul>
              </div>
              <div
                class="pointer-events-none absolute right-8 top-2 gap-1 opacity-50 hidden"
              >
                <kbd class="kbd kbd-sm">⌘</kbd> <span>+</span>
                <kbd class="kbd kbd-sm">K</kbd>
              </div></label
            >
          </div>
        </div>
        <div class="h-4"></div>
        <ul class="menu menu-compact flex flex-col p-0 px-4">
          <li>
            <a href="/docs/install" id="" class="flex gap-4 sveltekit:prefetch"
              ><span class="flex-none"
                ><svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
                  ></path></svg
              ></span>
              <span class="flex-1">Install</span>
            </a>
          </li>
          <li>
            <a href="/docs/use" id="" class="flex gap-4 sveltekit:prefetch"
              ><span class="flex-none"
                ><svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path></svg
              ></span>
              <span class="flex-1">Use</span>
            </a>
          </li>
          <li>
            <a
              href="/docs/customize"
              id=""
              class="flex gap-4 sveltekit:prefetch"
              ><span class="flex-none"
                ><svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path></svg
              ></span>
              <span class="flex-1">Customize components</span>
            </a>
          </li>
          <li>
            <a href="/docs/config" id="" class="flex gap-4 sveltekit:prefetch"
              ><span class="flex-none"
                ><svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path></svg
              ></span>
              <span class="flex-1">Config</span>
              <span class="badge badge-sm flex-none lowercase">updated</span></a
            >
          </li>
          <li>
            <a href="/docs/colors" id="" class="flex gap-4 sveltekit:prefetch"
              ><span class="flex-none"
                ><svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="w-6 h-6 fill-current"
                >
                  <path
                    d="M19,11.5C19,11.5 17,13.67 17,15C17,16.1 17.9,17 19,17C20.1,17 21,16.1 21,15C21,13.67 19,11.5 19,11.5M5.21,10L10,5.21L14.79,10M16.56,8.94L7.62,0L6.21,1.41L8.59,3.79L3.44,8.94C2.85,9.5 2.85,10.47 3.44,11.06L8.94,16.56C9.23,16.85 9.62,17 10,17C10.38,17 10.77,16.85 11.06,16.56L16.56,11.06C17.15,10.47 17.15,9.5 16.56,8.94Z"
                  ></path></svg
              ></span>
              <span class="flex-1">Colors</span>
              <span class="badge badge-sm flex-none lowercase">updated</span></a
            >
          </li>
          <li>
            <a href="/docs/themes" id="" class="flex gap-4 sveltekit:prefetch"
              ><span class="flex-none"
                ><svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="w-6 h-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                  ></path></svg
              ></span>
              <span class="flex-1">Themes</span>
              <span class="badge badge-sm flex-none lowercase">updated</span></a
            >
          </li>
          <li>
            <a
              href="/theme-generator"
              id=""
              class="flex gap-4 sveltekit:prefetch"
              ><span class="flex-none"
                ><svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 fill-current"
                  viewBox="0 0 512 512"
                >
                  <title>ionicons-v5-m</title>
                  <path
                    d="M96,208H48a16,16,0,0,1,0-32H96a16,16,0,0,1,0,32Z"
                  ></path>
                  <line x1="90.25" y1="90.25" x2="124.19" y2="124.19"></line>
                  <path
                    d="M124.19,140.19a15.91,15.91,0,0,1-11.31-4.69L78.93,101.56a16,16,0,0,1,22.63-22.63l33.94,33.95a16,16,0,0,1-11.31,27.31Z"
                  ></path>
                  <path
                    d="M192,112a16,16,0,0,1-16-16V48a16,16,0,0,1,32,0V96A16,16,0,0,1,192,112Z"
                  ></path>
                  <line x1="293.89" y1="90.25" x2="259.95" y2="124.19"></line>
                  <path
                    d="M260,140.19a16,16,0,0,1-11.31-27.31l33.94-33.95a16,16,0,0,1,22.63,22.63L271.27,135.5A15.94,15.94,0,0,1,260,140.19Z"
                  ></path>
                  <line x1="124.19" y1="259.95" x2="90.25" y2="293.89"></line>
                  <path
                    d="M90.25,309.89a16,16,0,0,1-11.32-27.31l33.95-33.94a16,16,0,0,1,22.62,22.63l-33.94,33.94A16,16,0,0,1,90.25,309.89Z"
                  ></path>
                  <path
                    d="M219,151.83a26,26,0,0,0-36.77,0l-30.43,30.43a26,26,0,0,0,0,36.77L208.76,276a4,4,0,0,0,5.66,0L276,214.42a4,4,0,0,0,0-5.66Z"
                  ></path>
                  <path
                    d="M472.31,405.11,304.24,237a4,4,0,0,0-5.66,0L237,298.58a4,4,0,0,0,0,5.66L405.12,472.31a26,26,0,0,0,36.76,0l30.43-30.43h0A26,26,0,0,0,472.31,405.11Z"
                  ></path></svg
              ></span>
              <span class="flex-1">Theme Generator</span>
              <span class="badge badge-sm flex-none lowercase">new</span></a
            >
          </li>
          <li>
            <a
              href="/docs/layout-and-typography"
              id=""
              class="flex gap-4 sveltekit:prefetch"
              ><span class="flex-none"
                ><svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="w-6 h-6 fill-current"
                >
                  <path
                    d="M4,2 L20,2 C21.1045695,2 22,2.8954305 22,4 L22,20 C22,21.1045695 21.1045695,22 20,22 L4,22 C2.8954305,22 2,21.1045695 2,20 L2,4 C2,2.8954305 2.8954305,2 4,2 Z M4,4 L4,20 L20,20 L20,4 L4,4 Z M14.7999209,15 L9.19992091,15 L8,18 L6,18 L11,6 L13,6 L18,18 L16,18 L14.7999209,15 Z M13.9998682,13 L11.9997364,8 L9.99986818,13 L13.9998682,13 Z"
                  ></path></svg
              ></span>
              <span class="flex-1">Layout &amp; Typography</span>
            </a>
          </li>
        </ul>
        <ul class="menu menu-compact flex flex-col p-0 px-4">
          <li></li>
          <li class="menu-title"><span>Actions</span></li>
          <li>
            <a
              href="/components/button"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Button</span>
            </a>
          </li>
          <li>
            <a
              href="/components/dropdown"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Dropdown</span>
            </a>
          </li>
          <li>
            <a
              href="/components/modal"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Modal</span>
            </a>
          </li>
          <li>
            <a
              href="/components/swap"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Swap</span>
              <span class="badge badge-sm flex-none lowercase">new</span></a
            >
          </li>
        </ul>
        <ul class="menu menu-compact flex flex-col p-0 px-4">
          <li></li>
          <li class="menu-title"><span>Data display</span></li>
          <li>
            <a
              href="/components/alert"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Alert</span>
            </a>
          </li>
          <li>
            <a
              href="/components/avatar"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Avatar</span>
              <span class="badge badge-sm flex-none lowercase">updated</span></a
            >
          </li>
          <li>
            <a
              href="/components/badge"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Badge</span>
            </a>
          </li>
          <li>
            <a
              href="/components/card"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Card</span>
            </a>
          </li>
          <li>
            <a
              href="/components/carousel"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Carousel</span>
            </a>
          </li>
          <li>
            <a
              href="/components/collapse"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Collapse</span>
            </a>
          </li>
          <li>
            <a
              href="/components/countdown"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Countdown</span>
            </a>
          </li>
          <li>
            <a
              href="/components/kbd"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Kbd</span>
            </a>
          </li>
          <li>
            <a
              href="/components/progress"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Progress</span>
            </a>
          </li>
          <li>
            <a
              href="/components/radial-progress"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Radial progress</span>
              <span class="badge badge-sm flex-none lowercase">new</span></a
            >
          </li>
          <li>
            <a
              href="/components/stat"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Stat</span>
              <span class="badge badge-sm flex-none lowercase">updated</span></a
            >
          </li>
          <li>
            <a
              href="/components/table"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Table</span>
            </a>
          </li>
          <li>
            <a
              href="/components/tooltip"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Tooltip</span>
            </a>
          </li>
        </ul>
        <ul class="menu menu-compact flex flex-col p-0 px-4">
          <li></li>
          <li class="menu-title"><span>Data input</span></li>
          <li>
            <a
              href="/components/checkbox"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Checkbox</span>
            </a>
          </li>
          <li>
            <a
              href="/components/input"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Text input</span>
            </a>
          </li>
          <li>
            <a
              href="/components/radio"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Radio</span>
            </a>
          </li>
          <li>
            <a
              href="/components/range"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Range</span>
              <span class="badge badge-sm flex-none lowercase">updated</span></a
            >
          </li>
          <li>
            <a
              href="/components/rating"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Rating</span>
              <span class="badge badge-sm flex-none lowercase">updated</span></a
            >
          </li>
          <li>
            <a
              href="/components/select"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Select</span>
            </a>
          </li>
          <li>
            <a
              href="/components/textarea"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Textarea</span>
            </a>
          </li>
          <li>
            <a
              href="/components/toggle"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Toggle</span>
            </a>
          </li>
        </ul>
        <ul class="menu menu-compact flex flex-col p-0 px-4">
          <li></li>
          <li class="menu-title"><span>Layout</span></li>
          <li>
            <a
              href="/components/artboard"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Artboard</span>
            </a>
          </li>
          <li>
            <a
              href="/components/button-group"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Button group</span>
            </a>
          </li>
          <li>
            <a
              href="/components/divider"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Divider</span>
              <span class="badge badge-sm flex-none lowercase">updated</span></a
            >
          </li>
          <li>
            <a
              href="/components/drawer"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Drawer</span>
            </a>
          </li>
          <li>
            <a
              href="/components/footer"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Footer</span>
            </a>
          </li>
          <li>
            <a
              href="/components/hero"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Hero</span>
            </a>
          </li>
          <li>
            <a
              href="/components/indicator"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Indicator</span>
            </a>
          </li>
          <li>
            <a
              href="/components/input-group"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Input group</span>
              <span class="badge badge-sm flex-none lowercase">new</span></a
            >
          </li>
          <li>
            <a
              href="/components/mask"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Mask</span>
              <span class="badge badge-sm flex-none lowercase">updated</span></a
            >
          </li>
          <li>
            <a
              href="/components/stack"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Stack</span>
            </a>
          </li>
        </ul>
        <ul class="menu menu-compact flex flex-col p-0 px-4">
          <li></li>
          <li class="menu-title"><span>Navigation</span></li>
          <li>
            <a
              href="/components/breadcrumbs"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Breadcrumbs</span>
            </a>
          </li>
          <li>
            <a
              href="/components/link"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Link</span>
            </a>
          </li>
          <li>
            <a
              href="/components/menu"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Menu</span>
              <span class="badge badge-sm flex-none lowercase">updated</span></a
            >
          </li>
          <li>
            <a
              href="/components/navbar"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Navbar</span>
            </a>
          </li>
          <li>
            <a
              href="/components/pagination"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Pagination</span>
            </a>
          </li>
          <li>
            <a
              href="/components/steps"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Steps</span>
            </a>
          </li>
          <li>
            <a
              href="/components/tab"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Tab</span>
            </a>
          </li>
        </ul>
        <ul class="menu menu-compact flex flex-col p-0 px-4">
          <li></li>
          <li class="menu-title"><span>Mockup</span></li>
          <li>
            <a
              href="/components/mockup-code"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Code</span>
            </a>
          </li>
          <li>
            <a
              href="/components/mockup-phone"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Phone</span>
            </a>
          </li>
          <li>
            <a
              href="/components/mockup-window"
              id=""
              class="flex gap-4 sveltekit:prefetch"
            >
              <span class="flex-1">Window</span>
            </a>
          </li>
        </ul>
        <ul class="menu menu-compact flex flex-col p-0 px-4">
          <li></li>
          <li class="menu-title"><span>excluded</span></li>
        </ul>
        <div
          class="from-base-200 pointer-events-none sticky bottom-0 flex h-20 bg-gradient-to-t to-transparent"
        ></div>
      </aside>
    </div>
</template>

<script></script>

<style></style>
