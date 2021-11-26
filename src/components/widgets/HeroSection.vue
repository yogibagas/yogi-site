<template>
  <div
    class="
      background
      section-wrapper
      bg-gradient-to-t
      from-white
      to-gray-100
      text-black
      py-24
    "
  >
    <div class="flex max-w-screen-xl items-center mx-auto w-full">
      <div class="text w-1/2">
        <transition name="fade" appear>
          <div>
            <h1
              class=" font-josefin
                text-8xl
                opacity-50
                text-black-400 text-stroke
                font-bold
                uppercase
                heading
              "
            >
              Hi Folk's.
            </h1>
          </div>
        </transition>
        <h2 class="text-5xl font-josefin relative">
          Kenalin, nama saya <span class="text-red-800">Yogi Bagas.</span>
          <small class="text-sm">(anjay pake saya, formal banget dahhhh)</small>
        </h2>
        <p class="max-w-xl mt-4 text-justify">
          Saya adalah pegawai swasta disalah satu perusahaan digital marketing
          di bali, saya berposisi sebagai
          <span class="has-tooltip"
            >tukang ketik.
            <span class="tooltip -mt-4 py-2 px-4 rounded bg-white shadow-md"
              >(?) Tukang ketik kode lebih tepatnya :p</span
            >
          </span>
          Namun pada jobdesk saya lebih sering menggunakan
          <span class="has-tooltip"
            >Wordpress,
            <span class="tooltip -mt-4 py-2 px-4 rounded bg-white shadow-md"
              >(?) Tools CMS Website yang bisa bikin kamu lebih cepet buat
              website gitu.</span
            >
          </span>
          dan builder favorit saya saat ini adalah
          <span class="has-tooltip"
            >Elementor.
            <span
              class="
                tooltip
                -mt-4
                py-2
                px-4
                rounded
                bg-white
                shadow-md
                max-w-xl
              "
              >(?) Elementor adalah salah satu Builder yang ada di CMS Wordpress
              yang dimana builder ini membantu dalam pengembangan website di
              wordpress menjadi dengan lebih efisien baik dari segi waktu
              ataupun design.
            </span>
          </span>
          Nah diwebsite ini nantinya akan jadi tempat saya untuk update
          portfolio, dan juga berbagi sedikit tulisan dari kisah saya.
        </p>
        <div class="interest flex flex-col mt-2 space-y-2">
          <div class="title">
            <span class="text-gray-500">#AbleToWorkWith</span>
          </div>
          <div class="stack flex space-x-4">
            <div class="flex-item" v-for="stack in stacks" :key="stack.label">
              <div v-html="stack.icon"></div>
            </div>
          </div>
          <div class="flex cta">
            <a
              href="https://wa.me/6287757331600" target="_blank"
              class="
                collaborate
                px-4
                mt-4
                text-2xl
                border-animate border-effect
                relative
                py-4
                border
                hover:px-4
                border-gray-400
                transition duration-1000
                hover:border-transparent
                uppercase
              "
            >
              <span class="leading-3"
                >Mau coba kolaborasi?
                <small class="text-sm block normal-case"
                  >yuk ngobrol dulu 🤗
                </small></span
              >
            </a>
          </div>
        </div>
      </div>
      <div class="images-section w-1/2 flex items-center">
        <!-- <div class="bg-black flex flex-col w-72 h-96 absolute right-22"></div> -->
        <img
          src="./../../assets/yogi-bagas.jpg"
          alt="Profile"
          srcset=""
          class="flex flex-col object-cover w-96 transform rotate-6 mx-auto"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {  },
  setup () {
    return {
      stacks: [
        {
          label: "VueJS",
          icon: `<svg
                width="25px"
                height="25px"
                enable-background="new 0 0 2500 2165.1"
                viewBox="0 0 2500 2165.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m1538.7 0-288.7 500-288.7-500h-961.3l1250 2165.1 1250-2165.1z"
                  fill="#4dba87"
                />
                <path
                  d="m1538.7 0-288.7 500-288.7-500h-461.3l750 1299 750-1299z"
                  fill="#435466"
                />
              </svg>`,
        },
        {
          label: "Laravel",
          icon: `<svg
                width="25px"
                height="25px"
                viewBox="0 -.11376601 49.74245785 51.31690859"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1 -.402.694l-9.209 5.302v10.509c0 .286-.152.55-.4.694l-19.223 11.066c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1 -.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054l-19.219-11.066a.801.801 0 0 1 -.402-.694v-32.916c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216zm-36.84-31.068v31.068l17.618 10.143v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-21.483l-4.645-2.676-3.363-1.934zm8.81-5.994-8.007 4.609 8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764 4.645-2.674v-20.096l-3.363 1.936-4.646 2.675v20.096zm24.667-23.325-8.006 4.609 8.006 4.609 8.005-4.61zm-.801 10.605-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937zm-18.422 20.561 11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833z"
                  fill="#ff2d20"
                />
              </svg>`,
        },
        {
          label: "Wordpress",
          icon: `<svg
                width="25"
                height="25"
                viewBox="0 0 256 255"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMinYMin meet"
              >
                <path
                  d="M18.124 127.5c0 43.296 25.16 80.711 61.646 98.442L27.594 82.986a108.965 108.965 0 0 0-9.47 44.514zm183.221-5.52c0-13.517-4.856-22.879-9.02-30.165-5.545-9.01-10.742-16.64-10.742-25.65 0-10.055 7.626-19.415 18.368-19.415.485 0 .944.06 1.417.088-19.46-17.829-45.387-28.714-73.863-28.714-38.213 0-71.832 19.606-91.39 49.302 2.566.077 4.984.13 7.039.13 11.44 0 29.15-1.387 29.15-1.387 5.897-.348 6.592 8.312.702 9.01 0 0-5.926.697-12.52 1.042L100.32 194.7l23.937-71.79-17.042-46.692c-5.89-.345-11.47-1.042-11.47-1.042-5.894-.346-5.203-9.358.691-9.01 0 0 18.064 1.388 28.811 1.388 11.44 0 29.151-1.388 29.151-1.388 5.9-.348 6.594 8.312.702 9.01 0 0-5.938.697-12.52 1.042l39.529 117.581 10.91-36.458c4.728-15.129 8.327-25.995 8.327-35.36zm-71.921 15.088l-32.818 95.363a109.376 109.376 0 0 0 30.899 4.456c12.737 0 24.952-2.202 36.323-6.2a9.605 9.605 0 0 1-.779-1.507l-33.625-92.112zm94.058-62.045c.47 3.484.737 7.224.737 11.247 0 11.1-2.073 23.577-8.317 39.178l-33.411 96.6c32.518-18.963 54.39-54.193 54.39-94.545.002-19.017-4.856-36.9-13.4-52.48zM127.505 0C57.2 0 0 57.196 0 127.5c0 70.313 57.2 127.507 127.505 127.507 70.302 0 127.51-57.194 127.51-127.507C255.014 57.196 197.808 0 127.506 0zm0 249.163c-67.08 0-121.659-54.578-121.659-121.663 0-67.08 54.576-121.654 121.659-121.654 67.078 0 121.652 54.574 121.652 121.654 0 67.085-54.574 121.663-121.652 121.663z"
                  fill="#464342"
                />
              </svg>`,
        },
        {
          label: "Tailwind CSS",
          icon: `<svg
                height="25"
                viewBox=".15 .13 799.7 479.69"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m400 .13c-106.63 0-173.27 53.3-199.93 159.89 39.99-53.3 86.64-73.28 139.95-59.96 30.42 7.6 52.16 29.67 76.23 54.09 39.2 39.78 84.57 85.82 183.68 85.82 106.62 0 173.27-53.3 199.92-159.9-39.98 53.3-86.63 73.29-139.95 59.97-30.41-7.6-52.15-29.67-76.22-54.09-39.2-39.78-84.58-85.82-183.68-85.82zm-199.93 239.84c-106.62 0-173.27 53.3-199.92 159.9 39.98-53.3 86.63-73.29 139.95-59.96 30.41 7.61 52.15 29.67 76.22 54.08 39.2 39.78 84.58 85.83 183.68 85.83 106.63 0 173.27-53.3 199.93-159.9-39.99 53.3-86.64 73.29-139.95 59.96-30.42-7.59-52.16-29.67-76.23-54.08-39.2-39.78-84.57-85.83-183.68-85.83z"
                  fill="#06b6d4"
                />
              </svg>`,
        },
      ],
    }
  }
  
};
</script>
<style scoped>
.fade-enter-from {
  transform: translateY(100%);
}
.fade-enter-to {
  transform: translateY(0);
}
.fade-enter-active {
  transition: all 2s ease;
}
</style>
