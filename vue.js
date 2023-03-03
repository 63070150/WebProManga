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
        getfavlist: [],
        notnull: false,
        isActive: false,
    },
    methods: {
      addfav(index){
        let book = this.books[index]// get that book   corrected
        if(this.favlist.includes(book)){
          let getfav = JSON.parse(localStorage.getItem('favlist'))//get favorite list
          let fbookindex = getfav.map(item => item.book_id).indexOf(book.book_id)//check list in localstorage
          this.favlist.splice(fbookindex, 1)//splice both favlist and getfav
          localStorage.clear()
          localStorage.setItem("favlist", JSON.stringify(this.favlist))
        }
        else{
          this.favlist.push(book);localStorage.setItem("favlist", JSON.stringify(this.favlist))//correct
        }
      },
      funcgetfav(){
        return JSON.parse(localStorage.getItem('favlist'));//got favlist[obj, obj, obj,...]
      },
      delbook(index){
        //del localfav
        let book = this.books[index]
        this.getfav()
        let fbookindex = this.getfavlist.map(item => item.book_id).indexOf(book.book_id)
        this.favlist.splice(fbookindex,1)
        localStorage.setItem('favlist', JSON.stringify(this.favlist))
        //del localbook
        this.books.splice(index, 1)
        localStorage.setItem("booklist", JSON.stringify(this.books))
      },
      getfav(){
        this.getfavlist = JSON.parse(localStorage.getItem('favlist'))
      }
      // setfav(obj){
      //   localStorage.setItem("favlist", JSON.stringify(obj));//send to storage got 'favlist[obj, obj, obj,]'
      // }
    }
})