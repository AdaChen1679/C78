var images = ["Family.jpg", "Dad.png", "Mom.png", "Peep.png", "Poop.png", "Arapapa.jpg", "Aradada.jpg"];
var names = ["Family", "Dad", "Mom", "Peep", "Poop", "Arapapa", "Aradada"];
var i = 0;
function update()
{
    i++;
    var how_many_member = 6;
    if(i > how_many_member)
    {
        i = 0;
    }
    var updatedImage = image[i];
    var updatedName = names[i];
    document.getElementById("Family").src = updatedImage;
    document.getElementById("Member").innerHTML = updatedName;

}