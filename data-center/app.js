const mockData = {
    examData: [384200, 384500, 384650, 384780, 384867, 385179, 384867],
    libraryData: [104550, 104580, 104600, 104620, 104642, 104648, 104652],
    libraryVisitData: [8520, 9130, 8980, 9450, 9780, 10230, 10560],
    libraryDownloadData: [3250, 3680, 3490, 3820, 4120, 4350, 4680],
    dailyExamPeople: [9800, 10500, 11200, 10800, 11600, 12000, 12580],
    dailyExamSessions: [2600, 2850, 3100, 2950, 3200, 3300, 3420],
    dailyExamUnits: [120, 130, 142, 138, 148, 152, 156],
    dailyPracticePeople: [14500, 15200, 16300, 15800, 17200, 17900, 18650],
    dailyPracticeUnits: [180, 195, 210, 205, 220, 225, 234],
    dailyPracticeQuestions: [185000, 198000, 212000, 205000, 228000, 236000, 245890],
    dailyTrainingPeople: [6200, 6600, 7100, 6800, 7300, 7550, 7890],
    dailyTrainingUnits: [75, 82, 88, 85, 92, 95, 98],
    dailyTrainingTraffic: [68.5, 72.3, 78.6, 75.2, 82.4, 85.8, 89.5],
    dates: ['4月8日', '4月9日', '4月10日', '4月11日', '4月12日', '4月13日', '4月14日'],
    examCustomers: [
        { name: '常州市第一人民医院', count: 687, participations: 1523, signedCustomer: '已签单客户', trainingStatus: '已签培训', manager: '张经理', trend: 'up' },
        { name: '泰兴市人民医院', count: 542, participations: 1234, signedCustomer: '已签单客户', trainingStatus: '试用已到期', manager: '李经理', trend: 'up' },
        { name: '宣城市中心医院', count: 456, participations: 987, signedCustomer: '未签单客户', trainingStatus: '未开通试用', manager: '王经理', trend: 'stable' },
        { name: '日照市中心医院', count: 412, participations: 876, signedCustomer: '已签单客户', trainingStatus: '已签培训', manager: '赵经理', trend: 'up' },
        { name: '宿州市第一人民医院', count: 389, participations: 765, signedCustomer: '未签单客户', trainingStatus: '未开通试用', manager: '刘经理', trend: 'down' },
        { name: '镇江市第一人民医院', count: 356, participations: 654, signedCustomer: '已签单客户', trainingStatus: '已签培训', manager: '陈经理', trend: 'up' },
        { name: '涟水县人民医院', count: 321, participations: 543, signedCustomer: '未签单客户', trainingStatus: '试用已到期', manager: '周经理', trend: 'stable' },
        { name: '溧阳市人民医院', count: 298, participations: 498, signedCustomer: '已签单客户', trainingStatus: '已签培训', manager: '吴经理', trend: 'up' },
        { name: '解放军东部战区总医院', count: 276, participations: 456, signedCustomer: '已签单客户', trainingStatus: '未开通试用', manager: '郑经理', trend: 'down' },
        { name: '徐州矿务集团总医院', count: 254, participations: 412, signedCustomer: '未签单客户', trainingStatus: '已签培训', manager: '孙经理', trend: 'up' },
        { name: '泰兴市中医院', count: 234, participations: 389, signedCustomer: '已签单客户', trainingStatus: '试用已到期', manager: '钱经理', trend: 'stable' },
        { name: '镇江市中西医结合医院', count: 212, participations: 356, signedCustomer: '未签单客户', trainingStatus: '已签培训', manager: '冯经理', trend: 'up' },
        { name: '丹阳市妇幼保健院', count: 198, participations: 321, signedCustomer: '已签单客户', trainingStatus: '未开通试用', manager: '何经理', trend: 'down' },
        { name: '沭阳医院', count: 176, participations: 298, signedCustomer: '未签单客户', trainingStatus: '已签培训', manager: '许经理', trend: 'up' },
        { name: '解放军东部战区总医院秦淮医疗区', count: 165, participations: 276, signedCustomer: '已签单客户', trainingStatus: '试用已到期', manager: '吕经理', trend: 'stable' },
        { name: '砀山县中医院', count: 154, participations: 254, signedCustomer: '未签单客户', trainingStatus: '已签培训', manager: '施经理', trend: 'up' },
        { name: '丹阳市中医院', count: 143, participations: 234, signedCustomer: '已签单客户', trainingStatus: '未开通试用', manager: '张经理', trend: 'down' },
        { name: '泰州市第五人民医院', count: 132, participations: 212, signedCustomer: '未签单客户', trainingStatus: '已签培训', manager: '曹经理', trend: 'up' },
        { name: '凤阳县中医院', count: 121, participations: 198, signedCustomer: '已签单客户', trainingStatus: '试用已到期', manager: '严经理', trend: 'stable' },
        { name: '东部战区空军医院', count: 110, participations: 176, signedCustomer: '未签单客户', trainingStatus: '已签培训', manager: '华经理', trend: 'up' }
    ],
    practiceCustomers: [
        { name: '江苏省人民医院', count: 892, participations: 2134, manager: '张经理', trend: 'up' },
        { name: '南京鼓楼医院', count: 756, participations: 1876, manager: '李经理', trend: 'up' },
        { name: '苏州大学附属第一医院', count: 654, participations: 1654, manager: '王经理', trend: 'stable' },
        { name: '东南大学附属中大医院', count: 587, participations: 1432, manager: '赵经理', trend: 'up' },
        { name: '南京医科大学第一附属医院', count: 534, participations: 1321, manager: '刘经理', trend: 'down' },
        { name: '无锡市人民医院', count: 498, participations: 1210, manager: '陈经理', trend: 'up' },
        { name: '常州市第二人民医院', count: 456, participations: 1098, manager: '周经理', trend: 'stable' },
        { name: '徐州市中心医院', count: 423, participations: 987, manager: '吴经理', trend: 'up' },
        { name: '南通市第一人民医院', count: 389, participations: 876, manager: '郑经理', trend: 'down' },
        { name: '连云港市第一人民医院', count: 356, participations: 765, manager: '孙经理', trend: 'up' },
        { name: '淮安市第一人民医院', count: 321, participations: 654, manager: '钱经理', trend: 'stable' },
        { name: '盐城市第一人民医院', count: 298, participations: 543, manager: '冯经理', trend: 'up' },
        { name: '扬州市第一人民医院', count: 276, participations: 498, manager: '何经理', trend: 'down' },
        { name: '镇江市第一人民医院', count: 254, participations: 456, manager: '许经理', trend: 'up' },
        { name: '泰州市人民医院', count: 234, participations: 412, manager: '吕经理', trend: 'stable' },
        { name: '宿迁市第一人民医院', count: 212, participations: 389, manager: '施经理', trend: 'up' },
        { name: '江苏省中医院', count: 198, participations: 356, manager: '张经理', trend: 'down' },
        { name: '南京市中医院', count: 176, participations: 321, manager: '曹经理', trend: 'up' },
        { name: '苏州市中医院', count: 154, participations: 298, manager: '严经理', trend: 'stable' },
        { name: '常州市中医院', count: 132, participations: 276, manager: '华经理', trend: 'up' }
    ],
    trainingCustomers: [
        { name: '常州市第一人民医院', count: 687, participations: 1523, usedTraffic: 89.5, remainingTraffic: 210.5, signedCustomer: '已签单客户', manager: '张经理', trend: 'up' },
        { name: '泰兴市人民医院', count: 211, participations: 487, usedTraffic: 45.2, remainingTraffic: 154.8, signedCustomer: '已签单客户', manager: '李经理', trend: 'up' },
        { name: '宣城市中心医院', count: 168, participations: 389, usedTraffic: 32.8, remainingTraffic: 167.2, signedCustomer: '潜在客户', manager: '王经理', trend: 'stable' },
        { name: '日照市中心医院', count: 163, participations: 356, usedTraffic: 28.5, remainingTraffic: 171.5, signedCustomer: '已签单客户', manager: '赵经理', trend: 'up' },
        { name: '宿州市第一人民医院', count: 145, participations: 321, usedTraffic: 25.3, remainingTraffic: 174.7, signedCustomer: '潜在客户', manager: '刘经理', trend: 'down' },
        { name: '镇江市第一人民医院', count: 94, participations: 289, usedTraffic: 21.8, remainingTraffic: 178.2, signedCustomer: '已签单客户', manager: '陈经理', trend: 'up' },
        { name: '涟水县人民医院', count: 76, participations: 254, usedTraffic: 18.6, remainingTraffic: 181.4, signedCustomer: '潜在客户', manager: '周经理', trend: 'stable' },
        { name: '溧阳市人民医院', count: 64, participations: 212, usedTraffic: 15.4, remainingTraffic: 184.6, signedCustomer: '已签单客户', manager: '吴经理', trend: 'up' },
        { name: '解放军东部战区总医院', count: 61, participations: 198, usedTraffic: 14.2, remainingTraffic: 185.8, signedCustomer: '已签单客户', manager: '郑经理', trend: 'down' },
        { name: '徐州矿务集团总医院', count: 58, participations: 176, usedTraffic: 12.8, remainingTraffic: 187.2, signedCustomer: '潜在客户', manager: '孙经理', trend: 'up' },
        { name: '泰兴市中医院', count: 50, participations: 154, usedTraffic: 11.5, remainingTraffic: 188.5, signedCustomer: '已签单客户', manager: '钱经理', trend: 'stable' },
        { name: '镇江市中西医结合医院', count: 33, participations: 132, usedTraffic: 9.6, remainingTraffic: 190.4, signedCustomer: '潜在客户', manager: '冯经理', trend: 'up' },
        { name: '丹阳市妇幼保健院', count: 24, participations: 110, usedTraffic: 8.2, remainingTraffic: 191.8, signedCustomer: '已签单客户', manager: '何经理', trend: 'down' },
        { name: '沭阳医院', count: 23, participations: 98, usedTraffic: 7.5, remainingTraffic: 192.5, signedCustomer: '潜在客户', manager: '许经理', trend: 'up' },
        { name: '解放军东部战区总医院秦淮医疗区', count: 21, participations: 87, usedTraffic: 6.8, remainingTraffic: 193.2, signedCustomer: '已签单客户', manager: '吕经理', trend: 'stable' },
        { name: '砀山县中医院', count: 19, participations: 76, usedTraffic: 5.9, remainingTraffic: 194.1, signedCustomer: '潜在客户', manager: '施经理', trend: 'up' },
        { name: '丹阳市中医院', count: 17, participations: 65, usedTraffic: 5.2, remainingTraffic: 194.8, signedCustomer: '已签单客户', manager: '张经理', trend: 'down' },
        { name: '泰州市第五人民医院', count: 16, participations: 54, usedTraffic: 4.6, remainingTraffic: 195.4, signedCustomer: '潜在客户', manager: '曹经理', trend: 'up' },
        { name: '凤阳县中医院', count: 15, participations: 43, usedTraffic: 3.8, remainingTraffic: 196.2, signedCustomer: '已签单客户', manager: '严经理', trend: 'stable' },
        { name: '东部战区空军医院', count: 13, participations: 32, usedTraffic: 3.2, remainingTraffic: 196.8, signedCustomer: '潜在客户', manager: '华经理', trend: 'up' }
    ]
};

