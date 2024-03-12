import React, { useState } from "react";

const authToken ="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSIsImtpZCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSJ9.eyJhdWQiOiJodHRwczovL21hbmFnZW1lbnQuYXp1cmUuY29tLyIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzQ2NDM5OTE0LTYzYjctNDY0ZS04MzI3LTliMTM3MzdhZThjZi8iLCJpYXQiOjE3MTAyMjM0NjEsIm5iZiI6MTcxMDIyMzQ2MSwiZXhwIjoxNzEwMjI3MzYxLCJhaW8iOiJFMk5nWUhBOFAvMmM5OXVVVFFGNmpvKzlKY3daQVE9PSIsImFwcGlkIjoiMjVkMGU0NzMtZWEzMy00NDcyLTlmZTgtNzNkYmJmZDA0ZWVmIiwiYXBwaWRhY3IiOiIxIiwiaWRwIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNDY0Mzk5MTQtNjNiNy00NjRlLTgzMjctOWIxMzczN2FlOGNmLyIsImlkdHlwIjoiYXBwIiwib2lkIjoiZDlmYzQzMWMtY2U3NC00NTlmLTlhYmYtNjdkODc0YzAwMWJkIiwicmgiOiIwLkFVb0FGSmxEUnJkalRrYURKNXNUYzNyb3owWklmM2tBdXRkUHVrUGF3ZmoyTUJOS0FBQS4iLCJzdWIiOiJkOWZjNDMxYy1jZTc0LTQ1OWYtOWFiZi02N2Q4NzRjMDAxYmQiLCJ0aWQiOiI0NjQzOTkxNC02M2I3LTQ2NGUtODMyNy05YjEzNzM3YWU4Y2YiLCJ1dGkiOiJCY1pzSGxleUUwR0U2cWlIMndzYkFBIiwidmVyIjoiMS4wIiwieG1zX2NhZSI6IjEiLCJ4bXNfdGNkdCI6MTQxNTEwMDAwOH0.h96dlgJoM8T269qBuVKkd8_pUnm57JG8idKBQ6lJXlHQOKfIwckSwvIRR3rRb5qhVepkdtp3xSHfvdXViPQjBkATQuf6zoTuX1-IQZkuy7nsJnUOQRzoL7BzfG36yHrWru3FZJdlw1ChhmE0J7LGZVBZaI44Np99cRuUjX-zGLeETuwIyeehXbTPR5i664Q5g76YQq-7-r6WoLIuiiKhNW3PXv0dT7VEQJlvkwEN6CHQ6EprgDzEtKq3E8SWP3C096sDkRQVYej_C0S1qfpUhs2dkJDShpUzUUZPzSg9dwlCaghhERCd58EScqMhC6qX7LwOyl7-PEzY-UBRNu6vRg"
const requestData = {

    "requests": [
      {
          "content": {
              "subscriptions": [
                  "941c55b9-6dbb-4d88-a4de-50b5af00e770"
              ],
              "query": "\nmaintenanceresources\n| where type =~ \"microsoft.maintenance/updates\"\n| where id =~ \"/subscriptions/941c55b9-6dbb-4d88-a4de-50b5af00e770/resourceGroups/Trimble-Poc/providers/Microsoft.Compute/virtualMachines/Trimble-Poc-VM/providers/microsoft.maintenance/updates\"\n| mv-expand updateConfig = properties.value\n| where updateConfig.maintenanceScope in~ (\"host\")\n| project status = updateConfig.status, impactDurationInSec = updateConfig.impactDurationInSec, maintenanceScope = updateConfig.maintenanceScope, impactType = updateConfig.impactType",
              "options": {
                  "$top": 1000,
                  "resultFormat": "objectArray"
              }
          },
          "httpMethod": "POST",
          "name": "3efea44d-293a-485a-bd7f-73b13151a028",
          "requestHeaderDetails": {
              "commandName": "Microsoft_Azure_Automation."
          },
          "url": "https://management.azure.com/providers/Microsoft.ResourceGraph/resources?api-version=2022-10-01"
      },
      {
          "content": {
              "subscriptions": [
                  "941c55b9-6dbb-4d88-a4de-50b5af00e770"
              ],
              "query": "PatchAssessmentResources  | where type =~ 'Microsoft.Compute/virtualMachines/patchAssessmentResults' and id =~ '/subscriptions/941c55b9-6dbb-4d88-a4de-50b5af00e770/resourceGroups/Trimble-Poc/providers/Microsoft.Compute/virtualMachines/Trimble-Poc-VM/patchAssessmentResults/latest'\n                                 | project properties, id",
              "options": {
                  "$top": 1000,
                  "resultFormat": "objectArray"
              }
          },
          "httpMethod": "POST",
          "name": "3efea44d-293a-485a-bd7f-73b13151a029",
          "requestHeaderDetails": {
              "commandName": "Microsoft_Azure_Automation."
          },
          "url": "https://management.azure.com/providers/Microsoft.ResourceGraph/resources?api-version=2022-10-01"
      },
      {
          "content": {
              "subscriptions": [
                  "941c55b9-6dbb-4d88-a4de-50b5af00e770"
              ],
              "query": "PatchAssessmentResources  | where type =~ 'Microsoft.Compute/virtualMachines/patchAssessmentResults/softwarePatches' and id contains '/subscriptions/941c55b9-6dbb-4d88-a4de-50b5af00e770/resourceGroups/Trimble-Poc/providers/Microsoft.Compute/virtualMachines/Trimble-Poc-VM/patchAssessmentResults/latest/softwarePatches/'\n                          | project properties, id",
              "options": {
                  "$top": 1000,
                  "resultFormat": "objectArray"
              }
          },
          "httpMethod": "POST",
          "name": "3efea44d-293a-485a-bd7f-73b13151a02a",
          "requestHeaderDetails": {
              "commandName": "Microsoft_Azure_Automation."
          },
          "url": "https://management.azure.com/providers/Microsoft.ResourceGraph/resources?api-version=2022-10-01"
      },
      {
          "content": {
              "subscriptions": [
                  "941c55b9-6dbb-4d88-a4de-50b5af00e770"
              ],
              "query": "PatchAssessmentResources  | where type =~ 'Microsoft.Compute/virtualMachines/patchAssessmentResults' and id =~ '/subscriptions/941c55b9-6dbb-4d88-a4de-50b5af00e770/resourceGroups/Trimble-Poc/providers/Microsoft.Compute/virtualMachines/Trimble-Poc-VM/patchAssessmentResults/latest'\n                                 | project properties, id",
              "options": {
                  "$top": 1000,
                  "resultFormat": "objectArray"
              }
          },
          "httpMethod": "POST",
          "name": "3efea44d-293a-485a-bd7f-73b13151a02b",
          "requestHeaderDetails": {
              "commandName": "Microsoft_Azure_Automation."
          },
          "url": "https://management.azure.com/providers/Microsoft.ResourceGraph/resources?api-version=2022-10-01"
      },
      {
          "content": {
              "subscriptions": [
                  "941c55b9-6dbb-4d88-a4de-50b5af00e770"
              ],
              "query": "resources\n    | where type in~(\"microsoft.hybridcompute/machines\", \"microsoft.compute/virtualmachines\")\n    | where id =~ \"/subscriptions/941c55b9-6dbb-4d88-a4de-50b5af00e770/resourceGroups/Trimble-Poc/providers/Microsoft.Compute/virtualMachines/Trimble-Poc-VM\"\n    | extend joinId = tolower(id)\n    | join kind = leftouter\n    (\n        patchassessmentresources\n        | where type in~ (\"microsoft.compute/virtualmachines/patchassessmentresults/softwarePatches\", \"microsoft.hybridcompute/machines/patchassessmentresults/softwarePatches\")\n        | parse id with resourceId \"/patchAssessmentResults\" *\n        | extend joinId = tolower(resourceId)\n        | project joinId, assessProperties = properties) on $left.joinId == $right.joinId\n        | where isnotnull(assessProperties.classifications)\n        | extend classif = parse_json(tolower(assessProperties.classifications))\n        | where isnotnull(assessProperties.version) and set_has_element(classif,\"security-esm\")\n        | summarize count()",
              "options": {
                  "$top": 1000,
                  "resultFormat": "objectArray"
              }
          },
          "httpMethod": "POST",
          "name": "3efea44d-293a-485a-bd7f-73b13151a02c",
          "requestHeaderDetails": {
              "commandName": "Microsoft_Azure_Automation."
          },
          "url": "https://management.azure.com/providers/Microsoft.ResourceGraph/resources?api-version=2022-10-01"
      },
      {
          "content": {
              "subscriptions": [
                  "941c55b9-6dbb-4d88-a4de-50b5af00e770"
              ],
              "query": "patchassessmentresources\n| where id =~ \"/subscriptions/941c55b9-6dbb-4d88-a4de-50b5af00e770/resourceGroups/Trimble-Poc/providers/Microsoft.Compute/virtualMachines/Trimble-Poc-VM/patchAssessmentResults/latest\"\n| extend operationType = iff (properties.startedBy =~ \"Platform\", \"PeriodicAssessment\", \"ManualAssessment\")\n| extend endTime = iff(properties.status =~ \"InProgress\" or properties.status =~ \"NotStarted\", datetime(null), todatetime(properties.lastModifiedDateTime))\n| project id, operationId = properties.assessmentActivityId, assessmentStatus = properties.status, updateOperation = \"Assessment\", operationType, startTime = properties.startDateTime, endTime, properties\n",
              "options": {
                  "$top": 1000,
                  "resultFormat": "objectArray"
              }
          },
          "httpMethod": "POST",
          "name": "3efea44d-293a-485a-bd7f-73b13151a02d",
          "requestHeaderDetails": {
              "commandName": "Microsoft_Azure_Automation."
          },
          "url": "https://management.azure.com/providers/Microsoft.ResourceGraph/resources?api-version=2022-10-01"
      },
      {
          "content": {
              "subscriptions": [
                  "941c55b9-6dbb-4d88-a4de-50b5af00e770"
              ],
              "query": "PatchInstallationResources  | where type =~ 'Microsoft.Compute/virtualMachines/patchInstallationResults' and id contains '/subscriptions/941c55b9-6dbb-4d88-a4de-50b5af00e770/resourceGroups/Trimble-Poc/providers/Microsoft.Compute/virtualMachines/Trimble-Poc-VM/patchInstallationResults/'\n                                    | project properties, id\n                                    | order by todatetime(properties.startDateTime) desc",
              "options": {
                  "$top": 1000,
                  "resultFormat": "objectArray"
              }
          },
          "httpMethod": "POST",
          "name": "3efea44d-293a-485a-bd7f-73b13151a032",
          "requestHeaderDetails": {
              "commandName": "Microsoft_Azure_Automation."
          },
          "url": "https://management.azure.com/providers/Microsoft.ResourceGraph/resources?api-version=2022-10-01"
      },
      {
          "content": {
              "subscriptions": [
                  "941c55b9-6dbb-4d88-a4de-50b5af00e770"
              ],
              "query": "PatchAssessmentResources  | where type =~ 'Microsoft.Compute/virtualMachines/patchAssessmentResults/softwarePatches' and id contains '/subscriptions/941c55b9-6dbb-4d88-a4de-50b5af00e770/resourceGroups/Trimble-Poc/providers/Microsoft.Compute/virtualMachines/Trimble-Poc-VM/patchAssessmentResults/latest/softwarePatches/'\n                          | project properties, id",
              "options": {
                  "$top": 1000,
                  "resultFormat": "objectArray"
              }
          },
          "httpMethod": "POST",
          "name": "3efea44d-293a-485a-bd7f-73b13151a033",
          "requestHeaderDetails": {
              "commandName": "Microsoft_Azure_Automation."
          },
          "url": "https://management.azure.com/providers/Microsoft.ResourceGraph/resources?api-version=2022-10-01"
      },
      {
          "content": {
              "subscriptions": [
                  "941c55b9-6dbb-4d88-a4de-50b5af00e770"
              ],
              "query": "resources\n| where id =~ \"/subscriptions/941c55b9-6dbb-4d88-a4de-50b5af00e770/resourceGroups/Trimble-Poc/providers/Microsoft.Compute/virtualMachines/Trimble-Poc-VM\"\n| where type =~ \"microsoft.hybridcompute/machines\"\n| extend machineId = tolower(id)\n| join kind=leftouter(\n    resources\n    | where type =~ \"microsoft.hybridcompute/machines/licenseProfiles\"\n    | extend machineId = tolower(tostring(trim_end(@\"\\/\\w+\\/(\\w|\\.)+\", id)))\n    | extend licenseId = tolower(tostring(properties.esuProfile.assignedLicense))\n) on $left.machineId == $right.machineId\n| join kind=leftouter (\n    resources\n    | where type =~ \"microsoft.hybridcompute/licenses\"\n    | extend licenseId = tolower(id)\n) on licenseId\n| extend esuStatus = case(\n    (properties.licenseProfile.esuProfile.licenseAssignmentState =~ \"Assigned\" and properties2.licenseDetails.state =~ \"Activated\") or properties.licenseProfile.esuProfile.esuKeyState =~ \"Active\", \"Enabled\",\n    (properties.licenseProfile.esuProfile.licenseAssignmentState =~ \"NotAssigned\" or properties2.licenseDetails.state =~ \"Deactivated\") and properties.licenseProfile.esuProfile.esuKeyState =~ 'Inactive', \"NotEnabled\",\n    \"Unknown\"\n)\n| project id, esuStatus, properties",
              "options": {
                  "$top": 1000,
                  "resultFormat": "objectArray"
              }
          },
          "httpMethod": "POST",
          "name": "3efea44d-293a-485a-bd7f-73b13151a034",
          "requestHeaderDetails": {
              "commandName": "Microsoft_Azure_Automation."
          },
          "url": "https://management.azure.com/providers/Microsoft.ResourceGraph/resources?api-version=2022-10-01"
      },
      {
          "content": {
              "subscriptions": [
                  "941c55b9-6dbb-4d88-a4de-50b5af00e770"
              ],
              "query": "\nmaintenanceresources\n| where type =~ \"microsoft.maintenance/configurationassignments\"\n| where properties.resourceId =~ \"/subscriptions/941c55b9-6dbb-4d88-a4de-50b5af00e770/resourceGroups/Trimble-Poc/providers/Microsoft.Compute/virtualMachines/Trimble-Poc-VM\"\n| parse properties.maintenanceConfigurationId with * '/subscriptions/' configSubscriptionId '/' *\n| distinct configSubscriptionId\n| summarize subscriptionIds = make_list(configSubscriptionId)\n| project subscriptionIds, isDynamicScope = \"False\"\n| union (\n    maintenanceresources\n    | where type =~ \"microsoft.maintenance/configurationassignments\"\n    | extend splitArr = split(id, \"/\")\n    | where array_length(splitArr) == 7 or array_length(splitArr) == 9\n    | project id, isDynamicScope = \"True\", dynamicScopeProperties = properties\n) ",
              "options": {
                  "$top": 1000,
                  "resultFormat": "objectArray"
              }
          },
          "httpMethod": "POST",
          "name": "3efea44d-293a-485a-bd7f-73b13151a035",
          "requestHeaderDetails": {
              "commandName": "Microsoft_Azure_Automation."
          },
          "url": "https://management.azure.com/providers/Microsoft.ResourceGraph/resources?api-version=2022-10-01"
      },
      {
          "content": {
              "subscriptions": [
                  "941c55b9-6dbb-4d88-a4de-50b5af00e770"
              ],
              "query": "resources\n| where id =~ \"/subscriptions/941c55b9-6dbb-4d88-a4de-50b5af00e770/resourceGroups/Trimble-Poc/providers/Microsoft.Compute/virtualMachines/Trimble-Poc-VM\"\n| where type =~ \"microsoft.hybridcompute/machines\"\n| extend machineId = tolower(id)\n| join kind=leftouter(\n    resources\n    | where type =~ \"microsoft.hybridcompute/machines/licenseProfiles\"\n    | extend machineId = tolower(tostring(trim_end(@\"\\/\\w+\\/(\\w|\\.)+\", id)))\n    | extend licenseId = tolower(tostring(properties.esuProfile.assignedLicense))\n) on $left.machineId == $right.machineId\n| join kind=leftouter (\n    resources\n    | where type =~ \"microsoft.hybridcompute/licenses\"\n    | extend licenseId = tolower(id)\n) on licenseId\n| extend esuStatus = case(\n    (properties.licenseProfile.esuProfile.licenseAssignmentState =~ \"Assigned\" and properties2.licenseDetails.state =~ \"Activated\") or properties.licenseProfile.esuProfile.esuKeyState =~ \"Active\", \"Enabled\",\n    (properties.licenseProfile.esuProfile.licenseAssignmentState =~ \"NotAssigned\" or properties2.licenseDetails.state =~ \"Deactivated\") and properties.licenseProfile.esuProfile.esuKeyState =~ 'Inactive', \"NotEnabled\",\n    \"Unknown\"\n)\n| project id, esuStatus, properties",
              "options": {
                  "$top": 1000,
                  "resultFormat": "objectArray"
              }
          },
          "httpMethod": "POST",
          "name": "3efea44d-293a-485a-bd7f-73b13151a036",
          "requestHeaderDetails": {
              "commandName": "Microsoft_Azure_Automation."
          },
          "url": "https://management.azure.com/providers/Microsoft.ResourceGraph/resources?api-version=2022-10-01"
      }
  ]

  }

