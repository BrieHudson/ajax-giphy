const $gifArea = $("#gif-area");
const $input = $("#search");
const $search = $("#searchbtn");

//ajax step 1
function addGif(res){
    let numResults = res.data.length;
    if(numResults){
        let randomInd = Math.floor(Math.random() * numResults);
        let $newCol = $("<div>", {class: "col"});
        let $newGif = $("<img>", {src: res.data[randomInd].images.original.url, class: "img"});
        $newCol.append($newGif);
        $gifArea.append($newCol);
    }
}

//append GIFs step 2
$("form").on("submit", async function(evt){
    evt.preventDefault();

    let searchInput = $("#search").val();
    $("#search").val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: searchInput,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    addGif(response.data);
    
});
//Remove GIFs
$("#removebtn").on("click", function(){
    $gifArea.empty();
});