let charts = {};

const chartColors = {
    blue: {
        primary: '#00d4ff',
        secondary: '#0099cc',
        light: 'rgba(0, 212, 255, 0.15)',
        medium: 'rgba(0, 212, 255, 0.7)'
    },
    green: {
        primary: '#10b981',
        secondary: '#059669',
        light: 'rgba(16, 185, 129, 0.15)',
        medium: 'rgba(16, 185, 129, 0.7)'
    },
    purple: {
        primary: '#8b5cf6',
        secondary: '#7c3aed',
        light: 'rgba(139, 92, 246, 0.15)',
        medium: 'rgba(139, 92, 246, 0.7)'
    },
    gray: {
        primary: '#9ca3af',
        secondary: '#6b7280',
        light: 'rgba(156, 163, 175, 0.15)',
        medium: 'rgba(156, 163, 175, 0.7)'
    }
};

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
        duration: 1000,
        easing: 'easeOutQuart'
    },
    interaction: {
        intersect: false,
        mode: 'index'
    },
    plugins: {
        legend: {
            display: true,
            position: 'top',
            labels: {
                font: {
                    size: 14,
                    family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto'
                },
                padding: 20,
                usePointStyle: true,
                pointStyle: 'circle',
                color: '#e5e7eb'
            }
        },
        tooltip: {
            backgroundColor: 'rgba(26, 26, 46, 0.98)',
            titleFont: {
                size: 15,
                weight: 'bold'
            },
            bodyFont: {
                size: 14
            },
            padding: 16,
            cornerRadius: 10,
            borderColor: 'rgba(0, 212, 255, 0.5)',
            borderWidth: 1,
            displayColors: true,
            titleColor: '#00d4ff',
            bodyColor: '#e5e7eb'
        }
    },
    scales: {
        y: {
            beginAtZero: false,
            grid: {
                color: 'rgba(0, 212, 255, 0.1)',
                drawBorder: false
            },
            ticks: {
                font: {
                    size: 13
                },
                color: '#9ca3af',
                padding: 10
            }
        },
        x: {
            grid: {
                display: false,
                drawBorder: false
            },
            ticks: {
                font: {
                    size: 13
                },
                color: '#9ca3af',
                padding: 10
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', function() {
    updateCurrentDate();
    initTabs();
    initCharts();
    initButtons();
    initTables();
});

function initTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');

            if (charts[tabId + 'CustomerChart']) {
                charts[tabId + 'CustomerChart'].resize();
            }
        });
    });
}

