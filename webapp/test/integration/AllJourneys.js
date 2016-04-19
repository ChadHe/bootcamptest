jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Jobs in the list
// * All 3 Jobs have at least one Job_Enroll

sap.ui.require([
	"sap/ui/test/Opa5",
	"bootcamp/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"bootcamp/test/integration/pages/App",
	"bootcamp/test/integration/pages/Browser",
	"bootcamp/test/integration/pages/Master",
	"bootcamp/test/integration/pages/Detail",
	"bootcamp/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "bootcamp.view."
	});

	sap.ui.require([
		"bootcamp/test/integration/MasterJourney",
		"bootcamp/test/integration/NavigationJourney",
		"bootcamp/test/integration/NotFoundJourney",
		"bootcamp/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});