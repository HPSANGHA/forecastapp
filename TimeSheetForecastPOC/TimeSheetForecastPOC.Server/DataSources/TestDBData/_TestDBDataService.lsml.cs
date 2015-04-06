using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
using System.Data.OleDb;
using System.Data.Common;
using System.Data.SqlClient;
using System.Threading;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using System.IO;
namespace LightSwitchApplication
{
    public partial class TestDBDataService
    {

        private const string CreatedBy = "CreatedBy";
        private const string ModifiedBy = "ModifiedBy";
        private const string CreatedDate = "CreatedDate";
        private const string ModifiedDate = "ModifiedDate";

        public int GetNumberOfWorkingDays(DateTime startDate, DateTime endDate)
        {
            int days = 0;
            try
            {
                while (startDate <= endDate)
                {
                    if (startDate.DayOfWeek != DayOfWeek.Saturday && startDate.DayOfWeek != DayOfWeek.Sunday)
                    {
                        ++days;
                    }
                    startDate = startDate.AddDays(1);
                }
            }
            catch (Exception ex)
            {
            }
            return days;
        }
        public string UserName { get { return this.Application.User.FullName; } }

        partial void SaveChanges_Executing()
        {
            try
            {
                // Update the created By/Created Date and modified By/Modified Date for all the entities
                var changes = this.DataWorkspace.TestDBData.Details.GetChanges().ToList();
                this.DataWorkspace.TestDBData.Details.GetChanges().ToList().ForEach(x =>
                {
                    if (x.Details.Properties.Contains(CreatedBy))
                        x.Details.Properties[CreatedBy].Value = UserName;
                    if (x.Details.Properties.Contains(ModifiedBy))
                        x.Details.Properties[ModifiedBy].Value = UserName;
                    if (x.Details.Properties.Contains(CreatedDate))
                        x.Details.Properties[CreatedDate].Value = DateTime.Today;
                    if (x.Details.Properties.Contains(ModifiedDate))
                        x.Details.Properties[ModifiedDate].Value = DateTime.Today;
                });

                //this.DataWorkspace.TestDBData.

            }
            catch (Exception ex)
            {

            }
        }
        partial void TP_RESOURCE_ALLOCATIONs_Updating(TP_RESOURCE_ALLOCATION resourceAllocEntity)
        {
            try
            {
                UpdateTimeEntry operation = DataWorkspace.ApplicationData.UpdateTimeEntries.AddNew();

                //Build Phase
                operation.PlannedBuildEndDate = resourceAllocEntity.PlannedBuildEndDate;
                operation.PlannedBuildStartDate = resourceAllocEntity.PlannedBuildStartDate;
                operation.ActualBuildEndDate = resourceAllocEntity.ActualBuildEndDate;
                operation.ActualBuildStartDate = resourceAllocEntity.ActualBuildStartDate;

                //Test Phase
                operation.PlannedTestEndDate = resourceAllocEntity.PlannedTestEndDate;
                operation.PlannedTestStartDate = resourceAllocEntity.PlannedTestStartDate;
                operation.ActualTestEndDate = resourceAllocEntity.ActualTestEndDate;
                operation.ActualTestStartDate = resourceAllocEntity.ActualTestStartDate;

                //Implementation Phase
                operation.PlannedImplementationEndDate = resourceAllocEntity.PlannedImplementationEndDate;
                operation.PlannedImplementationStartDate = resourceAllocEntity.PlannedImplementationStartDate;
                operation.ActualImplementationEndDate = resourceAllocEntity.ActualImplementationEndDate;
                operation.ActualImplementationStartDate = resourceAllocEntity.ActualImplementationStartDate;

                //Post Implementation Phase
                operation.ActualPostImplementationEndDate = resourceAllocEntity.ActualPostImplementationEndDate;
                operation.ActualPostImplementationStartDate = resourceAllocEntity.ActualPostImplementationStartDate;
                operation.PlannedPostImplementationEndDate = resourceAllocEntity.PlannedPostImplementationEndDate;
                operation.PlannedPostImplementationStartDate = resourceAllocEntity.PlannedPostImplementationStartDate;

                //Phase wise Allocation
                operation.AllocationBuild = resourceAllocEntity.AllocationBuild;
                operation.AllocationImplementation = resourceAllocEntity.AllocationImplementation;
                operation.AllocationPostImplementation = resourceAllocEntity.AllocationPostImplementation;
                operation.AllocationTest = resourceAllocEntity.AllocationTest;

                //Key Params
                operation.ResourceID = resourceAllocEntity.RESOURCE.ResourceID;
                operation.TPRESOURCEALLOCATIONID = resourceAllocEntity.TpResourceAllocationId;

                //operation.ENDDATE=
                //operation.STARTDATE=
                operation.IsInsert = 0;

                DataWorkspace.ApplicationData.SaveChanges();



            }
            catch (Exception ex)
            {
            }
        }

        partial void TP_RESOURCE_ALLOCATIONs_Inserted(TP_RESOURCE_ALLOCATION entity)
        {
            try
            {
                UpdateTimeEntry operation = DataWorkspace.ApplicationData.UpdateTimeEntries.AddNew();

                //Build Phase
                operation.PlannedBuildEndDate = entity.PlannedBuildEndDate;
                operation.PlannedBuildStartDate = entity.PlannedBuildStartDate;
                operation.ActualBuildEndDate = entity.ActualBuildEndDate;
                operation.ActualBuildStartDate = entity.ActualBuildStartDate;

                //Test Phase
                operation.PlannedTestEndDate = entity.PlannedTestEndDate;
                operation.PlannedTestStartDate = entity.PlannedTestStartDate;
                operation.ActualTestEndDate = entity.ActualTestEndDate;
                operation.ActualTestStartDate = entity.ActualTestStartDate;

                //Implementation Phase
                operation.PlannedImplementationEndDate = entity.PlannedImplementationEndDate;
                operation.PlannedImplementationStartDate = entity.PlannedImplementationStartDate;
                operation.ActualImplementationEndDate = entity.ActualImplementationEndDate;
                operation.ActualImplementationStartDate = entity.ActualImplementationStartDate;

                //Post Implementation Phase
                operation.ActualPostImplementationEndDate = entity.ActualPostImplementationEndDate;
                operation.ActualPostImplementationStartDate = entity.ActualPostImplementationStartDate;
                operation.PlannedPostImplementationEndDate = entity.PlannedPostImplementationEndDate;
                operation.PlannedPostImplementationStartDate = entity.PlannedPostImplementationStartDate;

                //Phase wise Allocation
                operation.AllocationBuild = entity.AllocationBuild;
                operation.AllocationImplementation = entity.AllocationImplementation;
                operation.AllocationPostImplementation = entity.AllocationPostImplementation;
                operation.AllocationTest = entity.AllocationTest;

                //Key Params
                operation.ResourceID = entity.RESOURCE.ResourceID;
                operation.TPRESOURCEALLOCATIONID = entity.TpResourceAllocationId;

                //operation.ENDDATE=
                //operation.STARTDATE=
                operation.IsInsert = 0;

                DataWorkspace.ApplicationData.SaveChanges();

            }
            catch (Exception ex)
            {

            }
        }

    }

}