function initCharts() {
    createExamChart();
    createLibraryChart();
    createLibraryVisitChart();
    createLibraryDownloadChart();
    createDailyExamPeopleChart();
    createDailyExamSessionsChart();
    createDailyExamUnitsChart();
    createDailyPracticePeopleChart();
    createDailyPracticeUnitsChart();
    createDailyPracticeQuestionsChart();
    createDailyTrainingPeopleChart();
    createDailyTrainingUnitsChart();
    createDailyTrainingTrafficChart();
    updateDailyExamStats();
    updateDailyPracticeStats();
    updateDailyTrainingStats();
}

function createExamChart() {
    const ctx = document.getElementById('examChart').getContext('2d');
    charts.examChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: mockData.dates,
            datasets: [{
                label: '考试系统总人数',
                data: mockData.examData,
                borderColor: chartColors.blue.primary,
                backgroundColor: chartColors.blue.light,
                borderWidth: 4,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: chartColors.blue.primary,
                pointBorderColor: '#fff',
                pointBorderWidth: 3,
                pointRadius: 8,
                pointHoverRadius: 12
            }]
        },
        options: {
            ...chartOptions,
            plugins: {
                ...chartOptions.plugins,
                tooltip: {
                    ...chartOptions.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            return `人数: ${context.parsed.y.toLocaleString()}`;
                        }
                    }
                }
            }
        }
    });
}

function createLibraryChart() {
    const ctx = document.getElementById('libraryChart').getContext('2d');
    charts.libraryChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: mockData.dates,
            datasets: [{
                label: '图书馆平台总人数',
                data: mockData.libraryData,
                borderColor: chartColors.green.primary,
                backgroundColor: chartColors.green.light,
                borderWidth: 4,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: chartColors.green.primary,
                pointBorderColor: '#fff',
                pointBorderWidth: 3,
                pointRadius: 8,
                pointHoverRadius: 12
            }]
        },
        options: {
            ...chartOptions,
            plugins: {
                ...chartOptions.plugins,
                tooltip: {
                    ...chartOptions.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            return `人数: ${context.parsed.y.toLocaleString()}`;
                        }
                    }
                }
            }
        }
    });
}

function createLibraryVisitChart() {
    const ctx = document.getElementById('libraryVisitChart').getContext('2d');
    charts.libraryVisitChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: mockData.dates,
            datasets: [{
                label: '用户每日访问量',
                data: mockData.libraryVisitData,
                backgroundColor: 'rgba(20, 184, 166, 0.7)',
                borderColor: '#14b8a6',
                borderWidth: 3,
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            ...chartOptions,
            scales: {
                ...chartOptions.scales,
                y: {
                    ...chartOptions.scales.y,
                    beginAtZero: true
                }
            },
            plugins: {
                ...chartOptions.plugins,
                tooltip: {
                    ...chartOptions.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            return `访问量: ${context.parsed.y.toLocaleString()}`;
                        }
                    }
                }
            }
        }
    });
}

function createLibraryDownloadChart() {
    const ctx = document.getElementById('libraryDownloadChart').getContext('2d');
    charts.libraryDownloadChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: mockData.dates,
            datasets: [{
                label: '文献每日下载量',
                data: mockData.libraryDownloadData,
                backgroundColor: 'rgba(99, 102, 241, 0.7)',
                borderColor: '#6366f1',
                borderWidth: 3,
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            ...chartOptions,
            scales: {
                ...chartOptions.scales,
                y: {
                    ...chartOptions.scales.y,
                    beginAtZero: true
                }
            },
            plugins: {
                ...chartOptions.plugins,
                tooltip: {
                    ...chartOptions.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            return `下载量: ${context.parsed.y.toLocaleString()}`;
                        }
                    }
                }
            }
        }
    });
}

function createDailyExamPeopleChart() {
    const ctx = document.getElementById('dailyExamPeopleChart').getContext('2d');
    charts.dailyExamPeopleChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: mockData.dates,
            datasets: [{
                label: '每日参考人数',
                data: mockData.dailyExamPeople,
                borderColor: chartColors.blue.primary,
                backgroundColor: chartColors.blue.light,
                borderWidth: 4,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: chartColors.blue.primary,
                pointBorderColor: '#fff',
                pointBorderWidth: 3,
                pointRadius: 8,
                pointHoverRadius: 12
            }]
        },
        options: {
            ...chartOptions,
            plugins: {
                ...chartOptions.plugins,
                tooltip: {
                    ...chartOptions.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            return `参考人数: ${context.parsed.y.toLocaleString()}人`;
                        }
                    }
                }
            }
        }
    });
}

function createDailyExamSessionsChart() {
    const ctx = document.getElementById('dailyExamSessionsChart').getContext('2d');
    charts.dailyExamSessionsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: mockData.dates,
            datasets: [{
                label: '每日考试场次',
                data: mockData.dailyExamSessions,
                backgroundColor: 'rgba(139, 92, 246, 0.7)',
                borderColor: '#8b5cf6',
                borderWidth: 3,
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            ...chartOptions,
            scales: {
                ...chartOptions.scales,
                y: {
                    ...chartOptions.scales.y,
                    beginAtZero: true
                }
            },
            plugins: {
                ...chartOptions.plugins,
                tooltip: {
                    ...chartOptions.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            return `考试场次: ${context.parsed.y.toLocaleString()}次`;
                        }
                    }
                }
            }
        }
    });
}

function createDailyExamUnitsChart() {
    const ctx = document.getElementById('dailyExamUnitsChart').getContext('2d');
    charts.dailyExamUnitsChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: mockData.dates,
            datasets: [{
                label: '每日参考单位',
                data: mockData.dailyExamUnits,
                borderColor: chartColors.green.primary,
                backgroundColor: chartColors.green.light,
                borderWidth: 4,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: chartColors.green.primary,
                pointBorderColor: '#fff',
                pointBorderWidth: 3,
                pointRadius: 8,
                pointHoverRadius: 12
            }]
        },
        options: {
            ...chartOptions,
            plugins: {
                ...chartOptions.plugins,
                tooltip: {
                    ...chartOptions.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            return `参考单位: ${context.parsed.y.toLocaleString()}家`;
                        }
                    }
                }
            }
        }
    });
}

