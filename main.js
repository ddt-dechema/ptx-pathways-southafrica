////////////////////////////////////////////////////
//
//  INITIALIZE ALL VARIABLES
//   
////////////////////////////////////////////////////
//   COLORS
////////////////////////////////////////////////////
let baseColors = {
    "ptx_first": "rgb(0, 182, 157)",
    "ptx_second": "rgb(191, 226, 71)",
    "ptx_fourth": "rgb(255, 187, 0)"
}, 
emissionColors_D = {
    "industrial": "rgb(84, 114, 155)",
    "biogenic": "rgb(57, 137, 126)" 
},
emissionTypeColors_D = { // in total: 6
    "Coal fired power station": "rgb(164, 146, 220, 1)",
    "Petrochemical": "rgb(209, 146, 198, 1)",
    "Cement": "rgb(0, 182, 157, 0.8)",
    
    "Iron & steel": "rgb(87, 171, 210, 1)",
    "Ferroalloy": "rgb(87, 171, 210, 0.7)",
    "Aluminium": "rgb(87, 171, 210, 0.5)",
    
    "Pulp & paper": "rgb(255, 187, 0, 1)",
    "Sugar": "rgb(241, 219, 38, 0.6)",
    
    "Bioethanol": "rgb(130, 224, 135, 1)",
    "Biogas power plant": "rgb(143, 196, 146, 1)",
    "Biomass power plant": "rgb(143, 196, 146, 0.6)",
    
}

////////////////////////////////////////////////////
//   LANGUAGE
////////////////////////////////////////////////////
let lang; // Default language
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('lang')) {
lang = urlParams.get('lang');
// lang_init = urlParams.get('lang');
} else {
// switched default language to english
lang = 'en';
}

if (lang != "es" && lang != "en") {
alert("Language not available!\nCurrently, texts are only available in english and spanish \n\nSite will reload with english as a default.");
window.location.replace("index.html?lang=en");
}

// Prepare tables for the data which will be loaded and can be filtered
if (lang==="en") {
var table = "<table>\
    <tr>\
        <th id='table_header_industry_type'>Industry</th>\
        <th style='text-align: right;' id='table_header_total_emissions'>Total Emissions (kilotonnes)</th>\
        <th style='text-align: right;' id='table_header_number_entries'>Number of Entries</th>\
    </tr>";
} else if (lang==="es") {
var table = "<table>\
    <tr>\
        <th id='table_header_industry_type'>Industria</th>\
        <th style='text-align: right;' id='table_header_total_emissions'>Emisiones totales (kilotoneladas)</th>\
        <th style='text-align: right;' id='table_header_number_entries'>Número de entradas</th>\
    </tr>";
}

// Initialize an object to store total emissions for each industry type
var totalEmissions = {};
var totalEmissions_total = 0;
var formattedEmissions_total = 0;
var formattedEmissions_selected = 0;

var allLayersVisible = true; // Initial state, all layers are visible
var biogenicLayersVisible = true; // Initial state, biogenic layers are visible
var industrialLayersVisible = true; // Initial state, industrial layers are visible

var sliderValue = 1;
var sliderValue_old = 1;

// Specify the property you want to find the maximum value for
var propertyToFindMax = 'CO2_emissions_t';
// Initialize a variable to store the maximum value
var maxEmissionsArgentina = -Infinity; // Start with negative infinity as an initial value
// var maxRadius_Mt = -Infinity; // Start with negative infinity as an initial value
var maxRadius_kt = -Infinity; // Start with negative infinity as an initial value

let map, formatSI //format1Dec, 

let globalEmissionData, globalChemicalData

////////////////////////////////////////////////////
//
//  Get all HTML IDs
//
////////////////////////////////////////////////////
// Tables in the content-tab
var table_all = document.getElementById('table-all-emissions');
var table_selected = document.getElementById('table-selected-emissions');
// Get a reference to the container element
const buttonContainer = document.getElementById('button-container');
// Define a GeoJSON URL
var geojsonURL = 'southafrica_emissions.geojson';

const content_sidebar = document.getElementById('sidebar');
content_sidebar.style.backgroundColor = baseColors.ptx_first; // Set the background color to the first color in the palette (Red)

// Add a button to the HTML and set its click event to toggleAllLayers
var toggleAllButton = document.getElementById('toggle-all-button'); // Replace with your button's ID
toggleAllButton.addEventListener('click', toggleAllLayers);

var toggleBiogenicButton = document.getElementById('toggle-biogenic-button'); // Replace with your button's ID
toggleBiogenicButton.addEventListener('click', toggleBiogenicLayers);
toggleBiogenicButton.classList.add('toggle-biogenic-button');


var toggleIndustrialButton = document.getElementById('toggle-industrial-button'); // Replace with your button's ID
toggleIndustrialButton.addEventListener('click', toggleIndustrialLayers);
toggleIndustrialButton.classList.add('toggle-industrial-button');

var radius_slider = document.getElementById('radius_slider');
// Add an event listener to the slider
radius_slider.addEventListener('input', function () {
    // Get the current slider value
    sliderValue = parseFloat(radius_slider.value);
    maxRadius_kt=maxEmissionsArgentina/1000 * sliderValue;
    radius_slider_output.innerHTML = sliderValue;    
    createScale(sliderValue);
    // Call the function to update circle sizes
    for (const [key, layername] of Object.entries(layers)) {
        updateCircleSizes(sliderValue_old, sliderValue, layername);
    }
    sliderValue_old=sliderValue;
});
var radius_slider_output = document.getElementById('radius_slider_output');

var elementClicked = document.getElementById("scale_hide_checkbox");
			
elementClicked.addEventListener('click', function(){
    scale.style.display=="" ? scale.style.display="none": scale.style.display="";
});

