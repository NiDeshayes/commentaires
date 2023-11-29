function verification(event) {
    var prenom= document.getElementById("first-name").value;
    var nom= document.getElementById("message").value;
    var commentaires= document.getElementById("last-name").value;

    if(prenom.length <=0 || nom.length <=0 || commentaires.length <=0){
    

        document.getElementById("error-message").style.display = "block";
        event.preventDefault();
    }

    else {

        // Créer un nouvel élément de commentaire
        var nouveauCommentaire = document.createElement("div");
        nouveauCommentaire.className = "flex space-x-4 text-sm text-gray-500";
        nouveauCommentaire.innerHTML = `
            <div class="flex-1 py-10 border-t border-gray-200">
                <h3 class="font-medium text-gray-900">${prenom} ${nom}</h3>
                <div class="prose prose-sm mt-4 max-w-none text-gray-500">
                    <p>${commentaires}</p>
                </div>
            </div>
        `;

        // Ajouter le nouvel élément à la liste des commentaires
        var listeCommentaires = document.getElementById("comment-list");
        listeCommentaires.appendChild(nouveauCommentaire);

        // Réinitialiser le formulaire
        document.getElementById("first-name").value = "";
        document.getElementById("last-name").value = "";
        document.getElementById("message").value = "";

        // Cacher le message d'erreur
        document.getElementById("error-message").style.display = "none";
        event.preventDefault();
    }  
}




document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector('button[type="submit"]');
    submitButton.addEventListener("click", verification);
});

