/*User cards*/
type userCard ={
    img: string;
};

/*Weekly stats*/
type weeklyStats={
    title: string;
    subtitle: string;
    rank: string;
    bgcolor: string;
    textcolor: string;
};

/*Top Projects*/
type topProjects={
    img: string;
    activestate: string;
    leadname: string;
    designation: string;
    projectname: string;
    statuscolor: string;
    statustext: string;
    money: string;
};

/*Top Cards*/
type topCards={
    img: string;
    title: string;
    number: string;
    bgcolor: string;
    textcolor: string;
};

export type{userCard, weeklyStats,topProjects,topCards}