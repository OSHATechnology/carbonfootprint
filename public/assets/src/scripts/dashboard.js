
var totalConsumptionEnergy, totalProductionOutput, workingDays;
var konversiEmisiValue = {
    batuBara  : 2.9,
    bensin    : 2.35,
    solar     : 2.7,
    minyakTanah :	2.6,
    biomassa  : 0,
    ethanol   : 1.51,
    biodessel : 2.524,
    lpg       : 1.5,
    kayuBakar : 1.835
};

var konversiEnergiValue = {
    batuBara  : 23060,
    bensin    : 33025,
    solar     : 36645,
    minyakTanah : 34800,
    biomassa  : 14444,
    ethanol   : 22351,
    biodessel : 33344,
    lpg       : 24121,
    kayuBakar : 14666
};

var welding = [
    {
        name: 'electricity',
        value: 27358.07,
    },
    {
        name: 'fuel',
        value: 9491.52,
    },
    {
        name: 'gas',
        value: 105.56
    }     
];

var painting = [
    {
        name: 'electricity',
        value: 19333.33,
    },
    {
        name: 'fuel',
        value: 9346.73,
    },
    {
        name: 'gas',
        value: 124.3
    }     
];

var press = [
    {
        name: 'electricity',
        value: 26269.32,
    },
    {
        name: 'fuel',
        value: 3970.87,
    },
    {
        name: 'gas',
        value: 129.17
    }     
];

var assy = [
    {
        name: 'electricity',
        value: 20751.02,
    },
    {
        name: 'fuel',
        value: 3033.213,
    },
    {
        name: 'gas',
        value: 65.28
    }     
];

var diagramWelding = 0;
var resultKonversiEmisi = {};
var resultWelding, resultPainting, resultAssy, resultPress, avgWelding, avgPainting, avgPress, avgAssy, sumAll;
var avgEmisi = 0;

$('.reset').on('click', function() {
    document.getElementById("form-input").reset();
})

