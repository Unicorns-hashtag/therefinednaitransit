function addActivity(message) {

    const activities =
        JSON.parse(localStorage.getItem("activities")) || [];

    activities.unshift({
        message: message,
        date: new Date().toLocaleString()
    });

    localStorage.setItem(
        "activities",
        JSON.stringify(activities)
    );
}