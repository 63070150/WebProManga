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
        if(this.getfav().includes(book)){//??gotta find which book_id in favlist that equal to it then splice it  but idk how to get index from favlist
          alert('getfav includes book')
          let fbookindex = this.getfav().map(item => item.book_id).indexOf(book.book_id)
          this.getfav().splice(fbookindex, 1)
          localStorage.clear()
          localStorage.setItem("favlist", JSON.stringify(this.favlist))
        }else{
          alert('nope')
          this.favlist.push(book)// need
          this.setfav(this.favlist)
        }
      },
      getfav(){
        return JSON.parse(localStorage.getItem('favlist'))//got favlist[obj, obj, obj,...]
      },
      setfav(obj){
        localStorage.setItem("favlist", JSON.stringify(obj))//send to storage got 'favlist[obj, obj, obj,]'
      }
    }
})