const good = document.querySelectorAll(".good");
const trash = document.getElementsByClassName("fa-trash");

Array.from(good).forEach(function(element) {
      element.addEventListener('click', function(){
        const good = this.parentNode.childNodes[9].innerText
        fetch('messages', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'good': good
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const title = this.parentNode.parentNode.childNodes[3].innerText
        const date = this.parentNode.parentNode.childNodes[5].innerText
        const msg = this.parentNode.parentNode.childNodes[7].innerText
        const good = this.parentNode.parentNode.childNodes[9].innerText
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'title': title,
            'date': date,
            'msg': msg,
            'good': good
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
