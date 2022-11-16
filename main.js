window.onload = () => {
    document.querySelector("#btn").addEventListener("click", () => {
        
        document.querySelector("#answer").innerHTML = generateExcuse();
    })
    

}

let generateExcuse = () => {
    
    let pronoun = ["A", "The"];
    let subject = ["Koala", "Strawberry", "Kangaroo", "Mosquito", "Mutant"];
    let action = ["ate my", "burnt my", "stole my", "destroy my", "took my"];
    let object = ["homework", "sandwich", "computer", "car", "pencil" ];
    let where = ["in paradice city", "in the jungle", "in the garden of eden", "in my dreams", "in the bus"];

    let proIndex = Math.floor(Math.random() * pronoun.length);
    let subIndex = Math.floor(Math.random() * subject.length);
    let actIndex = Math.floor(Math.random() * action.length);
    let objIndex = Math.floor(Math.random() * object.length);
    let whereIndex = Math.floor(Math.random() * where.length);

    
    let result = pronoun[proIndex] + " " + subject[subIndex] + " " + action[actIndex] + " " + object[objIndex] + " " + where[whereIndex];


    return (result);
}