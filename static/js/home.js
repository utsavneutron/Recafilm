const searchForm = document.querySelector('#searchForm');


searchForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    document.getElementById("res_box").style.visibility = "visible";
    // //get user info
    let movie = searchForm['movie'].value;
    movie = movie.toLowerCase();
    const url = `https://recafilm-api.herokuapp.com/movie?title=${movie}`;
    console.log(url);

    async function search() {
        const movie = searchForm['movie'].value;

        const url = `https://recafilm-api.herokuapp.com/movie?title=${movie}`;
        console.log(movie);
        try {
        document.getElementById("loading").style.visibility = "visible";
        const res = await fetch(url);
        if(!res.ok) throw new Error("Result not OK");
        const data = await res.json();
        console.log(data);
        document.getElementById("loading").style.visibility = "hidden";
        appendData(data);
        
        // document.getElementById("output").value = JSON.stringify(data, null, 2);
        } catch(err) {
        alert(err);
        }
        
    }

    search();
    function appendData(data) {
        var mainContainer = document.querySelector('#gitTable tbody');
        for (var i = 0; i < 10; i++) {
            var tr = document.createElement("tr");
            tr.innerHTML = rowHtml(data[i]);
            // var td2 = document.createElement("td");
            // td1.innerHTML = data[i].Name.toUpperCase();
            // td2.innerHTML = data[i].Genres;

            mainContainer.appendChild(tr);
        }
    }

    const rowHtml = data => {
        html = ''
        html += `<td>${data.Name.toUpperCase()}</td><td>${data.Genres.replace('[','').replace(/\'/g,'').replace(']','')}</td>`
        return html
      }

});

// async function search() {
//     const movie = searchForm['movie'].value;
//     // if(!movie) return alert("Enter a movie.");
//     const url = `https://recafilm-api.herokuapp.com/movie?title=${movie}`;
//     console.log(movie);
//     try {
//       document.getElementById("output").value = "Fetching...";
//       const res = await fetch(url);
//       if(!res.ok) throw new Error("Result not OK");
//       const data = await res.json();
//       console.log(data);
//       document.getElementById("output").value = JSON.stringify(data, null, 2);
//     } catch(err) {
//       alert(err);
//     }
//   }

// async function search() {
//     const movie = document.getElementById("movie").value;
//     // if(!movie) return alert("Enter a movie.");
//     const url = `https://recafilm-api.herokuapp.com/movie?title=${movie}`;
//     console.log(movie);
//     try {
//       document.getElementById("output").value = "Fetching...";
//       const res = await fetch(url);
//       if(!res.ok) throw new Error("Result not OK");
//       const data = await res.json();
//       document.getElementById("output").value = JSON.stringify(data, null, 2);
//     } catch(err) {
//       alert(err);
//     }
//   }




// var movie = document.getElementById('movie').value;
// let url =  "https://recafilm-api.herokuapp.com/movie?title=";
// let search = document.getElementById('search').addEventListener('click',find());

// async function find() {
//     let results = fetch(url + movie);
//     console.log(results);
// }
