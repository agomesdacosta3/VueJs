export class CommandeApi{

    url = "http://localhost:3004/commandes"

    async create(commande){
        try{
            const options = {
                method : "POST",
                body : JSON.stringify(commande),
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

    async getAllCommande(email){
        try{
            const reponse = await fetch(`${this.url}?user.email=${email}`)
            const data = await reponse.json();
            return data ;
        }catch(ex){
            console.log(ex)
        }
    }
}