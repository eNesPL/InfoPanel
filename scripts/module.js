Hooks.once('init', async function() {
    await game.settings.register('infopanel', 'infopanel', {
        name: 'InfoPanel',
        hint: 'A description of the registered setting and its behavior.',
        scope: 'world',     // "world" = sync to db, "client" = local storage
        config: true,       // false if you dont want it to show in module config
        type: String,       // String, Number, Boolean, or Object
        default: '0', // default value
    onChange: value => { // value is the new value of the setting
        document.getElementById("infopanel").innerHTML = value;
      },
    });       

});


Hooks.once('ready', async function() {
var div = document.createElement("div");
div.id = "infopanel";
div.style.width = "200px";
div.style.height = "auto";
div.style.backgroundImage = "bg.jpg";
div.style.textAlign = "center";
div.style.verticalalign= "middle";
div.style.color = "black";
div.style.fontSize= "20px";
div.style.marginLeft = "auto";
div.style.marginRight = "100px";
div.style.border= "3px solid brown";
div.innerHTML = game.settings.get('infopanel', 'infopanel');
div.onclick=console.log("TEST");
document.getElementById("ui-top").appendChild(div);
});


 
