/// <reference path="data.js" />

(function (lightSwitchApplication) {

    var $Screen = msls.Screen,
        $defineScreen = msls._defineScreen,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString,
        $defineShowScreen = msls._defineShowScreen;

    function AddEditAPPLICATION1(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditAPPLICATION1 screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="APPLICATION1" type="msls.application.APPLICATION1">
        /// Gets or sets the aPPLICATION1 for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditAPPLICATION1.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditAPPLICATION1", parameters);
    }

    function BrowseAPPLICATIONs(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseAPPLICATIONs screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="APPLICATIONs" type="msls.VisualCollection" elementType="msls.application.APPLICATION1">
        /// Gets the aPPLICATIONs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseAPPLICATIONs.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseAPPLICATIONs", parameters);
    }

    function BrowseTPFilterReport1(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseTPFilterReport1 screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TPFilterReport" type="msls.VisualCollection" elementType="msls.application.GenerateResourceReport">
        /// Gets the tPFilterReport for this screen.
        /// </field>
        /// <field name="GenerateResourceReportTP" type="String">
        /// Gets or sets the generateResourceReportTP for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseTPFilterReport1.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseTPFilterReport1", parameters);
    }

    function ResourceNameFilterChart(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the ResourceNameFilterChart screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ResourceNameFilter" type="msls.VisualCollection" elementType="msls.application.TP_TIME_ENTRY">
        /// Gets the resourceNameFilter for this screen.
        /// </field>
        /// <field name="TP_TIME_ENTRYResourceName" type="String">
        /// Gets or sets the tP_TIME_ENTRYResourceName for this screen.
        /// </field>
        /// <field name="details" type="msls.application.ResourceNameFilterChart.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "ResourceNameFilterChart", parameters);
    }

    function TPFilterReportChart(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the TPFilterReportChart screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TPFilterReport" type="msls.VisualCollection" elementType="msls.application.GenerateResourceReport">
        /// Gets the tPFilterReport for this screen.
        /// </field>
        /// <field name="GenerateResourceReportTP" type="String">
        /// Gets or sets the generateResourceReportTP for this screen.
        /// </field>
        /// <field name="details" type="msls.application.TPFilterReportChart.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "TPFilterReportChart", parameters);
    }

    function Home(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Home screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.Home.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Home", parameters);
    }

    function Home_POC(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the Home_POC screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="details" type="msls.application.Home_POC.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "Home_POC", parameters);
    }

    function AddEditREF_APPLICATION_TYPE(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditREF_APPLICATION_TYPE screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_APPLICATION_TYPE" type="msls.application.REF_APPLICATION_TYPE">
        /// Gets or sets the rEF_APPLICATION_TYPE for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditREF_APPLICATION_TYPE.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditREF_APPLICATION_TYPE", parameters);
    }

    function BrowseREF_APPLICATION_TYPEs(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseREF_APPLICATION_TYPEs screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_APPLICATION_TYPEs" type="msls.VisualCollection" elementType="msls.application.REF_APPLICATION_TYPE">
        /// Gets the rEF_APPLICATION_TYPEs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseREF_APPLICATION_TYPEs.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseREF_APPLICATION_TYPEs", parameters);
    }

    function AddEditREF_COMPLEXITY(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditREF_COMPLEXITY screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_COMPLEXITY" type="msls.application.REF_COMPLEXITY">
        /// Gets or sets the rEF_COMPLEXITY for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditREF_COMPLEXITY.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditREF_COMPLEXITY", parameters);
    }

    function BrowseREF_COMPLEXITies(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseREF_COMPLEXITies screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_COMPLEXITies" type="msls.VisualCollection" elementType="msls.application.REF_COMPLEXITY">
        /// Gets the rEF_COMPLEXITies for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseREF_COMPLEXITies.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseREF_COMPLEXITies", parameters);
    }

    function AddEditREF_DOCUMENT_TYPE(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditREF_DOCUMENT_TYPE screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_DOCUMENT_TYPE" type="msls.application.REF_DOCUMENT_TYPE">
        /// Gets or sets the rEF_DOCUMENT_TYPE for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditREF_DOCUMENT_TYPE.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditREF_DOCUMENT_TYPE", parameters);
    }

    function BrowseREF_DOCUMENT_TYPEs(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseREF_DOCUMENT_TYPEs screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_DOCUMENT_TYPEs" type="msls.VisualCollection" elementType="msls.application.REF_DOCUMENT_TYPE">
        /// Gets the rEF_DOCUMENT_TYPEs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseREF_DOCUMENT_TYPEs.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseREF_DOCUMENT_TYPEs", parameters);
    }

    function AddEditREF_GAP(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditREF_GAP screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_GAP" type="msls.application.REF_GAP">
        /// Gets or sets the rEF_GAP for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditREF_GAP.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditREF_GAP", parameters);
    }

    function BrowseREF_GAPs(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseREF_GAPs screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_GAPs" type="msls.VisualCollection" elementType="msls.application.REF_GAP">
        /// Gets the rEF_GAPs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseREF_GAPs.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseREF_GAPs", parameters);
    }

    function AddEditREF_LOCATION(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditREF_LOCATION screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_LOCATION" type="msls.application.REF_LOCATION">
        /// Gets or sets the rEF_LOCATION for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditREF_LOCATION.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditREF_LOCATION", parameters);
    }

    function BrowseREF_LOCATIONs(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseREF_LOCATIONs screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_LOCATIONs" type="msls.VisualCollection" elementType="msls.application.REF_LOCATION">
        /// Gets the rEF_LOCATIONs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseREF_LOCATIONs.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseREF_LOCATIONs", parameters);
    }

    function AddEditREF_PHASE1(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditREF_PHASE1 screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_PHASE" type="msls.application.REF_PHASE">
        /// Gets or sets the rEF_PHASE for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditREF_PHASE1.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditREF_PHASE1", parameters);
    }

    function BrowseREF_PHASEs1(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseREF_PHASEs1 screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_PHASEs" type="msls.VisualCollection" elementType="msls.application.REF_PHASE">
        /// Gets the rEF_PHASEs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseREF_PHASEs1.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseREF_PHASEs1", parameters);
    }

    function AddEditREF_RATE_CARD(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditREF_RATE_CARD screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_RATE_CARD" type="msls.application.REF_RATE_CARD">
        /// Gets or sets the rEF_RATE_CARD for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditREF_RATE_CARD.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditREF_RATE_CARD", parameters);
    }

    function BrowseREF_RATE_CARDs(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseREF_RATE_CARDs screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_RATE_CARDs" type="msls.VisualCollection" elementType="msls.application.REF_RATE_CARD">
        /// Gets the rEF_RATE_CARDs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseREF_RATE_CARDs.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseREF_RATE_CARDs", parameters);
    }

    function AddEditREF_ROLE(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditREF_ROLE screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_ROLE" type="msls.application.REF_ROLE">
        /// Gets or sets the rEF_ROLE for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditREF_ROLE.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditREF_ROLE", parameters);
    }

    function BrowseREF_ROLEs(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseREF_ROLEs screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_ROLEs" type="msls.VisualCollection" elementType="msls.application.REF_ROLE">
        /// Gets the rEF_ROLEs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseREF_ROLEs.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseREF_ROLEs", parameters);
    }

    function AddEditREF_STAKEHOLDER1(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditREF_STAKEHOLDER1 screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_STAKEHOLDER" type="msls.application.REF_STAKEHOLDER">
        /// Gets or sets the rEF_STAKEHOLDER for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditREF_STAKEHOLDER1.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditREF_STAKEHOLDER1", parameters);
    }

    function BrowseREF_STAKEHOLDERs1(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseREF_STAKEHOLDERs1 screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_STAKEHOLDERs" type="msls.VisualCollection" elementType="msls.application.REF_STAKEHOLDER">
        /// Gets the rEF_STAKEHOLDERs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseREF_STAKEHOLDERs1.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseREF_STAKEHOLDERs1", parameters);
    }

    function AddEditREF_STATUS(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditREF_STATUS screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_STATUS" type="msls.application.REF_STATUS">
        /// Gets or sets the rEF_STATUS for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditREF_STATUS.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditREF_STATUS", parameters);
    }

    function BrowseREF_STATUS(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseREF_STATUS screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_STATUS" type="msls.VisualCollection" elementType="msls.application.REF_STATUS">
        /// Gets the rEF_STATUS for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseREF_STATUS.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseREF_STATUS", parameters);
    }

    function AddEditREF_TECHNOLOGY(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditREF_TECHNOLOGY screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_TECHNOLOGY" type="msls.application.REF_TECHNOLOGY">
        /// Gets or sets the rEF_TECHNOLOGY for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditREF_TECHNOLOGY.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditREF_TECHNOLOGY", parameters);
    }

    function BrowseREF_TECHNOLOGies(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseREF_TECHNOLOGies screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_TECHNOLOGies" type="msls.VisualCollection" elementType="msls.application.REF_TECHNOLOGY">
        /// Gets the rEF_TECHNOLOGies for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseREF_TECHNOLOGies.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseREF_TECHNOLOGies", parameters);
    }

    function AddEditREF_TECHNOLOGY_STACK(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditREF_TECHNOLOGY_STACK screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_TECHNOLOGY_STACK" type="msls.application.REF_TECHNOLOGY_STACK">
        /// Gets or sets the rEF_TECHNOLOGY_STACK for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditREF_TECHNOLOGY_STACK.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditREF_TECHNOLOGY_STACK", parameters);
    }

    function BrowseREF_TECHNOLOGY_STACKs(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseREF_TECHNOLOGY_STACKs screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_TECHNOLOGY_STACKs" type="msls.VisualCollection" elementType="msls.application.REF_TECHNOLOGY_STACK">
        /// Gets the rEF_TECHNOLOGY_STACKs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseREF_TECHNOLOGY_STACKs.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseREF_TECHNOLOGY_STACKs", parameters);
    }

    function AddEditREF_VENDOR(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditREF_VENDOR screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_VENDOR" type="msls.application.REF_VENDOR">
        /// Gets or sets the rEF_VENDOR for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditREF_VENDOR.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditREF_VENDOR", parameters);
    }

    function BrowseREF_VENDORs(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseREF_VENDORs screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="REF_VENDORs" type="msls.VisualCollection" elementType="msls.application.REF_VENDOR">
        /// Gets the rEF_VENDORs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseREF_VENDORs.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseREF_VENDORs", parameters);
    }

    function BrowseFilter_PMApprovalReport(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseFilter_PMApprovalReport screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Filter_PMApprovalReport" type="msls.VisualCollection" elementType="msls.application.PMApprovalReport">
        /// Gets the filter_PMApprovalReport for this screen.
        /// </field>
        /// <field name="PMApprovalReportPMName" type="String">
        /// Gets or sets the pMApprovalReportPMName for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseFilter_PMApprovalReport.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseFilter_PMApprovalReport", parameters);
    }

    function BrowseFilter_PMApprovalReport1(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseFilter_PMApprovalReport1 screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="Filter_PMApprovalReport" type="msls.VisualCollection" elementType="msls.application.PMApprovalReport">
        /// Gets the filter_PMApprovalReport for this screen.
        /// </field>
        /// <field name="PMApprovalReportPMName" type="String">
        /// Gets or sets the pMApprovalReportPMName for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseFilter_PMApprovalReport1.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseFilter_PMApprovalReport1", parameters);
    }

    function AddEditRESOURCE(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditRESOURCE screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="RESOURCE" type="msls.application.RESOURCE">
        /// Gets or sets the rESOURCE for this screen.
        /// </field>
        /// <field name="REF_RATE_CARDs" type="msls.VisualCollection" elementType="msls.application.REF_RATE_CARD">
        /// Gets the rEF_RATE_CARDs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditRESOURCE.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditRESOURCE", parameters);
    }

    function BrowseRESOURCEs(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseRESOURCEs screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="RESOURCEs" type="msls.VisualCollection" elementType="msls.application.RESOURCE">
        /// Gets the rESOURCEs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseRESOURCEs.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseRESOURCEs", parameters);
    }

    function AddEditTP_APPLICATION(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditTP_APPLICATION screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TP_APPLICATION" type="msls.application.TP_APPLICATION">
        /// Gets or sets the tP_APPLICATION for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditTP_APPLICATION.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditTP_APPLICATION", parameters);
    }

    function BrowseTP_APPLICATIONs(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseTP_APPLICATIONs screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TP_APPLICATIONs" type="msls.VisualCollection" elementType="msls.application.TP_APPLICATION">
        /// Gets the tP_APPLICATIONs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseTP_APPLICATIONs.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseTP_APPLICATIONs", parameters);
    }

    function AddEditConsolidatedTimeSheet(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditConsolidatedTimeSheet screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ConsolidatedTimeSheet" type="msls.application.ConsolidatedTimeSheet">
        /// Gets or sets the consolidatedTimeSheet for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditConsolidatedTimeSheet.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditConsolidatedTimeSheet", parameters);
    }

    function BrowseConsolidatedTimeSheets(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseConsolidatedTimeSheets screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="ConsolidatedTimeSheets" type="msls.VisualCollection" elementType="msls.application.ConsolidatedTimeSheet">
        /// Gets the consolidatedTimeSheets for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseConsolidatedTimeSheets.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseConsolidatedTimeSheets", parameters);
    }

    function AddEditTP_DOCUMENT_LINK(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditTP_DOCUMENT_LINK screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TP_DOCUMENT_LINK" type="msls.application.TP_DOCUMENT_LINK">
        /// Gets or sets the tP_DOCUMENT_LINK for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditTP_DOCUMENT_LINK.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditTP_DOCUMENT_LINK", parameters);
    }

    function BrowseTP_DOCUMENT_LINKs(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseTP_DOCUMENT_LINKs screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TP_DOCUMENT_LINKs" type="msls.VisualCollection" elementType="msls.application.TP_DOCUMENT_LINK">
        /// Gets the tP_DOCUMENT_LINKs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseTP_DOCUMENT_LINKs.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseTP_DOCUMENT_LINKs", parameters);
    }

    function AddEditTP_PHASE(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditTP_PHASE screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TP_PHASE" type="msls.application.TP_PHASE">
        /// Gets or sets the tP_PHASE for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditTP_PHASE.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditTP_PHASE", parameters);
    }

    function BrowseTP_PHASEs(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseTP_PHASEs screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TP_PHASEs" type="msls.VisualCollection" elementType="msls.application.TP_PHASE">
        /// Gets the tP_PHASEs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseTP_PHASEs.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseTP_PHASEs", parameters);
    }

    function AddEditTP_RESOURCE_ALLOCATION(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditTP_RESOURCE_ALLOCATION screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TP_RESOURCE_ALLOCATION" type="msls.application.TP_RESOURCE_ALLOCATION">
        /// Gets or sets the tP_RESOURCE_ALLOCATION for this screen.
        /// </field>
        /// <field name="TP_TIME_ENTRies" type="msls.VisualCollection" elementType="msls.application.TP_TIME_ENTRY">
        /// Gets the tP_TIME_ENTRies for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditTP_RESOURCE_ALLOCATION.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditTP_RESOURCE_ALLOCATION", parameters);
    }

    function BrowseTP_RESOURCE_ALLOCATIONs(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseTP_RESOURCE_ALLOCATIONs screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TP_RESOURCE_ALLOCATIONs" type="msls.VisualCollection" elementType="msls.application.TP_RESOURCE_ALLOCATION">
        /// Gets the tP_RESOURCE_ALLOCATIONs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseTP_RESOURCE_ALLOCATIONs.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseTP_RESOURCE_ALLOCATIONs", parameters);
    }

    function AddEditTP_STAKEHOLDER(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditTP_STAKEHOLDER screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TP_STAKEHOLDER" type="msls.application.TP_STAKEHOLDER">
        /// Gets or sets the tP_STAKEHOLDER for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditTP_STAKEHOLDER.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditTP_STAKEHOLDER", parameters);
    }

    function BrowseTP_STAKEHOLDERs(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseTP_STAKEHOLDERs screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TP_STAKEHOLDERs" type="msls.VisualCollection" elementType="msls.application.TP_STAKEHOLDER">
        /// Gets the tP_STAKEHOLDERs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseTP_STAKEHOLDERs.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseTP_STAKEHOLDERs", parameters);
    }

    function AddEditTP_TIME_ENTRY(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditTP_TIME_ENTRY screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TP_TIME_ENTRY" type="msls.application.TP_TIME_ENTRY">
        /// Gets or sets the tP_TIME_ENTRY for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditTP_TIME_ENTRY.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditTP_TIME_ENTRY", parameters);
    }

    function BrowseTP_TIME_ENTRies(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseTP_TIME_ENTRies screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TP_TIME_ENTRies" type="msls.VisualCollection" elementType="msls.application.TP_TIME_ENTRY">
        /// Gets the tP_TIME_ENTRies for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseTP_TIME_ENTRies.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseTP_TIME_ENTRies", parameters);
    }

    function AddEditTP(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditTP screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TP" type="msls.application.TP">
        /// Gets or sets the tP for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditTP.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditTP", parameters);
    }

    function BrowseTPs(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseTPs screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TPs" type="msls.VisualCollection" elementType="msls.application.TP">
        /// Gets the tPs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseTPs.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseTPs", parameters);
    }

    function AddEditTP_VENDOR(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the AddEditTP_VENDOR screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TP_VENDOR" type="msls.application.TP_VENDOR">
        /// Gets or sets the tP_VENDOR for this screen.
        /// </field>
        /// <field name="details" type="msls.application.AddEditTP_VENDOR.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "AddEditTP_VENDOR", parameters);
    }

    function BrowseTP_VENDORs(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowseTP_VENDORs screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="TP_VENDORs" type="msls.VisualCollection" elementType="msls.application.TP_VENDOR">
        /// Gets the tP_VENDORs for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowseTP_VENDORs.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowseTP_VENDORs", parameters);
    }

    function BrowsePMApprovalReports(parameters, dataWorkspace) {
        /// <summary>
        /// Represents the BrowsePMApprovalReports screen.
        /// </summary>
        /// <param name="parameters" type="Array">
        /// An array of screen parameter values.
        /// </param>
        /// <param name="dataWorkspace" type="msls.application.DataWorkspace" optional="true">
        /// An existing data workspace for this screen to use. By default, a new data workspace is created.
        /// </param>
        /// <field name="PMApprovalReports" type="msls.VisualCollection" elementType="msls.application.PMApprovalReport">
        /// Gets the pMApprovalReports for this screen.
        /// </field>
        /// <field name="details" type="msls.application.BrowsePMApprovalReports.Details">
        /// Gets the details for this screen.
        /// </field>
        if (!dataWorkspace) {
            dataWorkspace = new lightSwitchApplication.DataWorkspace();
        }
        $Screen.call(this, dataWorkspace, "BrowsePMApprovalReports", parameters);
    }

    msls._addToNamespace("msls.application", {

        AddEditAPPLICATION1: $defineScreen(AddEditAPPLICATION1, [
            { name: "APPLICATION1", kind: "local", type: lightSwitchApplication.APPLICATION1 }
        ], [
        ]),

        BrowseAPPLICATIONs: $defineScreen(BrowseAPPLICATIONs, [
            {
                name: "APPLICATIONs", kind: "collection", elementType: lightSwitchApplication.APPLICATION1,
                createQuery: function () {
                    return this.dataWorkspace.TestDBData.APPLICATIONs;
                }
            }
        ], [
        ]),

        BrowseTPFilterReport1: $defineScreen(BrowseTPFilterReport1, [
            {
                name: "TPFilterReport", kind: "collection", elementType: lightSwitchApplication.GenerateResourceReport,
                createQuery: function (TP) {
                    return this.dataWorkspace.TestDBData.TPFilterReport(TP);
                }
            },
            { name: "GenerateResourceReportTP", kind: "local", type: String }
        ], [
        ]),

        ResourceNameFilterChart: $defineScreen(ResourceNameFilterChart, [
            {
                name: "ResourceNameFilter", kind: "collection", elementType: lightSwitchApplication.TP_TIME_ENTRY,
                createQuery: function (ResourceName) {
                    return this.dataWorkspace.TestDBData.ResourceNameFilter(ResourceName);
                }
            },
            { name: "TP_TIME_ENTRYResourceName", kind: "local", type: String }
        ], [
        ]),

        TPFilterReportChart: $defineScreen(TPFilterReportChart, [
            {
                name: "TPFilterReport", kind: "collection", elementType: lightSwitchApplication.GenerateResourceReport,
                createQuery: function (TP) {
                    return this.dataWorkspace.TestDBData.TPFilterReport(TP);
                }
            },
            { name: "GenerateResourceReportTP", kind: "local", type: String }
        ], [
        ]),

        Home: $defineScreen(Home, [
        ], [
        ]),

        Home_POC: $defineScreen(Home_POC, [
        ], [
        ]),

        AddEditREF_APPLICATION_TYPE: $defineScreen(AddEditREF_APPLICATION_TYPE, [
            { name: "REF_APPLICATION_TYPE", kind: "local", type: lightSwitchApplication.REF_APPLICATION_TYPE }
        ], [
        ]),

        BrowseREF_APPLICATION_TYPEs: $defineScreen(BrowseREF_APPLICATION_TYPEs, [
            {
                name: "REF_APPLICATION_TYPEs", kind: "collection", elementType: lightSwitchApplication.REF_APPLICATION_TYPE,
                createQuery: function () {
                    return this.dataWorkspace.TestDBData.REF_APPLICATION_TYPEs;
                }
            }
        ], [
        ]),

        AddEditREF_COMPLEXITY: $defineScreen(AddEditREF_COMPLEXITY, [
            { name: "REF_COMPLEXITY", kind: "local", type: lightSwitchApplication.REF_COMPLEXITY }
        ], [
        ]),

        BrowseREF_COMPLEXITies: $defineScreen(BrowseREF_COMPLEXITies, [
            {
                name: "REF_COMPLEXITies", kind: "collection", elementType: lightSwitchApplication.REF_COMPLEXITY,
                createQuery: function () {
                    return this.dataWorkspace.TestDBData.REF_COMPLEXITies;
                }
            }
        ], [
        ]),

        AddEditREF_DOCUMENT_TYPE: $defineScreen(AddEditREF_DOCUMENT_TYPE, [
            { name: "REF_DOCUMENT_TYPE", kind: "local", type: lightSwitchApplication.REF_DOCUMENT_TYPE }
        ], [
        ]),

        BrowseREF_DOCUMENT_TYPEs: $defineScreen(BrowseREF_DOCUMENT_TYPEs, [
            {
                name: "REF_DOCUMENT_TYPEs", kind: "collection", elementType: lightSwitchApplication.REF_DOCUMENT_TYPE,
                createQuery: function () {
                    return this.dataWorkspace.TestDBData.REF_DOCUMENT_TYPEs;
                }
            }
        ], [
        ]),

        AddEditREF_GAP: $defineScreen(AddEditREF_GAP, [
            { name: "REF_GAP", kind: "local", type: lightSwitchApplication.REF_GAP }
        ], [
        ]),

        BrowseREF_GAPs: $defineScreen(BrowseREF_GAPs, [
            {
                name: "REF_GAPs", kind: "collection", elementType: lightSwitchApplication.REF_GAP,
                createQuery: function () {
                    return this.dataWorkspace.TestDBData.REF_GAPs;
                }
            }
        ], [
        ]),

        AddEditREF_LOCATION: $defineScreen(AddEditREF_LOCATION, [
            { name: "REF_LOCATION", kind: "local", type: lightSwitchApplication.REF_LOCATION }
        ], [
        ]),

        BrowseREF_LOCATIONs: $defineScreen(BrowseREF_LOCATIONs, [
            {
                name: "REF_LOCATIONs", kind: "collection", elementType: lightSwitchApplication.REF_LOCATION,
                createQuery: function () {
                    return this.dataWorkspace.TestDBData.REF_LOCATIONs;
                }
            }
        ], [
        ]),

        AddEditREF_PHASE1: $defineScreen(AddEditREF_PHASE1, [
            { name: "REF_PHASE", kind: "local", type: lightSwitchApplication.REF_PHASE }
        ], [
        ]),

        BrowseREF_PHASEs1: $defineScreen(BrowseREF_PHASEs1, [
            {
                name: "REF_PHASEs", kind: "collection", elementType: lightSwitchApplication.REF_PHASE,
                createQuery: function () {
                    return this.dataWorkspace.TestDBData.REF_PHASEs;
                }
            }
        ], [
        ]),

        AddEditREF_RATE_CARD: $defineScreen(AddEditREF_RATE_CARD, [
            { name: "REF_RATE_CARD", kind: "local", type: lightSwitchApplication.REF_RATE_CARD }
        ], [
        ]),

        BrowseREF_RATE_CARDs: $defineScreen(BrowseREF_RATE_CARDs, [
            {
                name: "REF_RATE_CARDs", kind: "collection", elementType: lightSwitchApplication.REF_RATE_CARD,
                createQuery: function () {
                    return this.dataWorkspace.TestDBData.REF_RATE_CARDs;
                }
            }
        ], [
        ]),

        AddEditREF_ROLE: $defineScreen(AddEditREF_ROLE, [
            { name: "REF_ROLE", kind: "local", type: lightSwitchApplication.REF_ROLE }
        ], [
        ]),

        BrowseREF_ROLEs: $defineScreen(BrowseREF_ROLEs, [
            {
                name: "REF_ROLEs", kind: "collection", elementType: lightSwitchApplication.REF_ROLE,
                createQuery: function () {
                    return this.dataWorkspace.TestDBData.REF_ROLEs;
                }
            }
        ], [
        ]),

        AddEditREF_STAKEHOLDER1: $defineScreen(AddEditREF_STAKEHOLDER1, [
            { name: "REF_STAKEHOLDER", kind: "local", type: lightSwitchApplication.REF_STAKEHOLDER }
        ], [
        ]),

        BrowseREF_STAKEHOLDERs1: $defineScreen(BrowseREF_STAKEHOLDERs1, [
            {
                name: "REF_STAKEHOLDERs", kind: "collection", elementType: lightSwitchApplication.REF_STAKEHOLDER,
                createQuery: function () {
                    return this.dataWorkspace.TestDBData.REF_STAKEHOLDERs;
                }
            }
        ], [
        ]),

        AddEditREF_STATUS: $defineScreen(AddEditREF_STATUS, [
            { name: "REF_STATUS", kind: "local", type: lightSwitchApplication.REF_STATUS }
        ], [
        ]),

        BrowseREF_STATUS: $defineScreen(BrowseREF_STATUS, [
            {
                name: "REF_STATUS", kind: "collection", elementType: lightSwitchApplication.REF_STATUS,
                createQuery: function () {
                    return this.dataWorkspace.TestDBData.REF_STATUS;
                }
            }
        ], [
        ]),

        AddEditREF_TECHNOLOGY: $defineScreen(AddEditREF_TECHNOLOGY, [
            { name: "REF_TECHNOLOGY", kind: "local", type: lightSwitchApplication.REF_TECHNOLOGY }
        ], [
        ]),

        BrowseREF_TECHNOLOGies: $defineScreen(BrowseREF_TECHNOLOGies, [
            {
                name: "REF_TECHNOLOGies", kind: "collection", elementType: lightSwitchApplication.REF_TECHNOLOGY,
                createQuery: function () {
                    return this.dataWorkspace.TestDBData.REF_TECHNOLOGies;
                }
            }
        ], [
        ]),

        AddEditREF_TECHNOLOGY_STACK: $defineScreen(AddEditREF_TECHNOLOGY_STACK, [
            { name: "REF_TECHNOLOGY_STACK", kind: "local", type: lightSwitchApplication.REF_TECHNOLOGY_STACK }
        ], [
        ]),

        BrowseREF_TECHNOLOGY_STACKs: $defineScreen(BrowseREF_TECHNOLOGY_STACKs, [
            {
                name: "REF_TECHNOLOGY_STACKs", kind: "collection", elementType: lightSwitchApplication.REF_TECHNOLOGY_STACK,
                createQuery: function () {
                    return this.dataWorkspace.TestDBData.REF_TECHNOLOGY_STACKs;
                }
            }
        ], [
        ]),

        AddEditREF_VENDOR: $defineScreen(AddEditREF_VENDOR, [
            { name: "REF_VENDOR", kind: "local", type: lightSwitchApplication.REF_VENDOR }
        ], [
        ]),

        BrowseREF_VENDORs: $defineScreen(BrowseREF_VENDORs, [
            {
                name: "REF_VENDORs", kind: "collection", elementType: lightSwitchApplication.REF_VENDOR,
                createQuery: function () {
                    return this.dataWorkspace.TestDBData.REF_VENDORs;
                }
            }
        ], [
        ]),

        BrowseFilter_PMApprovalReport: $defineScreen(BrowseFilter_PMApprovalReport, [
            {
                name: "Filter_PMApprovalReport", kind: "collection", elementType: lightSwitchApplication.PMApprovalReport,
                createQuery: function (PMName) {
                    return this.dataWorkspace.TestDBData.Filter_PMApprovalReport(PMName);
                }
            },
            { name: "PMApprovalReportPMName", kind: "local", type: String }
        ], [
            { name: "ExportExcel" },
            { name: "ExportExcel_Tap" }
        ]),

        BrowseFilter_PMApprovalReport1: $defineScreen(BrowseFilter_PMApprovalReport1, [
            {
                name: "Filter_PMApprovalReport", kind: "collection", elementType: lightSwitchApplication.PMApprovalReport,
                createQuery: function (PMName) {
                    return this.dataWorkspace.TestDBData.Filter_PMApprovalReport(PMName);
                }
            },
            { name: "PMApprovalReportPMName", kind: "local", type: String }
        ], [
            { name: "PreviousPage" },
            { name: "NextPage" }
        ]),

        AddEditRESOURCE: $defineScreen(AddEditRESOURCE, [
            { name: "RESOURCE", kind: "local", type: lightSwitchApplication.RESOURCE },
            {
                name: "REF_RATE_CARDs", kind: "collection", elementType: lightSwitchApplication.REF_RATE_CARD,
                getNavigationProperty: function () {
                    if (this.owner.RESOURCE) {
                        return this.owner.RESOURCE.details.properties.REF_RATE_CARDs;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        BrowseRESOURCEs: $defineScreen(BrowseRESOURCEs, [
            {
                name: "RESOURCEs", kind: "collection", elementType: lightSwitchApplication.RESOURCE,
                createQuery: function () {
                    return this.dataWorkspace.TestDBData.RESOURCEs;
                }
            }
        ], [
        ]),

        AddEditTP_APPLICATION: $defineScreen(AddEditTP_APPLICATION, [
            { name: "TP_APPLICATION", kind: "local", type: lightSwitchApplication.TP_APPLICATION }
        ], [
        ]),

        BrowseTP_APPLICATIONs: $defineScreen(BrowseTP_APPLICATIONs, [
            {
                name: "TP_APPLICATIONs", kind: "collection", elementType: lightSwitchApplication.TP_APPLICATION,
                createQuery: function () {
                    return this.dataWorkspace.TestDBData.TP_APPLICATIONs;
                }
            }
        ], [
        ]),

        AddEditConsolidatedTimeSheet: $defineScreen(AddEditConsolidatedTimeSheet, [
            { name: "ConsolidatedTimeSheet", kind: "local", type: lightSwitchApplication.ConsolidatedTimeSheet }
        ], [
        ]),

        BrowseConsolidatedTimeSheets: $defineScreen(BrowseConsolidatedTimeSheets, [
            {
                name: "ConsolidatedTimeSheets", kind: "collection", elementType: lightSwitchApplication.ConsolidatedTimeSheet,
                createQuery: function () {
                    return this.dataWorkspace.TestDBData.ConsolidatedTimeSheets;
                }
            }
        ], [
        ]),

        AddEditTP_DOCUMENT_LINK: $defineScreen(AddEditTP_DOCUMENT_LINK, [
            { name: "TP_DOCUMENT_LINK", kind: "local", type: lightSwitchApplication.TP_DOCUMENT_LINK }
        ], [
        ]),

        BrowseTP_DOCUMENT_LINKs: $defineScreen(BrowseTP_DOCUMENT_LINKs, [
            {
                name: "TP_DOCUMENT_LINKs", kind: "collection", elementType: lightSwitchApplication.TP_DOCUMENT_LINK,
                createQuery: function () {
                    return this.dataWorkspace.TestDBData.TP_DOCUMENT_LINKs;
                }
            }
        ], [
        ]),

        AddEditTP_PHASE: $defineScreen(AddEditTP_PHASE, [
            { name: "TP_PHASE", kind: "local", type: lightSwitchApplication.TP_PHASE }
        ], [
        ]),

        BrowseTP_PHASEs: $defineScreen(BrowseTP_PHASEs, [
            {
                name: "TP_PHASEs", kind: "collection", elementType: lightSwitchApplication.TP_PHASE,
                createQuery: function () {
                    return this.dataWorkspace.TestDBData.TP_PHASEs;
                }
            }
        ], [
        ]),

        AddEditTP_RESOURCE_ALLOCATION: $defineScreen(AddEditTP_RESOURCE_ALLOCATION, [
            { name: "TP_RESOURCE_ALLOCATION", kind: "local", type: lightSwitchApplication.TP_RESOURCE_ALLOCATION },
            {
                name: "TP_TIME_ENTRies", kind: "collection", elementType: lightSwitchApplication.TP_TIME_ENTRY,
                getNavigationProperty: function () {
                    if (this.owner.TP_RESOURCE_ALLOCATION) {
                        return this.owner.TP_RESOURCE_ALLOCATION.details.properties.TP_TIME_ENTRies;
                    }
                    return null;
                },
                appendQuery: function () {
                    return this;
                }
            }
        ], [
        ]),

        BrowseTP_RESOURCE_ALLOCATIONs: $defineScreen(BrowseTP_RESOURCE_ALLOCATIONs, [
            {
                name: "TP_RESOURCE_ALLOCATIONs", kind: "collection", elementType: lightSwitchApplication.TP_RESOURCE_ALLOCATION,
                createQuery: function () {
                    return this.dataWorkspace.TestDBData.TP_RESOURCE_ALLOCATIONs.expand("RESOURCE").expand("TP").expand("REF_ROLE");
                }
            }
        ], [
        ]),

        AddEditTP_STAKEHOLDER: $defineScreen(AddEditTP_STAKEHOLDER, [
            { name: "TP_STAKEHOLDER", kind: "local", type: lightSwitchApplication.TP_STAKEHOLDER }
        ], [
        ]),

        BrowseTP_STAKEHOLDERs: $defineScreen(BrowseTP_STAKEHOLDERs, [
            {
                name: "TP_STAKEHOLDERs", kind: "collection", elementType: lightSwitchApplication.TP_STAKEHOLDER,
                createQuery: function () {
                    return this.dataWorkspace.TestDBData.TP_STAKEHOLDERs.expand("REF_STAKEHOLDER").expand("TP");
                }
            }
        ], [
        ]),

        AddEditTP_TIME_ENTRY: $defineScreen(AddEditTP_TIME_ENTRY, [
            { name: "TP_TIME_ENTRY", kind: "local", type: lightSwitchApplication.TP_TIME_ENTRY }
        ], [
        ]),

        BrowseTP_TIME_ENTRies: $defineScreen(BrowseTP_TIME_ENTRies, [
            {
                name: "TP_TIME_ENTRies", kind: "collection", elementType: lightSwitchApplication.TP_TIME_ENTRY,
                createQuery: function () {
                    return this.dataWorkspace.TestDBData.TP_TIME_ENTRies;
                }
            }
        ], [
        ]),

        AddEditTP: $defineScreen(AddEditTP, [
            { name: "TP", kind: "local", type: lightSwitchApplication.TP }
        ], [
        ]),

        BrowseTPs: $defineScreen(BrowseTPs, [
            {
                name: "TPs", kind: "collection", elementType: lightSwitchApplication.TP,
                createQuery: function () {
                    return this.dataWorkspace.TestDBData.TPs;
                }
            }
        ], [
        ]),

        AddEditTP_VENDOR: $defineScreen(AddEditTP_VENDOR, [
            { name: "TP_VENDOR", kind: "local", type: lightSwitchApplication.TP_VENDOR }
        ], [
        ]),

        BrowseTP_VENDORs: $defineScreen(BrowseTP_VENDORs, [
            {
                name: "TP_VENDORs", kind: "collection", elementType: lightSwitchApplication.TP_VENDOR,
                createQuery: function () {
                    return this.dataWorkspace.TestDBData.TP_VENDORs.expand("REF_VENDOR").expand("TP");
                }
            }
        ], [
        ]),

        BrowsePMApprovalReports: $defineScreen(BrowsePMApprovalReports, [
            {
                name: "PMApprovalReports", kind: "collection", elementType: lightSwitchApplication.PMApprovalReport,
                createQuery: function () {
                    return this.dataWorkspace.TestDBData.PMApprovalReports;
                }
            }
        ], [
            { name: "PreviousPage" },
            { name: "NextPage" }
        ]),

        showAddEditAPPLICATION1: $defineShowScreen(function showAddEditAPPLICATION1(APPLICATION1, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditAPPLICATION1 screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditAPPLICATION1", parameters, options);
        }),

        showBrowseAPPLICATIONs: $defineShowScreen(function showBrowseAPPLICATIONs(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseAPPLICATIONs screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseAPPLICATIONs", parameters, options);
        }),

        showBrowseTPFilterReport1: $defineShowScreen(function showBrowseTPFilterReport1(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseTPFilterReport1 screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseTPFilterReport1", parameters, options);
        }),

        showResourceNameFilterChart: $defineShowScreen(function showResourceNameFilterChart(options) {
            /// <summary>
            /// Asynchronously navigates forward to the ResourceNameFilterChart screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("ResourceNameFilterChart", parameters, options);
        }),

        showTPFilterReportChart: $defineShowScreen(function showTPFilterReportChart(options) {
            /// <summary>
            /// Asynchronously navigates forward to the TPFilterReportChart screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("TPFilterReportChart", parameters, options);
        }),

        showHome: $defineShowScreen(function showHome(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Home screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Home", parameters, options);
        }),

        showHome_POC: $defineShowScreen(function showHome_POC(options) {
            /// <summary>
            /// Asynchronously navigates forward to the Home_POC screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("Home_POC", parameters, options);
        }),

        showAddEditREF_APPLICATION_TYPE: $defineShowScreen(function showAddEditREF_APPLICATION_TYPE(REF_APPLICATION_TYPE, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditREF_APPLICATION_TYPE screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditREF_APPLICATION_TYPE", parameters, options);
        }),

        showBrowseREF_APPLICATION_TYPEs: $defineShowScreen(function showBrowseREF_APPLICATION_TYPEs(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseREF_APPLICATION_TYPEs screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseREF_APPLICATION_TYPEs", parameters, options);
        }),

        showAddEditREF_COMPLEXITY: $defineShowScreen(function showAddEditREF_COMPLEXITY(REF_COMPLEXITY, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditREF_COMPLEXITY screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditREF_COMPLEXITY", parameters, options);
        }),

        showBrowseREF_COMPLEXITies: $defineShowScreen(function showBrowseREF_COMPLEXITies(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseREF_COMPLEXITies screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseREF_COMPLEXITies", parameters, options);
        }),

        showAddEditREF_DOCUMENT_TYPE: $defineShowScreen(function showAddEditREF_DOCUMENT_TYPE(REF_DOCUMENT_TYPE, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditREF_DOCUMENT_TYPE screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditREF_DOCUMENT_TYPE", parameters, options);
        }),

        showBrowseREF_DOCUMENT_TYPEs: $defineShowScreen(function showBrowseREF_DOCUMENT_TYPEs(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseREF_DOCUMENT_TYPEs screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseREF_DOCUMENT_TYPEs", parameters, options);
        }),

        showAddEditREF_GAP: $defineShowScreen(function showAddEditREF_GAP(REF_GAP, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditREF_GAP screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditREF_GAP", parameters, options);
        }),

        showBrowseREF_GAPs: $defineShowScreen(function showBrowseREF_GAPs(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseREF_GAPs screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseREF_GAPs", parameters, options);
        }),

        showAddEditREF_LOCATION: $defineShowScreen(function showAddEditREF_LOCATION(REF_LOCATION, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditREF_LOCATION screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditREF_LOCATION", parameters, options);
        }),

        showBrowseREF_LOCATIONs: $defineShowScreen(function showBrowseREF_LOCATIONs(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseREF_LOCATIONs screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseREF_LOCATIONs", parameters, options);
        }),

        showAddEditREF_PHASE1: $defineShowScreen(function showAddEditREF_PHASE1(REF_PHASE, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditREF_PHASE1 screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditREF_PHASE1", parameters, options);
        }),

        showBrowseREF_PHASEs1: $defineShowScreen(function showBrowseREF_PHASEs1(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseREF_PHASEs1 screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseREF_PHASEs1", parameters, options);
        }),

        showAddEditREF_RATE_CARD: $defineShowScreen(function showAddEditREF_RATE_CARD(REF_RATE_CARD, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditREF_RATE_CARD screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditREF_RATE_CARD", parameters, options);
        }),

        showBrowseREF_RATE_CARDs: $defineShowScreen(function showBrowseREF_RATE_CARDs(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseREF_RATE_CARDs screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseREF_RATE_CARDs", parameters, options);
        }),

        showAddEditREF_ROLE: $defineShowScreen(function showAddEditREF_ROLE(REF_ROLE, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditREF_ROLE screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditREF_ROLE", parameters, options);
        }),

        showBrowseREF_ROLEs: $defineShowScreen(function showBrowseREF_ROLEs(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseREF_ROLEs screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseREF_ROLEs", parameters, options);
        }),

        showAddEditREF_STAKEHOLDER1: $defineShowScreen(function showAddEditREF_STAKEHOLDER1(REF_STAKEHOLDER, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditREF_STAKEHOLDER1 screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditREF_STAKEHOLDER1", parameters, options);
        }),

        showBrowseREF_STAKEHOLDERs1: $defineShowScreen(function showBrowseREF_STAKEHOLDERs1(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseREF_STAKEHOLDERs1 screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseREF_STAKEHOLDERs1", parameters, options);
        }),

        showAddEditREF_STATUS: $defineShowScreen(function showAddEditREF_STATUS(REF_STATUS, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditREF_STATUS screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditREF_STATUS", parameters, options);
        }),

        showBrowseREF_STATUS: $defineShowScreen(function showBrowseREF_STATUS(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseREF_STATUS screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseREF_STATUS", parameters, options);
        }),

        showAddEditREF_TECHNOLOGY: $defineShowScreen(function showAddEditREF_TECHNOLOGY(REF_TECHNOLOGY, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditREF_TECHNOLOGY screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditREF_TECHNOLOGY", parameters, options);
        }),

        showBrowseREF_TECHNOLOGies: $defineShowScreen(function showBrowseREF_TECHNOLOGies(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseREF_TECHNOLOGies screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseREF_TECHNOLOGies", parameters, options);
        }),

        showAddEditREF_TECHNOLOGY_STACK: $defineShowScreen(function showAddEditREF_TECHNOLOGY_STACK(REF_TECHNOLOGY_STACK, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditREF_TECHNOLOGY_STACK screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditREF_TECHNOLOGY_STACK", parameters, options);
        }),

        showBrowseREF_TECHNOLOGY_STACKs: $defineShowScreen(function showBrowseREF_TECHNOLOGY_STACKs(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseREF_TECHNOLOGY_STACKs screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseREF_TECHNOLOGY_STACKs", parameters, options);
        }),

        showAddEditREF_VENDOR: $defineShowScreen(function showAddEditREF_VENDOR(REF_VENDOR, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditREF_VENDOR screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditREF_VENDOR", parameters, options);
        }),

        showBrowseREF_VENDORs: $defineShowScreen(function showBrowseREF_VENDORs(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseREF_VENDORs screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseREF_VENDORs", parameters, options);
        }),

        showBrowseFilter_PMApprovalReport: $defineShowScreen(function showBrowseFilter_PMApprovalReport(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseFilter_PMApprovalReport screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseFilter_PMApprovalReport", parameters, options);
        }),

        showBrowseFilter_PMApprovalReport1: $defineShowScreen(function showBrowseFilter_PMApprovalReport1(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseFilter_PMApprovalReport1 screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseFilter_PMApprovalReport1", parameters, options);
        }),

        showAddEditRESOURCE: $defineShowScreen(function showAddEditRESOURCE(RESOURCE, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditRESOURCE screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditRESOURCE", parameters, options);
        }),

        showBrowseRESOURCEs: $defineShowScreen(function showBrowseRESOURCEs(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseRESOURCEs screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseRESOURCEs", parameters, options);
        }),

        showAddEditTP_APPLICATION: $defineShowScreen(function showAddEditTP_APPLICATION(TP_APPLICATION, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditTP_APPLICATION screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditTP_APPLICATION", parameters, options);
        }),

        showBrowseTP_APPLICATIONs: $defineShowScreen(function showBrowseTP_APPLICATIONs(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseTP_APPLICATIONs screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseTP_APPLICATIONs", parameters, options);
        }),

        showAddEditConsolidatedTimeSheet: $defineShowScreen(function showAddEditConsolidatedTimeSheet(ConsolidatedTimeSheet, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditConsolidatedTimeSheet screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditConsolidatedTimeSheet", parameters, options);
        }),

        showBrowseConsolidatedTimeSheets: $defineShowScreen(function showBrowseConsolidatedTimeSheets(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseConsolidatedTimeSheets screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseConsolidatedTimeSheets", parameters, options);
        }),

        showAddEditTP_DOCUMENT_LINK: $defineShowScreen(function showAddEditTP_DOCUMENT_LINK(TP_DOCUMENT_LINK, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditTP_DOCUMENT_LINK screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditTP_DOCUMENT_LINK", parameters, options);
        }),

        showBrowseTP_DOCUMENT_LINKs: $defineShowScreen(function showBrowseTP_DOCUMENT_LINKs(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseTP_DOCUMENT_LINKs screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseTP_DOCUMENT_LINKs", parameters, options);
        }),

        showAddEditTP_PHASE: $defineShowScreen(function showAddEditTP_PHASE(TP_PHASE, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditTP_PHASE screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditTP_PHASE", parameters, options);
        }),

        showBrowseTP_PHASEs: $defineShowScreen(function showBrowseTP_PHASEs(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseTP_PHASEs screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseTP_PHASEs", parameters, options);
        }),

        showAddEditTP_RESOURCE_ALLOCATION: $defineShowScreen(function showAddEditTP_RESOURCE_ALLOCATION(TP_RESOURCE_ALLOCATION, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditTP_RESOURCE_ALLOCATION screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditTP_RESOURCE_ALLOCATION", parameters, options);
        }),

        showBrowseTP_RESOURCE_ALLOCATIONs: $defineShowScreen(function showBrowseTP_RESOURCE_ALLOCATIONs(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseTP_RESOURCE_ALLOCATIONs screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseTP_RESOURCE_ALLOCATIONs", parameters, options);
        }),

        showAddEditTP_STAKEHOLDER: $defineShowScreen(function showAddEditTP_STAKEHOLDER(TP_STAKEHOLDER, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditTP_STAKEHOLDER screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditTP_STAKEHOLDER", parameters, options);
        }),

        showBrowseTP_STAKEHOLDERs: $defineShowScreen(function showBrowseTP_STAKEHOLDERs(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseTP_STAKEHOLDERs screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseTP_STAKEHOLDERs", parameters, options);
        }),

        showAddEditTP_TIME_ENTRY: $defineShowScreen(function showAddEditTP_TIME_ENTRY(TP_TIME_ENTRY, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditTP_TIME_ENTRY screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditTP_TIME_ENTRY", parameters, options);
        }),

        showBrowseTP_TIME_ENTRies: $defineShowScreen(function showBrowseTP_TIME_ENTRies(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseTP_TIME_ENTRies screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseTP_TIME_ENTRies", parameters, options);
        }),

        showAddEditTP: $defineShowScreen(function showAddEditTP(TP, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditTP screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditTP", parameters, options);
        }),

        showBrowseTPs: $defineShowScreen(function showBrowseTPs(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseTPs screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseTPs", parameters, options);
        }),

        showAddEditTP_VENDOR: $defineShowScreen(function showAddEditTP_VENDOR(TP_VENDOR, options) {
            /// <summary>
            /// Asynchronously navigates forward to the AddEditTP_VENDOR screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 1);
            return lightSwitchApplication.showScreen("AddEditTP_VENDOR", parameters, options);
        }),

        showBrowseTP_VENDORs: $defineShowScreen(function showBrowseTP_VENDORs(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowseTP_VENDORs screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowseTP_VENDORs", parameters, options);
        }),

        showBrowsePMApprovalReports: $defineShowScreen(function showBrowsePMApprovalReports(options) {
            /// <summary>
            /// Asynchronously navigates forward to the BrowsePMApprovalReports screen.
            /// </summary>
            /// <param name="options" optional="true">
            /// An object that provides one or more of the following options:<br/>- beforeShown: a function that is called after boundary behavior has been applied but before the screen is shown.<br/>+ Signature: beforeShown(screen)<br/>- afterClosed: a function that is called after boundary behavior has been applied and the screen has been closed.<br/>+ Signature: afterClosed(screen, action : msls.NavigateBackAction)
            /// </param>
            /// <returns type="WinJS.Promise" />
            var parameters = Array.prototype.slice.call(arguments, 0, 0);
            return lightSwitchApplication.showScreen("BrowsePMApprovalReports", parameters, options);
        })

    });

}(msls.application));
