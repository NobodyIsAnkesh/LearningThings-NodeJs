const axios = require('axios');

let url = "https://bpm.toorakcapital.info/engine-rest/process-instance/";

let list = [
    {
        "links": [],
        "id": "0077e31d-e477-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR400296",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "0415b4a5-e475-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR789701",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "06bcc421-e476-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR127476",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "08d74a19-e477-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR673102",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "093d9069-e4e7-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR439584",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "0c49d13d-e476-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR392656",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "0cb76bed-e4b6-11eb-9128-76a429a16656",
        "definitionId": "IR_Process:1:ea8ddf41-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "TY057156",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "101cb356-e4b2-11eb-9128-76a429a16656",
        "definitionId": "Review_Process:1:ea8fb402-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR947156",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "10f7c8f9-e476-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR116786",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "11baf81d-e4ed-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "TY724214",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "1242db31-e475-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR642282",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "16f5e665-e476-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR324477",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "17bad9ad-e475-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR207784",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "196e4b95-e4ee-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "TY045054",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "1ab1cdfc-e4ac-11eb-9128-76a429a16656",
        "definitionId": "IR_Process:1:ea8ddf41-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "TY262310",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "1c77ec99-e475-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR499196",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "1c99d6e1-e476-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR110137",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "2123c175-e475-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR647138",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "22188c1d-e476-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR386061",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "23c93eb9-e4a5-11eb-9128-76a429a16656",
        "definitionId": "Review_Process:1:ea8fb402-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR882696",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "26021801-e475-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR157230",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "27f84d19-e476-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR913441",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "2b1d507d-e475-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR162515",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "2bc4a971-e4ee-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "TY433047",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "2d420fa5-e476-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR784486",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "302c7b09-e475-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR089769",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "33717741-e476-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR623388",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "354fa2c5-e475-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR993210",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "38d06f7d-e476-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR403450",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "38da3a69-e4ed-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "TY125686",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "3ae27c41-e475-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR811741",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "3f1bea99-e476-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR515418",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "3f82bcc9-e4b8-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR273086",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "3f84bb11-e4a2-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR558348",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "4006192d-e475-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR004819",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "433c44dd-e4a2-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR427475",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "466a9a89-e475-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR033387",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "467d0659-e4ee-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "TY743838",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "4893c309-e4a2-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR882696",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "4c68bee5-e4a2-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR947156",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "4d08a275-e475-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR078126",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "4fed0ee5-e4ed-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "TY564296",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "5177f43f-e4a3-11eb-9128-76a429a16656",
        "definitionId": "IR_Process:1:ea8ddf41-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR427475",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "53afab11-e475-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR141431",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "53ea58dd-e4e6-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR200814",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "597a365d-e475-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR272776",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "5f6fc949-e475-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR836631",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "60569085-e4a3-11eb-9128-76a429a16656",
        "definitionId": "IR_Process:1:ea8ddf41-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR558348",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "605c537d-e472-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "TY921731",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "641c3a65-e475-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR744216",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "65ba6159-e472-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "TY520756",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "6eb60855-e472-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "TY829575",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "7048eba9-e4e6-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR587929",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "75231531-e472-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "TY607055",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "7ada2211-e4ed-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "TY667015",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "7bc785bd-e472-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "TY023335",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "7ec2d905-e4ee-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR526009",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "855541c5-e4e6-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR168344",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "8a53887c-e4ac-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "TY057156",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "92d114fd-e4ed-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "TY562106",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "95776929-e48b-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "TY262310",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "9cf61e7d-e4b9-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "TY937398",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "a5134e99-e4ed-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR324742",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "a7bc5331-e4e6-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR965025",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "aa0b47a5-e4ed-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "TY279765",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "b84bad75-e4b6-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "TY335970",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "bb036d88-d97f-11eb-bf2e-5a2f2332632e",
        "definitionId": "ReviewInvoice:1:f056209b-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "test",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "c65e41b1-e4ed-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "TY874401",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "c82b3009-e4e1-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "TY828443",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "d5d87a91-e476-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR388221",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "dd96c69d-e4ed-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "TY405446",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "de9ee0bd-e476-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR104692",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "e69aa3e9-e476-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR573894",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "eb18214d-e4e6-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR113016",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "edcca861-e4b8-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "TY863236",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "eee4d535-e476-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR499443",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "f1397c0d-d833-11eb-bf2e-5a2f2332632e",
        "definitionId": "invoice:1:f0553639-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": null,
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "f24b134f-d833-11eb-bf2e-5a2f2332632e",
        "definitionId": "invoice:1:f0553639-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": null,
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "f2c34fdb-d833-11eb-bf2e-5a2f2332632e",
        "definitionId": "invoice:1:f0553639-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": null,
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "f2e81625-d833-11eb-bf2e-5a2f2332632e",
        "definitionId": "ReviewInvoice:1:f056209b-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": null,
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "f3025504-d833-11eb-bf2e-5a2f2332632e",
        "definitionId": "invoice:2:f09f3796-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": null,
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "f3160446-d833-11eb-bf2e-5a2f2332632e",
        "definitionId": "invoice:2:f09f3796-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": null,
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "f3751381-d833-11eb-bf2e-5a2f2332632e",
        "definitionId": "invoice:2:f09f3796-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": null,
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "f39bae8b-d833-11eb-bf2e-5a2f2332632e",
        "definitionId": "ReviewInvoice:1:f056209b-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": null,
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "f3b68889-e4ed-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "TY368533",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    },
    {
        "links": [],
        "id": "f709f251-e476-11eb-9128-76a429a16656",
        "definitionId": "ShadowDueDelligence:1:ea9a1444-d833-11eb-bf2e-5a2f2332632e",
        "businessKey": "BR864353",
        "caseInstanceId": null,
        "ended": false,
        "suspended": false,
        "tenantId": null
    }
];

list.forEach(element => {
    try {
        // if (element.name != 'ankesh') {
        axios.delete(url + element.id);
        // }
    } catch (error) {
        console.log(error);
    }
});

