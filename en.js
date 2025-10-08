var translations_en = {
  
  table_emissions_title: `Total Emissions`,
  sidebar_title: `Sources of Carbon in South Africa`,
  introduction_title: `<h2>General Information</h2>`,
  introduction_text: `Carbon dioxide (CO<sub>2</sub>), a greenhouse gas often produced as an industrial byproduct, is currently released into the atmosphere at most production sites. However, it has significant potential as a raw material for carbon-based Power-to-X (PtX) products, such as e-methanol and synthetic fuels (e-fuels). The competitiveness of these products depends largely on the availability and quality of the carbon supply, making it essential to identify reliable sources.<br>
  <br> This map identifies carbon sources in the form of CO<sub>2</sub> across South Africa, providing crucial data on their quantity, location, and type. This information is key for optimising carbon utilisation and accelerating the development of Power-to-X (PtX) projects in the country.<br>
  <br>While the current carbon sources in South Africa are primarily derived from industrial point emissions, it is important to emphasise that, in the long term, the carbon needed for these applications should come from a non-fossil, closed carbon cycle to ensure carbon neutrality. Direct Air Capture (DAC) and biogenic sources, both point CO<sub>2</sub> and decentralised biomass sources, could help meet this requirement, provided sustainability criteria are considered.<br>`,
  project: `<br><h3>The International Power-to-X Hub</h3> The International PtX Hub is implemented by the Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH on behalf of the German Federal Ministry for Economic Affairs and Climate Action (BMWK). Financed by the International Climate Initiative (Internationale Klimaschutzinitiative, IKI), the International PtX Hub is a contribution to the German National Hydrogen Strategy of 2020 and represents one of the four pillars of the BMUV’s PtX action programme initiated in 2019.
    In South Africa, the political partner is the Department of Trade Industry and Competition (DTIC). The implementing partners are the Energy Centre of the Council for Scientific and Industrial Research (CSIR), Agora Energiewende and DECHEMA e.V.`,
  language_picker: `<h3>Cambiar el idioma</h3>`,
  languge_switch_link: `Si desea enlazar al mapa en un idioma específico, utilice el link 
  <a id="link_english">inglés</a>
  o <a id="link_spanish">español</a>
  `,
  sidebar_header_filters: `Filters`,
  filter_title: `Different Categories/Sources of Carbon`,
  filter_text_introduction: `A distinction is made between industrial  <span class="rect dot_industrial"></span> and biogenic carbon sources <span class="rect dot_biogenic"></span>. You can click on the different buttons to toggle the visibility of the respective sources on the map. Additionally, you can manually select or deselect specific plant types.`,
  filter_text: `<h2>About the data sources</h2>Industrial <span class="rect dot_industrial"></span> sources are the largest contributors to carbon emissions in South Africa, due to their reliance on fossil-based feedstocks. Within this, the energy sector is the primary contributor, with coal-fired power stations <span class="dot dot_coal"></span> responsible for approximately 70% of the country’s total CO<sub>2</sub> industrial emissions. Other significant fossil carbon sources include the petrochemical industry <span class="dot dot_petro"></span>, which generates emissions through the production of synthetic fuels and chemicals like ammonia, methanol, and ethylene, among others. Aditionally, the metal industry <span class="dot dot_metals"></span>, which includes steel, ferroalloy, and aluminum production, along with the cement sector <span class="dot dot_cement"></span>, also plays a substantial role in South Africa’s fossil carbon emissions.<br>
  <br>Biogenic <span class="rect dot_biogenic"></span> CO<sub>2</sub> emissions in South Africa arise from industrial activities using biomass as a power source or feedstock. Notable examples include the pulp and paper <span class="dot dot_paper"></span> and the sugar industry <span class="dot dot_sugar"></span>, where the potential for biogenic carbon accounts for 70-80% and 80-90% of their total CO<sub>2</sub> emissions, respectively (note that the values on the map represent total CO₂ emissions). Additionally, other biogenic emissions result from activities such as bioethanol production <span class="dot dot_bioethanol"></span>, as well as biogas and biomass power plants <span class="dot dot_biopower"></span>.<br>
  `,
  // manual_filter_title: `Filter Manually`,
  emission_type: `<b>Type of CO<sub>2</sub> emissions:</b>`,
  industrial_button: `Industrial sources`,
  biogenic_button: `Biogenic sources`,
  only_selected_plants: `Only selected plant types:`,
  deselect_all_button: `Deselect all`,
  
  statistics_title: `Statistics`,
  statistics: `Total emissions in South Africa for selected filters:`,
  statistics_total: ` &nbsp;kilotonnes of CO<sub>2</sub> per year`,
  circle_title: `<br>Adjust Data Point Size`,
  circle_size: `Use this control to adjust the scale (size) of the circles to better visualise sites with the lowest emissions on the map.<br><br><b>Note</b>: The stars visible on the map indicate national or administrative capitals, while dashed lines represent ferry routes included by default in the base map. These elements are not part of the project’s data. `,  
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
  <br>Based on the melting processes used for steel production at each location [6], emission factors of 2.5, 0.6, and 0.4 tonnes of CO₂ per tonne of steel were considered (for blast, electric arc, and induction furnaces, respectively). These factors were gathered from steel industry reports [7, 8] and additional literature sources [9, 10]. Assuming an 80% capacity factor for South Africa’s steel industry [6], and considering the total installed capacity at various iron and steel manufacturers [11-17], CO₂ emission values were allocated.<br> 
  <br><b>Ferroalloy</b>
  <br>Emission factors of 2.7 and 1.2 tonnes of CO₂ per tonne of ferroalloy (ferrochrome and silicomanganese/ferromanganese, respectively) were applied based on the type of ferroalloy produced at each location. These values were sourced from sustainability reports of key South African ferroalloy producers [18, 19]. Using a representative capacity factor of 70% for South Africa’s ferroalloy industry [18, 20], and accounting for the total installed capacity across various manufacturers [12, 21, 22], CO₂ emissions were allocated accordingly.<br>
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
  <br>[24] Mondi Group. “Sustainability Report 2022”. Accessed: Mar. 13, 2025. [Online]. Available:  <a href="https://www.mondigroup.com/globalassets/mondigroup.com/sustainability/reports-and-publications/2023/annual-report/mondi-group-sustainable-development-report-2023.pdf " target="_blank">https://www.mondigroup.com/globalassets/mondigroup.com/sustainability/reports-and-publications/2023/annual-report/mondi-group-sustainable-development-report-2023.pdf </a>
  <br>[25] Sappi. “Group Sustainability Report 2024”. Accessed: Mar. 13, 2025. [Online]. Available:  <a href="https://cdn-s3.sappi.com/s3fs-public/2024-Sappi-Group-Sustainability-Report-Final-7.pdf" target="_blank">https://cdn-s3.sappi.com/s3fs-public/2024-Sappi-Group-Sustainability-Report-Final-7.pdf</a>
  <br>[26] Mpact. “2023 Sustainability Report”. Accessed: Mar. 13, 2025. [Online]. Available:  <a href="https://www.mpact.co.za/assets/investors-and-media/reports/IR23/downloads/mpact-2023-SDR.pdf " target="_blank">https://www.mpact.co.za/assets/investors-and-media/reports/IR23/downloads/mpact-2023-SDR.pdf </a>
  <br>[27] Kuparinen, Katja, Esa Vakkilainen, and Tero Tynjälä. "Biomass-based carbon capture and utilization in kraft pulp mills." Mitigation and Adaptation Strategies for Global Change 24 (2019): 1213-1230.
  <br>[28] van der Merwe-Botha, Marlene, Bertie Steytler, and Peter Wille. "NATSURV 12 Water and Wastewater Management in the Paper and Pulp Industry (Edition 2)." (2017).
  <br>[29] Illovo Sugar. “Social, economic & environmental impact assesment”. Accessed: Mar. 13, 2025. [Online]. Available:  <a href="https://www.illovosugarafrica.com/media/documents/socio-economic-impact-report/Illovo-" target="_blank">https://www.illovosugarafrica.com/media/documents/socio-economic-impact-report/Illovo-</a>
  <br>[30] Bindoff, Anne. “Motivation in support of the application to exclude clean water dam sludge waste from the definition of waste - Sezela Sugar Mill”. Accessed: Mar. 13, 2025. [Online]. Available:  <a href="https://sawic.environment.gov.za/documents/17785.pdf " target="_blank">https://sawic.environment.gov.za/documents/17785.pdf </a>
  <br>[31] Bindoff, Anne. “Motivation in support of the application to exclude sludge waste from the definition of waste - Nordberg Sugar Mill”. Accessed: Mar. 13, 2025. [Online]. Available:  <a href="https://sawic.environment.gov.za/documents/17767.pdf " target="_blank">https://sawic.environment.gov.za/documents/17767.pdf </a>
  <br>[32] Tongaat Hulett. “ESG and climate change report 2021”. Accessed: Mar. 13, 2025. [Online]. Available:  <a href="https://www.tongaat.com/2021ESG.pdf" target="_blank">https://www.tongaat.com/2021ESG.pdf</a>
  <br>[33] RCL Foods. “Sustainable Business Report 2024”. Accessed: Mar. 13, 2025. [Online]. Available:  <a href="https://rclfoods.com/wp-content/uploads/2024/09/2024-Sustainable-Business-v2.pdf " target="_blank">https://rclfoods.com/wp-content/uploads/2024/09/2024-Sustainable-Business-v2.pdf </a>
  <br>[34] Umfolozi Sugar Mill. “Umfolozi Sugar Mill”. Accessed: Mar. 13, 2025. [Online]. Available:  <a href="https://www.umfolozisugarmill.co.za/about.html" target="_blank">https://www.umfolozisugarmill.co.za/about.html</a>
  <br>[35] UCL. “UCL’s Voyage into Sugar Production”. Accessed: Mar. 13, 2025.[Online]. Available:  <a href="https://www.ucl.co.za/business-units/sugar-manufacturing.html " target="_blank">https://www.ucl.co.za/business-units/sugar-manufacturing.html </a>
  <br>[36] KwaZulu-Natal Department of Transport. “KwaZulu-Natal Freight Transport Data Bank”. Accessed: Mar. 13, 2025. [Online]. Available:  <a href="http://www.kzntransport.gov.za/public_trans/freight_databank/kzn/industries/sugar_distribution/index_xml.html " target="_blank">http://www.kzntransport.gov.za/public_trans/freight_databank/kzn/industries/sugar_distribution/index_xml.html </a>
  <br>[37] AlcoNCP. “AlcoNCP Overview”. Accessed: Mar. 13, 2025. [Online]. Available:  <a href="https://www.alconcp.com/company-overview.html " target="_blank">https://www.alconcp.com/company-overview.html </a>
  <br>[38] iLembe Chamber of Commerce Industry & Tourism. “Members: Glendale Distilling Co.”. Accessed: Mar. 13, 2025. [Online]. Available:  <a href="https://www.ilembechamber.co.za/members-directory/agriculture-forestry-hunting-agricultural-processing/ " target="_blank">https://www.ilembechamber.co.za/members-directory/agriculture-forestry-hunting-agricultural-processing/ </a>
  <br>[39] Southern African Biogas Industry Association. “Biogas Map”. Accessed: Mar. 13, 2025. [Online]. Available:  <a href="https://sabia.org.za/biogas-map#close" target="_blank">https://sabia.org.za/biogas-map#close</a>
  <br>[40] Jameel, Mohammed Khaleel, et al. "Biogas: Production, properties, applications, economic and challenges: A review." Results in Chemistry (2024): 101549.
  <br>[41] The Climate Registry (TCR). “2023 Default Emission Factors”. Accessed: Mar. 13, 2025. [Online]. Available:  <a href="https://theclimateregistry.org/wp-content/uploads/2023/06/2023-Default-Emission-Factors-Final-1.pdf " target="_blank">https://theclimateregistry.org/wp-content/uploads/2023/06/2023-Default-Emission-Factors-Final-1.pdf </a>
  <br>[42] GeaSphere, et al. “Ngodwana Biomass Energy Project – Case study”. Accessed: Mar. 13, 2025. [Online]. Available:  <a href="https://environmentalpaper.org/wp-content/uploads/2022/03/ngodwana-case-study.pdf " target="_blank">https://environmentalpaper.org/wp-content/uploads/2022/03/ngodwana-case-study.pdf </a>               
  `,
  download_text: `<br>Download the Data`,
  download_csv: `Download the sources of CO₂ in South Africa (csv)`,
  download_geojson: `Download the sources of CO₂ in South Africa (geojson)`,

  biogenic_title: `Other biogenic sources`,
  biogenic_header: `<h3>Other biogenic sources</h3>`,
  biogenic_intro: `Decentralised biomass offers significant potential for sourcing biogenic carbon for PtX processes in South Africa, complementing the point sources shown on the map. Key decentralised biogenic feedstocks include invasive alien plants, organic fraction of municipal waste, sewage sludge, end-of-life tyres, and forestry residues. Overall, nearly 26100 kilotonnes of CO2 per year could potentially be derived from these sources:`,  
  
  biogenic_IAP: `<br><h4>Invasive alien plants (IAP)</h4>
  A study by WWF South Africa [1] estimated the total volume of available oven-dry woody IAPs biomass at 217 million tonnes for 2018. This quantity could potentially yield around 110 million tonnes of biogenic carbon for PtX processes. If distributed across a 20-year project lifespan and quantified as captured CO2, this would equate to 29900 kilotonnes of CO2 per year. 
Due to their high water demand and extensive invasions, IAPs pose a significant threat to water security and biodiversity. The ultimate goal is therefore to eradicate these species, which limits the lifespan of the projects using them as a feedstock. Management of these species must also comply with existing legislation to prevent regrowth [1,2]. 
As IAPs currently serve as a carbon sink, appropriate land restoration will also be crucial to achieve actual GHG emission reductions when using this biomass in PtX processes [3]. 
The largest volumes of the IAPs accessible for forestry machinery, in areas with slopes below 35%, are located in KwaZulu-Natal, Eastern Cape and Limpopo provinces [1].`,
  biogenic_solidwaste: `<br><h4>Organic component of municipal solid waste </h4>
 According to the State of Waste Report [4], organic waste – mainly garden, food and wood waste – made up 56% of South Africa’s general waste in 2017. While wood waste is often reused or recycled by industries such as sugar, pulp and paper, and forestry, garden and food waste still largely end up in landfills. Diverting these waste streams could create significant value in PtX processes and beyond, for example for biogas production through anaerobic digestion or for composting. Around 3500-7400 kilotonnes of biogenic CO2 per year could be captured from these sources. 
To use these waste streams as feedstock, the fluctuations in their composition that depend on location and season need to be considered. Regional distribution of this biomass type is expected to correlate with population density, income levels and urbanisation level of the region. `,
  biogenic_sewagesludge:`<br><h4>Organic component of sewage sludge</h4>Managing sewage sludge, a major by-product of wastewater treatment, remains a challenge for municipalities, with large amounts still stockpiled on-site or landfilled [4]. At the same time, it also represents a potential source of biogenic carbon, e.g. for PtX processes or biogas production through anaerobic digestion. Expressed as CO2 volumes, around 400-700 kilotonnes of biogenic CO2 could be captured from this source each year. 
The regional distribution of this type of biomass is expected to mirror volumes of the formally treated wastewater, with Gauteng accounting for nearly a half of the total volume [4].`,
  biogenic_ELT: `<br><h4>End-of-life tyres (ELT)</h4>Natural rubber, a key component of tyres, can also be considered as another source of biogenic carbon. Management ELTs remains a challenge in South Africa, with most not yet recycled, leading to overfull depots and landfill accumulation [5]. Illegal dumping or improper use for energy purposes further poses significant environmental and health risks [6]. Coordinated utilisation could therefore help address both carbon sourcing for PtX processes and tyre waste management, yielding potentially around 180-260 kilotonnes of biogenic CO2 per year. This value assumes that 90% of the accumulated backlog of 900 kilotonnes can be utilised until 2038, as well as 100% conversion of all new passenger cars and truck ELTs (250-300 kilotonnes per year) [5].
In 2023, Gauteng accounted for nearly one-third of the total quantity of waste tyres stored in depots in South Africa [5].`,
biogenic_forestry: `<br><h4>Forestry residues</h4>While hardwood is largely processed in the pulp and board industry - with related point emissions shown on the map – softwood is processed in sawmills, which often have low recovery rates, and therefore, significant waste production. These residues are currently used for low-efficiency electricity generation [7], resulting in local CO₂ emissions. The amount of carbon available from forestry residues is significantly lower than from other sources, with an estimated value of 3 kilotonnes CO2 per year. If collected centrally, forestry residues still could serve as a carbon source for PtX processes. In this case, renewable electricity alternatives for local communities and facilities need to be secured. 
The sawmills are mostly located close to the softwood plantations [8], and the volume of residues is expected to correlate with regional softwood production. Mpumalanga contributes the largest share, followed by KwaZulu-Natal and Eastern Cape provinces [9].`,  
biogenic_methodology: `<br><h3>Methodology</h3><i>Disclaimer</i><br>
The main purpose of this analysis is to demonstrate which biomass sources in South Africa could be available for PtX projects and to illustrate the scale of biogenic carbon volumes that could be derived from them. For this, only the maximum potential availability was estimated. To determine the amounts that could realistically be used in PtX processes, a full techno-economic assessment is required. This should consider the suitable processes and their yields, as well as the location-specific availability and composition of biomass. Furthermore, a comparison with the other conversion routes, such as biogas and biofuel production, is necessary. 
CO₂ was used here as the metric to ensure the comparability between different decentralised biogenic carbon sources and the point sources shown on the map.
<h4>Invasive alien plants (IAPs)</h5>
The considered woody IAPs include three most extensively distributed types: acacia, eucalyptus and pine [1]. These volumes were distributed across a 20-year project lifespan, without accounting for regrowth or eradication through other initiatives. The average carbon content of the dried biomass was assumed to be 50% [10]. 
<h4>Organic component of municipal solid waste </h4>
The annual volumes of food waste (2.5 million tonnes) and garden waste (4.2 million tonnes) were obtained from the State of Waste report [4]. The carbon content in these biomass types was derived using carbon and moisture content data from references [11,12]. The waste fraction that was already being used for other purposes, such as composting, energy generation or biogas production, was not excluded. This share was estimated at 10% in 2016 [7].
<h4>Organic component of sewage sludge</h4>
The volumes of the produced dry sewage sludge in the wastewater treatment facilities (1750 tonnes per day) was taken from literature [13]. The content of biogenic carbon was derived from the available studies for European countries [14,15] and used as an approximation here. The use of sewage sludge for other purposes such as application on agricultural land or in biogas power plants have not been subtracted. 
<h4>End-of-life tyres (ELTs)</h4>
The biogenic carbon content of the passenger cars and truck waste tyres was derived using the data from literature [16]. 
<h4>Forestry residues</h4>
The residues that are produced in sawmills were estimated based on the reported sawlog volumes in South Africa in 2019 (4.955 million m3) [9] and the expected recovery rate for the production of sawn timber from the softwood of 40% [17]. 
`,
  biogenic_sources: `<br><h4>Sources</h4>
[1] Chireshe F., Bole-Rentel T., Reeler J. <i>Blueprint for Sustainable Aviation Fuel (SAF) Production Potential in South Africa.</i> Accessed: Oct 6, 2025 [Online]. Available: <a href="#">PDF</a><br>
[2] A National Invasive Species Multi-Stakeholder Forum initiative. <i>South Africa’s National Listed Invasive Species.</i> Accessed: Oct 6, 2025 [Online]. Available: <a href="#">PDF</a><br>
[3] Vera I., Goosen N., Batidzirai B., Hoefnagels R., van der Hilst F. <i>The use of Invasive Alien Plants for Bioenergy in South Africa: Contribution to multiple sustainable development goals.</i> IEA Bioenergy and GBEP Workshop (15-16 June 2021). Accessed: Oct 6, 2025 [Online]. Available: <a href="#">PDF</a><br>
[4] Department of Environmental Affairs, South Africa. <i>South Africa: State of Waste Report 2018.</i> Accessed: Oct 6, 2025 [Online]. Available: <a href="https://sawic.dffe.gov.za/SAWIC/home">Statistics</a><br>
[5] Department of Forestery, Fisheries and the Environment, South Africa. <i>Industrial Waste Tyre Management Plan.</i> Government Gazette Staatskoerant. 705 (50322). (20 March 2024). Accessed: Oct 6, 2025 [Online]. Available: <a href="#">PDF</a><br>
[6] Burger S. <i>Redisa calls for new waste tyre management plan</i> (14 August 2025). Accessed: Oct 6, 2025 [Online]. Available: <a href="https://www.engineeringnews.co.za/article/redisa-calls-for-new-waste-tyre-management-plan-2025-08-14">Link</a><br>
[7] Hugo W. (Ed). <i>BioEnergy Atlas for South Africa – Synopsis Report</i>, Department of Science and Technology, South Africa. Accessed: Oct 6, 2025 [Online]. Available: <a href="#">PDF</a><br>
[8] Tshavhugwe V., Grobbelaar S. <i>South African Sawmill Industry Clusters and Benchmarking Practices.</i> SAJIE. 36(2), 82-92 (August 2025). Accessed: Oct 6, 2025 [Online]. Available: <a href="#">PDF</a><br>
[9] Oberholzer F. <i>South African Forestry and Forest Products Industry 2019</i> (November 2021). Accessed: Oct 6, 2025 [Online]. Available: <a href="#">PDF</a><br>
[10] Matthews G. <i>The Carbon Content of Trees.</i> Forestry Commission (1993). Accessed: Oct 6, 2025 [Online]. Available: <a href="#">PDF</a><br>
[11] <i>2006 IPCC Guidelines for National Greenhouse Gas Inventories.</i> Vol. 4 Ch. 6, Vol.5 Ch. 2. Accessed: Oct 6, 2025 [Online]. Available: <a href="https://www.ipcc-nggip.iges.or.jp/public/2006gl/">https://www.ipcc-nggip.iges.or.jp/public/2006gl/</a><br>
[12] Moodley L. <i>Garden Refuse Composting as Part of an integrated Zero Waste Strategy for South African Municipalities.</i> Master Thesis. University of KwaZulu-Natal (December 2010). p.108 <br>
[13] <i>Avast! Why sewage sludge is bound for the rocks – and how to turn her around.</i> The Water Wheel (Nov/Dec 2024), p. 29. Accessed: Oct 6, 2025 [Online]. Available: <a href="#">PDF</a><br>
[14] Panepinto D., Fiore S., Genon G., Acri M. <i>Thermal valorization of sewer sludge: Perspectives for large wastewater treatment plants.</i> J. Clean. Prod. 137 (2016) pp. 1323-1329. Available: <a href="http://dx.doi.org/10.1016/j.jclepro.2016.08.014">http://dx.doi.org/10.1016/j.jclepro.2016.08.014</a><br>
[15] Lorenz G.D., Voerkelius S., Huxol S., Garvens H.J. <i>Biogenic and fossil carbon in sewage sludge and digester gas determined by isotope investigation.</i> German Environmental Agency (December 2022). Accessed: Oct 6, 2025 [Online]. Available: <a href="#">PDF</a><br>
[16] Rodríguez L.S., Bermejo Muñoz J.M., Zambon A., Faure J.P. <i>Determination of the Biomass Content of End-of-Life Tyres.</i> Biomass Volume Estimation and Valorization for Energy (February 2017). Accessed: Oct 6, 2025 [Online]. Available: <a href="https://www.intechopen.com/chapters/52753">https://www.intechopen.com/chapters/52753</a><br>
[17] Cafford P.L., Wessels C.B. <i>South African log resource availability and potential environmental impact of timber construction.</i> SAJS. 116(7/8) (2020). Available: <a href="https://doi.org/10.17159/sajs.2020/6419">https://doi.org/10.17159/sajs.2020/6419</a><br>
`,

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


