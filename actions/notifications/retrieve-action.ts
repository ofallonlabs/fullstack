"use server";

export async function RetrieveNotificationsAction(userId: number){
    console.log("RetrieveNotificationsAction IS CALLED", userId);
    return {
        solutions :  [
          { name: 'Analytics', description: '(ACTION) Get a better understanding of your traffic', href: '#', icon: 'ChartPieIcon' },
          { name: 'Analytics 2', description: '(ACTION) Get a better understanding of your traffic', href: '#', icon: 'ChartPieIcon' }
        ],
        callsToAction : [
          { name: 'Watch demo', href: '#', icon: 'PlayCircleIcon' }
        ]
    }

}