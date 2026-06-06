let blogs = [];

function addBlog(){

    const title =
    document.getElementById("title").value;

    const content =
    document.getElementById("content").value;

    if(title === "" || content === ""){
        alert("Fill all fields");
        return;
    }

    blogs.push({
        title,
        content,
        comments:[]
    });

    displayBlogs();

    document.getElementById("title").value="";
    document.getElementById("content").value="";
}

function displayBlogs(){

    const blogContainer =
    document.getElementById("blogs");

    blogContainer.innerHTML="";

    blogs.forEach((blog,index)=>{

        let div =
        document.createElement("div");

        div.classList.add("blog");

        div.innerHTML=`
        <h2>${blog.title}</h2>
        <p>${blog.content}</p>

        <input type="text"
        id="comment${index}"
        placeholder="Add comment">

        <button onclick="addComment(${index})">
        Comment
        </button>

        <ul>
        ${
            blog.comments
            .map(c=>`<li>${c}</li>`)
            .join("")
        }
        </ul>
        `;

        blogContainer.appendChild(div);
    });
}

function addComment(index){

    const comment =
    document.getElementById(`comment${index}`).value;

    if(comment==="") return;

    blogs[index].comments.push(comment);

    displayBlogs();
}
