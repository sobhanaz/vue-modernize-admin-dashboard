import type { TablerIconComponent } from "vue-tabler-icons";

/*Basic table 1 types*/
type teamGroupType={
    id: string;
    color: string;
    text: string;
}
type basicTable1 = {
    avatar: string;
    name: string;
    post: string;
    pname: string;
    status: string;
    statuscolor: string;
    teams: teamGroupType[];
    budget: string;
};

/*Basic table 2 types*/
type userGroupType={
    id: string;
    icon: string;
};
type basicTable2 = {
    avatar: string;
    name: string;
    post: string;
    status: string;
    statuscolor: string;
    users: userGroupType[];
};

/*Basic table 3 types*/
type teamsGType={
    status: string;
    statuscolor: string;
};
type basicTable3 ={
    avatar: string;
    name: string;
    handle: string;
    status: string;
    statusoffline: boolean;
    statuscolor: string;
    email: string;
    teams:teamsGType[]; 
};

/*Basic table 4 types*/
type basicTable4 = {
    invoice: string;
    status: string;
    statuscolor: string;
    statusicon: TablerIconComponent;
    avatar: string;
    name: string;
    handle: string;
    progress: number;
};

/*Basic table 5 types*/
type coursesType={
    status: string;
    statuscolor: string;
};
type basicTable5 ={
    avatar: string;
    name: string;
    handle: string;
    users: string;
    courses:coursesType[]; 
};

/*Dark table types*/
type darkTeamsType={
    id: string;
    color: string;
    text: string;
};
type tableDark ={
    avatar: string;
    name: string;
    post: string;
    pname: string;
    status: string;
    statuscolor: string;
    teams:darkTeamsType[]; 
    budget: string;
};

/*Density table types*/
type densUserType={
    id: string;
    icon: string;
};
type tableDensity= {
    avatar: string;
    name: string;
    post: string;
    status: string;
    statuscolor: string;
    users: densUserType[];
};

/*FixedHeader table types*/
type fixedTeamType={
    status: string;
    statuscolor: string;
};
type tableFixedHeader ={
    avatar: string;
    name: string;
    handle: string;
    status: string;
    statusoffline: boolean;
    statuscolor: string;
    email: string;
    teams:fixedTeamType[]; 
};

/*Height table types*/
type heightCourseType={
    status: string;
    statuscolor: string;
}
type heightTable ={
    avatar: string;
    name: string;
    handle: string;
    users: string;
    email: string;
    courses:heightCourseType[]; 
};

/*Table Action*/
type tableAction = {
    icon: TablerIconComponent;
    listtitle: string;
};

export type { basicTable1, basicTable2, basicTable3, basicTable4, basicTable5, tableDark, tableDensity,tableFixedHeader, heightTable, tableAction };