////////////////////////////////////////////////////
//
//  LAYERS
//
////////////////////////////////////////////////////
var geojsonLayer; // Declare a variable to hold the GeoJSON layer
// var aluminiumLayer, steelLayer, cementLayer, paperLayer, thermalLayer, refineryLayer, biogasLayer, bioethanolLayer, ammoniaLayer, methanolLayer, etilenoLayer;   // Add more variables for other layers
var layer;
// Declare variables for GeoJSON layers
var layers = {};

// Declare counter for each type of industry
var counts = [];

// Group layers by source type
// 12 in total
// if industries are renamed, also rename in en.js and es.js!
var allLayers = [
    { name_en: 'Coal fired power station', name_es: 'Amoniaco', name: 'Coal fired power station', id: 'button-coal', industry: 'industrial'},
    { name_en: 'Petrochemical', name_es: 'Etileno', name: 'Petrochemical', id: 'button-petro', industry: 'industrial'},
    { name_en: 'Iron & steel', name_es: 'Mineral', name: 'Iron & steel', id: 'button-steel', industry: 'industrial'},
    { name_en: 'Ferroalloy', name_es: 'Acero', name: 'Ferroalloy', id: 'button-ferro', industry: 'industrial'},
    { name_en: 'Aluminium', name_es: 'Cemento', name: 'Aluminium', id: 'button-aluminium', industry: 'industrial'},
    { name_en: 'Cement', name_es: 'Cement', name: 'Cement', id: 'button-cement', industry: 'industrial'},
    { name_en: 'Pulp & paper', name_es: 'Celulosa y Papel', name: 'Pulp & paper', id: 'button-paper', industry: 'biogenic'},
    { name_en: 'Sugar', name_es: 'Refinerías', name: 'Sugar', id: 'button-sugar', industry: 'biogenic'},
    { name_en: 'Bioethanol', name_es: 'Termoeléctricas Fuentes Fósiles', name: 'Bioethanol', id: 'button-bioethanol', industry: 'biogenic'},
    { name_en: 'Biogas power plant', name_es: 'Termoeléctricas Biogás', name: 'Biogas power plant', id: 'button-biogas', industry: 'biogenic'},
    { name_en: 'Biomass power plant', name_es: 'Bioetanol', name: 'Biomass power plant', id: 'button-biomass', industry: 'biogenic'},
   
];

// Loop through the button data and create buttons
allLayers.forEach(data => {
    // Create a button element
    const button = document.createElement('button');

    // Set the button's text to the name from the data
    if(lang=="en") {
        button.textContent = data.name_en;
    } else if (lang=="es") {
        button.textContent = data.name_es;
    }    
    // Set the button's ID to the ID from the data
    button.id = data.id;
    // Add a class for styling (if needed)
    button.classList.add('btn', 'custom-button-class', 'toggle-layer-button', 'button');
    button.classList.add(data.id);
    // Set the button's background color from the data
    button.style.backgroundColor = emissionTypeColors_D[data.name];
    // add "data-layer" name for each button
    button.setAttribute('data-layer', data.name);
    button.setAttribute('industry-type', data.industry)
    // Append the button to the container
    buttonContainer.appendChild(button);
});

var industrialLayers = [];
var biogenicLayers = [];

allLayers.forEach(data => {
    if(data.industry=="industrial") {
        industrialLayers.push(data.name);}
});
allLayers.forEach(data => {
    if(data.industry=="biogenic") {
        biogenicLayers.push(data.name);}
});

////////////////////////////////////////////////////
//
//   LANGUAGE
//
////////////////////////////////////////////////////
function updateContent(language) {
let translations = window['translations_' + language];
let current_url = window.location.href;

if(!current_url.includes('lang')) {
    current_url+="?lang="+lang;
}

let url_en, url_es;
if (lang=="en") {
    url_en=current_url;
    url_es=current_url.replace('=en','=es');
} else if (lang=="es"){
    url_es=current_url;
    url_en=current_url.replace('=es','=en');
}
   
(function ($){
    $("#introduction_title").html(translations.introduction_title);
    $("#introduction_title").html(translations.introduction_title);
    
    $("#introduction_text").html(translations.introduction_text);
    $("#project").html(translations.project);	
    $("#language_picker").html(translations.language_picker);	
    $("#languge_switch_link").html(translations.languge_switch_link);	
    
    $("#sidebar_title").html(translations.sidebar_title);
    $("#sidebar_header_filters").html(translations.sidebar_header_filters);
    $("#filter_title").html(translations.filter_title);
    $("#filter_text_introduction").html(translations.filter_text_introduction);
    $("#filter_text").html(translations.filter_text);
    
    $("#manual_filter_title").html(translations.manual_filter_title);

    $("#emission_type").html(translations.emission_type);
    $("#toggle-industrial-button").html(translations.industrial_button);
    $("#toggle-biogenic-button").html(translations.biogenic_button);
    $("#only_selected_plants").html(translations.only_selected_plants);
    $("#toggle-all-button").html(translations.deselect_all_button);
    
    $("#statistics_title").html(translations.statistics_title);
    $("#statistics").html(translations.statistics);
    $("#statistics_total").html(translations.statistics_total);		
    $("#table_emissions_title").html(translations.table_emissions_title);		
    
    $("#circle_title").html(translations.circle_title);
    $("#circle_size").html(translations.circle_size);
    $("#zoom_factor").html(translations.zoom_factor);		
    $("#scale_title").html(translations.scale_title);
    $("#disclaimer_title").html(translations.disclaimer_title);

    $("#data_title").html(translations.data_title);
    $("#methods").html(translations.methods);
    $("#sources").html(translations.sources);			
    $("#download_text").html(translations.download_text);
    $("#download_csv").html(translations.download_csv);
    $("#download_geojson").html(translations.download_geojson);		

    $("#map_programming").html(translations.map_programming);	
    $("#contact").html(translations.contact);
    $("#disclaimer").html(translations.disclaimer);

    $("#biogenic_title").html(translations.biogenic_title);
    $("#biogenic_header").html(translations.biogenic_header);
        
    $("#biogenic_intro").html(translations.biogenic_intro);
    $("#biogenic_IAP").html(translations.biogenic_IAP);
    $("#biogenic_solidwaste").html(translations.biogenic_solidwaste);
    $("#biogenic_sewagesludge").html(translations.biogenic_sewagesludge);
    $("#biogenic_ELT").html(translations.biogenic_ELT);
    $("#biogenic_forestry").html(translations.biogenic_forestry);
    $("#biogenic_methodology").html(translations.biogenic_methodology);
    $("#biogenic_sources").html(translations.biogenic_sources);

    $("#legal").html(translations.legal);
    
    // update button and table texts, which are generated in main.js
    // here, classes are used, because the button texts and the rows in the table, where total emissions are calculated
    // are updated to the same text.
    $('.button-coal').html(translations.button_coal);
    $('.button-petro').html(translations.button_petro);
    $('.button-cement').html(translations.button_cement);
    $('.button-steel').html(translations.button_steel);
    $('.button-ferro').html(translations.button_ferro);
    $('.button-aluminium').html(translations.button_aluminium);
    $('.button-paper').html(translations.button_paper);
    $('.button-sugar').html(translations.button_sugar);
    $('.button-bioethanol').html(translations.button_bioethanol);
    $('.button-biogas').html(translations.button_biogas);
    $('.button-biomass').html(translations.button_biomass);

    $('#table_header_industry_type').html(translations.table_header_industry_type);
    $('#table_header_total_emissions').html(translations.table_header_total_emissions);
    $('#table_header_number_entries').html(translations.table_header_number_entries);

    $('#link_english').attr('href', url_en);
    $('#link_spanish').attr('href', url_es);
})(jQuery);
};

