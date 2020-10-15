const report = require('multiple-cucumber-html-reporter');
const reportTitle = "TestCafe DA Test Suite HTML Report";

report.generate({
    jsonDir: 'reports',
    reportPath: 'reports/combined',
    disableLog: true,
    pageTitle: reportTitle,
    reportName: reportTitle,
    displayDuration: true,
    durationInMS: false,
    saveCollectedJSON: true
});

