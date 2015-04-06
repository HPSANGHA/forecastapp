using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.LightSwitch;
using Microsoft.LightSwitch.Security.Server;
using System.Data.SqlClient;
using System.Configuration;
using System.Data;
using ExcelImporter;
namespace LightSwitchApplication
{
    public partial class ApplicationDataService
    {
        partial void UpdateTimeEntries_Inserting(UpdateTimeEntry entity)
        {
            using (SqlConnection connection = new SqlConnection())
            {
                string connectionStringName = this.DataWorkspace.TestDBData.Details.Name;
                connection.ConnectionString = ConfigurationManager.ConnectionStrings[connectionStringName].ConnectionString;
                string procedure = "[dbo].[uspUpdateTimeEntry]";
                using (SqlCommand command = new SqlCommand(procedure, connection))
                {
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.Add(new SqlParameter("@TPRESOURCEALLOCATIONID", entity.TPRESOURCEALLOCATIONID));
                    command.Parameters.Add(new SqlParameter("@ResourceID", entity.ResourceID));
                    command.Parameters.Add(new SqlParameter("@PlannedBuildStartDate", entity.PlannedBuildStartDate));
                    command.Parameters.Add(new SqlParameter("@PlannedBuildEndDate", entity.PlannedBuildEndDate));
                    command.Parameters.Add(new SqlParameter("@ActualBuildStartDate", entity.ActualBuildStartDate));
                    command.Parameters.Add(new SqlParameter("@ActualBuildEndDate", entity.ActualBuildEndDate));
                    command.Parameters.Add(new SqlParameter("@PlannedTestStartDate", entity.PlannedTestStartDate));
                    command.Parameters.Add(new SqlParameter("@PlannedTestEndDate", entity.PlannedTestEndDate));
                    command.Parameters.Add(new SqlParameter("@ActualTestStartDate", entity.ActualTestStartDate));
                    command.Parameters.Add(new SqlParameter("@ActualTestEndDate", entity.ActualTestEndDate));
                    command.Parameters.Add(new SqlParameter("@PlannedImplementationStartDate", entity.PlannedImplementationStartDate));
                    command.Parameters.Add(new SqlParameter("@PlannedImplementationEndDate", entity.PlannedImplementationEndDate));
                    command.Parameters.Add(new SqlParameter("@ActualImplementationStartDate", entity.ActualImplementationStartDate));
                    command.Parameters.Add(new SqlParameter("@ActualImplementationEndDate", entity.ActualImplementationEndDate));
                    command.Parameters.Add(new SqlParameter("@PlannedPostImplementationStartDate", entity.PlannedPostImplementationStartDate));
                    command.Parameters.Add(new SqlParameter("@PlannedPostImplementationEndDate", entity.PlannedPostImplementationEndDate));
                    command.Parameters.Add(new SqlParameter("@ActualPostImplementationStartDate", entity.ActualPostImplementationStartDate));
                    command.Parameters.Add(new SqlParameter("@ActualPostImplementationEndDate", entity.ActualPostImplementationEndDate));
                    command.Parameters.Add(new SqlParameter("@AllocationBuild", entity.AllocationBuild));
                    command.Parameters.Add(new SqlParameter("@AllocationTest", entity.AllocationTest));
                    command.Parameters.Add(new SqlParameter("@AllocationImplementation", entity.AllocationImplementation));
                    command.Parameters.Add(new SqlParameter("@AllocationPostImplementation", entity.AllocationPostImplementation));
                    command.Parameters.Add(new SqlParameter("@IsInsert", entity.IsInsert));


                    connection.Open();
                    command.CommandTimeout = 120;
                    command.ExecuteNonQuery();
                }
            }
        }

        partial void UpdateTimeEntries_CanInsert(ref bool result)
        {
            result = this.Application.User.HasPermission(Permissions.UpdateTimeEntries);
        }

    }
}
