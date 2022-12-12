<template>

    {{onMounted()}}

    {{JSON.stringify(userStore.utilisateurs)}}

    <div class="container">

        <article v-if="connecte" style="border: solid; margin-bottom: 15px; width: 1000px;">

            <h2>Quoi de neuf ?</h2>

            <form @submit.prevent="newPost">
                <div class="mb-3">
                    <input type="text-area" class="form-control" id="nouveauPost" v-model="nouveauPost" 
                    placeholder="laissez un nouveau post">
                </div>
                <div class="mb-3">
                    <input type="text" @focus="show = false" class="form-control" id="urlImgProfil" v-model="urlImgProfil"
                    placeholder="https://source.unsplash.com/random/1000x300">
                </div>
                <div class="mb-3">
                    <input type="submit" class="btn btn-success" value="Ajouter un nouveau post">
                </div>
                <div class="alert alert-danger" v-if="show">
                    <div v-for="message in messages">{{ message }}</div>
                </div>
            </form>

        </article>

        <article v-for="post , index in articles" :key="index" 
        style="border:solid; margin-bottom: 15px; width: 1000px;">

            <div class="d-flex" style="background-color:thistle">

                <h2 style="margin-left:5px;">{{ post.pseudo }}</h2>
                <img :src="users[getUserIDByName(users, post.pseudo)].urlImgProfil" alt="" 
                class="rounded-circle" style="margin-left: 1%; width: 40px; height: 40px;">

                <p style= "margin-left:50px; margin-top:5px;" >Posté le {{getDateByTimestamp(post.date)}} à {{getTimeByTimestamp(post.date)}}</p>

            </div>

            <img :src="post.urlImgArticle" alt="" class="img-fluid">
            <p style="margin-left:5px; text-align:justify">{{ post.contenu }}</p>

            <div class="d-flex" style="background-color:lightgray">

                <button style="margin-left:5px; text-align:center" @click="like(post.id)"><img style="margin-right: 5px;" 
                    src="./../../heart.png" />Like</button>

                <span style="margin-left: 10px; margin-top: 3px; text-align: center;  border-radius: 20px; background-color:lightblue; color:black ;
                 width: 30px; height: 30px;">{{post.like}}</span>

                <button style="margin-left: 30px;"><img style="margin-right: 5px;" 
                    src="./../../comment.png" />Commenter</button>

                <span style="margin-left: 10px; margin-top: 3px; text-align: center;  border-radius: 20px; background-color:lightgreen; color:black ;
                 width: 30px; height: 30px;">{{post.commentaires.length}}</span>
            
            </div>

            <div v-if="post.commentaires.length > 0" style="background-color:thistle">

                <p style="margin-left:5px;">Commentaires :</p>

                <article v-for="comm, index in post.commentaires" :key="index">
                    <div style="display: flex;">
                        <h2 style="margin-left:5px;">{{comm.pseudo}}</h2>
                        <p style="margin-left:50px; margin-top:5px;">Posté le {{getDateByTimestamp(comm.dt)}} à {{getTimeByTimestamp(comm.dt)}}</p>
                    </div>
                    <p style="margin-left:5px;">{{comm.contenu}}</p>
                </article>

            </div>

            <div v-if="connecte">
                <p>Ajouter un commentaire :</p>

                <form @submit.prevent="newComm">
                    <div class="d-flex">
                        <div class="mb-3">
                            <input type="text-area" placeholder="Laissez un commentaire..." class="form-control w-80 me-2">
                        </div>
                        <div class="mb-3">
                            <input type="submit" class="btn btn-outline-dark" value="Publier">
                        </div>
                    </div>
                </form>
            </div>
            
        </article>
    </div>
</template>

<script setup>
    import PostApi from '../../services/post';
    import {UserApi} from '../../services/user';
  //  import { RouterLink } from "vue-router";
    import { ref } from "vue" ;
    import {useUserStore} from "../../stores/userStore"
    import { onMounted } from "vue"

    import {useRouter} from "vue-router"

    let router = useRouter()

    let articles = ref([]);
    let users = ref([]);
    let connecte = ref(false) ;

    const userStore = useUserStore() ;
 
    onMounted( () => {
        if(userStore.utilisateurs.email != null) {
            connecte.value = true
        }
    })

    async function like (id) {

        const api = new PostApi()
        const data = await api.getOne(id)

        const newArticle = data ;

        newArticle.like += 1 ;

        console.log(newArticle)

        try{
            const options = {
                method : "PUT",
                body: JSON.stringify(
                    {
                        id : newArticle.id,
                        contenu : newArticle.contenu,
                        urlImgArticle : newArticle.urlImgArticle,
                        like : newArticle.like,
                        pseudo : newArticle.pseudo,
                        date : newArticle.date,
                        commentaires : newArticle.commentaires
                    }
                ),
                headers : {
                    "content-type" : "application/json"
                }
            }

            const reponse = await fetch("http://localhost:3004/articles/"+id, options)
            const data = await reponse.json();
            
            return data ;

        }catch(ex){
            console.log(ex)
        }
        
    }
    
    // async function newPost (){

        

    // }

    // async function newComm (){

        

    // }

    async function getArticles(){
        const api = new PostApi()
        const data = await api.getAll()
        articles.value = data ;
    }
    await getArticles();

    async function getUsers(){
        const api = new UserApi()
        const data = await api.getAll()
        users.value = data ;
    }
    await getUsers();

    function getUserIDByName(users, name) {
        for (let i  = 0; i < users.length; i++) {
            if (name === users[i].pseudo) {
                return i ;
            }
        }
    }

    function getDateByTimestamp(timestamp) {
        let date = new Date(timestamp*1000);
        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    }

    function getTimeByTimestamp(timestamp) {
        let time = new Date(timestamp*1000);
        return time.getHours() + "h" + time.getMinutes() ;
    }

</script>