export default function App() {
  const [responseData, setResponseData] = useState(null);
  const [patchdetails, setpatchdetails] = useState(null);
  const [installPatches, setinstallPatches] = useState(null);
  const [schedulePatches, setschedulePatches] = useState(null);
  const [scheduleDetails, setscheduleDetails] = useState(null);

  const clickscheduleDetails = async ()=>
  {
    const requestScheduleDetails={
            "requests":[
               {
                  "content":{
                     "query":"resources|where type =~ \"microsoft.maintenance/maintenanceconfigurations\"\r\n| extend propertiesJson = parsejson(['properties'])\r\n| extend scopeString = tostring(propertiesJson.maintenanceScope)\r\n| extend extensionPropertiesJson = parsejson(propertiesJson.extensionProperties)\r\n| extend subScopeString = tostring(extensionPropertiesJson.maintenanceSubScope)\r\n| extend scope=case(scopeString=~ 'InGuestPatch', 'Guest (Azure VM, Arc-enabled VMs/servers)',\r\n                    scopeString=~'OSImage','OS image (VMSS)',\r\n                    scopeString=~'Host','Host (dedicated/isolated infrastructure)',\r\n                    scopeString=~'Resource' and isnotnull(subScopeString) and subScopeString == \"NetworkGatewayMaintenance\",'Network gateways (preview)',\r\n                    scopeString)\r\n| project name, id, type, kind, tags, location, resourceGroup, subscriptionId, scope\r\n|extend locationDisplayName=case(location =~ 'eastus','East US',location =~ 'eastus2','East US 2',location =~ 'southcentralus','South Central US',location =~ 'westus2','West US 2',location =~ 'westus3','West US 3',location =~ 'australiaeast','Australia East',location =~ 'southeastasia','Southeast Asia',location =~ 'northeurope','North Europe',location =~ 'swedencentral','Sweden Central',location =~ 'uksouth','UK South',location =~ 'westeurope','West Europe',location =~ 'centralus','Central US',location =~ 'southafricanorth','South Africa North',location =~ 'centralindia','Central India',location =~ 'eastasia','East Asia',location =~ 'japaneast','Japan East',location =~ 'koreacentral','Korea Central',location =~ 'canadacentral','Canada Central',location =~ 'francecentral','France Central',location =~ 'germanywestcentral','Germany West Central',location =~ 'italynorth','Italy North',location =~ 'norwayeast','Norway East',location =~ 'polandcentral','Poland Central',location =~ 'switzerlandnorth','Switzerland North',location =~ 'uaenorth','UAE North',location =~ 'brazilsouth','Brazil South',location =~ 'israelcentral','Israel Central',location =~ 'qatarcentral','Qatar Central',location =~ 'centralusstage','Central US (Stage)',location =~ 'eastusstage','East US (Stage)',location =~ 'eastus2stage','East US 2 (Stage)',location =~ 'northcentralusstage','North Central US (Stage)',location =~ 'southcentralusstage','South Central US (Stage)',location =~ 'westusstage','West US (Stage)',location =~ 'westus2stage','West US 2 (Stage)',location =~ 'asia','Asia',location =~ 'asiapacific','Asia Pacific',location =~ 'australia','Australia',location =~ 'brazil','Brazil',location =~ 'canada','Canada',location =~ 'europe','Europe',location =~ 'france','France',location =~ 'germany','Germany',location =~ 'global','Global',location =~ 'india','India',location =~ 'japan','Japan',location =~ 'korea','Korea',location =~ 'norway','Norway',location =~ 'singapore','Singapore',location =~ 'southafrica','South Africa',location =~ 'sweden','Sweden',location =~ 'switzerland','Switzerland',location =~ 'uae','United Arab Emirates',location =~ 'uk','United Kingdom',location =~ 'unitedstates','United States',location =~ 'unitedstateseuap','United States EUAP',location =~ 'eastasiastage','East Asia (Stage)',location =~ 'southeastasiastage','Southeast Asia (Stage)',location =~ 'brazilus','Brazil US',location =~ 'northcentralus','North Central US',location =~ 'westus','West US',location =~ 'japanwest','Japan West',location =~ 'jioindiawest','Jio India West',location =~ 'westcentralus','West Central US',location =~ 'southafricawest','South Africa West',location =~ 'australiacentral','Australia Central',location =~ 'australiacentral2','Australia Central 2',location =~ 'australiasoutheast','Australia Southeast',location =~ 'jioindiacentral','Jio India Central',location =~ 'koreasouth','Korea South',location =~ 'southindia','South India',location =~ 'westindia','West India',location =~ 'canadaeast','Canada East',location =~ 'francesouth','France South',location =~ 'germanynorth','Germany North',location =~ 'norwaywest','Norway West',location =~ 'switzerlandwest','Switzerland West',location =~ 'ukwest','UK West',location =~ 'uaecentral','UAE Central',location =~ 'brazilsoutheast','Brazil Southeast',location)|extend subscriptionDisplayName=case(subscriptionId =~ '941c55b9-6dbb-4d88-a4de-50b5af00e770','MSFT_AZ_Sponsorship_DataEng-Mgmt',subscriptionId)|where (type !~ ('dell.storage/filesystems'))|where (type !~ ('informatica.datamanagement/organizations'))|where (type !~ ('paloaltonetworks.cloudngfw/globalrulestacks'))|where (type !~ ('purestorage.block/storagepools/avsstoragecontainers'))|where (type !~ ('purestorage.block/reservations'))|where (type !~ ('purestorage.block/storagepools'))|where (type !~ ('solarwinds.observability/organizations'))|where (type !~ ('splitio.experimentation/experimentationworkspaces'))|where (type !~ ('microsoft.azureactivedirectory/ciamdirectories'))|where (type !~ ('microsoft.agfoodplatform/farmbeats'))|where (type !~ ('microsoft.network/networkmanagers/verifierworkspaces'))|where (type !~ ('microsoft.anybuild/clusters'))|where (type !~ ('microsoft.mobilepacketcore/networkfunctions'))|where (type !~ ('microsoft.cdn/profiles/customdomains'))|where (type !~ ('microsoft.cdn/profiles/afdendpoints'))|where (type !~ ('microsoft.cdn/profiles/origingroups/origins'))|where (type !~ ('microsoft.cdn/profiles/origingroups'))|where (type !~ ('microsoft.cdn/profiles/afdendpoints/routes'))|where (type !~ ('microsoft.cdn/profiles/rulesets/rules'))|where (type !~ ('microsoft.cdn/profiles/rulesets'))|where (type !~ ('microsoft.cdn/profiles/secrets'))|where (type !~ ('microsoft.cdn/profiles/securitypolicies'))|where (type !~ ('microsoft.sovereign/landingzoneconfigurations'))|where (type !~ ('microsoft.cloudtest/accounts'))|where (type !~ ('microsoft.cloudtest/hostedpools'))|where (type !~ ('microsoft.cloudtest/images'))|where (type !~ ('microsoft.cloudtest/pools'))|where (type !~ ('microsoft.codesigning/codesigningaccounts'))|where (type !~ ('microsoft.compute/virtualmachineflexinstances'))|where (type !~ ('microsoft.kubernetesconfiguration/extensions'))|where (type !~ ('microsoft.containerservice/managedclusters/microsoft.kubernetesconfiguration/extensions'))|where (type !~ ('microsoft.kubernetes/connectedclusters/microsoft.kubernetesconfiguration/namespaces'))|where (type !~ ('microsoft.containerservice/managedclusters/microsoft.kubernetesconfiguration/namespaces'))|where (type !~ ('microsoft.kubernetes/connectedclusters/microsoft.kubernetesconfiguration/fluxconfigurations'))|where (type !~ ('microsoft.containerservice/managedclusters/microsoft.kubernetesconfiguration/fluxconfigurations'))|where (type !~ ('microsoft.portalservices/extensions/deployments'))|where (type !~ ('microsoft.portalservices/extensions'))|where (type !~ ('microsoft.portalservices/extensions/slots'))|where (type !~ ('microsoft.portalservices/extensions/versions'))|where (type !~ ('microsoft.azuredatatransfer/connections'))|where (type !~ ('microsoft.azuredatatransfer/connections/flows'))|where (type !~ ('microsoft.azuredatatransfer/pipelines'))|where (type !~ ('microsoft.databasewatcher/watchers'))|where (type !~ ('microsoft.datacollaboration/workspaces'))|where (type !~ ('microsoft.deviceregistry/devices'))|where (type !~ ('microsoft.deviceupdate/updateaccounts/activedeployments'))|where (type !~ ('microsoft.deviceupdate/updateaccounts/agents'))|where (type !~ ('microsoft.deviceupdate/updateaccounts/deployments'))|where (type !~ ('microsoft.deviceupdate/updateaccounts/deviceclasses'))|where (type !~ ('microsoft.deviceupdate/updateaccounts/updates'))|where (type !~ ('microsoft.deviceupdate/updateaccounts'))|where (type !~ ('microsoft.devopsinfrastructure/pools'))|where (type !~ ('microsoft.network/dnsresolverdomainlists'))|where (type !~ ('microsoft.network/dnsresolverpolicies'))|where (type !~ ('microsoft.workloads/epicvirtualinstances'))|where (type !~ ('microsoft.healthmodel/healthmodels'))|where (type !~ ('microsoft.hybridcompute/arcserverwithwac'))|where (type !~ ('microsoft.hybridcompute/machinessovereign'))|where (type !~ ('microsoft.hybridcompute/machinesesu'))|where (type !~ ('microsoft.network/virtualhubs')) or ((kind =~ ('routeserver')))|where (type !~ ('microsoft.network/networkvirtualappliances'))|where (type !~ ('microsoft.metaverse/metaverses'))|where (type !~ ('microsoft.modsimworkbench/workbenches/chambers'))|where (type !~ ('microsoft.modsimworkbench/workbenches/chambers/connectors'))|where (type !~ ('microsoft.modsimworkbench/workbenches/chambers/files'))|where (type !~ ('microsoft.modsimworkbench/workbenches/chambers/filerequests'))|where (type !~ ('microsoft.modsimworkbench/workbenches/chambers/licenses'))|where (type !~ ('microsoft.modsimworkbench/workbenches/chambers/storages'))|where (type !~ ('microsoft.modsimworkbench/workbenches/chambers/workloads'))|where (type !~ ('microsoft.modsimworkbench/workbenches/sharedstorages'))|where (type !~ ('microsoft.modsimworkbench/workbenches'))|where (type !~ ('microsoft.insights/diagnosticsettings'))|where not((type =~ ('microsoft.network/serviceendpointpolicies')) and ((kind =~ ('internal'))))|where (type !~ ('microsoft.resources/resourcechange'))|where (type !~ ('microsoft.resources/resourcegraphvisualizer'))|where (type !~ ('microsoft.openlogisticsplatform/workspaces'))|where (type !~ ('microsoft.iotoperationsmq/mq'))|where (type !~ ('microsoft.orbital/cloudaccessrouters'))|where (type !~ ('microsoft.orbital/terminals'))|where (type !~ ('microsoft.orbital/sdwancontrollers'))|where (type !~ ('microsoft.recommendationsservice/accounts/modeling'))|where (type !~ ('microsoft.recommendationsservice/accounts/serviceendpoints'))|where (type !~ ('microsoft.recoveryservicesbvtd/vaults'))|where (type !~ ('microsoft.recoveryservicesbvtd2/vaults'))|where (type !~ ('microsoft.recoveryservicesintd/vaults'))|where (type !~ ('microsoft.recoveryservicesintd2/vaults'))|where (type !~ ('microsoft.features/featureprovidernamespaces/featureconfigurations'))|where (type !~ ('microsoft.deploymentmanager/rollouts'))|where (type !~ ('microsoft.providerhub/providerregistrations'))|where (type !~ ('microsoft.providerhub/providerregistrations/customrollouts'))|where (type !~ ('microsoft.providerhub/providerregistrations/defaultrollouts'))|where (type !~ ('microsoft.datareplication/replicationvaults'))|where not((type =~ ('microsoft.synapse/workspaces/sqlpools')) and ((kind =~ ('v3'))))|where (type !~ ('microsoft.mission/catalogs'))|where (type !~ ('microsoft.mission/communities'))|where (type !~ ('microsoft.mission/communities/communityendpoints'))|where (type !~ ('microsoft.mission/enclaveconnections'))|where (type !~ ('microsoft.mission/virtualenclaves/enclaveendpoints'))|where (type !~ ('microsoft.mission/virtualenclaves/endpoints'))|where (type !~ ('microsoft.mission/externalconnections'))|where (type !~ ('microsoft.mission/internalconnections'))|where (type !~ ('microsoft.mission/communities/transithubs'))|where (type !~ ('microsoft.mission/virtualenclaves'))|where (type !~ ('microsoft.mission/virtualenclaves/workloads'))|where (type !~ ('microsoft.windowspushnotificationservices/registrations'))|where (type !~ ('microsoft.workloads/insights'))|where (type !~ ('microsoft.hanaonazure/sapmonitors'))|where (type !~ ('microsoft.cloudhealth/healthmodels'))|where (type !~ ('microsoft.manufacturingplatform/manufacturingdataservices'))|where (type !~ ('microsoft.securitycopilot/capacities'))|where not((type =~ ('microsoft.sql/servers/databases')) and ((kind in~ ('system','v2.0,system','v12.0,system','v12.0,system,serverless','v12.0,user,datawarehouse,gen2,analytics'))))|where not((type =~ ('microsoft.sql/servers')) and ((kind =~ ('v12.0,analytics'))))|project name,scope,resourceGroup,locationDisplayName,subscriptionDisplayName,id,type,kind,location,subscriptionId,tags|sort by (tolower(tostring(name))) asc",
                     "options":{
                        "$top":100,
                        "$skip":0,
                        "$skipToken":"",
                        "resultFormat":"table"
                     },
                     "subscriptions":[
                        "941c55b9-6dbb-4d88-a4de-50b5af00e770"
                     ]
                  },
                  "httpMethod":"POST",
                  "name":"d7cec93b-41e6-40ee-8f78-d1dd17a3b012",
                  "requestHeaderDetails":{
                     "commandName":"HubsExtension.BrowseResource.Microsoft.Maintenance/maintenanceConfigurations.InitialLoad"
                  },
                  "url":"https://management.azure.com/providers/Microsoft.ResourceGraph/resources?api-version=2021-03-01"
               }
            ]
      }

    const response = await fetch(
          "https://management.azure.com/batch?api-version=2020-06-01",
        {
          method: "POST",
          body: JSON.stringify(requestScheduleDetails),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + authToken
            }
           } );
           const scheduleDetailsresponse = await response.json();
           console.log("schedule details",scheduleDetailsresponse);
           setscheduleDetails(scheduleDetailsresponse);
  };
  

  const clickschedulePatches = async ()=>
  {
    const requestSchedulePatch={
        "location": "centralindia",
        "properties": {
          "namespace": "Trimble-Poc-Maintainance",
          "extensionProperties": {
            "InGuestPatchMode" : "User"
          },
          "maintenanceScope": "InGuestPatch",
          "maintenanceWindow": {
            "startDateTime": "2024-02-27 14:45",
            "expirationDateTime": "2024-03-12 15:30",
            "duration": "01:30",
            "timeZone": "India Standard Time",
            "recurEvery": "Day"
          },
          "visibility": "Custom",
          "installPatches": {
            "rebootSetting": "IfRequired",
            "windowsParameters": {
              "classificationsToInclude": [
                "Security",
                "Critical",
                "UpdateRollup"
              ]
            },
            "linuxParameters": {
              "classificationsToInclude": [
                "Other"
              ]
            }
          }
        }
      }

    const response = await fetch(
          "https://management.azure.com/subscriptions/941c55b9-6dbb-4d88-a4de-50b5af00e770/resourceGroups/Trimble-Poc/providers/Microsoft.Maintenance/maintenanceConfigurations/Trimble-Poc-Maintainance?api-version=2021-09-01-preview",
        {
          method: "PUT",
          body: JSON.stringify(requestSchedulePatch),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + authToken
            }
           } );
           const scheduleData = await response.json();
           console.log("schedule data",scheduleData);
           if (response.status === 200) {
            setschedulePatches(scheduleData);
        } else if (response.status === 400){
            setschedulePatches("Maintenance window is before current time");
        }
  };
  

  const clickinstallPatches = async ()=>
  {
    const requestDataPatch={
            "maximumDuration": "PT120M",
            "rebootSetting": "IfRequired",
            "windowsParameters": {
              "classificationsToInclude": [
                "Security",
                "UpdateRollup",
                "FeaturePack",
                "ServicePack"
              ],
                "kbNumbersToInclude": [
                "5034767"
              ]
              // "kbNumbersToExclude": [
              //   "5034767"
              // ]
          }

    }

    const response = await fetch(
        "https://management.azure.com/subscriptions/941c55b9-6dbb-4d88-a4de-50b5af00e770/resourceGroups/Trimble-Poc/providers/Microsoft.Compute/virtualMachines/Trimble-Poc-VM/installPatches?api-version=2020-12-01",
        {
          method: "POST",
          body: JSON.stringify(requestDataPatch),
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization:
              "Bearer " + authToken
                  }
           } );
           if (response.status === 202) {
            setinstallPatches("Patching is started please wait to update.");
        } else {
            setinstallPatches("Don't Click the button again patch is running");
        }
  };

  const handleClick = async () => {
    console.log("clicked");
    setpatchdetails(null);

    const response = await fetch(
      "https://management.azure.com/batch?api-version=2020-06-01",
      {
        method: "POST",
        body: JSON.stringify(requestData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization:
            "Bearer " + authToken
                }
         } );
    const result = await response.json();
    setResponseData(result);
    
  };

