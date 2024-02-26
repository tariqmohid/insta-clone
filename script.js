
const likesEl=document.getElementById("likes-el")
const mainEl=document.getElementById("main-el")





const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: ""
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: ""
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: ""
    }
]

const icons = [
    { 
        heart : "images/icon-heart.png",
        comment : "images/icon-comment.png",
        dm: "images/icon-dm.png"
    }
]


function renderPost(){

    let post = ""
for(let i = 0 ; i <posts.length ; i++){
    
    post += `
            <section>

                <div class="container avater-img">
                    <img class="avater-one" src="${posts[i].avatar}" alt="avatar">
                    <h3 class="name">${posts[i].name} <span class="location">${posts[i].location}</span></h3>
                </div>

                <div class="container">

                <img class="profile-pic" src="${posts[i].post}" alt="profile-pic">

                </div>

                <div class="container icons-container">

                <img class="icons" id="heart-el" src="images/icon-heart.png" alt="icon-heart">
                <img class="icons" src="images/icon-comment.png" alt="icon-comment">
                <img class="icons" src="images/icon-dm.png" alt="icon-dm">

                </div>

                <div class="container likes-container">
                    <p class="likes" >${posts[i].likes} likes</p>
                </div>

                <article>

                <div class="container">

                    <p class="comments"><span>${posts[i].username}</span> ${posts[i].comment} </p>

                </div>
                
            </article>

            </section>
              `

    
}

mainEl.innerHTML += post


}
renderPost()

const likesEls = document.querySelectorAll('.likes')
const profileEls = document.querySelectorAll('.profile-pic')


profileEls.forEach((profileEl)=>{

    let counter = 0
    profileEl.addEventListener("click",()=>{
        
        counter++

        likesEls.forEach((likesEl)=>{

            likesEl.innerHTML = counter + " likes"
        
        })
       })
})

    






   



