    
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // a and b are javascript Date objects
    function dateDiffInDays(a, b) {
        // Discard the time and time-zone information.
        const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
        const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
        return Math.floor((utc2 - utc1) / _MS_PER_DAY);
    }   

    function sameDay(d1, d2) {
        return  d1.getFullYear()    === d2.getFullYear() &&
                d1.getMonth()       === d2.getMonth()    &&
                d1.getDate()        === d2.getDate();
      }
    
    // eslint-disable-next-line
    function getDaysInMonth(month, year) {
     var date = new Date(year, month, 1);
     var days = [];
     while (date.getMonth() === month) {
        days.push(new Date(date));
        date.setDate(date.getDate() + 1);
     }
        return days;
    }
    let tableOpts = [];
    tableOpts["Teste4"] = 
` A B C D
  8 8 8 F
  8 8 F 8
  8 F 8 8
  F 8 8 8
  8 8 8 8`;

  
    tableOpts["Refap"] = 
` G1 G2 G3 G4 G5
F F 23 7 15
F 7 23 F 15
F 7 23 15 F
23 7 F 15 F
23 7 F 15 F
23 F 7 15 F
F 15 7 F 23
F 15 7 F 23
7 15 F F 23
7 F 15 F 23
7 F 15 23 F
7 F 15 23 F
F F 15 23 7
15 23 F F 7
15 23 F F 7
15 23 F 7 F
F 23 F 7 15
F F 23 7 15
F F 23 7 15
F 7 23 F 15
  23 7 F 15 F
  23 7 F 15 F
  23 F 7 15 F
  23 15 7 F F
  F 15 7 F 23
  F 15 7 F 23
  7 15 F F 23
  7 F 15 23 F
  7 F 15 23 F
  F F 15 23 7
  15 F F 23 7
  15 23 F F 7
  15 23 F F 7
  15 23 F 7 F
  F F 23 7 15`;


  tableOpts["Refap0"] = 
  ` G1 G2 G3 G4 G5
  F F 0 8 16
  F 8 0 F 16
  F 8 0 16 F
  F 8 0 16 F
  0 8 F 16 F
  0 F 8 16 F
  0 16 8 F F
  F 16 8 F 0
  8 16 F F 0
  8 F 16 F 0
  8 F 16 F 0
  8 F 16 0 F
  F F 16 0 8
  16 F F 0 8
  16 0 F F 8
  16 0 F 8 F
  F 0 F 8 16
  F 0 F 8 16
  F F 0 8 16
  F 8 0 F 16
    F 8 0 16 F
    0 8 F 16 F
    0 F 8 16 F
    0 16 8 F F
    0 16 8 F F
    F 16 8 F 0
    8 16 F F 0
    8 F 16 F 0
    8 F 16 0 F
    F F 16 0 8
    16 F F 0 8
    16 F F 0 8
    16 0 F F 8
    16 0 F 8 F
    F 0 F 8 16`;


