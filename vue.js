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
        if(this.favlist.includes(book)){//??gotta find which book_id in favlist that equal to it then splice it  but idk how to get index from favlist
          let fbookindex = this.favlist.map(item => item.book_id).indexOf(book.book_id)
          this.favlist.splice(fbookindex, 1)
        }else{
          this.favlist.push(books[index])
        }
      }
    }
})