app.component('photo-item', {
  props:{
    img: {
        type: Array,
        require: true
    },
    notfound: {
      type:Boolean
    }
},
    template:
        /*html*/
        `
        <table class="table-auto  text-2xl  border-collapse  p-10 relative right-60" >
        <thead>
          <tr class="h-14 ">
          <th class="px-24 border border-gray-400" style="border-width: 8px" v-for="h in head"><p class="w-32">{{h}}</p></th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="notfound" >
            <td colspan="4" class="py-14"><p class="text-center text-5xl font-black ">Not Found!</p></td>
          </tr>
          <tr v-else="notfound" v-for="(image,index) in img" >
            <photo-view v-if="image.zoom"></photo-view>
            <td v-else class="py-10">
              <img :src="image.src" class=" h-60 w-auto cursor-pointer hover:opacity-50 transition delay-75 mx-auto"
                @click="addFav(index)" @mouseover="preFav(index)" @mouseleave="addFav(index)"
                @dblclick="zoom(index);unzoom(index)" >
            </td>
            <photo-view v-if="image.zoom"></photo-view>
            <td v-else>
              <h3 class="px-10 text-center">{{image.name}}</h3>
            </td>
            <photo-view v-if="image.zoom" :images="image" ></photo-view>  
            <td v-else>
              <h3 class="px-20 text-center">{{image.rate}}</h3>
            </td>
            <photo-view v-if="image.zoom"></photo-view>
            <td v-else><svg v-show="image.fav" :xmlns="svg" class="mx-auto fill-current text-red-600" width="40"
                height="40" viewBox="0 0 24 24">
                <path d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z" /></svg>
            </td>
          </tr>
  
        </tbody>
      </table>
    `,
    data(){
      return {
        head:["Card","Name","Win Rate","Favorite"]
      }
    },
    methods: {
        addFav(index) {
            this.$emit('add-Fav',index)
            document.getElementsByTagName("svg")[index+1].style.opacity = 1;
        },
        preFav(index) {
          this.$emit('pre-Fav',index)
            document.getElementsByTagName("svg")[index+1].style.opacity = 0.5;
        },
        zoom(index) {
          this.$emit('zoom',index)
        },
        unzoom(index) {
          this.$emit('unzoom',index)
        }
}})