const handlePrintPatchNames = () => 
{
    let x=responseData?.responses?.filter((item: any) => {
        if (item.name === "3efea44d-293a-485a-bd7f-73b13151a02a") {
          return item;
        } else {
          return null;
        }
      })||null;
      if (x?.[0]?.content?.data?.[0]?.properties != null) {
        setpatchdetails(x?.[0]?.content?.data);
      //  setpatchdetails(x?.[0]?.content?.data?.[0]?.properties);
    } else {
        setpatchdetails("No VM has patches available right now, VMs are UpToDate");
    }

    //x?.[0]?.content?.data?.[0]?.properties
      //console.log("result ",responseData,x,x?.[0]?.content?.data?.[0]?.properties);
      console.log("result ",responseData);
}

  return (
    <div className="App">
      <h3>Azure VMs patching updates available</h3>
      <button onClick={handleClick} style={{ marginRight: '10px' }}>All Details here</button>
      <button onClick={handlePrintPatchNames} style={{ marginRight: '10px' }}>Patch Details of VMs</button>
      <button onClick={clickschedulePatches} style={{ marginRight: '10px' }}>Schedule Your Patch</button>
      <button onClick={clickscheduleDetails} style={{ marginRight: '10px' }}>Patch Schedule Details</button>
      <button onClick={clickinstallPatches} style={{ marginRight: '10px' }}>Install patches</button>
      {scheduleDetails &&(
        <pre>{JSON.stringify(scheduleDetails, null, 2)}</pre>
      )}
      {schedulePatches && scheduleDetails===null &&(
        <pre>{JSON.stringify(schedulePatches, null, 2)}</pre>
      )}
      {installPatches && schedulePatches===null  &&(
        <pre>{JSON.stringify(installPatches, null, 2)}</pre>
      )}
      {patchdetails && installPatches===null && (
        <pre>{JSON.stringify(patchdetails, null, 2)}</pre>
      )}
      {responseData && patchdetails===null && installPatches===null && schedulePatches===null &&(
        <pre>{JSON.stringify(responseData, null, 2)}</pre>
      )}
    </div>

  );
}
