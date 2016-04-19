jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"bootcamp/test/integration/NavigationJourneyPhone",
		"bootcamp/test/integration/NotFoundJourneyPhone",
		"bootcamp/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});

