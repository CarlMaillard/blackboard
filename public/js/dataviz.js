
var ctx = document.getElementById('chartBar');

    var numFemale = ctx.dataset.female;
    var numMale = ctx.dataset.male;

    var data = [numMale, numFemale]

    var labels =['female', 'male']

var firstChart = new Chart(ctx, {

    type: 'bar',   
    data: {
       labels: labels,
       datasets: [{
           label:'Utilisateurs par sexe',
           data: data,
           backgroundColor: [
            '#3498db',
            '#f1c40f',
            
           ],
           borderWidth:1,
       }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {  
                    beginAtZero: true
                }    
            }]
        } ,
        legend: {
            display: false,
        }
    }

});

var ctx = document.getElementById('doughnut');

var messLu = ctx.dataset.lu
var messNonlu = ctx.dataset.nonlu

var data = [messLu, messNonlu]

var labels = ['lu', 'non lu']

var firstChart = new Chart(ctx, {

    type: 'doughnut',   
    data: {
       labels: labels,
       datasets: [{
           label:'messages',
           data: data,
           backgroundColor: [
            '#2ecc71',
            '#e67e22',
           
           ],
           borderWidth:1,
       }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

});

var ctx = document.getElementById('chartpie');

var exp = ctx.dataset.exp
var nonExp = ctx.dataset.nonexp

var data = [exp, nonExp]

var labels = ['expédiée', 'non expédiée']

var firstChart = new Chart(ctx, {

    type: 'pie',   
    data: {
       labels: labels,
       datasets: [{
           label:'commandes',
           data: data,
           backgroundColor: [
            '#16a085',
            '#f1c40f '
     
           ],
           borderWidth:1,
       }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

});

var ctx = document.getElementById('linechart');

    var data = JSON.parse(ctx.dataset.chartviz);
  
    var userCountByMonthLabels = []
    var userCountByMonthDataResults  = []

    for(var i=0; i<data.length; i++){
        var date =  new Date( (data[i]._id.year),(data[i]._id.month - 1), 1)
        var month = date.toLocaleString('default', {month: 'long'})
    
        userCountByMonthLabels.push(month)

        userCountByMonthDataResults.push(data[i].CA)

    }
var firstChart = new Chart(ctx, {

    type: 'line',   
    data: {
       labels: userCountByMonthLabels ,
       datasets: [{
           data: userCountByMonthDataResults,
           backgroundColor: '#f8c291',
           borderColor: '#e55039',
       }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {  
                    beginAtZero: true
                }    
            }]
        } ,
        legend: {
            display: false,
        }
    }

});


