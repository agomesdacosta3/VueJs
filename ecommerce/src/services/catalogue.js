export default class CatalogueApi{

    url = "http://localhost:3004/catalogue"

    static _instance ;

    static getInstance(){
        if(_instance === null){
            CatalogueApi._instance = new getCatalogueApi()
        }
        return CatalogueApi._instance ; 
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