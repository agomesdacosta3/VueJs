export class UserApi{

    url = "http://localhost:3004/utilisateurs"

    static _instance ;

    static getInstance(){
        if(_instance === null){
            UserApi._instance = new getUserApi()
        }
        return UserApi._instance ; 
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

    async create(identifiants){

        try{
            const options = {
                method : "POST",
                body : JSON.stringify(identifiants),
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

    async existe(email){
        try{
            const reponse = await fetch(`http://localhost:3004/utilisateurs?email=${email}`)
           
            const data = await reponse.json();
            // si existe [{}]
            // si email non pris existe []
            return data.length === 0 ? true : false ;
        }catch(ex){
            console.log(ex)
        }
    }

    async existePseudo(pseudo){
        try{
            const reponse = await fetch(`http://localhost:3004/utilisateurs?pseudo=${pseudo}`)
           
            const data = await reponse.json();
            // si existe [{}]
            // si email non pris existe []
            return data.length === 0 ? true : false ;
        }catch(ex){
            console.log(ex)
        }
    }

    async existeUser(email,password){
        try{
            const reponse = await fetch(`http://localhost:3004/utilisateurs?email=${email}&password=${password}`)
           
            const data = await reponse.json();
            // si existe [{}]
            // si email non pris existe []
            return data.length === 0 ? true : false ;
        }catch(ex){
            console.log(ex)
        }
    }

}
// cas pratique
// modifier le menu pour que lorsque l'on a créé un profil => dans le menu lien déconnexion 
// Profil 
// créer la page Checkout qui fait la synthèse de toutes les informations 
// qui
// quoi 
// où => formulaire 
// bouton paiement 