(function ($) {
$('#language-toggle').on('click', function(){
    if (lang==="en") {
        updateContent("es"); 
        lang="es";
    // Change Map Labels to language as well	
    // Auf Wunsch vom PtX Hub soll ausschließlich die spanischen Beschriftung angezeigt werden
    // Dadurch ist ein Reload nicht mehr notwendig
    } else if (lang==="es") {
        updateContent("en"); 
        lang="en";
    }
});
})(jQuery);

////////////////////////////////////////////////////
//
//  CALCULATIONS for the 2nd TAB - total emissions and emissions per categories
//
////////////////////////////////////////////////////
// Function to update circle sizes
function updateCircleSizes(oldValue, newValue, layer) {
layer.eachLayer(function (featureLayer) {
    // Get the current radius of the circle marker
    var currentRadius = featureLayer.getRadius();
    // Calculate the new radius by multiplying the current radius with a scale factor
    var newRadius = currentRadius * (newValue / oldValue);
    // Set the new radius
    featureLayer.setRadius(newRadius); // Set the new radius
});
// Refresh the layer to apply the changes
layer.eachLayer(function (featureLayer) {
    featureLayer.redraw(); // Redraw the marker with the updated radius
});
}

// Function to check if an object is empty
// used when loading the geojsonLayers
function isEmptyObject(obj) {
for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
        return false;
    }
}
return true;
}

// // Function to add the GeoJSON layer to the map
// function addGeoJSONLayer(filterValue) {
//   return fetch(geojsonURL)
//     .then(response => response.json())
//     .then(data => {
//       const filteredData = data.features.filter(function (feature) {
//         const hasValidCoordinates = feature.geometry && feature.geometry.coordinates && !isEmptyObject(feature.geometry.coordinates);
//         const matchesIndustry = feature.properties.Industry === filterValue;
//         return hasValidCoordinates && matchesIndustry;
//       });

//       const geojsonLayer = L.geoJSON(filteredData, {
//         pointToLayer: function (feature, latlng) {
//           if (feature.geometry && feature.geometry.coordinates && !isEmptyObject(feature.geometry.coordinates) && feature.properties.CO2_emissions_t > 0) {
//             return L.circleMarker(latlng, {
//               radius: Math.sqrt(feature.properties.CO2_emissions_t / (maxRadius_kt * 1000)) * 50 * sliderValue,
//               color: emissionTypeColors_D[filterValue],
//               fillColor: emissionTypeColors_D[filterValue],
//               weight: 1,
//               opacity: 0.7,
//               fillOpacity: 0.5
//             }).bindPopup(addCO2argentinaPopupHandler(feature));
//           } else {
//             if (!(parseFloat(feature.properties.CO2_emissions_t) > 0)) {
//               console.log(feature.properties.Name, "(Company:", feature.properties.Company, ") has no CO2 emissions");
//             } else if (!feature.geometry) {
//               console.error(feature.properties.Name, "(Company:", feature.properties.Company, ") has no coordinates");
//             }
//           }
//         }
//       });

//       layers[filterValue] = geojsonLayer;
//       geojsonLayer.addTo(map);
//       return geojsonLayer; // wichtig: etwas zurückgeben, sodass das Promise einen Wert hat
//     });
// }

// Function to toggle all layers
function toggleAllLayers() {
// wenn nur ein Teil oder kein Layer zu sehen ist, dann alle einschalten
if(!allLayersVisible) {  
    if(!industrialLayersVisible) {
        toggleIndustrialLayers();
    }
    if(!biogenicLayersVisible) {
        toggleBiogenicLayers();
    }
    if (lang==="es") {
        document.getElementById('toggle-all-button').text = 'Deseleccionar todo';
    } else if (lang==="en") {
        document.getElementById('toggle-all-button').text = 'Deselect all';
    }
} else 
// wenn alle bereits zu sehen sind (und nicht nur ein Teil), dann alle ausschalten
if(allLayersVisible) {  
    if(industrialLayersVisible) {
        toggleIndustrialLayers();
    }
    if(biogenicLayersVisible) {
        toggleBiogenicLayers();
    }
    if (lang === "es") {
        document.getElementById('toggle-all-button').text = 'Seleccionar todo';
    } else if (lang==="en") {
        document.getElementById('toggle-all-button').text = 'Select all';
    }
}
getEmissionsSelected();
}