var structTabela = {
    tableName: "Refap", 
    tableLink: "refap23", 
    firstDay: "2020-01-23", 
    firstDayJS: "",
    groups: "",
    daysLines: "",
    daysLines12Transition: [['F','F','7','19','F'],
                            ['F','F','F','19','7'],
                            ['19','F','F','F','7'],
                            ['19','F','F','F','7'],
                            ['19','7','F','F','F'],
                            ['F','7','19','F','F'],
                            ['F','7','19','F','F'],
                            ['F','F','19','7','F'],
                            ['F','F','F','7','19'],
                            ['F','F','F','7','19'],
                            ['7','F','F','F','19'],
                            ['7','19','F','F','F'],
                            ['7','19','F','F','F'],
                            ['F','19','7','F','F'],
                            ['F','F','7','19','F']],
    
    daysLines12N:   [['F','F','F','19','7'],
                    ['19','F','F','F','7'],
                    ['19','7','F','F','F'],
                    ['19','7','F','F','F'],
                    ['F','19','7','F','F'],
                    ['F','19','7','F','F'],
                    ['F','F','19','7','F'],
                    ['F','F','19','7','F'],
                    ['F','F','F','7','19'],
                            ['7','F','F','F','19'],
                            ['7','F','F','F','19'],
                            ['19','7','F','F','F'],
                            ['19','7','F','F','F'],
                            ['F','19','7','F','F'],
                            ['F','19','7','F','F'],
                            ['F','F','7','19','F'],
                            ['F','F','F','19','7'],
                            ['F','F','F','19','7'],
                            ['7','F','F','F','19'],
                            ['7','F','F','F','19'],
                            ['19','7','F','F','F'],
                            ['19','7','F','F','F'],
                            ['F','7','19','F','F'],
                            ['F','F','19','7','F'],
                            ['F','F','19','7','F'],
                            ['F','F','F','19','7'],
                            ['F','F','F','19','7'],
                            ['7','F','F','F','19'],
                            ['7','F','F','F','19'],
                            ['7','19','F','F','F'],
                            ['F','19','7','F','F'],
                            ['F','19','7','F','F'],
                            ['F','F','19','7','F'],
                            ['F','F','19','7','F'],
                            ['F','F','F','19','7']

                        ],
    //tableData: tabelaRefap23,

    populateTableDate: function(tabelaName) {
        if (!tabelaName) { tabelaName = "Refap"; } //Or Refap0
        this.tableName = tabelaName; 
        this.tableData = tableOpts[tabelaName]; // TODO: automatic load..
        let arrTmpDaysSplit = this.tableData.replace(/^\s+/g,'').split("\n");
        let arrSeqDays = arrTmpDaysSplit.map(function(k,v) { return k.replace(/^\s+/g,'').split(" "); })
        this.groups = arrSeqDays[0];
        arrSeqDays.splice(0,1); // remove index 0 - groups
        this.daysLines = arrSeqDays;


        let newDate = this.firstDay.split("-");
        this.firstDayJS = new Date(newDate[0], newDate[1]-1, newDate[2]);
        return console.log(this.firstDayJS);
    },
    getDayScales: function(dateIn) {
        let ret = {day: "", groups: "", schedule: ""};
        ret.day = dateIn;
        ret.groups = this.groups;
        
        const day_transition1 = new Date(new Date(2021, 9, 1).setHours(12,0,0,0));
        const day_transition2 = new Date(new Date(2022, 0, 18).setHours(12,0,0,0));
        const day_transition3 = new Date(new Date(2022, 1, 17).setHours(12,0,0,0));

        if (sameDay(dateIn, day_transition1)) {
            // Expction day in the table
            if (this.tableName === "Refap") {
                ret.schedule = ['🚩23🏁', '🚩15🏁', '🚩F🏁', '🚩F🏁', '🚩7🏁'];
            } else {
                ret.schedule = ['🚩F🏁', '🚩16🏁', '🚩F🏁', '🚩F🏁', '🚩8🏁'];
            }
            return ret;

        } 
        
        if (sameDay(dateIn, day_transition2)) {
            if (this.tableName === "Refap") {
                ret.schedule = ['🟨7🏁', '🟨19🏁', '🟨F🏁', '🟨F🏁', '🟨F🏁'];
                return ret; 
            } else {
                ret.schedule = ['🟨7🏁', '🟨19🏁', '🟨F🏁', '🟨F🏁', '🟨0🏁'];
                return ret; 
            }
                       
        }
            
        if (sameDay(dateIn, day_transition3)) {
            ret.schedule = ['🟩19🏁', '🟩7🏁', '🟩F🏁', '🟩F🏁', '🟩F🏁'];
            return ret; 

        }

        if (dateIn.getTime() > day_transition3.getTime()) { 
            
            let diffDays = dateDiffInDays(this.firstDayJS, dateIn);
            let indexTab = diffDays % this.daysLines12N.length;
            ret.schedule = this.daysLines12N[indexTab];
            //ret.schedule = ['T', 'T', 'T', 'T', '🙌🏼'];
            return ret;
        }
        
        if (dateIn.getTime() > day_transition2.getTime()) {
                    
            let diffDays = dateDiffInDays(this.firstDayJS, dateIn);
            let indexTab = diffDays % this.daysLines12Transition.length;
            ret.schedule = ['X', 'X', 'X', 'X', '😈'];
            ret.schedule = this.daysLines12Transition[indexTab];
            return ret;
        }

        if (dateIn.getTime() > day_transition1.getTime()) { 
            let diffDays = dateDiffInDays(this.firstDayJS, dateIn);
            let indexTab = diffDays % this.daysLines.length;
            ret.schedule = ['X', 'X', 'X', 'X', '🎃'];
            ret.schedule = this.daysLines[indexTab];
            return ret;
        } 
                
        let diffDays = dateDiffInDays(this.firstDayJS, dateIn);
        let indexTab = diffDays % this.daysLines12Transition.length;
        ret.schedule = this.daysLines12Transition[indexTab];   
        return ret; 
        
    },
    getMonthScales: function(dateIn) {
        let ret = [];
        let month = dateIn.getMonth();
        let year = dateIn.getFullYear();
        let lastDayofMonth = (new Date(year,month+1,0)).getDate();
        for (let day=1; day <= lastDayofMonth; day++) {
            let dateDay = new Date(year, month, day, 12,0,0); // 8:00 AM for BUG of daylight saving (DST)
            let dia = this.getDayScales(dateDay);
            ret.push(dia);
        }

        return ret;
    }
}

export default structTabela;