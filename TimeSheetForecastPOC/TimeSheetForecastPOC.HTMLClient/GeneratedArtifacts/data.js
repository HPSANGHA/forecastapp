/// <reference path="../Scripts/msls.js" />

window.myapp = msls.application;

(function (lightSwitchApplication) {

    var $Entity = msls.Entity,
        $DataService = msls.DataService,
        $DataWorkspace = msls.DataWorkspace,
        $defineEntity = msls._defineEntity,
        $defineDataService = msls._defineDataService,
        $defineDataWorkspace = msls._defineDataWorkspace,
        $DataServiceQuery = msls.DataServiceQuery,
        $toODataString = msls._toODataString;

    function APPLICATION1(entitySet) {
        /// <summary>
        /// Represents the APPLICATION1 entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this aPPLICATION1.
        /// </param>
        /// <field name="ApplicationID" type="Number">
        /// Gets or sets the applicationID for this aPPLICATION1.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this aPPLICATION1.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this aPPLICATION1.
        /// </field>
        /// <field name="CreatedDate" type="Date">
        /// Gets or sets the createdDate for this aPPLICATION1.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this aPPLICATION1.
        /// </field>
        /// <field name="ModifiedDate" type="Date">
        /// Gets or sets the modifiedDate for this aPPLICATION1.
        /// </field>
        /// <field name="REF_TECHNOLOGY" type="msls.application.REF_TECHNOLOGY">
        /// Gets or sets the rEF_TECHNOLOGY for this aPPLICATION1.
        /// </field>
        /// <field name="TP_APPLICATIONs" type="msls.EntityCollection" elementType="msls.application.TP_APPLICATION">
        /// Gets the tP_APPLICATIONs for this aPPLICATION1.
        /// </field>
        /// <field name="details" type="msls.application.APPLICATION1.Details">
        /// Gets the details for this aPPLICATION1.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function ConsolidatedTimeSheet(entitySet) {
        /// <summary>
        /// Represents the ConsolidatedTimeSheet entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this consolidatedTimeSheet.
        /// </param>
        /// <field name="ConsolidateID" type="Number">
        /// Gets or sets the consolidateID for this consolidatedTimeSheet.
        /// </field>
        /// <field name="Type" type="String">
        /// Gets or sets the type for this consolidatedTimeSheet.
        /// </field>
        /// <field name="Phase" type="String">
        /// Gets or sets the phase for this consolidatedTimeSheet.
        /// </field>
        /// <field name="StartWeekDate" type="Date">
        /// Gets or sets the startWeekDate for this consolidatedTimeSheet.
        /// </field>
        /// <field name="Week" type="Number">
        /// Gets or sets the week for this consolidatedTimeSheet.
        /// </field>
        /// <field name="Application1" type="String">
        /// Gets or sets the application1 for this consolidatedTimeSheet.
        /// </field>
        /// <field name="c_Date" type="Date">
        /// Gets or sets the c_Date for this consolidatedTimeSheet.
        /// </field>
        /// <field name="Resource" type="String">
        /// Gets or sets the resource for this consolidatedTimeSheet.
        /// </field>
        /// <field name="Deliverables" type="String">
        /// Gets or sets the deliverables for this consolidatedTimeSheet.
        /// </field>
        /// <field name="Activity" type="String">
        /// Gets or sets the activity for this consolidatedTimeSheet.
        /// </field>
        /// <field name="Hours" type="Number">
        /// Gets or sets the hours for this consolidatedTimeSheet.
        /// </field>
        /// <field name="RatePerDay" type="Number">
        /// Gets or sets the ratePerDay for this consolidatedTimeSheet.
        /// </field>
        /// <field name="Phase_NotChange" type="String">
        /// Gets or sets the phase_NotChange for this consolidatedTimeSheet.
        /// </field>
        /// <field name="BilledHours" type="Number">
        /// Gets or sets the billedHours for this consolidatedTimeSheet.
        /// </field>
        /// <field name="BilledValue" type="Number">
        /// Gets or sets the billedValue for this consolidatedTimeSheet.
        /// </field>
        /// <field name="details" type="msls.application.ConsolidatedTimeSheet.Details">
        /// Gets the details for this consolidatedTimeSheet.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function GenerateResourceReport(entitySet) {
        /// <summary>
        /// Represents the GenerateResourceReport entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this generateResourceReport.
        /// </param>
        /// <field name="TpResourceAllocationId" type="Number">
        /// Gets or sets the tpResourceAllocationId for this generateResourceReport.
        /// </field>
        /// <field name="RESOURCE_NAME" type="String">
        /// Gets or sets the rESOURCE_NAME for this generateResourceReport.
        /// </field>
        /// <field name="ROLE" type="String">
        /// Gets or sets the rOLE for this generateResourceReport.
        /// </field>
        /// <field name="LOCATION" type="String">
        /// Gets or sets the lOCATION for this generateResourceReport.
        /// </field>
        /// <field name="PLANNED_EFFORT" type="Number">
        /// Gets or sets the pLANNED_EFFORT for this generateResourceReport.
        /// </field>
        /// <field name="TP" type="String">
        /// Gets or sets the tP for this generateResourceReport.
        /// </field>
        /// <field name="Percentage" type="Number">
        /// Gets or sets the percentage for this generateResourceReport.
        /// </field>
        /// <field name="PlannedBuildStartDate" type="Date">
        /// Gets or sets the plannedBuildStartDate for this generateResourceReport.
        /// </field>
        /// <field name="PlannedBuildEndDate" type="Date">
        /// Gets or sets the plannedBuildEndDate for this generateResourceReport.
        /// </field>
        /// <field name="PlannedTestStartDate" type="Date">
        /// Gets or sets the plannedTestStartDate for this generateResourceReport.
        /// </field>
        /// <field name="PlannedTestEndDate" type="Date">
        /// Gets or sets the plannedTestEndDate for this generateResourceReport.
        /// </field>
        /// <field name="PlannedImplementationStartDate" type="Date">
        /// Gets or sets the plannedImplementationStartDate for this generateResourceReport.
        /// </field>
        /// <field name="PlannedImplementationEndDate" type="Date">
        /// Gets or sets the plannedImplementationEndDate for this generateResourceReport.
        /// </field>
        /// <field name="PlannedPostImplementationStartDate" type="Date">
        /// Gets or sets the plannedPostImplementationStartDate for this generateResourceReport.
        /// </field>
        /// <field name="PlannedPostImplementationEndDate" type="Date">
        /// Gets or sets the plannedPostImplementationEndDate for this generateResourceReport.
        /// </field>
        /// <field name="ActualBuildStartDate" type="Date">
        /// Gets or sets the actualBuildStartDate for this generateResourceReport.
        /// </field>
        /// <field name="ActualBuildEndDate" type="Date">
        /// Gets or sets the actualBuildEndDate for this generateResourceReport.
        /// </field>
        /// <field name="ActualTestStartDate" type="Date">
        /// Gets or sets the actualTestStartDate for this generateResourceReport.
        /// </field>
        /// <field name="ActualTestEndDate" type="Date">
        /// Gets or sets the actualTestEndDate for this generateResourceReport.
        /// </field>
        /// <field name="ActualImplementationStartDate" type="Date">
        /// Gets or sets the actualImplementationStartDate for this generateResourceReport.
        /// </field>
        /// <field name="ActualImplementationEndDate" type="Date">
        /// Gets or sets the actualImplementationEndDate for this generateResourceReport.
        /// </field>
        /// <field name="ActualPostImplementationStartDate" type="Date">
        /// Gets or sets the actualPostImplementationStartDate for this generateResourceReport.
        /// </field>
        /// <field name="ActualPostImplementationEndDate" type="Date">
        /// Gets or sets the actualPostImplementationEndDate for this generateResourceReport.
        /// </field>
        /// <field name="ACTUAL_EFFORT" type="Number">
        /// Gets or sets the aCTUAL_EFFORT for this generateResourceReport.
        /// </field>
        /// <field name="AllocationBuild" type="Number">
        /// Gets or sets the allocationBuild for this generateResourceReport.
        /// </field>
        /// <field name="AllocationTest" type="Number">
        /// Gets or sets the allocationTest for this generateResourceReport.
        /// </field>
        /// <field name="AllocationImplementation" type="Number">
        /// Gets or sets the allocationImplementation for this generateResourceReport.
        /// </field>
        /// <field name="AllocationPostImplementation" type="Number">
        /// Gets or sets the allocationPostImplementation for this generateResourceReport.
        /// </field>
        /// <field name="details" type="msls.application.GenerateResourceReport.Details">
        /// Gets the details for this generateResourceReport.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function PMApprovalReport(entitySet) {
        /// <summary>
        /// Represents the PMApprovalReport entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this pMApprovalReport.
        /// </param>
        /// <field name="ConsolidateID" type="Number">
        /// Gets or sets the consolidateID for this pMApprovalReport.
        /// </field>
        /// <field name="TYPE" type="String">
        /// Gets or sets the tYPE for this pMApprovalReport.
        /// </field>
        /// <field name="PHASE" type="String">
        /// Gets or sets the pHASE for this pMApprovalReport.
        /// </field>
        /// <field name="STARTWEEKDATE" type="Date">
        /// Gets or sets the sTARTWEEKDATE for this pMApprovalReport.
        /// </field>
        /// <field name="WEEK" type="Number">
        /// Gets or sets the wEEK for this pMApprovalReport.
        /// </field>
        /// <field name="APPLICATION1" type="String">
        /// Gets or sets the aPPLICATION1 for this pMApprovalReport.
        /// </field>
        /// <field name="c_DATE" type="Date">
        /// Gets or sets the c_DATE for this pMApprovalReport.
        /// </field>
        /// <field name="RESOURCE" type="String">
        /// Gets or sets the rESOURCE for this pMApprovalReport.
        /// </field>
        /// <field name="DELIVERABLES" type="String">
        /// Gets or sets the dELIVERABLES for this pMApprovalReport.
        /// </field>
        /// <field name="ACTIVITY" type="String">
        /// Gets or sets the aCTIVITY for this pMApprovalReport.
        /// </field>
        /// <field name="HOURS" type="Number">
        /// Gets or sets the hOURS for this pMApprovalReport.
        /// </field>
        /// <field name="RATEPERDAY" type="Number">
        /// Gets or sets the rATEPERDAY for this pMApprovalReport.
        /// </field>
        /// <field name="PHASE_NOTCHANGE" type="String">
        /// Gets or sets the pHASE_NOTCHANGE for this pMApprovalReport.
        /// </field>
        /// <field name="BILLEDHOURS" type="Number">
        /// Gets or sets the bILLEDHOURS for this pMApprovalReport.
        /// </field>
        /// <field name="BILLEDVALUE" type="Number">
        /// Gets or sets the bILLEDVALUE for this pMApprovalReport.
        /// </field>
        /// <field name="PMName" type="String">
        /// Gets or sets the pMName for this pMApprovalReport.
        /// </field>
        /// <field name="PMEmail" type="String">
        /// Gets or sets the pMEmail for this pMApprovalReport.
        /// </field>
        /// <field name="details" type="msls.application.PMApprovalReport.Details">
        /// Gets the details for this pMApprovalReport.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function REF_APPLICATION_TYPE(entitySet) {
        /// <summary>
        /// Represents the REF_APPLICATION_TYPE entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this rEF_APPLICATION_TYPE.
        /// </param>
        /// <field name="ApplicationTypeID" type="Number">
        /// Gets or sets the applicationTypeID for this rEF_APPLICATION_TYPE.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this rEF_APPLICATION_TYPE.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this rEF_APPLICATION_TYPE.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this rEF_APPLICATION_TYPE.
        /// </field>
        /// <field name="CreatedTime" type="Date">
        /// Gets or sets the createdTime for this rEF_APPLICATION_TYPE.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this rEF_APPLICATION_TYPE.
        /// </field>
        /// <field name="ModifiedDate" type="Date">
        /// Gets or sets the modifiedDate for this rEF_APPLICATION_TYPE.
        /// </field>
        /// <field name="TPs" type="msls.EntityCollection" elementType="msls.application.TP">
        /// Gets the tPs for this rEF_APPLICATION_TYPE.
        /// </field>
        /// <field name="details" type="msls.application.REF_APPLICATION_TYPE.Details">
        /// Gets the details for this rEF_APPLICATION_TYPE.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function REF_COMPLEXITY(entitySet) {
        /// <summary>
        /// Represents the REF_COMPLEXITY entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this rEF_COMPLEXITY.
        /// </param>
        /// <field name="ComplexityID" type="Number">
        /// Gets or sets the complexityID for this rEF_COMPLEXITY.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this rEF_COMPLEXITY.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this rEF_COMPLEXITY.
        /// </field>
        /// <field name="CreatedDate" type="Date">
        /// Gets or sets the createdDate for this rEF_COMPLEXITY.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this rEF_COMPLEXITY.
        /// </field>
        /// <field name="ModifiedDate" type="Date">
        /// Gets or sets the modifiedDate for this rEF_COMPLEXITY.
        /// </field>
        /// <field name="TPs" type="msls.EntityCollection" elementType="msls.application.TP">
        /// Gets the tPs for this rEF_COMPLEXITY.
        /// </field>
        /// <field name="TPs1" type="msls.EntityCollection" elementType="msls.application.TP">
        /// Gets the tPs1 for this rEF_COMPLEXITY.
        /// </field>
        /// <field name="details" type="msls.application.REF_COMPLEXITY.Details">
        /// Gets the details for this rEF_COMPLEXITY.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function REF_DOCUMENT_TYPE(entitySet) {
        /// <summary>
        /// Represents the REF_DOCUMENT_TYPE entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this rEF_DOCUMENT_TYPE.
        /// </param>
        /// <field name="DocumentTypeID" type="Number">
        /// Gets or sets the documentTypeID for this rEF_DOCUMENT_TYPE.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this rEF_DOCUMENT_TYPE.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this rEF_DOCUMENT_TYPE.
        /// </field>
        /// <field name="CreatedDate" type="Date">
        /// Gets or sets the createdDate for this rEF_DOCUMENT_TYPE.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this rEF_DOCUMENT_TYPE.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this rEF_DOCUMENT_TYPE.
        /// </field>
        /// <field name="ModifiedDate" type="Date">
        /// Gets or sets the modifiedDate for this rEF_DOCUMENT_TYPE.
        /// </field>
        /// <field name="TP_DOCUMENT_LINKs" type="msls.EntityCollection" elementType="msls.application.TP_DOCUMENT_LINK">
        /// Gets the tP_DOCUMENT_LINKs for this rEF_DOCUMENT_TYPE.
        /// </field>
        /// <field name="details" type="msls.application.REF_DOCUMENT_TYPE.Details">
        /// Gets the details for this rEF_DOCUMENT_TYPE.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function REF_GAP(entitySet) {
        /// <summary>
        /// Represents the REF_GAP entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this rEF_GAP.
        /// </param>
        /// <field name="GapID" type="Number">
        /// Gets or sets the gapID for this rEF_GAP.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this rEF_GAP.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this rEF_GAP.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this rEF_GAP.
        /// </field>
        /// <field name="CreatedDate" type="Date">
        /// Gets or sets the createdDate for this rEF_GAP.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this rEF_GAP.
        /// </field>
        /// <field name="ModifiedDate" type="Date">
        /// Gets or sets the modifiedDate for this rEF_GAP.
        /// </field>
        /// <field name="TPs" type="msls.EntityCollection" elementType="msls.application.TP">
        /// Gets the tPs for this rEF_GAP.
        /// </field>
        /// <field name="TPs1" type="msls.EntityCollection" elementType="msls.application.TP">
        /// Gets the tPs1 for this rEF_GAP.
        /// </field>
        /// <field name="details" type="msls.application.REF_GAP.Details">
        /// Gets the details for this rEF_GAP.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function REF_LOCATION(entitySet) {
        /// <summary>
        /// Represents the REF_LOCATION entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this rEF_LOCATION.
        /// </param>
        /// <field name="LocationId" type="Number">
        /// Gets or sets the locationId for this rEF_LOCATION.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this rEF_LOCATION.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this rEF_LOCATION.
        /// </field>
        /// <field name="CreateDate" type="Date">
        /// Gets or sets the createDate for this rEF_LOCATION.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this rEF_LOCATION.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this rEF_LOCATION.
        /// </field>
        /// <field name="ModifiedDate" type="Date">
        /// Gets or sets the modifiedDate for this rEF_LOCATION.
        /// </field>
        /// <field name="REF_RATE_CARDs" type="msls.EntityCollection" elementType="msls.application.REF_RATE_CARD">
        /// Gets the rEF_RATE_CARDs for this rEF_LOCATION.
        /// </field>
        /// <field name="details" type="msls.application.REF_LOCATION.Details">
        /// Gets the details for this rEF_LOCATION.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function REF_PHASE(entitySet) {
        /// <summary>
        /// Represents the REF_PHASE entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this rEF_PHASE.
        /// </param>
        /// <field name="PhaseID" type="Number">
        /// Gets or sets the phaseID for this rEF_PHASE.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this rEF_PHASE.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this rEF_PHASE.
        /// </field>
        /// <field name="CreatedDate" type="Date">
        /// Gets or sets the createdDate for this rEF_PHASE.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this rEF_PHASE.
        /// </field>
        /// <field name="TP_PHASEs" type="msls.EntityCollection" elementType="msls.application.TP_PHASE">
        /// Gets the tP_PHASEs for this rEF_PHASE.
        /// </field>
        /// <field name="details" type="msls.application.REF_PHASE.Details">
        /// Gets the details for this rEF_PHASE.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function REF_RATE_CARD(entitySet) {
        /// <summary>
        /// Represents the REF_RATE_CARD entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this rEF_RATE_CARD.
        /// </param>
        /// <field name="RateCardId" type="Number">
        /// Gets or sets the rateCardId for this rEF_RATE_CARD.
        /// </field>
        /// <field name="Rate" type="String">
        /// Gets or sets the rate for this rEF_RATE_CARD.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this rEF_RATE_CARD.
        /// </field>
        /// <field name="CreatedDate" type="Date">
        /// Gets or sets the createdDate for this rEF_RATE_CARD.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this rEF_RATE_CARD.
        /// </field>
        /// <field name="ModifiedDate" type="Date">
        /// Gets or sets the modifiedDate for this rEF_RATE_CARD.
        /// </field>
        /// <field name="REF_LOCATION" type="msls.application.REF_LOCATION">
        /// Gets or sets the rEF_LOCATION for this rEF_RATE_CARD.
        /// </field>
        /// <field name="RESOURCE" type="msls.application.RESOURCE">
        /// Gets or sets the rESOURCE for this rEF_RATE_CARD.
        /// </field>
        /// <field name="details" type="msls.application.REF_RATE_CARD.Details">
        /// Gets the details for this rEF_RATE_CARD.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function REF_ROLE(entitySet) {
        /// <summary>
        /// Represents the REF_ROLE entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this rEF_ROLE.
        /// </param>
        /// <field name="RoleID" type="Number">
        /// Gets or sets the roleID for this rEF_ROLE.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this rEF_ROLE.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this rEF_ROLE.
        /// </field>
        /// <field name="CreatedDate" type="Date">
        /// Gets or sets the createdDate for this rEF_ROLE.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this rEF_ROLE.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this rEF_ROLE.
        /// </field>
        /// <field name="ModifiedDate" type="Date">
        /// Gets or sets the modifiedDate for this rEF_ROLE.
        /// </field>
        /// <field name="TP_RESOURCE_ALLOCATIONs" type="msls.EntityCollection" elementType="msls.application.TP_RESOURCE_ALLOCATION">
        /// Gets the tP_RESOURCE_ALLOCATIONs for this rEF_ROLE.
        /// </field>
        /// <field name="details" type="msls.application.REF_ROLE.Details">
        /// Gets the details for this rEF_ROLE.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function REF_STAKEHOLDER(entitySet) {
        /// <summary>
        /// Represents the REF_STAKEHOLDER entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this rEF_STAKEHOLDER.
        /// </param>
        /// <field name="StakeholderID" type="Number">
        /// Gets or sets the stakeholderID for this rEF_STAKEHOLDER.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this rEF_STAKEHOLDER.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this rEF_STAKEHOLDER.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this rEF_STAKEHOLDER.
        /// </field>
        /// <field name="CreatedDate" type="Date">
        /// Gets or sets the createdDate for this rEF_STAKEHOLDER.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this rEF_STAKEHOLDER.
        /// </field>
        /// <field name="ModifiedDate" type="Date">
        /// Gets or sets the modifiedDate for this rEF_STAKEHOLDER.
        /// </field>
        /// <field name="TP_STAKEHOLDERs" type="msls.EntityCollection" elementType="msls.application.TP_STAKEHOLDER">
        /// Gets the tP_STAKEHOLDERs for this rEF_STAKEHOLDER.
        /// </field>
        /// <field name="details" type="msls.application.REF_STAKEHOLDER.Details">
        /// Gets the details for this rEF_STAKEHOLDER.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function REF_STATUS(entitySet) {
        /// <summary>
        /// Represents the REF_STATUS entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this rEF_STATUS.
        /// </param>
        /// <field name="StatusID" type="Number">
        /// Gets or sets the statusID for this rEF_STATUS.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this rEF_STATUS.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this rEF_STATUS.
        /// </field>
        /// <field name="CreatedDate" type="Date">
        /// Gets or sets the createdDate for this rEF_STATUS.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this rEF_STATUS.
        /// </field>
        /// <field name="ModifiedDate" type="Date">
        /// Gets or sets the modifiedDate for this rEF_STATUS.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this rEF_STATUS.
        /// </field>
        /// <field name="RESOURCEs" type="msls.EntityCollection" elementType="msls.application.RESOURCE">
        /// Gets the rESOURCEs for this rEF_STATUS.
        /// </field>
        /// <field name="details" type="msls.application.REF_STATUS.Details">
        /// Gets the details for this rEF_STATUS.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function REF_TECHNOLOGY(entitySet) {
        /// <summary>
        /// Represents the REF_TECHNOLOGY entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this rEF_TECHNOLOGY.
        /// </param>
        /// <field name="TechnologyID" type="Number">
        /// Gets or sets the technologyID for this rEF_TECHNOLOGY.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this rEF_TECHNOLOGY.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this rEF_TECHNOLOGY.
        /// </field>
        /// <field name="CreatedDate" type="Date">
        /// Gets or sets the createdDate for this rEF_TECHNOLOGY.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this rEF_TECHNOLOGY.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this rEF_TECHNOLOGY.
        /// </field>
        /// <field name="ModifiedDate" type="Date">
        /// Gets or sets the modifiedDate for this rEF_TECHNOLOGY.
        /// </field>
        /// <field name="APPLICATIONs" type="msls.EntityCollection" elementType="msls.application.APPLICATION1">
        /// Gets the aPPLICATIONs for this rEF_TECHNOLOGY.
        /// </field>
        /// <field name="details" type="msls.application.REF_TECHNOLOGY.Details">
        /// Gets the details for this rEF_TECHNOLOGY.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function REF_TECHNOLOGY_STACK(entitySet) {
        /// <summary>
        /// Represents the REF_TECHNOLOGY_STACK entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this rEF_TECHNOLOGY_STACK.
        /// </param>
        /// <field name="TechnologyStackID" type="Number">
        /// Gets or sets the technologyStackID for this rEF_TECHNOLOGY_STACK.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this rEF_TECHNOLOGY_STACK.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this rEF_TECHNOLOGY_STACK.
        /// </field>
        /// <field name="CreatedDate" type="Date">
        /// Gets or sets the createdDate for this rEF_TECHNOLOGY_STACK.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this rEF_TECHNOLOGY_STACK.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this rEF_TECHNOLOGY_STACK.
        /// </field>
        /// <field name="ModifiedDate" type="Date">
        /// Gets or sets the modifiedDate for this rEF_TECHNOLOGY_STACK.
        /// </field>
        /// <field name="TPs" type="msls.EntityCollection" elementType="msls.application.TP">
        /// Gets the tPs for this rEF_TECHNOLOGY_STACK.
        /// </field>
        /// <field name="details" type="msls.application.REF_TECHNOLOGY_STACK.Details">
        /// Gets the details for this rEF_TECHNOLOGY_STACK.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function REF_VENDOR(entitySet) {
        /// <summary>
        /// Represents the REF_VENDOR entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this rEF_VENDOR.
        /// </param>
        /// <field name="VendorID" type="Number">
        /// Gets or sets the vendorID for this rEF_VENDOR.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this rEF_VENDOR.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this rEF_VENDOR.
        /// </field>
        /// <field name="IsEsu" type="Boolean">
        /// Gets or sets the isEsu for this rEF_VENDOR.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this rEF_VENDOR.
        /// </field>
        /// <field name="CreatedDate" type="Date">
        /// Gets or sets the createdDate for this rEF_VENDOR.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this rEF_VENDOR.
        /// </field>
        /// <field name="ModifiedDate" type="Date">
        /// Gets or sets the modifiedDate for this rEF_VENDOR.
        /// </field>
        /// <field name="TP_VENDORs" type="msls.EntityCollection" elementType="msls.application.TP_VENDOR">
        /// Gets the tP_VENDORs for this rEF_VENDOR.
        /// </field>
        /// <field name="details" type="msls.application.REF_VENDOR.Details">
        /// Gets the details for this rEF_VENDOR.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function RESOURCE(entitySet) {
        /// <summary>
        /// Represents the RESOURCE entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this rESOURCE.
        /// </param>
        /// <field name="ResourceID" type="Number">
        /// Gets or sets the resourceID for this rESOURCE.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this rESOURCE.
        /// </field>
        /// <field name="EmailId" type="String">
        /// Gets or sets the emailId for this rESOURCE.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this rESOURCE.
        /// </field>
        /// <field name="CreatedDate" type="Date">
        /// Gets or sets the createdDate for this rESOURCE.
        /// </field>
        /// <field name="ModifiedDate" type="Date">
        /// Gets or sets the modifiedDate for this rESOURCE.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this rESOURCE.
        /// </field>
        /// <field name="REF_RATE_CARDs" type="msls.EntityCollection" elementType="msls.application.REF_RATE_CARD">
        /// Gets the rEF_RATE_CARDs for this rESOURCE.
        /// </field>
        /// <field name="REF_STATUS" type="msls.application.REF_STATUS">
        /// Gets or sets the rEF_STATUS for this rESOURCE.
        /// </field>
        /// <field name="TP_RESOURCE_ALLOCATIONs" type="msls.EntityCollection" elementType="msls.application.TP_RESOURCE_ALLOCATION">
        /// Gets the tP_RESOURCE_ALLOCATIONs for this rESOURCE.
        /// </field>
        /// <field name="TP_TIME_ENTRies" type="msls.EntityCollection" elementType="msls.application.TP_TIME_ENTRY">
        /// Gets the tP_TIME_ENTRies for this rESOURCE.
        /// </field>
        /// <field name="TPs" type="msls.EntityCollection" elementType="msls.application.TP">
        /// Gets the tPs for this rESOURCE.
        /// </field>
        /// <field name="details" type="msls.application.RESOURCE.Details">
        /// Gets the details for this rESOURCE.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function TP_APPLICATION(entitySet) {
        /// <summary>
        /// Represents the TP_APPLICATION entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this tP_APPLICATION.
        /// </param>
        /// <field name="TpApplicationID" type="Number">
        /// Gets or sets the tpApplicationID for this tP_APPLICATION.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this tP_APPLICATION.
        /// </field>
        /// <field name="CreatedDate" type="Date">
        /// Gets or sets the createdDate for this tP_APPLICATION.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this tP_APPLICATION.
        /// </field>
        /// <field name="ModifiedDate" type="Date">
        /// Gets or sets the modifiedDate for this tP_APPLICATION.
        /// </field>
        /// <field name="APPLICATION1" type="msls.application.APPLICATION1">
        /// Gets or sets the aPPLICATION1 for this tP_APPLICATION.
        /// </field>
        /// <field name="TP" type="msls.application.TP">
        /// Gets or sets the tP for this tP_APPLICATION.
        /// </field>
        /// <field name="details" type="msls.application.TP_APPLICATION.Details">
        /// Gets the details for this tP_APPLICATION.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function TP_DOCUMENT_LINK(entitySet) {
        /// <summary>
        /// Represents the TP_DOCUMENT_LINK entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this tP_DOCUMENT_LINK.
        /// </param>
        /// <field name="TpDocumentLinkID" type="Number">
        /// Gets or sets the tpDocumentLinkID for this tP_DOCUMENT_LINK.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this tP_DOCUMENT_LINK.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this tP_DOCUMENT_LINK.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this tP_DOCUMENT_LINK.
        /// </field>
        /// <field name="CreatedDate" type="Date">
        /// Gets or sets the createdDate for this tP_DOCUMENT_LINK.
        /// </field>
        /// <field name="Link" type="String">
        /// Gets or sets the link for this tP_DOCUMENT_LINK.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this tP_DOCUMENT_LINK.
        /// </field>
        /// <field name="ModifiedDate" type="Date">
        /// Gets or sets the modifiedDate for this tP_DOCUMENT_LINK.
        /// </field>
        /// <field name="REF_DOCUMENT_TYPE" type="msls.application.REF_DOCUMENT_TYPE">
        /// Gets or sets the rEF_DOCUMENT_TYPE for this tP_DOCUMENT_LINK.
        /// </field>
        /// <field name="TP" type="msls.application.TP">
        /// Gets or sets the tP for this tP_DOCUMENT_LINK.
        /// </field>
        /// <field name="details" type="msls.application.TP_DOCUMENT_LINK.Details">
        /// Gets the details for this tP_DOCUMENT_LINK.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function TP_PHASE(entitySet) {
        /// <summary>
        /// Represents the TP_PHASE entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this tP_PHASE.
        /// </param>
        /// <field name="TpPhaseID" type="Number">
        /// Gets or sets the tpPhaseID for this tP_PHASE.
        /// </field>
        /// <field name="PlannedStartDate" type="Date">
        /// Gets or sets the plannedStartDate for this tP_PHASE.
        /// </field>
        /// <field name="PlannedEndDate" type="Date">
        /// Gets or sets the plannedEndDate for this tP_PHASE.
        /// </field>
        /// <field name="ActualStartDate" type="Date">
        /// Gets or sets the actualStartDate for this tP_PHASE.
        /// </field>
        /// <field name="ActualEndDate" type="Date">
        /// Gets or sets the actualEndDate for this tP_PHASE.
        /// </field>
        /// <field name="Duration" type="String">
        /// Gets or sets the duration for this tP_PHASE.
        /// </field>
        /// <field name="CreatedDate" type="Date">
        /// Gets or sets the createdDate for this tP_PHASE.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this tP_PHASE.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this tP_PHASE.
        /// </field>
        /// <field name="ModifiedDate" type="Date">
        /// Gets or sets the modifiedDate for this tP_PHASE.
        /// </field>
        /// <field name="TP" type="msls.application.TP">
        /// Gets or sets the tP for this tP_PHASE.
        /// </field>
        /// <field name="REF_PHASE" type="msls.application.REF_PHASE">
        /// Gets or sets the rEF_PHASE for this tP_PHASE.
        /// </field>
        /// <field name="details" type="msls.application.TP_PHASE.Details">
        /// Gets the details for this tP_PHASE.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function TP_RESOURCE_ALLOCATION(entitySet) {
        /// <summary>
        /// Represents the TP_RESOURCE_ALLOCATION entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this tP_RESOURCE_ALLOCATION.
        /// </param>
        /// <field name="TpResourceAllocationId" type="Number">
        /// Gets or sets the tpResourceAllocationId for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="LocationId" type="Number">
        /// Gets or sets the locationId for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="Percentage" type="Number">
        /// Gets or sets the percentage for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="PlannedStartDate" type="Date">
        /// Gets or sets the plannedStartDate for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="PlannedEndDate" type="Date">
        /// Gets or sets the plannedEndDate for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="ActualStartDate" type="Date">
        /// Gets or sets the actualStartDate for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="ActualEndDate" type="Date">
        /// Gets or sets the actualEndDate for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="ActualBuildStartDate" type="Date">
        /// Gets or sets the actualBuildStartDate for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="ActualBuildEndDate" type="Date">
        /// Gets or sets the actualBuildEndDate for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="PlannedBuildStartDate" type="Date">
        /// Gets or sets the plannedBuildStartDate for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="PlannedBuildEndDate" type="Date">
        /// Gets or sets the plannedBuildEndDate for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="ActualTestStartDate" type="Date">
        /// Gets or sets the actualTestStartDate for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="ActualTestEndDate" type="Date">
        /// Gets or sets the actualTestEndDate for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="PlannedTestStartDate" type="Date">
        /// Gets or sets the plannedTestStartDate for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="PlannedTestEndDate" type="Date">
        /// Gets or sets the plannedTestEndDate for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="ActualImplementationStartDate" type="Date">
        /// Gets or sets the actualImplementationStartDate for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="ActualImplementationEndDate" type="Date">
        /// Gets or sets the actualImplementationEndDate for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="PlannedImplementationStartDate" type="Date">
        /// Gets or sets the plannedImplementationStartDate for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="PlannedImplementationEndDate" type="Date">
        /// Gets or sets the plannedImplementationEndDate for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="PlannedPostImplementationStartDate" type="Date">
        /// Gets or sets the plannedPostImplementationStartDate for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="PlannedPostImplementationEndDate" type="Date">
        /// Gets or sets the plannedPostImplementationEndDate for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="ActualPostImplementationStartDate" type="Date">
        /// Gets or sets the actualPostImplementationStartDate for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="ActualPostImplementationEndDate" type="Date">
        /// Gets or sets the actualPostImplementationEndDate for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="AllocationBuild" type="Number">
        /// Gets or sets the allocationBuild for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="AllocationTest" type="Number">
        /// Gets or sets the allocationTest for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="AllocationImplementation" type="Number">
        /// Gets or sets the allocationImplementation for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="AllocationPostImplementation" type="Number">
        /// Gets or sets the allocationPostImplementation for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="CreatedDate" type="Date">
        /// Gets or sets the createdDate for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="ModifiedDate" type="Date">
        /// Gets or sets the modifiedDate for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="REF_ROLE" type="msls.application.REF_ROLE">
        /// Gets or sets the rEF_ROLE for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="RESOURCE" type="msls.application.RESOURCE">
        /// Gets or sets the rESOURCE for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="TP" type="msls.application.TP">
        /// Gets or sets the tP for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="TP_TIME_ENTRies" type="msls.EntityCollection" elementType="msls.application.TP_TIME_ENTRY">
        /// Gets the tP_TIME_ENTRies for this tP_RESOURCE_ALLOCATION.
        /// </field>
        /// <field name="details" type="msls.application.TP_RESOURCE_ALLOCATION.Details">
        /// Gets the details for this tP_RESOURCE_ALLOCATION.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function TP_STAKEHOLDER(entitySet) {
        /// <summary>
        /// Represents the TP_STAKEHOLDER entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this tP_STAKEHOLDER.
        /// </param>
        /// <field name="TpStakeholderID" type="Number">
        /// Gets or sets the tpStakeholderID for this tP_STAKEHOLDER.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this tP_STAKEHOLDER.
        /// </field>
        /// <field name="CreatedDate" type="Date">
        /// Gets or sets the createdDate for this tP_STAKEHOLDER.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this tP_STAKEHOLDER.
        /// </field>
        /// <field name="ModifiedDate" type="Date">
        /// Gets or sets the modifiedDate for this tP_STAKEHOLDER.
        /// </field>
        /// <field name="REF_STAKEHOLDER" type="msls.application.REF_STAKEHOLDER">
        /// Gets or sets the rEF_STAKEHOLDER for this tP_STAKEHOLDER.
        /// </field>
        /// <field name="TP" type="msls.application.TP">
        /// Gets or sets the tP for this tP_STAKEHOLDER.
        /// </field>
        /// <field name="details" type="msls.application.TP_STAKEHOLDER.Details">
        /// Gets the details for this tP_STAKEHOLDER.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function TP_TIME_ENTRY(entitySet) {
        /// <summary>
        /// Represents the TP_TIME_ENTRY entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this tP_TIME_ENTRY.
        /// </param>
        /// <field name="TpTimeEntryId" type="Number">
        /// Gets or sets the tpTimeEntryId for this tP_TIME_ENTRY.
        /// </field>
        /// <field name="ResourceId" type="Number">
        /// Gets or sets the resourceId for this tP_TIME_ENTRY.
        /// </field>
        /// <field name="c_Date" type="Date">
        /// Gets or sets the c_Date for this tP_TIME_ENTRY.
        /// </field>
        /// <field name="PlannedEffort" type="Number">
        /// Gets or sets the plannedEffort for this tP_TIME_ENTRY.
        /// </field>
        /// <field name="ActualEffort" type="Number">
        /// Gets or sets the actualEffort for this tP_TIME_ENTRY.
        /// </field>
        /// <field name="Phase" type="String">
        /// Gets or sets the phase for this tP_TIME_ENTRY.
        /// </field>
        /// <field name="TP_RESOURCE_ALLOCATION" type="msls.application.TP_RESOURCE_ALLOCATION">
        /// Gets or sets the tP_RESOURCE_ALLOCATION for this tP_TIME_ENTRY.
        /// </field>
        /// <field name="RESOURCE" type="msls.application.RESOURCE">
        /// Gets or sets the rESOURCE for this tP_TIME_ENTRY.
        /// </field>
        /// <field name="details" type="msls.application.TP_TIME_ENTRY.Details">
        /// Gets the details for this tP_TIME_ENTRY.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function TP_VENDOR(entitySet) {
        /// <summary>
        /// Represents the TP_VENDOR entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this tP_VENDOR.
        /// </param>
        /// <field name="TpVendorID" type="Number">
        /// Gets or sets the tpVendorID for this tP_VENDOR.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this tP_VENDOR.
        /// </field>
        /// <field name="CreatedDate" type="Date">
        /// Gets or sets the createdDate for this tP_VENDOR.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this tP_VENDOR.
        /// </field>
        /// <field name="ModifiedDate" type="Date">
        /// Gets or sets the modifiedDate for this tP_VENDOR.
        /// </field>
        /// <field name="REF_VENDOR" type="msls.application.REF_VENDOR">
        /// Gets or sets the rEF_VENDOR for this tP_VENDOR.
        /// </field>
        /// <field name="TP" type="msls.application.TP">
        /// Gets or sets the tP for this tP_VENDOR.
        /// </field>
        /// <field name="details" type="msls.application.TP_VENDOR.Details">
        /// Gets the details for this tP_VENDOR.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function TP(entitySet) {
        /// <summary>
        /// Represents the TP entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this tP.
        /// </param>
        /// <field name="TpID" type="Number">
        /// Gets or sets the tpID for this tP.
        /// </field>
        /// <field name="Number" type="Number">
        /// Gets or sets the number for this tP.
        /// </field>
        /// <field name="Name" type="String">
        /// Gets or sets the name for this tP.
        /// </field>
        /// <field name="Description" type="String">
        /// Gets or sets the description for this tP.
        /// </field>
        /// <field name="WorkOrderNumber" type="String">
        /// Gets or sets the workOrderNumber for this tP.
        /// </field>
        /// <field name="WorkOrderStatus" type="Number">
        /// Gets or sets the workOrderStatus for this tP.
        /// </field>
        /// <field name="WorkOrderIssuedOn" type="Date">
        /// Gets or sets the workOrderIssuedOn for this tP.
        /// </field>
        /// <field name="PlannedEffort" type="String">
        /// Gets or sets the plannedEffort for this tP.
        /// </field>
        /// <field name="EstimatedCost" type="String">
        /// Gets or sets the estimatedCost for this tP.
        /// </field>
        /// <field name="IssueDateToHP" type="Date">
        /// Gets or sets the issueDateToHP for this tP.
        /// </field>
        /// <field name="EffortDateProvidedByHP" type="Date">
        /// Gets or sets the effortDateProvidedByHP for this tP.
        /// </field>
        /// <field name="ApprovedDateByDL" type="Date">
        /// Gets or sets the approvedDateByDL for this tP.
        /// </field>
        /// <field name="PlannedStartDate" type="Date">
        /// Gets or sets the plannedStartDate for this tP.
        /// </field>
        /// <field name="PlannedEndDate" type="Date">
        /// Gets or sets the plannedEndDate for this tP.
        /// </field>
        /// <field name="ActualStartDate" type="Date">
        /// Gets or sets the actualStartDate for this tP.
        /// </field>
        /// <field name="ActualEndDate" type="Date">
        /// Gets or sets the actualEndDate for this tP.
        /// </field>
        /// <field name="ApplicationSize" type="String">
        /// Gets or sets the applicationSize for this tP.
        /// </field>
        /// <field name="HasInputDocument" type="Boolean">
        /// Gets or sets the hasInputDocument for this tP.
        /// </field>
        /// <field name="HasFeasibilityStudy" type="Boolean">
        /// Gets or sets the hasFeasibilityStudy for this tP.
        /// </field>
        /// <field name="HasUnderstandingDocument" type="Boolean">
        /// Gets or sets the hasUnderstandingDocument for this tP.
        /// </field>
        /// <field name="HasEstimation" type="Boolean">
        /// Gets or sets the hasEstimation for this tP.
        /// </field>
        /// <field name="CreatedDate" type="Date">
        /// Gets or sets the createdDate for this tP.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this tP.
        /// </field>
        /// <field name="ModifiedDate" type="Date">
        /// Gets or sets the modifiedDate for this tP.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this tP.
        /// </field>
        /// <field name="TP_APPLICATIONs" type="msls.EntityCollection" elementType="msls.application.TP_APPLICATION">
        /// Gets the tP_APPLICATIONs for this tP.
        /// </field>
        /// <field name="TP_DOCUMENT_LINKs" type="msls.EntityCollection" elementType="msls.application.TP_DOCUMENT_LINK">
        /// Gets the tP_DOCUMENT_LINKs for this tP.
        /// </field>
        /// <field name="TP_PHASEs" type="msls.EntityCollection" elementType="msls.application.TP_PHASE">
        /// Gets the tP_PHASEs for this tP.
        /// </field>
        /// <field name="REF_APPLICATION_TYPE" type="msls.application.REF_APPLICATION_TYPE">
        /// Gets or sets the rEF_APPLICATION_TYPE for this tP.
        /// </field>
        /// <field name="REF_COMPLEXITY" type="msls.application.REF_COMPLEXITY">
        /// Gets or sets the rEF_COMPLEXITY for this tP.
        /// </field>
        /// <field name="REF_COMPLEXITY1" type="msls.application.REF_COMPLEXITY">
        /// Gets or sets the rEF_COMPLEXITY1 for this tP.
        /// </field>
        /// <field name="REF_GAP" type="msls.application.REF_GAP">
        /// Gets or sets the rEF_GAP for this tP.
        /// </field>
        /// <field name="REF_GAP1" type="msls.application.REF_GAP">
        /// Gets or sets the rEF_GAP1 for this tP.
        /// </field>
        /// <field name="REF_TECHNOLOGY_STACK" type="msls.application.REF_TECHNOLOGY_STACK">
        /// Gets or sets the rEF_TECHNOLOGY_STACK for this tP.
        /// </field>
        /// <field name="TP_RESOURCE_ALLOCATIONs" type="msls.EntityCollection" elementType="msls.application.TP_RESOURCE_ALLOCATION">
        /// Gets the tP_RESOURCE_ALLOCATIONs for this tP.
        /// </field>
        /// <field name="TP_STAKEHOLDERs" type="msls.EntityCollection" elementType="msls.application.TP_STAKEHOLDER">
        /// Gets the tP_STAKEHOLDERs for this tP.
        /// </field>
        /// <field name="TP_VENDORs" type="msls.EntityCollection" elementType="msls.application.TP_VENDOR">
        /// Gets the tP_VENDORs for this tP.
        /// </field>
        /// <field name="RESOURCE" type="msls.application.RESOURCE">
        /// Gets or sets the rESOURCE for this tP.
        /// </field>
        /// <field name="PMName" type="String">
        /// Gets or sets the pMName for this tP.
        /// </field>
        /// <field name="PMEmail" type="String">
        /// Gets or sets the pMEmail for this tP.
        /// </field>
        /// <field name="TPStatus" type="String">
        /// Gets or sets the tPStatus for this tP.
        /// </field>
        /// <field name="details" type="msls.application.TP.Details">
        /// Gets the details for this tP.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function UpdateTimeEntry(entitySet) {
        /// <summary>
        /// Represents the UpdateTimeEntry entity type.
        /// </summary>
        /// <param name="entitySet" type="msls.EntitySet" optional="true">
        /// The entity set that should contain this updateTimeEntry.
        /// </param>
        /// <field name="Id" type="Number">
        /// Gets or sets the id for this updateTimeEntry.
        /// </field>
        /// <field name="TPRESOURCEALLOCATIONID" type="Number">
        /// Gets or sets the tPRESOURCEALLOCATIONID for this updateTimeEntry.
        /// </field>
        /// <field name="ResourceID" type="Number">
        /// Gets or sets the resourceID for this updateTimeEntry.
        /// </field>
        /// <field name="PlannedBuildStartDate" type="Date">
        /// Gets or sets the plannedBuildStartDate for this updateTimeEntry.
        /// </field>
        /// <field name="PlannedBuildEndDate" type="Date">
        /// Gets or sets the plannedBuildEndDate for this updateTimeEntry.
        /// </field>
        /// <field name="ActualBuildStartDate" type="Date">
        /// Gets or sets the actualBuildStartDate for this updateTimeEntry.
        /// </field>
        /// <field name="ActualBuildEndDate" type="Date">
        /// Gets or sets the actualBuildEndDate for this updateTimeEntry.
        /// </field>
        /// <field name="PlannedTestStartDate" type="Date">
        /// Gets or sets the plannedTestStartDate for this updateTimeEntry.
        /// </field>
        /// <field name="PlannedTestEndDate" type="Date">
        /// Gets or sets the plannedTestEndDate for this updateTimeEntry.
        /// </field>
        /// <field name="ActualTestStartDate" type="Date">
        /// Gets or sets the actualTestStartDate for this updateTimeEntry.
        /// </field>
        /// <field name="ActualTestEndDate" type="Date">
        /// Gets or sets the actualTestEndDate for this updateTimeEntry.
        /// </field>
        /// <field name="PlannedImplementationStartDate" type="Date">
        /// Gets or sets the plannedImplementationStartDate for this updateTimeEntry.
        /// </field>
        /// <field name="PlannedImplementationEndDate" type="Date">
        /// Gets or sets the plannedImplementationEndDate for this updateTimeEntry.
        /// </field>
        /// <field name="ActualImplementationStartDate" type="Date">
        /// Gets or sets the actualImplementationStartDate for this updateTimeEntry.
        /// </field>
        /// <field name="ActualImplementationEndDate" type="Date">
        /// Gets or sets the actualImplementationEndDate for this updateTimeEntry.
        /// </field>
        /// <field name="PlannedPostImplementationStartDate" type="Date">
        /// Gets or sets the plannedPostImplementationStartDate for this updateTimeEntry.
        /// </field>
        /// <field name="PlannedPostImplementationEndDate" type="Date">
        /// Gets or sets the plannedPostImplementationEndDate for this updateTimeEntry.
        /// </field>
        /// <field name="ActualPostImplementationStartDate" type="Date">
        /// Gets or sets the actualPostImplementationStartDate for this updateTimeEntry.
        /// </field>
        /// <field name="ActualPostImplementationEndDate" type="Date">
        /// Gets or sets the actualPostImplementationEndDate for this updateTimeEntry.
        /// </field>
        /// <field name="AllocationBuild" type="Number">
        /// Gets or sets the allocationBuild for this updateTimeEntry.
        /// </field>
        /// <field name="AllocationTest" type="Number">
        /// Gets or sets the allocationTest for this updateTimeEntry.
        /// </field>
        /// <field name="AllocationImplementation" type="Number">
        /// Gets or sets the allocationImplementation for this updateTimeEntry.
        /// </field>
        /// <field name="AllocationPostImplementation" type="Number">
        /// Gets or sets the allocationPostImplementation for this updateTimeEntry.
        /// </field>
        /// <field name="IsInsert" type="Number">
        /// Gets or sets the isInsert for this updateTimeEntry.
        /// </field>
        /// <field name="CreatedBy" type="String">
        /// Gets or sets the createdBy for this updateTimeEntry.
        /// </field>
        /// <field name="Created" type="Date">
        /// Gets or sets the created for this updateTimeEntry.
        /// </field>
        /// <field name="ModifiedBy" type="String">
        /// Gets or sets the modifiedBy for this updateTimeEntry.
        /// </field>
        /// <field name="Modified" type="Date">
        /// Gets or sets the modified for this updateTimeEntry.
        /// </field>
        /// <field name="RowVersion" type="Array">
        /// Gets or sets the rowVersion for this updateTimeEntry.
        /// </field>
        /// <field name="details" type="msls.application.UpdateTimeEntry.Details">
        /// Gets the details for this updateTimeEntry.
        /// </field>
        $Entity.call(this, entitySet);
    }

    function TestDBData(dataWorkspace) {
        /// <summary>
        /// Represents the TestDBData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="APPLICATIONs" type="msls.EntitySet">
        /// Gets the APPLICATIONs entity set.
        /// </field>
        /// <field name="ConsolidatedTimeSheets" type="msls.EntitySet">
        /// Gets the ConsolidatedTimeSheets entity set.
        /// </field>
        /// <field name="GenerateResourceReports" type="msls.EntitySet">
        /// Gets the GenerateResourceReports entity set.
        /// </field>
        /// <field name="PMApprovalReports" type="msls.EntitySet">
        /// Gets the PMApprovalReports entity set.
        /// </field>
        /// <field name="REF_APPLICATION_TYPEs" type="msls.EntitySet">
        /// Gets the REF_APPLICATION_TYPEs entity set.
        /// </field>
        /// <field name="REF_COMPLEXITies" type="msls.EntitySet">
        /// Gets the REF_COMPLEXITies entity set.
        /// </field>
        /// <field name="REF_DOCUMENT_TYPEs" type="msls.EntitySet">
        /// Gets the REF_DOCUMENT_TYPEs entity set.
        /// </field>
        /// <field name="REF_GAPs" type="msls.EntitySet">
        /// Gets the REF_GAPs entity set.
        /// </field>
        /// <field name="REF_LOCATIONs" type="msls.EntitySet">
        /// Gets the REF_LOCATIONs entity set.
        /// </field>
        /// <field name="REF_PHASEs" type="msls.EntitySet">
        /// Gets the REF_PHASEs entity set.
        /// </field>
        /// <field name="REF_RATE_CARDs" type="msls.EntitySet">
        /// Gets the REF_RATE_CARDs entity set.
        /// </field>
        /// <field name="REF_ROLEs" type="msls.EntitySet">
        /// Gets the REF_ROLEs entity set.
        /// </field>
        /// <field name="REF_STAKEHOLDERs" type="msls.EntitySet">
        /// Gets the REF_STAKEHOLDERs entity set.
        /// </field>
        /// <field name="REF_STATUS" type="msls.EntitySet">
        /// Gets the REF_STATUS entity set.
        /// </field>
        /// <field name="REF_TECHNOLOGies" type="msls.EntitySet">
        /// Gets the REF_TECHNOLOGies entity set.
        /// </field>
        /// <field name="REF_TECHNOLOGY_STACKs" type="msls.EntitySet">
        /// Gets the REF_TECHNOLOGY_STACKs entity set.
        /// </field>
        /// <field name="REF_VENDORs" type="msls.EntitySet">
        /// Gets the REF_VENDORs entity set.
        /// </field>
        /// <field name="RESOURCEs" type="msls.EntitySet">
        /// Gets the RESOURCEs entity set.
        /// </field>
        /// <field name="TP_APPLICATIONs" type="msls.EntitySet">
        /// Gets the TP_APPLICATIONs entity set.
        /// </field>
        /// <field name="TP_DOCUMENT_LINKs" type="msls.EntitySet">
        /// Gets the TP_DOCUMENT_LINKs entity set.
        /// </field>
        /// <field name="TP_PHASEs" type="msls.EntitySet">
        /// Gets the TP_PHASEs entity set.
        /// </field>
        /// <field name="TP_RESOURCE_ALLOCATIONs" type="msls.EntitySet">
        /// Gets the TP_RESOURCE_ALLOCATIONs entity set.
        /// </field>
        /// <field name="TP_STAKEHOLDERs" type="msls.EntitySet">
        /// Gets the TP_STAKEHOLDERs entity set.
        /// </field>
        /// <field name="TP_TIME_ENTRies" type="msls.EntitySet">
        /// Gets the TP_TIME_ENTRies entity set.
        /// </field>
        /// <field name="TP_VENDORs" type="msls.EntitySet">
        /// Gets the TP_VENDORs entity set.
        /// </field>
        /// <field name="TPs" type="msls.EntitySet">
        /// Gets the TPs entity set.
        /// </field>
        /// <field name="details" type="msls.application.TestDBData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };

    function ApplicationData(dataWorkspace) {
        /// <summary>
        /// Represents the ApplicationData data service.
        /// </summary>
        /// <param name="dataWorkspace" type="msls.DataWorkspace">
        /// The data workspace that created this data service.
        /// </param>
        /// <field name="UpdateTimeEntries" type="msls.EntitySet">
        /// Gets the UpdateTimeEntries entity set.
        /// </field>
        /// <field name="details" type="msls.application.ApplicationData.Details">
        /// Gets the details for this data service.
        /// </field>
        $DataService.call(this, dataWorkspace);
    };
    function DataWorkspace() {
        /// <summary>
        /// Represents the data workspace.
        /// </summary>
        /// <field name="TestDBData" type="msls.application.TestDBData">
        /// Gets the TestDBData data service.
        /// </field>
        /// <field name="ApplicationData" type="msls.application.ApplicationData">
        /// Gets the ApplicationData data service.
        /// </field>
        /// <field name="details" type="msls.application.DataWorkspace.Details">
        /// Gets the details for this data workspace.
        /// </field>
        $DataWorkspace.call(this);
    };

    msls._addToNamespace("msls.application", {

        APPLICATION1: $defineEntity(APPLICATION1, [
            { name: "ApplicationID", type: Number, isReadOnly: true },
            { name: "Name", type: String },
            { name: "CreatedBy", type: String },
            { name: "CreatedDate", type: Date },
            { name: "ModifiedBy", type: String },
            { name: "ModifiedDate", type: Date },
            { name: "REF_TECHNOLOGY", kind: "reference", type: REF_TECHNOLOGY },
            { name: "TP_APPLICATIONs", kind: "collection", elementType: TP_APPLICATION }
        ]),

        ConsolidatedTimeSheet: $defineEntity(ConsolidatedTimeSheet, [
            { name: "ConsolidateID", type: Number, isReadOnly: true },
            { name: "Type", type: String },
            { name: "Phase", type: String },
            { name: "StartWeekDate", type: Date },
            { name: "Week", type: Number },
            { name: "Application1", type: String },
            { name: "c_Date", type: Date },
            { name: "Resource", type: String },
            { name: "Deliverables", type: String },
            { name: "Activity", type: String },
            { name: "Hours", type: Number },
            { name: "RatePerDay", type: Number },
            { name: "Phase_NotChange", type: String },
            { name: "BilledHours", type: Number },
            { name: "BilledValue", type: Number }
        ]),

        GenerateResourceReport: $defineEntity(GenerateResourceReport, [
            { name: "TpResourceAllocationId", type: Number },
            { name: "RESOURCE_NAME", type: String },
            { name: "ROLE", type: String },
            { name: "LOCATION", type: String },
            { name: "PLANNED_EFFORT", type: Number },
            { name: "TP", type: String },
            { name: "Percentage", type: Number },
            { name: "PlannedBuildStartDate", type: Date },
            { name: "PlannedBuildEndDate", type: Date },
            { name: "PlannedTestStartDate", type: Date },
            { name: "PlannedTestEndDate", type: Date },
            { name: "PlannedImplementationStartDate", type: Date },
            { name: "PlannedImplementationEndDate", type: Date },
            { name: "PlannedPostImplementationStartDate", type: Date },
            { name: "PlannedPostImplementationEndDate", type: Date },
            { name: "ActualBuildStartDate", type: Date },
            { name: "ActualBuildEndDate", type: Date },
            { name: "ActualTestStartDate", type: Date },
            { name: "ActualTestEndDate", type: Date },
            { name: "ActualImplementationStartDate", type: Date },
            { name: "ActualImplementationEndDate", type: Date },
            { name: "ActualPostImplementationStartDate", type: Date },
            { name: "ActualPostImplementationEndDate", type: Date },
            { name: "ACTUAL_EFFORT", type: Number },
            { name: "AllocationBuild", type: Number },
            { name: "AllocationTest", type: Number },
            { name: "AllocationImplementation", type: Number },
            { name: "AllocationPostImplementation", type: Number }
        ]),

        PMApprovalReport: $defineEntity(PMApprovalReport, [
            { name: "ConsolidateID", type: Number },
            { name: "TYPE", type: String },
            { name: "PHASE", type: String },
            { name: "STARTWEEKDATE", type: Date },
            { name: "WEEK", type: Number },
            { name: "APPLICATION1", type: String },
            { name: "c_DATE", type: Date },
            { name: "RESOURCE", type: String },
            { name: "DELIVERABLES", type: String },
            { name: "ACTIVITY", type: String },
            { name: "HOURS", type: Number },
            { name: "RATEPERDAY", type: Number },
            { name: "PHASE_NOTCHANGE", type: String },
            { name: "BILLEDHOURS", type: Number },
            { name: "BILLEDVALUE", type: Number },
            { name: "PMName", type: String },
            { name: "PMEmail", type: String }
        ]),

        REF_APPLICATION_TYPE: $defineEntity(REF_APPLICATION_TYPE, [
            { name: "ApplicationTypeID", type: Number, isReadOnly: true },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedBy", type: String },
            { name: "CreatedTime", type: Date },
            { name: "ModifiedBy", type: String },
            { name: "ModifiedDate", type: Date },
            { name: "TPs", kind: "collection", elementType: TP }
        ]),

        REF_COMPLEXITY: $defineEntity(REF_COMPLEXITY, [
            { name: "ComplexityID", type: Number, isReadOnly: true },
            { name: "Name", type: String },
            { name: "CreatedBy", type: String },
            { name: "CreatedDate", type: Date },
            { name: "ModifiedBy", type: String },
            { name: "ModifiedDate", type: Date },
            { name: "TPs", kind: "collection", elementType: TP },
            { name: "TPs1", kind: "collection", elementType: TP }
        ]),

        REF_DOCUMENT_TYPE: $defineEntity(REF_DOCUMENT_TYPE, [
            { name: "DocumentTypeID", type: Number, isReadOnly: true },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedDate", type: Date },
            { name: "CreatedBy", type: String },
            { name: "ModifiedBy", type: String },
            { name: "ModifiedDate", type: Date },
            { name: "TP_DOCUMENT_LINKs", kind: "collection", elementType: TP_DOCUMENT_LINK }
        ]),

        REF_GAP: $defineEntity(REF_GAP, [
            { name: "GapID", type: Number, isReadOnly: true },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedBy", type: String },
            { name: "CreatedDate", type: Date },
            { name: "ModifiedBy", type: String },
            { name: "ModifiedDate", type: Date },
            { name: "TPs", kind: "collection", elementType: TP },
            { name: "TPs1", kind: "collection", elementType: TP }
        ]),

        REF_LOCATION: $defineEntity(REF_LOCATION, [
            { name: "LocationId", type: Number, isReadOnly: true },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreateDate", type: Date },
            { name: "CreatedBy", type: String },
            { name: "ModifiedBy", type: String },
            { name: "ModifiedDate", type: Date },
            { name: "REF_RATE_CARDs", kind: "collection", elementType: REF_RATE_CARD }
        ]),

        REF_PHASE: $defineEntity(REF_PHASE, [
            { name: "PhaseID", type: Number, isReadOnly: true },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedDate", type: Date },
            { name: "CreatedBy", type: String },
            { name: "TP_PHASEs", kind: "collection", elementType: TP_PHASE }
        ]),

        REF_RATE_CARD: $defineEntity(REF_RATE_CARD, [
            { name: "RateCardId", type: Number, isReadOnly: true },
            { name: "Rate", type: String },
            { name: "CreatedBy", type: String },
            { name: "CreatedDate", type: Date },
            { name: "ModifiedBy", type: String },
            { name: "ModifiedDate", type: Date },
            { name: "REF_LOCATION", kind: "reference", type: REF_LOCATION },
            { name: "RESOURCE", kind: "reference", type: RESOURCE }
        ]),

        REF_ROLE: $defineEntity(REF_ROLE, [
            { name: "RoleID", type: Number, isReadOnly: true },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedDate", type: Date },
            { name: "CreatedBy", type: String },
            { name: "ModifiedBy", type: String },
            { name: "ModifiedDate", type: Date },
            { name: "TP_RESOURCE_ALLOCATIONs", kind: "collection", elementType: TP_RESOURCE_ALLOCATION }
        ]),

        REF_STAKEHOLDER: $defineEntity(REF_STAKEHOLDER, [
            { name: "StakeholderID", type: Number, isReadOnly: true },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedBy", type: String },
            { name: "CreatedDate", type: Date },
            { name: "ModifiedBy", type: String },
            { name: "ModifiedDate", type: Date },
            { name: "TP_STAKEHOLDERs", kind: "collection", elementType: TP_STAKEHOLDER }
        ]),

        REF_STATUS: $defineEntity(REF_STATUS, [
            { name: "StatusID", type: Number, isReadOnly: true },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedDate", type: Date },
            { name: "CreatedBy", type: String },
            { name: "ModifiedDate", type: Date },
            { name: "ModifiedBy", type: String },
            { name: "RESOURCEs", kind: "collection", elementType: RESOURCE }
        ]),

        REF_TECHNOLOGY: $defineEntity(REF_TECHNOLOGY, [
            { name: "TechnologyID", type: Number, isReadOnly: true },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedDate", type: Date },
            { name: "CreatedBy", type: String },
            { name: "ModifiedBy", type: String },
            { name: "ModifiedDate", type: Date },
            { name: "APPLICATIONs", kind: "collection", elementType: APPLICATION1 }
        ]),

        REF_TECHNOLOGY_STACK: $defineEntity(REF_TECHNOLOGY_STACK, [
            { name: "TechnologyStackID", type: Number, isReadOnly: true },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedDate", type: Date },
            { name: "CreatedBy", type: String },
            { name: "ModifiedBy", type: String },
            { name: "ModifiedDate", type: Date },
            { name: "TPs", kind: "collection", elementType: TP }
        ]),

        REF_VENDOR: $defineEntity(REF_VENDOR, [
            { name: "VendorID", type: Number, isReadOnly: true },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "IsEsu", type: Boolean },
            { name: "CreatedBy", type: String },
            { name: "CreatedDate", type: Date },
            { name: "ModifiedBy", type: String },
            { name: "ModifiedDate", type: Date },
            { name: "TP_VENDORs", kind: "collection", elementType: TP_VENDOR }
        ]),

        RESOURCE: $defineEntity(RESOURCE, [
            { name: "ResourceID", type: Number, isReadOnly: true },
            { name: "Name", type: String },
            { name: "EmailId", type: String },
            { name: "CreatedBy", type: String },
            { name: "CreatedDate", type: Date },
            { name: "ModifiedDate", type: Date },
            { name: "ModifiedBy", type: String },
            { name: "REF_RATE_CARDs", kind: "collection", elementType: REF_RATE_CARD },
            { name: "REF_STATUS", kind: "reference", type: REF_STATUS },
            { name: "TP_RESOURCE_ALLOCATIONs", kind: "collection", elementType: TP_RESOURCE_ALLOCATION },
            { name: "TP_TIME_ENTRies", kind: "collection", elementType: TP_TIME_ENTRY },
            { name: "TPs", kind: "collection", elementType: TP }
        ]),

        TP_APPLICATION: $defineEntity(TP_APPLICATION, [
            { name: "TpApplicationID", type: Number, isReadOnly: true },
            { name: "CreatedBy", type: String },
            { name: "CreatedDate", type: Date },
            { name: "ModifiedBy", type: String },
            { name: "ModifiedDate", type: Date },
            { name: "APPLICATION1", kind: "reference", type: APPLICATION1 },
            { name: "TP", kind: "reference", type: TP }
        ]),

        TP_DOCUMENT_LINK: $defineEntity(TP_DOCUMENT_LINK, [
            { name: "TpDocumentLinkID", type: Number },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "CreatedBy", type: String },
            { name: "CreatedDate", type: Date },
            { name: "Link", type: String },
            { name: "ModifiedBy", type: String },
            { name: "ModifiedDate", type: Date },
            { name: "REF_DOCUMENT_TYPE", kind: "reference", type: REF_DOCUMENT_TYPE },
            { name: "TP", kind: "reference", type: TP }
        ]),

        TP_PHASE: $defineEntity(TP_PHASE, [
            { name: "TpPhaseID", type: Number, isReadOnly: true },
            { name: "PlannedStartDate", type: Date },
            { name: "PlannedEndDate", type: Date },
            { name: "ActualStartDate", type: Date },
            { name: "ActualEndDate", type: Date },
            { name: "Duration", type: String },
            { name: "CreatedDate", type: Date },
            { name: "CreatedBy", type: String },
            { name: "ModifiedBy", type: String },
            { name: "ModifiedDate", type: Date },
            { name: "TP", kind: "reference", type: TP },
            { name: "REF_PHASE", kind: "reference", type: REF_PHASE }
        ]),

        TP_RESOURCE_ALLOCATION: $defineEntity(TP_RESOURCE_ALLOCATION, [
            { name: "TpResourceAllocationId", type: Number, isReadOnly: true },
            { name: "LocationId", type: Number },
            { name: "Percentage", type: Number },
            { name: "PlannedStartDate", type: Date },
            { name: "PlannedEndDate", type: Date },
            { name: "ActualStartDate", type: Date },
            { name: "ActualEndDate", type: Date },
            { name: "ActualBuildStartDate", type: Date },
            { name: "ActualBuildEndDate", type: Date },
            { name: "PlannedBuildStartDate", type: Date },
            { name: "PlannedBuildEndDate", type: Date },
            { name: "ActualTestStartDate", type: Date },
            { name: "ActualTestEndDate", type: Date },
            { name: "PlannedTestStartDate", type: Date },
            { name: "PlannedTestEndDate", type: Date },
            { name: "ActualImplementationStartDate", type: Date },
            { name: "ActualImplementationEndDate", type: Date },
            { name: "PlannedImplementationStartDate", type: Date },
            { name: "PlannedImplementationEndDate", type: Date },
            { name: "PlannedPostImplementationStartDate", type: Date },
            { name: "PlannedPostImplementationEndDate", type: Date },
            { name: "ActualPostImplementationStartDate", type: Date },
            { name: "ActualPostImplementationEndDate", type: Date },
            { name: "AllocationBuild", type: Number },
            { name: "AllocationTest", type: Number },
            { name: "AllocationImplementation", type: Number },
            { name: "AllocationPostImplementation", type: Number },
            { name: "CreatedBy", type: String },
            { name: "CreatedDate", type: Date },
            { name: "ModifiedDate", type: Date },
            { name: "ModifiedBy", type: String },
            { name: "REF_ROLE", kind: "reference", type: REF_ROLE },
            { name: "RESOURCE", kind: "reference", type: RESOURCE },
            { name: "TP", kind: "reference", type: TP },
            { name: "TP_TIME_ENTRies", kind: "collection", elementType: TP_TIME_ENTRY }
        ]),

        TP_STAKEHOLDER: $defineEntity(TP_STAKEHOLDER, [
            { name: "TpStakeholderID", type: Number, isReadOnly: true },
            { name: "CreatedBy", type: String },
            { name: "CreatedDate", type: Date },
            { name: "ModifiedBy", type: String },
            { name: "ModifiedDate", type: Date },
            { name: "REF_STAKEHOLDER", kind: "reference", type: REF_STAKEHOLDER },
            { name: "TP", kind: "reference", type: TP }
        ]),

        TP_TIME_ENTRY: $defineEntity(TP_TIME_ENTRY, [
            { name: "TpTimeEntryId", type: Number, isReadOnly: true },
            { name: "ResourceId", type: Number },
            { name: "c_Date", type: Date },
            { name: "PlannedEffort", type: Number },
            { name: "ActualEffort", type: Number },
            { name: "Phase", type: String },
            { name: "TP_RESOURCE_ALLOCATION", kind: "reference", type: TP_RESOURCE_ALLOCATION },
            { name: "RESOURCE", kind: "reference", type: RESOURCE }
        ]),

        TP_VENDOR: $defineEntity(TP_VENDOR, [
            { name: "TpVendorID", type: Number, isReadOnly: true },
            { name: "CreatedBy", type: String },
            { name: "CreatedDate", type: Date },
            { name: "ModifiedBy", type: String },
            { name: "ModifiedDate", type: Date },
            { name: "REF_VENDOR", kind: "reference", type: REF_VENDOR },
            { name: "TP", kind: "reference", type: TP }
        ]),

        TP: $defineEntity(TP, [
            { name: "TpID", type: Number, isReadOnly: true },
            { name: "Number", type: Number },
            { name: "Name", type: String },
            { name: "Description", type: String },
            { name: "WorkOrderNumber", type: String },
            { name: "WorkOrderStatus", type: Number },
            { name: "WorkOrderIssuedOn", type: Date },
            { name: "PlannedEffort", type: String },
            { name: "EstimatedCost", type: String },
            { name: "IssueDateToHP", type: Date },
            { name: "EffortDateProvidedByHP", type: Date },
            { name: "ApprovedDateByDL", type: Date },
            { name: "PlannedStartDate", type: Date },
            { name: "PlannedEndDate", type: Date },
            { name: "ActualStartDate", type: Date },
            { name: "ActualEndDate", type: Date },
            { name: "ApplicationSize", type: String },
            { name: "HasInputDocument", type: Boolean },
            { name: "HasFeasibilityStudy", type: Boolean },
            { name: "HasUnderstandingDocument", type: Boolean },
            { name: "HasEstimation", type: Boolean },
            { name: "CreatedDate", type: Date },
            { name: "CreatedBy", type: String },
            { name: "ModifiedDate", type: Date },
            { name: "ModifiedBy", type: String },
            { name: "TP_APPLICATIONs", kind: "collection", elementType: TP_APPLICATION },
            { name: "TP_DOCUMENT_LINKs", kind: "collection", elementType: TP_DOCUMENT_LINK },
            { name: "TP_PHASEs", kind: "collection", elementType: TP_PHASE },
            { name: "REF_APPLICATION_TYPE", kind: "reference", type: REF_APPLICATION_TYPE },
            { name: "REF_COMPLEXITY", kind: "reference", type: REF_COMPLEXITY },
            { name: "REF_COMPLEXITY1", kind: "reference", type: REF_COMPLEXITY },
            { name: "REF_GAP", kind: "reference", type: REF_GAP },
            { name: "REF_GAP1", kind: "reference", type: REF_GAP },
            { name: "REF_TECHNOLOGY_STACK", kind: "reference", type: REF_TECHNOLOGY_STACK },
            { name: "TP_RESOURCE_ALLOCATIONs", kind: "collection", elementType: TP_RESOURCE_ALLOCATION },
            { name: "TP_STAKEHOLDERs", kind: "collection", elementType: TP_STAKEHOLDER },
            { name: "TP_VENDORs", kind: "collection", elementType: TP_VENDOR },
            { name: "RESOURCE", kind: "reference", type: RESOURCE },
            { name: "PMName", type: String },
            { name: "PMEmail", type: String },
            { name: "TPStatus", type: String }
        ]),

        UpdateTimeEntry: $defineEntity(UpdateTimeEntry, [
            { name: "Id", type: Number },
            { name: "TPRESOURCEALLOCATIONID", type: Number },
            { name: "ResourceID", type: Number },
            { name: "PlannedBuildStartDate", type: Date },
            { name: "PlannedBuildEndDate", type: Date },
            { name: "ActualBuildStartDate", type: Date },
            { name: "ActualBuildEndDate", type: Date },
            { name: "PlannedTestStartDate", type: Date },
            { name: "PlannedTestEndDate", type: Date },
            { name: "ActualTestStartDate", type: Date },
            { name: "ActualTestEndDate", type: Date },
            { name: "PlannedImplementationStartDate", type: Date },
            { name: "PlannedImplementationEndDate", type: Date },
            { name: "ActualImplementationStartDate", type: Date },
            { name: "ActualImplementationEndDate", type: Date },
            { name: "PlannedPostImplementationStartDate", type: Date },
            { name: "PlannedPostImplementationEndDate", type: Date },
            { name: "ActualPostImplementationStartDate", type: Date },
            { name: "ActualPostImplementationEndDate", type: Date },
            { name: "AllocationBuild", type: Number },
            { name: "AllocationTest", type: Number },
            { name: "AllocationImplementation", type: Number },
            { name: "AllocationPostImplementation", type: Number },
            { name: "IsInsert", type: Number },
            { name: "CreatedBy", type: String, isReadOnly: true },
            { name: "Created", type: Date, isReadOnly: true },
            { name: "ModifiedBy", type: String, isReadOnly: true },
            { name: "Modified", type: Date, isReadOnly: true },
            { name: "RowVersion", type: Array }
        ]),

        TestDBData: $defineDataService(TestDBData, lightSwitchApplication.rootUri + "/TestDBData.svc", [
            { name: "APPLICATIONs", elementType: APPLICATION1 },
            { name: "ConsolidatedTimeSheets", elementType: ConsolidatedTimeSheet },
            { name: "GenerateResourceReports", elementType: GenerateResourceReport },
            { name: "PMApprovalReports", elementType: PMApprovalReport },
            { name: "REF_APPLICATION_TYPEs", elementType: REF_APPLICATION_TYPE },
            { name: "REF_COMPLEXITies", elementType: REF_COMPLEXITY },
            { name: "REF_DOCUMENT_TYPEs", elementType: REF_DOCUMENT_TYPE },
            { name: "REF_GAPs", elementType: REF_GAP },
            { name: "REF_LOCATIONs", elementType: REF_LOCATION },
            { name: "REF_PHASEs", elementType: REF_PHASE },
            { name: "REF_RATE_CARDs", elementType: REF_RATE_CARD },
            { name: "REF_ROLEs", elementType: REF_ROLE },
            { name: "REF_STAKEHOLDERs", elementType: REF_STAKEHOLDER },
            { name: "REF_STATUS", elementType: REF_STATUS },
            { name: "REF_TECHNOLOGies", elementType: REF_TECHNOLOGY },
            { name: "REF_TECHNOLOGY_STACKs", elementType: REF_TECHNOLOGY_STACK },
            { name: "REF_VENDORs", elementType: REF_VENDOR },
            { name: "RESOURCEs", elementType: RESOURCE },
            { name: "TP_APPLICATIONs", elementType: TP_APPLICATION },
            { name: "TP_DOCUMENT_LINKs", elementType: TP_DOCUMENT_LINK },
            { name: "TP_PHASEs", elementType: TP_PHASE },
            { name: "TP_RESOURCE_ALLOCATIONs", elementType: TP_RESOURCE_ALLOCATION },
            { name: "TP_STAKEHOLDERs", elementType: TP_STAKEHOLDER },
            { name: "TP_TIME_ENTRies", elementType: TP_TIME_ENTRY },
            { name: "TP_VENDORs", elementType: TP_VENDOR },
            { name: "TPs", elementType: TP }
        ], [
            {
                name: "APPLICATIONs_SingleOrDefault", value: function (ApplicationID) {
                    return new $DataServiceQuery({ _entitySet: this.APPLICATIONs },
                        lightSwitchApplication.rootUri + "/TestDBData.svc" + "/APPLICATIONs(" + "ApplicationID=" + $toODataString(ApplicationID, "Int16?") + ")"
                    );
                }
            },
            {
                name: "ConsolidatedTimeSheets_SingleOrDefault", value: function (ConsolidateID) {
                    return new $DataServiceQuery({ _entitySet: this.ConsolidatedTimeSheets },
                        lightSwitchApplication.rootUri + "/TestDBData.svc" + "/ConsolidatedTimeSheets(" + "ConsolidateID=" + $toODataString(ConsolidateID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "GenerateResourceReports_SingleOrDefault", value: function (TpResourceAllocationId) {
                    return new $DataServiceQuery({ _entitySet: this.GenerateResourceReports },
                        lightSwitchApplication.rootUri + "/TestDBData.svc" + "/GenerateResourceReports(" + "TpResourceAllocationId=" + $toODataString(TpResourceAllocationId, "Int32?") + ")"
                    );
                }
            },
            {
                name: "TPFilterReport", value: function (TP) {
                    return new $DataServiceQuery({ _entitySet: this.GenerateResourceReports },
                        lightSwitchApplication.rootUri + "/TestDBData.svc" + "/TPFilterReport()",
                        {
                            TP: $toODataString(TP, "String?")
                        });
                }
            },
            {
                name: "PMApprovalReports_SingleOrDefault", value: function (ConsolidateID) {
                    return new $DataServiceQuery({ _entitySet: this.PMApprovalReports },
                        lightSwitchApplication.rootUri + "/TestDBData.svc" + "/PMApprovalReports(" + "ConsolidateID=" + $toODataString(ConsolidateID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "Filter_PMApprovalReport", value: function (PMName) {
                    return new $DataServiceQuery({ _entitySet: this.PMApprovalReports },
                        lightSwitchApplication.rootUri + "/TestDBData.svc" + "/Filter_PMApprovalReport()",
                        {
                            PMName: $toODataString(PMName, "String?")
                        });
                }
            },
            {
                name: "REF_APPLICATION_TYPEs_SingleOrDefault", value: function (ApplicationTypeID) {
                    return new $DataServiceQuery({ _entitySet: this.REF_APPLICATION_TYPEs },
                        lightSwitchApplication.rootUri + "/TestDBData.svc" + "/REF_APPLICATION_TYPEs(" + "ApplicationTypeID=" + $toODataString(ApplicationTypeID, "Int16?") + ")"
                    );
                }
            },
            {
                name: "REF_COMPLEXITies_SingleOrDefault", value: function (ComplexityID) {
                    return new $DataServiceQuery({ _entitySet: this.REF_COMPLEXITies },
                        lightSwitchApplication.rootUri + "/TestDBData.svc" + "/REF_COMPLEXITies(" + "ComplexityID=" + $toODataString(ComplexityID, "Int16?") + ")"
                    );
                }
            },
            {
                name: "REF_DOCUMENT_TYPEs_SingleOrDefault", value: function (DocumentTypeID) {
                    return new $DataServiceQuery({ _entitySet: this.REF_DOCUMENT_TYPEs },
                        lightSwitchApplication.rootUri + "/TestDBData.svc" + "/REF_DOCUMENT_TYPEs(" + "DocumentTypeID=" + $toODataString(DocumentTypeID, "Int16?") + ")"
                    );
                }
            },
            {
                name: "REF_GAPs_SingleOrDefault", value: function (GapID) {
                    return new $DataServiceQuery({ _entitySet: this.REF_GAPs },
                        lightSwitchApplication.rootUri + "/TestDBData.svc" + "/REF_GAPs(" + "GapID=" + $toODataString(GapID, "Int16?") + ")"
                    );
                }
            },
            {
                name: "REF_LOCATIONs_SingleOrDefault", value: function (LocationId) {
                    return new $DataServiceQuery({ _entitySet: this.REF_LOCATIONs },
                        lightSwitchApplication.rootUri + "/TestDBData.svc" + "/REF_LOCATIONs(" + "LocationId=" + $toODataString(LocationId, "Int16?") + ")"
                    );
                }
            },
            {
                name: "REF_PHASEs_SingleOrDefault", value: function (PhaseID) {
                    return new $DataServiceQuery({ _entitySet: this.REF_PHASEs },
                        lightSwitchApplication.rootUri + "/TestDBData.svc" + "/REF_PHASEs(" + "PhaseID=" + $toODataString(PhaseID, "Int16?") + ")"
                    );
                }
            },
            {
                name: "REF_RATE_CARDs_SingleOrDefault", value: function (RateCardId) {
                    return new $DataServiceQuery({ _entitySet: this.REF_RATE_CARDs },
                        lightSwitchApplication.rootUri + "/TestDBData.svc" + "/REF_RATE_CARDs(" + "RateCardId=" + $toODataString(RateCardId, "Int16?") + ")"
                    );
                }
            },
            {
                name: "REF_ROLEs_SingleOrDefault", value: function (RoleID) {
                    return new $DataServiceQuery({ _entitySet: this.REF_ROLEs },
                        lightSwitchApplication.rootUri + "/TestDBData.svc" + "/REF_ROLEs(" + "RoleID=" + $toODataString(RoleID, "Int16?") + ")"
                    );
                }
            },
            {
                name: "REF_STAKEHOLDERs_SingleOrDefault", value: function (StakeholderID) {
                    return new $DataServiceQuery({ _entitySet: this.REF_STAKEHOLDERs },
                        lightSwitchApplication.rootUri + "/TestDBData.svc" + "/REF_STAKEHOLDERs(" + "StakeholderID=" + $toODataString(StakeholderID, "Int16?") + ")"
                    );
                }
            },
            {
                name: "REF_STATUS_SingleOrDefault", value: function (StatusID) {
                    return new $DataServiceQuery({ _entitySet: this.REF_STATUS },
                        lightSwitchApplication.rootUri + "/TestDBData.svc" + "/REF_STATUS(" + "StatusID=" + $toODataString(StatusID, "Int16?") + ")"
                    );
                }
            },
            {
                name: "REF_TECHNOLOGies_SingleOrDefault", value: function (TechnologyID) {
                    return new $DataServiceQuery({ _entitySet: this.REF_TECHNOLOGies },
                        lightSwitchApplication.rootUri + "/TestDBData.svc" + "/REF_TECHNOLOGies(" + "TechnologyID=" + $toODataString(TechnologyID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "REF_TECHNOLOGY_STACKs_SingleOrDefault", value: function (TechnologyStackID) {
                    return new $DataServiceQuery({ _entitySet: this.REF_TECHNOLOGY_STACKs },
                        lightSwitchApplication.rootUri + "/TestDBData.svc" + "/REF_TECHNOLOGY_STACKs(" + "TechnologyStackID=" + $toODataString(TechnologyStackID, "Int16?") + ")"
                    );
                }
            },
            {
                name: "REF_VENDORs_SingleOrDefault", value: function (VendorID) {
                    return new $DataServiceQuery({ _entitySet: this.REF_VENDORs },
                        lightSwitchApplication.rootUri + "/TestDBData.svc" + "/REF_VENDORs(" + "VendorID=" + $toODataString(VendorID, "Int16?") + ")"
                    );
                }
            },
            {
                name: "RESOURCEs_SingleOrDefault", value: function (ResourceID) {
                    return new $DataServiceQuery({ _entitySet: this.RESOURCEs },
                        lightSwitchApplication.rootUri + "/TestDBData.svc" + "/RESOURCEs(" + "ResourceID=" + $toODataString(ResourceID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "TP_APPLICATIONs_SingleOrDefault", value: function (TpApplicationID) {
                    return new $DataServiceQuery({ _entitySet: this.TP_APPLICATIONs },
                        lightSwitchApplication.rootUri + "/TestDBData.svc" + "/TP_APPLICATIONs(" + "TpApplicationID=" + $toODataString(TpApplicationID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "TP_DOCUMENT_LINKs_SingleOrDefault", value: function (TpDocumentLinkID) {
                    return new $DataServiceQuery({ _entitySet: this.TP_DOCUMENT_LINKs },
                        lightSwitchApplication.rootUri + "/TestDBData.svc" + "/TP_DOCUMENT_LINKs(" + "TpDocumentLinkID=" + $toODataString(TpDocumentLinkID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "TP_PHASEs_SingleOrDefault", value: function (TpPhaseID) {
                    return new $DataServiceQuery({ _entitySet: this.TP_PHASEs },
                        lightSwitchApplication.rootUri + "/TestDBData.svc" + "/TP_PHASEs(" + "TpPhaseID=" + $toODataString(TpPhaseID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "TP_RESOURCE_ALLOCATIONs_SingleOrDefault", value: function (TpResourceAllocationId) {
                    return new $DataServiceQuery({ _entitySet: this.TP_RESOURCE_ALLOCATIONs },
                        lightSwitchApplication.rootUri + "/TestDBData.svc" + "/TP_RESOURCE_ALLOCATIONs(" + "TpResourceAllocationId=" + $toODataString(TpResourceAllocationId, "Int32?") + ")"
                    );
                }
            },
            {
                name: "TP_STAKEHOLDERs_SingleOrDefault", value: function (TpStakeholderID) {
                    return new $DataServiceQuery({ _entitySet: this.TP_STAKEHOLDERs },
                        lightSwitchApplication.rootUri + "/TestDBData.svc" + "/TP_STAKEHOLDERs(" + "TpStakeholderID=" + $toODataString(TpStakeholderID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "TP_TIME_ENTRies_SingleOrDefault", value: function (TpTimeEntryId) {
                    return new $DataServiceQuery({ _entitySet: this.TP_TIME_ENTRies },
                        lightSwitchApplication.rootUri + "/TestDBData.svc" + "/TP_TIME_ENTRies(" + "TpTimeEntryId=" + $toODataString(TpTimeEntryId, "Int32?") + ")"
                    );
                }
            },
            {
                name: "ResourceNameFilter", value: function (ResourceName) {
                    return new $DataServiceQuery({ _entitySet: this.TP_TIME_ENTRies },
                        lightSwitchApplication.rootUri + "/TestDBData.svc" + "/ResourceNameFilter()",
                        {
                            ResourceName: $toODataString(ResourceName, "String?")
                        });
                }
            },
            {
                name: "TP_VENDORs_SingleOrDefault", value: function (TpVendorID) {
                    return new $DataServiceQuery({ _entitySet: this.TP_VENDORs },
                        lightSwitchApplication.rootUri + "/TestDBData.svc" + "/TP_VENDORs(" + "TpVendorID=" + $toODataString(TpVendorID, "Int32?") + ")"
                    );
                }
            },
            {
                name: "TPs_SingleOrDefault", value: function (TpID) {
                    return new $DataServiceQuery({ _entitySet: this.TPs },
                        lightSwitchApplication.rootUri + "/TestDBData.svc" + "/TPs(" + "TpID=" + $toODataString(TpID, "Int32?") + ")"
                    );
                }
            }
        ]),

        ApplicationData: $defineDataService(ApplicationData, lightSwitchApplication.rootUri + "/ApplicationData.svc", [
            { name: "UpdateTimeEntries", elementType: UpdateTimeEntry }
        ], [
            {
                name: "UpdateTimeEntries_SingleOrDefault", value: function (Id) {
                    return new $DataServiceQuery({ _entitySet: this.UpdateTimeEntries },
                        lightSwitchApplication.rootUri + "/ApplicationData.svc" + "/UpdateTimeEntries(" + "Id=" + $toODataString(Id, "Int32?") + ")"
                    );
                }
            }
        ]),

        DataWorkspace: $defineDataWorkspace(DataWorkspace, [
            { name: "TestDBData", type: TestDBData },
            { name: "ApplicationData", type: ApplicationData }
        ])

    });

}(msls.application));