function toggleIndustrialLayers() {
// Filter and show layers with industrial source
if (industrialLayersVisible) {
    industrialLayers.forEach(function (layerName) {
        if (map.hasLayer(layers[layerName])) {
            map.removeLayer(layers[layerName]);
        } else {
            map.addLayer(layers[layerName]);
        }
        // document.querySelector("[data-layer=" + CSS.escape(layerName) + "]").style.backgroundColor = "white";
        document.querySelector("[data-layer=" + CSS.escape(layerName) + "]").style.backgroundColor = "";
        
        let button_id = allLayers.find(item => item.name === layerName)?.id;
        document.querySelector("[data-layer=" + CSS.escape(layerName) + "]").classList.add(button_id+'-outline');
    });
    toggleIndustrialButton.classList.remove("toggle-industrial-button");
    toggleIndustrialButton.classList.add("toggle-industrial-button-outline");

    if (lang === "es") {
        document.getElementById('toggle-all-button').text = 'Seleccionar todo';
    } else if (lang==="en") {
        document.getElementById('toggle-all-button').text = 'Select all';
    }
    document.getElementById("toggle-all-button").classList.add('btn-outline-secondary');
    document.getElementById("toggle-all-button").classList.remove('btn-secondary');

    allLayersVisible = false;
    
} else {
    industrialLayers.forEach(function (layerName) {
        map.addLayer(layers[layerName]);
        document.querySelector("[data-layer=" + CSS.escape(layerName) + "]").style.backgroundColor = emissionTypeColors_D[layerName];

        let button_id = allLayers.find(item => item.name === layerName)?.id;
        document.querySelector("[data-layer=" + CSS.escape(layerName) + "]").classList.remove(button_id+'-outline');

    });
    toggleIndustrialButton.classList.remove("toggle-industrial-button-outline");
    toggleIndustrialButton.classList.add("toggle-industrial-button");
}
industrialLayersVisible = !industrialLayersVisible; // Toggle the state

if (!biogenicLayersVisible || !industrialLayersVisible) {
    allLayersVisible = false;
} else if (biogenicLayersVisible && industrialLayersVisible) {
    allLayersVisible = true;

    if (lang==="es") {
        document.getElementById('toggle-all-button').text = 'Deseleccionar todo';
    } else if (lang==="en") {
        document.getElementById('toggle-all-button').text = 'Deselect all';
    }
    document.getElementById("toggle-all-button").classList.remove('btn-outline-secondary');
    document.getElementById("toggle-all-button").classList.add('btn-secondary');
    // console.log('alle an');
}
}

function toggleBiogenicLayers() {
// Filter and show layers with industrial source
if (biogenicLayersVisible) {
    biogenicLayers.forEach(function (layerName) {
        if (map.hasLayer(layers[layerName])) {
            map.removeLayer(layers[layerName]);
        } else {
            map.addLayer(layers[layerName]);
        }
        // document.querySelector("[data-layer=" + CSS.escape(layerName) + "]").style.backgroundColor = "white";
        document.querySelector("[data-layer=" + CSS.escape(layerName) + "]").style.backgroundColor = "";
        let button_id = allLayers.find(item => item.name === layerName)?.id;
        document.querySelector("[data-layer=" + CSS.escape(layerName) + "]").classList.add(button_id+'-outline');
    });
    toggleBiogenicButton.classList.remove("toggle-biogenic-button");
    toggleBiogenicButton.classList.add("toggle-biogenic-button-outline");

    // TOGGLE SELECT ALL BUTTON and the STATE
    allLayersVisible = false;
    if (lang==="es") {
        document.getElementById('toggle-all-button').text = 'Seleccionar todo';
        toggleAllButton.classList.remove('btn-secondary')
        toggleAllButton.classList.add('btn-outline-secondary')
    } else if (lang==="en") {
        document.getElementById('toggle-all-button').text = 'Select all';
        toggleAllButton.classList.remove('btn-secondary')
        toggleAllButton.classList.add('btn-outline-secondary')
    }
    document.getElementById("toggle-all-button").classList.add('btn-outline-secondary');
    document.getElementById("toggle-all-button").classList.remove('btn-secondary');
    // console.log('alle an');
} else {
    biogenicLayers.forEach(function (layerName) {
        map.addLayer(layers[layerName]);
            document.querySelector("[data-layer=" + CSS.escape(layerName) + "]").style.backgroundColor = emissionTypeColors_D[layerName];
            let button_id = allLayers.find(item => item.name === layerName)?.id;
            document.querySelector("[data-layer=" + CSS.escape(layerName) + "]").classList.remove(button_id+'-outline');
    });
    toggleBiogenicButton.classList.add("toggle-biogenic-button");
    toggleBiogenicButton.classList.remove("toggle-biogenic-button-outline");
}
biogenicLayersVisible = !biogenicLayersVisible; // Toggle the state

if (!biogenicLayersVisible || !industrialLayersVisible) {
    allLayersVisible = false;
} else if (biogenicLayersVisible && industrialLayersVisible) {
    allLayersVisible = true;
    if (lang==="es") {
        document.getElementById('toggle-all-button').text = 'Deseleccionar todo';
    } else if (lang==="en") {
        document.getElementById('toggle-all-button').text = 'Deselect all';
    }
    document.getElementById("toggle-all-button").classList.remove('btn-outline-secondary');
    document.getElementById("toggle-all-button").classList.add('btn-secondary');
}
}

////////////////////////////////////////////////////
//
//  CREATE THE MAP and its properties
//
////////////////////////////////////////////////////

// https://docs.maptiler.com/sdk-js/examples/language-map/
// DDTs personal key (!!!)
const key = 'tqfuJhSDIhJBFNXpuIIr';

