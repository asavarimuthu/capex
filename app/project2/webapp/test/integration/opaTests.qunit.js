sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'project2/test/integration/FirstJourney',
		'project2/test/integration/pages/cirlineitemList',
		'project2/test/integration/pages/cirlineitemObjectPage'
    ],
    function(JourneyRunner, opaJourney, cirlineitemList, cirlineitemObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('project2') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThecirlineitemList: cirlineitemList,
					onThecirlineitemObjectPage: cirlineitemObjectPage
                }
            },
            opaJourney.run
        );
    }
);