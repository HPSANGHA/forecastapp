﻿/// <reference path="~/GeneratedArtifacts/viewModel.js" />
/// <reference path="../Scripts/c1ls-4.0.20143.39.js" />

if (typeof c1ls === "undefined") {
    window.location.href = "http://bit.ly/c1ls-nuget";
}

// http://bit.ly/c1ls-grid
//
myapp.BrowsePMApprovalReports.WijmoGrid_render = function (element, contentItem) {

    var grid = null;
    var table = $("<table/>");
    table.appendTo($(element));

    contentItem.value.oncollectionchange = function () {
        if (grid === null) {
            var options = {
                next: "NextPage",
                previous: "PreviousPage"
            };

            grid = c1ls.getGridContent(table, contentItem, options);
            contentItem.screen.WijmoGrid = grid;

            table.wijgrid({
                // initialization
                columns: grid.Columns,
                data: grid.Rows(),

                // editing
                editingMode: "none",
                afterCellUpdate: grid.OnCellUpdate,
                currentCellChanged: grid.OnCellChanged,

                // sorting
                allowSorting: true,
                sorting: grid.Sorting,

                // filtering
                showFilter: false,
                filtering: grid.Filtering,

                // selection
                selectionMode: "singleRow",
                showRowHeader: grid.ShowRowHeader,
                showSelectionOnRender: false,
                cellClicked: grid.OnCellClicked,
                cellStyleFormatter: grid.OnCellFormat
            });
        }
    };

    c1ls.renderControl(contentItem);
};

myapp.BrowsePMApprovalReports.NextPage_canExecute = function (screen) {
    $(".msls-header").removeClass("slidedown");
    $(".msls-footer").removeClass("slideup");
    return screen.PMApprovalReports.isLoaded;
};

myapp.BrowsePMApprovalReports.NextPage_execute = function (screen) {
    screen.WijmoGrid.NextPage();
};

myapp.BrowsePMApprovalReports.PreviousPage_canExecute = function (screen) {
    return screen.PMApprovalReports.isLoaded;
};

myapp.BrowsePMApprovalReports.PreviousPage_execute = function (screen) {
    screen.WijmoGrid.PreviousPage();
};