function showMap(reload, language, zoomlevel, center, style) {
/* allows us to create filters within a Leaflet GeoJSON layer */
L.GeoJSON.include({
    setFilter: function (originalData, _) {
        this.options.filter = _
        this.clearLayers()
        this.addData(originalData)
        return this
    }
})

// South Africa center
let position = [-31.977479, 26.236878];
let zoom = 5;

if (zoomlevel && center) {
    zoom = zoomlevel;
    position = center;
}
// SET DEFAULT LANGUAGE OF THE NAMES OF LOCATIONS ON THE MAP TO ENGLISH
maptilersdk.config.primaryLanguage = maptilersdk.Language.ENGLISH;

// SET MAP BOUNDARIES 
// dragging and panning of the map to other countries not possible
bounds = new L.LatLngBounds(
    new L.LatLng(-4.300000, -22.00000), // Rand oben links 
    new L.LatLng(-38.032825, 37.081656) // Rand unten rechts
    );
/* Set up the map with initial center and zoom level */
map = L.map('map', {
    center: position,
    zoom: zoom,     
    scrollWheelZoom: false,
    zoomControl: false, // to put the zoom butons on the right
    minZoom: 5,     // damit man nicht zu weit rauszoomen kann
    maxBounds: bounds,  // [    // damit man nicht nach links,rechts,oben, unten schieben kann; DISABLE PANNING
    maxBoundsViscosity: 1    // damit gar kein panning außerhalb der bounds möglich ist. 
                            // 0: bouncing back; 1: no panning at all possible
})

L.control.zoom({
    position: 'topright'
}).addTo(map);

// The decision is to only take the bright (V1) as the default layer
map.bright= L.maptilerLayer({
    attribution: '<a href="https://ptx-hub.org/south-africa/" target="_blank"> International PtX Hub, South Africa</a>',
    apiKey: key,
    style:'bright', // we take this one
}).addTo(map);

// // If other tiles should be used:
// map.bright_v2 = L.maptilerLayer({
// attribution: '<a href="https://ptx-hub.org/argentina/" target="_blank"> International PtX Hub, Argentina</a>',
// apiKey: key,        attribution: '<a href="https://ptx-hub.org/argentina/" target="_blank"> International PtX Hub, Argentina</a>',
//     style:'bright-v2',
// })

/* Add the zoom buttons */
map.sidebar = L.control.sidebar('sidebar', {
    position: 'left'
}).addTo(map)
/* On the map, scrolling should zoom */
map.on('focus', () => {
    map.scrollWheelZoom.enable()
})
/* Outside of the map, scrolling should not zoom */
map.on('blur', () => {
    map.scrollWheelZoom.disable()
})
/* This is to put the emissions in the foreground on high zoom levels */
// map.on("zoomend", function (e) {
//     for (type in chemicalParkMarkers) {
//         if (e.target._zoom > 7 && !chemicalParkMarkers.isBack) {
//             chemicalParkMarkers[type].bringToBack()
//             chemicalParkMarkers[type].isBack = true
//         } else {
//             chemicalParkMarkers[type].bringToFront()
//             chemicalParkMarkers[type].isBack = false
//         }
//     }
// })

// if you add additional labels, the layer level is relevant
// map.createPane('labels')
// map.getPane('labels').style.zIndex = 620; // a value of 650 will make the TileLayer with the labels show on top of markers but below pop-ups.
// map.getPane('labels').style.pointerEvents = 'none'; // If a user clicks anywhere on the map, the web browser will assume she clicked on the labels tiles, and not on the GeoJSON or on the markers
}

function loadGlobalDefs() {
var format_own = d3.formatDefaultLocale({
    "decimal": ".",
    "thousands": " ",   // changed default, to not distinguish separately for spanish (1.000,00) or english (1,000.00)
    "grouping": [3],
});
// format1Dec = d3.format(',.1f') // show all numbers with 1,000.00 format
// formatSI = d3.format(',.2f') // DDT changed from ',.3f' to '.,2f' to easily distinguish between dot and comma :)
format_nodecimal=d3.format('.1r'); // round to 1st number
formatSI_own = format_own.format(',.0f');
}

/* create scale for the index.html */
let createScale = (sliderValue) => {
    var height = 100*sliderValue;
    var width = 150*sliderValue;
    var svg = d3.select("#scale")
        .append("svg")
        .attr("width", width)
        .attr("height", height);
    // The scale you use for bubble size
    // if maxRadius is not set (because slider was not used yet)
    // use maxEmissions of Argentina
    
    //reset the legend
    scale.removeChild(scale.children[1]);
    
    var size = d3.scaleSqrt()
        .domain([0, maxRadius_kt]) // What's in the data, min-max
        .range([0, 50*sliderValue]) // Size in pixel
    ;
// Add legend: circles
legend_valueone = format_nodecimal(maxRadius_kt/100);
legend_valuetwo = format_nodecimal(maxRadius_kt/2.5);
legend_valuethree = format_nodecimal(maxRadius_kt);
var valuesToShow = [legend_valueone, legend_valuetwo, legend_valuethree]; // [globalEmissionData.stats.totalMax / 100, globalEmissionData.stats.totalMax / 10, globalEmissionData.stats.totalMax]

var xCircle = 55*sliderValue;
var xLabel = 120*sliderValue;
var yCircle = 100*sliderValue;
svg
    .selectAll("legend")
    .data(valuesToShow)
    .enter()
    .append("circle")
    .attr("cx", xCircle)
    .attr("cy", function(d) {
        return yCircle - size(d);
    })
    .attr("r", function(d) {
        return size(d);
    })
    .style("fill", "black") // changed by DDT from none to black
    .style("stroke", "black")
    .style("stroke-width", "0.8")
    .style("fill-opacity", "0.4") // added by DDT
    .attr("stroke", "black");

// Add legend: segments

svg
    .selectAll("legend")
    .data(valuesToShow)
    .enter()
    .append("line")
    .attr('x1', function(d) {
        return xCircle + size(d);
    })
    .attr('x2', xLabel)
    .attr('y1', function(d) {
        return yCircle - size(d);
    })
    .attr('y2', function(d) {
        return yCircle - size(d);
    })
    .attr('stroke', 'black')
    .style("stroke", "black")
    .style("stroke-width", "0.8")
    .style('stroke-dasharray', ('2,2'));
    
// Add legend: labels
svg
    .selectAll("legend")
    .data(valuesToShow)
    .enter()
    .append("text")
    .attr('x', function(d) {
        return xLabel + (d >= 10 ? 1 : 7);
    })
    .attr('y', function(d) {
        return yCircle - size(d);
    })
    .text(function(d) {
        // return format1Dec(d);
        return formatSI_own(d);
    }) 
    .style("font-size", 10)
    .attr('alignment-baseline', 'middle');
};

