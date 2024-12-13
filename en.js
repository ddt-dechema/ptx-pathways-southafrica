var translations_en = {
  
  table_emissions_title: `Total Emissions`,
  sidebar_title: `Sources of Carbon in South Africa`,
  introduction_title: `<h2>General Information</h2>`,
  introduction_text: `<h3>Introduction</h3>
  Carbon dioxide (CO<sub>2</sub>), a greenhouse gas often produced as an industrial byproduct, is currently released into the atmosphere at most production sites. However, it has significant potential as a raw material for carbon-based Power-to-X (PtX) products, such as e-methanol and synthetic fuels (e-fuels). The competitiveness of these products depends largely on the availability and quality of the CO<sub>2</sub> supply, making it essential to identify reliable sources. This map highlights the major CO<sub>2</sub> emitters across South Africa, providing essential data on the location, type, and scale of key industrial point sources. This information is essential for supporting the development of PtX projects in the country.<br>
  <br>While the current carbon sources in South Africa are primarily derived from industrial point emissions, it is important to emphasize that, in the long term, the carbon needed for these applications should come from a non-fossil, closed carbon cycle to ensure carbon neutrality. Direct Air Capture (DAC) and biogenic point sources could help meet this requirement, provided sustainability criteria are considered.<br>`,
  project: `<h3>The International Power-to-X Hub</h3> The International PtX Hub is implemented by the Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ) GmbH on behalf of the German Federal Ministry for Economic Affairs and Climate Action (BMWK). Financed by the International Climate Initiative (Internationale Klimaschutzinitiative, IKI), the International PtX Hub is a contribution to the German National Hydrogen Strategy of 2020 and represents one of the four pillars of the BMUV’s PtX action programme initiated in 2019.
    In South Africa, the political partner is the Department of Trade Industry and Competition (DTIC). The implementing partners are the Energy Centre of the Council for Scientific and Industrial Research (CSIR), Agora Energiewende and DECHEMA e.V.`,
  language_picker: `<h3>Cambiar el idioma</h3>`,
  languge_switch_link: `Si desea enlazar al mapa en un idioma específico, utilice el link 
  <a id="link_english">inglés</a>
  o <a id="link_spanish">español</a>
  `,
  sidebar_header_filters: `Filters`,
  filter_title: `Different Categories/Sources of Carbon`,
  filter_text: `The industrial and energy sectors are the leading sources of carbon dioxide emissions in South Africa, primarily due to coal combustion and carbon-intensive industrial activities. Within the energy sector, coal-fired power stations are the dominant contributors, responsible for approximately 70% of the country’s total CO₂ emissions. Other significant sources include the petrochemical industry, which generates emissions through the production of synthetic fuels and a wide range of chemical products. The metal industry, encompassing steel, ferroalloy, and aluminum production, along with the cement sector, is also a significant contributor to South Africa’s industrial carbon release.<br>
   <br>[A distinction is made between industrial <span class="rect dot_industrial"></span> and biogenic sources <span class="rect dot_biogenic"></span>. 
  Industrial sources include the manufacture of chemical products (ammonia, ethylene, methanol) <span class="dot dot_chemicals"></span>, 
  metals (aluminum and steel) and cement <span class="dot dot_metals"></span>, 
  Pulp and paper <span class="dot dot_paper"></span>,
  and others, including refineries and fossil thermoelectric power plants <span class="dot dot_others"></span>. <br>
  Biogenic sources include biogas, biomass and bioethanol production.<span class="dot dot_bio"></span>]`,
  manual_filter_title: `Filter manually`,
  emission_type: `Type of CO<sub>2</sub> emissions:`,
  industrial_button: `industrial/energy sources`,
  biogenic_button: `biogenic sources`,
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
  <b>Coal-Fired Power Stations</b>
  <br>The total energy production values for each power station were obtained from Eskom’s Atmospheric Emission License (AEL) reports [3]. Using Eskom’s total annual CO₂ emissions [4] and total electricity produced, an emission factor of 1.1 was estimated. Based on this factor and the specific electricity production at each power station, the CO₂ emission allocation at each generation point was calculated.
  <br><b>Petrochemical</b>
  <br>Major CO₂ emitters in South Africa’s petrochemical industry are associated with Sasol's facilities, with emission values sourced from Sasol’s Climate Change Report [5]. 
  <br><b>Iron & Steel</b>
  <br>Based on the melting processes used for steel production at each location [6], emission factors of 2.5, 0.6, and 0.4 (for blast, electric arc, and induction furnaces, respectively) were considered. These factors were gathered from steel industry reports [7, 8] and additional literature sources [9, 10]. Assuming an 80% capacity factor for South Africa’s steel industry [6], and considering the total installed capacity at various iron and steel manufacturers [11-17], CO₂ emission values were allocated.  
  <br><b>Ferroalloy</b>
  <br>Emission factors of 2.7 and 1.2 (for ferrochrome and silicomanganese/ferromanganese, respectively) were applied based on the type of ferroalloy produced at each location. These values were sourced from sustainability reports of key South African ferroalloy producers [18, 19]. Using a representative capacity factor of 70% for South Africa’s ferroalloy industry [18, 20], and accounting for the total installed capacity across various manufacturers [12, 21, 22], CO₂ emissions were allocated accordingly.
  <br><b>Cement</b>
  <br>DCO₂ emissions from South Africa’s mineral sector are predominantly attributed to the cement industry. Emission values from various producers were sourced from the study Carbon Sources for PtX Products and Synthetic Fuels in South Africa [2] 
  <br><b>Refineries</b>
  <br>From the total direct emissions of the refining sector reported in the 2018 national inventory [14], emissions per refinery were estimated considering that their emissions were proportional to their installed capacity. This estimate has two assumptions: equal emission factors for all refineries and equal use factors for all refineries in 2018.
  <br><b>Ammonia</b>
  <br>The value for the company Profertil was obtained directly from its sustainability report [15]. For the other two plants, the installed production capacity [16], and assumed production factor of 80% and an emission factor of 0.91 tonnes of CO2 per tonne of ammonia [2], were used.
  <br><b>Methanol</b>
  <br>The annual production of 2018 was obtained from the annual report of the Argentine Petrochemical Institute (Instituto Petroquímico Argentino - IPA) [16], and an emission factor of 0.67 tonnes of CO2 per tonne of methanol was used [2].
  <br><b>Ethylene</b>
  <br>The installed production capacity was obtained from the annual report of the Argentine Petrochemical Institute (Instituto Petroquímico Argentino – IPA) [16], an assumed utilization factor of 98% and an emission factor of 0.84 tonnes of CO2 pero tonne of ethylene was used [2].
  <br><b>Biogas power plant</b>
  <br>Based on data obtained from CAMMESA [13], biogas plants that produce electricity and are connected to the Argentine Interconnection System (SADI) and their respective installed power (MW) were identified. The emission factor was estimated at 18 tonnes of CO2 per day per MW installed. 
  <br><b>Bioethanol</b>
  <br>Estimated value with the installed capacity of each plant, an emission factor of 1.053 tonnes of CO2 per tonne of bioethanol and a production of 80% of the installed capacity.
  <br><b>Biomass power plant</b>
  <br>Based on data obtained from CAMMESA [13], biomass plants that produce electricity and are connected to the Argentine Interconnection System (SADI) and their respective electrical energy generated (MWh) were identified. The emission factor was estimated based on [17], using 112,000 kg CO<sub>2</sub>/TJ by thermal energy from biomass and 40% of electrical efficiency.`,
  sources: `<h3>Literature</h3>
  [1]	“Aluar en cifras.” Accessed: Sep. 20, 2023. [Online]. Available: <a href="https://www.aluar.com.ar/seccion/descripci-n-de-la-empresa/2/32" target="_blank">https://www.aluar.com.ar/seccion/descripci-n-de-la-empresa/2/32</a>
  <br>[2]	MAyDS, “Informe Nacional de Inventario del Cuarto Informe Bienal de Actualización de la República Argentina a la Convención Marco de las Naciones Unidas para el Cambio Climático (CMNUCC).” Accessed: Sep. 20, 2023. [Online]. Available: <a href="https://unfccc.int/sites/default/files/resource/Informe%20Nacional%20de%20Inventario%20del%20IBA%204.pdf" target="_blank">https://unfccc.int/sites/default/files/resource/Informe%20Nacional%20de%20Inventario%20del%20IBA%204.pdf</a>
  <br>[3]	“Climate Trace.” [Online]. Available: <a href="https://climatetrace.org/map/argentina-manufacturing-CO<sub>2</sub>" target="_blank">https://climatetrace.org/map/argentina-manufacturing-CO<sub>2</sub></a>
  <br>[4]	Ternium, “Reporte de Sustentabilidad 2022,” Jul. 2023. Accessed: Oct. 06, 2023. [Online]. Available: <a href="https://ar.ternium.com/media/gltpn3xt/reporte-de-sustentabilidad-2022.pdf" target="_blank">https://ar.ternium.com/media/gltpn3xt/reporte-de-sustentabilidad-2022.pdf</a>
  <br>[5]	Tenaris, “Sustainability Report 2022,” Mar. 2023. Accessed: Oct. 06, 2023. [Online]. Available: <a href="http://flip.tenaris.com/books/byxm/#p=1" target="_blank">http://flip.tenaris.com/books/byxm/#p=1</a>
  <br>[6]	ArcelorMittal Acindar, “Reporte integrado 2022,” Aug. 2023. Accessed: Oct. 06, 2023. [Online]. Available: <a href="https://www.acindar.com.ar/wp-content/uploads/2023/08/ACI_Reporte2022.pdf" target="_blank">https://www.acindar.com.ar/wp-content/uploads/2023/08/ACI_Reporte2022.pdf</a>
  <br>[7]	Votorantim Siderurgia, “Informe de sustentabilidad 2015.” Accessed: Oct. 06, 2023. [Online]. Available: <a href="https://www.acerbrag.com/pdf/Reporte_Sustentabilidad_2015.pdf" target="_blank">https://www.acerbrag.com/pdf/Reporte_Sustentabilidad_2015.pdf</a>
  <br>[8]	GERDAU, “GERDAU - Planta Perez.” Accessed: Oct. 06, 2023. [Online]. Available: <a href="https://www.siderurgia.org.ar/conf18/gerdau.html" target="_blank">https://www.siderurgia.org.ar/conf18/gerdau.html</a>
  <br>[9]	“Cement Review.” [online] Available: <a href="https://www.cemnet.com/Publications/Item/171926/international-cement-review-magazine.html" target="_blank">https://www.cemnet.com/Publications/Item/171926/international-cement-review-magazine.html</a>
  <br>[10]	Asociación de Fabricantes de Cemento Portland (AFCP), “Informe de indicadores de sostenibilidad de la industria argentina del cemento 2020 - 2021,” Aug. 2022. Accessed: Oct. 06, 2023. [Online]. Available: <a href="https://www.afcp.org.ar/informes-de-sostenibilidad" target="_blank">https://www.afcp.org.ar/informes-de-sostenibilidad</a>
  <br>[11]	Ministerio de Agricultura, Ganadería y Pesca, Argentina, “Relevamiento de la Industria de la Celulosa y el Papel 2020,” Jul. 2022. Accessed: Oct. 06, 2022. [Online]. Available: <a href="https://www.magyp.gob.ar/sitio/areas/desarrollo-foresto-industrial/foresto-industria/_archivos//000001_Informes%20Anuales%20de%20la%20Industria/000002_2020/002020_Relevamiento%20de%20la%20Industria%20de%20la%20Celulosa%20y%20el%20Papel%202020.pdf" target="_blank">https://www.magyp.gob.ar/sitio/areas/desarrollo-foresto-industrial/foresto-industria/_archivos//000001_Informes%20Anuales%20de%20la%20Industria/000002_2020/002020_Relevamiento%20de%20la%20Industria%20de%20la%20Celulosa%20y%20el%20Papel%202020.pdf</a>
  <br>[12]	K. Kuparinen, E. Vakkilainen, and T. Tynjälä, “Biomass-based carbon capture and utilization in kraft pulp mills,” Mitig Adapt Strateg Glob Change, vol. 24, no. 7, pp. 1213–1230, Oct. 2019, doi: 10.1007/s11027-018-9833-9.
  <br>[13]	CAMMESA, “Informe Síntesis Mensual - Agosto 2023.” Accessed: Oct. 09, 2023. [Online]. Available: <a href="https://cammesaweb.cammesa.com/informe-sintesis-mensual/" target="_blank">https://cammesaweb.cammesa.com/informe-sintesis-mensual/</a>
  <br>[14]	Ministerio de Ambiente y Desarrollo Sostenible Argentina, “Cuarto Informe Bienal de Actualización de Argentina a la Convención Marco de las Naciones Unidas para el Cambio Climático (CMNUCC),” 2021. Accessed: Oct. 09, 2023. [Online]. Available: <a href="https://www4.unfccc.int/sites/SubmissionsStaging/NationalReports/Documents/3752416_Argentina-BUR4-1-4to%20Informe%20Bienal%20de%20la%20Rep%C3%BAblica%20Argentina.pdf" target="_blank">https://www4.unfccc.int/sites/SubmissionsStaging/NationalReports/Documents/3752416_Argentina-BUR4-1-4to%20Informe%20Bienal%20de%20la%20Rep%C3%BAblica%20Argentina.pdf</a>
  <br>[15]	Profertil, “Reporte de Sostenibilidad 2022.” Accessed: Oct. 09, 2023. [Online]. Available: <a href="https://rs.profertil.com.ar/wp-content/uploads/2023/09/Reporte-de-Sostenibilidad-2022.pdf" target="_blank">https://rs.profertil.com.ar/wp-content/uploads/2023/09/Reporte-de-Sostenibilidad-2022.pdf</a>
  <br>[16]	Instituto Petroquímico Argentino (IPA), “Reporte Anual Instituto Petroquímico Argentino,” 2021. Accessed: Oct. 09, 2023. [Online]. Available: <a href="https://noticiasutnfrn.files.wordpress.com/2020/04/anuario-ipa-2019.pdf" target="_blank">https://noticiasutnfrn.files.wordpress.com/2020/04/anuario-ipa-2019.pdf</a>
  <br>[17] 2006 IPCC Guidelines for National Greenhouse Gas Inventories. Chapter 2: Stationary Combustion. Tabla 2.2. Publications - IPCC-TFI (iges.or.jp)
  `,
  download_text: `Download the data`,
  download_csv: `Download the sources of CO₂ in Argentina (csv)`,
  download_geojson: `Download the sources of CO₂ in Argentina (geojson)`,

  disclaimer_title: `Data, licensing and privacy`,
  map_programming: `<h3>Map development</h3>This map was developed by Dinh Du Tran (DECHEMA e.V.) with information collected by DECHEMA and GIZ Argentina.`,
  contact: `<h3>Contact</h3>
  Verónica Chorkulak<br>
  <a href="mailto:veronica.chorkulak@giz.de">veronica.chorkulak@giz.de</a><br>
  GIZ Argentina<br><br>
  
  Sebastián Murúa<br>
  <a href="mailto:sebastian.murua@giz.de">sebastian.murua@giz.de</a><br>
  GIZ Argentina<br><br>
  
  Luisa López<br>
  <a href="mailto:luisa.lopez@dechema.de">luisa.lopez@dechema.de</a><br>
  DECHEMA e.V.`,
  disclaimer: `<h3>Disclaimer.</h3>The objective of this map is to provide information for research and for the development of PtX projects.\n
  Given that the publicly available information on CO<sub>2</sub> emissions is limited, in some cases it was necessary to estimate using an assumed emissions factor. Therefore, the emissions value presented may not be fully consistent with the actual value for some of the sources identified. \n
  In addition, this map is not complete and there may be sources that have not been identified. \n
  The consortium partners are not responsible for the interpretation and use of the information provided by this map.`,
  legal: `<h3>Aviso legal</h3>
  This Map of CO<sub>2</sub> sources in Argentina is published by the PtX Hub. The PtX Hub is commissioned by the German Federal Government. It is mainly funded by the International Climate Initiative (IKI) and implemented by GIZ (Deutsche Gesellschaft für Internationale Zusammenarbeit GmbH). The opinions and recommendations expressed do not necessarily reflect the positions of the commissioning institutions or the implementing agency.`,
  // ...
  button_Aluminium: `Aluminium`,
  button_Steel: `Steel`,
  button_cement: `Cement`,
  button_refinery: `Refinery`,
  button_thermal: `Fossil Thermal Power Plant`,
  button_ammonia: `Ammonia`,
  button_ethylene: `Ethylene`,
  button_methanol: `Methanol`,
  button_bioethanol: `Bioethanol`,
  button_biogas: `Biogas Power Plant`,
  button_paper: `Pulp and Paper`,
  button_biomass: `Biomass Power Plant`,
  table_header_industry_type: `Industry`,
  table_header_total_emissions: `Total Emissions (kilotonnes)`,
  table_header_number_entries: `Number of plants`,
};

// Export the translations object (for use in other scripts)
window.translations_en = translations_en;


