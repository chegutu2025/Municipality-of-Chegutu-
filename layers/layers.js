var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_wards_1 = new ol.format.GeoJSON();
var features_wards_1 = format_wards_1.readFeatures(json_wards_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_wards_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_wards_1.addFeatures(features_wards_1);
var lyr_wards_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_wards_1, 
                style: style_wards_1,
                popuplayertitle: 'wards',
                interactive: true,
                title: '<img src="styles/legend/wards_1.png" /> wards'
            });
var format_Schools_2 = new ol.format.GeoJSON();
var features_Schools_2 = format_Schools_2.readFeatures(json_Schools_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schools_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schools_2.addFeatures(features_Schools_2);
var lyr_Schools_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Schools_2, 
                style: style_Schools_2,
                popuplayertitle: 'Schools',
                interactive: true,
                title: '<img src="styles/legend/Schools_2.png" /> Schools'
            });
var format_PublicBuildings_3 = new ol.format.GeoJSON();
var features_PublicBuildings_3 = format_PublicBuildings_3.readFeatures(json_PublicBuildings_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PublicBuildings_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PublicBuildings_3.addFeatures(features_PublicBuildings_3);
var lyr_PublicBuildings_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PublicBuildings_3, 
                style: style_PublicBuildings_3,
                popuplayertitle: 'Public Buildings',
                interactive: true,
                title: '<img src="styles/legend/PublicBuildings_3.png" /> Public Buildings'
            });
var format_ShoppingCentre_4 = new ol.format.GeoJSON();
var features_ShoppingCentre_4 = format_ShoppingCentre_4.readFeatures(json_ShoppingCentre_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ShoppingCentre_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ShoppingCentre_4.addFeatures(features_ShoppingCentre_4);
var lyr_ShoppingCentre_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ShoppingCentre_4, 
                style: style_ShoppingCentre_4,
                popuplayertitle: 'Shopping Centre',
                interactive: true,
                title: '<img src="styles/legend/ShoppingCentre_4.png" /> Shopping Centre'
            });
var format_HealthcareFacilities_5 = new ol.format.GeoJSON();
var features_HealthcareFacilities_5 = format_HealthcareFacilities_5.readFeatures(json_HealthcareFacilities_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HealthcareFacilities_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HealthcareFacilities_5.addFeatures(features_HealthcareFacilities_5);
var lyr_HealthcareFacilities_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HealthcareFacilities_5, 
                style: style_HealthcareFacilities_5,
                popuplayertitle: 'Healthcare Facilities',
                interactive: true,
                title: '<img src="styles/legend/HealthcareFacilities_5.png" /> Healthcare Facilities'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_wards_1.setVisible(true);lyr_Schools_2.setVisible(true);lyr_PublicBuildings_3.setVisible(true);lyr_ShoppingCentre_4.setVisible(true);lyr_HealthcareFacilities_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_wards_1,lyr_Schools_2,lyr_PublicBuildings_3,lyr_ShoppingCentre_4,lyr_HealthcareFacilities_5];
lyr_wards_1.set('fieldAliases', {'id': 'id', 'Councilor': 'Councilor', 'Ward': 'Ward', });
lyr_Schools_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Photopath': 'Photopath', 'Status': 'Status', 'Type': 'Type', });
lyr_PublicBuildings_3.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'PathPhoto': 'PathPhoto', 'Status': 'Status', });
lyr_ShoppingCentre_4.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'PhotoPath': 'PhotoPath', });
lyr_HealthcareFacilities_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Photopath': 'Photopath', });
lyr_wards_1.set('fieldImages', {'id': '', 'Councilor': '', 'Ward': '', });
lyr_Schools_2.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Photopath': 'ExternalResource', 'Status': 'TextEdit', 'Type': 'TextEdit', });
lyr_PublicBuildings_3.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'PathPhoto': 'ExternalResource', 'Status': 'TextEdit', });
lyr_ShoppingCentre_4.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'PhotoPath': 'TextEdit', });
lyr_HealthcareFacilities_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Photopath': 'ExternalResource', });
lyr_wards_1.set('fieldLabels', {'id': 'no label', 'Councilor': 'inline label - always visible', 'Ward': 'inline label - always visible', });
lyr_Schools_2.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'Photopath': 'inline label - always visible', 'Status': 'no label', 'Type': 'no label', });
lyr_PublicBuildings_3.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'PathPhoto': 'inline label - always visible', 'Status': 'inline label - always visible', });
lyr_ShoppingCentre_4.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'PhotoPath': 'no label', });
lyr_HealthcareFacilities_5.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - always visible', 'Photopath': 'no label', });
lyr_HealthcareFacilities_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});