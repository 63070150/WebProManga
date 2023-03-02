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
      // setfav(obj){
      //   localStorage.setItem("favlist", JSON.stringify(obj));//send to storage got 'favlist[obj, obj, obj,]'
      // }
    }
})