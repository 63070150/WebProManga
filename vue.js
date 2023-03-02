var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        logs: [],
        prename: '',
        fname: '',
        lname: '',
        score: '',
        books: books,
        favlist: [],
    },
    methods: {
      addfav(index){
        let book = this.books[index]//corrected
        let getfav = JSON.parse(localStorage.getItem('favlist'))
        //if(getfav.includes(book)){
          //??gotta find which book_id in favlist that equal to it then splice it  but idk how to get index from favlist
        if(false){
          let fbookindex = getfav.map(item => item.book_id).indexOf(book.book_id)
          getfav.splice(fbookindex, 1)
          localStorage.clear()
          localStorage.setItem("favlist", JSON.stringify(getfav))
        }else{
          this.favlist.push(book)// need   correct
          localStorage.setItem("favlist", JSON.stringify(this.favlist))//correct
          console.log(getfav);
        }
      },
      // getfav(){
      //   return JSON.parse(localStorage.getItem('favlist'));//got favlist[obj, obj, obj,...]
      // },
      // setfav(obj){
      //   localStorage.setItem("favlist", JSON.stringify(obj));//send to storage got 'favlist[obj, obj, obj,]'
      // }
    }
})