$('.btn-calculate').on('click', function() {
    $('.class-welding').html('')
    $('.class-painting').html('')
    $('.class-press').html('')
    $('.class-assy').html('')
    totalConsumptionEnergy = $('.name-of-consumption-energy').val()
    totalProductionOutput = $('.name-of-name-of-total-production-output').val()

    resultKonversiEmisi = {
        batuBara : (totalConsumptionEnergy / konversiEnergiValue.batuBara) * konversiEmisiValue.batuBara,
        bensin : (totalConsumptionEnergy / konversiEnergiValue.bensin) * konversiEmisiValue.bensin,
        solar : (totalConsumptionEnergy / konversiEnergiValue.solar) * konversiEmisiValue.solar,
        minyakTanah : (totalConsumptionEnergy / konversiEnergiValue.minyakTanah) * konversiEmisiValue.minyakTanah,
        biomassa : (totalConsumptionEnergy / konversiEnergiValue.biomassa) * konversiEmisiValue.biomassa,
        ethanol : (totalConsumptionEnergy / konversiEnergiValue.ethanol) * konversiEmisiValue.ethanol,
        biodessel : (totalConsumptionEnergy / konversiEnergiValue.biodessel) * konversiEmisiValue.biodessel,
        lpg : (totalConsumptionEnergy / konversiEnergiValue.lpg) * konversiEmisiValue.lpg,
        kayuBakar : (totalConsumptionEnergy / konversiEnergiValue.kayuBakar)* konversiEmisiValue.kayuBakar,
    }

    resultWelding = 0;
    resultPainting = 0;
    resultPress = 0;
    resultAssy = 0;
    avgEmisi = (resultKonversiEmisi.batuBara + resultKonversiEmisi.bensin + resultKonversiEmisi.solar + resultKonversiEmisi.minyakTanah + resultKonversiEmisi.biomassa + resultKonversiEmisi.ethanol + resultKonversiEmisi.biodessel + resultKonversiEmisi.lpg + resultKonversiEmisi.kayuBakar) / 9; 
    for(let i = 0; i < welding.length; i++) {
        resultWelding = resultWelding + (welding[i].value * avgEmisi);
        resultPainting = resultPainting + (painting[i].value * avgEmisi);
        resultAssy = resultAssy + (assy[i].value * avgEmisi);
        resultPress = resultPress + (press[i].value * avgEmisi);
    }

    avgAssy = (resultAssy/3)/1000;
    avgPress = (resultPress/3)/1000;
    avgPainting = (resultPainting/3)/1000;
    avgWelding = (resultWelding/3)/1000;

    sumAll = avgAssy+avgPainting+avgPress+avgWelding;

    $('.total-emission-produk-welding').html(`<small class="text-muted">Total Emission <b>${sumAll.toFixed(3)}/TonsCO2e<b></small>`)
    $('.total-emission-produk-painting').html(`<small class="text-muted">Total Emission <b>${sumAll.toFixed(3)}/TonsCO2e<b></small>`)
    $('.total-emission-produk-press').html(`<small class="text-muted">Total Emission <b>${sumAll.toFixed(3)}/TonsCO2e<b></small>`)
    $('.total-emission-produk-assy').html(`<small class="text-muted">Total Emission <b>${sumAll.toFixed(3)}/TonsCO2e<b></small>`)
    
    $('.class-total-perproduk-welding').html(`${avgWelding.toFixed(3)}<small class="text-muted">/Ton</small>`)
    $('.class-total-perproduk-painting').html(`${avgPainting.toFixed(3)}<small class="text-muted">/Ton</small>`)
    $('.class-total-perproduk-assy').html(`${avgAssy.toFixed(3)}<small class="text-muted">/Ton</small>`)
    $('.class-total-perproduk-press').html(`${avgPress.toFixed(3)}<small class="text-muted">/Ton</small>`)

    workingDays = $('.name-of-working-days').val()
    var randomHours = Math.floor(Math.random(5)*24);
    var randomMinutes = Math.floor(Math.random()*60);
    diagramWelding = ((avgWelding/sumAll)*100).toFixed(2);
    diagramAssy = ((avgAssy/sumAll)*100).toFixed(2);
    diagramPainting = ((avgPainting/sumAll)*100).toFixed(2);
    diagramPress = ((avgPress/sumAll)*100).toFixed(2);
    $('.production-time').html(`${randomHours}h ${randomMinutes}m`);
    $('.total-emission-cylinder-block').html(`${(sumAll/11).toFixed(3)}`);

    var data = {
        assy: avgAssy,
        press: avgPress,
        painting: avgPainting,
        welding: avgWelding
    }
    
    console.log(data, 'data')
    charts(diagramWelding, diagramAssy, diagramPainting, diagramPress, sumAll, avgAssy, avgPainting, avgPress, avgWelding)
})

function charts(diagramWelding, diagramAssy, diagramPainting, diagramPress, sumAll, avgAssy, avgPainting, avgPress, avgWelding) {
    var options9 = {
        series: [diagramWelding, diagramAssy, diagramPainting, diagramPress],
        chart: {
            height: 390,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                offsetY: 0,
                startAngle: 0,
                endAngle: 270,
                hollow: {
                    margin: 5,
                    size: '40%',
                    background: 'transparent',
                    image: undefined,
                },
                dataLabels: {
                    name: {
                        show: false,
                    },
                    value: {
                        show: false,
                    }
                }
            }
        },
        colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
        labels: ['Welding', 'Assy', 'Painting', 'Press'],
        legend: {
            show: true,
            floating: true,
            fontSize: '14px',
            position: 'left',
            offsetX: 40,
            offsetY: 15,
            labels: {
                useSeriesColors: true,
            },
            markers: {
                size: 0
            },
            formatter: function(seriesName, opts) {
                return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
            },
            itemMargin: {
                vertical: 3
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    show: false
                }
            }
        }]
    };

    var options6 = {
        series: [(sumAll/11).toFixed(0)],
        chart: {
          height: 350,
          type: 'radialBar',
          offsetY: 0
        },
        colors: ['#0B132B', '#222222'],
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
              name: {
                fontSize: '16px',
                color: undefined,
                offsetY: 120
              },
              value: {
                offsetY: 76,
                fontSize: '22px',
                color: undefined,
                formatter: function (val) {
                  return val + "%";
                }
              }
            }
          }
        },
        fill: {
          type: 'gradient',
          gradient: {
              shade: 'dark',
              shadeIntensity: 0.15,
              inverseColors: false,
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 50, 65, 91]
          },
        },
        stroke: {
          dashArray: 4
        },
        labels: ['Target Emission'],
    };

    var chart6 = new ApexCharts(document.querySelector("#chartLoadTarget"), options6);
    chart6.render();
    let diargamtoChart = {diagramWelding}
    console.log(diagramWelding, diagramPainting, diagramPress, diagramAssy, diargamtoChart)
    Highcharts.chart('chart9', {
        chart: {
            type: 'column'
        },
        xAxis: {
            categories: [
            'Welding',
            'Painting',
            'Press',
            'Assy',
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Emission (TonsCO2e)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} TonsCO2e</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Emission',
            data: [parseFloat(avgWelding), parseFloat(avgPainting), parseFloat(avgPress), parseFloat(avgAssy)]
    
        },]
    });
    
}

