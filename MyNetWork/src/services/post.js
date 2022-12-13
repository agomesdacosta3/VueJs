export default class PostApi{

    url = "http://localhost:3004/articles/"

    static _instance ;

    static getInstance(){
        if(_instance === null){
            PostApi._instance = new getPostApi()
        }
        return PostApi._instance ; 
    }

    async getAll(){
        try{
            const reponse = await fetch(this.url+"?sort=date:desc");
            const data = await reponse.json()
            return data
        }catch(ex){
            console.log(ex)
        }
    }

    async create(post){

        try{
            const options = {
                method : "POST",
                body : JSON.stringify(post),
                headers : {
                    "content-type" : "application/json"
                }
            }
           const reponse = await fetch(this.url, options)
           const data = await reponse.json();
           return data ;
        }catch(ex){
            console.log(ex)
        }
    }

    async getOne(id){
        try{
            const reponse = await fetch(`${this.url}/${id}`);
            const data = await reponse.json()
            return data
        }catch(ex){
            console.log(ex)
        }
    }

    async createComm(id,comm){
         
        try{
            const options = {
                method : "PUT",
                body : JSON.stringify(comm),
                headers : {
                    "content-type" : "application/json"
                }
            }
           const reponse = await fetch(this.url + id, options)
           const data = await reponse.json();
           return data ;
        }catch(ex){
            console.log(ex)
        }
    }

}