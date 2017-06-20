export class AUTService {

     projectList = [
        {
            'projectList': 'PrcPoEditDocumentProtectedModelTest',
            'viewLabel': 'FUSIONAPPS_PT.V2MIBPRCX_LINUX.X64_170613.2154',
            'databasaseHost': 'indl76041.in.oracle.com',
            'databasePort': '1522',
            'databaseUser': 'fusion',
            'databasePass': 'fusion',
            'requestorEmail': 'someone@oracle.com'
        },
        {
            'projectList': 'PrcPozSuppliersProtectedModelTest',
            'viewLabel': 'FUSIONAPPS_PT.V2MIBPRCX_LINUX.X64_170613.2154',
            'databasaseHost': 'indl76041.in.oracle.com',
            'databasePort': '1522',
            'databaseUser': 'fusion',
            'databasePass': 'fusion',
            'requestorEmail': 'jitender.k.kumar@oracle.com'
        }

    ];
    getListOfAllRequests() {
        return this.projectList;
    }


    getListOfRunningRequests() {
    }

    submitNewRequest() {
    }

}
