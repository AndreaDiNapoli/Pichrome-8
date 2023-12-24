// HARDCODED CARTS LID
carts= [
    "11722","49234","86783","26851","74385","97269","100000","12682","91361","42784","83548","64346","101541","21098","65884","81456","73825","70362","12408","116846","56575","89823","112740","34773","32480","73854","21515","64171","104057","9983","81589","10183","77021","72470","19680","38516","77254","63193","66004","106518","52226","85303","38171","53896","53753","10388","54263","60393","83422","94900","84480","53727","63959","41423","34876","72731","82007","96338","66371","88554","119614","26810","56554","78544","12312","82864","24899","35231","40778","15939","54001","122532","11020","82518","16920","100973","19673","79613","82696","88259","10832","121642","12030","13012","50626","53977","83604","90020","63353","125548","26421","59509","59253","48475","110276","38102","86966","103651","114060","10456","116823","103706","73385","81037","85778","131586","78775","116115","131910","59366","86852","98070","40737","75000","27113","82720","60398","105213","39886","83251","43647","54347","55619","52574","11051","39679","85376","15316","38117","68004","88937","19600","67558","13482","74540","85776","38431","85959","93662","17771","99910","78187","12502","75830","48516","33373","77443","129275","11437","51637","71580","81448","53543","70497","81257","85732","109673","42185","73231","10522","65244","65294","77032","116356","18483","67094","68310","78404","89237","94408","69629","71962","88643","126683","39951","49526","54149","71621","109394","26835","51754","79680","55697","85983","44468","105950","39048","66443","97606","40238","86488","42932","45622","127987","54396","82570","64286","46149","44558","60520"
];

// CREATE CONSTANT
const player_prefix = "https://www.lexaloffle.com/bbs/widget.php?pid=";
const download_prefix = "https://www.lexaloffle.com/bbs/get_cart.php?cat=7&play_src=2&lid=";
const info_prefix = "https://www.lexaloffle.com/bbs/cpost_lister3.php?nfo=1&version=000202cw&lid=";

/*// SUPPORT FUNCTION
var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}*/



// ACTUAL CODE //
// Count cartset lenght
numrow = carts.length;

// Create a random cart from the set 
let rnd = Math.floor(Math.random() * numrow);
rnd_cart = carts[rnd];

// Create a game-player
document.getElementById("pico_frame").src = player_prefix + rnd_cart;

/*// Get cart info
var client = new HttpClient();
client.get(info_prefix + rnd_cart, function(response) {
    data = response;
    console.log(data)
});*/

// Download cart functionality
document.getElementById("downloadcart").href= download_prefix + rnd_cart;




