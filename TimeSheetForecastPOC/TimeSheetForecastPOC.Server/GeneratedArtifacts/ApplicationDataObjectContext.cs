﻿//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.ComponentModel;
using System.Data.EntityClient;
using System.Data.Objects;
using System.Data.Objects.DataClasses;
using System.Linq;
using System.Runtime.Serialization;
using System.Xml.Serialization;

[assembly: EdmSchemaAttribute()]
namespace LightSwitchApplication.Implementation
{
    #region Contexts
    
    /// <summary>
    /// No Metadata Documentation available.
    /// </summary>
    public partial class ApplicationData : ObjectContext
    {
        #region Constructors
    
        /// <summary>
        /// Initializes a new ApplicationData object using the connection string found in the 'ApplicationData' section of the application configuration file.
        /// </summary>
        public ApplicationData() : base("name=ApplicationData", "ApplicationData")
        {
            OnContextCreated();
        }
    
        /// <summary>
        /// Initialize a new ApplicationData object.
        /// </summary>
        public ApplicationData(string connectionString) : base(connectionString, "ApplicationData")
        {
            OnContextCreated();
        }
    
        /// <summary>
        /// Initialize a new ApplicationData object.
        /// </summary>
        public ApplicationData(EntityConnection connection) : base(connection, "ApplicationData")
        {
            OnContextCreated();
        }
    
        #endregion
    
        #region Partial Methods
    
        partial void OnContextCreated();
    
        #endregion
    
        #region ObjectSet Properties
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        public ObjectSet<UpdateTimeEntry> UpdateTimeEntries
        {
            get
            {
                if ((_UpdateTimeEntries == null))
                {
                    _UpdateTimeEntries = base.CreateObjectSet<UpdateTimeEntry>("UpdateTimeEntries");
                }
                return _UpdateTimeEntries;
            }
        }
        private ObjectSet<UpdateTimeEntry> _UpdateTimeEntries;

        #endregion

        #region AddTo Methods
    
        /// <summary>
        /// Deprecated Method for adding a new object to the UpdateTimeEntries EntitySet. Consider using the .Add method of the associated ObjectSet&lt;T&gt; property instead.
        /// </summary>
        public void AddToUpdateTimeEntries(UpdateTimeEntry updateTimeEntry)
        {
            base.AddObject("UpdateTimeEntries", updateTimeEntry);
        }

        #endregion

    }

    #endregion

    #region Entities
    
    /// <summary>
    /// No Metadata Documentation available.
    /// </summary>
    [EdmEntityTypeAttribute(NamespaceName="LightSwitchApplication", Name="UpdateTimeEntry")]
    [Serializable()]
    [DataContractAttribute(IsReference=true)]
    public partial class UpdateTimeEntry : EntityObject
    {
        #region Factory Method
    
        /// <summary>
        /// Create a new UpdateTimeEntry object.
        /// </summary>
        /// <param name="id">Initial value of the Id property.</param>
        /// <param name="tPRESOURCEALLOCATIONID">Initial value of the TPRESOURCEALLOCATIONID property.</param>
        /// <param name="rowVersion">Initial value of the RowVersion property.</param>
        public static UpdateTimeEntry CreateUpdateTimeEntry(global::System.Int32 id, global::System.Int32 tPRESOURCEALLOCATIONID, global::System.Byte[] rowVersion)
        {
            UpdateTimeEntry updateTimeEntry = new UpdateTimeEntry();
            updateTimeEntry.Id = id;
            updateTimeEntry.TPRESOURCEALLOCATIONID = tPRESOURCEALLOCATIONID;
            updateTimeEntry.RowVersion = rowVersion;
            return updateTimeEntry;
        }

        #endregion