function updateDailyExamStats() {
    const people = mockData.dailyExamPeople[mockData.dailyExamPeople.length - 1];
    const sessions = mockData.dailyExamSessions[mockData.dailyExamSessions.length - 1];
    const units = mockData.dailyExamUnits[mockData.dailyExamUnits.length - 1];
    
    const peopleYesterday = mockData.dailyExamPeople[mockData.dailyExamPeople.length - 2];
    const sessionsYesterday = mockData.dailyExamSessions[mockData.dailyExamSessions.length - 2];
    const unitsYesterday = mockData.dailyExamUnits[mockData.dailyExamUnits.length - 2];
    
    document.getElementById('dailyExamPeople').textContent = people.toLocaleString();
    document.getElementById('dailyExamSessions').textContent = sessions.toLocaleString();
    document.getElementById('dailyExamUnits').textContent = units.toLocaleString();
}

function createDailyPracticePeopleChart() {
    const ctx = document.getElementById('dailyPracticePeopleChart').getContext('2d');
    charts.dailyPracticePeopleChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: mockData.dates,
            datasets: [{
                label: '每日练习人数',
                data: mockData.dailyPracticePeople,
                borderColor: '#8b5cf6',
                backgroundColor: 'rgba(139, 92, 246, 0.1)',
                borderWidth: 4,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#8b5cf6',
                pointBorderColor: '#fff',
                pointBorderWidth: 3,
                pointRadius: 8,
                pointHoverRadius: 12
            }]
        },
        options: {
            ...chartOptions,
            plugins: {
                ...chartOptions.plugins,
                tooltip: {
                    ...chartOptions.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            return `练习人数: ${context.parsed.y.toLocaleString()}人`;
                        }
                    }
                }
            }
        }
    });
}

function createDailyPracticeUnitsChart() {
    const ctx = document.getElementById('dailyPracticeUnitsChart').getContext('2d');
    charts.dailyPracticeUnitsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: mockData.dates,
            datasets: [{
                label: '每日练习单位',
                data: mockData.dailyPracticeUnits,
                backgroundColor: 'rgba(236, 72, 153, 0.7)',
                borderColor: '#ec4899',
                borderWidth: 3,
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            ...chartOptions,
            scales: {
                ...chartOptions.scales,
                y: {
                    ...chartOptions.scales.y,
                    beginAtZero: true
                }
            },
            plugins: {
                ...chartOptions.plugins,
                tooltip: {
                    ...chartOptions.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            return `练习单位: ${context.parsed.y.toLocaleString()}家`;
                        }
                    }
                }
            }
        }
    });
}

function createDailyPracticeQuestionsChart() {
    const ctx = document.getElementById('dailyPracticeQuestionsChart').getContext('2d');
    charts.dailyPracticeQuestionsChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: mockData.dates,
            datasets: [{
                label: '每日练习题数',
                data: mockData.dailyPracticeQuestions,
                borderColor: '#f97316',
                backgroundColor: 'rgba(249, 115, 22, 0.1)',
                borderWidth: 4,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#f97316',
                pointBorderColor: '#fff',
                pointBorderWidth: 3,
                pointRadius: 8,
                pointHoverRadius: 12
            }]
        },
        options: {
            ...chartOptions,
            plugins: {
                ...chartOptions.plugins,
                tooltip: {
                    ...chartOptions.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            return `练习题数: ${context.parsed.y.toLocaleString()}题`;
                        }
                    }
                }
            }
        }
    });
}

function updateDailyPracticeStats() {
    const people = mockData.dailyPracticePeople[mockData.dailyPracticePeople.length - 1];
    const units = mockData.dailyPracticeUnits[mockData.dailyPracticeUnits.length - 1];
    const questions = mockData.dailyPracticeQuestions[mockData.dailyPracticeQuestions.length - 1];
    
    document.getElementById('dailyPracticePeople').textContent = people.toLocaleString();
    document.getElementById('dailyPracticeUnits').textContent = units.toLocaleString();
    document.getElementById('dailyPracticeQuestions').textContent = questions.toLocaleString();
}

function createDailyTrainingPeopleChart() {
    const ctx = document.getElementById('dailyTrainingPeopleChart').getContext('2d');
    charts.dailyTrainingPeopleChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: mockData.dates,
            datasets: [{
                label: '每日培训人数',
                data: mockData.dailyTrainingPeople,
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderWidth: 4,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#10b981',
                pointBorderColor: '#fff',
                pointBorderWidth: 3,
                pointRadius: 8,
                pointHoverRadius: 12
            }]
        },
        options: {
            ...chartOptions,
            plugins: {
                ...chartOptions.plugins,
                tooltip: {
                    ...chartOptions.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            return `培训人数: ${context.parsed.y.toLocaleString()}人`;
                        }
                    }
                }
            }
        }
    });
}

function createDailyTrainingUnitsChart() {
    const ctx = document.getElementById('dailyTrainingUnitsChart').getContext('2d');
    charts.dailyTrainingUnitsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: mockData.dates,
            datasets: [{
                label: '每日培训单位',
                data: mockData.dailyTrainingUnits,
                backgroundColor: 'rgba(6, 182, 212, 0.7)',
                borderColor: '#06b6d4',
                borderWidth: 3,
                borderRadius: 8,
                borderSkipped: false
            }]
        },
        options: {
            ...chartOptions,
            scales: {
                ...chartOptions.scales,
                y: {
                    ...chartOptions.scales.y,
                    beginAtZero: true
                }
            },
            plugins: {
                ...chartOptions.plugins,
                tooltip: {
                    ...chartOptions.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            return `培训单位: ${context.parsed.y.toLocaleString()}家`;
                        }
                    }
                }
            }
        }
    });
}

function createDailyTrainingTrafficChart() {
    const ctx = document.getElementById('dailyTrainingTrafficChart').getContext('2d');
    charts.dailyTrainingTrafficChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: mockData.dates,
            datasets: [{
                label: '每日培训流量',
                data: mockData.dailyTrainingTraffic,
                borderColor: '#10b981',
                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                borderWidth: 4,
                fill: true,
                tension: 0.4,
                pointBackgroundColor: '#10b981',
                pointBorderColor: '#fff',
                pointBorderWidth: 3,
                pointRadius: 8,
                pointHoverRadius: 12
            }]
        },
        options: {
            ...chartOptions,
            plugins: {
                ...chartOptions.plugins,
                tooltip: {
                    ...chartOptions.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            return `培训流量: ${context.parsed.y}GB`;
                        }
                    }
                }
            }
        }
    });
}