function addCO2argentinaPopupHandler(feature) {
// let nace = globalModel.emissions.categories.naceCategories.items
if (feature.properties) {
    let thisEmission = 0;    
    thisEmission = formatSI_own(feature.properties.CO2_emissions_t/1000) + " kt CO<sub>2</sub>/year";
    let thisSource = (feature.properties.Source) ? feature.properties.Source : "-";
    
    let thisNameCompany = feature.properties.Name 
    if (feature.properties.Company) {
        thisNameCompany += " ("+feature.properties.Company+")";
    }
    return `<div class="popup-content">
        <div class="card border-0">
            <h5 class="card-header border-0" style="color: white; background-color: ${emissionTypeColors_D[feature.properties.Industry]}">
                ${thisNameCompany}
            </h5>
            <div class="card-body ptxhub-background ptxhub-text">
                <b>Type of Industry</b>
                <br>${feature.properties.Industry}
                <br><b>Type of Emission</b> 
                    <br>${feature.properties.Source_CO2_emissions}
            <hr class="hr">
                    <b>Emissions (Reference year)</b>
                <br>${thisEmission} (${feature.properties.year_emission ? feature.properties.year_emission : "N/A"})
                <br><b>Data Source:</b> 
                    <br>${thisSource}
            <hr class="hr">
                <p><b>City / Province </b>
                    <br>${feature.properties.City?feature.properties.City:"N/A"} / ${feature.properties.Province}
            </div>
        </div>
    </div>`;
    // Version with tables - not used here
    // return `<div class="popup-content">
    //     <div class="card border-0">
    //         <h5 class="card-header border-0" style="color: white; background-color: ${emissionTypeColors_D[feature.properties.Industry]}">
    //             ${thisNameCompany}
    //         </h5>
    //         <div class="card-body ptxhub-background ptxhub-text">
    //             <table class="table table-hover table-custom">
    //                 <tr><th>Type of Industry</th><td>${feature.properties.Industry}</td></tr>
    //                 <tr><th>Type of Emission</td><td>${feature.properties.Source_CO2_emissions}</td></tr>
    //             <tbody class="ptx-table-group-divider">
    //                 <tr><th>Emissions</td><td>${thisEmission}</td></tr>
    //                 <tr><th>Reference year</td><td>${feature.properties.year_emission ? feature.properties.year_emission : "N/A"}</td></tr>
    //                 <tr><th>Data Source</td><td>${thisSource}</td></tr>
    //             </tbody>
    //             <tbody class="ptx-table-group-divider">
    //                 <tr><th>City</td><td>${feature.properties.City?feature.properties.City:"N/A"}</td></tr>
    //                 <tr><th>Province</td><td>${feature.properties.Province}</td></tr>
    //             </tbody>
    //             </table>
    //     </div>
    // </div>`;
} else {
    console.log(feature);
}
}

// Function to toggle layer visibility
function toggleLayer(layer, layerName, button_id, industryType) {
button=button_id;
if (map.hasLayer(layer)) {
    map.removeLayer(layer);
    button.style.backgroundColor="";
    button.classList.add(button_id.id+"-outline");

    if (industryType=="industrial") {
        industrialLayersVisible = false;
        toggleIndustrialButton.classList.add('toggle-industrial-button');
    } else if (industryType=="biogenic") {
        biogenicLayersVisible = false;
        toggleBiogenicButton.style.backgroundColor="";
        toggleBiogenicButton.style.color="";            
    }
    allLayersVisible = false;
    if (lang==="es") {
        document.getElementById('toggle-all-button').text = 'Seleccionar todo';
    } else if (lang==="en") {
        document.getElementById('toggle-all-button').text = 'Select all';
    }
    
} else {
    layer.addTo(map);
    button.classList.remove(button_id.id+"-outline")
    button.style.backgroundColor = emissionTypeColors_D[layerName];
    
    // check if all layers are visible.
    // if so, then turn on the toggle state of the overarching button for industrial and biogenic sources
    
    // pretend that all layers are visible
    biogenicLayersVisible = true;
    // if at least one of layers in the biogenicLayers is not active, turn of the toggle state.
    biogenicLayers.forEach(data => {
        if(!(map.hasLayer(layers[data]))) {
            biogenicLayersVisible = false;
        }        
    });
    // repeat for industrial layers
    industrialLayersVisible = true;
    industrialLayers.forEach(data => {
        if(!(map.hasLayer(layers[data]))) {
            industrialLayersVisible = false;
        }        
    });
    if(biogenicLayersVisible==true) {
        //toggleBiogenicButton.style.backgroundColor=emissionColors_D['biogenic'];
        toggleBiogenicButton.classList.remove("toggle-biogenic-button-outline");
        toggleBiogenicButton.classList.add("toggle-biogenic-button");
    } 
    if(industrialLayersVisible==true) {
        // toggleIndustrialButton.style.backgroundColor=emissionColors_D['industrial'];
        toggleIndustrialButton.classList.remove("toggle-industrial-button-outline")
        toggleIndustrialButton.classList.add("toggle-industrial-button")
    }

    // repeat for the ALL Layers button
    allLayersVisible = true;
    if (!biogenicLayersVisible || !industrialLayersVisible) {
        allLayersVisible = false;
    } else if (biogenicLayersVisible && industrialLayersVisible) {
        allLayersVisible = true;
        if (lang==="es") {
            document.getElementById('toggle-all-button').text = 'Deseleccionar todo';
            toggleAllButton.classList.remove('btn-outline-secondary')
            toggleAllButton.classList.add('btn-secondary')
        } else if (lang==="en") {
            document.getElementById('toggle-all-button').text = 'Deselect all';
            toggleAllButton.classList.remove('btn-outline-secondary')
            toggleAllButton.classList.add('btn-secondary')
        }
    }
}
if (biogenicLayersVisible==false) {
    toggleBiogenicButton.classList.remove("toggle-biogenic-button");
    toggleBiogenicButton.classList.add("toggle-biogenic-button-outline");
}
if(industrialLayersVisible==false) {
    toggleIndustrialButton.classList.remove("toggle-industrial-button")
    toggleIndustrialButton.classList.add("toggle-industrial-button-outline")
}
}