        #region Primitive Properties
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=true, IsNullable=false)]
        [DataMemberAttribute()]
        public global::System.Int32 Id
        {
            get
            {
                return _Id;
            }
            set
            {
                if (_Id != value)
                {
                    OnIdChanging(value);
                    ReportPropertyChanging("Id");
                    _Id = value;
                    ReportPropertyChanged("Id");
                    OnIdChanged();
                }
            }
        }
        private global::System.Int32 _Id;
        partial void OnIdChanging(global::System.Int32 value);
        partial void OnIdChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=false)]
        [DataMemberAttribute()]
        public global::System.Int32 TPRESOURCEALLOCATIONID
        {
            get
            {
                return _TPRESOURCEALLOCATIONID;
            }
            set
            {
                OnTPRESOURCEALLOCATIONIDChanging(value);
                ReportPropertyChanging("TPRESOURCEALLOCATIONID");
                _TPRESOURCEALLOCATIONID = value;
                ReportPropertyChanged("TPRESOURCEALLOCATIONID");
                OnTPRESOURCEALLOCATIONIDChanged();
            }
        }
        private global::System.Int32 _TPRESOURCEALLOCATIONID;
        partial void OnTPRESOURCEALLOCATIONIDChanging(global::System.Int32 value);
        partial void OnTPRESOURCEALLOCATIONIDChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public Nullable<global::System.Int32> ResourceID
        {
            get
            {
                return _ResourceID;
            }
            set
            {
                OnResourceIDChanging(value);
                ReportPropertyChanging("ResourceID");
                _ResourceID = value;
                ReportPropertyChanged("ResourceID");
                OnResourceIDChanged();
            }
        }
        private Nullable<global::System.Int32> _ResourceID;
        partial void OnResourceIDChanging(Nullable<global::System.Int32> value);
        partial void OnResourceIDChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public Nullable<global::System.DateTime> PlannedBuildStartDate
        {
            get
            {
                return _PlannedBuildStartDate;
            }
            set
            {
                OnPlannedBuildStartDateChanging(value);
                ReportPropertyChanging("PlannedBuildStartDate");
                _PlannedBuildStartDate = value;
                ReportPropertyChanged("PlannedBuildStartDate");
                OnPlannedBuildStartDateChanged();
            }
        }
        private Nullable<global::System.DateTime> _PlannedBuildStartDate;
        partial void OnPlannedBuildStartDateChanging(Nullable<global::System.DateTime> value);
        partial void OnPlannedBuildStartDateChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public Nullable<global::System.DateTime> PlannedBuildEndDate
        {
            get
            {
                return _PlannedBuildEndDate;
            }
            set
            {
                OnPlannedBuildEndDateChanging(value);
                ReportPropertyChanging("PlannedBuildEndDate");
                _PlannedBuildEndDate = value;
                ReportPropertyChanged("PlannedBuildEndDate");
                OnPlannedBuildEndDateChanged();
            }
        }
        private Nullable<global::System.DateTime> _PlannedBuildEndDate;
        partial void OnPlannedBuildEndDateChanging(Nullable<global::System.DateTime> value);
        partial void OnPlannedBuildEndDateChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public Nullable<global::System.DateTime> ActualBuildStartDate
        {
            get
            {
                return _ActualBuildStartDate;
            }
            set
            {
                OnActualBuildStartDateChanging(value);
                ReportPropertyChanging("ActualBuildStartDate");
                _ActualBuildStartDate = value;
                ReportPropertyChanged("ActualBuildStartDate");
                OnActualBuildStartDateChanged();
            }
        }
        private Nullable<global::System.DateTime> _ActualBuildStartDate;
        partial void OnActualBuildStartDateChanging(Nullable<global::System.DateTime> value);
        partial void OnActualBuildStartDateChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public Nullable<global::System.DateTime> ActualBuildEndDate
        {
            get
            {
                return _ActualBuildEndDate;
            }
            set
            {
                OnActualBuildEndDateChanging(value);
                ReportPropertyChanging("ActualBuildEndDate");
                _ActualBuildEndDate = value;
                ReportPropertyChanged("ActualBuildEndDate");
                OnActualBuildEndDateChanged();
            }
        }
        private Nullable<global::System.DateTime> _ActualBuildEndDate;
        partial void OnActualBuildEndDateChanging(Nullable<global::System.DateTime> value);
        partial void OnActualBuildEndDateChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public Nullable<global::System.DateTime> PlannedTestStartDate
        {
            get
            {
                return _PlannedTestStartDate;
            }
            set
            {
                OnPlannedTestStartDateChanging(value);
                ReportPropertyChanging("PlannedTestStartDate");
                _PlannedTestStartDate = value;
                ReportPropertyChanged("PlannedTestStartDate");
                OnPlannedTestStartDateChanged();
            }
        }
        private Nullable<global::System.DateTime> _PlannedTestStartDate;
        partial void OnPlannedTestStartDateChanging(Nullable<global::System.DateTime> value);
        partial void OnPlannedTestStartDateChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public Nullable<global::System.DateTime> PlannedTestEndDate
        {
            get
            {
                return _PlannedTestEndDate;
            }
            set
            {
                OnPlannedTestEndDateChanging(value);
                ReportPropertyChanging("PlannedTestEndDate");
                _PlannedTestEndDate = value;
                ReportPropertyChanged("PlannedTestEndDate");
                OnPlannedTestEndDateChanged();
            }
        }
        private Nullable<global::System.DateTime> _PlannedTestEndDate;
        partial void OnPlannedTestEndDateChanging(Nullable<global::System.DateTime> value);
        partial void OnPlannedTestEndDateChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public Nullable<global::System.DateTime> ActualTestStartDate
        {
            get
            {
                return _ActualTestStartDate;
            }
            set
            {
                OnActualTestStartDateChanging(value);
                ReportPropertyChanging("ActualTestStartDate");
                _ActualTestStartDate = value;
                ReportPropertyChanged("ActualTestStartDate");
                OnActualTestStartDateChanged();
            }
        }
        private Nullable<global::System.DateTime> _ActualTestStartDate;
        partial void OnActualTestStartDateChanging(Nullable<global::System.DateTime> value);
        partial void OnActualTestStartDateChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public Nullable<global::System.DateTime> ActualTestEndDate
        {
            get
            {
                return _ActualTestEndDate;
            }
            set
            {
                OnActualTestEndDateChanging(value);
                ReportPropertyChanging("ActualTestEndDate");
                _ActualTestEndDate = value;
                ReportPropertyChanged("ActualTestEndDate");
                OnActualTestEndDateChanged();
            }
        }
        private Nullable<global::System.DateTime> _ActualTestEndDate;
        partial void OnActualTestEndDateChanging(Nullable<global::System.DateTime> value);
        partial void OnActualTestEndDateChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public Nullable<global::System.DateTime> PlannedImplementationStartDate
        {
            get
            {
                return _PlannedImplementationStartDate;
            }
            set
            {
                OnPlannedImplementationStartDateChanging(value);
                ReportPropertyChanging("PlannedImplementationStartDate");
                _PlannedImplementationStartDate = value;
                ReportPropertyChanged("PlannedImplementationStartDate");
                OnPlannedImplementationStartDateChanged();
            }
        }
        private Nullable<global::System.DateTime> _PlannedImplementationStartDate;
        partial void OnPlannedImplementationStartDateChanging(Nullable<global::System.DateTime> value);
        partial void OnPlannedImplementationStartDateChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public Nullable<global::System.DateTime> PlannedImplementationEndDate
        {
            get
            {
                return _PlannedImplementationEndDate;
            }
            set
            {
                OnPlannedImplementationEndDateChanging(value);
                ReportPropertyChanging("PlannedImplementationEndDate");
                _PlannedImplementationEndDate = value;
                ReportPropertyChanged("PlannedImplementationEndDate");
                OnPlannedImplementationEndDateChanged();
            }
        }
        private Nullable<global::System.DateTime> _PlannedImplementationEndDate;
        partial void OnPlannedImplementationEndDateChanging(Nullable<global::System.DateTime> value);
        partial void OnPlannedImplementationEndDateChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public Nullable<global::System.DateTime> ActualImplementationStartDate
        {
            get
            {
                return _ActualImplementationStartDate;
            }
            set
            {
                OnActualImplementationStartDateChanging(value);
                ReportPropertyChanging("ActualImplementationStartDate");
                _ActualImplementationStartDate = value;
                ReportPropertyChanged("ActualImplementationStartDate");
                OnActualImplementationStartDateChanged();
            }
        }
        private Nullable<global::System.DateTime> _ActualImplementationStartDate;
        partial void OnActualImplementationStartDateChanging(Nullable<global::System.DateTime> value);
        partial void OnActualImplementationStartDateChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public Nullable<global::System.DateTime> ActualImplementationEndDate
        {
            get
            {
                return _ActualImplementationEndDate;
            }
            set
            {
                OnActualImplementationEndDateChanging(value);
                ReportPropertyChanging("ActualImplementationEndDate");
                _ActualImplementationEndDate = value;
                ReportPropertyChanged("ActualImplementationEndDate");
                OnActualImplementationEndDateChanged();
            }
        }
        private Nullable<global::System.DateTime> _ActualImplementationEndDate;
        partial void OnActualImplementationEndDateChanging(Nullable<global::System.DateTime> value);
        partial void OnActualImplementationEndDateChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public Nullable<global::System.DateTime> PlannedPostImplementationStartDate
        {
            get
            {
                return _PlannedPostImplementationStartDate;
            }
            set
            {
                OnPlannedPostImplementationStartDateChanging(value);
                ReportPropertyChanging("PlannedPostImplementationStartDate");
                _PlannedPostImplementationStartDate = value;
                ReportPropertyChanged("PlannedPostImplementationStartDate");
                OnPlannedPostImplementationStartDateChanged();
            }
        }
        private Nullable<global::System.DateTime> _PlannedPostImplementationStartDate;
        partial void OnPlannedPostImplementationStartDateChanging(Nullable<global::System.DateTime> value);
        partial void OnPlannedPostImplementationStartDateChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public Nullable<global::System.DateTime> PlannedPostImplementationEndDate
        {
            get
            {
                return _PlannedPostImplementationEndDate;
            }
            set
            {
                OnPlannedPostImplementationEndDateChanging(value);
                ReportPropertyChanging("PlannedPostImplementationEndDate");
                _PlannedPostImplementationEndDate = value;
                ReportPropertyChanged("PlannedPostImplementationEndDate");
                OnPlannedPostImplementationEndDateChanged();
            }
        }
        private Nullable<global::System.DateTime> _PlannedPostImplementationEndDate;
        partial void OnPlannedPostImplementationEndDateChanging(Nullable<global::System.DateTime> value);
        partial void OnPlannedPostImplementationEndDateChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public Nullable<global::System.DateTime> ActualPostImplementationStartDate
        {
            get
            {
                return _ActualPostImplementationStartDate;
            }
            set
            {
                OnActualPostImplementationStartDateChanging(value);
                ReportPropertyChanging("ActualPostImplementationStartDate");
                _ActualPostImplementationStartDate = value;
                ReportPropertyChanged("ActualPostImplementationStartDate");
                OnActualPostImplementationStartDateChanged();
            }
        }
        private Nullable<global::System.DateTime> _ActualPostImplementationStartDate;
        partial void OnActualPostImplementationStartDateChanging(Nullable<global::System.DateTime> value);
        partial void OnActualPostImplementationStartDateChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public Nullable<global::System.DateTime> ActualPostImplementationEndDate
        {
            get
            {
                return _ActualPostImplementationEndDate;
            }
            set
            {
                OnActualPostImplementationEndDateChanging(value);
                ReportPropertyChanging("ActualPostImplementationEndDate");
                _ActualPostImplementationEndDate = value;
                ReportPropertyChanged("ActualPostImplementationEndDate");
                OnActualPostImplementationEndDateChanged();
            }
        }
        private Nullable<global::System.DateTime> _ActualPostImplementationEndDate;
        partial void OnActualPostImplementationEndDateChanging(Nullable<global::System.DateTime> value);
        partial void OnActualPostImplementationEndDateChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public Nullable<global::System.Double> AllocationBuild
        {
            get
            {
                return _AllocationBuild;
            }
            set
            {
                OnAllocationBuildChanging(value);
                ReportPropertyChanging("AllocationBuild");
                _AllocationBuild = value;
                ReportPropertyChanged("AllocationBuild");
                OnAllocationBuildChanged();
            }
        }
        private Nullable<global::System.Double> _AllocationBuild;
        partial void OnAllocationBuildChanging(Nullable<global::System.Double> value);
        partial void OnAllocationBuildChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public Nullable<global::System.Double> AllocationTest
        {
            get
            {
                return _AllocationTest;
            }
            set
            {
                OnAllocationTestChanging(value);
                ReportPropertyChanging("AllocationTest");
                _AllocationTest = value;
                ReportPropertyChanged("AllocationTest");
                OnAllocationTestChanged();
            }
        }
        private Nullable<global::System.Double> _AllocationTest;
        partial void OnAllocationTestChanging(Nullable<global::System.Double> value);
        partial void OnAllocationTestChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public Nullable<global::System.Double> AllocationImplementation
        {
            get
            {
                return _AllocationImplementation;
            }
            set
            {
                OnAllocationImplementationChanging(value);
                ReportPropertyChanging("AllocationImplementation");
                _AllocationImplementation = value;
                ReportPropertyChanged("AllocationImplementation");
                OnAllocationImplementationChanged();
            }
        }
        private Nullable<global::System.Double> _AllocationImplementation;
        partial void OnAllocationImplementationChanging(Nullable<global::System.Double> value);
        partial void OnAllocationImplementationChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public Nullable<global::System.Double> AllocationPostImplementation
        {
            get
            {
                return _AllocationPostImplementation;
            }
            set
            {
                OnAllocationPostImplementationChanging(value);
                ReportPropertyChanging("AllocationPostImplementation");
                _AllocationPostImplementation = value;
                ReportPropertyChanged("AllocationPostImplementation");
                OnAllocationPostImplementationChanged();
            }
        }
        private Nullable<global::System.Double> _AllocationPostImplementation;
        partial void OnAllocationPostImplementationChanging(Nullable<global::System.Double> value);
        partial void OnAllocationPostImplementationChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public Nullable<global::System.Int32> IsInsert
        {
            get
            {
                return _IsInsert;
            }
            set
            {
                OnIsInsertChanging(value);
                ReportPropertyChanging("IsInsert");
                _IsInsert = value;
                ReportPropertyChanged("IsInsert");
                OnIsInsertChanged();
            }
        }
        private Nullable<global::System.Int32> _IsInsert;
        partial void OnIsInsertChanging(Nullable<global::System.Int32> value);
        partial void OnIsInsertChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public global::System.String CreatedBy
        {
            get
            {
                return _CreatedBy;
            }
            set
            {
                OnCreatedByChanging(value);
                ReportPropertyChanging("CreatedBy");
                _CreatedBy = value;
                ReportPropertyChanged("CreatedBy");
                OnCreatedByChanged();
            }
        }
        private global::System.String _CreatedBy;
        partial void OnCreatedByChanging(global::System.String value);
        partial void OnCreatedByChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public Nullable<global::System.DateTimeOffset> Created
        {
            get
            {
                return _Created;
            }
            set
            {
                OnCreatedChanging(value);
                ReportPropertyChanging("Created");
                _Created = value;
                ReportPropertyChanged("Created");
                OnCreatedChanged();
            }
        }
        private Nullable<global::System.DateTimeOffset> _Created;
        partial void OnCreatedChanging(Nullable<global::System.DateTimeOffset> value);
        partial void OnCreatedChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public global::System.String ModifiedBy
        {
            get
            {
                return _ModifiedBy;
            }
            set
            {
                OnModifiedByChanging(value);
                ReportPropertyChanging("ModifiedBy");
                _ModifiedBy = value;
                ReportPropertyChanged("ModifiedBy");
                OnModifiedByChanged();
            }
        }
        private global::System.String _ModifiedBy;
        partial void OnModifiedByChanging(global::System.String value);
        partial void OnModifiedByChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=true)]
        [DataMemberAttribute()]
        public Nullable<global::System.DateTimeOffset> Modified
        {
            get
            {
                return _Modified;
            }
            set
            {
                OnModifiedChanging(value);
                ReportPropertyChanging("Modified");
                _Modified = value;
                ReportPropertyChanged("Modified");
                OnModifiedChanged();
            }
        }
        private Nullable<global::System.DateTimeOffset> _Modified;
        partial void OnModifiedChanging(Nullable<global::System.DateTimeOffset> value);
        partial void OnModifiedChanged();
    
        /// <summary>
        /// No Metadata Documentation available.
        /// </summary>
        [EdmScalarPropertyAttribute(EntityKeyProperty=false, IsNullable=false)]
        [DataMemberAttribute()]
        public global::System.Byte[] RowVersion
        {
            get
            {
                return StructuralObject.GetValidValue(_RowVersion);
            }
            set
            {
                OnRowVersionChanging(value);
                ReportPropertyChanging("RowVersion");
                _RowVersion = value;
                ReportPropertyChanged("RowVersion");
                OnRowVersionChanged();
            }
        }
        private global::System.Byte[] _RowVersion;
        partial void OnRowVersionChanging(global::System.Byte[] value);
        partial void OnRowVersionChanged();

        #endregion

    
    }

    #endregion

    
}