function updateDailyTrainingStats() {
    const people = mockData.dailyTrainingPeople[mockData.dailyTrainingPeople.length - 1];
    const units = mockData.dailyTrainingUnits[mockData.dailyTrainingUnits.length - 1];
    const traffic = mockData.dailyTrainingTraffic[mockData.dailyTrainingTraffic.length - 1];
    
    document.getElementById('dailyTrainingPeople').textContent = people.toLocaleString();
    document.getElementById('dailyTrainingUnits').textContent = units.toLocaleString();
    document.getElementById('dailyTrainingTraffic').textContent = traffic;
}

function createComparisonChart(type = 'line') {
    const ctx = document.getElementById('comparisonChart').getContext('2d');
    
    if (charts.comparisonChart) {
        charts.comparisonChart.destroy();
    }

    charts.comparisonChart = new Chart(ctx, {
        type: type,
        data: {
            labels: mockData.dates,
            datasets: [
                {
                    label: '考试系统',
                    data: mockData.examData,
                    borderColor: chartColors.blue.primary,
                    backgroundColor: type === 'bar' ? chartColors.blue.medium : chartColors.blue.light,
                    borderWidth: 4,
                    fill: type === 'line' ? true : false,
                    tension: 0.4,
                    pointBackgroundColor: chartColors.blue.primary,
                    pointBorderColor: '#fff',
                    pointBorderWidth: 3,
                    pointRadius: type === 'line' ? 7 : 0,
                    pointHoverRadius: type === 'line' ? 10 : 0,
                    borderRadius: type === 'bar' ? 6 : 0,
                    borderSkipped: false
                },
                {
                    label: '图书馆平台',
                    data: mockData.libraryData,
                    borderColor: chartColors.green.primary,
                    backgroundColor: type === 'bar' ? chartColors.green.medium : chartColors.green.light,
                    borderWidth: 4,
                    fill: type === 'line' ? true : false,
                    tension: 0.4,
                    pointBackgroundColor: chartColors.green.primary,
                    pointBorderColor: '#fff',
                    pointBorderWidth: 3,
                    pointRadius: type === 'line' ? 7 : 0,
                    pointHoverRadius: type === 'line' ? 10 : 0,
                    borderRadius: type === 'bar' ? 6 : 0,
                    borderSkipped: false
                }
            ]
        },
        options: {
            ...chartOptions,
            plugins: {
                ...chartOptions.plugins,
                tooltip: {
                    ...chartOptions.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.parsed.y.toLocaleString()}`;
                        }
                    }
                }
            }
        }
    });
}

function createYearOnYearChart() {
    const ctx = document.getElementById('yearOnYearChart').getContext('2d');
    charts.yearOnYearChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['考试系统', '图书馆平台'],
            datasets: [
                {
                    label: '本月',
                    data: [15234, 8765],
                    backgroundColor: chartColors.blue.medium,
                    borderColor: chartColors.blue.primary,
                    borderWidth: 2,
                    borderRadius: 8,
                    borderSkipped: false
                },
                {
                    label: '去年同期',
                    data: [12100, 6980],
                    backgroundColor: chartColors.gray.medium,
                    borderColor: chartColors.gray.primary,
                    borderWidth: 2,
                    borderRadius: 8,
                    borderSkipped: false
                }
            ]
        },
        options: {
            ...chartOptions,
            scales: {
                ...chartOptions.scales,
                y: {
                    ...chartOptions.scales.y,
                    beginAtZero: true
                }
            },
            plugins: {
                ...chartOptions.plugins,
                tooltip: {
                    ...chartOptions.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.parsed.y.toLocaleString()}`;
                        }
                    }
                }
            }
        }
    });
}

