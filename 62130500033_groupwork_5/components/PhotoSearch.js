app.component('photo-search', {
    template:
        /*html*/
        `
    <button @click="showbar" v-show="!bar">
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
        viewBox="0 0 24 24" class="fill-current hover:text-red-600">
        <path
          d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z" />
      </svg></button>
    <div v-show="bar">
      <input v-model="myinput" @keyup.enter="enter()"
        class=" px-4 w-5/6 h-14 placeholder-gray-500 placeholder-opacity-50  text-black text-2xl rounded-l-lg border-4 border-red-400 inline"
        type="text" placeholder="Please enter text for searching photos">
      <button @click="showbar();cancel()" class="ml-2 px-2 bg-blue-500 rounded-r-lg h-14 w-24 inline relative  text-2xl hover:bg-blue-300">Cancel</button>
    </div>
    `,
    data() {
        return {
            bar: false
        }
    },
    methods: {
        enter() {
            let enter=this.myinput
            this.$emit('enter',enter)
        },
        showbar() {
            this.bar = !this.bar;

        },
        cancel(){
            this.$emit('cancel')
        }
    }
})