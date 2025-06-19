var BookmarkNameInput = document.getElementById("BookmarkName");
var WebsiteURLInput = document.getElementById("WebsiteURL");
var tableee = document.getElementById("tableee");
var wrongg = document.getElementById("wrongg");
var anotherbook = JSON.parse(localStorage.getItem("anotherbook")) || [];
add();

function addbook() {
    var http = /^(https|http):\/\/(www\.)?[A-Za-z]{3,}\.(com|net)$/;
    if (!(BookmarkNameInput.value.length >= 3) || !http.test(WebsiteURLInput.value)) {
        BookmarkNameInput.classList.add("is-invalid") 
        WebsiteURLInput.classList.add("is-invalid") 
        return;
    }
 var NewBook = {
   name : BookmarkNameInput.value,
   link : WebsiteURLInput.value,
};
 anotherbook.push(NewBook);

 localStorage.setItem("anotherbook",JSON.stringify(anotherbook));

   clearinput();

   add();
}

function clearinput(){
  BookmarkNameInput.value= "";
  WebsiteURLInput.value= "";
}

function add() {
tableee.innerHTML = "";
   for (var i = 0; i < anotherbook.length; i++) {
   tableee.innerHTML +=
   `
<tr>
  <td scope="row">${i+1}</td>
  <td>${anotherbook[i].name}</td>
  <td><a href=${anotherbook[i].link}><button class="btn btn-success" data-bs-target="" data-bs-toggle=""><i class="fa-solid text-white fa-eye"></i> Visit</button></a></td>
  <td><button onclick="deletebook(${i})" class="btn btn-danger" data-bs-target="" data-bs-toggle=""><i class="fa-solid text-white fa-trash-can"></i> Delete</button></td>
</tr>
   `
   }
}

function deletebook(index) {
    anotherbook.splice(index,1);
    localStorage.setItem("anotherbook",JSON.stringify(anotherbook));
    add();
}

function change() {
    if (BookmarkNameInput.value.length >= 3 ) {
        BookmarkNameInput.classList.remove("is-invalid") & BookmarkNameInput.classList.add("is-valid")
    }else{
       BookmarkNameInput.classList.add("is-invalid") 
    }
}

function change2(){
    var http = /^(https|http):\/\/(www\.)?[A-Za-z]{3,}\.(com)$/;
    if (http.test(WebsiteURLInput.value) ) {
        WebsiteURLInput.classList.remove("is-invalid") & WebsiteURLInput.classList.add("is-valid")
        if (BookmarkNameInput.value.length >= 3) {
        wrongg.removeAttribute("data-bs-target");
        wrongg.removeAttribute("data-bs-toggle");
    }else{
        wrongg.setAttribute("data-bs-target","#exampleModalToggle");
        wrongg.setAttribute("data-bs-toggle","modal");
    }
    }else{
        WebsiteURLInput.classList.add("is-invalid") 
    }
}

