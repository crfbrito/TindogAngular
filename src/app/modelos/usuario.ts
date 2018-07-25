export class Usuario{
    uid:number;
    name:string;
    email:string;
    password:string;
    matchId: number;
    locationId: number;
    preferredGender:string;
    preferredAgeMin:string;
    preferredAgeMax:string;
    preferredDistance:string;
    age:number;
    gender:string;
    pictures:string;
    description:string;
    interests:string;
    connections:string;
    reportedUser:string;
    userName:string;

    constructor(uid?, name?, email?, password?, matchId?,  locationId?,  preferredGender?, preferredAgeMin?, preferredAgeMax?, preferredDistance?, age?, gender?, pictures?, description?, interests?, connections?, reportedUser?, userName?){
            this.uid=uid;
            this.name=name;
            this.email=email;
            this.password=password;
            this.matchId=matchId;
            this.locationId=locationId;
            this.preferredGender=preferredGender;
            this.preferredAgeMin=preferredAgeMin;
            this.preferredAgeMax=preferredAgeMax;
            this.preferredDistance=preferredDistance;
            this.age=age;
            this.gender=gender;
            this.pictures=pictures;
            this.description=description;
            this.interests=interests;
            this.connections=connections;
            this.reportedUser=reportedUser;
            this.userName=userName;
            

    }
}