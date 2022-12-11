import { defineStore } from "pinia"

export const usePanierStore = defineStore("panierStore" , {
    state : () => {
        return {
            panier : []
        }
    },
    actions : {
        add : function(produit){
            // est ce que le produit existe déjà dans le panier ??
            const produitExiste = this.panier.find( item => item.id === produit.id )
            if( produitExiste ){
                const index = this.panier.indexOf(produitExiste);
                this.panier[index].quantite += produit.quantite
            } else {
                this.panier.push(produit)
            }
        }, 
        moins : function(id){
            const produitAugmenter = this.panier.find(item => item.id === id);
            const index = this.panier.indexOf(produitAugmenter);
            this.panier[index].quantite -= 1;
            if(this.panier[index].quantite <= 0){
                this.panier.splice(index,1);
            }
        },
        plus : function(id){
            //console.log("ici")
            const produitAugmenter = this.panier.find(item => item.id === id);
            const index = this.panier.indexOf(produitAugmenter);
            this.panier[index].quantite += 1;
        },
        empty : function(){
            this.panier = []
        }
    },
    getters : {
        totalPanier : function(){
            return this.panier.reduce((total, item) => {
                return total + item.quantite * item.prix
            } , 0)
        },
        nbProduit : function(){
            return this.panier.length
        }
    }
})