function chart(diagramWelding = 0) {
    var options = {
        series: [diagramWelding],
        grid: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        chart: {
            height: 100,
            width: 70,
            type: 'radialBar',
        },	
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '50%',
                },
                dataLabels: {
                    name: {
                        show: false,
                        color: '#fff'
                    },
                    value: {
                        show: true,
                        color: '#333',
                        offsetY: 5,
                        fontSize: '15px'
                    }
                }
            }
        },
        colors: ['#ecf0f4'],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'diagonal1',
                shadeIntensity: 0.8,
                gradientToColors: ['#1b00ff'],
                inverseColors: false,
                opacityFrom: [1, 0.2],
                opacityTo: 1,
                stops: [0, 100],
            }
        },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            active: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
        }
    };

    var chart = new ApexCharts(document.querySelector("#chartWeldingLoad"), options);
    chart.render();
}

function chartPainting(diagramPainting) {
    var options2 = {
        series: [diagramPainting],
        grid: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        chart: {
            height: 100,
            width: 70,
            type: 'radialBar',
        },	
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '50%',
                },
                dataLabels: {
                    name: {
                        show: false,
                        color: '#fff'
                    },
                    value: {
                        show: true,
                        color: '#333',
                        offsetY: 5,
                        fontSize: '15px'
                    }
                }
            }
        },
        colors: ['#ecf0f4'],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'diagonal1',
                shadeIntensity: 1,
                gradientToColors: ['#009688'],
                inverseColors: false,
                opacityFrom: [1, 0.2],
                opacityTo: 1,
                stops: [0, 100],
            }
        },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            active: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
        }
    };

    var chart2 = new ApexCharts(document.querySelector("#chartPaintingLoad"), options2);
    chart2.render();
}

function chartPress(diagramPress) {
    var options3 = {
        series: [diagramPress],
        grid: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        chart: {
            height: 100,
            width: 70,
            type: 'radialBar',
        },	
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '50%',
                },
                dataLabels: {
                    name: {
                        show: false,
                        color: '#fff'
                    },
                    value: {
                        show: true,
                        color: '#333',
                        offsetY: 5,
                        fontSize: '15px'
                    }
                }
            }
        },
        colors: ['#ecf0f4'],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'diagonal1',
                shadeIntensity: 0.8,
                gradientToColors: ['#f56767'],
                inverseColors: false,
                opacityFrom: [1, 0.2],
                opacityTo: 1,
                stops: [0, 100],
            }
        },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            active: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
        }
    };

    var chart4 = new ApexCharts(document.querySelector("#chartPressLoad"), options3);
    chart4.render();
}

