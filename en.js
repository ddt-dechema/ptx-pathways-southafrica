var translations_en = {
  
  table_emissions_title: `Total Emissions`,
  sidebar_title: `Sources of Carbon in South Africa`,
  introduction_title: `<h2>General Information</h2>`,
  introduction_text: `<h3>Introduction</h3>
  Carbon dioxide (CO<sub>2</sub>), a greenhouse gas often produced as an industrial byproduct, is currently released into the atmosphere at most production sites. However, it has significant potential as a raw material for carbon-based Power-to-X (PtX) products, such as e-methanol and synthetic fuels (e-fuels). The competitiveness of these products depends largely on the availability and quality of the carbon supply, making it essential to identify reliable sources.<br>
  <br> This map identifies carbon sources in the form of CO<sub>2</sub> across South Africa, providing crucial data on their quantity, location, and type. This information is key for optimizing carbon utilization and accelerating the development of Power-to-X (PtX) projects in the country.<br>
  <br>While the current carbon sources in South Africa are primarily derived from industrial point emissions, it is important to emphasize that, in the long term, the carbon needed for these applications should come from a non-fossil, closed carbon cycle to ensure carbon neutrality. Direct Air Capture (DAC) and biogenic point sources could help meet this requirement, provided sustainability criteria are considered.<br>`,
  project: `<br><h3>The International Power-to-X Hub</h3> The International PtX Hub is implemented by the Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH on behalf of the German Federal Ministry for Economic Affairs and Climate Action (BMWK). Financed by the International Climate Initiative (Internationale Klimaschutzinitiative, IKI), the International PtX Hub is a contribution to the German National Hydrogen Strategy of 2020 and represents one of the four pillars of the BMUV’s PtX action programme initiated in 2019.
    In South Africa, the political partner is the Department of Trade Industry and Competition (DTIC). The implementing partners are the Energy Centre of the Council for Scientific and Industrial Research (CSIR), Agora Energiewende and DECHEMA e.V.`,
  language_picker: `<h3>Cambiar el idioma</h3>`,
  languge_switch_link: `Si desea enlazar al mapa en un idioma específico, utilice el link 
  <a id="link_english">inglés</a>
  o <a id="link_spanish">español</a>
  `,
  sidebar_header_filters: `Filters`,
  filter_title: `Different Categories/Sources of Carbon`,
  filter_text: `A distinction is made between industrial  <span class="rect dot_industrial"></span> and biogenic carbon sources <span class="rect dot_biogenic"></span>. Industrial sources are the largest contributors to carbon emissions in South Africa, due to their reliance on fossil-based feedstocks. Within this, the energy sector is the primary contributor, with coal-fired power stations <span class="dot dot_coal"></span> responsible for approximately 70% of the country’s total CO<sub>2</sub> industrial emissions. Other significant fossil carbon sources include the petrochemical industry <span class="dot dot_petro"></span>, which generates emissions through the production of synthetic fuels and chemicals like ammonia, methanol, and ethylene, among others. Aditionally, the metal industry <span class="dot dot_metals"></span>, which includes steel, ferroalloy, and aluminum production, along with the cement sector <span class="dot dot_cement"></span>, also plays a substantial role in South Africa’s fossil carbon emissions.<br>
  <br>Biogenic CO<sub>2</sub> emissions in South Africa arise from industrial activities using biomass as a power source or feedstock. Notable examples include the pulp and paper <span class="dot dot_paper"></span> and the sugar industry <span class="dot dot_sugar"></span>, where the potential for biogenic carbon accounts for 70-80% and 80-90% of their total CO<sub>2</sub> emissions, respectively. Additionally, other biogenic emissions result from activities such as bioethanol production <span class="dot dot_bioethanol"></span>, as well as biogas and biomass power plants <span class="dot dot_biopower"></span>.<br>
  `,
  manual_filter_title: `Filter Manually`,
  emission_type: `Type of CO<sub>2</sub> emissions:`,
  industrial_button: `Industrial sources`,
  biogenic_button: `Biogenic sources`,
  only_selected_plants: `Only selected plant types:`,
  deselect_all_button: `Deselect all`,
  
  statistics_title: `Statistics`,
  statistics: `Total emissions in South Africa for selected filters:`,
  statistics_total: ` &nbsp;kilotonnes of CO<sub>2</sub> per years`,
  circle_title: `Change the circle size`,
  circle_size: `Use this control if you want to change the scale (size) of the circles in order to see on the map the sites with lower emissions.`,
  zoom_factor: `Zoom factor`,
  scale_title: `Emissions in <span title="kilo or 1&nbsp;000 tonnes" style="border-bottom: 1px dashed blue">kt</span>/year`,
  data_title: `Data and sources`,
  methods: `<h2>Sources and Methodology</h2>
  This map is based on information from South Africa’s Department of Forestry, Fisheries and the Environment, as presented in the 9th National Greenhouse Gas Inventory Report for the Republic of South Africa [1], and the published study Carbon Sources for PtX Products and Synthetic Fuels in South Africa [2]. Using this information, along with further estimates derived from public sources and industry-specific information, CO₂ emissions allocations were determined as detailed below.<br>
  <br><b>Coal-Fired Power Stations</b>
  <br>The total energy production values for each power station were obtained from Eskom’s Atmospheric Emission License (AEL) reports [3]. Using Eskom’s total annual CO₂ emissions [4] and total electricity produced, an emission factor of 1.1 was estimated. Based on this factor and the specific electricity production at each power station, the CO₂ emission allocation at each generation point was calculated.<br>
  <br><b>Petrochemical</b>
  <br>Major CO₂ emitters in South Africa’s petrochemical industry are associated with Sasol's facilities, with emission values sourced from Sasol’s Climate Change Report [5].<br> 
  <br><b>Iron & Steel</b>
  <br>Based on the melting processes used for steel production at each location [6], emission factors of 2.5, 0.6, and 0.4 tonnes of CO2 per tonne of steel were considered (for blast, electric arc, and induction furnaces, respectively). These factors were gathered from steel industry reports [7, 8] and additional literature sources [9, 10]. Assuming an 80% capacity factor for South Africa’s steel industry [6], and considering the total installed capacity at various iron and steel manufacturers [11-17], CO₂ emission values were allocated.<br> 
  <br><b>Ferroalloy</b>
  <br>Emission factors of 2.7 and 1.2 tonnes of CO2 per tonne of ferroalloy (ferrochrome and silicomanganese/ferromanganese, respectively) were applied based on the type of ferroalloy produced at each location. These values were sourced from sustainability reports of key South African ferroalloy producers [18, 19]. Using a representative capacity factor of 70% for South Africa’s ferroalloy industry [18, 20], and accounting for the total installed capacity across various manufacturers [12, 21, 22], CO₂ emissions were allocated accordingly.<br>
  <br><b>Cement</b>
  <br>CO₂ emissions from South Africa’s mineral sector are predominantly attributed to the cement industry. Emission values from various producers were sourced from the study Carbon Sources for PtX Products and Synthetic Fuels in South Africa [2].<br> 
  <br><b>Aluminum</b>
  <br>CO₂ emissions associated with aluminum production in South Africa are primarily attributed to Hillside Aluminium. Emission values were sourced from the company’s sustainability report [23].<br>
  <br><b>Pulp & paper</b>
  <br>Total biogenic and fossil CO₂ emissions at Mondi’s and Sappi’s mills were obtained from their respective sustainability reports [24, 25]. Emissions at other mills were calculated using an average emission factor of 2.5 tonnes of CO₂ per tonne of paper, based on values reported in the literature and from other representative South African paper mills [24-27]. Considering this information and total production at each location [28], CO₂ emissions were allocated.<br>
  <br><b>Sugar</b>
  <br>Total CO₂ emissions from Illovo Sugar’s mills were obtained from the company’s sustainability report [29], considering the total capacity of each mill [29-31]. Emissions from other sugar mills were calculated based on total sugar production at each mill and the consumption of renewable (bagasse) and fossil (coal) fuels, with information sourced from the sustainability reports or official websites of the respective companies [32-36].<br>
  <br><b>Bioethanol</b>
  <br>Biogenic CO₂ emissions at Merebank Distillery were obtained from Illovo’s sustainability report [29]. Biogenic carbon emissions from other locations were calculated using an emission factor of 0.95 tonnes of CO₂ per tonne of ethanol and the respective ethanol production capacity at each facility [37, 38].<br> 
  <br><b>Biogas power plant</b>
  <br>Information on the total biogas and electricity production at each location was obtained from the Southern African Biogas Industry Association [39]. Assuming a biogas composition of 60% methane and 40% carbon dioxide by volume [40], and using an emission factor of 50 kg of CO₂ per GJ produced by biogas combustion [41], the total CO₂ capacity at each location was calculated. <br> 
  <br><b>Biomass power plant</b>
  <br>Total electricity production at Ngodwana Biomass Power Station, along with its annual biomass consumption, was obtained from the literature [42]. Based on these values and assuming an emission factor of 86 kg of CO₂ per GJ produced by the combustion of wood residues [41], the total CO₂ emissions were calculated.<br> 

  `,
  sources: `<br><h3>Literature</h3>
  [1] Department of Forestry, Fisheries and the Environment. “National GHG Inventory Report.” Accessed: Dec. 2, 2024. [Online]. Available:  <a href="https://www.dffe.gov.za/sites/default/files/legislations/unfccc_greenhousegasinventoryreport9_g50607gon4772.pdf"_blank">https://www.dffe.gov.za/sites/default/files/legislations/unfccc_greenhousegasinventoryreport9_g50607gon4772.pdf</a>
  <br>[2]	Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH. “Carbon Sources for PtX Products and Synthetic Fuels in South Africa.” Accessed: Dec. 2, 2024. [Online]. Available:  <a href="https://ptx-hub.org/wp-content/uploads/2024/03/International-PtX-Hub_2z2403_Carbon-Sources-in-South-Africa.pdf">https://ptx-hub.org/wp-content/uploads/2024/03/International-PtX-Hub_2z2403_Carbon-Sources-in-South-Africa.pdf</a>
  <br>[3]	Esko. “Atmospheric Emission License (AEL) reports.” Accessed: Dec. 2, 2024. [Online]. Available: <a href="https://www.eskom.co.za/dataportal/emissions/ael/" target="_blank">https://www.eskom.co.za/dataportal/emissions/ael/</a>
  <br>[4]	Eskom. “Eskom CO2 data.” Accessed: Dec. 2, 2024. [Online]. Available:  <a href="https://www.eskom.co.za/dataportal/emissions/elementor-291086/" target="_blank">https://www.eskom.co.za/dataportal/emissions/elementor-291086/</a>
  <br>[5]	Sasol. “Sasol Limited Climate Change Report - for the Year Ended 30 June 2023.” Accessed: Dec. 2, 2024. [Online]. Available:  <a href="https://www.sasol.com/sites/default/files/2023-09/SASOL%20Climate%20Change%20Report%202023.pdf">https://www.sasol.com/sites/default/files/2023-09/SASOL%20Climate%20Change%20Report%202023.pdf</a>
  <br>[6]	South African Iron and Steel Institute. “A South Africa Steel Industry Report - Reflecting on 2021 and an outlook for 2022.” Accessed: Dec. 2, 2024. [Online]. Available:  <a href="https://www.saisi.org/wp-content/uploads/2022/06/SAISI_Steel-Report_2022.pdf" target="_blank">https://www.saisi.org/wp-content/uploads/2022/06/SAISI_Steel-Report_2022.pdf</a>
  <br>[7]	ArcelorMittal. “Environmental, Social and Governance report 2023.” Accessed: Dec. 2, 2024. [Online]. Available:  <a href="https://arcelormittalsa.com/Portals/0/ArcelorMittal%20ESG%20report%202023.pdf" target="_blank">https://arcelormittalsa.com/Portals/0/ArcelorMittal%20ESG%20report%202023.pdf</a>
  <br>[8]	Energy Transitions Commission. “The Net Zero Steel Sector Transition Strategy.” Accessed: Dec. 2, 2024. [Online]. Available: <a href="transitions.org/publications/the-net-zero-steel-sector-transition-strategy/#download-form" target="_blank">transitions.org/publications/the-net-zero-steel-sector-transition-strategy/#download-form</a>
  <br>[9]	Echterhof, Thomas. "Review on the use of alternative carbon sources in EAF steelmaking." Metals 11.2 (2021): 222.
  <br>[10] Finkewirth, Lars, Ali Abdelshafy, and Grit Walther. "A comparative environmental assessment of the cast iron and steel melting technologies in Germany." Energy 2004 (2022): 2965. 
  <br>[11] AcelorMittal. “ArcelorMittal Integrated Report 2019.” Accessed: Dec. 2, 2024. [Online]. Available:  <a href="https://southafrica.arcelormittal.com/Portals/0/ArcelorMittal%20AR_2019_Lores.pdf" target="_blank">https://southafrica.arcelormittal.com/Portals/0/ArcelorMittal%20AR_2019_Lores.pdf</a>
  <br>[12] Yager, Thomas R. “The Mineral Industry of South Africa.” Accessed: Dec. 2, 2024. [Online]. Available:  <a href="https://pubs.usgs.gov/myb/vol3/2019/myb3-2019-south-africa.pdf"_blank">https://pubs.usgs.gov/myb/vol3/2019/myb3-2019-south-africa.pdf</a>
  <br>[13] Castings SA. “Inductotherm completes installation at SA Steel Mills.” Accessed: Dec. 2, 2024. [Online]. Available:  <a href="https://castingssa.com/inductotherm-completes-installation-at-sa-steel-mills/">https://castingssa.com/inductotherm-completes-installation-at-sa-steel-mills/</a>
  <br>[14] Force Steels. “About Force Steels.” Accessed: Dec. 2, 2024. [Online]. Available:  <a href="https://fortunesteels.co.za/about-us/" target="_blank">https://fortunesteels.co.za/about-us/</a>
  <br>[15] O'Reilly, Claire. “Engineering News - Second Phase of Plant Expansion Begins” Accessed: Dec. 2, 2024. [Online]. Available:  <a href="https://www.engineeringnews.co.za/article/secondary-steelmanufacturer-takes-next-steptoopeningup-the-scrap-metal-industry-2021-11-04" target="_blank">https://www.engineeringnews.co.za/article/secondary-steelmanufacturer-takes-next-steptoopeningup-the-scrap-metal-industry-2021-11-04</a>
  <br>[16] Burke, Poppi & Carr, Rachel. “UNICA Iron and Steel: Setting a Solid Standard.” Accessed: Dec. 2, 2024. [Online]. Available: <a href="https://www.mfg-outlook.com/metal-machinery-manufacturing/unica-iron-and-steel-setting-a-solid-standard" target="_blank">https://www.mfg-outlook.com/metal-machinery-manufacturing/unica-iron-and-steel-setting-a-solid-standard</a>
  <br>[17] Coega Steels. “Our Story -Coega Steels (Pty) Ltd.” Accessed: Dec. 2, 2024. [Online]. Available:  <a href="https://coegasteels.com/about.php" target="_blank">https://coegasteels.com/about.php</a>
  <br>[18] Glencore. “Sustainability Report 2022.” Accessed: Dec. 2, 2024. [Online]. Available:  <a href="https://www.glencore.com/.rest/api/v1/documents/static/63d21a4e-30f6-40ca-b0f6-00ec64a718cf/GLEN_2022_sustainability_report.pdf" target="_blank">https://www.glencore.com/.rest/api/v1/documents/static/63d21a4e-30f6-40ca-b0f6-00ec64a718cf/GLEN_2022_sustainability_report.pdf</a>
  <br>[19] African Rainbow Minerals (ARM). “2019 Sustainability Report.” Accessed: Dec. 2, 2024. [Online]. Available:  <a href="https://arm.onlinereport.co.za/arm_iar_2019/documents/pdfs/2019_sustainability_report.pdf" target="_blank">https://arm.onlinereport.co.za/arm_iar_2019/documents/pdfs/2019_sustainability_report.pdf</a>
  <br>[20] Samancor Chrome. “Samancor Sustainability Report 2022.” 
  <br>[21] Visser, M. "An overview of the history and current operational facilities of Samancor Chrome." Southern African Pyrometallurgy 2006 (2006): 285-296.
  <br>[22] Samancor Chrome. “Samancor Operations Overview.” Accessed: Dec. 2, 2024. [Online]. Available:  <a href="https://samancorcr.com/operations-overview/" target="_blank">https://samancorcr.com/operations-overview/</a>
  <br>[23] South 32. “Sustainable Development Report 2024.” Accessed: Dec. 2, 2024. [Online]. Available:  <a href="https://www.south32.net/docs/default-source/annual-reporting-suite/2024/sustainable-development-report-2024.pdf?sfvrsn=ddc11e46_1" target="_blank">https://www.south32.net/docs/default-source/annual-reporting-suite/2024/sustainable-development-report-2024.pdf?sfvrsn=ddc11e46_1</a>
  `,
  download_text: `<br>Download the Data`,
  download_csv: `Download the sources of CO₂ in Argentina (csv)`,
  download_geojson: `Download the sources of CO₂ in Argentina (geojson)`,

  disclaimer_title: `Data, licensing and privacy`,
  map_programming: `<h3>Map development</h3>This map was developed by Dinh Du Tran (DECHEMA e.V.) with information collected by DECHEMA.`,
  contact: `<h3>Contact</h3>
   
 Daniela Jurado Betancur<br>
  <a href="mailto:daniela.juradoz@dechema.de">daniela.jurado@dechema.de</a><br>
  DECHEMA e.V.`,
  disclaimer: `<h3>Disclaimer</h3>The objective of this map is to provide information for research and for the development of PtX projects.\n
  Given that the publicly available information on CO<sub>2</sub> emissions is limited, in some cases it was necessary to estimate using an assumed emissions factor. Therefore, the emissions value presented may not be fully consistent with the actual value for some of the sources identified. \n
  In addition, this map is not complete and there may be sources that have not been identified. \n
  The consortium partners are not responsible for the interpretation and use of the information provided by this map.`,
  legal: `<h3>Legal notice</h3>
  This Map of CO<sub>2</sub> sources in South Africa is published by the PtX Hub. The PtX Hub is commissioned by the German Federal Government. It is mainly funded by the International Climate Initiative (IKI) and implemented by GIZ (Deutsche Gesellschaft für Internationale Zusammenarbeit GmbH). The opinions and recommendations expressed do not necessarily reflect the positions of the commissioning institutions or the implementing agency.`,
  // ...
  button_aluminium: `Aluminium`,
  button_steel: `Iron & steel`,
  button_cement: `Cement`,
  button_ferro: `Ferroalloy`,
  button_sugar: `Sugar`,
  button_coal: `Coal fired power station`,
  button_petro: `Petrochemical`,
  button_bioethanol: `Bioethanol`,
  button_biogas: `Biogas power plant`,
  button_paper: `Pulp & paper`,
  button_biomass: `Biomass power plant`,
  table_header_industry_type: `Industry`,
  table_header_total_emissions: `Total Emissions (kilotonnes)`,
  table_header_number_entries: `Number of plants`,
};

// Export the translations object (for use in other scripts)
window.translations_en = translations_en;