// Add event listeners to toggle buttons
var toggleButtons = document.querySelectorAll('.toggle-layer-button');

toggleButtons.forEach(button => {
button.addEventListener('click', function () {

    var layerName = button.getAttribute('data-layer');
    var industryType = button.getAttribute('industry-type');

    var layer = layers[layerName];
    if (layer) {
        toggleLayer(layer, layerName, button, industryType);
    } 
    table_selected.style.background = '#ddc'
    getEmissionsSelected();
    setTimeout(function () {
        table_selected.style.background = 'none'
    }, 500)
});
});

function getEmissionsSelected() {
formattedEmissions_selected = 0;
allLayers.forEach(function(name) {
    if (map.hasLayer(layers[name.name])) {
        if(totalEmissions[name.name]){
            formattedEmissions_selected += totalEmissions[name.name];
        }
    }
})
table_selected.innerHTML=formatSI_own(formattedEmissions_selected/1000);
};

/****************/
// we dont need this anymore, because only one layer is used
// let mapLayoutBright = document.getElementById('map-layout-bright'),
// mapLayoutBrightv2 = document.getElementById('map-layout-bright-v2')

// mapLayoutBright.addEventListener('click', function () {
//     map.addLayer(map.bright);
//     map.removeLayer(map.bright_v2);
//     mapLayoutBright.classList.add('is-info');
//     mapLayoutBrightv2.classList.remove('is-info');
// });
// mapLayoutBrightv2.addEventListener('click', function () {
//     map.removeLayer(map.bright);
//     map.addLayer(map.bright_v2);
//     mapLayoutBright.classList.remove('is-info');
//     mapLayoutBrightv2.classList.add('is-info');
// });

/*************************************/
/* Change layout with get parameters */
/*************************************/
// not used here, but could be useful, if one would want to switch to different layouts
// var url = new URL(window.location.href)
// if (!mapLayoutOSM.classList.contains('is-info') && url.searchParams.get("style") == "OSM") toggleMapLayout()

function addGeoJSONLayerFromData(data, filterValue) {
  const filteredData = data.features.filter(function (feature) {
    const hasValidCoordinates = feature.geometry && feature.geometry.coordinates && !isEmptyObject(feature.geometry.coordinates);
    const matchesIndustry = feature.properties.Industry === filterValue;
    return hasValidCoordinates && matchesIndustry;
  });

  const layer = L.geoJSON(filteredData, {
    pointToLayer: function (feature, latlng) {
      const em = parseFloat(feature.properties.CO2_emissions_t);
      if (feature.geometry && feature.geometry.coordinates && !isEmptyObject(feature.geometry.coordinates) && Number.isFinite(em) && em > 0) {
        return L.circleMarker(latlng, {
          // maxRadius_kt ist NUMERISCH!
          radius: Math.sqrt(em / (maxRadius_kt * 1000)) * 50 * sliderValue,
          color: emissionTypeColors_D[filterValue],
          fillColor: emissionTypeColors_D[filterValue],
          weight: 1,
          opacity: 0.7,
          fillOpacity: 0.5
        }).bindPopup(addCO2argentinaPopupHandler(feature));
      } else {
        if (!(Number.isFinite(em) && em > 0)) {
          console.log(feature.properties.Name, "(Company:", feature.properties.Company, ")", "has no CO₂ data");
        } else if (!feature.geometry) {
          console.error(feature.properties.Name, "(Company:", feature.properties.Company, ")", "has no coordinates");
        }
      }
    }
  });

  layers[filterValue] = layer;
  layer.addTo(map);
  return layer;
}