function chartAssy(diagramAssy) {
    var options4 = {
        series: [diagramAssy],
        grid: {
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },
        },
        chart: {
            height: 100,
            width: 70,
            type: 'radialBar',
        },	
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '50%',
                },
                dataLabels: {
                    name: {
                        show: false,
                        color: '#fff'
                    },
                    value: {
                        show: true,
                        color: '#333',
                        offsetY: 5,
                        fontSize: '15px'
                    }
                }
            }
        },
        colors: ['#ecf0f4'],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'diagonal1',
                shadeIntensity: 0.8,
                gradientToColors: ['#2979ff'],
                inverseColors: false,
                opacityFrom: [1, 0.5],
                opacityTo: 1,
                stops: [0, 100],
            }
        },
        states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            active: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
        }
    };

    

    var chart3 = new ApexCharts(document.querySelector("#chartAssyLoad"), options4);
    chart3.render();


}


var options5 = {
	chart: {
		height: 350,
		type: 'bar',
		parentHeightOffset: 0,
		fontFamily: 'Poppins, sans-serif',
		toolbar: {
			show: false,
		},
	},
	colors: ['#1b00ff', '#f56767'],
	grid: {
		borderColor: '#c7d2dd',
		strokeDashArray: 5,
	},
	plotOptions: {
		bar: {
			horizontal: false,
			columnWidth: '25%',
			endingShape: 'rounded'
		},
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		show: true,
		width: 2,
		colors: ['transparent']
	},
	series: [{
		name: 'In Progress',
		data: [40, 28, 47, 22, 34, 25]
	}, {
		name: 'Complete',
		data: [30, 20, 37, 10, 28, 11]
	}],
	xaxis: {
		categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
		labels: {
			style: {
				colors: ['#353535'],
				fontSize: '16px',
			},
		},
		axisBorder: {
			color: '#8fa6bc',
		}
	},
	yaxis: {
		title: {
			text: ''
		},
		labels: {
			style: {
				colors: '#353535',
				fontSize: '16px',
			},
		},
		axisBorder: {
			color: '#f00',
		}
	},
	legend: {
		horizontalAlign: 'right',
		position: 'top',
		fontSize: '16px',
		offsetY: 0,
		labels: {
			colors: '#353535',
		},
		markers: {
			width: 10,
			height: 10,
			radius: 15,
		},
		itemMargin: {
			vertical: 0
		},
	},
	fill: {
		opacity: 1

	},
	tooltip: {
		style: {
			fontSize: '15px',
			fontFamily: 'Poppins, sans-serif',
		},
		y: {
			formatter: function (val) {
				return val
			}
		}
	}
}

var options6 = {
	series: [73],
	chart: {
	  height: 350,
	  type: 'radialBar',
	  offsetY: 0
	},
	colors: ['#0B132B', '#222222'],
	plotOptions: {
	  radialBar: {
		startAngle: -135,
		endAngle: 135,
		dataLabels: {
		  name: {
			fontSize: '16px',
			color: undefined,
			offsetY: 120
		  },
		  value: {
			offsetY: 76,
			fontSize: '22px',
			color: undefined,
			formatter: function (val) {
			  return val + "%";
			}
		  }
		}
	  }
	},
	fill: {
	  type: 'gradient',
	  gradient: {
		  shade: 'dark',
		  shadeIntensity: 0.15,
		  inverseColors: false,
		  opacityFrom: 1,
		  opacityTo: 1,
		  stops: [0, 50, 65, 91]
	  },
	},
	stroke: {
	  dashArray: 4
	},
	labels: ['Achieve Goals'],
};



// datatable init
$('document').ready(function(){
	$('.data-table').DataTable({
		scrollCollapse: true,
		autoWidth: true,
		responsive: true,
		searching: false,
		bLengthChange: false,
		bPaginate: false,
		bInfo: false,
		columnDefs: [{
			targets: "datatable-nosort",
			orderable: false,
		}],
		"lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
		"language": {
			"info": "_START_-_END_ of _TOTAL_ entries",
			searchPlaceholder: "Search",
			paginate: {
				next: '<i class="ion-chevron-right"></i>',
				previous: '<i class="ion-chevron-left"></i>'  
			}
		},
	});
});