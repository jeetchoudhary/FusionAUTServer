export class AutRequest {
   constructor(
      public projectList: string,
      public viewLabel: string,
      public databasaseHost: string,
      public databasePort: number,
      public databaseUser: string,
      public databasePass: string,
      public requestorEmail: string,
   ) {  }
}