/*************************************************/
/* And finally load all json data and display it */
/*************************************************/
document.addEventListener('DOMContentLoaded', () => {
  if (lang=="en") { (function ($) { $('#language-toggle').prop('checked', true); })(jQuery); updateContent('en'); }
  else { updateContent('es'); }

  showMap();
  loadGlobalDefs(); // falls asynchron: auf Promise umbauen und .then davor einbauen

  fetch(geojsonURL)
    .then(response => response.json())
    .then(data => {
      // --- Aggregationen, Tabellen, Summen ---
      data.features.forEach(function (feature) {
        const Industry = feature.properties.Industry;
        const emissions = parseFloat(feature.properties.CO2_emissions_t);
        if (Number.isFinite(emissions)) {
          totalEmissions[Industry] = (totalEmissions[Industry] || 0) + emissions;
          counts[Industry] = (counts[Industry] || 0) + 1;
        }
      });

      let sum = 0;
      for (const k in counts) { sum += counts[k]; }

      for (let i = 0; i < allLayers.length; i++) {
        const industryValue = allLayers[i].name;
        if (totalEmissions[industryValue]) {
          const formattedEmissions = formatSI_own(totalEmissions[industryValue] / 1000);
          const layer = allLayers.find(item => item.name === industryValue);
          const industry_lang = (lang === "en" ? layer?.name_en : layer?.name_es);
          const industry_short = layer?.id;
          table += `<tr><td class=${industry_short} id="industry_type_${industry_short}">${industry_lang}: </td>
                    <td style="text-align:right;">${formattedEmissions}</td>
                    <td style="text-align:right;">${counts[industryValue]}</td></tr>`;
        } else {
          console.log(industryValue + ' could not be found in the geojson.');
        }
      }

      for (const v of Object.values(totalEmissions)) totalEmissions_total += v;
      const formattedEmissions_total = formatSI_own(totalEmissions_total / 1000);

      table += `<tr><th>TOTAL: </th>
                <th style="text-align:right;border-top:1px solid;">${formattedEmissions_total}</th>
                <th style="text-align:right;border-top:1px solid;">${sum}</th>
                </tr></table>`;

      table_all.innerHTML = table;
      table_selected.innerHTML = formattedEmissions_total;

      // --- Max & Scale ---
      data.features.forEach(function (feature) {
        const val = parseFloat(feature.properties[propertyToFindMax]);
        if (Number.isFinite(val) && feature.geometry?.coordinates && val > maxEmissionsArgentina) {
          maxEmissionsArgentina = val;
        }
      });

      // WICHTIG: numerisch lassen!
      maxRadius_kt = maxEmissionsArgentina / 1000;         // Zahl für die Radien
      maxRadius_kt_label = format_nodecimal(maxRadius_kt); // nur für die Legende/Text

      createScale(1); // darf intern maxRadius_kt_label für Anzeige benutzen

      return data; // Daten an den nächsten .then weiterreichen
    })
    .then(data => {
      // Layer aus den bereits geladenen Daten erstellen (kein zweiter Fetch!)
      allLayers.forEach(l => addGeoJSONLayerFromData(data, l.name));
      // erst jetzt toggeln + Intro
      toggleIndustrialLayers();
      checkIfIntro();
    })
    .catch(error => {
      console.error(`Error loading GeoJSON data: ${error}`);
    });
});

/***********************************/
/* Helper functions (cookies etc.) */
/***********************************/
const setCookie = (name, value, days = 100, path = '/') => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString()
    document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=' + path
}

const getCookie = (name) => {
    return document.cookie.split('; ').reduce((r, v) => {
        const parts = v.split('=')
        return parts[0] === name ? decodeURIComponent(parts[1]) : r
    }, '')
}

const deleteCookie = (name, path = "/") => {
    setCookie(name, '', -1, path)
}

/***********************************/
/* Intro.js tour                   */
/***********************************/
function setCookieNoTour() {
    setCookie('no-tour', 'true')
    // introJs().exit()
    if (tour) tour.exit();
}

document.getElementById('show-intro').addEventListener('click', () => {
    deleteCookie('no-tour')
    startIntro()
})

function checkIfIntro() {
    if (!getCookie('no-tour')) {
        startIntro()
    }
}
let tour;
function startIntro() {
    // var intro = introJs()
    // introJs.onexit(() => map.sidebar.open('info-content'))
    tour = introJs.tour()
    .setOptions({
        steps: [{
                title: 'Carbon sources in South Africa',
                intro: `<p class="intro">This map displays carbon sources in South Africa. You can follow this short introduction to see the main functions, or you can skip the tour.<br>
                <button id="set-cookie-no-tour" onclick="setCookieNoTour()" class="introjs-button" title="This is the only cookie used on this site. If you don't want to use cookies, the tour will be shown on each reload. Click anywhere outside the tour to make it disappear."
                >
                <p style="margin-bottom: 0;">Don't show the tour again<br><small> &#9432; This will set a cookie.</small></p></button>
                
                <hr>
                <img src="img/Comparison_industrial_biogenic_sources.png" style="width:250px" />
                <p class="intro" style="margin-bottom: unset;">The graph above compares the amounts of carbon available as CO₂ from the industrial and biogenic point sources shown on the map. Although the current amount of CO₂ emitted by industrial plants is high, sustainable biogenic sources deserve more attention in the long term.</p>
                </p>`
            },
            {
                element: '#emitter-tab-li',
                intro: `<p class="intro">This map shows industrial (non-biogenic)  and biogenic point sources of carbon in the form of emitted CO<sub>2</sub>. You can click on the different buttons to toggle the visibility of the respective sources on the map. Additionally, you can manually select or deselect specific plant types.`,
                position: 'right'
            },
            {
                element: '#biogenic-sources-tab-li',
                intro: `<p class="intro">The available point sources are not the only source of biogenic carbon for PtX. You can learn more about additional decentralised potential carbon sources here.`,
                position: 'right'
            },
            {
                element: '#data-tab-li',
                intro: `<p class="intro">Information on data used and the methodology are explained in this tab.`,
                position: 'right'
            },
            {
                element: '#info-tab-li',
                intro: `<p class="intro">Here you can find information about the map and the data.`,
                position: 'right'
            },
            {
                element: '#disclaimer-tab-li',
                intro: `<p class="intro">Legal or contact information is shown here. You can also restart the tour here.`,
            },
            {
                title: 'Close',
                element: "#sidebar-close-sources-span",
                intro: `<p class="intro">This closes the sidebar so you can focus on the map`,
            },
            {
                intro: `<p class="intro">Click on any bubble to see more information about it.<br>That's it, now feel free to play with the map`,
            }
        ],
        // doneLabel: `<div title="This is the only cookie used on this site. \
        // <br>If you don\'t want to use cookies, the tour will be shown on each reload. 
        // Click anywhere outside the tour to make it disappear.`,
        // showProgress: true,
        showStepNumbers: false // 🔹 Step-Nummern ausschalten
    })
    .oncomplete(setCookieNoTour)
    // .setOption("dontShowAgain", true) // funktioniert nicht wie gewollt
    // .start()
    tour.start();
    
    map.sidebar.open('sources-content')
    // intro.start()
    // document.getElementById('set-cookie-no-tour').addEventListener('click', setCookieNoTour)
}
