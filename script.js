// HARDCODED CARTS LID
carts= [
"amstradchips1-1","amstradchips1-1","rtype-0","phoenix08-0","mot_grandprix-6","meas_castle-10","terra_1cart-11","golfsunday-0","flipknight-0","pico_1k_jam_invitation-0","mot_sorcerer-9","picodino-1","pavilion_picolake_1-0","piratestrial-4","space_station_demo-0","nemonic-1","the_lost_night-5","boulderrun-5","dominion_ex-4","pico_arcade-2","peral-1","fsgupicozombiegarden121-0","28757","fnf_menu-3","ninjacat-10","18991","wobblepaint-6","snail-9","yarn-0","impossible-1","picooffroad-5","pullfrog-3","47637","starjump-0","werugipano-5","grippy-6","slimeyjump-2","23661","moonrace-0","steps-1","cab_ride-6","celeste_classic_2-5","winterwood-2","46990","tower-0","pigments-0","mellow-2","piconiccc-1","adc_v2-2","41029","crowded_dungeon_crawler-2","54395","superdiscbox-0","explorers-0","willo-0","spaz48_tetyis-2","pico8adventcalendar2020-21","picolumia-0","lowknight-1","stuck_in_the_sewers-6","28861","highstakes-2","bunny_envmap-0","mot_pool-23","sonic_25_sage-0","islander-4","43486","scrap_boy-4","orbys-0","soulbound-8","motu-6","nightride-0","cards_with_personalities-8","44467","28457","minima-0","46281","picowars-19","20306","littlenecromancer-4","nano_villager-0","lavajoe-0","myrrhs_edge-3","shelledshinobi1-7","jostitle-6","28428","tetraminisdeffect-5","shifttrap-0","47742","burntherope-2","mot_ramps-21","ufo-0","picodriller-0","picodepon-2","41397","chamber-1","32957","21313","picotetris-5","d16solais-0","anise_wheres_twig-1","bubblebobble-1","42744","29780","42930","neon-0","picohot-0","porklike-2","snowball_showdown-4","37733","polarpanic-0","puroresu_no_seishin-0","deep-0","48406","xvst-0","vox_mine_28-1","31361","tbj_launcher-10","zedwolf-1","katamari_christmassy-1","pico8adventcalendar2019-25","xmasfish-1","freds72_snow-3","xzero-3","winter_golf_2darray-1","55231","54262","53976","point_cloud_ladybug-0","52573","supercontrahot-0","dodge_final-5","witchlovesbullets-3","pico_pirates_v1-0","55617","picochak-0","ghosthouse-0","ruwukawisa-0","sybils_tail-3","mapuzzle-2","futari_nezumi-0","egypt-3","picoware-20","abc-0","demon_castle-1","czp_ozelotl_100-0","55128","28217","lowmemsky-1","gifts_on_venus-1","fejuzesito-0","brutalpicorace_104-0","liines-0","bluemarble-0","44647","fuz_v1-1","orul-0","cotlk-0","54546","shadowsofdunwich-4","white_ale_in_benin-0","tenkizoti-4","dungeocrawl-4","19342","pinballvania-2","57201","i_just_wanna_land_v2-0","12162","29382","12104","22638","gravdog-0","breakdown-1","picotunes2-0","50452","nacwseswahmmm-2","13897","29524","cubevania12-0","18860","49305","techno_utopian_edict-1","teramom-2","picozone_17in1jam-0","hobobot-1","robinuzenu-0","53561","27788","47025","rockformetal-0","51156","26887","14860","18128","jijazenefe-2","43668","foodman-0","13227","mowerman-4","45961","10610","18442","16886","book_of_truth-3","49283","55000","29009","18444","44793","46864","51752","49853","antiban-0","19006","fourgigabossfights-4","34142","45729","aw_survival-0","44999","52504","41342","17726","47234","delunky102-0","24636","42730","35159","43288","42296","aalpaca-2","51642","32503","46038","43646","41197","39950","45382","54383","31129","53724","31028","21105","32307","19819","17908","46760","26579","21677","10782","56576","slipways-0","38613","51509","25748","23940","54038","19863","16314","pico8adventcalendar2018-31","41286","16969","49777","18391","22833","billionpaledots-0","11651","23208","11006","53895","crowd-2","37064","buzzkill-0","18716","27415","27071","yajasahese-0","36437","16350","38190","25047","55135","picokart2_082-0","popisokye-0","15379","35256","13739","23035","24452","16503","10437","picotennis2-0","42427","19532","23753","17567","39885","10058","40736","39678","35079","39947","47150","19639","16555","upward-0","dubayubeno-3","41422","13021","22377","fugakujih-0","12500","15137","40777","38515","38440","17774","22937","15314","27211","28747","35444","ad_astra-0","10521","27177","13025","34798","20068","37402","37216","42220","25149","16151","10838","21104","49232","marballs_2-0","24981","22602","17208","dank_tomb-0","pomeroyejo-0","41436","32479","12311","17003","40278","26895","dimejegasu-2","10022","21603","11093","16305","thelair-0","39705","15133"
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




