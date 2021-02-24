app.component('photo-view', {
    props: {
        images: {},
        show: {}

    },
    template:
        /*html*/
        `
          <td  v-if="show" class="bg-black h-64">
          <img :src="images.src" class=" h-96 w-64 right-40 relative py-10"/>
          <button class="relative bottom-36 left-10 float-right" @click="images.zoom=false">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class=" fill-current text-white ">
                <path
                  d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 16.094l-4.157-4.104 4.1-4.141-1.849-1.849-4.105 4.159-4.156-4.102-1.833 1.834 4.161 4.12-4.104 4.157 1.834 1.832 4.118-4.159 4.143 4.102 1.848-1.849z" />
                </svg>
          </button>
          </td>
          <td  v-else class="bg-black h-64 px-24"></td>

      `
})

app.component('test', {
    props: {
        images: {},
        show: {}

    },
    template:
        /*html*/
        `
        <th class="px-24 border border-gray-400" style="border-width: 8px"><p>Card</p></th>
        <th  class=" border border-gray-400" style="border-width: 8px"><p class="px-20">Name</p></th>
        <th  class=" border border-gray-400 px-10" style="border-width: 8px"><p class="w-32">Win Rates</p></th>
        <th class=" border border-gray-400" style="border-width: 8px"><p class="px-20">Favorite</p></th>

      `
})