function createMonthOnMonthChart() {
    const ctx = document.getElementById('monthOnMonthChart').getContext('2d');
    charts.monthOnMonthChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['考试系统', '图书馆平台'],
            datasets: [
                {
                    label: '本月',
                    data: [15234, 8765],
                    backgroundColor: chartColors.green.medium,
                    borderColor: chartColors.green.primary,
                    borderWidth: 2,
                    borderRadius: 8,
                    borderSkipped: false
                },
                {
                    label: '上月',
                    data: [13890, 7920],
                    backgroundColor: chartColors.gray.medium,
                    borderColor: chartColors.gray.primary,
                    borderWidth: 2,
                    borderRadius: 8,
                    borderSkipped: false
                }
            ]
        },
        options: {
            ...chartOptions,
            scales: {
                ...chartOptions.scales,
                y: {
                    ...chartOptions.scales.y,
                    beginAtZero: true
                }
            },
            plugins: {
                ...chartOptions.plugins,
                tooltip: {
                    ...chartOptions.plugins.tooltip,
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.parsed.y.toLocaleString()}`;
                        }
                    }
                }
            }
        }
    });
}

function createExamCustomerChart(type = 'bar') {
    const ctx = document.getElementById('examCustomerChart').getContext('2d');
    
    if (charts.examCustomerChart) {
        charts.examCustomerChart.destroy();
    }

    const labels = mockData.examCustomers.map(c => c.name.substring(0, 8) + (c.name.length > 8 ? '...' : ''));
    const data = mockData.examCustomers.map(c => c.count);

    charts.examCustomerChart = new Chart(ctx, {
        type: type === 'horizontal' ? 'bar' : 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: '考试人数',
                data: data,
                backgroundColor: data.map((_, index) => {
                    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                    gradient.addColorStop(0, chartColors.blue.primary);
                    gradient.addColorStop(1, chartColors.blue.secondary);
                    return chartColors.blue.medium;
                }),
                borderColor: chartColors.blue.primary,
                borderWidth: 2,
                borderRadius: type === 'horizontal' ? 6 : 8,
                borderSkipped: false
            }]
        },
        options: {
            ...chartOptions,
            indexAxis: type === 'horizontal' ? 'y' : 'x',
            plugins: {
                ...chartOptions.plugins,
                legend: {
                    ...chartOptions.plugins.legend,
                    display: false
                },
                tooltip: {
                    ...chartOptions.plugins.tooltip,
                    callbacks: {
                        title: function(context) {
                            const index = context[0].dataIndex;
                            return mockData.examCustomers[index].name;
                        },
                        label: function(context) {
                            const index = context.dataIndex;
                            const customer = mockData.examCustomers[index];
                            return [
                                `考试人数: ${customer.count}人`,
                                `参与次数: ${customer.participations}次`
                            ];
                        }
                    }
                }
            },
            scales: {
                y: {
                    ...chartOptions.scales.y,
                    beginAtZero: true
                }
            }
        }
    });
}

function createPracticeCustomerChart(type = 'bar') {
    const ctx = document.getElementById('practiceCustomerChart').getContext('2d');
    
    if (charts.practiceCustomerChart) {
        charts.practiceCustomerChart.destroy();
    }

    const labels = mockData.practiceCustomers.map(c => c.name.substring(0, 8) + (c.name.length > 8 ? '...' : ''));
    const data = mockData.practiceCustomers.map(c => c.count);

    charts.practiceCustomerChart = new Chart(ctx, {
        type: type === 'horizontal' ? 'bar' : 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: '练习人数',
                data: data,
                backgroundColor: chartColors.purple.medium,
                borderColor: chartColors.purple.primary,
                borderWidth: 2,
                borderRadius: type === 'horizontal' ? 6 : 8,
                borderSkipped: false
            }]
        },
        options: {
            ...chartOptions,
            indexAxis: type === 'horizontal' ? 'y' : 'x',
            plugins: {
                ...chartOptions.plugins,
                legend: {
                    ...chartOptions.plugins.legend,
                    display: false
                },
                tooltip: {
                    ...chartOptions.plugins.tooltip,
                    callbacks: {
                        title: function(context) {
                            const index = context[0].dataIndex;
                            return mockData.practiceCustomers[index].name;
                        },
                        label: function(context) {
                            const index = context.dataIndex;
                            const customer = mockData.practiceCustomers[index];
                            return [
                                `练习人数: ${customer.count}人`,
                                `参与次数: ${customer.participations}次`
                            ];
                        }
                    }
                }
            },
            scales: {
                y: {
                    ...chartOptions.scales.y,
                    beginAtZero: true
                }
            }
        }
    });
}

function createTrainingCustomerChart(type = 'bar') {
    const ctx = document.getElementById('trainingCustomerChart').getContext('2d');
    
    if (charts.trainingCustomerChart) {
        charts.trainingCustomerChart.destroy();
    }

    const labels = mockData.trainingCustomers.map(c => c.name.substring(0, 8) + (c.name.length > 8 ? '...' : ''));
    const data = mockData.trainingCustomers.map(c => c.count);

    charts.trainingCustomerChart = new Chart(ctx, {
        type: type === 'horizontal' ? 'bar' : 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: '培训人数',
                data: data,
                backgroundColor: chartColors.green.medium,
                borderColor: chartColors.green.primary,
                borderWidth: 2,
                borderRadius: type === 'horizontal' ? 6 : 8,
                borderSkipped: false
            }]
        },
        options: {
            ...chartOptions,
            indexAxis: type === 'horizontal' ? 'y' : 'x',
            plugins: {
                ...chartOptions.plugins,
                legend: {
                    ...chartOptions.plugins.legend,
                    display: false
                },
                tooltip: {
                    ...chartOptions.plugins.tooltip,
                    callbacks: {
                        title: function(context) {
                            const index = context[0].dataIndex;
                            return mockData.trainingCustomers[index].name;
                        },
                        label: function(context) {
                            const index = context.dataIndex;
                            const customer = mockData.trainingCustomers[index];
                            return [
                                `培训人数: ${customer.count}人`,
                                `参与次数: ${customer.participations}次`
                            ];
                        }
                    }
                }
            },
            scales: {
                y: {
                    ...chartOptions.scales.y,
                    beginAtZero: true
                }
            }
        }
    });
}

function initButtons() {
    document.querySelectorAll('.chart-type-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const chart = this.getAttribute('data-chart');
            const type = this.getAttribute('data-type');
            
            const colorMap = {
                'exam': { active: 'bg-blue-500 text-white', inactive: 'bg-gray-200 text-gray-700' },
                'practice': { active: 'bg-purple-500 text-white', inactive: 'bg-gray-200 text-gray-700' },
                'training': { active: 'bg-green-500 text-white', inactive: 'bg-gray-200 text-gray-700' }
            };
            
            document.querySelectorAll(`.chart-type-btn[data-chart="${chart}"]`).forEach(b => {
                b.classList.remove(...colorMap[chart].active.split(' '));
                b.classList.add(...colorMap[chart].inactive.split(' '));
            });
            
            this.classList.remove(...colorMap[chart].inactive.split(' '));
            this.classList.add(...colorMap[chart].active.split(' '));
            
            if (chart === 'exam') {
                createExamCustomerChart(type);
            } else if (chart === 'practice') {
                createPracticeCustomerChart(type);
            } else if (chart === 'training') {
                createTrainingCustomerChart(type);
            }
        });
    });

    document.getElementById('refreshBtn').addEventListener('click', function() {
        refreshData();
    });

    document.getElementById('dateRange').addEventListener('change', function() {
        updateDateRange(this.value);
    });
}

function refreshData() {
    const btn = document.getElementById('refreshBtn');
    btn.disabled = true;
    btn.innerHTML = '<i class="fa fa-spinner fa-spin mr-2"></i>刷新中...';
    
    setTimeout(() => {
        Object.keys(mockData).forEach(key => {
            if (Array.isArray(mockData[key]) && typeof mockData[key][0] === 'number') {
                mockData[key] = mockData[key].map(val => 
                    Math.round(val * (0.95 + Math.random() * 0.1))
                );
            }
        });
        
        charts.examChart.data.datasets[0].data = mockData.examData;
        charts.examChart.update('active');
        
        charts.libraryChart.data.datasets[0].data = mockData.libraryData;
        charts.libraryChart.update('active');
        
        if (charts.libraryVisitChart) {
            charts.libraryVisitChart.data.datasets[0].data = mockData.libraryVisitData;
            charts.libraryVisitChart.update('active');
        }
        
        if (charts.libraryDownloadChart) {
            charts.libraryDownloadChart.data.datasets[0].data = mockData.libraryDownloadData;
            charts.libraryDownloadChart.update('active');
        }
        
        if (charts.dailyExamPeopleChart) {
            charts.dailyExamPeopleChart.data.datasets[0].data = mockData.dailyExamPeople;
            charts.dailyExamPeopleChart.update('active');
        }
        
        if (charts.dailyExamSessionsChart) {
            charts.dailyExamSessionsChart.data.datasets[0].data = mockData.dailyExamSessions;
            charts.dailyExamSessionsChart.update('active');
        }
        
        if (charts.dailyExamUnitsChart) {
            charts.dailyExamUnitsChart.data.datasets[0].data = mockData.dailyExamUnits;
            charts.dailyExamUnitsChart.update('active');
        }
        
        if (charts.dailyPracticePeopleChart) {
            charts.dailyPracticePeopleChart.data.datasets[0].data = mockData.dailyPracticePeople;
            charts.dailyPracticePeopleChart.update('active');
        }
        
        if (charts.dailyPracticeUnitsChart) {
            charts.dailyPracticeUnitsChart.data.datasets[0].data = mockData.dailyPracticeUnits;
            charts.dailyPracticeUnitsChart.update('active');
        }
        
        if (charts.dailyPracticeQuestionsChart) {
            charts.dailyPracticeQuestionsChart.data.datasets[0].data = mockData.dailyPracticeQuestions;
            charts.dailyPracticeQuestionsChart.update('active');
        }
        
        if (charts.dailyTrainingPeopleChart) {
            charts.dailyTrainingPeopleChart.data.datasets[0].data = mockData.dailyTrainingPeople;
            charts.dailyTrainingPeopleChart.update('active');
        }
        
        if (charts.dailyTrainingUnitsChart) {
            charts.dailyTrainingUnitsChart.data.datasets[0].data = mockData.dailyTrainingUnits;
            charts.dailyTrainingUnitsChart.update('active');
        }
        
        if (charts.dailyTrainingTrafficChart) {
            charts.dailyTrainingTrafficChart.data.datasets[0].data = mockData.dailyTrainingTraffic;
            charts.dailyTrainingTrafficChart.update('active');
        }
        
        document.getElementById('examTotal').textContent = mockData.examData[mockData.examData.length - 1].toLocaleString();
        document.getElementById('libraryTotal').textContent = mockData.libraryData[mockData.libraryData.length - 1].toLocaleString();
        updateDailyExamStats();
        updateDailyPracticeStats();
        updateDailyTrainingStats();
        
        btn.disabled = false;
        btn.innerHTML = '<i class="fa fa-refresh mr-2"></i>刷新数据';
    }, 1000);
}

function updateDateRange(days) {
    const labels = [];
    for (let i = days - 1; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        labels.push(`${date.getMonth() + 1}月${date.getDate()}日`);
    }
    
    mockData.dates = labels;
    mockData.examData = Array.from({length: days}, () => Math.round(380000 + Math.random() * 10000));
    mockData.libraryData = Array.from({length: days}, () => Math.round(100000 + Math.random() * 10000));
    mockData.libraryVisitData = Array.from({length: days}, () => Math.round(8000 + Math.random() * 3000));
    mockData.libraryDownloadData = Array.from({length: days}, () => Math.round(3000 + Math.random() * 2000));
    mockData.dailyExamPeople = Array.from({length: days}, () => Math.round(9000 + Math.random() * 5000));
    mockData.dailyExamSessions = Array.from({length: days}, () => Math.round(2500 + Math.random() * 1500));
    mockData.dailyExamUnits = Array.from({length: days}, () => Math.round(100 + Math.random() * 80));
    mockData.dailyPracticePeople = Array.from({length: days}, () => Math.round(14000 + Math.random() * 6000));
    mockData.dailyPracticeUnits = Array.from({length: days}, () => Math.round(180 + Math.random() * 80));
    mockData.dailyPracticeQuestions = Array.from({length: days}, () => Math.round(180000 + Math.random() * 80000));
    mockData.dailyTrainingPeople = Array.from({length: days}, () => Math.round(6000 + Math.random() * 3000));
    mockData.dailyTrainingUnits = Array.from({length: days}, () => Math.round(70 + Math.random() * 40));
    mockData.dailyTrainingTraffic = Array.from({length: days}, () => parseFloat((60 + Math.random() * 40).toFixed(1)));
    
    charts.examChart.data.labels = labels;
    charts.examChart.data.datasets[0].data = mockData.examData;
    charts.examChart.update('active');
    
    charts.libraryChart.data.labels = labels;
    charts.libraryChart.data.datasets[0].data = mockData.libraryData;
    charts.libraryChart.update('active');
    
    if (charts.libraryVisitChart) {
        charts.libraryVisitChart.data.labels = labels;
        charts.libraryVisitChart.data.datasets[0].data = mockData.libraryVisitData;
        charts.libraryVisitChart.update('active');
    }
    
    if (charts.libraryDownloadChart) {
        charts.libraryDownloadChart.data.labels = labels;
        charts.libraryDownloadChart.data.datasets[0].data = mockData.libraryDownloadData;
        charts.libraryDownloadChart.update('active');
    }
    
    if (charts.dailyExamPeopleChart) {
        charts.dailyExamPeopleChart.data.labels = labels;
        charts.dailyExamPeopleChart.data.datasets[0].data = mockData.dailyExamPeople;
        charts.dailyExamPeopleChart.update('active');
    }
    
    if (charts.dailyExamSessionsChart) {
        charts.dailyExamSessionsChart.data.labels = labels;
        charts.dailyExamSessionsChart.data.datasets[0].data = mockData.dailyExamSessions;
        charts.dailyExamSessionsChart.update('active');
    }
    
    if (charts.dailyExamUnitsChart) {
        charts.dailyExamUnitsChart.data.labels = labels;
        charts.dailyExamUnitsChart.data.datasets[0].data = mockData.dailyExamUnits;
        charts.dailyExamUnitsChart.update('active');
    }
    
    if (charts.dailyPracticePeopleChart) {
        charts.dailyPracticePeopleChart.data.labels = labels;
        charts.dailyPracticePeopleChart.data.datasets[0].data = mockData.dailyPracticePeople;
        charts.dailyPracticePeopleChart.update('active');
    }
    
    if (charts.dailyPracticeUnitsChart) {
        charts.dailyPracticeUnitsChart.data.labels = labels;
        charts.dailyPracticeUnitsChart.data.datasets[0].data = mockData.dailyPracticeUnits;
        charts.dailyPracticeUnitsChart.update('active');
    }
    
    if (charts.dailyPracticeQuestionsChart) {
        charts.dailyPracticeQuestionsChart.data.labels = labels;
        charts.dailyPracticeQuestionsChart.data.datasets[0].data = mockData.dailyPracticeQuestions;
        charts.dailyPracticeQuestionsChart.update('active');
    }
    
    if (charts.dailyTrainingPeopleChart) {
        charts.dailyTrainingPeopleChart.data.labels = labels;
        charts.dailyTrainingPeopleChart.data.datasets[0].data = mockData.dailyTrainingPeople;
        charts.dailyTrainingPeopleChart.update('active');
    }
    
    if (charts.dailyTrainingUnitsChart) {
        charts.dailyTrainingUnitsChart.data.labels = labels;
        charts.dailyTrainingUnitsChart.data.datasets[0].data = mockData.dailyTrainingUnits;
        charts.dailyTrainingUnitsChart.update('active');
    }
    
    if (charts.dailyTrainingTrafficChart) {
        charts.dailyTrainingTrafficChart.data.labels = labels;
        charts.dailyTrainingTrafficChart.data.datasets[0].data = mockData.dailyTrainingTraffic;
        charts.dailyTrainingTrafficChart.update('active');
    }
    
    updateDailyExamStats();
    updateDailyPracticeStats();
    updateDailyTrainingStats();
}

function initTables() {
    renderExamCustomerTable('examCustomerTable', mockData.examCustomers);
    renderPracticeCustomerTable('practiceCustomerTable', mockData.practiceCustomers);
    renderTrainingCustomerTable('trainingCustomerTable', mockData.trainingCustomers);
}

function renderExamCustomerTable(tableId, customers) {
    const tbody = document.getElementById(tableId);
    tbody.innerHTML = customers.map((customer, index) => {
        let rankClass = 'rank-default';
        if (index === 0) rankClass = 'rank-1';
        else if (index === 1) rankClass = 'rank-2';
        else if (index === 2) rankClass = 'rank-3';
        
        let trendHtml = '';
        if (customer.trend === 'up') {
            trendHtml = '<span class="trend-up"><i class="fa fa-arrow-up"></i> 上升</span>';
        } else if (customer.trend === 'down') {
            trendHtml = '<span class="trend-down"><i class="fa fa-arrow-down"></i> 下降</span>';
        } else {
            trendHtml = '<span class="trend-stable"><i class="fa fa-minus"></i> 持平</span>';
        }
        
        let signedCustomerClass = 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30';
        if (customer.signedCustomer === '未签单客户') {
            signedCustomerClass = 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
        }
        
        let trainingStatusClass = 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30';
        if (customer.trainingStatus === '试用已到期') {
            trainingStatusClass = 'bg-amber-500/20 text-amber-400 border border-amber-500/30';
        } else if (customer.trainingStatus === '未开通试用') {
            trainingStatusClass = 'bg-gray-500/20 text-gray-400 border border-gray-500/30';
        }
        
        return `
            <tr>
                <td><span class="${rankClass}">${index + 1}</span></td>
                <td class="font-medium text-blue-600">${customer.name}</td>
                <td class="font-bold text-blue-600">${customer.count}</td>
                <td class="text-blue-600">${customer.participations}</td>
                <td><span class="px-2 py-1 rounded text-xs ${signedCustomerClass}">${customer.signedCustomer}</span></td>
                <td><span class="px-2 py-1 rounded text-xs ${trainingStatusClass}">${customer.trainingStatus}</span></td>
                <td class="text-gray-400">${customer.manager}</td>
                <td>${trendHtml}</td>
            </tr>
        `;
    }).join('');
}

function renderPracticeCustomerTable(tableId, customers) {
    const tbody = document.getElementById(tableId);
    tbody.innerHTML = customers.map((customer, index) => {
        let rankClass = 'rank-default';
        if (index === 0) rankClass = 'rank-1';
        else if (index === 1) rankClass = 'rank-2';
        else if (index === 2) rankClass = 'rank-3';
        
        let trendHtml = '';
        if (customer.trend === 'up') {
            trendHtml = '<span class="trend-up"><i class="fa fa-arrow-up"></i> 上升</span>';
        } else if (customer.trend === 'down') {
            trendHtml = '<span class="trend-down"><i class="fa fa-arrow-down"></i> 下降</span>';
        } else {
            trendHtml = '<span class="trend-stable"><i class="fa fa-minus"></i> 持平</span>';
        }
        
        return `
            <tr>
                <td><span class="${rankClass}">${index + 1}</span></td>
                <td class="font-medium text-blue-600">${customer.name}</td>
                <td class="font-bold text-blue-600">${customer.count}</td>
                <td class="text-blue-600">${customer.participations}</td>
                <td class="text-gray-400">${customer.manager}</td>
                <td>${trendHtml}</td>
            </tr>
        `;
    }).join('');
}

function renderTrainingCustomerTable(tableId, customers) {
    const tbody = document.getElementById(tableId);
    tbody.innerHTML = customers.map((customer, index) => {
        let rankClass = 'rank-default';
        if (index === 0) rankClass = 'rank-1';
        else if (index === 1) rankClass = 'rank-2';
        else if (index === 2) rankClass = 'rank-3';
        
        let trendHtml = '';
        if (customer.trend === 'up') {
            trendHtml = '<span class="trend-up"><i class="fa fa-arrow-up"></i> 上升</span>';
        } else if (customer.trend === 'down') {
            trendHtml = '<span class="trend-down"><i class="fa fa-arrow-down"></i> 下降</span>';
        } else {
            trendHtml = '<span class="trend-stable"><i class="fa fa-minus"></i> 持平</span>';
        }
        
        let signedCustomerClass = 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30';
        if (customer.signedCustomer === '潜在客户') {
            signedCustomerClass = 'bg-purple-500/20 text-purple-400 border border-purple-500/30';
        }
        
        return `
            <tr>
                <td><span class="${rankClass}">${index + 1}</span></td>
                <td class="font-medium text-blue-600">${customer.name}</td>
                <td class="font-bold text-blue-600">${customer.count}</td>
                <td class="text-blue-600">${customer.usedTraffic} GB</td>
                <td class="text-blue-600">${customer.remainingTraffic} GB</td>
                <td><span class="px-2 py-1 rounded text-xs ${signedCustomerClass}">${customer.signedCustomer}</span></td>
                <td class="text-gray-400">${customer.manager}</td>
                <td>${trendHtml}</td>
            </tr>
        `;
    }).join('');
}

function renderCustomerTable(tableId, customers) {
    const tbody = document.getElementById(tableId);
    tbody.innerHTML = customers.map((customer, index) => {
        let rankClass = 'rank-default';
        if (index === 0) rankClass = 'rank-1';
        else if (index === 1) rankClass = 'rank-2';
        else if (index === 2) rankClass = 'rank-3';
        
        let trendHtml = '';
        if (customer.trend === 'up') {
            trendHtml = '<span class="trend-up"><i class="fa fa-arrow-up"></i> 上升</span>';
        } else if (customer.trend === 'down') {
            trendHtml = '<span class="trend-down"><i class="fa fa-arrow-down"></i> 下降</span>';
        } else {
            trendHtml = '<span class="trend-stable"><i class="fa fa-minus"></i> 持平</span>';
        }
        
        return `
            <tr>
                <td><span class="${rankClass}">${index + 1}</span></td>
                <td class="font-medium">${customer.name}</td>
                <td class="font-bold text-blue-600">${customer.count}</td>
                <td>${customer.participations}</td>
                <td>${trendHtml}</td>
            </tr>
        `;
    }).join('');
}

function updateCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    document.getElementById('currentDate').textContent = `${year}年${month}月${day}日`;
}
