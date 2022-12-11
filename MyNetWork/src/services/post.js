export default class PostApi{

    url = "http://localhost:3004/articles"

    static _instance ;

    static getInstance(){
        if(_instance === null){
            PostApi._instance = new getPostApi()
        }
        return PostApi._instance ; 
    }

    async getAll(){
        try{
            const reponse = await fetch(this.url);
            const data = await reponse.json()
            return data
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

}