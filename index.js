// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Sort an array by date (string )</h1>`;

const list = [
		{
			"id": 402989,
			"shiftDate": "2018-09-28",
			"date": "2018-09-28",
			"time": "18:05:00.0",
			"milk": 0,
			"kind": "1",
			"milkSpeed": 0,
			"milkDuration": 3900,
			"indicatieAlternerend": false,
			"milkStandNo": 0,
			"status": 0
		},
{
			"id": 379707,
			"shiftDate": "2018-05-11",
			"date": "2018-05-11",
			"time": "06:30:00.0",
			"milk": 0,
			"kind": "1",
			"milkSpeed": 0,
			"milkDuration": 4500,
			"indicatieAlternerend": false,
			"milkStandNo": 0,
			"status": 0
		},
		{
			"id": 379708,
			"shiftDate": "2018-05-11",
			"date": "2018-05-11",
			"time": "18:00:00.0",
			"milk": 0,
			"kind": "1",
			"milkSpeed": 0,
			"milkDuration": 4500,
			"indicatieAlternerend": false,
			"milkStandNo": 0,
			"status": 0
		},
		{
			"id": 384420,
			"shiftDate": "2018-06-08",
			"date": "2018-06-08",
			"time": "06:30:00.0",
			"milk": 0,
			"kind": "1",
			"milkSpeed": 0,
			"milkDuration": 4200,
			"indicatieAlternerend": false,
			"milkStandNo": 0,
			"status": 0
		},
		{
			"id": 384421,
			"shiftDate": "2018-06-08",
			"date": "2018-06-08",
			"time": "18:00:00.0",
			"milk": 0,
			"kind": "1",
			"milkSpeed": 0,
			"milkDuration": 4200,
			"indicatieAlternerend": false,
			"milkStandNo": 0,
			"status": 0
		},
		{
			"id": 389078,
			"shiftDate": "2018-07-06",
			"date": "2018-07-06",
			"time": "06:30:00.0",
			"milk": 0,
			"kind": "1",
			"milkSpeed": 0,
			"milkDuration": 3600,
			"indicatieAlternerend": false,
			"milkStandNo": 0,
			"status": 0
		},
		{
			"id": 389079,
			"shiftDate": "2018-07-06",
			"date": "2018-07-06",
			"time": "18:00:00.0",
			"milk": 0,
			"kind": "1",
			"milkSpeed": 0,
			"milkDuration": 3600,
			"indicatieAlternerend": false,
			"milkStandNo": 0,
			"status": 0
		},
		{
			"id": 393841,
			"shiftDate": "2018-08-03",
			"date": "2018-08-03",
			"time": "06:25:00.0",
			"milk": 0,
			"kind": "1",
			"milkSpeed": 0,
			"milkDuration": 3900,
			"indicatieAlternerend": false,
			"milkStandNo": 0,
			"status": 0
		},
		{
			"id": 393842,
			"shiftDate": "2018-08-03",
			"date": "2018-08-03",
			"time": "18:05:00.0",
			"milk": 0,
			"kind": "1",
			"milkSpeed": 0,
			"milkDuration": 3900,
			"indicatieAlternerend": false,
			"milkStandNo": 0,
			"status": 0
		},
		{
			"id": 398409,
			"shiftDate": "2018-08-31",
			"date": "2018-08-31",
			"time": "06:15:00.0",
			"milk": 0,
			"kind": "1",
			"milkSpeed": 0,
			"milkDuration": 3600,
			"indicatieAlternerend": false,
			"milkStandNo": 0,
			"status": 0
		},
		{
			"id": 398410,
			"shiftDate": "2018-08-31",
			"date": "2018-08-31",
			"time": "18:00:00.0",
			"milk": 0,
			"kind": "1",
			"milkSpeed": 0,
			"milkDuration": 3600,
			"indicatieAlternerend": false,
			"milkStandNo": 0,
			"status": 0
		}];
const slicedList = list.slice().sort((e1, e2) => new Date(e1.date).getTime() - new Date(e2.date).getTime());
const spreadList1 = [...list].sort((e1, e2) => new Date(e1.date).getTime() - new Date(e2.date).getTime());

console.log(list);
console.log(slicedList);
console.log(spreadList1);