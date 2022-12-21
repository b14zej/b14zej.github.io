const contentDisplay = document.getElementById("content");

function fetchDefaultContnt(){
	var content = "https://raw.githubusercontent.com/b14zej/b14zej.github.io/main/content/_content.json";
	
	fetch(content)
	.then(response => {
		if (!response.ok) {
			throw new Error(`HTTP error: ${response.status}`);
		}
		
		return response.json();
	})
	.then(data => {
		for (var i in data) {
			createSpace(i);
			fetchData(data[i], i);
		}
	});
};

function fetchData(target, id){
	fetch(target)
	.then(response => response.text())
	.then(text => {
		updateContent(id, text);
	})
	.catch(error => {
		throw new Error(`Fetch error: ${error}`);
	});
}


function createSpace(id){
	contentDisplay.innerHTML += "<div id='"+id+"'><h2>Loading...</h2></div>";
	return;
}

function updateContent(id, content){
	document.getElementById(id).innerHTML = content;
}


function updateFeedDisplay(new_text, id){
	contentDisplay.innerHTML += "<div id='"+id+"' class='post'>"+new_text+"</div>";
	console.log(`Created element of new ID: ${id}`);
	return;
};


fetchDefaultContnt();
