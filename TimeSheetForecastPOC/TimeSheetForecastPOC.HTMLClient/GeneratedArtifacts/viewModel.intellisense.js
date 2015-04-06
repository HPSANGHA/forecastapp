/// <reference path="viewModel.js" />

(function (lightSwitchApplication) {

    var $element = document.createElement("div");

    lightSwitchApplication.AddEditAPPLICATION1.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAPPLICATION1
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditAPPLICATION1,
            data: lightSwitchApplication.AddEditAPPLICATION1,
            value: lightSwitchApplication.AddEditAPPLICATION1
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditAPPLICATION1,
            data: lightSwitchApplication.AddEditAPPLICATION1,
            value: lightSwitchApplication.APPLICATION1
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAPPLICATION1,
            data: lightSwitchApplication.APPLICATION1,
            value: lightSwitchApplication.APPLICATION1
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditAPPLICATION1,
            data: lightSwitchApplication.APPLICATION1,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditAPPLICATION1,
            data: lightSwitchApplication.APPLICATION1,
            value: lightSwitchApplication.APPLICATION1
        },
        REF_TECHNOLOGY: {
            _$class: msls.ContentItem,
            _$name: "REF_TECHNOLOGY",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditAPPLICATION1,
            data: lightSwitchApplication.APPLICATION1,
            value: lightSwitchApplication.REF_TECHNOLOGY
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "REF_TECHNOLOGY",
            screen: lightSwitchApplication.AddEditAPPLICATION1,
            data: lightSwitchApplication.REF_TECHNOLOGY,
            value: lightSwitchApplication.REF_TECHNOLOGY
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditAPPLICATION1
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditAPPLICATION1, {
        /// <field>
        /// Called when a new AddEditAPPLICATION1 screen is created.
        /// <br/>created(msls.application.AddEditAPPLICATION1 screen)
        /// </field>
        created: [lightSwitchApplication.AddEditAPPLICATION1],
        /// <field>
        /// Called before changes on an active AddEditAPPLICATION1 screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditAPPLICATION1 screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditAPPLICATION1],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditAPPLICATION1().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditAPPLICATION1().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditAPPLICATION1().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditAPPLICATION1().findContentItem("Name"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditAPPLICATION1().findContentItem("right"); }],
        /// <field>
        /// Called after the REF_TECHNOLOGY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_TECHNOLOGY_postRender: [$element, function () { return new lightSwitchApplication.AddEditAPPLICATION1().findContentItem("REF_TECHNOLOGY"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditAPPLICATION1().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.BrowseAPPLICATIONs.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseAPPLICATIONs
        },
        APPLICATION1List: {
            _$class: msls.ContentItem,
            _$name: "APPLICATION1List",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseAPPLICATIONs,
            data: lightSwitchApplication.BrowseAPPLICATIONs,
            value: lightSwitchApplication.BrowseAPPLICATIONs
        },
        APPLICATIONs: {
            _$class: msls.ContentItem,
            _$name: "APPLICATIONs",
            _$parentName: "APPLICATION1List",
            screen: lightSwitchApplication.BrowseAPPLICATIONs,
            data: lightSwitchApplication.BrowseAPPLICATIONs,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseAPPLICATIONs,
                _$entry: {
                    elementType: lightSwitchApplication.APPLICATION1
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "APPLICATIONs",
            screen: lightSwitchApplication.BrowseAPPLICATIONs,
            data: lightSwitchApplication.APPLICATION1,
            value: lightSwitchApplication.APPLICATION1
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseAPPLICATIONs,
            data: lightSwitchApplication.APPLICATION1,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseAPPLICATIONs,
            data: lightSwitchApplication.APPLICATION1,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseAPPLICATIONs,
            data: lightSwitchApplication.APPLICATION1,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseAPPLICATIONs
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseAPPLICATIONs, {
        /// <field>
        /// Called when a new BrowseAPPLICATIONs screen is created.
        /// <br/>created(msls.application.BrowseAPPLICATIONs screen)
        /// </field>
        created: [lightSwitchApplication.BrowseAPPLICATIONs],
        /// <field>
        /// Called before changes on an active BrowseAPPLICATIONs screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseAPPLICATIONs screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseAPPLICATIONs],
        /// <field>
        /// Called after the APPLICATION1List content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        APPLICATION1List_postRender: [$element, function () { return new lightSwitchApplication.BrowseAPPLICATIONs().findContentItem("APPLICATION1List"); }],
        /// <field>
        /// Called after the APPLICATIONs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        APPLICATIONs_postRender: [$element, function () { return new lightSwitchApplication.BrowseAPPLICATIONs().findContentItem("APPLICATIONs"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseAPPLICATIONs().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseAPPLICATIONs().findContentItem("Name"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseAPPLICATIONs().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseAPPLICATIONs().findContentItem("CreatedDate"); }]
    });

    lightSwitchApplication.BrowseTPFilterReport1.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTPFilterReport1
        },
        GenerateResourceReportList: {
            _$class: msls.ContentItem,
            _$name: "GenerateResourceReportList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseTPFilterReport1,
            data: lightSwitchApplication.BrowseTPFilterReport1,
            value: lightSwitchApplication.BrowseTPFilterReport1
        },
        GenerateResourceReportTP: {
            _$class: msls.ContentItem,
            _$name: "GenerateResourceReportTP",
            _$parentName: "GenerateResourceReportList",
            screen: lightSwitchApplication.BrowseTPFilterReport1,
            data: lightSwitchApplication.BrowseTPFilterReport1,
            value: String
        },
        TPFilterReport: {
            _$class: msls.ContentItem,
            _$name: "TPFilterReport",
            _$parentName: "GenerateResourceReportList",
            screen: lightSwitchApplication.BrowseTPFilterReport1,
            data: lightSwitchApplication.BrowseTPFilterReport1,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseTPFilterReport1,
                _$entry: {
                    elementType: lightSwitchApplication.GenerateResourceReport
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "TPFilterReport",
            screen: lightSwitchApplication.BrowseTPFilterReport1,
            data: lightSwitchApplication.GenerateResourceReport,
            value: lightSwitchApplication.GenerateResourceReport
        },
        RESOURCE_NAME: {
            _$class: msls.ContentItem,
            _$name: "RESOURCE_NAME",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTPFilterReport1,
            data: lightSwitchApplication.GenerateResourceReport,
            value: String
        },
        TP: {
            _$class: msls.ContentItem,
            _$name: "TP",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTPFilterReport1,
            data: lightSwitchApplication.GenerateResourceReport,
            value: String
        },
        PLANNED_EFFORT: {
            _$class: msls.ContentItem,
            _$name: "PLANNED_EFFORT",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTPFilterReport1,
            data: lightSwitchApplication.GenerateResourceReport,
            value: Number
        },
        ACTUAL_EFFORT: {
            _$class: msls.ContentItem,
            _$name: "ACTUAL_EFFORT",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTPFilterReport1,
            data: lightSwitchApplication.GenerateResourceReport,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTPFilterReport1
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseTPFilterReport1, {
        /// <field>
        /// Called when a new BrowseTPFilterReport1 screen is created.
        /// <br/>created(msls.application.BrowseTPFilterReport1 screen)
        /// </field>
        created: [lightSwitchApplication.BrowseTPFilterReport1],
        /// <field>
        /// Called before changes on an active BrowseTPFilterReport1 screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseTPFilterReport1 screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseTPFilterReport1],
        /// <field>
        /// Called after the GenerateResourceReportList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GenerateResourceReportList_postRender: [$element, function () { return new lightSwitchApplication.BrowseTPFilterReport1().findContentItem("GenerateResourceReportList"); }],
        /// <field>
        /// Called after the GenerateResourceReportTP content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GenerateResourceReportTP_postRender: [$element, function () { return new lightSwitchApplication.BrowseTPFilterReport1().findContentItem("GenerateResourceReportTP"); }],
        /// <field>
        /// Called after the TPFilterReport content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TPFilterReport_postRender: [$element, function () { return new lightSwitchApplication.BrowseTPFilterReport1().findContentItem("TPFilterReport"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseTPFilterReport1().findContentItem("rows"); }],
        /// <field>
        /// Called after the RESOURCE_NAME content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RESOURCE_NAME_postRender: [$element, function () { return new lightSwitchApplication.BrowseTPFilterReport1().findContentItem("RESOURCE_NAME"); }],
        /// <field>
        /// Called after the TP content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_postRender: [$element, function () { return new lightSwitchApplication.BrowseTPFilterReport1().findContentItem("TP"); }],
        /// <field>
        /// Called after the PLANNED_EFFORT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PLANNED_EFFORT_postRender: [$element, function () { return new lightSwitchApplication.BrowseTPFilterReport1().findContentItem("PLANNED_EFFORT"); }],
        /// <field>
        /// Called after the ACTUAL_EFFORT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ACTUAL_EFFORT_postRender: [$element, function () { return new lightSwitchApplication.BrowseTPFilterReport1().findContentItem("ACTUAL_EFFORT"); }]
    });

    lightSwitchApplication.ResourceNameFilterChart.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ResourceNameFilterChart
        },
        TP_TIME_ENTRYList: {
            _$class: msls.ContentItem,
            _$name: "TP_TIME_ENTRYList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.ResourceNameFilterChart,
            data: lightSwitchApplication.ResourceNameFilterChart,
            value: lightSwitchApplication.ResourceNameFilterChart
        },
        TP_TIME_ENTRYResourceName: {
            _$class: msls.ContentItem,
            _$name: "TP_TIME_ENTRYResourceName",
            _$parentName: "TP_TIME_ENTRYList",
            screen: lightSwitchApplication.ResourceNameFilterChart,
            data: lightSwitchApplication.ResourceNameFilterChart,
            value: String
        },
        WijmoChart: {
            _$class: msls.ContentItem,
            _$name: "WijmoChart",
            _$parentName: "TP_TIME_ENTRYList",
            screen: lightSwitchApplication.ResourceNameFilterChart,
            data: lightSwitchApplication.ResourceNameFilterChart,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.ResourceNameFilterChart,
                _$entry: {
                    elementType: lightSwitchApplication.TP_TIME_ENTRY
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "WijmoChart",
            screen: lightSwitchApplication.ResourceNameFilterChart,
            data: lightSwitchApplication.TP_TIME_ENTRY,
            value: lightSwitchApplication.TP_TIME_ENTRY
        },
        c_Date: {
            _$class: msls.ContentItem,
            _$name: "c_Date",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.ResourceNameFilterChart,
            data: lightSwitchApplication.TP_TIME_ENTRY,
            value: Date
        },
        PlannedEffort: {
            _$class: msls.ContentItem,
            _$name: "PlannedEffort",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.ResourceNameFilterChart,
            data: lightSwitchApplication.TP_TIME_ENTRY,
            value: Number
        },
        ActualEffort: {
            _$class: msls.ContentItem,
            _$name: "ActualEffort",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.ResourceNameFilterChart,
            data: lightSwitchApplication.TP_TIME_ENTRY,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.ResourceNameFilterChart
        }
    };

    msls._addEntryPoints(lightSwitchApplication.ResourceNameFilterChart, {
        /// <field>
        /// Called when a new ResourceNameFilterChart screen is created.
        /// <br/>created(msls.application.ResourceNameFilterChart screen)
        /// </field>
        created: [lightSwitchApplication.ResourceNameFilterChart],
        /// <field>
        /// Called before changes on an active ResourceNameFilterChart screen are applied.
        /// <br/>beforeApplyChanges(msls.application.ResourceNameFilterChart screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.ResourceNameFilterChart],
        /// <field>
        /// Called after the TP_TIME_ENTRYList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_TIME_ENTRYList_postRender: [$element, function () { return new lightSwitchApplication.ResourceNameFilterChart().findContentItem("TP_TIME_ENTRYList"); }],
        /// <field>
        /// Called after the TP_TIME_ENTRYResourceName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_TIME_ENTRYResourceName_postRender: [$element, function () { return new lightSwitchApplication.ResourceNameFilterChart().findContentItem("TP_TIME_ENTRYResourceName"); }],
        /// <field>
        /// Called after the WijmoChart content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WijmoChart_postRender: [$element, function () { return new lightSwitchApplication.ResourceNameFilterChart().findContentItem("WijmoChart"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.ResourceNameFilterChart().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the c_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        c_Date_postRender: [$element, function () { return new lightSwitchApplication.ResourceNameFilterChart().findContentItem("c_Date"); }],
        /// <field>
        /// Called after the PlannedEffort content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedEffort_postRender: [$element, function () { return new lightSwitchApplication.ResourceNameFilterChart().findContentItem("PlannedEffort"); }],
        /// <field>
        /// Called after the ActualEffort content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActualEffort_postRender: [$element, function () { return new lightSwitchApplication.ResourceNameFilterChart().findContentItem("ActualEffort"); }]
    });

    lightSwitchApplication.TPFilterReportChart.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.TPFilterReportChart
        },
        GenerateResourceReportList: {
            _$class: msls.ContentItem,
            _$name: "GenerateResourceReportList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.TPFilterReportChart,
            value: lightSwitchApplication.TPFilterReportChart
        },
        GenerateResourceReportTP: {
            _$class: msls.ContentItem,
            _$name: "GenerateResourceReportTP",
            _$parentName: "GenerateResourceReportList",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.TPFilterReportChart,
            value: String
        },
        WijmoChart: {
            _$class: msls.ContentItem,
            _$name: "WijmoChart",
            _$parentName: "GenerateResourceReportList",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.TPFilterReportChart,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.TPFilterReportChart,
                _$entry: {
                    elementType: lightSwitchApplication.GenerateResourceReport
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "WijmoChart",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: lightSwitchApplication.GenerateResourceReport
        },
        RESOURCE_NAME: {
            _$class: msls.ContentItem,
            _$name: "RESOURCE_NAME",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: String
        },
        PLANNED_EFFORT: {
            _$class: msls.ContentItem,
            _$name: "PLANNED_EFFORT",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: Number
        },
        ACTUAL_EFFORT: {
            _$class: msls.ContentItem,
            _$name: "ACTUAL_EFFORT",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: Number
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "GenerateResourceReportList",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.TPFilterReportChart,
            value: lightSwitchApplication.TPFilterReportChart
        },
        TPFilterReport_selectedItem: {
            _$class: msls.ContentItem,
            _$name: "TPFilterReport_selectedItem",
            _$parentName: "Group",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.TPFilterReportChart,
            value: lightSwitchApplication.GenerateResourceReport
        },
        RESOURCE_NAME1: {
            _$class: msls.ContentItem,
            _$name: "RESOURCE_NAME1",
            _$parentName: "TPFilterReport_selectedItem",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: String
        },
        ROLE: {
            _$class: msls.ContentItem,
            _$name: "ROLE",
            _$parentName: "TPFilterReport_selectedItem",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: String
        },
        LOCATION: {
            _$class: msls.ContentItem,
            _$name: "LOCATION",
            _$parentName: "TPFilterReport_selectedItem",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: String
        },
        PLANNED_EFFORT1: {
            _$class: msls.ContentItem,
            _$name: "PLANNED_EFFORT1",
            _$parentName: "TPFilterReport_selectedItem",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: Number
        },
        TP: {
            _$class: msls.ContentItem,
            _$name: "TP",
            _$parentName: "TPFilterReport_selectedItem",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: String
        },
        Percentage: {
            _$class: msls.ContentItem,
            _$name: "Percentage",
            _$parentName: "TPFilterReport_selectedItem",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: Number
        },
        PlannedBuildStartDate: {
            _$class: msls.ContentItem,
            _$name: "PlannedBuildStartDate",
            _$parentName: "TPFilterReport_selectedItem",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: Date
        },
        PlannedBuildEndDate: {
            _$class: msls.ContentItem,
            _$name: "PlannedBuildEndDate",
            _$parentName: "TPFilterReport_selectedItem",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: Date
        },
        PlannedTestStartDate: {
            _$class: msls.ContentItem,
            _$name: "PlannedTestStartDate",
            _$parentName: "TPFilterReport_selectedItem",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: Date
        },
        PlannedTestEndDate: {
            _$class: msls.ContentItem,
            _$name: "PlannedTestEndDate",
            _$parentName: "TPFilterReport_selectedItem",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: Date
        },
        PlannedImplementationStartDate: {
            _$class: msls.ContentItem,
            _$name: "PlannedImplementationStartDate",
            _$parentName: "TPFilterReport_selectedItem",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: Date
        },
        PlannedImplementationEndDate: {
            _$class: msls.ContentItem,
            _$name: "PlannedImplementationEndDate",
            _$parentName: "TPFilterReport_selectedItem",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: Date
        },
        PlannedPostImplementationStartDate: {
            _$class: msls.ContentItem,
            _$name: "PlannedPostImplementationStartDate",
            _$parentName: "TPFilterReport_selectedItem",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: Date
        },
        PlannedPostImplementationEndDate: {
            _$class: msls.ContentItem,
            _$name: "PlannedPostImplementationEndDate",
            _$parentName: "TPFilterReport_selectedItem",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: Date
        },
        TPFilterReport_selectedItem1: {
            _$class: msls.ContentItem,
            _$name: "TPFilterReport_selectedItem1",
            _$parentName: "Group",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.TPFilterReportChart,
            value: lightSwitchApplication.GenerateResourceReport
        },
        ActualBuildStartDate1: {
            _$class: msls.ContentItem,
            _$name: "ActualBuildStartDate1",
            _$parentName: "TPFilterReport_selectedItem1",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: Date
        },
        ActualBuildEndDate1: {
            _$class: msls.ContentItem,
            _$name: "ActualBuildEndDate1",
            _$parentName: "TPFilterReport_selectedItem1",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: Date
        },
        ActualTestStartDate1: {
            _$class: msls.ContentItem,
            _$name: "ActualTestStartDate1",
            _$parentName: "TPFilterReport_selectedItem1",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: Date
        },
        ActualTestEndDate1: {
            _$class: msls.ContentItem,
            _$name: "ActualTestEndDate1",
            _$parentName: "TPFilterReport_selectedItem1",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: Date
        },
        ActualImplementationStartDate1: {
            _$class: msls.ContentItem,
            _$name: "ActualImplementationStartDate1",
            _$parentName: "TPFilterReport_selectedItem1",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: Date
        },
        ActualImplementationEndDate1: {
            _$class: msls.ContentItem,
            _$name: "ActualImplementationEndDate1",
            _$parentName: "TPFilterReport_selectedItem1",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: Date
        },
        ActualPostImplementationStartDate1: {
            _$class: msls.ContentItem,
            _$name: "ActualPostImplementationStartDate1",
            _$parentName: "TPFilterReport_selectedItem1",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: Date
        },
        ActualPostImplementationEndDate1: {
            _$class: msls.ContentItem,
            _$name: "ActualPostImplementationEndDate1",
            _$parentName: "TPFilterReport_selectedItem1",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: Date
        },
        ACTUAL_EFFORT2: {
            _$class: msls.ContentItem,
            _$name: "ACTUAL_EFFORT2",
            _$parentName: "TPFilterReport_selectedItem1",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: Number
        },
        AllocationBuild1: {
            _$class: msls.ContentItem,
            _$name: "AllocationBuild1",
            _$parentName: "TPFilterReport_selectedItem1",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: Number
        },
        AllocationTest1: {
            _$class: msls.ContentItem,
            _$name: "AllocationTest1",
            _$parentName: "TPFilterReport_selectedItem1",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: Number
        },
        AllocationImplementation1: {
            _$class: msls.ContentItem,
            _$name: "AllocationImplementation1",
            _$parentName: "TPFilterReport_selectedItem1",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: Number
        },
        AllocationPostImplementation1: {
            _$class: msls.ContentItem,
            _$name: "AllocationPostImplementation1",
            _$parentName: "TPFilterReport_selectedItem1",
            screen: lightSwitchApplication.TPFilterReportChart,
            data: lightSwitchApplication.GenerateResourceReport,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.TPFilterReportChart
        }
    };

    msls._addEntryPoints(lightSwitchApplication.TPFilterReportChart, {
        /// <field>
        /// Called when a new TPFilterReportChart screen is created.
        /// <br/>created(msls.application.TPFilterReportChart screen)
        /// </field>
        created: [lightSwitchApplication.TPFilterReportChart],
        /// <field>
        /// Called before changes on an active TPFilterReportChart screen are applied.
        /// <br/>beforeApplyChanges(msls.application.TPFilterReportChart screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.TPFilterReportChart],
        /// <field>
        /// Called after the GenerateResourceReportList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GenerateResourceReportList_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("GenerateResourceReportList"); }],
        /// <field>
        /// Called after the GenerateResourceReportTP content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        GenerateResourceReportTP_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("GenerateResourceReportTP"); }],
        /// <field>
        /// Called after the WijmoChart content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WijmoChart_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("WijmoChart"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the RESOURCE_NAME content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RESOURCE_NAME_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("RESOURCE_NAME"); }],
        /// <field>
        /// Called after the PLANNED_EFFORT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PLANNED_EFFORT_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("PLANNED_EFFORT"); }],
        /// <field>
        /// Called after the ACTUAL_EFFORT content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ACTUAL_EFFORT_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("ACTUAL_EFFORT"); }],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("Group"); }],
        /// <field>
        /// Called after the TPFilterReport_selectedItem content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TPFilterReport_selectedItem_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("TPFilterReport_selectedItem"); }],
        /// <field>
        /// Called after the RESOURCE_NAME1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RESOURCE_NAME1_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("RESOURCE_NAME1"); }],
        /// <field>
        /// Called after the ROLE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ROLE_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("ROLE"); }],
        /// <field>
        /// Called after the LOCATION content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        LOCATION_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("LOCATION"); }],
        /// <field>
        /// Called after the PLANNED_EFFORT1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PLANNED_EFFORT1_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("PLANNED_EFFORT1"); }],
        /// <field>
        /// Called after the TP content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("TP"); }],
        /// <field>
        /// Called after the Percentage content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Percentage_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("Percentage"); }],
        /// <field>
        /// Called after the PlannedBuildStartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedBuildStartDate_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("PlannedBuildStartDate"); }],
        /// <field>
        /// Called after the PlannedBuildEndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedBuildEndDate_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("PlannedBuildEndDate"); }],
        /// <field>
        /// Called after the PlannedTestStartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedTestStartDate_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("PlannedTestStartDate"); }],
        /// <field>
        /// Called after the PlannedTestEndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedTestEndDate_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("PlannedTestEndDate"); }],
        /// <field>
        /// Called after the PlannedImplementationStartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedImplementationStartDate_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("PlannedImplementationStartDate"); }],
        /// <field>
        /// Called after the PlannedImplementationEndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedImplementationEndDate_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("PlannedImplementationEndDate"); }],
        /// <field>
        /// Called after the PlannedPostImplementationStartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedPostImplementationStartDate_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("PlannedPostImplementationStartDate"); }],
        /// <field>
        /// Called after the PlannedPostImplementationEndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedPostImplementationEndDate_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("PlannedPostImplementationEndDate"); }],
        /// <field>
        /// Called after the TPFilterReport_selectedItem1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TPFilterReport_selectedItem1_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("TPFilterReport_selectedItem1"); }],
        /// <field>
        /// Called after the ActualBuildStartDate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActualBuildStartDate1_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("ActualBuildStartDate1"); }],
        /// <field>
        /// Called after the ActualBuildEndDate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActualBuildEndDate1_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("ActualBuildEndDate1"); }],
        /// <field>
        /// Called after the ActualTestStartDate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActualTestStartDate1_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("ActualTestStartDate1"); }],
        /// <field>
        /// Called after the ActualTestEndDate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActualTestEndDate1_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("ActualTestEndDate1"); }],
        /// <field>
        /// Called after the ActualImplementationStartDate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActualImplementationStartDate1_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("ActualImplementationStartDate1"); }],
        /// <field>
        /// Called after the ActualImplementationEndDate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActualImplementationEndDate1_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("ActualImplementationEndDate1"); }],
        /// <field>
        /// Called after the ActualPostImplementationStartDate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActualPostImplementationStartDate1_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("ActualPostImplementationStartDate1"); }],
        /// <field>
        /// Called after the ActualPostImplementationEndDate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActualPostImplementationEndDate1_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("ActualPostImplementationEndDate1"); }],
        /// <field>
        /// Called after the ACTUAL_EFFORT2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ACTUAL_EFFORT2_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("ACTUAL_EFFORT2"); }],
        /// <field>
        /// Called after the AllocationBuild1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AllocationBuild1_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("AllocationBuild1"); }],
        /// <field>
        /// Called after the AllocationTest1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AllocationTest1_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("AllocationTest1"); }],
        /// <field>
        /// Called after the AllocationImplementation1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AllocationImplementation1_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("AllocationImplementation1"); }],
        /// <field>
        /// Called after the AllocationPostImplementation1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AllocationPostImplementation1_postRender: [$element, function () { return new lightSwitchApplication.TPFilterReportChart().findContentItem("AllocationPostImplementation1"); }]
    });

    lightSwitchApplication.Home.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        ScreenContent: {
            _$class: msls.ContentItem,
            _$name: "ScreenContent",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home,
            data: lightSwitchApplication.Home,
            value: lightSwitchApplication.Home
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Home, {
        /// <field>
        /// Called when a new Home screen is created.
        /// <br/>created(msls.application.Home screen)
        /// </field>
        created: [lightSwitchApplication.Home],
        /// <field>
        /// Called before changes on an active Home screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Home screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Home],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Home().findContentItem("Group"); }],
        /// <field>
        /// Called to render the ScreenContent content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ScreenContent_render: [$element, function () { return new lightSwitchApplication.Home().findContentItem("ScreenContent"); }]
    });

    lightSwitchApplication.Home_POC.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home_POC
        },
        Group: {
            _$class: msls.ContentItem,
            _$name: "Group",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.Home_POC,
            data: lightSwitchApplication.Home_POC,
            value: lightSwitchApplication.Home_POC
        },
        ShowBrowseTP_APPLICATIONs: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseTP_APPLICATIONs",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home_POC
        },
        ShowBrowseTPs: {
            _$class: msls.ContentItem,
            _$name: "ShowBrowseTPs",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home_POC
        },
        one: {
            _$class: msls.ContentItem,
            _$name: "one",
            _$parentName: "Group",
            screen: lightSwitchApplication.Home_POC,
            data: lightSwitchApplication.Home_POC,
            value: lightSwitchApplication.Home_POC
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.Home_POC
        }
    };

    msls._addEntryPoints(lightSwitchApplication.Home_POC, {
        /// <field>
        /// Called when a new Home_POC screen is created.
        /// <br/>created(msls.application.Home_POC screen)
        /// </field>
        created: [lightSwitchApplication.Home_POC],
        /// <field>
        /// Called before changes on an active Home_POC screen are applied.
        /// <br/>beforeApplyChanges(msls.application.Home_POC screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.Home_POC],
        /// <field>
        /// Called after the Group content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Group_postRender: [$element, function () { return new lightSwitchApplication.Home_POC().findContentItem("Group"); }],
        /// <field>
        /// Called after the ShowBrowseTP_APPLICATIONs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseTP_APPLICATIONs_postRender: [$element, function () { return new lightSwitchApplication.Home_POC().findContentItem("ShowBrowseTP_APPLICATIONs"); }],
        /// <field>
        /// Called after the ShowBrowseTPs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ShowBrowseTPs_postRender: [$element, function () { return new lightSwitchApplication.Home_POC().findContentItem("ShowBrowseTPs"); }],
        /// <field>
        /// Called to render the one content item.
        /// <br/>render(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        one_render: [$element, function () { return new lightSwitchApplication.Home_POC().findContentItem("one"); }]
    });

    lightSwitchApplication.AddEditREF_APPLICATION_TYPE.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditREF_APPLICATION_TYPE
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditREF_APPLICATION_TYPE,
            data: lightSwitchApplication.AddEditREF_APPLICATION_TYPE,
            value: lightSwitchApplication.AddEditREF_APPLICATION_TYPE
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditREF_APPLICATION_TYPE,
            data: lightSwitchApplication.AddEditREF_APPLICATION_TYPE,
            value: lightSwitchApplication.REF_APPLICATION_TYPE
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditREF_APPLICATION_TYPE,
            data: lightSwitchApplication.REF_APPLICATION_TYPE,
            value: lightSwitchApplication.REF_APPLICATION_TYPE
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditREF_APPLICATION_TYPE,
            data: lightSwitchApplication.REF_APPLICATION_TYPE,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditREF_APPLICATION_TYPE,
            data: lightSwitchApplication.REF_APPLICATION_TYPE,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditREF_APPLICATION_TYPE,
            data: lightSwitchApplication.REF_APPLICATION_TYPE,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditREF_APPLICATION_TYPE,
            data: lightSwitchApplication.REF_APPLICATION_TYPE,
            value: lightSwitchApplication.REF_APPLICATION_TYPE
        },
        CreatedTime: {
            _$class: msls.ContentItem,
            _$name: "CreatedTime",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditREF_APPLICATION_TYPE,
            data: lightSwitchApplication.REF_APPLICATION_TYPE,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditREF_APPLICATION_TYPE,
            data: lightSwitchApplication.REF_APPLICATION_TYPE,
            value: String
        },
        ModifiedDate: {
            _$class: msls.ContentItem,
            _$name: "ModifiedDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditREF_APPLICATION_TYPE,
            data: lightSwitchApplication.REF_APPLICATION_TYPE,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditREF_APPLICATION_TYPE
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditREF_APPLICATION_TYPE, {
        /// <field>
        /// Called when a new AddEditREF_APPLICATION_TYPE screen is created.
        /// <br/>created(msls.application.AddEditREF_APPLICATION_TYPE screen)
        /// </field>
        created: [lightSwitchApplication.AddEditREF_APPLICATION_TYPE],
        /// <field>
        /// Called before changes on an active AddEditREF_APPLICATION_TYPE screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditREF_APPLICATION_TYPE screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditREF_APPLICATION_TYPE],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_APPLICATION_TYPE().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_APPLICATION_TYPE().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_APPLICATION_TYPE().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_APPLICATION_TYPE().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_APPLICATION_TYPE().findContentItem("Description"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_APPLICATION_TYPE().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_APPLICATION_TYPE().findContentItem("right"); }],
        /// <field>
        /// Called after the CreatedTime content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedTime_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_APPLICATION_TYPE().findContentItem("CreatedTime"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_APPLICATION_TYPE().findContentItem("ModifiedBy"); }],
        /// <field>
        /// Called after the ModifiedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_APPLICATION_TYPE().findContentItem("ModifiedDate"); }]
    });

    lightSwitchApplication.BrowseREF_APPLICATION_TYPEs.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseREF_APPLICATION_TYPEs
        },
        REF_APPLICATION_TYPEList: {
            _$class: msls.ContentItem,
            _$name: "REF_APPLICATION_TYPEList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseREF_APPLICATION_TYPEs,
            data: lightSwitchApplication.BrowseREF_APPLICATION_TYPEs,
            value: lightSwitchApplication.BrowseREF_APPLICATION_TYPEs
        },
        REF_APPLICATION_TYPEs: {
            _$class: msls.ContentItem,
            _$name: "REF_APPLICATION_TYPEs",
            _$parentName: "REF_APPLICATION_TYPEList",
            screen: lightSwitchApplication.BrowseREF_APPLICATION_TYPEs,
            data: lightSwitchApplication.BrowseREF_APPLICATION_TYPEs,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseREF_APPLICATION_TYPEs,
                _$entry: {
                    elementType: lightSwitchApplication.REF_APPLICATION_TYPE
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "REF_APPLICATION_TYPEs",
            screen: lightSwitchApplication.BrowseREF_APPLICATION_TYPEs,
            data: lightSwitchApplication.REF_APPLICATION_TYPE,
            value: lightSwitchApplication.REF_APPLICATION_TYPE
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_APPLICATION_TYPEs,
            data: lightSwitchApplication.REF_APPLICATION_TYPE,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_APPLICATION_TYPEs,
            data: lightSwitchApplication.REF_APPLICATION_TYPE,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_APPLICATION_TYPEs,
            data: lightSwitchApplication.REF_APPLICATION_TYPE,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseREF_APPLICATION_TYPEs
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseREF_APPLICATION_TYPEs, {
        /// <field>
        /// Called when a new BrowseREF_APPLICATION_TYPEs screen is created.
        /// <br/>created(msls.application.BrowseREF_APPLICATION_TYPEs screen)
        /// </field>
        created: [lightSwitchApplication.BrowseREF_APPLICATION_TYPEs],
        /// <field>
        /// Called before changes on an active BrowseREF_APPLICATION_TYPEs screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseREF_APPLICATION_TYPEs screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseREF_APPLICATION_TYPEs],
        /// <field>
        /// Called after the REF_APPLICATION_TYPEList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_APPLICATION_TYPEList_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_APPLICATION_TYPEs().findContentItem("REF_APPLICATION_TYPEList"); }],
        /// <field>
        /// Called after the REF_APPLICATION_TYPEs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_APPLICATION_TYPEs_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_APPLICATION_TYPEs().findContentItem("REF_APPLICATION_TYPEs"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_APPLICATION_TYPEs().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_APPLICATION_TYPEs().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_APPLICATION_TYPEs().findContentItem("Description"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_APPLICATION_TYPEs().findContentItem("CreatedBy"); }]
    });

    lightSwitchApplication.AddEditREF_COMPLEXITY.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditREF_COMPLEXITY
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditREF_COMPLEXITY,
            data: lightSwitchApplication.AddEditREF_COMPLEXITY,
            value: lightSwitchApplication.AddEditREF_COMPLEXITY
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditREF_COMPLEXITY,
            data: lightSwitchApplication.AddEditREF_COMPLEXITY,
            value: lightSwitchApplication.REF_COMPLEXITY
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditREF_COMPLEXITY,
            data: lightSwitchApplication.REF_COMPLEXITY,
            value: lightSwitchApplication.REF_COMPLEXITY
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditREF_COMPLEXITY,
            data: lightSwitchApplication.REF_COMPLEXITY,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditREF_COMPLEXITY,
            data: lightSwitchApplication.REF_COMPLEXITY,
            value: lightSwitchApplication.REF_COMPLEXITY
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditREF_COMPLEXITY
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditREF_COMPLEXITY, {
        /// <field>
        /// Called when a new AddEditREF_COMPLEXITY screen is created.
        /// <br/>created(msls.application.AddEditREF_COMPLEXITY screen)
        /// </field>
        created: [lightSwitchApplication.AddEditREF_COMPLEXITY],
        /// <field>
        /// Called before changes on an active AddEditREF_COMPLEXITY screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditREF_COMPLEXITY screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditREF_COMPLEXITY],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_COMPLEXITY().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_COMPLEXITY().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_COMPLEXITY().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_COMPLEXITY().findContentItem("Name"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_COMPLEXITY().findContentItem("right"); }]
    });

    lightSwitchApplication.BrowseREF_COMPLEXITies.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseREF_COMPLEXITies
        },
        REF_COMPLEXITYList: {
            _$class: msls.ContentItem,
            _$name: "REF_COMPLEXITYList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseREF_COMPLEXITies,
            data: lightSwitchApplication.BrowseREF_COMPLEXITies,
            value: lightSwitchApplication.BrowseREF_COMPLEXITies
        },
        REF_COMPLEXITies: {
            _$class: msls.ContentItem,
            _$name: "REF_COMPLEXITies",
            _$parentName: "REF_COMPLEXITYList",
            screen: lightSwitchApplication.BrowseREF_COMPLEXITies,
            data: lightSwitchApplication.BrowseREF_COMPLEXITies,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseREF_COMPLEXITies,
                _$entry: {
                    elementType: lightSwitchApplication.REF_COMPLEXITY
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "REF_COMPLEXITies",
            screen: lightSwitchApplication.BrowseREF_COMPLEXITies,
            data: lightSwitchApplication.REF_COMPLEXITY,
            value: lightSwitchApplication.REF_COMPLEXITY
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_COMPLEXITies,
            data: lightSwitchApplication.REF_COMPLEXITY,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_COMPLEXITies,
            data: lightSwitchApplication.REF_COMPLEXITY,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_COMPLEXITies,
            data: lightSwitchApplication.REF_COMPLEXITY,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseREF_COMPLEXITies
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseREF_COMPLEXITies, {
        /// <field>
        /// Called when a new BrowseREF_COMPLEXITies screen is created.
        /// <br/>created(msls.application.BrowseREF_COMPLEXITies screen)
        /// </field>
        created: [lightSwitchApplication.BrowseREF_COMPLEXITies],
        /// <field>
        /// Called before changes on an active BrowseREF_COMPLEXITies screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseREF_COMPLEXITies screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseREF_COMPLEXITies],
        /// <field>
        /// Called after the REF_COMPLEXITYList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_COMPLEXITYList_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_COMPLEXITies().findContentItem("REF_COMPLEXITYList"); }],
        /// <field>
        /// Called after the REF_COMPLEXITies content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_COMPLEXITies_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_COMPLEXITies().findContentItem("REF_COMPLEXITies"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_COMPLEXITies().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_COMPLEXITies().findContentItem("Name"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_COMPLEXITies().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_COMPLEXITies().findContentItem("CreatedDate"); }]
    });

    lightSwitchApplication.AddEditREF_DOCUMENT_TYPE.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditREF_DOCUMENT_TYPE
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditREF_DOCUMENT_TYPE,
            data: lightSwitchApplication.AddEditREF_DOCUMENT_TYPE,
            value: lightSwitchApplication.AddEditREF_DOCUMENT_TYPE
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditREF_DOCUMENT_TYPE,
            data: lightSwitchApplication.AddEditREF_DOCUMENT_TYPE,
            value: lightSwitchApplication.REF_DOCUMENT_TYPE
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditREF_DOCUMENT_TYPE,
            data: lightSwitchApplication.REF_DOCUMENT_TYPE,
            value: lightSwitchApplication.REF_DOCUMENT_TYPE
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditREF_DOCUMENT_TYPE,
            data: lightSwitchApplication.REF_DOCUMENT_TYPE,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditREF_DOCUMENT_TYPE,
            data: lightSwitchApplication.REF_DOCUMENT_TYPE,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditREF_DOCUMENT_TYPE,
            data: lightSwitchApplication.REF_DOCUMENT_TYPE,
            value: lightSwitchApplication.REF_DOCUMENT_TYPE
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditREF_DOCUMENT_TYPE
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditREF_DOCUMENT_TYPE, {
        /// <field>
        /// Called when a new AddEditREF_DOCUMENT_TYPE screen is created.
        /// <br/>created(msls.application.AddEditREF_DOCUMENT_TYPE screen)
        /// </field>
        created: [lightSwitchApplication.AddEditREF_DOCUMENT_TYPE],
        /// <field>
        /// Called before changes on an active AddEditREF_DOCUMENT_TYPE screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditREF_DOCUMENT_TYPE screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditREF_DOCUMENT_TYPE],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_DOCUMENT_TYPE().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_DOCUMENT_TYPE().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_DOCUMENT_TYPE().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_DOCUMENT_TYPE().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_DOCUMENT_TYPE().findContentItem("Description"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_DOCUMENT_TYPE().findContentItem("right"); }]
    });

    lightSwitchApplication.BrowseREF_DOCUMENT_TYPEs.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseREF_DOCUMENT_TYPEs
        },
        REF_DOCUMENT_TYPEList: {
            _$class: msls.ContentItem,
            _$name: "REF_DOCUMENT_TYPEList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseREF_DOCUMENT_TYPEs,
            data: lightSwitchApplication.BrowseREF_DOCUMENT_TYPEs,
            value: lightSwitchApplication.BrowseREF_DOCUMENT_TYPEs
        },
        REF_DOCUMENT_TYPEs: {
            _$class: msls.ContentItem,
            _$name: "REF_DOCUMENT_TYPEs",
            _$parentName: "REF_DOCUMENT_TYPEList",
            screen: lightSwitchApplication.BrowseREF_DOCUMENT_TYPEs,
            data: lightSwitchApplication.BrowseREF_DOCUMENT_TYPEs,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseREF_DOCUMENT_TYPEs,
                _$entry: {
                    elementType: lightSwitchApplication.REF_DOCUMENT_TYPE
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "REF_DOCUMENT_TYPEs",
            screen: lightSwitchApplication.BrowseREF_DOCUMENT_TYPEs,
            data: lightSwitchApplication.REF_DOCUMENT_TYPE,
            value: lightSwitchApplication.REF_DOCUMENT_TYPE
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_DOCUMENT_TYPEs,
            data: lightSwitchApplication.REF_DOCUMENT_TYPE,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_DOCUMENT_TYPEs,
            data: lightSwitchApplication.REF_DOCUMENT_TYPE,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_DOCUMENT_TYPEs,
            data: lightSwitchApplication.REF_DOCUMENT_TYPE,
            value: Date
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_DOCUMENT_TYPEs,
            data: lightSwitchApplication.REF_DOCUMENT_TYPE,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseREF_DOCUMENT_TYPEs
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseREF_DOCUMENT_TYPEs, {
        /// <field>
        /// Called when a new BrowseREF_DOCUMENT_TYPEs screen is created.
        /// <br/>created(msls.application.BrowseREF_DOCUMENT_TYPEs screen)
        /// </field>
        created: [lightSwitchApplication.BrowseREF_DOCUMENT_TYPEs],
        /// <field>
        /// Called before changes on an active BrowseREF_DOCUMENT_TYPEs screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseREF_DOCUMENT_TYPEs screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseREF_DOCUMENT_TYPEs],
        /// <field>
        /// Called after the REF_DOCUMENT_TYPEList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_DOCUMENT_TYPEList_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_DOCUMENT_TYPEs().findContentItem("REF_DOCUMENT_TYPEList"); }],
        /// <field>
        /// Called after the REF_DOCUMENT_TYPEs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_DOCUMENT_TYPEs_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_DOCUMENT_TYPEs().findContentItem("REF_DOCUMENT_TYPEs"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_DOCUMENT_TYPEs().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_DOCUMENT_TYPEs().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_DOCUMENT_TYPEs().findContentItem("Description"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_DOCUMENT_TYPEs().findContentItem("CreatedDate"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_DOCUMENT_TYPEs().findContentItem("CreatedBy"); }]
    });

    lightSwitchApplication.AddEditREF_GAP.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditREF_GAP
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditREF_GAP,
            data: lightSwitchApplication.AddEditREF_GAP,
            value: lightSwitchApplication.AddEditREF_GAP
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditREF_GAP,
            data: lightSwitchApplication.AddEditREF_GAP,
            value: lightSwitchApplication.REF_GAP
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditREF_GAP,
            data: lightSwitchApplication.REF_GAP,
            value: lightSwitchApplication.REF_GAP
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditREF_GAP,
            data: lightSwitchApplication.REF_GAP,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditREF_GAP,
            data: lightSwitchApplication.REF_GAP,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditREF_GAP,
            data: lightSwitchApplication.REF_GAP,
            value: lightSwitchApplication.REF_GAP
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditREF_GAP
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditREF_GAP, {
        /// <field>
        /// Called when a new AddEditREF_GAP screen is created.
        /// <br/>created(msls.application.AddEditREF_GAP screen)
        /// </field>
        created: [lightSwitchApplication.AddEditREF_GAP],
        /// <field>
        /// Called before changes on an active AddEditREF_GAP screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditREF_GAP screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditREF_GAP],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_GAP().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_GAP().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_GAP().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_GAP().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_GAP().findContentItem("Description"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_GAP().findContentItem("right"); }]
    });

    lightSwitchApplication.BrowseREF_GAPs.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseREF_GAPs
        },
        REF_GAPList: {
            _$class: msls.ContentItem,
            _$name: "REF_GAPList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseREF_GAPs,
            data: lightSwitchApplication.BrowseREF_GAPs,
            value: lightSwitchApplication.BrowseREF_GAPs
        },
        REF_GAPs: {
            _$class: msls.ContentItem,
            _$name: "REF_GAPs",
            _$parentName: "REF_GAPList",
            screen: lightSwitchApplication.BrowseREF_GAPs,
            data: lightSwitchApplication.BrowseREF_GAPs,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseREF_GAPs,
                _$entry: {
                    elementType: lightSwitchApplication.REF_GAP
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "REF_GAPs",
            screen: lightSwitchApplication.BrowseREF_GAPs,
            data: lightSwitchApplication.REF_GAP,
            value: lightSwitchApplication.REF_GAP
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_GAPs,
            data: lightSwitchApplication.REF_GAP,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_GAPs,
            data: lightSwitchApplication.REF_GAP,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_GAPs,
            data: lightSwitchApplication.REF_GAP,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_GAPs,
            data: lightSwitchApplication.REF_GAP,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseREF_GAPs
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseREF_GAPs, {
        /// <field>
        /// Called when a new BrowseREF_GAPs screen is created.
        /// <br/>created(msls.application.BrowseREF_GAPs screen)
        /// </field>
        created: [lightSwitchApplication.BrowseREF_GAPs],
        /// <field>
        /// Called before changes on an active BrowseREF_GAPs screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseREF_GAPs screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseREF_GAPs],
        /// <field>
        /// Called after the REF_GAPList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_GAPList_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_GAPs().findContentItem("REF_GAPList"); }],
        /// <field>
        /// Called after the REF_GAPs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_GAPs_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_GAPs().findContentItem("REF_GAPs"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_GAPs().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_GAPs().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_GAPs().findContentItem("Description"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_GAPs().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_GAPs().findContentItem("CreatedDate"); }]
    });

    lightSwitchApplication.AddEditREF_LOCATION.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditREF_LOCATION
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditREF_LOCATION,
            data: lightSwitchApplication.AddEditREF_LOCATION,
            value: lightSwitchApplication.AddEditREF_LOCATION
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditREF_LOCATION,
            data: lightSwitchApplication.AddEditREF_LOCATION,
            value: lightSwitchApplication.REF_LOCATION
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditREF_LOCATION,
            data: lightSwitchApplication.REF_LOCATION,
            value: lightSwitchApplication.REF_LOCATION
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditREF_LOCATION,
            data: lightSwitchApplication.REF_LOCATION,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditREF_LOCATION,
            data: lightSwitchApplication.REF_LOCATION,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditREF_LOCATION,
            data: lightSwitchApplication.REF_LOCATION,
            value: lightSwitchApplication.REF_LOCATION
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditREF_LOCATION
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditREF_LOCATION, {
        /// <field>
        /// Called when a new AddEditREF_LOCATION screen is created.
        /// <br/>created(msls.application.AddEditREF_LOCATION screen)
        /// </field>
        created: [lightSwitchApplication.AddEditREF_LOCATION],
        /// <field>
        /// Called before changes on an active AddEditREF_LOCATION screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditREF_LOCATION screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditREF_LOCATION],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_LOCATION().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_LOCATION().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_LOCATION().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_LOCATION().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_LOCATION().findContentItem("Description"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_LOCATION().findContentItem("right"); }]
    });

    lightSwitchApplication.BrowseREF_LOCATIONs.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseREF_LOCATIONs
        },
        REF_LOCATIONList: {
            _$class: msls.ContentItem,
            _$name: "REF_LOCATIONList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseREF_LOCATIONs,
            data: lightSwitchApplication.BrowseREF_LOCATIONs,
            value: lightSwitchApplication.BrowseREF_LOCATIONs
        },
        REF_LOCATIONs: {
            _$class: msls.ContentItem,
            _$name: "REF_LOCATIONs",
            _$parentName: "REF_LOCATIONList",
            screen: lightSwitchApplication.BrowseREF_LOCATIONs,
            data: lightSwitchApplication.BrowseREF_LOCATIONs,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseREF_LOCATIONs,
                _$entry: {
                    elementType: lightSwitchApplication.REF_LOCATION
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "REF_LOCATIONs",
            screen: lightSwitchApplication.BrowseREF_LOCATIONs,
            data: lightSwitchApplication.REF_LOCATION,
            value: lightSwitchApplication.REF_LOCATION
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_LOCATIONs,
            data: lightSwitchApplication.REF_LOCATION,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_LOCATIONs,
            data: lightSwitchApplication.REF_LOCATION,
            value: String
        },
        CreateDate: {
            _$class: msls.ContentItem,
            _$name: "CreateDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_LOCATIONs,
            data: lightSwitchApplication.REF_LOCATION,
            value: Date
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_LOCATIONs,
            data: lightSwitchApplication.REF_LOCATION,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseREF_LOCATIONs
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseREF_LOCATIONs, {
        /// <field>
        /// Called when a new BrowseREF_LOCATIONs screen is created.
        /// <br/>created(msls.application.BrowseREF_LOCATIONs screen)
        /// </field>
        created: [lightSwitchApplication.BrowseREF_LOCATIONs],
        /// <field>
        /// Called before changes on an active BrowseREF_LOCATIONs screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseREF_LOCATIONs screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseREF_LOCATIONs],
        /// <field>
        /// Called after the REF_LOCATIONList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_LOCATIONList_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_LOCATIONs().findContentItem("REF_LOCATIONList"); }],
        /// <field>
        /// Called after the REF_LOCATIONs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_LOCATIONs_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_LOCATIONs().findContentItem("REF_LOCATIONs"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_LOCATIONs().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_LOCATIONs().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_LOCATIONs().findContentItem("Description"); }],
        /// <field>
        /// Called after the CreateDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreateDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_LOCATIONs().findContentItem("CreateDate"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_LOCATIONs().findContentItem("CreatedBy"); }]
    });

    lightSwitchApplication.AddEditREF_PHASE1.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditREF_PHASE1
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditREF_PHASE1,
            data: lightSwitchApplication.AddEditREF_PHASE1,
            value: lightSwitchApplication.AddEditREF_PHASE1
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditREF_PHASE1,
            data: lightSwitchApplication.AddEditREF_PHASE1,
            value: lightSwitchApplication.REF_PHASE
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditREF_PHASE1,
            data: lightSwitchApplication.REF_PHASE,
            value: lightSwitchApplication.REF_PHASE
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditREF_PHASE1,
            data: lightSwitchApplication.REF_PHASE,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditREF_PHASE1,
            data: lightSwitchApplication.REF_PHASE,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditREF_PHASE1,
            data: lightSwitchApplication.REF_PHASE,
            value: lightSwitchApplication.REF_PHASE
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditREF_PHASE1
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditREF_PHASE1, {
        /// <field>
        /// Called when a new AddEditREF_PHASE1 screen is created.
        /// <br/>created(msls.application.AddEditREF_PHASE1 screen)
        /// </field>
        created: [lightSwitchApplication.AddEditREF_PHASE1],
        /// <field>
        /// Called before changes on an active AddEditREF_PHASE1 screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditREF_PHASE1 screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditREF_PHASE1],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_PHASE1().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_PHASE1().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_PHASE1().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_PHASE1().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_PHASE1().findContentItem("Description"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_PHASE1().findContentItem("right"); }]
    });

    lightSwitchApplication.BrowseREF_PHASEs1.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseREF_PHASEs1
        },
        REF_PHASEList: {
            _$class: msls.ContentItem,
            _$name: "REF_PHASEList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseREF_PHASEs1,
            data: lightSwitchApplication.BrowseREF_PHASEs1,
            value: lightSwitchApplication.BrowseREF_PHASEs1
        },
        REF_PHASEs: {
            _$class: msls.ContentItem,
            _$name: "REF_PHASEs",
            _$parentName: "REF_PHASEList",
            screen: lightSwitchApplication.BrowseREF_PHASEs1,
            data: lightSwitchApplication.BrowseREF_PHASEs1,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseREF_PHASEs1,
                _$entry: {
                    elementType: lightSwitchApplication.REF_PHASE
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "REF_PHASEs",
            screen: lightSwitchApplication.BrowseREF_PHASEs1,
            data: lightSwitchApplication.REF_PHASE,
            value: lightSwitchApplication.REF_PHASE
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_PHASEs1,
            data: lightSwitchApplication.REF_PHASE,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_PHASEs1,
            data: lightSwitchApplication.REF_PHASE,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_PHASEs1,
            data: lightSwitchApplication.REF_PHASE,
            value: Date
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_PHASEs1,
            data: lightSwitchApplication.REF_PHASE,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseREF_PHASEs1
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseREF_PHASEs1, {
        /// <field>
        /// Called when a new BrowseREF_PHASEs1 screen is created.
        /// <br/>created(msls.application.BrowseREF_PHASEs1 screen)
        /// </field>
        created: [lightSwitchApplication.BrowseREF_PHASEs1],
        /// <field>
        /// Called before changes on an active BrowseREF_PHASEs1 screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseREF_PHASEs1 screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseREF_PHASEs1],
        /// <field>
        /// Called after the REF_PHASEList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_PHASEList_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_PHASEs1().findContentItem("REF_PHASEList"); }],
        /// <field>
        /// Called after the REF_PHASEs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_PHASEs_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_PHASEs1().findContentItem("REF_PHASEs"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_PHASEs1().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_PHASEs1().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_PHASEs1().findContentItem("Description"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_PHASEs1().findContentItem("CreatedDate"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_PHASEs1().findContentItem("CreatedBy"); }]
    });

    lightSwitchApplication.AddEditREF_RATE_CARD.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditREF_RATE_CARD
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditREF_RATE_CARD,
            data: lightSwitchApplication.AddEditREF_RATE_CARD,
            value: lightSwitchApplication.AddEditREF_RATE_CARD
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditREF_RATE_CARD,
            data: lightSwitchApplication.AddEditREF_RATE_CARD,
            value: lightSwitchApplication.REF_RATE_CARD
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditREF_RATE_CARD,
            data: lightSwitchApplication.REF_RATE_CARD,
            value: lightSwitchApplication.REF_RATE_CARD
        },
        Rate: {
            _$class: msls.ContentItem,
            _$name: "Rate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditREF_RATE_CARD,
            data: lightSwitchApplication.REF_RATE_CARD,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditREF_RATE_CARD
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditREF_RATE_CARD, {
        /// <field>
        /// Called when a new AddEditREF_RATE_CARD screen is created.
        /// <br/>created(msls.application.AddEditREF_RATE_CARD screen)
        /// </field>
        created: [lightSwitchApplication.AddEditREF_RATE_CARD],
        /// <field>
        /// Called before changes on an active AddEditREF_RATE_CARD screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditREF_RATE_CARD screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditREF_RATE_CARD],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_RATE_CARD().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_RATE_CARD().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_RATE_CARD().findContentItem("left"); }],
        /// <field>
        /// Called after the Rate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Rate_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_RATE_CARD().findContentItem("Rate"); }]
    });

    lightSwitchApplication.BrowseREF_RATE_CARDs.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseREF_RATE_CARDs
        },
        REF_RATE_CARDList: {
            _$class: msls.ContentItem,
            _$name: "REF_RATE_CARDList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseREF_RATE_CARDs,
            data: lightSwitchApplication.BrowseREF_RATE_CARDs,
            value: lightSwitchApplication.BrowseREF_RATE_CARDs
        },
        REF_RATE_CARDs: {
            _$class: msls.ContentItem,
            _$name: "REF_RATE_CARDs",
            _$parentName: "REF_RATE_CARDList",
            screen: lightSwitchApplication.BrowseREF_RATE_CARDs,
            data: lightSwitchApplication.BrowseREF_RATE_CARDs,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseREF_RATE_CARDs,
                _$entry: {
                    elementType: lightSwitchApplication.REF_RATE_CARD
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "REF_RATE_CARDs",
            screen: lightSwitchApplication.BrowseREF_RATE_CARDs,
            data: lightSwitchApplication.REF_RATE_CARD,
            value: lightSwitchApplication.REF_RATE_CARD
        },
        Rate: {
            _$class: msls.ContentItem,
            _$name: "Rate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_RATE_CARDs,
            data: lightSwitchApplication.REF_RATE_CARD,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_RATE_CARDs,
            data: lightSwitchApplication.REF_RATE_CARD,
            value: Date
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_RATE_CARDs,
            data: lightSwitchApplication.REF_RATE_CARD,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseREF_RATE_CARDs
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseREF_RATE_CARDs, {
        /// <field>
        /// Called when a new BrowseREF_RATE_CARDs screen is created.
        /// <br/>created(msls.application.BrowseREF_RATE_CARDs screen)
        /// </field>
        created: [lightSwitchApplication.BrowseREF_RATE_CARDs],
        /// <field>
        /// Called before changes on an active BrowseREF_RATE_CARDs screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseREF_RATE_CARDs screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseREF_RATE_CARDs],
        /// <field>
        /// Called after the REF_RATE_CARDList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_RATE_CARDList_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_RATE_CARDs().findContentItem("REF_RATE_CARDList"); }],
        /// <field>
        /// Called after the REF_RATE_CARDs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_RATE_CARDs_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_RATE_CARDs().findContentItem("REF_RATE_CARDs"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_RATE_CARDs().findContentItem("rows"); }],
        /// <field>
        /// Called after the Rate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Rate_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_RATE_CARDs().findContentItem("Rate"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_RATE_CARDs().findContentItem("CreatedDate"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_RATE_CARDs().findContentItem("CreatedBy"); }]
    });

    lightSwitchApplication.AddEditREF_ROLE.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditREF_ROLE
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditREF_ROLE,
            data: lightSwitchApplication.AddEditREF_ROLE,
            value: lightSwitchApplication.AddEditREF_ROLE
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditREF_ROLE,
            data: lightSwitchApplication.AddEditREF_ROLE,
            value: lightSwitchApplication.REF_ROLE
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditREF_ROLE,
            data: lightSwitchApplication.REF_ROLE,
            value: lightSwitchApplication.REF_ROLE
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditREF_ROLE,
            data: lightSwitchApplication.REF_ROLE,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditREF_ROLE,
            data: lightSwitchApplication.REF_ROLE,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditREF_ROLE
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditREF_ROLE, {
        /// <field>
        /// Called when a new AddEditREF_ROLE screen is created.
        /// <br/>created(msls.application.AddEditREF_ROLE screen)
        /// </field>
        created: [lightSwitchApplication.AddEditREF_ROLE],
        /// <field>
        /// Called before changes on an active AddEditREF_ROLE screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditREF_ROLE screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditREF_ROLE],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_ROLE().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_ROLE().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_ROLE().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_ROLE().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_ROLE().findContentItem("Description"); }]
    });

    lightSwitchApplication.BrowseREF_ROLEs.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseREF_ROLEs
        },
        REF_ROLEList: {
            _$class: msls.ContentItem,
            _$name: "REF_ROLEList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseREF_ROLEs,
            data: lightSwitchApplication.BrowseREF_ROLEs,
            value: lightSwitchApplication.BrowseREF_ROLEs
        },
        REF_ROLEs: {
            _$class: msls.ContentItem,
            _$name: "REF_ROLEs",
            _$parentName: "REF_ROLEList",
            screen: lightSwitchApplication.BrowseREF_ROLEs,
            data: lightSwitchApplication.BrowseREF_ROLEs,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseREF_ROLEs,
                _$entry: {
                    elementType: lightSwitchApplication.REF_ROLE
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "REF_ROLEs",
            screen: lightSwitchApplication.BrowseREF_ROLEs,
            data: lightSwitchApplication.REF_ROLE,
            value: lightSwitchApplication.REF_ROLE
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_ROLEs,
            data: lightSwitchApplication.REF_ROLE,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_ROLEs,
            data: lightSwitchApplication.REF_ROLE,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_ROLEs,
            data: lightSwitchApplication.REF_ROLE,
            value: Date
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_ROLEs,
            data: lightSwitchApplication.REF_ROLE,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseREF_ROLEs
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseREF_ROLEs, {
        /// <field>
        /// Called when a new BrowseREF_ROLEs screen is created.
        /// <br/>created(msls.application.BrowseREF_ROLEs screen)
        /// </field>
        created: [lightSwitchApplication.BrowseREF_ROLEs],
        /// <field>
        /// Called before changes on an active BrowseREF_ROLEs screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseREF_ROLEs screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseREF_ROLEs],
        /// <field>
        /// Called after the REF_ROLEList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_ROLEList_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_ROLEs().findContentItem("REF_ROLEList"); }],
        /// <field>
        /// Called after the REF_ROLEs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_ROLEs_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_ROLEs().findContentItem("REF_ROLEs"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_ROLEs().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_ROLEs().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_ROLEs().findContentItem("Description"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_ROLEs().findContentItem("CreatedDate"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_ROLEs().findContentItem("CreatedBy"); }]
    });

    lightSwitchApplication.AddEditREF_STAKEHOLDER1.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditREF_STAKEHOLDER1
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditREF_STAKEHOLDER1,
            data: lightSwitchApplication.AddEditREF_STAKEHOLDER1,
            value: lightSwitchApplication.AddEditREF_STAKEHOLDER1
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditREF_STAKEHOLDER1,
            data: lightSwitchApplication.AddEditREF_STAKEHOLDER1,
            value: lightSwitchApplication.REF_STAKEHOLDER
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditREF_STAKEHOLDER1,
            data: lightSwitchApplication.REF_STAKEHOLDER,
            value: lightSwitchApplication.REF_STAKEHOLDER
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditREF_STAKEHOLDER1,
            data: lightSwitchApplication.REF_STAKEHOLDER,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditREF_STAKEHOLDER1,
            data: lightSwitchApplication.REF_STAKEHOLDER,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditREF_STAKEHOLDER1
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditREF_STAKEHOLDER1, {
        /// <field>
        /// Called when a new AddEditREF_STAKEHOLDER1 screen is created.
        /// <br/>created(msls.application.AddEditREF_STAKEHOLDER1 screen)
        /// </field>
        created: [lightSwitchApplication.AddEditREF_STAKEHOLDER1],
        /// <field>
        /// Called before changes on an active AddEditREF_STAKEHOLDER1 screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditREF_STAKEHOLDER1 screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditREF_STAKEHOLDER1],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_STAKEHOLDER1().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_STAKEHOLDER1().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_STAKEHOLDER1().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_STAKEHOLDER1().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_STAKEHOLDER1().findContentItem("Description"); }]
    });

    lightSwitchApplication.BrowseREF_STAKEHOLDERs1.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseREF_STAKEHOLDERs1
        },
        REF_STAKEHOLDERList: {
            _$class: msls.ContentItem,
            _$name: "REF_STAKEHOLDERList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseREF_STAKEHOLDERs1,
            data: lightSwitchApplication.BrowseREF_STAKEHOLDERs1,
            value: lightSwitchApplication.BrowseREF_STAKEHOLDERs1
        },
        REF_STAKEHOLDERs: {
            _$class: msls.ContentItem,
            _$name: "REF_STAKEHOLDERs",
            _$parentName: "REF_STAKEHOLDERList",
            screen: lightSwitchApplication.BrowseREF_STAKEHOLDERs1,
            data: lightSwitchApplication.BrowseREF_STAKEHOLDERs1,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseREF_STAKEHOLDERs1,
                _$entry: {
                    elementType: lightSwitchApplication.REF_STAKEHOLDER
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "REF_STAKEHOLDERs",
            screen: lightSwitchApplication.BrowseREF_STAKEHOLDERs1,
            data: lightSwitchApplication.REF_STAKEHOLDER,
            value: lightSwitchApplication.REF_STAKEHOLDER
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_STAKEHOLDERs1,
            data: lightSwitchApplication.REF_STAKEHOLDER,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_STAKEHOLDERs1,
            data: lightSwitchApplication.REF_STAKEHOLDER,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_STAKEHOLDERs1,
            data: lightSwitchApplication.REF_STAKEHOLDER,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_STAKEHOLDERs1,
            data: lightSwitchApplication.REF_STAKEHOLDER,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseREF_STAKEHOLDERs1
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseREF_STAKEHOLDERs1, {
        /// <field>
        /// Called when a new BrowseREF_STAKEHOLDERs1 screen is created.
        /// <br/>created(msls.application.BrowseREF_STAKEHOLDERs1 screen)
        /// </field>
        created: [lightSwitchApplication.BrowseREF_STAKEHOLDERs1],
        /// <field>
        /// Called before changes on an active BrowseREF_STAKEHOLDERs1 screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseREF_STAKEHOLDERs1 screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseREF_STAKEHOLDERs1],
        /// <field>
        /// Called after the REF_STAKEHOLDERList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_STAKEHOLDERList_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_STAKEHOLDERs1().findContentItem("REF_STAKEHOLDERList"); }],
        /// <field>
        /// Called after the REF_STAKEHOLDERs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_STAKEHOLDERs_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_STAKEHOLDERs1().findContentItem("REF_STAKEHOLDERs"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_STAKEHOLDERs1().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_STAKEHOLDERs1().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_STAKEHOLDERs1().findContentItem("Description"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_STAKEHOLDERs1().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_STAKEHOLDERs1().findContentItem("CreatedDate"); }]
    });

    lightSwitchApplication.AddEditREF_STATUS.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditREF_STATUS
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditREF_STATUS,
            data: lightSwitchApplication.AddEditREF_STATUS,
            value: lightSwitchApplication.AddEditREF_STATUS
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditREF_STATUS,
            data: lightSwitchApplication.AddEditREF_STATUS,
            value: lightSwitchApplication.REF_STATUS
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditREF_STATUS,
            data: lightSwitchApplication.REF_STATUS,
            value: lightSwitchApplication.REF_STATUS
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditREF_STATUS,
            data: lightSwitchApplication.REF_STATUS,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditREF_STATUS,
            data: lightSwitchApplication.REF_STATUS,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditREF_STATUS
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditREF_STATUS, {
        /// <field>
        /// Called when a new AddEditREF_STATUS screen is created.
        /// <br/>created(msls.application.AddEditREF_STATUS screen)
        /// </field>
        created: [lightSwitchApplication.AddEditREF_STATUS],
        /// <field>
        /// Called before changes on an active AddEditREF_STATUS screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditREF_STATUS screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditREF_STATUS],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_STATUS().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_STATUS().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_STATUS().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_STATUS().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_STATUS().findContentItem("Description"); }]
    });

    lightSwitchApplication.BrowseREF_STATUS.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseREF_STATUS
        },
        REF_STATUSList: {
            _$class: msls.ContentItem,
            _$name: "REF_STATUSList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseREF_STATUS,
            data: lightSwitchApplication.BrowseREF_STATUS,
            value: lightSwitchApplication.BrowseREF_STATUS
        },
        REF_STATUS: {
            _$class: msls.ContentItem,
            _$name: "REF_STATUS",
            _$parentName: "REF_STATUSList",
            screen: lightSwitchApplication.BrowseREF_STATUS,
            data: lightSwitchApplication.BrowseREF_STATUS,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseREF_STATUS,
                _$entry: {
                    elementType: lightSwitchApplication.REF_STATUS
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "REF_STATUS",
            screen: lightSwitchApplication.BrowseREF_STATUS,
            data: lightSwitchApplication.REF_STATUS,
            value: lightSwitchApplication.REF_STATUS
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_STATUS,
            data: lightSwitchApplication.REF_STATUS,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_STATUS,
            data: lightSwitchApplication.REF_STATUS,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_STATUS,
            data: lightSwitchApplication.REF_STATUS,
            value: Date
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_STATUS,
            data: lightSwitchApplication.REF_STATUS,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseREF_STATUS
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseREF_STATUS, {
        /// <field>
        /// Called when a new BrowseREF_STATUS screen is created.
        /// <br/>created(msls.application.BrowseREF_STATUS screen)
        /// </field>
        created: [lightSwitchApplication.BrowseREF_STATUS],
        /// <field>
        /// Called before changes on an active BrowseREF_STATUS screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseREF_STATUS screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseREF_STATUS],
        /// <field>
        /// Called after the REF_STATUSList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_STATUSList_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_STATUS().findContentItem("REF_STATUSList"); }],
        /// <field>
        /// Called after the REF_STATUS content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_STATUS_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_STATUS().findContentItem("REF_STATUS"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_STATUS().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_STATUS().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_STATUS().findContentItem("Description"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_STATUS().findContentItem("CreatedDate"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_STATUS().findContentItem("CreatedBy"); }]
    });

    lightSwitchApplication.AddEditREF_TECHNOLOGY.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditREF_TECHNOLOGY
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditREF_TECHNOLOGY,
            data: lightSwitchApplication.AddEditREF_TECHNOLOGY,
            value: lightSwitchApplication.AddEditREF_TECHNOLOGY
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditREF_TECHNOLOGY,
            data: lightSwitchApplication.AddEditREF_TECHNOLOGY,
            value: lightSwitchApplication.REF_TECHNOLOGY
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditREF_TECHNOLOGY,
            data: lightSwitchApplication.REF_TECHNOLOGY,
            value: lightSwitchApplication.REF_TECHNOLOGY
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditREF_TECHNOLOGY,
            data: lightSwitchApplication.REF_TECHNOLOGY,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditREF_TECHNOLOGY,
            data: lightSwitchApplication.REF_TECHNOLOGY,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditREF_TECHNOLOGY
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditREF_TECHNOLOGY, {
        /// <field>
        /// Called when a new AddEditREF_TECHNOLOGY screen is created.
        /// <br/>created(msls.application.AddEditREF_TECHNOLOGY screen)
        /// </field>
        created: [lightSwitchApplication.AddEditREF_TECHNOLOGY],
        /// <field>
        /// Called before changes on an active AddEditREF_TECHNOLOGY screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditREF_TECHNOLOGY screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditREF_TECHNOLOGY],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_TECHNOLOGY().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_TECHNOLOGY().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_TECHNOLOGY().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_TECHNOLOGY().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_TECHNOLOGY().findContentItem("Description"); }]
    });

    lightSwitchApplication.BrowseREF_TECHNOLOGies.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseREF_TECHNOLOGies
        },
        REF_TECHNOLOGYList: {
            _$class: msls.ContentItem,
            _$name: "REF_TECHNOLOGYList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseREF_TECHNOLOGies,
            data: lightSwitchApplication.BrowseREF_TECHNOLOGies,
            value: lightSwitchApplication.BrowseREF_TECHNOLOGies
        },
        REF_TECHNOLOGies: {
            _$class: msls.ContentItem,
            _$name: "REF_TECHNOLOGies",
            _$parentName: "REF_TECHNOLOGYList",
            screen: lightSwitchApplication.BrowseREF_TECHNOLOGies,
            data: lightSwitchApplication.BrowseREF_TECHNOLOGies,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseREF_TECHNOLOGies,
                _$entry: {
                    elementType: lightSwitchApplication.REF_TECHNOLOGY
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "REF_TECHNOLOGies",
            screen: lightSwitchApplication.BrowseREF_TECHNOLOGies,
            data: lightSwitchApplication.REF_TECHNOLOGY,
            value: lightSwitchApplication.REF_TECHNOLOGY
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_TECHNOLOGies,
            data: lightSwitchApplication.REF_TECHNOLOGY,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_TECHNOLOGies,
            data: lightSwitchApplication.REF_TECHNOLOGY,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_TECHNOLOGies,
            data: lightSwitchApplication.REF_TECHNOLOGY,
            value: Date
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_TECHNOLOGies,
            data: lightSwitchApplication.REF_TECHNOLOGY,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseREF_TECHNOLOGies
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseREF_TECHNOLOGies, {
        /// <field>
        /// Called when a new BrowseREF_TECHNOLOGies screen is created.
        /// <br/>created(msls.application.BrowseREF_TECHNOLOGies screen)
        /// </field>
        created: [lightSwitchApplication.BrowseREF_TECHNOLOGies],
        /// <field>
        /// Called before changes on an active BrowseREF_TECHNOLOGies screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseREF_TECHNOLOGies screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseREF_TECHNOLOGies],
        /// <field>
        /// Called after the REF_TECHNOLOGYList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_TECHNOLOGYList_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_TECHNOLOGies().findContentItem("REF_TECHNOLOGYList"); }],
        /// <field>
        /// Called after the REF_TECHNOLOGies content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_TECHNOLOGies_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_TECHNOLOGies().findContentItem("REF_TECHNOLOGies"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_TECHNOLOGies().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_TECHNOLOGies().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_TECHNOLOGies().findContentItem("Description"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_TECHNOLOGies().findContentItem("CreatedDate"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_TECHNOLOGies().findContentItem("CreatedBy"); }]
    });

    lightSwitchApplication.AddEditREF_TECHNOLOGY_STACK.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditREF_TECHNOLOGY_STACK
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditREF_TECHNOLOGY_STACK,
            data: lightSwitchApplication.AddEditREF_TECHNOLOGY_STACK,
            value: lightSwitchApplication.AddEditREF_TECHNOLOGY_STACK
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditREF_TECHNOLOGY_STACK,
            data: lightSwitchApplication.AddEditREF_TECHNOLOGY_STACK,
            value: lightSwitchApplication.REF_TECHNOLOGY_STACK
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditREF_TECHNOLOGY_STACK,
            data: lightSwitchApplication.REF_TECHNOLOGY_STACK,
            value: lightSwitchApplication.REF_TECHNOLOGY_STACK
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditREF_TECHNOLOGY_STACK,
            data: lightSwitchApplication.REF_TECHNOLOGY_STACK,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditREF_TECHNOLOGY_STACK,
            data: lightSwitchApplication.REF_TECHNOLOGY_STACK,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditREF_TECHNOLOGY_STACK
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditREF_TECHNOLOGY_STACK, {
        /// <field>
        /// Called when a new AddEditREF_TECHNOLOGY_STACK screen is created.
        /// <br/>created(msls.application.AddEditREF_TECHNOLOGY_STACK screen)
        /// </field>
        created: [lightSwitchApplication.AddEditREF_TECHNOLOGY_STACK],
        /// <field>
        /// Called before changes on an active AddEditREF_TECHNOLOGY_STACK screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditREF_TECHNOLOGY_STACK screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditREF_TECHNOLOGY_STACK],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_TECHNOLOGY_STACK().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_TECHNOLOGY_STACK().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_TECHNOLOGY_STACK().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_TECHNOLOGY_STACK().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_TECHNOLOGY_STACK().findContentItem("Description"); }]
    });

    lightSwitchApplication.BrowseREF_TECHNOLOGY_STACKs.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseREF_TECHNOLOGY_STACKs
        },
        REF_TECHNOLOGY_STACKList: {
            _$class: msls.ContentItem,
            _$name: "REF_TECHNOLOGY_STACKList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseREF_TECHNOLOGY_STACKs,
            data: lightSwitchApplication.BrowseREF_TECHNOLOGY_STACKs,
            value: lightSwitchApplication.BrowseREF_TECHNOLOGY_STACKs
        },
        REF_TECHNOLOGY_STACKs: {
            _$class: msls.ContentItem,
            _$name: "REF_TECHNOLOGY_STACKs",
            _$parentName: "REF_TECHNOLOGY_STACKList",
            screen: lightSwitchApplication.BrowseREF_TECHNOLOGY_STACKs,
            data: lightSwitchApplication.BrowseREF_TECHNOLOGY_STACKs,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseREF_TECHNOLOGY_STACKs,
                _$entry: {
                    elementType: lightSwitchApplication.REF_TECHNOLOGY_STACK
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "REF_TECHNOLOGY_STACKs",
            screen: lightSwitchApplication.BrowseREF_TECHNOLOGY_STACKs,
            data: lightSwitchApplication.REF_TECHNOLOGY_STACK,
            value: lightSwitchApplication.REF_TECHNOLOGY_STACK
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_TECHNOLOGY_STACKs,
            data: lightSwitchApplication.REF_TECHNOLOGY_STACK,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_TECHNOLOGY_STACKs,
            data: lightSwitchApplication.REF_TECHNOLOGY_STACK,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_TECHNOLOGY_STACKs,
            data: lightSwitchApplication.REF_TECHNOLOGY_STACK,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseREF_TECHNOLOGY_STACKs
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseREF_TECHNOLOGY_STACKs, {
        /// <field>
        /// Called when a new BrowseREF_TECHNOLOGY_STACKs screen is created.
        /// <br/>created(msls.application.BrowseREF_TECHNOLOGY_STACKs screen)
        /// </field>
        created: [lightSwitchApplication.BrowseREF_TECHNOLOGY_STACKs],
        /// <field>
        /// Called before changes on an active BrowseREF_TECHNOLOGY_STACKs screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseREF_TECHNOLOGY_STACKs screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseREF_TECHNOLOGY_STACKs],
        /// <field>
        /// Called after the REF_TECHNOLOGY_STACKList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_TECHNOLOGY_STACKList_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_TECHNOLOGY_STACKs().findContentItem("REF_TECHNOLOGY_STACKList"); }],
        /// <field>
        /// Called after the REF_TECHNOLOGY_STACKs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_TECHNOLOGY_STACKs_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_TECHNOLOGY_STACKs().findContentItem("REF_TECHNOLOGY_STACKs"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_TECHNOLOGY_STACKs().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_TECHNOLOGY_STACKs().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_TECHNOLOGY_STACKs().findContentItem("Description"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_TECHNOLOGY_STACKs().findContentItem("CreatedDate"); }]
    });

    lightSwitchApplication.AddEditREF_VENDOR.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditREF_VENDOR
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditREF_VENDOR,
            data: lightSwitchApplication.AddEditREF_VENDOR,
            value: lightSwitchApplication.AddEditREF_VENDOR
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditREF_VENDOR,
            data: lightSwitchApplication.AddEditREF_VENDOR,
            value: lightSwitchApplication.REF_VENDOR
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditREF_VENDOR,
            data: lightSwitchApplication.REF_VENDOR,
            value: lightSwitchApplication.REF_VENDOR
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditREF_VENDOR,
            data: lightSwitchApplication.REF_VENDOR,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditREF_VENDOR,
            data: lightSwitchApplication.REF_VENDOR,
            value: String
        },
        IsEsu: {
            _$class: msls.ContentItem,
            _$name: "IsEsu",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditREF_VENDOR,
            data: lightSwitchApplication.REF_VENDOR,
            value: Boolean
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditREF_VENDOR
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditREF_VENDOR, {
        /// <field>
        /// Called when a new AddEditREF_VENDOR screen is created.
        /// <br/>created(msls.application.AddEditREF_VENDOR screen)
        /// </field>
        created: [lightSwitchApplication.AddEditREF_VENDOR],
        /// <field>
        /// Called before changes on an active AddEditREF_VENDOR screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditREF_VENDOR screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditREF_VENDOR],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_VENDOR().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_VENDOR().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_VENDOR().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_VENDOR().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_VENDOR().findContentItem("Description"); }],
        /// <field>
        /// Called after the IsEsu content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IsEsu_postRender: [$element, function () { return new lightSwitchApplication.AddEditREF_VENDOR().findContentItem("IsEsu"); }]
    });

    lightSwitchApplication.BrowseREF_VENDORs.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseREF_VENDORs
        },
        REF_VENDORList: {
            _$class: msls.ContentItem,
            _$name: "REF_VENDORList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseREF_VENDORs,
            data: lightSwitchApplication.BrowseREF_VENDORs,
            value: lightSwitchApplication.BrowseREF_VENDORs
        },
        REF_VENDORs: {
            _$class: msls.ContentItem,
            _$name: "REF_VENDORs",
            _$parentName: "REF_VENDORList",
            screen: lightSwitchApplication.BrowseREF_VENDORs,
            data: lightSwitchApplication.BrowseREF_VENDORs,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseREF_VENDORs,
                _$entry: {
                    elementType: lightSwitchApplication.REF_VENDOR
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "REF_VENDORs",
            screen: lightSwitchApplication.BrowseREF_VENDORs,
            data: lightSwitchApplication.REF_VENDOR,
            value: lightSwitchApplication.REF_VENDOR
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_VENDORs,
            data: lightSwitchApplication.REF_VENDOR,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_VENDORs,
            data: lightSwitchApplication.REF_VENDOR,
            value: String
        },
        IsEsu: {
            _$class: msls.ContentItem,
            _$name: "IsEsu",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_VENDORs,
            data: lightSwitchApplication.REF_VENDOR,
            value: Boolean
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_VENDORs,
            data: lightSwitchApplication.REF_VENDOR,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseREF_VENDORs,
            data: lightSwitchApplication.REF_VENDOR,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseREF_VENDORs
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseREF_VENDORs, {
        /// <field>
        /// Called when a new BrowseREF_VENDORs screen is created.
        /// <br/>created(msls.application.BrowseREF_VENDORs screen)
        /// </field>
        created: [lightSwitchApplication.BrowseREF_VENDORs],
        /// <field>
        /// Called before changes on an active BrowseREF_VENDORs screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseREF_VENDORs screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseREF_VENDORs],
        /// <field>
        /// Called after the REF_VENDORList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_VENDORList_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_VENDORs().findContentItem("REF_VENDORList"); }],
        /// <field>
        /// Called after the REF_VENDORs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_VENDORs_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_VENDORs().findContentItem("REF_VENDORs"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_VENDORs().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_VENDORs().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_VENDORs().findContentItem("Description"); }],
        /// <field>
        /// Called after the IsEsu content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        IsEsu_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_VENDORs().findContentItem("IsEsu"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_VENDORs().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseREF_VENDORs().findContentItem("CreatedDate"); }]
    });

    lightSwitchApplication.BrowseFilter_PMApprovalReport.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport
        },
        PMApprovalReportList: {
            _$class: msls.ContentItem,
            _$name: "PMApprovalReportList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport,
            data: lightSwitchApplication.BrowseFilter_PMApprovalReport,
            value: lightSwitchApplication.BrowseFilter_PMApprovalReport
        },
        PMApprovalReportPMName: {
            _$class: msls.ContentItem,
            _$name: "PMApprovalReportPMName",
            _$parentName: "PMApprovalReportList",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport,
            data: lightSwitchApplication.BrowseFilter_PMApprovalReport,
            value: String
        },
        Filter_PMApprovalReport: {
            _$class: msls.ContentItem,
            _$name: "Filter_PMApprovalReport",
            _$parentName: "PMApprovalReportList",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport,
            data: lightSwitchApplication.BrowseFilter_PMApprovalReport,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseFilter_PMApprovalReport,
                _$entry: {
                    elementType: lightSwitchApplication.PMApprovalReport
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "Filter_PMApprovalReport",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport,
            data: lightSwitchApplication.PMApprovalReport,
            value: lightSwitchApplication.PMApprovalReport
        },
        TYPE: {
            _$class: msls.ContentItem,
            _$name: "TYPE",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport,
            data: lightSwitchApplication.PMApprovalReport,
            value: String
        },
        PHASE: {
            _$class: msls.ContentItem,
            _$name: "PHASE",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport,
            data: lightSwitchApplication.PMApprovalReport,
            value: String
        },
        STARTWEEKDATE: {
            _$class: msls.ContentItem,
            _$name: "STARTWEEKDATE",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport,
            data: lightSwitchApplication.PMApprovalReport,
            value: Date
        },
        WEEK: {
            _$class: msls.ContentItem,
            _$name: "WEEK",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport,
            data: lightSwitchApplication.PMApprovalReport,
            value: Number
        },
        APPLICATION1: {
            _$class: msls.ContentItem,
            _$name: "APPLICATION1",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport,
            data: lightSwitchApplication.PMApprovalReport,
            value: String
        },
        c_DATE: {
            _$class: msls.ContentItem,
            _$name: "c_DATE",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport,
            data: lightSwitchApplication.PMApprovalReport,
            value: Date
        },
        RESOURCE: {
            _$class: msls.ContentItem,
            _$name: "RESOURCE",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport,
            data: lightSwitchApplication.PMApprovalReport,
            value: String
        },
        DELIVERABLES: {
            _$class: msls.ContentItem,
            _$name: "DELIVERABLES",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport,
            data: lightSwitchApplication.PMApprovalReport,
            value: String
        },
        ACTIVITY: {
            _$class: msls.ContentItem,
            _$name: "ACTIVITY",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport,
            data: lightSwitchApplication.PMApprovalReport,
            value: String
        },
        HOURS: {
            _$class: msls.ContentItem,
            _$name: "HOURS",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport,
            data: lightSwitchApplication.PMApprovalReport,
            value: Number
        },
        RATEPERDAY: {
            _$class: msls.ContentItem,
            _$name: "RATEPERDAY",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport,
            data: lightSwitchApplication.PMApprovalReport,
            value: Number
        },
        PHASE_NOTCHANGE: {
            _$class: msls.ContentItem,
            _$name: "PHASE_NOTCHANGE",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport,
            data: lightSwitchApplication.PMApprovalReport,
            value: String
        },
        PMName: {
            _$class: msls.ContentItem,
            _$name: "PMName",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport,
            data: lightSwitchApplication.PMApprovalReport,
            value: String
        },
        PMEmail: {
            _$class: msls.ContentItem,
            _$name: "PMEmail",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport,
            data: lightSwitchApplication.PMApprovalReport,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseFilter_PMApprovalReport, {
        /// <field>
        /// Called when a new BrowseFilter_PMApprovalReport screen is created.
        /// <br/>created(msls.application.BrowseFilter_PMApprovalReport screen)
        /// </field>
        created: [lightSwitchApplication.BrowseFilter_PMApprovalReport],
        /// <field>
        /// Called before changes on an active BrowseFilter_PMApprovalReport screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseFilter_PMApprovalReport screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseFilter_PMApprovalReport],
        /// <field>
        /// Called to determine if the ExportExcel method can be executed.
        /// <br/>canExecute(msls.application.BrowseFilter_PMApprovalReport screen)
        /// </field>
        ExportExcel_canExecute: [lightSwitchApplication.BrowseFilter_PMApprovalReport],
        /// <field>
        /// Called to execute the ExportExcel method.
        /// <br/>execute(msls.application.BrowseFilter_PMApprovalReport screen)
        /// </field>
        ExportExcel_execute: [lightSwitchApplication.BrowseFilter_PMApprovalReport],
        /// <field>
        /// Called to determine if the ExportExcel_Tap method can be executed.
        /// <br/>canExecute(msls.application.BrowseFilter_PMApprovalReport screen)
        /// </field>
        ExportExcel_Tap_canExecute: [lightSwitchApplication.BrowseFilter_PMApprovalReport],
        /// <field>
        /// Called to execute the ExportExcel_Tap method.
        /// <br/>execute(msls.application.BrowseFilter_PMApprovalReport screen)
        /// </field>
        ExportExcel_Tap_execute: [lightSwitchApplication.BrowseFilter_PMApprovalReport],
        /// <field>
        /// Called after the PMApprovalReportList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PMApprovalReportList_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport().findContentItem("PMApprovalReportList"); }],
        /// <field>
        /// Called after the PMApprovalReportPMName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PMApprovalReportPMName_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport().findContentItem("PMApprovalReportPMName"); }],
        /// <field>
        /// Called after the Filter_PMApprovalReport content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Filter_PMApprovalReport_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport().findContentItem("Filter_PMApprovalReport"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport().findContentItem("rows"); }],
        /// <field>
        /// Called after the TYPE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TYPE_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport().findContentItem("TYPE"); }],
        /// <field>
        /// Called after the PHASE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PHASE_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport().findContentItem("PHASE"); }],
        /// <field>
        /// Called after the STARTWEEKDATE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        STARTWEEKDATE_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport().findContentItem("STARTWEEKDATE"); }],
        /// <field>
        /// Called after the WEEK content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WEEK_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport().findContentItem("WEEK"); }],
        /// <field>
        /// Called after the APPLICATION1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        APPLICATION1_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport().findContentItem("APPLICATION1"); }],
        /// <field>
        /// Called after the c_DATE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        c_DATE_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport().findContentItem("c_DATE"); }],
        /// <field>
        /// Called after the RESOURCE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RESOURCE_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport().findContentItem("RESOURCE"); }],
        /// <field>
        /// Called after the DELIVERABLES content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DELIVERABLES_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport().findContentItem("DELIVERABLES"); }],
        /// <field>
        /// Called after the ACTIVITY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ACTIVITY_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport().findContentItem("ACTIVITY"); }],
        /// <field>
        /// Called after the HOURS content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HOURS_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport().findContentItem("HOURS"); }],
        /// <field>
        /// Called after the RATEPERDAY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RATEPERDAY_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport().findContentItem("RATEPERDAY"); }],
        /// <field>
        /// Called after the PHASE_NOTCHANGE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PHASE_NOTCHANGE_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport().findContentItem("PHASE_NOTCHANGE"); }],
        /// <field>
        /// Called after the PMName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PMName_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport().findContentItem("PMName"); }],
        /// <field>
        /// Called after the PMEmail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PMEmail_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport().findContentItem("PMEmail"); }]
    });

    lightSwitchApplication.BrowseFilter_PMApprovalReport1.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport1
        },
        PMApprovalReportList: {
            _$class: msls.ContentItem,
            _$name: "PMApprovalReportList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport1,
            data: lightSwitchApplication.BrowseFilter_PMApprovalReport1,
            value: lightSwitchApplication.BrowseFilter_PMApprovalReport1
        },
        PMApprovalReportPMName: {
            _$class: msls.ContentItem,
            _$name: "PMApprovalReportPMName",
            _$parentName: "PMApprovalReportList",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport1,
            data: lightSwitchApplication.BrowseFilter_PMApprovalReport1,
            value: String
        },
        WijmoGrid: {
            _$class: msls.ContentItem,
            _$name: "WijmoGrid",
            _$parentName: "PMApprovalReportList",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport1,
            data: lightSwitchApplication.BrowseFilter_PMApprovalReport1,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseFilter_PMApprovalReport1,
                _$entry: {
                    elementType: lightSwitchApplication.PMApprovalReport
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "WijmoGrid",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport1,
            data: lightSwitchApplication.PMApprovalReport,
            value: lightSwitchApplication.PMApprovalReport
        },
        ConsolidateID: {
            _$class: msls.ContentItem,
            _$name: "ConsolidateID",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport1,
            data: lightSwitchApplication.PMApprovalReport,
            value: Number
        },
        TYPE: {
            _$class: msls.ContentItem,
            _$name: "TYPE",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport1,
            data: lightSwitchApplication.PMApprovalReport,
            value: String
        },
        PHASE: {
            _$class: msls.ContentItem,
            _$name: "PHASE",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport1,
            data: lightSwitchApplication.PMApprovalReport,
            value: String
        },
        STARTWEEKDATE: {
            _$class: msls.ContentItem,
            _$name: "STARTWEEKDATE",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport1,
            data: lightSwitchApplication.PMApprovalReport,
            value: Date
        },
        WEEK: {
            _$class: msls.ContentItem,
            _$name: "WEEK",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport1,
            data: lightSwitchApplication.PMApprovalReport,
            value: Number
        },
        APPLICATION1: {
            _$class: msls.ContentItem,
            _$name: "APPLICATION1",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport1,
            data: lightSwitchApplication.PMApprovalReport,
            value: String
        },
        c_DATE: {
            _$class: msls.ContentItem,
            _$name: "c_DATE",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport1,
            data: lightSwitchApplication.PMApprovalReport,
            value: Date
        },
        RESOURCE: {
            _$class: msls.ContentItem,
            _$name: "RESOURCE",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport1,
            data: lightSwitchApplication.PMApprovalReport,
            value: String
        },
        DELIVERABLES: {
            _$class: msls.ContentItem,
            _$name: "DELIVERABLES",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport1,
            data: lightSwitchApplication.PMApprovalReport,
            value: String
        },
        ACTIVITY: {
            _$class: msls.ContentItem,
            _$name: "ACTIVITY",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport1,
            data: lightSwitchApplication.PMApprovalReport,
            value: String
        },
        HOURS: {
            _$class: msls.ContentItem,
            _$name: "HOURS",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport1,
            data: lightSwitchApplication.PMApprovalReport,
            value: Number
        },
        RATEPERDAY: {
            _$class: msls.ContentItem,
            _$name: "RATEPERDAY",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport1,
            data: lightSwitchApplication.PMApprovalReport,
            value: Number
        },
        PHASE_NOTCHANGE: {
            _$class: msls.ContentItem,
            _$name: "PHASE_NOTCHANGE",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport1,
            data: lightSwitchApplication.PMApprovalReport,
            value: String
        },
        BILLEDHOURS: {
            _$class: msls.ContentItem,
            _$name: "BILLEDHOURS",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport1,
            data: lightSwitchApplication.PMApprovalReport,
            value: Number
        },
        BILLEDVALUE: {
            _$class: msls.ContentItem,
            _$name: "BILLEDVALUE",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport1,
            data: lightSwitchApplication.PMApprovalReport,
            value: Number
        },
        PMName: {
            _$class: msls.ContentItem,
            _$name: "PMName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport1,
            data: lightSwitchApplication.PMApprovalReport,
            value: String
        },
        PMEmail: {
            _$class: msls.ContentItem,
            _$name: "PMEmail",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport1,
            data: lightSwitchApplication.PMApprovalReport,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseFilter_PMApprovalReport1
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseFilter_PMApprovalReport1, {
        /// <field>
        /// Called when a new BrowseFilter_PMApprovalReport1 screen is created.
        /// <br/>created(msls.application.BrowseFilter_PMApprovalReport1 screen)
        /// </field>
        created: [lightSwitchApplication.BrowseFilter_PMApprovalReport1],
        /// <field>
        /// Called before changes on an active BrowseFilter_PMApprovalReport1 screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseFilter_PMApprovalReport1 screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseFilter_PMApprovalReport1],
        /// <field>
        /// Called to determine if the PreviousPage method can be executed.
        /// <br/>canExecute(msls.application.BrowseFilter_PMApprovalReport1 screen)
        /// </field>
        PreviousPage_canExecute: [lightSwitchApplication.BrowseFilter_PMApprovalReport1],
        /// <field>
        /// Called to execute the PreviousPage method.
        /// <br/>execute(msls.application.BrowseFilter_PMApprovalReport1 screen)
        /// </field>
        PreviousPage_execute: [lightSwitchApplication.BrowseFilter_PMApprovalReport1],
        /// <field>
        /// Called to determine if the NextPage method can be executed.
        /// <br/>canExecute(msls.application.BrowseFilter_PMApprovalReport1 screen)
        /// </field>
        NextPage_canExecute: [lightSwitchApplication.BrowseFilter_PMApprovalReport1],
        /// <field>
        /// Called to execute the NextPage method.
        /// <br/>execute(msls.application.BrowseFilter_PMApprovalReport1 screen)
        /// </field>
        NextPage_execute: [lightSwitchApplication.BrowseFilter_PMApprovalReport1],
        /// <field>
        /// Called after the PMApprovalReportList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PMApprovalReportList_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport1().findContentItem("PMApprovalReportList"); }],
        /// <field>
        /// Called after the PMApprovalReportPMName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PMApprovalReportPMName_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport1().findContentItem("PMApprovalReportPMName"); }],
        /// <field>
        /// Called after the WijmoGrid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WijmoGrid_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport1().findContentItem("WijmoGrid"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport1().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the ConsolidateID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ConsolidateID_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport1().findContentItem("ConsolidateID"); }],
        /// <field>
        /// Called after the TYPE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TYPE_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport1().findContentItem("TYPE"); }],
        /// <field>
        /// Called after the PHASE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PHASE_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport1().findContentItem("PHASE"); }],
        /// <field>
        /// Called after the STARTWEEKDATE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        STARTWEEKDATE_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport1().findContentItem("STARTWEEKDATE"); }],
        /// <field>
        /// Called after the WEEK content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WEEK_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport1().findContentItem("WEEK"); }],
        /// <field>
        /// Called after the APPLICATION1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        APPLICATION1_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport1().findContentItem("APPLICATION1"); }],
        /// <field>
        /// Called after the c_DATE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        c_DATE_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport1().findContentItem("c_DATE"); }],
        /// <field>
        /// Called after the RESOURCE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RESOURCE_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport1().findContentItem("RESOURCE"); }],
        /// <field>
        /// Called after the DELIVERABLES content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DELIVERABLES_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport1().findContentItem("DELIVERABLES"); }],
        /// <field>
        /// Called after the ACTIVITY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ACTIVITY_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport1().findContentItem("ACTIVITY"); }],
        /// <field>
        /// Called after the HOURS content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HOURS_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport1().findContentItem("HOURS"); }],
        /// <field>
        /// Called after the RATEPERDAY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RATEPERDAY_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport1().findContentItem("RATEPERDAY"); }],
        /// <field>
        /// Called after the PHASE_NOTCHANGE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PHASE_NOTCHANGE_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport1().findContentItem("PHASE_NOTCHANGE"); }],
        /// <field>
        /// Called after the BILLEDHOURS content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BILLEDHOURS_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport1().findContentItem("BILLEDHOURS"); }],
        /// <field>
        /// Called after the BILLEDVALUE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BILLEDVALUE_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport1().findContentItem("BILLEDVALUE"); }],
        /// <field>
        /// Called after the PMName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PMName_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport1().findContentItem("PMName"); }],
        /// <field>
        /// Called after the PMEmail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PMEmail_postRender: [$element, function () { return new lightSwitchApplication.BrowseFilter_PMApprovalReport1().findContentItem("PMEmail"); }]
    });

    lightSwitchApplication.AddEditRESOURCE.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditRESOURCE
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditRESOURCE,
            data: lightSwitchApplication.AddEditRESOURCE,
            value: lightSwitchApplication.AddEditRESOURCE
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditRESOURCE,
            data: lightSwitchApplication.AddEditRESOURCE,
            value: lightSwitchApplication.RESOURCE
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditRESOURCE,
            data: lightSwitchApplication.RESOURCE,
            value: lightSwitchApplication.RESOURCE
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditRESOURCE,
            data: lightSwitchApplication.RESOURCE,
            value: String
        },
        EmailId: {
            _$class: msls.ContentItem,
            _$name: "EmailId",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditRESOURCE,
            data: lightSwitchApplication.RESOURCE,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditRESOURCE,
            data: lightSwitchApplication.RESOURCE,
            value: lightSwitchApplication.RESOURCE
        },
        REF_STATUS: {
            _$class: msls.ContentItem,
            _$name: "REF_STATUS",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditRESOURCE,
            data: lightSwitchApplication.RESOURCE,
            value: lightSwitchApplication.REF_STATUS
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "REF_STATUS",
            screen: lightSwitchApplication.AddEditRESOURCE,
            data: lightSwitchApplication.REF_STATUS,
            value: lightSwitchApplication.REF_STATUS
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditRESOURCE
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditRESOURCE, {
        /// <field>
        /// Called when a new AddEditRESOURCE screen is created.
        /// <br/>created(msls.application.AddEditRESOURCE screen)
        /// </field>
        created: [lightSwitchApplication.AddEditRESOURCE],
        /// <field>
        /// Called before changes on an active AddEditRESOURCE screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditRESOURCE screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditRESOURCE],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditRESOURCE().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditRESOURCE().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditRESOURCE().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditRESOURCE().findContentItem("Name"); }],
        /// <field>
        /// Called after the EmailId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmailId_postRender: [$element, function () { return new lightSwitchApplication.AddEditRESOURCE().findContentItem("EmailId"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditRESOURCE().findContentItem("right"); }],
        /// <field>
        /// Called after the REF_STATUS content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_STATUS_postRender: [$element, function () { return new lightSwitchApplication.AddEditRESOURCE().findContentItem("REF_STATUS"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditRESOURCE().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.BrowseRESOURCEs.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseRESOURCEs
        },
        RESOURCEList: {
            _$class: msls.ContentItem,
            _$name: "RESOURCEList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseRESOURCEs,
            data: lightSwitchApplication.BrowseRESOURCEs,
            value: lightSwitchApplication.BrowseRESOURCEs
        },
        RESOURCEs: {
            _$class: msls.ContentItem,
            _$name: "RESOURCEs",
            _$parentName: "RESOURCEList",
            screen: lightSwitchApplication.BrowseRESOURCEs,
            data: lightSwitchApplication.BrowseRESOURCEs,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseRESOURCEs,
                _$entry: {
                    elementType: lightSwitchApplication.RESOURCE
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "RESOURCEs",
            screen: lightSwitchApplication.BrowseRESOURCEs,
            data: lightSwitchApplication.RESOURCE,
            value: lightSwitchApplication.RESOURCE
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseRESOURCEs,
            data: lightSwitchApplication.RESOURCE,
            value: String
        },
        EmailId: {
            _$class: msls.ContentItem,
            _$name: "EmailId",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseRESOURCEs,
            data: lightSwitchApplication.RESOURCE,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseRESOURCEs,
            data: lightSwitchApplication.RESOURCE,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseRESOURCEs,
            data: lightSwitchApplication.RESOURCE,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseRESOURCEs
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseRESOURCEs, {
        /// <field>
        /// Called when a new BrowseRESOURCEs screen is created.
        /// <br/>created(msls.application.BrowseRESOURCEs screen)
        /// </field>
        created: [lightSwitchApplication.BrowseRESOURCEs],
        /// <field>
        /// Called before changes on an active BrowseRESOURCEs screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseRESOURCEs screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseRESOURCEs],
        /// <field>
        /// Called after the RESOURCEList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RESOURCEList_postRender: [$element, function () { return new lightSwitchApplication.BrowseRESOURCEs().findContentItem("RESOURCEList"); }],
        /// <field>
        /// Called after the RESOURCEs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RESOURCEs_postRender: [$element, function () { return new lightSwitchApplication.BrowseRESOURCEs().findContentItem("RESOURCEs"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseRESOURCEs().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseRESOURCEs().findContentItem("Name"); }],
        /// <field>
        /// Called after the EmailId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        EmailId_postRender: [$element, function () { return new lightSwitchApplication.BrowseRESOURCEs().findContentItem("EmailId"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseRESOURCEs().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseRESOURCEs().findContentItem("CreatedDate"); }]
    });

    lightSwitchApplication.AddEditTP_APPLICATION.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTP_APPLICATION
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditTP_APPLICATION,
            data: lightSwitchApplication.AddEditTP_APPLICATION,
            value: lightSwitchApplication.AddEditTP_APPLICATION
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditTP_APPLICATION,
            data: lightSwitchApplication.AddEditTP_APPLICATION,
            value: lightSwitchApplication.TP_APPLICATION
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTP_APPLICATION,
            data: lightSwitchApplication.TP_APPLICATION,
            value: lightSwitchApplication.TP_APPLICATION
        },
        TP1: {
            _$class: msls.ContentItem,
            _$name: "TP1",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTP_APPLICATION,
            data: lightSwitchApplication.TP_APPLICATION,
            value: lightSwitchApplication.TP
        },
        TP2: {
            _$class: msls.ContentItem,
            _$name: "TP2",
            _$parentName: "TP1",
            screen: lightSwitchApplication.AddEditTP_APPLICATION,
            data: lightSwitchApplication.TP,
            value: lightSwitchApplication.TP
        },
        APPLICATION11: {
            _$class: msls.ContentItem,
            _$name: "APPLICATION11",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTP_APPLICATION,
            data: lightSwitchApplication.TP_APPLICATION,
            value: lightSwitchApplication.APPLICATION1
        },
        APPLICATION12: {
            _$class: msls.ContentItem,
            _$name: "APPLICATION12",
            _$parentName: "APPLICATION11",
            screen: lightSwitchApplication.AddEditTP_APPLICATION,
            data: lightSwitchApplication.APPLICATION1,
            value: lightSwitchApplication.APPLICATION1
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTP_APPLICATION
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditTP_APPLICATION, {
        /// <field>
        /// Called when a new AddEditTP_APPLICATION screen is created.
        /// <br/>created(msls.application.AddEditTP_APPLICATION screen)
        /// </field>
        created: [lightSwitchApplication.AddEditTP_APPLICATION],
        /// <field>
        /// Called before changes on an active AddEditTP_APPLICATION screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditTP_APPLICATION screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditTP_APPLICATION],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_APPLICATION().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_APPLICATION().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_APPLICATION().findContentItem("left"); }],
        /// <field>
        /// Called after the TP1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP1_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_APPLICATION().findContentItem("TP1"); }],
        /// <field>
        /// Called after the TP2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP2_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_APPLICATION().findContentItem("TP2"); }],
        /// <field>
        /// Called after the APPLICATION11 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        APPLICATION11_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_APPLICATION().findContentItem("APPLICATION11"); }],
        /// <field>
        /// Called after the APPLICATION12 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        APPLICATION12_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_APPLICATION().findContentItem("APPLICATION12"); }]
    });

    lightSwitchApplication.BrowseTP_APPLICATIONs.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTP_APPLICATIONs
        },
        TP_APPLICATIONList: {
            _$class: msls.ContentItem,
            _$name: "TP_APPLICATIONList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseTP_APPLICATIONs,
            data: lightSwitchApplication.BrowseTP_APPLICATIONs,
            value: lightSwitchApplication.BrowseTP_APPLICATIONs
        },
        TP_APPLICATIONs: {
            _$class: msls.ContentItem,
            _$name: "TP_APPLICATIONs",
            _$parentName: "TP_APPLICATIONList",
            screen: lightSwitchApplication.BrowseTP_APPLICATIONs,
            data: lightSwitchApplication.BrowseTP_APPLICATIONs,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseTP_APPLICATIONs,
                _$entry: {
                    elementType: lightSwitchApplication.TP_APPLICATION
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "TP_APPLICATIONs",
            screen: lightSwitchApplication.BrowseTP_APPLICATIONs,
            data: lightSwitchApplication.TP_APPLICATION,
            value: lightSwitchApplication.TP_APPLICATION
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_APPLICATIONs,
            data: lightSwitchApplication.TP_APPLICATION,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_APPLICATIONs,
            data: lightSwitchApplication.TP_APPLICATION,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_APPLICATIONs,
            data: lightSwitchApplication.TP_APPLICATION,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTP_APPLICATIONs
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseTP_APPLICATIONs, {
        /// <field>
        /// Called when a new BrowseTP_APPLICATIONs screen is created.
        /// <br/>created(msls.application.BrowseTP_APPLICATIONs screen)
        /// </field>
        created: [lightSwitchApplication.BrowseTP_APPLICATIONs],
        /// <field>
        /// Called before changes on an active BrowseTP_APPLICATIONs screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseTP_APPLICATIONs screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseTP_APPLICATIONs],
        /// <field>
        /// Called after the TP_APPLICATIONList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_APPLICATIONList_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_APPLICATIONs().findContentItem("TP_APPLICATIONList"); }],
        /// <field>
        /// Called after the TP_APPLICATIONs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_APPLICATIONs_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_APPLICATIONs().findContentItem("TP_APPLICATIONs"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_APPLICATIONs().findContentItem("rows"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_APPLICATIONs().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_APPLICATIONs().findContentItem("CreatedDate"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_APPLICATIONs().findContentItem("ModifiedBy"); }]
    });

    lightSwitchApplication.AddEditConsolidatedTimeSheet.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditConsolidatedTimeSheet
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditConsolidatedTimeSheet,
            data: lightSwitchApplication.AddEditConsolidatedTimeSheet,
            value: lightSwitchApplication.AddEditConsolidatedTimeSheet
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditConsolidatedTimeSheet,
            data: lightSwitchApplication.AddEditConsolidatedTimeSheet,
            value: lightSwitchApplication.ConsolidatedTimeSheet
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditConsolidatedTimeSheet,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: lightSwitchApplication.ConsolidatedTimeSheet
        },
        Type: {
            _$class: msls.ContentItem,
            _$name: "Type",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditConsolidatedTimeSheet,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: String
        },
        Phase: {
            _$class: msls.ContentItem,
            _$name: "Phase",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditConsolidatedTimeSheet,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: String
        },
        StartWeekDate: {
            _$class: msls.ContentItem,
            _$name: "StartWeekDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditConsolidatedTimeSheet,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: Date
        },
        Week: {
            _$class: msls.ContentItem,
            _$name: "Week",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditConsolidatedTimeSheet,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: Number
        },
        Application1: {
            _$class: msls.ContentItem,
            _$name: "Application1",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditConsolidatedTimeSheet,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: String
        },
        c_Date: {
            _$class: msls.ContentItem,
            _$name: "c_Date",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditConsolidatedTimeSheet,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: Date
        },
        Resource: {
            _$class: msls.ContentItem,
            _$name: "Resource",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditConsolidatedTimeSheet,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditConsolidatedTimeSheet,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: lightSwitchApplication.ConsolidatedTimeSheet
        },
        Deliverables: {
            _$class: msls.ContentItem,
            _$name: "Deliverables",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditConsolidatedTimeSheet,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: String
        },
        Activity: {
            _$class: msls.ContentItem,
            _$name: "Activity",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditConsolidatedTimeSheet,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: String
        },
        Hours: {
            _$class: msls.ContentItem,
            _$name: "Hours",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditConsolidatedTimeSheet,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: Number
        },
        RatePerDay: {
            _$class: msls.ContentItem,
            _$name: "RatePerDay",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditConsolidatedTimeSheet,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: Number
        },
        Phase_NotChange: {
            _$class: msls.ContentItem,
            _$name: "Phase_NotChange",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditConsolidatedTimeSheet,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: String
        },
        BilledHours: {
            _$class: msls.ContentItem,
            _$name: "BilledHours",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditConsolidatedTimeSheet,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: Number
        },
        BilledValue: {
            _$class: msls.ContentItem,
            _$name: "BilledValue",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditConsolidatedTimeSheet,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditConsolidatedTimeSheet
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditConsolidatedTimeSheet, {
        /// <field>
        /// Called when a new AddEditConsolidatedTimeSheet screen is created.
        /// <br/>created(msls.application.AddEditConsolidatedTimeSheet screen)
        /// </field>
        created: [lightSwitchApplication.AddEditConsolidatedTimeSheet],
        /// <field>
        /// Called before changes on an active AddEditConsolidatedTimeSheet screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditConsolidatedTimeSheet screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditConsolidatedTimeSheet],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditConsolidatedTimeSheet().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditConsolidatedTimeSheet().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditConsolidatedTimeSheet().findContentItem("left"); }],
        /// <field>
        /// Called after the Type content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Type_postRender: [$element, function () { return new lightSwitchApplication.AddEditConsolidatedTimeSheet().findContentItem("Type"); }],
        /// <field>
        /// Called after the Phase content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phase_postRender: [$element, function () { return new lightSwitchApplication.AddEditConsolidatedTimeSheet().findContentItem("Phase"); }],
        /// <field>
        /// Called after the StartWeekDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartWeekDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditConsolidatedTimeSheet().findContentItem("StartWeekDate"); }],
        /// <field>
        /// Called after the Week content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Week_postRender: [$element, function () { return new lightSwitchApplication.AddEditConsolidatedTimeSheet().findContentItem("Week"); }],
        /// <field>
        /// Called after the Application1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Application1_postRender: [$element, function () { return new lightSwitchApplication.AddEditConsolidatedTimeSheet().findContentItem("Application1"); }],
        /// <field>
        /// Called after the c_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        c_Date_postRender: [$element, function () { return new lightSwitchApplication.AddEditConsolidatedTimeSheet().findContentItem("c_Date"); }],
        /// <field>
        /// Called after the Resource content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Resource_postRender: [$element, function () { return new lightSwitchApplication.AddEditConsolidatedTimeSheet().findContentItem("Resource"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditConsolidatedTimeSheet().findContentItem("right"); }],
        /// <field>
        /// Called after the Deliverables content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Deliverables_postRender: [$element, function () { return new lightSwitchApplication.AddEditConsolidatedTimeSheet().findContentItem("Deliverables"); }],
        /// <field>
        /// Called after the Activity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Activity_postRender: [$element, function () { return new lightSwitchApplication.AddEditConsolidatedTimeSheet().findContentItem("Activity"); }],
        /// <field>
        /// Called after the Hours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hours_postRender: [$element, function () { return new lightSwitchApplication.AddEditConsolidatedTimeSheet().findContentItem("Hours"); }],
        /// <field>
        /// Called after the RatePerDay content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RatePerDay_postRender: [$element, function () { return new lightSwitchApplication.AddEditConsolidatedTimeSheet().findContentItem("RatePerDay"); }],
        /// <field>
        /// Called after the Phase_NotChange content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phase_NotChange_postRender: [$element, function () { return new lightSwitchApplication.AddEditConsolidatedTimeSheet().findContentItem("Phase_NotChange"); }],
        /// <field>
        /// Called after the BilledHours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BilledHours_postRender: [$element, function () { return new lightSwitchApplication.AddEditConsolidatedTimeSheet().findContentItem("BilledHours"); }],
        /// <field>
        /// Called after the BilledValue content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BilledValue_postRender: [$element, function () { return new lightSwitchApplication.AddEditConsolidatedTimeSheet().findContentItem("BilledValue"); }]
    });

    lightSwitchApplication.BrowseConsolidatedTimeSheets.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseConsolidatedTimeSheets
        },
        ConsolidatedTimeSheetList: {
            _$class: msls.ContentItem,
            _$name: "ConsolidatedTimeSheetList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseConsolidatedTimeSheets,
            data: lightSwitchApplication.BrowseConsolidatedTimeSheets,
            value: lightSwitchApplication.BrowseConsolidatedTimeSheets
        },
        ConsolidatedTimeSheets: {
            _$class: msls.ContentItem,
            _$name: "ConsolidatedTimeSheets",
            _$parentName: "ConsolidatedTimeSheetList",
            screen: lightSwitchApplication.BrowseConsolidatedTimeSheets,
            data: lightSwitchApplication.BrowseConsolidatedTimeSheets,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseConsolidatedTimeSheets,
                _$entry: {
                    elementType: lightSwitchApplication.ConsolidatedTimeSheet
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "ConsolidatedTimeSheets",
            screen: lightSwitchApplication.BrowseConsolidatedTimeSheets,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: lightSwitchApplication.ConsolidatedTimeSheet
        },
        Type: {
            _$class: msls.ContentItem,
            _$name: "Type",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseConsolidatedTimeSheets,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: String
        },
        Phase: {
            _$class: msls.ContentItem,
            _$name: "Phase",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseConsolidatedTimeSheets,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: String
        },
        StartWeekDate: {
            _$class: msls.ContentItem,
            _$name: "StartWeekDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseConsolidatedTimeSheets,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: Date
        },
        Week: {
            _$class: msls.ContentItem,
            _$name: "Week",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseConsolidatedTimeSheets,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: Number
        },
        Application1: {
            _$class: msls.ContentItem,
            _$name: "Application1",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseConsolidatedTimeSheets,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: String
        },
        c_Date: {
            _$class: msls.ContentItem,
            _$name: "c_Date",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseConsolidatedTimeSheets,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: Date
        },
        Resource: {
            _$class: msls.ContentItem,
            _$name: "Resource",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseConsolidatedTimeSheets,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: String
        },
        Deliverables: {
            _$class: msls.ContentItem,
            _$name: "Deliverables",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseConsolidatedTimeSheets,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: String
        },
        Activity: {
            _$class: msls.ContentItem,
            _$name: "Activity",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseConsolidatedTimeSheets,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: String
        },
        Hours: {
            _$class: msls.ContentItem,
            _$name: "Hours",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseConsolidatedTimeSheets,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: Number
        },
        RatePerDay: {
            _$class: msls.ContentItem,
            _$name: "RatePerDay",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseConsolidatedTimeSheets,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: Number
        },
        Phase_NotChange: {
            _$class: msls.ContentItem,
            _$name: "Phase_NotChange",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseConsolidatedTimeSheets,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: String
        },
        BilledHours: {
            _$class: msls.ContentItem,
            _$name: "BilledHours",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseConsolidatedTimeSheets,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: Number
        },
        BilledHours1: {
            _$class: msls.ContentItem,
            _$name: "BilledHours1",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseConsolidatedTimeSheets,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: Number
        },
        BilledValue: {
            _$class: msls.ContentItem,
            _$name: "BilledValue",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseConsolidatedTimeSheets,
            data: lightSwitchApplication.ConsolidatedTimeSheet,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseConsolidatedTimeSheets
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseConsolidatedTimeSheets, {
        /// <field>
        /// Called when a new BrowseConsolidatedTimeSheets screen is created.
        /// <br/>created(msls.application.BrowseConsolidatedTimeSheets screen)
        /// </field>
        created: [lightSwitchApplication.BrowseConsolidatedTimeSheets],
        /// <field>
        /// Called before changes on an active BrowseConsolidatedTimeSheets screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseConsolidatedTimeSheets screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseConsolidatedTimeSheets],
        /// <field>
        /// Called after the ConsolidatedTimeSheetList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ConsolidatedTimeSheetList_postRender: [$element, function () { return new lightSwitchApplication.BrowseConsolidatedTimeSheets().findContentItem("ConsolidatedTimeSheetList"); }],
        /// <field>
        /// Called after the ConsolidatedTimeSheets content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ConsolidatedTimeSheets_postRender: [$element, function () { return new lightSwitchApplication.BrowseConsolidatedTimeSheets().findContentItem("ConsolidatedTimeSheets"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseConsolidatedTimeSheets().findContentItem("rows"); }],
        /// <field>
        /// Called after the Type content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Type_postRender: [$element, function () { return new lightSwitchApplication.BrowseConsolidatedTimeSheets().findContentItem("Type"); }],
        /// <field>
        /// Called after the Phase content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phase_postRender: [$element, function () { return new lightSwitchApplication.BrowseConsolidatedTimeSheets().findContentItem("Phase"); }],
        /// <field>
        /// Called after the StartWeekDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        StartWeekDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseConsolidatedTimeSheets().findContentItem("StartWeekDate"); }],
        /// <field>
        /// Called after the Week content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Week_postRender: [$element, function () { return new lightSwitchApplication.BrowseConsolidatedTimeSheets().findContentItem("Week"); }],
        /// <field>
        /// Called after the Application1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Application1_postRender: [$element, function () { return new lightSwitchApplication.BrowseConsolidatedTimeSheets().findContentItem("Application1"); }],
        /// <field>
        /// Called after the c_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        c_Date_postRender: [$element, function () { return new lightSwitchApplication.BrowseConsolidatedTimeSheets().findContentItem("c_Date"); }],
        /// <field>
        /// Called after the Resource content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Resource_postRender: [$element, function () { return new lightSwitchApplication.BrowseConsolidatedTimeSheets().findContentItem("Resource"); }],
        /// <field>
        /// Called after the Deliverables content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Deliverables_postRender: [$element, function () { return new lightSwitchApplication.BrowseConsolidatedTimeSheets().findContentItem("Deliverables"); }],
        /// <field>
        /// Called after the Activity content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Activity_postRender: [$element, function () { return new lightSwitchApplication.BrowseConsolidatedTimeSheets().findContentItem("Activity"); }],
        /// <field>
        /// Called after the Hours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Hours_postRender: [$element, function () { return new lightSwitchApplication.BrowseConsolidatedTimeSheets().findContentItem("Hours"); }],
        /// <field>
        /// Called after the RatePerDay content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RatePerDay_postRender: [$element, function () { return new lightSwitchApplication.BrowseConsolidatedTimeSheets().findContentItem("RatePerDay"); }],
        /// <field>
        /// Called after the Phase_NotChange content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phase_NotChange_postRender: [$element, function () { return new lightSwitchApplication.BrowseConsolidatedTimeSheets().findContentItem("Phase_NotChange"); }],
        /// <field>
        /// Called after the BilledHours content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BilledHours_postRender: [$element, function () { return new lightSwitchApplication.BrowseConsolidatedTimeSheets().findContentItem("BilledHours"); }],
        /// <field>
        /// Called after the BilledHours1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BilledHours1_postRender: [$element, function () { return new lightSwitchApplication.BrowseConsolidatedTimeSheets().findContentItem("BilledHours1"); }],
        /// <field>
        /// Called after the BilledValue content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BilledValue_postRender: [$element, function () { return new lightSwitchApplication.BrowseConsolidatedTimeSheets().findContentItem("BilledValue"); }]
    });

    lightSwitchApplication.AddEditTP_DOCUMENT_LINK.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTP_DOCUMENT_LINK
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditTP_DOCUMENT_LINK,
            data: lightSwitchApplication.AddEditTP_DOCUMENT_LINK,
            value: lightSwitchApplication.AddEditTP_DOCUMENT_LINK
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditTP_DOCUMENT_LINK,
            data: lightSwitchApplication.AddEditTP_DOCUMENT_LINK,
            value: lightSwitchApplication.TP_DOCUMENT_LINK
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTP_DOCUMENT_LINK,
            data: lightSwitchApplication.TP_DOCUMENT_LINK,
            value: lightSwitchApplication.TP_DOCUMENT_LINK
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTP_DOCUMENT_LINK,
            data: lightSwitchApplication.TP_DOCUMENT_LINK,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTP_DOCUMENT_LINK,
            data: lightSwitchApplication.TP_DOCUMENT_LINK,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTP_DOCUMENT_LINK,
            data: lightSwitchApplication.TP_DOCUMENT_LINK,
            value: lightSwitchApplication.TP_DOCUMENT_LINK
        },
        Link: {
            _$class: msls.ContentItem,
            _$name: "Link",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTP_DOCUMENT_LINK,
            data: lightSwitchApplication.TP_DOCUMENT_LINK,
            value: String
        },
        REF_DOCUMENT_TYPE: {
            _$class: msls.ContentItem,
            _$name: "REF_DOCUMENT_TYPE",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTP_DOCUMENT_LINK,
            data: lightSwitchApplication.TP_DOCUMENT_LINK,
            value: lightSwitchApplication.REF_DOCUMENT_TYPE
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "REF_DOCUMENT_TYPE",
            screen: lightSwitchApplication.AddEditTP_DOCUMENT_LINK,
            data: lightSwitchApplication.REF_DOCUMENT_TYPE,
            value: lightSwitchApplication.REF_DOCUMENT_TYPE
        },
        TP: {
            _$class: msls.ContentItem,
            _$name: "TP",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTP_DOCUMENT_LINK,
            data: lightSwitchApplication.TP_DOCUMENT_LINK,
            value: lightSwitchApplication.TP
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "TP",
            screen: lightSwitchApplication.AddEditTP_DOCUMENT_LINK,
            data: lightSwitchApplication.TP,
            value: lightSwitchApplication.TP
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTP_DOCUMENT_LINK
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditTP_DOCUMENT_LINK, {
        /// <field>
        /// Called when a new AddEditTP_DOCUMENT_LINK screen is created.
        /// <br/>created(msls.application.AddEditTP_DOCUMENT_LINK screen)
        /// </field>
        created: [lightSwitchApplication.AddEditTP_DOCUMENT_LINK],
        /// <field>
        /// Called before changes on an active AddEditTP_DOCUMENT_LINK screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditTP_DOCUMENT_LINK screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditTP_DOCUMENT_LINK],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_DOCUMENT_LINK().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_DOCUMENT_LINK().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_DOCUMENT_LINK().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_DOCUMENT_LINK().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_DOCUMENT_LINK().findContentItem("Description"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_DOCUMENT_LINK().findContentItem("right"); }],
        /// <field>
        /// Called after the Link content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Link_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_DOCUMENT_LINK().findContentItem("Link"); }],
        /// <field>
        /// Called after the REF_DOCUMENT_TYPE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_DOCUMENT_TYPE_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_DOCUMENT_LINK().findContentItem("REF_DOCUMENT_TYPE"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_DOCUMENT_LINK().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the TP content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_DOCUMENT_LINK().findContentItem("TP"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_DOCUMENT_LINK().findContentItem("RowTemplate1"); }]
    });

    lightSwitchApplication.BrowseTP_DOCUMENT_LINKs.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTP_DOCUMENT_LINKs
        },
        TP_DOCUMENT_LINKList: {
            _$class: msls.ContentItem,
            _$name: "TP_DOCUMENT_LINKList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseTP_DOCUMENT_LINKs,
            data: lightSwitchApplication.BrowseTP_DOCUMENT_LINKs,
            value: lightSwitchApplication.BrowseTP_DOCUMENT_LINKs
        },
        TP_DOCUMENT_LINKs: {
            _$class: msls.ContentItem,
            _$name: "TP_DOCUMENT_LINKs",
            _$parentName: "TP_DOCUMENT_LINKList",
            screen: lightSwitchApplication.BrowseTP_DOCUMENT_LINKs,
            data: lightSwitchApplication.BrowseTP_DOCUMENT_LINKs,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseTP_DOCUMENT_LINKs,
                _$entry: {
                    elementType: lightSwitchApplication.TP_DOCUMENT_LINK
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "TP_DOCUMENT_LINKs",
            screen: lightSwitchApplication.BrowseTP_DOCUMENT_LINKs,
            data: lightSwitchApplication.TP_DOCUMENT_LINK,
            value: lightSwitchApplication.TP_DOCUMENT_LINK
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_DOCUMENT_LINKs,
            data: lightSwitchApplication.TP_DOCUMENT_LINK,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_DOCUMENT_LINKs,
            data: lightSwitchApplication.TP_DOCUMENT_LINK,
            value: String
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_DOCUMENT_LINKs,
            data: lightSwitchApplication.TP_DOCUMENT_LINK,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_DOCUMENT_LINKs,
            data: lightSwitchApplication.TP_DOCUMENT_LINK,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTP_DOCUMENT_LINKs
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseTP_DOCUMENT_LINKs, {
        /// <field>
        /// Called when a new BrowseTP_DOCUMENT_LINKs screen is created.
        /// <br/>created(msls.application.BrowseTP_DOCUMENT_LINKs screen)
        /// </field>
        created: [lightSwitchApplication.BrowseTP_DOCUMENT_LINKs],
        /// <field>
        /// Called before changes on an active BrowseTP_DOCUMENT_LINKs screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseTP_DOCUMENT_LINKs screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseTP_DOCUMENT_LINKs],
        /// <field>
        /// Called after the TP_DOCUMENT_LINKList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_DOCUMENT_LINKList_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_DOCUMENT_LINKs().findContentItem("TP_DOCUMENT_LINKList"); }],
        /// <field>
        /// Called after the TP_DOCUMENT_LINKs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_DOCUMENT_LINKs_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_DOCUMENT_LINKs().findContentItem("TP_DOCUMENT_LINKs"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_DOCUMENT_LINKs().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_DOCUMENT_LINKs().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_DOCUMENT_LINKs().findContentItem("Description"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_DOCUMENT_LINKs().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_DOCUMENT_LINKs().findContentItem("CreatedDate"); }]
    });

    lightSwitchApplication.AddEditTP_PHASE.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTP_PHASE
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditTP_PHASE,
            data: lightSwitchApplication.AddEditTP_PHASE,
            value: lightSwitchApplication.AddEditTP_PHASE
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditTP_PHASE,
            data: lightSwitchApplication.AddEditTP_PHASE,
            value: lightSwitchApplication.TP_PHASE
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTP_PHASE,
            data: lightSwitchApplication.TP_PHASE,
            value: lightSwitchApplication.TP_PHASE
        },
        PlannedStartDate: {
            _$class: msls.ContentItem,
            _$name: "PlannedStartDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTP_PHASE,
            data: lightSwitchApplication.TP_PHASE,
            value: Date
        },
        PlannedEndDate: {
            _$class: msls.ContentItem,
            _$name: "PlannedEndDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTP_PHASE,
            data: lightSwitchApplication.TP_PHASE,
            value: Date
        },
        ActualStartDate: {
            _$class: msls.ContentItem,
            _$name: "ActualStartDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTP_PHASE,
            data: lightSwitchApplication.TP_PHASE,
            value: Date
        },
        ActualEndDate: {
            _$class: msls.ContentItem,
            _$name: "ActualEndDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTP_PHASE,
            data: lightSwitchApplication.TP_PHASE,
            value: Date
        },
        Duration: {
            _$class: msls.ContentItem,
            _$name: "Duration",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTP_PHASE,
            data: lightSwitchApplication.TP_PHASE,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTP_PHASE,
            data: lightSwitchApplication.TP_PHASE,
            value: lightSwitchApplication.TP_PHASE
        },
        TP: {
            _$class: msls.ContentItem,
            _$name: "TP",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTP_PHASE,
            data: lightSwitchApplication.TP_PHASE,
            value: lightSwitchApplication.TP
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "TP",
            screen: lightSwitchApplication.AddEditTP_PHASE,
            data: lightSwitchApplication.TP,
            value: lightSwitchApplication.TP
        },
        REF_PHASE: {
            _$class: msls.ContentItem,
            _$name: "REF_PHASE",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTP_PHASE,
            data: lightSwitchApplication.TP_PHASE,
            value: lightSwitchApplication.REF_PHASE
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "REF_PHASE",
            screen: lightSwitchApplication.AddEditTP_PHASE,
            data: lightSwitchApplication.REF_PHASE,
            value: lightSwitchApplication.REF_PHASE
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTP_PHASE
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditTP_PHASE, {
        /// <field>
        /// Called when a new AddEditTP_PHASE screen is created.
        /// <br/>created(msls.application.AddEditTP_PHASE screen)
        /// </field>
        created: [lightSwitchApplication.AddEditTP_PHASE],
        /// <field>
        /// Called before changes on an active AddEditTP_PHASE screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditTP_PHASE screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditTP_PHASE],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_PHASE().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_PHASE().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_PHASE().findContentItem("left"); }],
        /// <field>
        /// Called after the PlannedStartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedStartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_PHASE().findContentItem("PlannedStartDate"); }],
        /// <field>
        /// Called after the PlannedEndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedEndDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_PHASE().findContentItem("PlannedEndDate"); }],
        /// <field>
        /// Called after the ActualStartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActualStartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_PHASE().findContentItem("ActualStartDate"); }],
        /// <field>
        /// Called after the ActualEndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActualEndDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_PHASE().findContentItem("ActualEndDate"); }],
        /// <field>
        /// Called after the Duration content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Duration_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_PHASE().findContentItem("Duration"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_PHASE().findContentItem("right"); }],
        /// <field>
        /// Called after the TP content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_PHASE().findContentItem("TP"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_PHASE().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the REF_PHASE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_PHASE_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_PHASE().findContentItem("REF_PHASE"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_PHASE().findContentItem("RowTemplate1"); }]
    });

    lightSwitchApplication.BrowseTP_PHASEs.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTP_PHASEs
        },
        TP_PHASEList: {
            _$class: msls.ContentItem,
            _$name: "TP_PHASEList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseTP_PHASEs,
            data: lightSwitchApplication.BrowseTP_PHASEs,
            value: lightSwitchApplication.BrowseTP_PHASEs
        },
        TP_PHASEs: {
            _$class: msls.ContentItem,
            _$name: "TP_PHASEs",
            _$parentName: "TP_PHASEList",
            screen: lightSwitchApplication.BrowseTP_PHASEs,
            data: lightSwitchApplication.BrowseTP_PHASEs,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseTP_PHASEs,
                _$entry: {
                    elementType: lightSwitchApplication.TP_PHASE
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "TP_PHASEs",
            screen: lightSwitchApplication.BrowseTP_PHASEs,
            data: lightSwitchApplication.TP_PHASE,
            value: lightSwitchApplication.TP_PHASE
        },
        Duration: {
            _$class: msls.ContentItem,
            _$name: "Duration",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_PHASEs,
            data: lightSwitchApplication.TP_PHASE,
            value: String
        },
        PlannedStartDate: {
            _$class: msls.ContentItem,
            _$name: "PlannedStartDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_PHASEs,
            data: lightSwitchApplication.TP_PHASE,
            value: Date
        },
        PlannedEndDate: {
            _$class: msls.ContentItem,
            _$name: "PlannedEndDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_PHASEs,
            data: lightSwitchApplication.TP_PHASE,
            value: Date
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_PHASEs,
            data: lightSwitchApplication.TP_PHASE,
            value: Date
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_PHASEs,
            data: lightSwitchApplication.TP_PHASE,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTP_PHASEs
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseTP_PHASEs, {
        /// <field>
        /// Called when a new BrowseTP_PHASEs screen is created.
        /// <br/>created(msls.application.BrowseTP_PHASEs screen)
        /// </field>
        created: [lightSwitchApplication.BrowseTP_PHASEs],
        /// <field>
        /// Called before changes on an active BrowseTP_PHASEs screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseTP_PHASEs screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseTP_PHASEs],
        /// <field>
        /// Called after the TP_PHASEList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_PHASEList_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_PHASEs().findContentItem("TP_PHASEList"); }],
        /// <field>
        /// Called after the TP_PHASEs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_PHASEs_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_PHASEs().findContentItem("TP_PHASEs"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_PHASEs().findContentItem("rows"); }],
        /// <field>
        /// Called after the Duration content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Duration_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_PHASEs().findContentItem("Duration"); }],
        /// <field>
        /// Called after the PlannedStartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedStartDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_PHASEs().findContentItem("PlannedStartDate"); }],
        /// <field>
        /// Called after the PlannedEndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedEndDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_PHASEs().findContentItem("PlannedEndDate"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_PHASEs().findContentItem("CreatedDate"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_PHASEs().findContentItem("CreatedBy"); }]
    });

    lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            value: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            value: lightSwitchApplication.TP_RESOURCE_ALLOCATION
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: lightSwitchApplication.TP_RESOURCE_ALLOCATION
        },
        RESOURCE: {
            _$class: msls.ContentItem,
            _$name: "RESOURCE",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: lightSwitchApplication.RESOURCE
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "RESOURCE",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.RESOURCE,
            value: lightSwitchApplication.RESOURCE
        },
        TP: {
            _$class: msls.ContentItem,
            _$name: "TP",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: lightSwitchApplication.TP
        },
        RowTemplate2: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate2",
            _$parentName: "TP",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP,
            value: lightSwitchApplication.TP
        },
        REF_ROLE: {
            _$class: msls.ContentItem,
            _$name: "REF_ROLE",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: lightSwitchApplication.REF_ROLE
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "REF_ROLE",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.REF_ROLE,
            value: lightSwitchApplication.REF_ROLE
        },
        Percentage: {
            _$class: msls.ContentItem,
            _$name: "Percentage",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Number
        },
        AllocationBuild: {
            _$class: msls.ContentItem,
            _$name: "AllocationBuild",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Number
        },
        AllocationTest: {
            _$class: msls.ContentItem,
            _$name: "AllocationTest",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Number
        },
        AllocationImplementation: {
            _$class: msls.ContentItem,
            _$name: "AllocationImplementation",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Number
        },
        AllocationPostImplementation: {
            _$class: msls.ContentItem,
            _$name: "AllocationPostImplementation",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Number
        },
        PlannedStartDate: {
            _$class: msls.ContentItem,
            _$name: "PlannedStartDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Date
        },
        PlannedEndDate: {
            _$class: msls.ContentItem,
            _$name: "PlannedEndDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Date
        },
        ActualStartDate: {
            _$class: msls.ContentItem,
            _$name: "ActualStartDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Date
        },
        ActualEndDate: {
            _$class: msls.ContentItem,
            _$name: "ActualEndDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Date
        },
        PlannedBuildStartDate: {
            _$class: msls.ContentItem,
            _$name: "PlannedBuildStartDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Date
        },
        PlannedBuildEndDate: {
            _$class: msls.ContentItem,
            _$name: "PlannedBuildEndDate",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Date
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: lightSwitchApplication.TP_RESOURCE_ALLOCATION
        },
        PlannedTestStartDate: {
            _$class: msls.ContentItem,
            _$name: "PlannedTestStartDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Date
        },
        PlannedTestEndDate: {
            _$class: msls.ContentItem,
            _$name: "PlannedTestEndDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Date
        },
        PlannedImplementationStartDate: {
            _$class: msls.ContentItem,
            _$name: "PlannedImplementationStartDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Date
        },
        PlannedImplementationEndDate: {
            _$class: msls.ContentItem,
            _$name: "PlannedImplementationEndDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Date
        },
        PlannedPostImplementationStartDate: {
            _$class: msls.ContentItem,
            _$name: "PlannedPostImplementationStartDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Date
        },
        PlannedPostImplementationEndDate: {
            _$class: msls.ContentItem,
            _$name: "PlannedPostImplementationEndDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Date
        },
        ActualBuildStartDate: {
            _$class: msls.ContentItem,
            _$name: "ActualBuildStartDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Date
        },
        ActualBuildEndDate: {
            _$class: msls.ContentItem,
            _$name: "ActualBuildEndDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Date
        },
        ActualTestStartDate: {
            _$class: msls.ContentItem,
            _$name: "ActualTestStartDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Date
        },
        ActualTestEndDate: {
            _$class: msls.ContentItem,
            _$name: "ActualTestEndDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Date
        },
        ActualImplementationStartDate: {
            _$class: msls.ContentItem,
            _$name: "ActualImplementationStartDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Date
        },
        ActualImplementationEndDate: {
            _$class: msls.ContentItem,
            _$name: "ActualImplementationEndDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Date
        },
        ActualPostImplementationStartDate: {
            _$class: msls.ContentItem,
            _$name: "ActualPostImplementationStartDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Date
        },
        ActualPostImplementationEndDate: {
            _$class: msls.ContentItem,
            _$name: "ActualPostImplementationEndDate",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Date
        },
        TP_TIME_ENTRies: {
            _$class: msls.ContentItem,
            _$name: "TP_TIME_ENTRies",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            value: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION
        },
        TP_TIME_ENTRies1: {
            _$class: msls.ContentItem,
            _$name: "TP_TIME_ENTRies1",
            _$parentName: "TP_TIME_ENTRies",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
                _$entry: {
                    elementType: lightSwitchApplication.TP_TIME_ENTRY
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "TP_TIME_ENTRies1",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_TIME_ENTRY,
            value: lightSwitchApplication.TP_TIME_ENTRY
        },
        c_Date: {
            _$class: msls.ContentItem,
            _$name: "c_Date",
            _$parentName: "rows",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_TIME_ENTRY,
            value: Date
        },
        Phase: {
            _$class: msls.ContentItem,
            _$name: "Phase",
            _$parentName: "rows",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_TIME_ENTRY,
            value: String
        },
        PlannedEffort: {
            _$class: msls.ContentItem,
            _$name: "PlannedEffort",
            _$parentName: "rows",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_TIME_ENTRY,
            value: Number
        },
        ActualEffort: {
            _$class: msls.ContentItem,
            _$name: "ActualEffort",
            _$parentName: "rows",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION,
            data: lightSwitchApplication.TP_TIME_ENTRY,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION, {
        /// <field>
        /// Called when a new AddEditTP_RESOURCE_ALLOCATION screen is created.
        /// <br/>created(msls.application.AddEditTP_RESOURCE_ALLOCATION screen)
        /// </field>
        created: [lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION],
        /// <field>
        /// Called before changes on an active AddEditTP_RESOURCE_ALLOCATION screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditTP_RESOURCE_ALLOCATION screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("left"); }],
        /// <field>
        /// Called after the RESOURCE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RESOURCE_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("RESOURCE"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("RowTemplate1"); }],
        /// <field>
        /// Called after the TP content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("TP"); }],
        /// <field>
        /// Called after the RowTemplate2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate2_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("RowTemplate2"); }],
        /// <field>
        /// Called after the REF_ROLE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_ROLE_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("REF_ROLE"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the Percentage content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Percentage_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("Percentage"); }],
        /// <field>
        /// Called after the AllocationBuild content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AllocationBuild_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("AllocationBuild"); }],
        /// <field>
        /// Called after the AllocationTest content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AllocationTest_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("AllocationTest"); }],
        /// <field>
        /// Called after the AllocationImplementation content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AllocationImplementation_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("AllocationImplementation"); }],
        /// <field>
        /// Called after the AllocationPostImplementation content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        AllocationPostImplementation_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("AllocationPostImplementation"); }],
        /// <field>
        /// Called after the PlannedStartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedStartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("PlannedStartDate"); }],
        /// <field>
        /// Called after the PlannedEndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedEndDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("PlannedEndDate"); }],
        /// <field>
        /// Called after the ActualStartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActualStartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("ActualStartDate"); }],
        /// <field>
        /// Called after the ActualEndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActualEndDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("ActualEndDate"); }],
        /// <field>
        /// Called after the PlannedBuildStartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedBuildStartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("PlannedBuildStartDate"); }],
        /// <field>
        /// Called after the PlannedBuildEndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedBuildEndDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("PlannedBuildEndDate"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("right"); }],
        /// <field>
        /// Called after the PlannedTestStartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedTestStartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("PlannedTestStartDate"); }],
        /// <field>
        /// Called after the PlannedTestEndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedTestEndDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("PlannedTestEndDate"); }],
        /// <field>
        /// Called after the PlannedImplementationStartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedImplementationStartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("PlannedImplementationStartDate"); }],
        /// <field>
        /// Called after the PlannedImplementationEndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedImplementationEndDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("PlannedImplementationEndDate"); }],
        /// <field>
        /// Called after the PlannedPostImplementationStartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedPostImplementationStartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("PlannedPostImplementationStartDate"); }],
        /// <field>
        /// Called after the PlannedPostImplementationEndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedPostImplementationEndDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("PlannedPostImplementationEndDate"); }],
        /// <field>
        /// Called after the ActualBuildStartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActualBuildStartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("ActualBuildStartDate"); }],
        /// <field>
        /// Called after the ActualBuildEndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActualBuildEndDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("ActualBuildEndDate"); }],
        /// <field>
        /// Called after the ActualTestStartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActualTestStartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("ActualTestStartDate"); }],
        /// <field>
        /// Called after the ActualTestEndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActualTestEndDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("ActualTestEndDate"); }],
        /// <field>
        /// Called after the ActualImplementationStartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActualImplementationStartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("ActualImplementationStartDate"); }],
        /// <field>
        /// Called after the ActualImplementationEndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActualImplementationEndDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("ActualImplementationEndDate"); }],
        /// <field>
        /// Called after the ActualPostImplementationStartDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActualPostImplementationStartDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("ActualPostImplementationStartDate"); }],
        /// <field>
        /// Called after the ActualPostImplementationEndDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActualPostImplementationEndDate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("ActualPostImplementationEndDate"); }],
        /// <field>
        /// Called after the TP_TIME_ENTRies content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_TIME_ENTRies_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("TP_TIME_ENTRies"); }],
        /// <field>
        /// Called after the TP_TIME_ENTRies1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_TIME_ENTRies1_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("TP_TIME_ENTRies1"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("rows"); }],
        /// <field>
        /// Called after the c_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        c_Date_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("c_Date"); }],
        /// <field>
        /// Called after the Phase content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phase_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("Phase"); }],
        /// <field>
        /// Called after the PlannedEffort content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedEffort_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("PlannedEffort"); }],
        /// <field>
        /// Called after the ActualEffort content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActualEffort_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_RESOURCE_ALLOCATION().findContentItem("ActualEffort"); }]
    });

    lightSwitchApplication.BrowseTP_RESOURCE_ALLOCATIONs.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTP_RESOURCE_ALLOCATIONs
        },
        TP_RESOURCE_ALLOCATIONList: {
            _$class: msls.ContentItem,
            _$name: "TP_RESOURCE_ALLOCATIONList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseTP_RESOURCE_ALLOCATIONs,
            data: lightSwitchApplication.BrowseTP_RESOURCE_ALLOCATIONs,
            value: lightSwitchApplication.BrowseTP_RESOURCE_ALLOCATIONs
        },
        TP_RESOURCE_ALLOCATIONs: {
            _$class: msls.ContentItem,
            _$name: "TP_RESOURCE_ALLOCATIONs",
            _$parentName: "TP_RESOURCE_ALLOCATIONList",
            screen: lightSwitchApplication.BrowseTP_RESOURCE_ALLOCATIONs,
            data: lightSwitchApplication.BrowseTP_RESOURCE_ALLOCATIONs,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseTP_RESOURCE_ALLOCATIONs,
                _$entry: {
                    elementType: lightSwitchApplication.TP_RESOURCE_ALLOCATION
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "TP_RESOURCE_ALLOCATIONs",
            screen: lightSwitchApplication.BrowseTP_RESOURCE_ALLOCATIONs,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: lightSwitchApplication.TP_RESOURCE_ALLOCATION
        },
        Percentage: {
            _$class: msls.ContentItem,
            _$name: "Percentage",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_RESOURCE_ALLOCATIONs,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Number
        },
        RESOURCE: {
            _$class: msls.ContentItem,
            _$name: "RESOURCE",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_RESOURCE_ALLOCATIONs,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: lightSwitchApplication.RESOURCE
        },
        TP: {
            _$class: msls.ContentItem,
            _$name: "TP",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_RESOURCE_ALLOCATIONs,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: lightSwitchApplication.TP
        },
        REF_ROLE: {
            _$class: msls.ContentItem,
            _$name: "REF_ROLE",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_RESOURCE_ALLOCATIONs,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: lightSwitchApplication.REF_ROLE
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_RESOURCE_ALLOCATIONs,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_RESOURCE_ALLOCATIONs,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTP_RESOURCE_ALLOCATIONs
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseTP_RESOURCE_ALLOCATIONs, {
        /// <field>
        /// Called when a new BrowseTP_RESOURCE_ALLOCATIONs screen is created.
        /// <br/>created(msls.application.BrowseTP_RESOURCE_ALLOCATIONs screen)
        /// </field>
        created: [lightSwitchApplication.BrowseTP_RESOURCE_ALLOCATIONs],
        /// <field>
        /// Called before changes on an active BrowseTP_RESOURCE_ALLOCATIONs screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseTP_RESOURCE_ALLOCATIONs screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseTP_RESOURCE_ALLOCATIONs],
        /// <field>
        /// Called after the TP_RESOURCE_ALLOCATIONList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_RESOURCE_ALLOCATIONList_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_RESOURCE_ALLOCATIONs().findContentItem("TP_RESOURCE_ALLOCATIONList"); }],
        /// <field>
        /// Called after the TP_RESOURCE_ALLOCATIONs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_RESOURCE_ALLOCATIONs_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_RESOURCE_ALLOCATIONs().findContentItem("TP_RESOURCE_ALLOCATIONs"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_RESOURCE_ALLOCATIONs().findContentItem("rows"); }],
        /// <field>
        /// Called after the Percentage content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Percentage_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_RESOURCE_ALLOCATIONs().findContentItem("Percentage"); }],
        /// <field>
        /// Called after the RESOURCE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RESOURCE_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_RESOURCE_ALLOCATIONs().findContentItem("RESOURCE"); }],
        /// <field>
        /// Called after the TP content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_RESOURCE_ALLOCATIONs().findContentItem("TP"); }],
        /// <field>
        /// Called after the REF_ROLE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_ROLE_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_RESOURCE_ALLOCATIONs().findContentItem("REF_ROLE"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_RESOURCE_ALLOCATIONs().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_RESOURCE_ALLOCATIONs().findContentItem("CreatedDate"); }]
    });

    lightSwitchApplication.AddEditTP_STAKEHOLDER.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTP_STAKEHOLDER
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditTP_STAKEHOLDER,
            data: lightSwitchApplication.AddEditTP_STAKEHOLDER,
            value: lightSwitchApplication.AddEditTP_STAKEHOLDER
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditTP_STAKEHOLDER,
            data: lightSwitchApplication.AddEditTP_STAKEHOLDER,
            value: lightSwitchApplication.TP_STAKEHOLDER
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTP_STAKEHOLDER,
            data: lightSwitchApplication.TP_STAKEHOLDER,
            value: lightSwitchApplication.TP_STAKEHOLDER
        },
        REF_STAKEHOLDER: {
            _$class: msls.ContentItem,
            _$name: "REF_STAKEHOLDER",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTP_STAKEHOLDER,
            data: lightSwitchApplication.TP_STAKEHOLDER,
            value: lightSwitchApplication.REF_STAKEHOLDER
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "REF_STAKEHOLDER",
            screen: lightSwitchApplication.AddEditTP_STAKEHOLDER,
            data: lightSwitchApplication.REF_STAKEHOLDER,
            value: lightSwitchApplication.REF_STAKEHOLDER
        },
        TP: {
            _$class: msls.ContentItem,
            _$name: "TP",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTP_STAKEHOLDER,
            data: lightSwitchApplication.TP_STAKEHOLDER,
            value: lightSwitchApplication.TP
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "TP",
            screen: lightSwitchApplication.AddEditTP_STAKEHOLDER,
            data: lightSwitchApplication.TP,
            value: lightSwitchApplication.TP
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTP_STAKEHOLDER
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditTP_STAKEHOLDER, {
        /// <field>
        /// Called when a new AddEditTP_STAKEHOLDER screen is created.
        /// <br/>created(msls.application.AddEditTP_STAKEHOLDER screen)
        /// </field>
        created: [lightSwitchApplication.AddEditTP_STAKEHOLDER],
        /// <field>
        /// Called before changes on an active AddEditTP_STAKEHOLDER screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditTP_STAKEHOLDER screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditTP_STAKEHOLDER],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_STAKEHOLDER().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_STAKEHOLDER().findContentItem("columns"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_STAKEHOLDER().findContentItem("right"); }],
        /// <field>
        /// Called after the REF_STAKEHOLDER content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_STAKEHOLDER_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_STAKEHOLDER().findContentItem("REF_STAKEHOLDER"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_STAKEHOLDER().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the TP content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_STAKEHOLDER().findContentItem("TP"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_STAKEHOLDER().findContentItem("RowTemplate1"); }]
    });

    lightSwitchApplication.BrowseTP_STAKEHOLDERs.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTP_STAKEHOLDERs
        },
        TP_STAKEHOLDERList: {
            _$class: msls.ContentItem,
            _$name: "TP_STAKEHOLDERList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseTP_STAKEHOLDERs,
            data: lightSwitchApplication.BrowseTP_STAKEHOLDERs,
            value: lightSwitchApplication.BrowseTP_STAKEHOLDERs
        },
        TP_STAKEHOLDERs: {
            _$class: msls.ContentItem,
            _$name: "TP_STAKEHOLDERs",
            _$parentName: "TP_STAKEHOLDERList",
            screen: lightSwitchApplication.BrowseTP_STAKEHOLDERs,
            data: lightSwitchApplication.BrowseTP_STAKEHOLDERs,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseTP_STAKEHOLDERs,
                _$entry: {
                    elementType: lightSwitchApplication.TP_STAKEHOLDER
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "TP_STAKEHOLDERs",
            screen: lightSwitchApplication.BrowseTP_STAKEHOLDERs,
            data: lightSwitchApplication.TP_STAKEHOLDER,
            value: lightSwitchApplication.TP_STAKEHOLDER
        },
        REF_STAKEHOLDER: {
            _$class: msls.ContentItem,
            _$name: "REF_STAKEHOLDER",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_STAKEHOLDERs,
            data: lightSwitchApplication.TP_STAKEHOLDER,
            value: lightSwitchApplication.REF_STAKEHOLDER
        },
        TP: {
            _$class: msls.ContentItem,
            _$name: "TP",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_STAKEHOLDERs,
            data: lightSwitchApplication.TP_STAKEHOLDER,
            value: lightSwitchApplication.TP
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_STAKEHOLDERs,
            data: lightSwitchApplication.TP_STAKEHOLDER,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_STAKEHOLDERs,
            data: lightSwitchApplication.TP_STAKEHOLDER,
            value: Date
        },
        ModifiedBy: {
            _$class: msls.ContentItem,
            _$name: "ModifiedBy",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_STAKEHOLDERs,
            data: lightSwitchApplication.TP_STAKEHOLDER,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTP_STAKEHOLDERs
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseTP_STAKEHOLDERs, {
        /// <field>
        /// Called when a new BrowseTP_STAKEHOLDERs screen is created.
        /// <br/>created(msls.application.BrowseTP_STAKEHOLDERs screen)
        /// </field>
        created: [lightSwitchApplication.BrowseTP_STAKEHOLDERs],
        /// <field>
        /// Called before changes on an active BrowseTP_STAKEHOLDERs screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseTP_STAKEHOLDERs screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseTP_STAKEHOLDERs],
        /// <field>
        /// Called after the TP_STAKEHOLDERList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_STAKEHOLDERList_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_STAKEHOLDERs().findContentItem("TP_STAKEHOLDERList"); }],
        /// <field>
        /// Called after the TP_STAKEHOLDERs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_STAKEHOLDERs_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_STAKEHOLDERs().findContentItem("TP_STAKEHOLDERs"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_STAKEHOLDERs().findContentItem("rows"); }],
        /// <field>
        /// Called after the REF_STAKEHOLDER content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_STAKEHOLDER_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_STAKEHOLDERs().findContentItem("REF_STAKEHOLDER"); }],
        /// <field>
        /// Called after the TP content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_STAKEHOLDERs().findContentItem("TP"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_STAKEHOLDERs().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_STAKEHOLDERs().findContentItem("CreatedDate"); }],
        /// <field>
        /// Called after the ModifiedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ModifiedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_STAKEHOLDERs().findContentItem("ModifiedBy"); }]
    });

    lightSwitchApplication.AddEditTP_TIME_ENTRY.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTP_TIME_ENTRY
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditTP_TIME_ENTRY,
            data: lightSwitchApplication.AddEditTP_TIME_ENTRY,
            value: lightSwitchApplication.AddEditTP_TIME_ENTRY
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditTP_TIME_ENTRY,
            data: lightSwitchApplication.AddEditTP_TIME_ENTRY,
            value: lightSwitchApplication.TP_TIME_ENTRY
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTP_TIME_ENTRY,
            data: lightSwitchApplication.TP_TIME_ENTRY,
            value: lightSwitchApplication.TP_TIME_ENTRY
        },
        ResourceId: {
            _$class: msls.ContentItem,
            _$name: "ResourceId",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTP_TIME_ENTRY,
            data: lightSwitchApplication.TP_TIME_ENTRY,
            value: Number
        },
        c_Date: {
            _$class: msls.ContentItem,
            _$name: "c_Date",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTP_TIME_ENTRY,
            data: lightSwitchApplication.TP_TIME_ENTRY,
            value: Date
        },
        PlannedEffort: {
            _$class: msls.ContentItem,
            _$name: "PlannedEffort",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTP_TIME_ENTRY,
            data: lightSwitchApplication.TP_TIME_ENTRY,
            value: Number
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTP_TIME_ENTRY,
            data: lightSwitchApplication.TP_TIME_ENTRY,
            value: lightSwitchApplication.TP_TIME_ENTRY
        },
        ActualEffort: {
            _$class: msls.ContentItem,
            _$name: "ActualEffort",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTP_TIME_ENTRY,
            data: lightSwitchApplication.TP_TIME_ENTRY,
            value: Number
        },
        Phase: {
            _$class: msls.ContentItem,
            _$name: "Phase",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTP_TIME_ENTRY,
            data: lightSwitchApplication.TP_TIME_ENTRY,
            value: String
        },
        TP_RESOURCE_ALLOCATION: {
            _$class: msls.ContentItem,
            _$name: "TP_RESOURCE_ALLOCATION",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTP_TIME_ENTRY,
            data: lightSwitchApplication.TP_TIME_ENTRY,
            value: lightSwitchApplication.TP_RESOURCE_ALLOCATION
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "TP_RESOURCE_ALLOCATION",
            screen: lightSwitchApplication.AddEditTP_TIME_ENTRY,
            data: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
            value: lightSwitchApplication.TP_RESOURCE_ALLOCATION
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTP_TIME_ENTRY
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditTP_TIME_ENTRY, {
        /// <field>
        /// Called when a new AddEditTP_TIME_ENTRY screen is created.
        /// <br/>created(msls.application.AddEditTP_TIME_ENTRY screen)
        /// </field>
        created: [lightSwitchApplication.AddEditTP_TIME_ENTRY],
        /// <field>
        /// Called before changes on an active AddEditTP_TIME_ENTRY screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditTP_TIME_ENTRY screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditTP_TIME_ENTRY],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_TIME_ENTRY().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_TIME_ENTRY().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_TIME_ENTRY().findContentItem("left"); }],
        /// <field>
        /// Called after the ResourceId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ResourceId_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_TIME_ENTRY().findContentItem("ResourceId"); }],
        /// <field>
        /// Called after the c_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        c_Date_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_TIME_ENTRY().findContentItem("c_Date"); }],
        /// <field>
        /// Called after the PlannedEffort content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedEffort_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_TIME_ENTRY().findContentItem("PlannedEffort"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_TIME_ENTRY().findContentItem("right"); }],
        /// <field>
        /// Called after the ActualEffort content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActualEffort_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_TIME_ENTRY().findContentItem("ActualEffort"); }],
        /// <field>
        /// Called after the Phase content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phase_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_TIME_ENTRY().findContentItem("Phase"); }],
        /// <field>
        /// Called after the TP_RESOURCE_ALLOCATION content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_RESOURCE_ALLOCATION_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_TIME_ENTRY().findContentItem("TP_RESOURCE_ALLOCATION"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_TIME_ENTRY().findContentItem("RowTemplate"); }]
    });

    lightSwitchApplication.BrowseTP_TIME_ENTRies.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTP_TIME_ENTRies
        },
        TP_TIME_ENTRYList: {
            _$class: msls.ContentItem,
            _$name: "TP_TIME_ENTRYList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseTP_TIME_ENTRies,
            data: lightSwitchApplication.BrowseTP_TIME_ENTRies,
            value: lightSwitchApplication.BrowseTP_TIME_ENTRies
        },
        TP_TIME_ENTRies: {
            _$class: msls.ContentItem,
            _$name: "TP_TIME_ENTRies",
            _$parentName: "TP_TIME_ENTRYList",
            screen: lightSwitchApplication.BrowseTP_TIME_ENTRies,
            data: lightSwitchApplication.BrowseTP_TIME_ENTRies,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseTP_TIME_ENTRies,
                _$entry: {
                    elementType: lightSwitchApplication.TP_TIME_ENTRY
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "TP_TIME_ENTRies",
            screen: lightSwitchApplication.BrowseTP_TIME_ENTRies,
            data: lightSwitchApplication.TP_TIME_ENTRY,
            value: lightSwitchApplication.TP_TIME_ENTRY
        },
        ResourceId: {
            _$class: msls.ContentItem,
            _$name: "ResourceId",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_TIME_ENTRies,
            data: lightSwitchApplication.TP_TIME_ENTRY,
            value: Number
        },
        Phase: {
            _$class: msls.ContentItem,
            _$name: "Phase",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_TIME_ENTRies,
            data: lightSwitchApplication.TP_TIME_ENTRY,
            value: String
        },
        c_Date: {
            _$class: msls.ContentItem,
            _$name: "c_Date",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_TIME_ENTRies,
            data: lightSwitchApplication.TP_TIME_ENTRY,
            value: Date
        },
        PlannedEffort: {
            _$class: msls.ContentItem,
            _$name: "PlannedEffort",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_TIME_ENTRies,
            data: lightSwitchApplication.TP_TIME_ENTRY,
            value: Number
        },
        ActualEffort: {
            _$class: msls.ContentItem,
            _$name: "ActualEffort",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_TIME_ENTRies,
            data: lightSwitchApplication.TP_TIME_ENTRY,
            value: Number
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTP_TIME_ENTRies
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseTP_TIME_ENTRies, {
        /// <field>
        /// Called when a new BrowseTP_TIME_ENTRies screen is created.
        /// <br/>created(msls.application.BrowseTP_TIME_ENTRies screen)
        /// </field>
        created: [lightSwitchApplication.BrowseTP_TIME_ENTRies],
        /// <field>
        /// Called before changes on an active BrowseTP_TIME_ENTRies screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseTP_TIME_ENTRies screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseTP_TIME_ENTRies],
        /// <field>
        /// Called after the TP_TIME_ENTRYList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_TIME_ENTRYList_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_TIME_ENTRies().findContentItem("TP_TIME_ENTRYList"); }],
        /// <field>
        /// Called after the TP_TIME_ENTRies content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_TIME_ENTRies_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_TIME_ENTRies().findContentItem("TP_TIME_ENTRies"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_TIME_ENTRies().findContentItem("rows"); }],
        /// <field>
        /// Called after the ResourceId content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ResourceId_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_TIME_ENTRies().findContentItem("ResourceId"); }],
        /// <field>
        /// Called after the Phase content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Phase_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_TIME_ENTRies().findContentItem("Phase"); }],
        /// <field>
        /// Called after the c_Date content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        c_Date_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_TIME_ENTRies().findContentItem("c_Date"); }],
        /// <field>
        /// Called after the PlannedEffort content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PlannedEffort_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_TIME_ENTRies().findContentItem("PlannedEffort"); }],
        /// <field>
        /// Called after the ActualEffort content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ActualEffort_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_TIME_ENTRies().findContentItem("ActualEffort"); }]
    });

    lightSwitchApplication.AddEditTP.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTP
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditTP,
            data: lightSwitchApplication.AddEditTP,
            value: lightSwitchApplication.AddEditTP
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditTP,
            data: lightSwitchApplication.AddEditTP,
            value: lightSwitchApplication.TP
        },
        left: {
            _$class: msls.ContentItem,
            _$name: "left",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTP,
            data: lightSwitchApplication.TP,
            value: lightSwitchApplication.TP
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTP,
            data: lightSwitchApplication.TP,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "left",
            screen: lightSwitchApplication.AddEditTP,
            data: lightSwitchApplication.TP,
            value: String
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTP,
            data: lightSwitchApplication.TP,
            value: lightSwitchApplication.TP
        },
        PMName: {
            _$class: msls.ContentItem,
            _$name: "PMName",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTP,
            data: lightSwitchApplication.TP,
            value: String
        },
        PMEmail: {
            _$class: msls.ContentItem,
            _$name: "PMEmail",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTP,
            data: lightSwitchApplication.TP,
            value: String
        },
        TPStatus: {
            _$class: msls.ContentItem,
            _$name: "TPStatus",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTP,
            data: lightSwitchApplication.TP,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTP
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditTP, {
        /// <field>
        /// Called when a new AddEditTP screen is created.
        /// <br/>created(msls.application.AddEditTP screen)
        /// </field>
        created: [lightSwitchApplication.AddEditTP],
        /// <field>
        /// Called before changes on an active AddEditTP screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditTP screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditTP],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP().findContentItem("columns"); }],
        /// <field>
        /// Called after the left content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        left_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP().findContentItem("left"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP().findContentItem("Description"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP().findContentItem("right"); }],
        /// <field>
        /// Called after the PMName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PMName_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP().findContentItem("PMName"); }],
        /// <field>
        /// Called after the PMEmail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PMEmail_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP().findContentItem("PMEmail"); }],
        /// <field>
        /// Called after the TPStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TPStatus_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP().findContentItem("TPStatus"); }]
    });

    lightSwitchApplication.BrowseTPs.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTPs
        },
        TPList: {
            _$class: msls.ContentItem,
            _$name: "TPList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseTPs,
            data: lightSwitchApplication.BrowseTPs,
            value: lightSwitchApplication.BrowseTPs
        },
        TPs: {
            _$class: msls.ContentItem,
            _$name: "TPs",
            _$parentName: "TPList",
            screen: lightSwitchApplication.BrowseTPs,
            data: lightSwitchApplication.BrowseTPs,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseTPs,
                _$entry: {
                    elementType: lightSwitchApplication.TP
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "TPs",
            screen: lightSwitchApplication.BrowseTPs,
            data: lightSwitchApplication.TP,
            value: lightSwitchApplication.TP
        },
        Name: {
            _$class: msls.ContentItem,
            _$name: "Name",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTPs,
            data: lightSwitchApplication.TP,
            value: String
        },
        Description: {
            _$class: msls.ContentItem,
            _$name: "Description",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTPs,
            data: lightSwitchApplication.TP,
            value: String
        },
        PMName: {
            _$class: msls.ContentItem,
            _$name: "PMName",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTPs,
            data: lightSwitchApplication.TP,
            value: String
        },
        PMEmail: {
            _$class: msls.ContentItem,
            _$name: "PMEmail",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTPs,
            data: lightSwitchApplication.TP,
            value: String
        },
        TPStatus: {
            _$class: msls.ContentItem,
            _$name: "TPStatus",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTPs,
            data: lightSwitchApplication.TP,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTPs
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseTPs, {
        /// <field>
        /// Called when a new BrowseTPs screen is created.
        /// <br/>created(msls.application.BrowseTPs screen)
        /// </field>
        created: [lightSwitchApplication.BrowseTPs],
        /// <field>
        /// Called before changes on an active BrowseTPs screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseTPs screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseTPs],
        /// <field>
        /// Called after the TPList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TPList_postRender: [$element, function () { return new lightSwitchApplication.BrowseTPs().findContentItem("TPList"); }],
        /// <field>
        /// Called after the TPs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TPs_postRender: [$element, function () { return new lightSwitchApplication.BrowseTPs().findContentItem("TPs"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseTPs().findContentItem("rows"); }],
        /// <field>
        /// Called after the Name content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Name_postRender: [$element, function () { return new lightSwitchApplication.BrowseTPs().findContentItem("Name"); }],
        /// <field>
        /// Called after the Description content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Description_postRender: [$element, function () { return new lightSwitchApplication.BrowseTPs().findContentItem("Description"); }],
        /// <field>
        /// Called after the PMName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PMName_postRender: [$element, function () { return new lightSwitchApplication.BrowseTPs().findContentItem("PMName"); }],
        /// <field>
        /// Called after the PMEmail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PMEmail_postRender: [$element, function () { return new lightSwitchApplication.BrowseTPs().findContentItem("PMEmail"); }],
        /// <field>
        /// Called after the TPStatus content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TPStatus_postRender: [$element, function () { return new lightSwitchApplication.BrowseTPs().findContentItem("TPStatus"); }]
    });

    lightSwitchApplication.AddEditTP_VENDOR.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTP_VENDOR
        },
        Details: {
            _$class: msls.ContentItem,
            _$name: "Details",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.AddEditTP_VENDOR,
            data: lightSwitchApplication.AddEditTP_VENDOR,
            value: lightSwitchApplication.AddEditTP_VENDOR
        },
        columns: {
            _$class: msls.ContentItem,
            _$name: "columns",
            _$parentName: "Details",
            screen: lightSwitchApplication.AddEditTP_VENDOR,
            data: lightSwitchApplication.AddEditTP_VENDOR,
            value: lightSwitchApplication.TP_VENDOR
        },
        right: {
            _$class: msls.ContentItem,
            _$name: "right",
            _$parentName: "columns",
            screen: lightSwitchApplication.AddEditTP_VENDOR,
            data: lightSwitchApplication.TP_VENDOR,
            value: lightSwitchApplication.TP_VENDOR
        },
        REF_VENDOR: {
            _$class: msls.ContentItem,
            _$name: "REF_VENDOR",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTP_VENDOR,
            data: lightSwitchApplication.TP_VENDOR,
            value: lightSwitchApplication.REF_VENDOR
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "REF_VENDOR",
            screen: lightSwitchApplication.AddEditTP_VENDOR,
            data: lightSwitchApplication.REF_VENDOR,
            value: lightSwitchApplication.REF_VENDOR
        },
        TP: {
            _$class: msls.ContentItem,
            _$name: "TP",
            _$parentName: "right",
            screen: lightSwitchApplication.AddEditTP_VENDOR,
            data: lightSwitchApplication.TP_VENDOR,
            value: lightSwitchApplication.TP
        },
        RowTemplate1: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate1",
            _$parentName: "TP",
            screen: lightSwitchApplication.AddEditTP_VENDOR,
            data: lightSwitchApplication.TP,
            value: lightSwitchApplication.TP
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.AddEditTP_VENDOR
        }
    };

    msls._addEntryPoints(lightSwitchApplication.AddEditTP_VENDOR, {
        /// <field>
        /// Called when a new AddEditTP_VENDOR screen is created.
        /// <br/>created(msls.application.AddEditTP_VENDOR screen)
        /// </field>
        created: [lightSwitchApplication.AddEditTP_VENDOR],
        /// <field>
        /// Called before changes on an active AddEditTP_VENDOR screen are applied.
        /// <br/>beforeApplyChanges(msls.application.AddEditTP_VENDOR screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.AddEditTP_VENDOR],
        /// <field>
        /// Called after the Details content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        Details_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_VENDOR().findContentItem("Details"); }],
        /// <field>
        /// Called after the columns content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        columns_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_VENDOR().findContentItem("columns"); }],
        /// <field>
        /// Called after the right content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        right_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_VENDOR().findContentItem("right"); }],
        /// <field>
        /// Called after the REF_VENDOR content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_VENDOR_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_VENDOR().findContentItem("REF_VENDOR"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_VENDOR().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the TP content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_VENDOR().findContentItem("TP"); }],
        /// <field>
        /// Called after the RowTemplate1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate1_postRender: [$element, function () { return new lightSwitchApplication.AddEditTP_VENDOR().findContentItem("RowTemplate1"); }]
    });

    lightSwitchApplication.BrowseTP_VENDORs.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTP_VENDORs
        },
        TP_VENDORList: {
            _$class: msls.ContentItem,
            _$name: "TP_VENDORList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowseTP_VENDORs,
            data: lightSwitchApplication.BrowseTP_VENDORs,
            value: lightSwitchApplication.BrowseTP_VENDORs
        },
        TP_VENDORs: {
            _$class: msls.ContentItem,
            _$name: "TP_VENDORs",
            _$parentName: "TP_VENDORList",
            screen: lightSwitchApplication.BrowseTP_VENDORs,
            data: lightSwitchApplication.BrowseTP_VENDORs,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowseTP_VENDORs,
                _$entry: {
                    elementType: lightSwitchApplication.TP_VENDOR
                }
            }
        },
        rows: {
            _$class: msls.ContentItem,
            _$name: "rows",
            _$parentName: "TP_VENDORs",
            screen: lightSwitchApplication.BrowseTP_VENDORs,
            data: lightSwitchApplication.TP_VENDOR,
            value: lightSwitchApplication.TP_VENDOR
        },
        REF_VENDOR2: {
            _$class: msls.ContentItem,
            _$name: "REF_VENDOR2",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_VENDORs,
            data: lightSwitchApplication.TP_VENDOR,
            value: lightSwitchApplication.REF_VENDOR
        },
        TP: {
            _$class: msls.ContentItem,
            _$name: "TP",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_VENDORs,
            data: lightSwitchApplication.TP_VENDOR,
            value: lightSwitchApplication.TP
        },
        CreatedBy: {
            _$class: msls.ContentItem,
            _$name: "CreatedBy",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_VENDORs,
            data: lightSwitchApplication.TP_VENDOR,
            value: String
        },
        CreatedDate: {
            _$class: msls.ContentItem,
            _$name: "CreatedDate",
            _$parentName: "rows",
            screen: lightSwitchApplication.BrowseTP_VENDORs,
            data: lightSwitchApplication.TP_VENDOR,
            value: Date
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowseTP_VENDORs
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowseTP_VENDORs, {
        /// <field>
        /// Called when a new BrowseTP_VENDORs screen is created.
        /// <br/>created(msls.application.BrowseTP_VENDORs screen)
        /// </field>
        created: [lightSwitchApplication.BrowseTP_VENDORs],
        /// <field>
        /// Called before changes on an active BrowseTP_VENDORs screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowseTP_VENDORs screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowseTP_VENDORs],
        /// <field>
        /// Called after the TP_VENDORList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_VENDORList_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_VENDORs().findContentItem("TP_VENDORList"); }],
        /// <field>
        /// Called after the TP_VENDORs content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_VENDORs_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_VENDORs().findContentItem("TP_VENDORs"); }],
        /// <field>
        /// Called after the rows content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        rows_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_VENDORs().findContentItem("rows"); }],
        /// <field>
        /// Called after the REF_VENDOR2 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        REF_VENDOR2_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_VENDORs().findContentItem("REF_VENDOR2"); }],
        /// <field>
        /// Called after the TP content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TP_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_VENDORs().findContentItem("TP"); }],
        /// <field>
        /// Called after the CreatedBy content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedBy_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_VENDORs().findContentItem("CreatedBy"); }],
        /// <field>
        /// Called after the CreatedDate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        CreatedDate_postRender: [$element, function () { return new lightSwitchApplication.BrowseTP_VENDORs().findContentItem("CreatedDate"); }]
    });

    lightSwitchApplication.BrowsePMApprovalReports.prototype._$contentItems = {
        Tabs: {
            _$class: msls.ContentItem,
            _$name: "Tabs",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePMApprovalReports
        },
        PMApprovalReportList: {
            _$class: msls.ContentItem,
            _$name: "PMApprovalReportList",
            _$parentName: "Tabs",
            screen: lightSwitchApplication.BrowsePMApprovalReports,
            data: lightSwitchApplication.BrowsePMApprovalReports,
            value: lightSwitchApplication.BrowsePMApprovalReports
        },
        WijmoGrid: {
            _$class: msls.ContentItem,
            _$name: "WijmoGrid",
            _$parentName: "PMApprovalReportList",
            screen: lightSwitchApplication.BrowsePMApprovalReports,
            data: lightSwitchApplication.BrowsePMApprovalReports,
            value: {
                _$class: msls.VisualCollection,
                screen: lightSwitchApplication.BrowsePMApprovalReports,
                _$entry: {
                    elementType: lightSwitchApplication.PMApprovalReport
                }
            }
        },
        RowTemplate: {
            _$class: msls.ContentItem,
            _$name: "RowTemplate",
            _$parentName: "WijmoGrid",
            screen: lightSwitchApplication.BrowsePMApprovalReports,
            data: lightSwitchApplication.PMApprovalReport,
            value: lightSwitchApplication.PMApprovalReport
        },
        ConsolidateID: {
            _$class: msls.ContentItem,
            _$name: "ConsolidateID",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePMApprovalReports,
            data: lightSwitchApplication.PMApprovalReport,
            value: Number
        },
        TYPE: {
            _$class: msls.ContentItem,
            _$name: "TYPE",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePMApprovalReports,
            data: lightSwitchApplication.PMApprovalReport,
            value: String
        },
        PHASE: {
            _$class: msls.ContentItem,
            _$name: "PHASE",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePMApprovalReports,
            data: lightSwitchApplication.PMApprovalReport,
            value: String
        },
        STARTWEEKDATE: {
            _$class: msls.ContentItem,
            _$name: "STARTWEEKDATE",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePMApprovalReports,
            data: lightSwitchApplication.PMApprovalReport,
            value: Date
        },
        WEEK: {
            _$class: msls.ContentItem,
            _$name: "WEEK",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePMApprovalReports,
            data: lightSwitchApplication.PMApprovalReport,
            value: Number
        },
        APPLICATION1: {
            _$class: msls.ContentItem,
            _$name: "APPLICATION1",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePMApprovalReports,
            data: lightSwitchApplication.PMApprovalReport,
            value: String
        },
        c_DATE: {
            _$class: msls.ContentItem,
            _$name: "c_DATE",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePMApprovalReports,
            data: lightSwitchApplication.PMApprovalReport,
            value: Date
        },
        RESOURCE: {
            _$class: msls.ContentItem,
            _$name: "RESOURCE",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePMApprovalReports,
            data: lightSwitchApplication.PMApprovalReport,
            value: String
        },
        DELIVERABLES: {
            _$class: msls.ContentItem,
            _$name: "DELIVERABLES",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePMApprovalReports,
            data: lightSwitchApplication.PMApprovalReport,
            value: String
        },
        ACTIVITY: {
            _$class: msls.ContentItem,
            _$name: "ACTIVITY",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePMApprovalReports,
            data: lightSwitchApplication.PMApprovalReport,
            value: String
        },
        HOURS: {
            _$class: msls.ContentItem,
            _$name: "HOURS",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePMApprovalReports,
            data: lightSwitchApplication.PMApprovalReport,
            value: Number
        },
        RATEPERDAY: {
            _$class: msls.ContentItem,
            _$name: "RATEPERDAY",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePMApprovalReports,
            data: lightSwitchApplication.PMApprovalReport,
            value: Number
        },
        PHASE_NOTCHANGE: {
            _$class: msls.ContentItem,
            _$name: "PHASE_NOTCHANGE",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePMApprovalReports,
            data: lightSwitchApplication.PMApprovalReport,
            value: String
        },
        BILLEDHOURS: {
            _$class: msls.ContentItem,
            _$name: "BILLEDHOURS",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePMApprovalReports,
            data: lightSwitchApplication.PMApprovalReport,
            value: Number
        },
        BILLEDVALUE: {
            _$class: msls.ContentItem,
            _$name: "BILLEDVALUE",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePMApprovalReports,
            data: lightSwitchApplication.PMApprovalReport,
            value: Number
        },
        PMName: {
            _$class: msls.ContentItem,
            _$name: "PMName",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePMApprovalReports,
            data: lightSwitchApplication.PMApprovalReport,
            value: String
        },
        PMEmail: {
            _$class: msls.ContentItem,
            _$name: "PMEmail",
            _$parentName: "RowTemplate",
            screen: lightSwitchApplication.BrowsePMApprovalReports,
            data: lightSwitchApplication.PMApprovalReport,
            value: String
        },
        Popups: {
            _$class: msls.ContentItem,
            _$name: "Popups",
            _$parentName: "RootContentItem",
            screen: lightSwitchApplication.BrowsePMApprovalReports
        }
    };

    msls._addEntryPoints(lightSwitchApplication.BrowsePMApprovalReports, {
        /// <field>
        /// Called when a new BrowsePMApprovalReports screen is created.
        /// <br/>created(msls.application.BrowsePMApprovalReports screen)
        /// </field>
        created: [lightSwitchApplication.BrowsePMApprovalReports],
        /// <field>
        /// Called before changes on an active BrowsePMApprovalReports screen are applied.
        /// <br/>beforeApplyChanges(msls.application.BrowsePMApprovalReports screen)
        /// </field>
        beforeApplyChanges: [lightSwitchApplication.BrowsePMApprovalReports],
        /// <field>
        /// Called to determine if the PreviousPage method can be executed.
        /// <br/>canExecute(msls.application.BrowsePMApprovalReports screen)
        /// </field>
        PreviousPage_canExecute: [lightSwitchApplication.BrowsePMApprovalReports],
        /// <field>
        /// Called to execute the PreviousPage method.
        /// <br/>execute(msls.application.BrowsePMApprovalReports screen)
        /// </field>
        PreviousPage_execute: [lightSwitchApplication.BrowsePMApprovalReports],
        /// <field>
        /// Called to determine if the NextPage method can be executed.
        /// <br/>canExecute(msls.application.BrowsePMApprovalReports screen)
        /// </field>
        NextPage_canExecute: [lightSwitchApplication.BrowsePMApprovalReports],
        /// <field>
        /// Called to execute the NextPage method.
        /// <br/>execute(msls.application.BrowsePMApprovalReports screen)
        /// </field>
        NextPage_execute: [lightSwitchApplication.BrowsePMApprovalReports],
        /// <field>
        /// Called after the PMApprovalReportList content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PMApprovalReportList_postRender: [$element, function () { return new lightSwitchApplication.BrowsePMApprovalReports().findContentItem("PMApprovalReportList"); }],
        /// <field>
        /// Called after the WijmoGrid content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WijmoGrid_postRender: [$element, function () { return new lightSwitchApplication.BrowsePMApprovalReports().findContentItem("WijmoGrid"); }],
        /// <field>
        /// Called after the RowTemplate content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RowTemplate_postRender: [$element, function () { return new lightSwitchApplication.BrowsePMApprovalReports().findContentItem("RowTemplate"); }],
        /// <field>
        /// Called after the ConsolidateID content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ConsolidateID_postRender: [$element, function () { return new lightSwitchApplication.BrowsePMApprovalReports().findContentItem("ConsolidateID"); }],
        /// <field>
        /// Called after the TYPE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        TYPE_postRender: [$element, function () { return new lightSwitchApplication.BrowsePMApprovalReports().findContentItem("TYPE"); }],
        /// <field>
        /// Called after the PHASE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PHASE_postRender: [$element, function () { return new lightSwitchApplication.BrowsePMApprovalReports().findContentItem("PHASE"); }],
        /// <field>
        /// Called after the STARTWEEKDATE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        STARTWEEKDATE_postRender: [$element, function () { return new lightSwitchApplication.BrowsePMApprovalReports().findContentItem("STARTWEEKDATE"); }],
        /// <field>
        /// Called after the WEEK content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        WEEK_postRender: [$element, function () { return new lightSwitchApplication.BrowsePMApprovalReports().findContentItem("WEEK"); }],
        /// <field>
        /// Called after the APPLICATION1 content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        APPLICATION1_postRender: [$element, function () { return new lightSwitchApplication.BrowsePMApprovalReports().findContentItem("APPLICATION1"); }],
        /// <field>
        /// Called after the c_DATE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        c_DATE_postRender: [$element, function () { return new lightSwitchApplication.BrowsePMApprovalReports().findContentItem("c_DATE"); }],
        /// <field>
        /// Called after the RESOURCE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RESOURCE_postRender: [$element, function () { return new lightSwitchApplication.BrowsePMApprovalReports().findContentItem("RESOURCE"); }],
        /// <field>
        /// Called after the DELIVERABLES content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        DELIVERABLES_postRender: [$element, function () { return new lightSwitchApplication.BrowsePMApprovalReports().findContentItem("DELIVERABLES"); }],
        /// <field>
        /// Called after the ACTIVITY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        ACTIVITY_postRender: [$element, function () { return new lightSwitchApplication.BrowsePMApprovalReports().findContentItem("ACTIVITY"); }],
        /// <field>
        /// Called after the HOURS content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        HOURS_postRender: [$element, function () { return new lightSwitchApplication.BrowsePMApprovalReports().findContentItem("HOURS"); }],
        /// <field>
        /// Called after the RATEPERDAY content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        RATEPERDAY_postRender: [$element, function () { return new lightSwitchApplication.BrowsePMApprovalReports().findContentItem("RATEPERDAY"); }],
        /// <field>
        /// Called after the PHASE_NOTCHANGE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PHASE_NOTCHANGE_postRender: [$element, function () { return new lightSwitchApplication.BrowsePMApprovalReports().findContentItem("PHASE_NOTCHANGE"); }],
        /// <field>
        /// Called after the BILLEDHOURS content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BILLEDHOURS_postRender: [$element, function () { return new lightSwitchApplication.BrowsePMApprovalReports().findContentItem("BILLEDHOURS"); }],
        /// <field>
        /// Called after the BILLEDVALUE content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        BILLEDVALUE_postRender: [$element, function () { return new lightSwitchApplication.BrowsePMApprovalReports().findContentItem("BILLEDVALUE"); }],
        /// <field>
        /// Called after the PMName content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PMName_postRender: [$element, function () { return new lightSwitchApplication.BrowsePMApprovalReports().findContentItem("PMName"); }],
        /// <field>
        /// Called after the PMEmail content item has been rendered.
        /// <br/>postRender(HTMLElement element, msls.ContentItem contentItem)
        /// </field>
        PMEmail_postRender: [$element, function () { return new lightSwitchApplication.BrowsePMApprovalReports().findContentItem("PMEmail"); }]
    });

}(msls.application));