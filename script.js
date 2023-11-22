const container = document.getElementById("infi-list");
let count = 1;

for(let i = 0; i < 10; i++) {
	const listElement = document.createElement("li");
	listElement.innerText = `item ${count++}`;
	container.appendChild(listElement);
}

container.addEventListener("scroll", ()=>{
    if(container.scrollHeight-container.clientHeight-container.scrollTop >= 2){
        const listElement = document.createElement("li");
        listElement.innerText = `item ${count++}`;
        container.append(listElement);
        
        const newElement = document.createElement("li");
        newElement.innerText = `item ${count++}`;
        newElement.innerText = `item ${count++}`;
        container.append(newElement);
        
    }
})