({
	doInit : function(component, event, helper) {
		let events=component.get("v.Events");
        let tasks=component.get("v.Tasks");
        let pendingTasks=tasks.filter(task => task.Status != 'Completed');
        component.set("v.pendingTasksCount",pendingTasks.length);
        let activities=events.concat(tasks);
        let today = $A.localizationService.formatDate(new Date(), "YYYY-MM-DD");
        let upcomingEvents=events.filter(events => events.ActivityDate >= today);
        component.set("v.upcomingEvents",upcomingEvents.length);
        console.log(upcomingEvents.length);
        activities=activities.sort(function(element1, element2) {
           return  new Date(element1.ActivityDate).getTime() - new Date(element2.ActivityDate).getTime();
        });
        console.log(activities);
        component.set('v.Activities',activities);


	}
})