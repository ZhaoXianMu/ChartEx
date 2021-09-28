import React from 'react'
import { Redirect } from 'react-router-dom'
import { FuseUtils } from '@fuse'

import { HomeConfig } from 'app/main/home/HomeConfig'
import { LoginConfig } from 'app/main/login/LoginConfig'

// import { ExampleConfig } from 'app/main/example/ExampleConfig'

// import { RegisterConfig } from 'app/main/register/RegisterConfig'

// import { UserConfig } from 'app/main/administrator/users/UserConfig'
// import { CompanyConfig } from 'app/main/administrator/company/CompanyConfig'
// import { RolesConfig } from 'app/main/administrator/roles/RolesConfig'
// import { GroupsConfig } from 'app/main/administrator/groups/GroupsConfig'
// import { ProvidersConfig } from 'app/main/administrator/providers/ProvidersConfig'
// import { ChartAccountsConfig } from 'app/main/administrator/chartaccounts/ChartAccountsConfig'
// import { EntranceTableConfig } from 'app/main/vouchers/entrance-table/EntranceTableConfig'
// import { MyVouchersConfig } from 'app/main/vouchers/my-vouchers/MyVouchersConfig'
// import { AllVouchersConfig } from 'app/main/vouchers/all-vouchers/AllVouchersConfig'
// import { InboundConfig } from 'app/main/messenger/inbound/InboundConfig'
// import { NotificationsConfig } from 'app/main/messenger/notifications/NotificationsConfig'
// import { AlertsConfig } from 'app/main/messenger/alerts/AlertsConfig'
// import { ApprovedRejectedVouchersConfig } from 'app/main/reports/approved_rejected_vouchers/ApprovedRejectedVouchersConfig'
// import { AuditConfig } from 'app/main/audit/AuditConfig'
// import { VoucherConfig } from 'app/main/vouchers/voucher-detail/VoucherConfig'
// import { TasksConfig } from 'app/main/administrator/tasks/TasksConfig'
// import { ProcessesConfig } from 'app/main/billing/processes/ProcessesConfig'
// import { ConciliationConfig } from 'app/main/billing/conciliation/ConciliationConfig'
// import { DailyReportConfig } from 'app/main/billing/dailyReport/DailyReportConfig'
// import { InvoiceIssuedConfig } from 'app/main/billing/invoiceIssued/InvoiceIssuedConfig'
// import { CheckInConfig } from 'app/main/billing/manual/checkIn/CheckInConfig'
// import { DraftsConfig } from 'app/main/billing/manual/drafts/DraftsConfig'
// import { ProductsConfig } from 'app/main/billing/manual/products/ProductsConfig'
// import { TemplatesConfig } from 'app/main/billing/manual/templates/TemplatesConfig'

// import { AdminAlertsConfig } from 'app/main/administrator/alerts/AdminAlertsConfig'
// import { ArchitectureConfig } from 'app/main/administrator/controlPanel/architecture/ArchitectureConfig'
// import { AssignmentRulesConfig } from 'app/main/administrator/controlPanel/assignmentRules/AssignmentRulesConfig'
// import { CertificateConfig } from 'app/main/administrator/controlPanel/certificationManagement/CertificateConfig'
// import { CAEmanagementConfig } from 'app/main/administrator/controlPanel/caesManagement/CAEmanagementConfig'
// import { ListOfIssuersConfig } from 'app/main/administrator/controlPanel/listOfIssuers/ListOfIssuersConfig'
// import { XSLSConfig } from 'app/main/administrator/controlPanel/xsls/XSLSConfig'
// import { ClientsSuppliersConfig } from 'app/main/administrator/controlPanel/client_supplier/ClientsSuppliersConfig'

// import { ParametersConfig } from 'app/main/administrator/parameters/ParametersConfig'
// import { OutgoingConfig } from 'app/main/messenger/outgoing/OutgoingConfig'

 
const routeConfigs = [
  LoginConfig,
  HomeConfig,
  
]

const routes = [
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
  {
    path: '/',    
    component: () => <Redirect to="/home"/>
  }
]

export default routes
