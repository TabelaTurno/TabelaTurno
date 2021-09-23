import React from 'react';
import tabelaGear from './tableGear';
import { trackEvent } from './analytics';



// eslint-disable-next-line
Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

function DateToStringFormated(date) {
    return date.toLocaleDateString("pt", {
        day: "2-digit",
        month: 'short'
    }).replace(" de ", "/")
      .replace(".",""); //  Remove period on end of month at Chrome browser;
}

function isSameDay(dateToCheck, dateToCheck2) {
    return (dateToCheck.getDate() === dateToCheck2.getDate() 
        && dateToCheck.getMonth() === dateToCheck2.getMonth()
        && dateToCheck.getFullYear() === dateToCheck2.getFullYear());
}

function isToday(dateToCheck) {
    return isSameDay(dateToCheck, (new Date()));
}

const weekDay = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

const styleClassDay = function(inProp) {
    let redThing = ['F', 0, 6];
    return redThing.includes(inProp) ? "tdF" : "";
};

const styleClassWeekDay = function(inProp) {
    let trClassList = {0: 'trSunday', 1: 'trMonday', 2: 'trTuesday', 3: 'trWednesday', 4: 'trThursday', 5: 'trFriday', 6: 'trSaturday'};
    return trClassList[inProp.getDay()]
};
const styleClassToday = function(inProp) {
    return isToday(inProp) ? "tdToday": "";
}
const eventClick = function(inLog) {
    console.log("Click:" + inLog);
    trackEvent('Click', inLog, 'label2');
    return true;
}
const yearTD = (day) => <th className={'tdDate'} onClick={() => eventClick("Ano"+day.getFullYear())}>{day.getFullYear()}</th>;
const weekDayTD = (day) => {           
    let wd = day.getDay();
    let weekLabel = weekDay[wd].toUpperCase();
    return <td className={[styleClassDay(wd), 'tdWeekCol'].join(' ')}>{weekLabel}</td>
}
const dayTDfunc = (day) =>
            day.schedule.map(
                (scale, i) => 
                    <td key={i} className={['tdDayCol' + i, styleClassDay(scale)].join(' ')}>{scale}</td>
            );

function thGroupClick(i, groupName) {
    //alert(i + 'aab:' + groupName);
    document.querySelectorAll('.tdDayCol' + i).forEach(function (el) {
        el.classList.toggle('backSelected');
    });
    eventClick("Grupo "+groupName);
    
} 

const groupsTD = (groups) => 
    groups.map((groupName, i) =>
        <th key={i} onClick={() => { thGroupClick(i, groupName); }}>{groupName}</th>
    );

const daysTR = (daysIn) => daysIn.map((day, i) =>
    <tr key={i} className={[styleClassWeekDay(day.day), 'trTable'].join(' ')}>
    <td key={i} className={['tdDate', styleClassToday(day.day)].join(' ')} > {DateToStringFormated(day.day)}</td> 
        {weekDayTD(day.day)} 
        {dayTDfunc(day)} 
    </tr>
);

/* <th>{objMonthScales[0].day.toLocaleDateString("pt")}</th> */
const monthTRHeader = (objMonthScales) =>
    (   
        <tr className={'trHead'}>
            {yearTD(objMonthScales[0].day)}
            <th>&nbsp;</th> 
            {groupsTD(objMonthScales[0].groups)} 
        </tr> 
        
    );
const monthTRsComplete = (daysIn) => ([monthTRHeader(daysIn), daysTR(daysIn)]);
const tBodyTable = (monthsTRsIn) =>  (<tbody>{monthsTRsIn}</tbody>)


function getDistFromBottom () {
  
    var scrollPosition = window.pageYOffset;
    var windowSize     = window.innerHeight;
    var bodyHeight     = document.body.offsetHeight;
    return Math.max(bodyHeight - (scrollPosition + windowSize), 0);  
  }


class Tabela2 extends React.Component {

    constructor(props) {
        super(props);

        const { tableName } = this.props;
        this.setState({tableEra: tableName});
        this.initTableComponent();

    }

    initTableComponent() {  
        const tableName = this.props.tableName;
        
        tabelaGear.populateTableDate(tableName);
        const dateIn = new Date(); // GetToday
        const days = tabelaGear.getMonthScales(dateIn);

        let beforeFirstMonthDay = new Date(dateIn.getFullYear(), dateIn.getMonth()-1, 1);
        let daysbefore = tabelaGear.getMonthScales(beforeFirstMonthDay);
        
        // eslint-disable-next-line
        this.state = { 
            tableInput: tableName,
            dayOne: dateIn,
            actualDay: dateIn,
            monthsTRs: [monthTRsComplete(daysbefore), monthTRsComplete(days)],
        }
    }

    tick()   {
        const dateIn = this.state.actualDay;
        let nextFirstMonthDay = new Date(dateIn.getFullYear(), dateIn.getMonth()+1, 1);
        let nextMonthScale = tabelaGear.getMonthScales(nextFirstMonthDay);

        this.setState({
            monthsTRs: [
                ...this.state.monthsTRs,
                monthTRsComplete(nextMonthScale)
             ],
             actualDay: nextFirstMonthDay
         });
        
        // Track month loading
        let trackAction = dateIn.getFullYear()+"-"+(dateIn.getMonth()+1);
        console.log(trackAction);
        trackEvent('Navigation', trackAction, 'label3');   
     }

     handleScroll() {
        let distToBottom = getDistFromBottom();
        if (distToBottom > 0 && distToBottom <= 1400) { // Near end;
            let extTick = this.tick.bind(this);
            extTick();
        }
     }

    componentDidMount() {

        //console.log(this.props.groupSelected);
        
        let txtGroupSeleced = this.props.groupSelected;
        if (txtGroupSeleced !== undefined) {
            var xpath = "//th[text()='" + txtGroupSeleced + "']";
            var matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            matchingElement.click();
            console.log("Mathing");
            console.log(matchingElement);
        }
        
        document.addEventListener('scroll', this.handleScroll.bind(this));
        
        // eslint-disable-next-line
        let timer = setTimeout(function () { // Wait 50ms and set scrool to TODAY
            window.scrollTo(0, document.getElementsByClassName("tdToday")[0].offsetTop - 135); //era 88 
        }, 50);
        
        let extTick = this.tick.bind(this); // To use method in next line
        extTick(); // Load next month as DidMount.

        let timer2 = setTimeout(function () { // Wait 80ms and alert user
            let alert_table = this.state.tableInput.localeCompare("Refap0") === 0;
            if (alert_table) {
                alert("Aguardando definição oficial da empresa para atualizar tabela.");
                trackEvent('UserAlert', 'AlertToscoEsperandoTabelaOficial', 'label4'); 
            }
        }, 80);

    }

    
    componentDidUpdate(prevProps) {
        if (this.props.tableName !== prevProps.tableName) {
          this.initTableComponent();
          let extTick = this.tick.bind(this);
          extTick();
        }
      }

    render() {  

        return ( 
            /* <div className="tbContainer">*/
            <table className={'tbMain'}>
                {tBodyTable(this.state.monthsTRs)}
            </table>
            /*</div>*/
        )
    }
}


Tabela2.propTypes = {
    //classes: PropTypes.object.isRequired,
};


export default Tabela2;